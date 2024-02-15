import Link from "next/link";

export default function Resources(){
    return(
        <div className="w-full lg:w-3/5 mx-auto mt-20"> 
            <p className="text-2xl text-slate-400">Resources</p>
            <p className="mt-3 text-slate-400 mb-4">There are 3 main resources need in shopping prototypes</p>
            <ul className="w-full lg:w-3/6 bg-slate-300 p-5 rounded-lg flex flex-col gap-5">
                <li className="flex items-center justify-between">
                    <Link className="text-blue-500" href={"https://api-gaming.vercel.app/products"} target="_blank">Products</Link>
                    <p>97 products</p>
                </li>
                <li className="flex items-center justify-between">
                    <Link className="text-blue-500" href={"https://api-gaming.vercel.app/products-cart"} target="_blank">Cart</Link>
                    <p>97 cart items</p>
                </li>
                <li className="flex items-center justify-between">
                    <Link className="text-blue-500" href={"https://api-gaming.vercel.app/users"} target="_blank">Users</Link>
                    <p>3 users</p>
                </li>
            </ul>
        </div>
    )
}