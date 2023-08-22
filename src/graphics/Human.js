import { Container, Texture, Sprite } from "./pixi.mjs";


export const createSprite = (textureName, position = { x: 0, y: 0 }, anchor = { x: 0.5, y: 0.5 }) => {
    const sprite = new Sprite(Texture.from(textureName));
    sprite.position.copyFrom(position);
    sprite.anchor.copyFrom(anchor);
    return sprite;
};

export class Human {
    constructor() {
        this._view = new Container();
    }

    get view() {
        return this._view;
    }
}