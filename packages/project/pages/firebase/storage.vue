<template>
  <section class="main">
    <input id="files" type="file" name="file" accept="image/*" v-if="!uploading && !deleting" @change="selectImage($event)">
    <p v-if="uploading">{{ uploadPercent }} %</p>
    <ul>
      <li v-for="image in images" :key="image['.key']">
        <img class="thumbnail" width="auto" height="100px" :src="image.url">
        <p class="description">
          <span>{{ image.name }}</span>
          <button type="button" class="button" @click="removeImage(image)">삭제</button>
        </p>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import { storage, imagesRef } from '~/scripts/firebase'

export default {
  name: 'Storage',
  data () {
    return {
      uploadPercent: 0,
      uploadFile: '',
      uploadTask: '',
      uploading: false,
      deleting: false
    }
  },
  computed: {
    ...mapGetters({
      images: 'images/images'
    })
  },
  watch: {
    uploadTask () {
      this.uploadTask.on('state_changed',
        // 진행
        snapshot => {
          this.uploadPercent = Math.floor(snapshot.bytesTransferred / snapshot.totalBytes * 100)
        },
        // 에러
        error => {
          console.log(error)
        },
        // 완료
        () => {
          this.uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
            imagesRef.orderByChild('name').equalTo(this.uploadFile).once('value', snapshot => {
              if (!snapshot.val()) { // 새로운 이미지
                imagesRef.push({
                  name: this.uploadFile,
                  url: downloadURL
                })
              } else { // 기존 이미지
                snapshot.forEach(data => {
                  imagesRef.child(data.key).child('url').set(downloadURL)
                })
              }

              this.uploadFile = ''
              this.uploading = false
            })
          })
        })
    }
  },
  created () {
    this.$store.dispatch('images/setImagesRef', imagesRef)
  },
  methods: {
    selectImage (e) {
      const fileList = e.target.files || e.dataTransfer.files
      Array.from(Array(fileList.length).keys()).map(x => this.addImage(fileList[x]))
    },
    addImage (file) {
      this.uploading = true
      this.uploadFile = file.name
      this.uploadTask = storage.ref('images/' + file.name).put(file)
    },
    removeImage (image) {
      this.deleting = true
      imagesRef.child(image['.key']).remove()
      storage.ref('images/' + image.name).delete()
      this.deleting = false
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  margin: 10px 0 0 20px;
  li {
    list-style: square;
  }
}
.thumbnail, .description {
  display: inline-block;
}
</style>
