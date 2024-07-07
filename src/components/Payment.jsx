import React from 'react'
import { useState, useRef } from 'react';
import { Steps } from 'primereact/steps';
import { Toast } from 'primereact/toast';
import { FormPayment } from './FormPayment';
import { FormPayments } from './FormPayments';



export const Payment = () => {

    const [activeIndex, setActiveIndex] = useState(1);
    const toast = useRef(null);
    const items = [
        {
            label: ' tu informacion',
            command: (event) => {
                toast.current.show({ severity: 'info', summary: '1º PASO', detail: event.item.label });
            }
        },
        {
            label: 'tus productos',
            command: (event) => {
                toast.current.show({ severity: 'warn', summary: '2º PASO', detail: event.item.label });
            }
        },
        {
            label: '"CLICK" a"payment"',
            command: (event) => {
                toast.current.show({ severity: 'info', summary: '3º PASO', detail: event.item.label });
            }
        },
        {
            label: 'tu confirmación',
            command: (event) => {
                toast.current.show({ severity: 'success', summary: 'Ultimo paso', detail: event.item.label });
            }
        }
    ];


    return (
        <>
        <section class="steps_informacion">

            <h1 class="steps_titulo">PAYMENT</h1>
            <h3 class="steps_subs">Sigue estos 4 pasos</h3>

        <div className="card4">
            <Toast ref={toast}></Toast>
            <Steps model={items} activeIndex={activeIndex} onSelect={(e) => setActiveIndex(e.index)} readOnly={false} />
        </div>

        </section>

       {/*<FormPayment/>*/}

      <FormPayments/>


        
        </>
    )
}
