import React, { useRef, useEffect } from 'react';
import s from './Constructor.module.scss'
import * as PIXI from 'pixi.js';

const clickHandler = (image) => {
    console.log(image.global)
}

export const Constructor = ({ svgData }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const app = new PIXI.Application({
            width: 300,
            height: 600,
            backgroundColor: 0xffffff,
        });
        const container = containerRef.current;
        container.appendChild(app.view);

        const imageTexture = PIXI.Texture.from(svgData);
        const sprite = new PIXI.Sprite(imageTexture);

        sprite.anchor.set(0.5);
        sprite.x = app.screen.width / 2;
        sprite.y = app.screen.height / 2;
        sprite.eventMode = 'static';
        sprite.cursor = 'pointer';
        // sprite.hitArea = new PIXI.Polygon([
        //  145,70,
        //  150,70,
        //  160,70
        // ]);

        sprite.on('pointermove', (e) => clickHandler(e))

        app.stage.addChild(sprite);

        return () => {
            app.destroy(true);
        };
    }, [svgData]);

    return <div ref={containerRef} />;
}