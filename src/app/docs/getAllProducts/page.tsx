'use client'

import { Button, Tooltip } from "@nextui-org/react";
import { useState } from "react";

export default function GetAllProducts (){
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

    return(
        <div id="getAllProducts">
            <div className="flex items-center gap-2">
            {/* <svg width={20} height={20} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 42 32" enable-background="new 0 0 42 32" xmlSpace="preserve" fill="#ffffff" stroke="#ffffff" stroke-width="0.63"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="#ffffff" d="M40.5,0h-10c-0.691,0-1.574,0.376-2.047,0.87l-1.33,1.34c-0.194,0.196-0.192,0.513,0.004,0.707 c0.194,0.194,0.513,0.193,0.707-0.003l1.334-1.346C29.453,1.271,30.088,1,30.5,1h10C40.775,1,41,1.224,41,1.5v10.049 c0,0.411-0.271,1.046-0.574,1.337L26.345,26.858c-0.201,0.191-0.535,0.186-0.73-0.008l-2.648-2.649 c-0.195-0.195-0.512-0.195-0.707,0s-0.195,0.512,0,0.707l2.648,2.649c0.294,0.293,0.684,0.441,1.074,0.441 c0.382,0,0.765-0.141,1.062-0.424l14.082-13.973C41.624,13.123,42,12.24,42,11.549V1.5C42,0.673,41.327,0,40.5,0z"></path> <path fill="#ffffff" d="M39.038,5c0-1.103-0.897-2-2-2s-2,0.897-2,2s0.897,2,2,2S39.038,6.103,39.038,5z M36.038,5 c0-0.551,0.448-1,1-1s1,0.449,1,1s-0.448,1-1,1S36.038,5.551,36.038,5z"></path> <path fill="#ffffff" d="M16.462,4c-0.691,0-1.574,0.376-2.048,0.87L0.421,19.001c-0.568,0.592-0.56,1.547,0.021,2.128L10.87,31.557 C11.155,31.843,11.537,32,11.946,32c0.396,0,0.77-0.149,1.059-0.426l14.081-13.972c0.499-0.478,0.876-1.361,0.876-2.053V5.5 c0-0.827-0.673-1.5-1.5-1.5H16.462z M27,5.5v10.049c0,0.412-0.309,1.046-0.612,1.337L12.307,30.858 c-0.195,0.185-0.54,0.181-0.729-0.008L1.149,20.423c-0.195-0.196-0.199-0.53-0.013-0.723L15.13,5.568 C15.415,5.271,16.05,5,16.462,5h10C26.737,5,27,5.224,27,5.5z"></path> <path fill="#ffffff" d="M23,7c-1.103,0-2,0.897-2,2s0.897,2,2,2s2-0.897,2-2S24.103,7,23,7z M23,10c-0.552,0-1-0.449-1-1 s0.448-1,1-1s1,0.449,1,1S23.552,10,23,10z"></path> </g> </g></svg> */}
                <p className="text-slate-300 text-2xl font-semibold">Products</p>
            </div>

            <div className="mt-10">
                <p className="text-xl text-slate-300">Get all products</p>
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
                <div>
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
        </div>
    )
}


