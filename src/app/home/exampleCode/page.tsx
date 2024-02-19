'use client'

import { Button, Snippet, Tooltip } from "@nextui-org/react";
import { useState } from "react";

export default function ExampleCode() {
    const [copied, setCopied] = useState(false);
    const [showOutput, setShowOutput] = useState(false);

    const handleToggleOutput = () => {
        setShowOutput(!showOutput);
      };
   

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
        <div className="w-full lg:w-3/5 mx-auto mt-20 p-5">
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

            <div className="max-sm:hidden">
                        {!showOutput && (
                        <Button onClick={handleToggleOutput} className="mt-7" color="secondary">
                            Try it !
                        </Button>
                        )}
                        {showOutput && (
                        <div>
                            <Button onClick={handleToggleOutput} className="mt-7" color="secondary">
                                Hide Code
                            </Button>
                            <p className="text-slate-400 text-2xl mt-5 mb-5">Example</p>
                            <section className="bg-slate-700 p-7 rounded-md">
                                <code>
                                    <p className="text-slate-950 font-bold">{'{'}</p>
                                        <p className="ml-5 text-pink-600 font-bold">products: <p className="ml-10 font-bold text-purple-600">{'['}</p>
                                            <p className="ml-20 font-bold text-blue-700">{'{'}</p>
                                            <ul className="ml-24">
                                                <li className="flex items-center">
                                                    <p className="font-bold text-green-500">&quot;id&quot;</p>
                                                    <p className="font-bold text-white">:</p>
                                                    <p className="font-bold text-yellow-500">1,</p>
                                                </li>
                                                <li className="flex items-center">
                                                    <p className="font-bold text-green-500">&quot;name&quot;</p>
                                                    <p className="font-bold text-white">:</p>
                                                    <p className="font-bold text-yellow-500">&quot;Product 1&quot;,</p>
                                                </li>
                                                <li className="flex items-center">
                                                    <p className="font-bold text-green-500">&quot;price&quot;</p>
                                                    <p className="font-bold text-white">:</p>
                                                    <p className="font-bold text-yellow-500">100,</p>
                                                </li>
                                                <li className="flex items-center">
                                                    <p className="font-bold text-green-500">&quot;stock&quot;</p>
                                                    <p className="font-bold text-white">:</p>
                                                    <p className="font-bold text-yellow-500">2,</p>
                                                </li>
                                                <li className="flex items-center">
                                                    <p className="font-bold text-green-500">&quot;inCart&quot;</p>
                                                    <p className="font-bold text-white">:</p>
                                                    <p className="font-bold text-yellow-500">false,</p>
                                                </li>
                                                <li className="flex items-center">
                                                    <p className="font-bold text-green-500">&quot;imageCard&quot;</p>
                                                    <p className="font-bold text-white">:</p>
                                                    <p className="font-bold text-yellow-500">&quot;url&quot;,</p>
                                                </li>
                                                <li className="flex items-center">
                                                    <p className="font-bold text-green-500">&quot;imageDetail&quot;</p>
                                                    <p className="font-bold text-white">:</p>
                                                    <p className="font-bold text-yellow-500">&quot;url&quot;,</p>
                                                </li>
                                                <li className="flex items-center">
                                                    <p className="font-bold text-green-500">&quot;imageDetail1&quot;</p>
                                                    <p className="font-bold text-white">:</p>
                                                    <p className="font-bold text-yellow-500">&quot;url&quot;,</p>
                                                </li>
                                                <li className="flex items-center">
                                                    <p className="font-bold text-green-500">&quot;imageDetail2&quot;</p>
                                                    <p className="font-bold text-white">:</p>
                                                    <p className="font-bold text-yellow-500">&quot;url&quot;,</p>
                                                </li>
                                                <li className="flex items-center">
                                                    <p className="font-bold text-green-500">&quot;brand&quot;</p>
                                                    <p className="font-bold text-white">:</p>
                                                    <p className="font-bold text-yellow-500">&quot;x brand&quot;,</p>
                                                </li>
                                                <li className="flex items-center">
                                                    <p className="font-bold text-green-500">&quot;brandLogo&quot;</p>
                                                    <p className="font-bold text-white">:</p>
                                                    <p className="font-bold text-yellow-500">&quot;url&quot;,</p>
                                                </li>
                                                <li className="flex items-center">
                                                    <p className="font-bold text-green-500">&quot;color&quot;</p>
                                                    <p className="font-bold text-white">:</p>
                                                    <p className="font-bold text-yellow-500">&quot;black&quot;,</p>
                                                </li>
                                                <li className="flex items-center">
                                                    <p className="font-bold text-green-500">&quot;description&quot;</p>
                                                    <p className="font-bold text-white">:</p>
                                                    <p className="font-bold text-yellow-500">&quot;....&quot;,</p>
                                                </li>
                                                <li className="flex items-center">
                                                    <p className="font-bold text-green-500">&quot;category&quot;</p>
                                                    <p className="font-bold text-white">:</p>
                                                    <p className="font-bold text-yellow-500">&quot;keyboards&quot;,</p>
                                                </li>
                                            </ul>
                                            <p className="ml-20 font-bold text-blue-700">{'},'}</p>
                                            <p className="text-slate-500 ml-20">{'/* 96 more... */'}</p>
                                        <p className="ml-10 font-bold text-purple-600">{']'}</p></p>
                                    <p className="text-slate-950 font-bold">{'}'}</p>
                                </code>
                            </section>
                        </div>
                        )}
                    </div>
            
        </div>
    );
}