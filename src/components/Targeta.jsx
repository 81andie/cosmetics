import React from 'react'
import { useEffect, useState, useRef } from "react";
import JSConfetti from "js-confetti";

export const Targeta = ({ frontContent, backContent }) => {

    const [isFlipped, setIsFlipped] = useState(false);
    const canvasRef = useRef();
    const confettiRef = useRef();

    useEffect(() => {
        confettiRef.current = new JSConfetti({ canvas: canvasRef.current });
    }, []);

    const handleClick = () => {
        if (!isFlipped) {
            confettiRef.current.addConfetti({
                confettiRadius: 5,
                confettiNumber: 300
            });
        }

        setIsFlipped(!isFlipped);
    };
    return (
        <div className={`card ${isFlipped ? "active" : "inactive"}`}>
            <div className="card-front">

            <img src="/logo.jpg" className="logo_tienda" />
            <h6>Has finalizado con éxito tu pedido</h6>
                <button type="button" onClick={handleClick} className="trigger icon">Felicidades!
                    {frontContent}
                </button>
              
            </div>
            <div className="card-back">
                {backContent}
                <canvas className="canvas" ref={canvasRef} />
                <button type="button" className="reset" onClick={handleClick}>
                    Muchas grácias por confiar en nosotros, en breve lo recibirás en tu domicilio
                </button>
            </div>
        </div>
    )
}
