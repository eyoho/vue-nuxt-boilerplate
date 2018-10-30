import gaze from 'gaze'
// https://github.com/cascornelissen/svg-spritemap-webpack-plugin
import SVGSpritemapPlugin from 'svg-spritemap-webpack-plugin'
import { spriteConfig, makeSpriteMap } from './spriteCommon'

const makeSvgSprite = (folder) => {
  return new SVGSpritemapPlugin(`assets/img/sprite/svg/${folder}/*.svg`, {
    sprite: {
      prefix: `${folder}-`,
      gutter: 2,
    },
    styles: {
      filename: `${spriteConfig.scss_dest}/svg/_${folder}.scss`,
      variables: {
        sprites: `svg-${folder}`,
        sizes: `svg-${folder}-sizes`,
        variables: `${folder}-variables`,
        mixin: `${folder}-sprite`
      }
    }
  })
}

const spriteSvg = () => {
  if (!spriteConfig.svgFolders) return

  makeSpriteMap('svg')
  return spriteConfig.svgFolders.map((folder) => makeSvgSprite(folder))
}

gaze(`${spriteConfig.image_source}/svg/**/*.svg`, (err, watcher) => {
  watcher.on('all', () => spriteSvg())
})

export default spriteSvg()
