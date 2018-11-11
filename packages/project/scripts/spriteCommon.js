import fs from 'fs'
import path from 'path'
import handlebars from 'handlebars'

const getFolders = (dir) => {
  return fs.readdirSync(dir).filter((file) => {
    return fs.statSync(path.join(dir, file)).isDirectory()
  })
}

export const spriteConfig = {
  ratio: 1,
  image_source: 'assets/img/sprite',
  image_dest: 'static/img/sprite',
  scss_dest: 'assets/scss/sprite',
}
spriteConfig.pngFolders = getFolders(`${spriteConfig.image_source}/png`)
spriteConfig.svgFolders = getFolders(`${spriteConfig.image_source}/svg`)

// 스프라이트 맵 생성
export const makeSpriteMap = (type) => {
  const template = handlebars.compile(fs.readFileSync('scripts/handlebars/sprite_map_template.hbs').toString())
  const spriteMap = template({
    prefix: `${type}-`,
    path: path.relative(spriteConfig.scss_dest, path.join(`${spriteConfig.scss_dest}/${type}`)).replace(/\\/g, '/'),
    import: spriteConfig.pngFolders
  })

  if (!fs.existsSync(spriteConfig.scss_dest)) {
    fs.mkdirSync(spriteConfig.scss_dest)
  }

  fs.writeFileSync(path.join(`${spriteConfig.scss_dest}`, `_map_${type}.scss`), spriteMap, 'utf8')
}




