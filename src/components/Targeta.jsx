import React from 'react'
import { useEffect, useState, useRef } from "react";
import JSConfetti from "js-confetti";
import './Targeta.css';
import { useTranslation } from 'react-i18next';

export const Targeta = ({ frontContent, backContent }) => {

    const { t } = useTranslation();

    const [isFlipped, setIsFlipped] = useState(false);
    const canvasRef = useRef();
    const confettiRef = useRef();

    useEffect(() => {
        confettiRef.current = new JSConfetti({ canvas: canvasRef.current });
    }, []);

    const handleClick = () => {
        if (!isFlipped) {
            confettiRef.current.addConfetti({
                emojiSize: 20,
                confettiNumber: 250,
                emojis:['✨', '💫', '🌸','🏵️', '💮']
            });
        }

        setIsFlipped(!isFlipped);
    };
    return (
        <div className={`card ${isFlipped ? "active" : "inactive"}`}>
            <div className="card-front">
            <button type="button" onClick={handleClick} className="trigger icon">{t('pedido.Congratulations')}
                    {frontContent}
                </button>
            <img src="/logo.jpg" className="logo_tienda" />
            <h6>{t('pedido.Finish')}</h6>
              
              
            </div>
            <div className="card-back">
                {backContent}
                <canvas className="canvas" ref={canvasRef} />
                <button type="button" className="reset" onClick={handleClick}>
                {t('pedido.Thanyou')}
                </button>
            </div>
        </div>
    )
}
