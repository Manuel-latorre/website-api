'use client'

import { Button, Snippet, Tooltip } from "@nextui-org/react";
import { useState } from "react";

export default function ExampleCode() {
    const [copied, setCopied] = useState(false);
    const [showCode, setShowCode] = useState(false);

    const handleShowcode = () => {
        setShowCode(true);
    }
   

    function copyToClipboard() {
        const code = document.getElementById('code');
        if (code) {
            const text = code.textContent;
            if (text) { // Verifica si text no es null ni undefined
                navigator.clipboard.writeText(text)
                    .then(() => {
                        setCopied(true);
                    })
                    .catch((error) => {
                        console.error('Error copying to clipboard:', error);
                    });
            } else {
                console.error('No text content found in the code element');
            }
        }
    }
    

    return (
        <div className="w-full lg:w-3/5 mx-auto mt-20">
            <p className="text-slate-400 text-2xl">Example Code</p>
            <section className="bg-slate-300 p-5 rounded-md mt-5 flex justify-between items-center">
                <code id="code">
                    fetch(&#39;https://api-gaming.vercel.app/products&#39;) <br />
                    .then(res=&gt;res.json()) <br />
                    .then(json=&gt;console.log(json))
                </code>
                <Tooltip showArrow={true} content="Copy to clipboard">
                    <Button onClick={copyToClipboard} isIconOnly className="align-bottom" color="primary">
                        <svg width={30} height={30} viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M8.94605 4.99995L13.2541 4.99995C14.173 5.00498 15.0524 5.37487 15.6986 6.02825C16.3449 6.68163 16.7051 7.56497 16.7001 8.48395V12.716C16.7051 13.6349 16.3449 14.5183 15.6986 15.1717C15.0524 15.825 14.173 16.1949 13.2541 16.2H8.94605C8.02707 16.1949 7.14773 15.825 6.50148 15.1717C5.85522 14.5183 5.495 13.6349 5.50005 12.716L5.50005 8.48495C5.49473 7.5658 5.85484 6.6822 6.50112 6.0286C7.1474 5.375 8.0269 5.00498 8.94605 4.99995Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M10.1671 19H14.9371C17.4857 18.9709 19.5284 16.8816 19.5001 14.333V9.666" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </Button>
                </Tooltip>
            </section>

            <Button onClick={handleShowcode} className="mt-7" color="secondary">
                Try it !
            </Button>

            { showCode && 
            <section className="bg-slate-900 p-3 rounded-md mt-5 flex justify-between items-center" >
                <code>
                    <p className="text-pink-600">{'{'}</p>
                        <p className="ml-10">
                            <div className="flex">
                                <p className="text-green-500">&quot;_id&quot;</p> <p className="text-white">:</p> <p className="text-lime-200">&quot;6542700933c25546cfde098e&quot;,</p><br/>
                            </div>
                            <div className="flex">
                                <p className="text-green-500">&quot;name&quot;</p> <p className="text-white">:</p> <p className="text-lime-200">&quot;K631 PRO WT 65%&quot;,</p><br/>
                            </div>
                            <div className="flex">
                                <p className="text-green-500">&quot;price&quot;</p> <p className="text-white">:</p> <p className="text-lime-200">34.899,</p><br/>
                            </div>
                            <div className="flex">
                                <p className="text-green-500">&quot;stock&quot;</p> <p className="text-white">:</p> <p className="text-lime-200">19,</p><br/>
                            </div>
                            <div className="flex">
                                <p className="text-green-500">&quot;inCart&quot;</p> <p className="text-white">:</p> <p className="text-lime-200">false,</p><br/>
                            </div>
                            <div className="flex">
                                <p className="text-green-500">&quot;imageCard&quot;</p> <p className="text-white">:</p> <p className="text-lime-200">&quot;https://www.redragonzone.com/cdn/shop/products/White_Mint65_Wirelesskeyboard_1_360x.png?v=1681801748&quot;,</p><br/>
                            </div>
                            <div className="flex">
                                <p className="text-green-500">&quot;imageDetail&quot;</p> <p className="text-white">:</p> <p className="text-lime-200">&quot;https://www.redragonzone.com/cdn/shop/products/White_Mint65_Wirelesskeyboard_1_450x450.png?v=1681801748&quot;,</p><br/>
                            </div>
                            <div className="flex">
                                <p className="text-green-500">&quot;imageDetail1&quot;</p> <p className="text-white">:</p> <p className="text-lime-200">&quot;https://www.redragonzone.com/cdn/shop/products/RedragonK631PROWhite_mint65_3-ModeWirelessRGBGamingKeyboard_1_450x450.jpg?v=1681801765&quot;,</p><br/>
                            </div>
                            <div className="flex">
                                <p className="text-green-500">&quot;imageDetail2&quot;</p> <p className="text-white">:</p> <p className="text-lime-200">&quot;https://www.redragonzone.com/cdn/shop/products/RedragonK631PROWhite_mint65_3-ModeWirelessRGBGamingKeyboard_2_450x450.jpg?v=1681801765&quot;,</p><br/>
                            </div>
                            <div className="flex">
                                <p className="text-green-500">&quot;brand&quot;</p> <p className="text-white">:</p> <p className="text-lime-200">&quot;Redragon&quot;,</p><br/>
                            </div>
                            <div className="flex">
                                <p className="text-green-500">&quot;brandLogo&quot;</p> <p className="text-white">:</p> <p className="text-lime-200">&quot;https://www.redragonzone.com/cdn/shop/files/new-redragon-logo_180x.png?v=1613704782&quot;,</p><br/>
                            </div>
                            <div className="flex">
                                <p className="text-green-500">&quot;color&quot;</p> <p className="text-white">:</p> <p className="text-lime-200">&quot;blanco&quot;,</p><br/>
                            </div>
                            <div className="flex">
                                <p className="text-green-500">&quot;description&quot;</p> <p className="text-white">:</p> <p className="text-lime-200">&quot;La innovación transformadora con el teclado Redragon de intercambio en caliente con un 99.8%+ de compatibilidad con interruptores está disponible ahora. El diseño exclusivo de la estructura del socket hace que el montaje de los interruptores sea más sencillo y con menos oscilación. Conexión de 3 Modos - Equipado con la innovadora tecnología de conexión de tres modos de Redragon, cable USB-C, modos inalámbricos BT 3.0/5.0 y 2.4Ghz, lo que eleva la experiencia del usuario a otro nivel en todos los campos. Modo de Intercambio en Caliente y Interruptores Personalizados - Compatible con la mayoría de los tipos de interruptores en el mercado, ya sea de 3 pines o de 5 pines. Los interruptores mecánicos lineales personalizados silenciosos y el recorrido más suave de las teclas hacen que cada pulsación sea fácil y rápida de registrar. Es fácil de personalizar o actualizar según tus preferencias, sin necesidad de investigar en foros.&quot;,</p><br/>
                            </div>
                            <div className="flex">
                                <p className="text-green-500">&quot;category&quot;</p> <p className="text-white">:</p> <p className="text-lime-200">&quot;Teclados&quot;,</p><br/>
                            </div>
                            <div className="flex">
                                <p className="text-green-500">&quot;__v&quot;</p> <p className="text-white">:</p> <p className="text-lime-200">0</p><br/>
                            </div>
                        </p>
                    <p className="text-pink-600">{'}'}</p>
                </code>
            </section>}
            
        </div>
    );
}