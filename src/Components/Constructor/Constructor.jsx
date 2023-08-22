import React, { useRef, useEffect } from 'react';
import s from './Constructor.module.scss'
import { Application }from 'pixi.js';

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
        return () => {
            app.destroy(true);
        };
    }, []);

    return <div ref={containerRef} />;
}