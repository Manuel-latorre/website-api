import Link from "next/link";

export default function Navbar () {

    return(
        <nav className="w-3/5 mx-auto p-7 flex items-center justify-between max-lg:w-full max-lg:justify-center">
            <div className="flex items-center gap-3 max-lg:hidden">
                <svg width={80} height={80} fill="#ffffff" viewBox="0 0 32.00 32.00" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" stroke-width="0.00032"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M 16 3.71875 L 15.375 4.21875 L 7.125 10.625 L 6.875 10.84375 L 6.78125 11.15625 L 4.03125 21.25 L 3.8125 22.03125 L 16 28.125 L 28.1875 22.03125 L 27.96875 21.25 L 25.21875 11.15625 L 25.125 10.84375 L 24.875 10.625 L 16.625 4.21875 Z M 15 7.0625 L 15 10 L 11.21875 10 Z M 17 7.0625 L 20.78125 10 L 17 10 Z M 9.0625 12 L 14 12 L 10.40625 16.78125 Z M 18 12 L 22.9375 12 L 21.59375 16.78125 Z M 16 12.6875 L 20 18 L 12 18 Z M 7.8125 15 L 8.8125 18.5 L 6.5625 19.625 Z M 24.1875 15 L 25.4375 19.625 L 23.1875 18.5 Z M 12 20 L 20 20 L 16 25.3125 Z M 9.6875 20.28125 L 12.625 24.1875 L 7.25 21.5 Z M 22.3125 20.28125 L 24.75 21.5 L 19.375 24.1875 Z"></path></g></svg>
               <div>
                <p className="text-slate-300 text-2xl">API</p>
                <p className="text-slate-300 text-2xl">Gaming</p>
               </div>
            </div>
            <div className="flex gap-10">
                <Link href="/" className="text-slate-300 text-xl">
                    Home
                </Link>

                <Link href="/docs" className="text-slate-300 text-xl">
                    Docs
                </Link>

                <Link href="#" className="text-slate-300 text-xl">
                    Github
                </Link>
            </div>
        </nav>
    )
}