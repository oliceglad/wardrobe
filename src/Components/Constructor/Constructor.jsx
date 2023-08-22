import React, { useRef, useEffect } from 'react';
import s from './Constructor.module.scss'
import { Application } from 'pixi.js';
import { Human } from '../../graphics/Human';


export const Constructor = () => {
    const containerRef = useRef(null);
    const human = new Human()

    useEffect(() => {
        var app = new Application({
            width: 300,
            height: 520,
            backgroundColor: 0xffffff,
        });
        const container = containerRef.current;
        container.appendChild(app.view);

        app.stage.addChild(human.view);
        app.stage.position.set(300 / 2, 500 / 2);

        console.log(human.view)

        return () => {
            app.destroy(true);
        };
    }, [human.view]);

    return (
        <div ref={containerRef} />
    );
}