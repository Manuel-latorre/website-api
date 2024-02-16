'use client'

import { Button, Tooltip } from "@nextui-org/react";
import { useState } from "react";

export default function GetCartProducts (){
    const [copied, setCopied] = useState(false);
    const [showOutput, setShowOutput] = useState(false);

  const handleToggleOutput = () => {
    setShowOutput(!showOutput);
  };


    function copyToClipboard() {
        const code = document.getElementById('codeCartProducts');
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

    return(
        <div id="getCartProducts">
            <div className="flex items-center gap-2 mt-20">
                <p className="text-slate-300 text-2xl font-semibold">Cart</p>
            </div>
            <div className="mt-10">
                <p className="text-xl text-slate-300">Get products from cart</p>
                    <div className="md:hidden mt-5">
                        <Tooltip showArrow={true} content="Copy to clipboard">
                            <button onClick={copyToClipboard} className="bg-gray-600 rounded-full p-1 flex items-center gap-1" >
                                <p className="text-sm text-white font-semibold">Copy</p>
                                <svg width={20} height={20} viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M8.94605 4.99995L13.2541 4.99995C14.173 5.00498 15.0524 5.37487 15.6986 6.02825C16.3449 6.68163 16.7051 7.56497 16.7001 8.48395V12.716C16.7051 13.6349 16.3449 14.5183 15.6986 15.1717C15.0524 15.825 14.173 16.1949 13.2541 16.2H8.94605C8.02707 16.1949 7.14773 15.825 6.50148 15.1717C5.85522 14.5183 5.495 13.6349 5.50005 12.716L5.50005 8.48495C5.49473 7.5658 5.85484 6.6822 6.50112 6.0286C7.1474 5.375 8.0269 5.00498 8.94605 4.99995Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M10.1671 19H14.9371C17.4857 18.9709 19.5284 16.8816 19.5001 14.333V9.666" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            </button>
                        </Tooltip>
                    </div>
                <section className="bg-slate-300 p-5 rounded-md mt-5 flex justify-between items-center max-md:p-3 min-w-[320px]">
                    <code id="codeCartProducts">
                        <p>fetch(&#39;https://api-gaming.vercel.app/products-cart&#39;)</p>
                        <p>.then(res=&gt;res.json())</p>
                        <p>.then(json=&gt;console.log(json))</p>
                    </code>
                    <div className="max-md:hidden">
                        <Tooltip showArrow={true} content="Copy to clipboard">
                            <Button onClick={copyToClipboard} isIconOnly className="align-bottom" color="primary">
                                <svg width={30} height={30} viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M8.94605 4.99995L13.2541 4.99995C14.173 5.00498 15.0524 5.37487 15.6986 6.02825C16.3449 6.68163 16.7051 7.56497 16.7001 8.48395V12.716C16.7051 13.6349 16.3449 14.5183 15.6986 15.1717C15.0524 15.825 14.173 16.1949 13.2541 16.2H8.94605C8.02707 16.1949 7.14773 15.825 6.50148 15.1717C5.85522 14.5183 5.495 13.6349 5.50005 12.716L5.50005 8.48495C5.49473 7.5658 5.85484 6.6822 6.50112 6.0286C7.1474 5.375 8.0269 5.00498 8.94605 4.99995Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M10.1671 19H14.9371C17.4857 18.9709 19.5284 16.8816 19.5001 14.333V9.666" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            </Button>
                        </Tooltip>
                    </div>
                </section>
                <div className="max-sm:hidden">
                    {!showOutput && (
                      <Button onClick={handleToggleOutput} className="mt-7" color="secondary">
                        Show Output
                      </Button>
                    )}
                    {showOutput && (
                      <div>
                        <Button onClick={handleToggleOutput} className="mt-7" color="secondary">
                          Hide Output
                        </Button>
                        <p className="text-slate-400 text-2xl mt-5 mb-5">Example</p>
                        <section className="bg-slate-700 p-7 rounded-md">
                            <code>
                                <p className="text-slate-950 font-bold">{'{'}</p>
                                <div className="flex">
                                    <p className="ml-5 text-orange-500 font-bold">&quot;productsCart&quot;</p> <p className="text-lime-500 font-bold">:</p> <p className="font-bold text-yellow-300">{'['}</p>
                                </div>
                                <p className="ml-10 font-bold text-pink-600">{'{'}</p>
                                    <ul className="ml-16">
                                    <li className="flex">
                                            <p className="text-teal-400 font-bold">&quot;id&quot;</p> 
                                            <p className="text-white font-bold">:</p>
                                            <p className="font-bold text-violet-400">659f290a609c3dafcf80206f,</p>    
                                        </li>
                                        <li className="flex">
                                            <p className="text-teal-400 font-bold">&quot;name&quot;</p> 
                                            <p className="text-white font-bold">:</p>
                                            <p className="font-bold text-violet-400">&quot;K641 65% Aluminum&quot;,</p>    
                                        </li>
                                        <li className="flex">
                                            <p className="text-teal-400 font-bold">&quot;imageCard&quot;</p> 
                                            <p className="text-white font-bold">:</p>
                                            <p className="font-bold text-violet-400">&quot;url...&quot;,</p>    
                                        </li>
                                        <li className="flex">
                                            <p className="text-teal-400 font-bold">&quot;amount&quot;</p> 
                                            <p className="text-white font-bold">:</p>
                                            <p className="font-bold text-violet-400">1,</p>    
                                        </li>
                                        <li className="flex">
                                            <p className="text-teal-400 font-bold">&quot;price&quot;</p> 
                                            <p className="text-white font-bold">:</p>
                                            <p className="font-bold text-violet-400">31.95,</p>    
                                        </li>
                                    </ul>
                                <p className="ml-10 font-bold text-pink-600">{'},'}</p>
                                <p className="ml-10 font-bold text-pink-600">{'{'}</p>
                                <ul className="ml-16">
                                    <li className="flex">
                                            <p className="text-teal-400 font-bold">&quot;id&quot;</p> 
                                            <p className="text-white font-bold">:</p>
                                            <p className="font-bold text-violet-400">659f2942609c3dafcf802079,</p>    
                                        </li>
                                        <li className="flex">
                                            <p className="text-teal-400 font-bold">&quot;name&quot;</p> 
                                            <p className="text-white font-bold">:</p>
                                            <p className="font-bold text-violet-400">&quot;K617 SE 60% Wired RGB;,</p>    
                                        </li>
                                        <li className="flex">
                                            <p className="text-teal-400 font-bold">&quot;imageCard&quot;</p> 
                                            <p className="text-white font-bold">:</p>
                                            <p className="font-bold text-violet-400">&quot;url...&quot;,</p>    
                                        </li>
                                        <li className="flex">
                                            <p className="text-teal-400 font-bold">&quot;amount&quot;</p> 
                                            <p className="text-white font-bold">:</p>
                                            <p className="font-bold text-violet-400">1,</p>    
                                        </li>
                                        <li className="flex">
                                            <p className="text-teal-400 font-bold">&quot;price&quot;</p> 
                                            <p className="text-white font-bold">:</p>
                                            <p className="font-bold text-violet-400">22.599,</p>    
                                        </li>
                                    </ul>
                                <p className="ml-10 font-bold text-pink-600">{'}'}</p>

                                <p className="font-bold text-yellow-300 ml-5">{']'}</p>
                                <p className="text-slate-950 font-bold">{'}'}</p>
                            </code>
                        </section>
                      </div>
                    )}
                </div>
            </div>
        </div>
    )
}