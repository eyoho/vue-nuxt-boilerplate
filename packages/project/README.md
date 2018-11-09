> 필요한 모듈 외에 추가적으로 사용할 모듈은 `release` 브랜치에서 `merge`해서 사용합니다.
> * release/add-axios: `axios`, `vue-api-query`
> * release/add-rxjs: `axios`, `vue-api-query`, `rxjs`, `vue-rx`
> * release/add-persistedstate: `vuex-persistedstate`
> * release/add-firebase: `firebase`, `vuexfire`

### 명령어

[https://ko.nuxtjs.org/guide/commands](https://ko.nuxtjs.org/guide/commands "https://ko.nuxtjs.org/guide/commands")

* **nuxt**: 개발서버를 핫 리로딩 상태로 `localhost:3000`에 시작합니다.
* **nuxt build**: Webpack을 통해 어플리케이션을 빌드하며, CSS와 JS를 최소화하는 작업을 진행합니다. (프로덕션 용)
* **nuxt start**: `nuxt build`를 실행한 후에 프로덕션 모드로 서버를 시작합니다.
* **nuxt generate**: 어플리케이션을 빌드하고 모든 라우트를 HTML 파일로 생성합니다. (정적 호스팅에 사용)

### 디렉토리 구조

[https://ko.nuxtjs.org/guide/directory-structure](https://ko.nuxtjs.org/guide/directory-structure "https://ko.nuxtjs.org/guide/directory-structure")

* **assets**: LESS, SASS, Javascript 같은 컴파일되지 않은 에셋들을 포함하는 디렉토리 입니다. `assets/img/sprite` 디렉토리와 `assets/scss` 디렉토리는 `watch` 대상입니다. 변동사항이 있을 경우 자동으로 스프라이트와 SCSS를 컴파일합니다.
[https://ko.nuxtjs.org/guide/assets/](https://ko.nuxtjs.org/guide/assets/ "https://ko.nuxtjs.org/guide/assets/")
* **components**: Vue 컴포넌트를 포함하는 디렉토리 입니다.
* **directives**: 사용자 디렉티브를 포함하는 디렉토리 입니다.
* **filters**: 필터 파일을 포함하는 디렉토리 입니다.
* **layouts**: 애플리케이션의 레이아웃을 포함하는 디렉토리 입니다.
[https://ko.nuxtjs.org/guide/views/#layouts](https://ko.nuxtjs.org/guide/views/#layouts "https://ko.nuxtjs.org/guide/views/#layouts")
* **locales**: 다국어 `json` 파일을 포함하는 디렉토리 입니다.
* **middleware**: 애플리케이션의 미들웨어를 포함하는 디렉토리 입니다. 미들웨어는 페이지나 레이아웃이 렌더링되기 전에 실행할 사용자 정의 함수를 정의할 수 있습니다.
[https://ko.nuxtjs.org/guide/routing/#middleware](https://ko.nuxtjs.org/guide/routing/#middleware "https://ko.nuxtjs.org/guide/routing/#middleware")
* **models**: API 모델을 포함하는 디렉토리 입니다. 자세한 내용은 model 디렉토리의 README를 참고하세요.
* **pages**: 애플리케이션의 뷰와 라우트를 포함하는 디렉토리 입니다. 폴더의 `.vue` 파일을 읽고 애플리케이션의 라우터를 자동으로 생성합니다.
[https://ko.nuxtjs.org/guide/views/](https://ko.nuxtjs.org/guide/views/ "https://ko.nuxtjs.org/guide/views/")
* **plugins**: 루트 `vue.js` 애플리케이션이 생성되기 전 실행하고 싶은 자바스크립트 플러그인을 포함하는 디렉토리 입니다. directive 파일도 포함됩니다.
[https://ko.nuxtjs.org/guide/plugins/](https://ko.nuxtjs.org/guide/plugins/ "https://ko.nuxtjs.org/guide/plugins/")
* **script**: 스크립트 파일을 포함하는 디렉토리입니다. sprite와 같은 로직이 들어있습니다.
* **static**: 정적 파일들을 포함하는 디렉토리 입니다. 이 디렉토리의 파일들은 `/`에 연결됩니다.
(예를 들어, `/static/robots.txt` 은 `/robots.txt` 로 연결됩니다.)
[https://ko.nuxtjs.org/guide/assets/#static](https://ko.nuxtjs.org/guide/assets/#static "https://ko.nuxtjs.org/guide/assets/#static")
* **store**: Vuex Store 파일을 포함하는 디렉토리 입니다. Vuex Store 옵션은 Nuxt.js 프레임워크에 의해 실행되며, index.js 파일을 생성하면 프레임워크가 자동으로 옵션을 활성화합니다.
[https://ko.nuxtjs.org/guide/vuex-store/](https://ko.nuxtjs.org/guide/vuex-store/ "https://ko.nuxtjs.org/guide/vuex-store/")
* **.editorconfig**: 에디터 설정 파일입니다.
* **.eslintrc.js**: 자바스크립트 린트 설정 파일입니다.
* **.gitignore**: 깃 예외 설정 파일입니다.
* **app.html**: 기본 html 템플릿 파일입니다.
* **nuxt.config.js**: Nuxt.js의 사용자 정의 설정을 포함하는 파일 입니다.
[https://ko.nuxtjs.org/guide/configuration/](https://ko.nuxtjs.org/guide/configuration/ "https://ko.nuxtjs.org/guide/configuration/")
* **package.json 파일**: 애플리케이션의 의존성과 스크립트를 포함하는 파일 입니다.

### 설정 (nuxt.config.js)

[https://ko.nuxtjs.org/guide/configuration](https://ko.nuxtjs.org/guide/configuration "https://ko.nuxtjs.org/guide/configuration")

* **build**: 생성 된 `vendor.bundle.js` 파일에 모듈을 추가하여 앱 번들의 크기를 줄일 수 있습니다. 외부 모듈을 사용할 때 정말 유용합니다.
[https://ko.nuxtjs.org/api/configuration-build/](https://ko.nuxtjs.org/api/configuration-build/ "https://ko.nuxtjs.org/api/configuration-build/")
* **cache**: 캐시된 컴포넌트를 사용하여 렌더링 성능을 향상시킬 수 있습니다.
[https://ko.nuxtjs.org/api/configuration-cache/](https://ko.nuxtjs.org/api/configuration-cache/ "https://ko.nuxtjs.org/api/configuration-cache/")
* **css**: 모든 페이지에서 전역으로 사용할 CSS파일 / 모듈 / 라이브러리 파일을 설정할 수 있습니다.
[https://ko.nuxtjs.org/api/configuration-css/](https://ko.nuxtjs.org/api/configuration-css/ "https://ko.nuxtjs.org/api/configuration-css/")
* **dev**: nuxt.js의 개발 또는 프로덕션 모드를 정의 할 수 있습니다.
[https://ko.nuxtjs.org/api/configuration-dev/](https://ko.nuxtjs.org/api/configuration-dev/ "https://ko.nuxtjs.org/api/configuration-dev/")
* **env**: 클라이언트 및 서버에서 사용 가능한 환경 변수를 정의 할 수 있습니다.
[https://ko.nuxtjs.org/api/configuration-env/](https://ko.nuxtjs.org/api/configuration-env/ "https://ko.nuxtjs.org/api/configuration-env/")
* **generate**: 어플리케이션에서 Nuxt.js가 HTML 파일로 변환할 모든 동적인 경로에 대한 각각의 params 값을 정의 할 수 있습니다.
[https://ko.nuxtjs.org/api/configuration-generate/](https://ko.nuxtjs.org/api/configuration-generate/ "https://ko.nuxtjs.org/api/configuration-generate/")
* **head**: 애플리케이션의 모든 기본 메타를 정의 할 수 있습니다.
[https://ko.nuxtjs.org/api/configuration-head/](https://ko.nuxtjs.org/api/configuration-head/ "https://ko.nuxtjs.org/api/configuration-head/")
* **loading**: Nuxt.js를 사용하여 기본적으로 불러올 loading 컴포넌트를 사용자 정의 할 수 있습니다.
[https://ko.nuxtjs.org/api/configuration-loading/](https://ko.nuxtjs.org/api/configuration-loading/ "https://ko.nuxtjs.org/api/configuration-loading/")
* **plugins**: 루트 vue.js 어플리케이션을 인스턴스화 하기 전에 실행할 Javascript 플러그인을 정의 할 수 있습니다.
[https://ko.nuxtjs.org/api/configuration-plugins/](https://ko.nuxtjs.org/api/configuration-plugins/ "https://ko.nuxtjs.org/api/configuration-plugins/")
* **rootDir**: nuxt.js 어플리케이션의 위치를 정의 할 수 있습니다.
[https://ko.nuxtjs.org/api/configuration-rootdir/](https://ko.nuxtjs.org/api/configuration-rootdir/ "https://ko.nuxtjs.org/api/configuration-rootdir/")
* **router**: vue-router의 기본적인 Nuxt.js 구성을 덮어 쓸 수 있습니다.
[https://ko.nuxtjs.org/api/configuration-router/](https://ko.nuxtjs.org/api/configuration-router/ "https://ko.nuxtjs.org/api/configuration-router/")
* **srcDir**: nuxt.js 어플리케이션의 src 디렉토리를 정의 할 수 있습니다.
[https://ko.nuxtjs.org/api/configuration-srcdir/](https://ko.nuxtjs.org/api/configuration-srcdir/ "https://ko.nuxtjs.org/api/configuration-srcdir/")
* **transition**: 페이지 transition 기능의 기본 속성을 정의 할 수 있습니다.
[https://ko.nuxtjs.org/api/configuration-transition/](https://ko.nuxtjs.org/api/configuration-transition/ "https://ko.nuxtjs.org/api/configuration-transition/")

### 별칭(Aliases)

| 별칭 | 디렉토리 |
| :-: | :-: |
| ~ or @ | srcDir |
| ~~ or @@ | rootDir |

> 현재 `srcDir`은 `rootDir`과 같습니다.

* IDE Declaration 설정

1. Settings > Languages & Frameworks > Javascript > Webpack
2. webpack configuration file
`C:\Workspace\project\webpack.config.js`

### 라우팅(routing)

[https://ko.nuxtjs.org/guide/routing](https://ko.nuxtjs.org/guide/routing "https://ko.nuxtjs.org/guide/routing")

`pages` 디렉토리 내의 Vue 파일 구조를 기반으로 `vue-router` 설정을 자동으로 생성합니다.

* 기본 라우트

```
pages/
--| user/
-----| index.vue
-----| one.vue
--| index.vue
```

```
router: {
  routes: [
    {
      name: 'index',
      path: '/',
      component: 'pages/index.vue'
    },
    {
      name: 'user',
      path: '/user',
      component: 'pages/user/index.vue'
    },
    {
      name: 'user-one',
      path: '/user/one',
      component: 'pages/user/one.vue'
    }
  ]
}
```

* 동적 라우트

파라메터가 있는 동적 라우트를 정의하기 위해서는 앞에 밑줄이 붙은 `.vue` 파일이나 폴더를 정의해야합니다.

```
pages/
--| _slug/
-----| comments.vue
-----| index.vue
--| users/
-----| _id.vue
--| index.vue
```

```
router: {
  routes: [
    {
      name: 'index',
      path: '/',
      component: 'pages/index.vue'
    },
    {
      name: 'users-id',
      path: '/users/:id?',
      component: 'pages/users/_id.vue'
    },
    {
      name: 'slug',
      path: '/:slug',
      component: 'pages/_slug/index.vue'
    },
    {
      name: 'slug-comments',
      path: '/:slug/comments',
      component: 'pages/_slug/comments.vue'
    }
  ]
}
```

* 라우트 파라메터의 유효성 체크

```javascript
// pages/users/_id.vue

export default {
  validate ({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id)
  }
}
```

* 기본 중첩 라우트

중첩 라우트의 부모 컴포넌트를 정의하기 위해서는 자식 뷰를 포함하고 있는 폴더와 같은 이름 으로 Vue 파일을 생성해야 합니다. 부모 컴포넌트에 `<nuxt-child/>` 태그를 사용해야함을 잊지마세요!

```
pages/
--| users/
-----| _id.vue
-----| index.vue
--| users.vue
```

```
router: {
  routes: [
    {
      path: '/users',
      component: 'pages/users.vue',
      children: [
        {
          path: '',
          component: 'pages/users/index.vue',
          name: 'users'
        },
        {
          path: ':id',
          component: 'pages/users/_id.vue',
          name: 'users-id'
        }
      ]
    }
  ]
}
```

* 동적 중첩 라우트

```
pages/
--| _category/
-----| _subCategory/
--------| _id.vue
--------| index.vue
-----| _subCategory.vue
-----| index.vue
--| _category.vue
--| index.vue
```

```
router: {
  routes: [
    {
      path: '/',
      component: 'pages/index.vue',
      name: 'index'
    },
    {
      path: '/:category',
      component: 'pages/_category.vue',
      children: [
        {
          path: '',
          component: 'pages/_category/index.vue',
          name: 'category'
        },
        {
          path: ':subCategory',
          component: 'pages/_category/_subCategory.vue',
          children: [
            {
              path: '',
              component: 'pages/_category/_subCategory/index.vue',
              name: 'category-subCategory'
            },
            {
              path: ':id',
              component: 'pages/_category/_subCategory/_id.vue',
              name: 'category-subCategory-id'
            }
          ]
        }
      ]
    }
  ]
}
```

### 레이아웃

`./layouts/{레이아웃타입}.vue` 파일 생성

```html
<template>
  <nuxt/>
</template>
```

### 페이지 키

* **asyncData**: 가장 중요한 키며 비동기적으로 만들 수 있고, 첫 번째 인자로 전달 받을 수도 있습니다.
[https://ko.nuxtjs.org/guide/async-data/](https://ko.nuxtjs.org/guide/async-data/ "https://ko.nuxtjs.org/guide/async-data/")
* **fetch**: 페이지가 렌더링되기 전에 스토어를 채우기위해 사용되며, 구성 요소 데이터를 설정하지 않는다는 점을 제외하면 `data` 메소드와 같습니다.
[https://ko.nuxtjs.org/api/pages-fetch/](https://ko.nuxtjs.org/api/pages-fetch/ "https://ko.nuxtjs.org/api/pages-fetch/")
* **head**: 현재 페이지에 대한 특정 메타 태그를 설정합니다.
[https://ko.nuxtjs.org/api/pages-head/](https://ko.nuxtjs.org/api/pages-head/ "https://ko.nuxtjs.org/api/pages-head/")
* **layout**: layouts 폴더에 정의된 레이아웃을 지정할 수 있습니다.
[https://ko.nuxtjs.org/api/pages-layout/](https://ko.nuxtjs.org/api/pages-layout/ "https://ko.nuxtjs.org/api/pages-layout/")
* **transition**: 페이지에 대한 특정 트랜지션을 설정합니다.
[https://ko.nuxtjs.org/api/pages-transition/](https://ko.nuxtjs.org/api/pages-transition/ "https://ko.nuxtjs.org/api/pages-transition/")
* **scrollToTop**: 기본값은 false 입니다. 페이지를 렌더링하기 전에 페이지를 맨 위로 스크롤할 것인지를 나타내며, 중첩 라우트를 위해 사용됩니다.
[https://ko.nuxtjs.org/guide/routing/#nested-routes](https://ko.nuxtjs.org/guide/routing/#nested-routes "https://ko.nuxtjs.org/guide/routing/#nested-routes")
* **validate**: 동적 라우트에 대한 유효성을 검사합니다.
[https://ko.nuxtjs.org/guide/routing/#dynamic-routes](https://ko.nuxtjs.org/guide/routing/#dynamic-routes "https://ko.nuxtjs.org/guide/routing/#dynamic-routes")
* **middleware**: 이 페이지에 대한 미들웨어를 설정하면, 미들웨어는 페이지를 렌더링하기 전에 호출됩니다.
[https://ko.nuxtjs.org/guide/routing/#middleware](https://ko.nuxtjs.org/guide/routing/#middleware "https://ko.nuxtjs.org/guide/routing/#middleware")

### 미들웨어

모든 미들웨어는 `middleware/` 디렉토리에 있어야합니다. 파일 이름은 곧 미들웨어의 이름이 됩니다. (예를 들어 `middleware/auth.js`는 `auth` 미들웨어가 됩니다.)

미들웨어는 `context`의 첫 인자로 전달받습니다.

```javascript
export default function (context) {
  context.userAgent = context.isServer ? context.req.headers['user-agent'] : navigator.userAgent
}
```

미들웨어는 아래의 세가지에서 순차적으로 실행됩니다.

1. nuxt.config.js
2. 매칭된 레이아웃
3. 매칭된 페이지

미들웨어는 비동기가 될 수 있고 간단하게 `Promise`를 반환하거나 2번째 인자인 `callback`을 사용할 수 있습니다.

```javascript
// middleware/stats.js

import axios from 'axios'

export default function ({ route }) {
  return axios.post('http://my-stats-api.com', {
    url: route.fullPath
  })
}
```

```javascript
// nuxt.config.js

module.exports = {
  router: {
    middleware: 'stats'
  }
}
```

`stats` 미들웨어는 경로가 변경될 때마다 실행될 것입니다.

### 메타 적용

* 공용

```javascript
// nuxt.config.js

head: {
  title: 'vue-boilerplate',
  meta: [
    { charset: 'utf-8' },
    (process.env.DEVICE_ENV === 'pc') && { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover, shrink-to-fit=no, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no' },
    { hid: 'description', name: 'description', content: 'project description' }
  ]
}
```

* 개별

```javascript
// 기본

head () {
  return {
    title: this.title,
    meta: [
      { hid: '유니크한 아이디', name: '설명', content: '내가 커스텀한 설명' }
    ]
  }
}

// 동적

head () {
  let user = this.user;
  return {
    title: `${user.fullName} @(${user.userName}) - Nuxt.js`,
    meta: [{
      hid: `iOSUrl`,
      property: 'al:ios:url',
      content: `myapp://user?screen_name=${user.userName}`
    },
    {
      hid: `description`,
      name: 'description',
      content: `${user.fullName}'s public profile at Nuxt.js`
    }]
  }
}
```

### Vuex Store

[https://ko.nuxtjs.org/guide/vuex-store](https://ko.nuxtjs.org/guide/vuex-store "https://ko.nuxtjs.org/guide/vuex-store")

`store` 디렉토리에 `index.js` 파일을 생성하면 프레임워크의 옵션이 자동으로 활성화됩니다. `store` 디렉토리에 있는 모듈은 모두 자동으로 병합됩니다.

```javascript
// store/index.js
export const state = () => ({
})

export const mutations = {
}

export const getters = {
}
```

```javascript
$store.state.module.state
this.$store.commit('module/mutations')
```

### API 모델 사용

* Base Model
 
```javascript
// models/Model.js
import { Model as BaseModel } from 'vue-api-query'
 
export default class Model extends BaseModel {
  baseURL () {
    return 'https://jsonplaceholder.typicode.com'
  }
   request (config) {
    return this.$http.request(config)
  }
}
```

* Domain Model
 
```javascript
// models/Post.js
import Model from './Model'
 
export default class Post extends Model {
  resource()
  {
    return 'posts'
  }
}
```

* 사용
 
```javascript
// GET /posts?filter[status]=ACTIVE&include=user,category&append=likes&orderBy=-created_at,category_id
 
import Post from '~/models/Post'
 
let posts = await Post
  .where('status', 'ACTIVE')
  .include('user', 'category')
  .append('likes')
  .orderBy('-created_at', 'category_id')
  .get()
```

### RXjs 사용

```html
<div>
  <p>{{ count }}</p>
  <button type="button" class="button" v-stream:click="plus$">Plus</button>
  <button type="button" class="button" v-stream:click="minus$">Minus</button>
</div>
```

```javascript
import { merge } from 'rxjs'
import { map, startWith, scan } from 'rxjs/operators'

export default {
  name: 'Rxjs',
  domStreams: ['plus$', 'minus$'],
  subscriptions () {
    return {
      count: merge(
        this.plus$.pipe(map(() => 1)),
        this.minus$.pipe(map(() => -1))
      ).pipe(
        startWith(0),
        scan((total, change) => total + change)
      )
    }
  }
}
```

### Validation 사용

```html
<div :class="{error: validation.hasError('age')}">
  <label for="age">Age</label>
  <input type="text" id="age" name="age" v-model="age">
  <p>{{ validation.firstError('age') }}</p>
</div>
```

```javascript
export default {
  name: 'Validation',
  data: function () {
    return {
      age: ''
    };
  },
  validators: {
    age: function (value) {
      return this.$Validator.value(value).integer().greaterThan(20)
    }
  }
}
```

### 이미지 사용

* 애셋(asset)

```html
<img src="~assets/image.png">
```

```css
background-image: url('~assets/image.png');
```

* 스태틱(static)

```html
<img src="/img/image.png">
```

```css
background-image: url('/img/image.png');
```

### png/svg 스프라이트

* 조각 이미지 추가

```
assets/img/sprite/png/FOLDER/image_name
assets/img/sprite/svg/FOLDER/image_name
```

* 사용

```scss
@import "~assets/scss/sprite";

@include get-sprite('image_name', $png-FOLDER);
@include get-sprite('image_name', $svg-FOLDER, $svg-FOLDER-size);
```

### 플러그인(Plugin)

[https://ko.nuxtjs.org/guide/plugins](https://ko.nuxtjs.org/guide/plugins "https://ko.nuxtjs.org/guide/plugins")

### 기타 사용 방법

* 외부 리소스 사용

```javascript
// 글로벌 로드: nuxt.config.js 추가

module.exports = {
  head: {
    script: [
      { src: '[https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' }]( src: '[https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' } " src: '[https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' }")
    ],
    link: [
      { rel: 'stylesheet', href: '[https://fonts.googleapis.com/css?family=Roboto' }]( rel: 'stylesheet', href: '[https://fonts.googleapis.com/css?family=Roboto' } " rel: 'stylesheet', href: '[https://fonts.googleapis.com/css?family=Roboto' }")
    ]
  }
}
```

```javascript
// 로컬 로드: vue 파일에 추가

export default {
  head: {
    script: [
      { src: '[https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' }]( src: '[https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' } " src: '[https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' }")
    ],
    link: [
      { rel: 'stylesheet', href: '[https://fonts.googleapis.com/css?family=Roboto' }]( rel: 'stylesheet', href: '[https://fonts.googleapis.com/css?family=Roboto' } " rel: 'stylesheet', href: '[https://fonts.googleapis.com/css?family=Roboto' }")
    ]
  }
}
```

* JSX 사용

```jsx
export default {
  data () {
    return { name: 'World' }
  },
  render (h) {
    return <h1 class="red">{this.name}</h1>
  }
}
```

### 기타 설치 히스토리

* eslint 추가 (standard 채용)

```bash
yarn add --dev babel-eslint eslint eslint-loader eslint-plugin-vue eslint-config-standard eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node
```

```javascript
// .eslintrc.js

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    "eslint:recommended",
    // [https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention](/ [https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention "/ [https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention")
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    "plugin:vue/recommended",
    "standard"
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    "semi": [2, "never"],
    "no-console": "off",
    "vue/max-attributes-per-line": "off",
    "prettier/prettier": ["error", { "semi": false }]
  }
}
```

```javascript
// package.json

"scripts": {
  "lint": "eslint --ext .js,.vue --ignore-path .gitignore .",
  "lintfix": "eslint --fix --ext .js,.vue --ignore-path .gitignore ."
}
```

```javascript
// nuxt.config.js

module.exports = {
  build: {
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        })
      }
    }
  }
```

* CSS 전처리기 추가 (SCSS)

```bash
$ yarn add --dev node-sass sass-loader
```

* `postcss` 와 `autoprefixer` 설치

```javascript
module.exports = {
  build: {
    postcss: [
      require('autoprefixer')({
        browsers: [
          "> 1%",
          "last 2 versions",
          "not ie <= 8"
        ]
      })
    ]
  }
}
```

* axios 추가

`axios`를 한 번만 번들에 포함하기 위해서는 `build.vendor` 키를 `nuxt.config.js`에서 사용합니다.

```bash
yarn add --dev axios
```

```javascript
import axios from 'axios'

export default {
  async asyncData ({ params }) {
    let { data } = await axios.get(`https://my-api/posts/${params.id}`)
    return { title: data.title }
  }
}
```

```javascript
// nuxt.config.js
module.exports = {
  build: {
    // 웹팩4에서는 자동으로 vendor에 추가하기때문에 더이상 아래 코드를 추가할 필요가 없음
    vendor: ['axios']
  }
}
```

* i18n 추가

```bash
yarn add --dev vue-i18n
```

```javascript
// nuxt.config.js

module.exports = {
  build: {
    // 웹팩4에서는 자동으로 vendor에 추가하기때문에 더이상 아래 코드를 추가할 필요가 없음
    vendor: ['vue-i18n']
  },
  plugins: [
    { src: '~plugins/i18n.js', injectAs: 'i18n' }
  ]
}
```

```javascript
{{ $t('language.korean')}}
```
