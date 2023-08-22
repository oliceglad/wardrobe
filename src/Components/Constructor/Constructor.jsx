import React, { useRef, useEffect } from 'react';
import s from './Constructor.module.scss'
import { Application, Sprite, Texture }from 'pixi.js';
import { assetsHuman } from '../../data/assetsData';

export const Constructor = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const app = new Application({
            width: 300,
            height: 500,
            backgroundColor: 0xffffff,
        });
        const container = containerRef.current;
        container.appendChild(app.view);


        // const texture = new Texture.from(assetsHuman.sprites[0].url)
        // const sprite = new Sprite(texture)

        // sprite.anchor.set(0.5);

        // app.stage.appendChild(sprite)
        return () => {
            app.destroy(true);
        };
    }, []);

    return <div ref={containerRef} />;
}