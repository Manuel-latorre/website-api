import Link from "next/link";

export default function Navbar () {

    return(
        <nav className="w-3/5 mx-auto p-7 flex items-center justify-between max-lg:w-full max-lg:justify-center max-lg:hidden">
            <div className="flex items-center gap-3">
               <div className="flex items-center">
                <svg width={80} height={80} viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg" fill="#cbd5e1"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="none" fill-rule="evenodd" stroke="#cbd5e1" stroke-linecap="round" stroke-linejoin="round" transform="translate(3 3)"> <path d="m8.49227788 1.06701593 5.00000002 2.85714286c.62315.35608571 1.0077221 1.01877259 1.0077221 1.73648628v4.67870983c0 .7177137-.3845721 1.3804006-1.0077221 1.7364863l-5.00000002 2.8571429c-.61486534.3513516-1.36969042.3513516-1.98455576 0l-5-2.8571429c-.62314999-.3560857-1.00772212-1.0187726-1.00772212-1.7364863v-4.67870983c0-.71771369.38457213-1.38040057 1.00772212-1.73648628l5-2.85714286c.61486534-.35135162 1.36969042-.35135162 1.98455576 0z"></path> <path d="m7.5 8.5v6.5"></path> <path d="m1 5 5.55180035 2.98943096c.59195265.31874373 1.30444665.31874373 1.8963993 0l5.55180035-2.98943096"></path> </g> </g></svg>
                <div className="flex flex-col">
                    <p className="text-slate-300 text-2xl">Tech Shop</p>
                    <p className="text-slate-300 text-2xl">API</p>
                </div>
               </div>
            </div>
            <div className="flex gap-10">
                <Link href="/" className="text-slate-300 text-xl">
                    Home
                </Link>

                <Link href="/docs" className="text-slate-300 text-xl">
                    Docs
                </Link>

                <Link href="https://github.com/Manuel-latorre/website-api" target="_blank" className="text-slate-300 text-xl flex items-center gap-1">
                    Github
                    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 21H20.4C20.7314 21 21 20.7314 21 20.4V3.6C21 3.26863 20.7314 3 20.4 3H3.6C3.26863 3 3 3.26863 3 3.6V16" stroke="#cbd5e1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M3.5 20.5L12 12M12 12V16M12 12H8" stroke="#cbd5e1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </Link>
            </div>
        </nav>
    )
}