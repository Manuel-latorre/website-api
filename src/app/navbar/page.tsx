import Link from "next/link";

export default function Navbar () {

    return(
        <nav className="w-3/5 mx-auto p-7 flex items-center justify-between max-lg:w-full max-lg:justify-center max-lg:hidden">
            <div className="flex items-center gap-3">
               <div>
                <p className="text-slate-300 text-2xl">Tech</p>
                <p className="text-slate-300 text-2xl">Shop API</p>
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