import { Container, Texture, Sprite } from 'pixi.js';
import { assetsHuman } from '../data/assetsData';


export const createSprite = (textureName, name, position = { x: 0, y:0}, anchor = { x: 0.5, y: 0.5 }) => {
    const sprite = new Sprite(Texture.from(textureName));
    sprite.eventMode = 'static'
    sprite.interactive = true
    sprite.cursor = 'pointer'
    sprite.name = name

    sprite.on('pointerdown', () => {console.log(sprite.name)})
          .on('pointerover', () => sprite.alpha = 0.8)
          .on('pointerout', () => sprite.alpha = 1)
          
    sprite.position.copyFrom(position);
    sprite.anchor.copyFrom(anchor);
    return sprite;
};

export class Human {
    constructor() {
        this._view = new Container();

        this._head = createSprite(assetsHuman.sprites[0].url, assetsHuman.sprites[0].name, { x: 0, y: -200 })
        this._body = createSprite(assetsHuman.sprites[1].url, assetsHuman.sprites[1].name, {x: -3, y: -80})
        this._leftHand = createSprite(assetsHuman.sprites[2].url, assetsHuman.sprites[2].name, {x: -81, y: 33})
        this._rightHand = createSprite(assetsHuman.sprites[3].url, assetsHuman.sprites[3].name, {x: 78, y: 33})
        this._legs = createSprite(assetsHuman.sprites[4].url, assetsHuman.sprites[4].name, {x: -1, y: 120})
        this._shins = createSprite(assetsHuman.sprites[5].url, assetsHuman.sprites[5].name, {x: -1, y: 252})

        this._view.addChild(this._head, this._body, this._leftHand, this._rightHand, this._legs, this._shins)
    }

    get view() {
        return this._view;
    }
}