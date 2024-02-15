import { Button } from "@nextui-org/react";
import Link from "next/link";


export default function Routes(){
    return(
        <section className="w-full lg:w-3/5 mx-auto mt-20">
            <p className="text-2xl text-slate-400 mb-5">Routes</p>
            <ul className="w-full lg:w-3/6 bg-slate-300 p-5 rounded-lg flex flex-col gap-5">
                <li className="flex items-center justify-between">
                    <p className="font-bold text-blue-600">GET</p>
                    <Link className="text-blue-600" href={"https://api-gaming.vercel.app/products/6542700933c25546cfde098e"}>/products</Link>
                </li>
                <li className="flex items-center justify-between">
                    <p className="font-bold text-blue-600">GET</p>
                    <Link className="text-blue-600" href={"https://api-gaming.vercel.app/products/6542700933c25546cfde098e"}>/products/6542700933c25546cfde098e</Link>
                </li>
                <li className="flex items-center justify-between">
                    <p className="font-bold text-blue-600">GET</p>
                    <Link className="text-blue-600" href={"https://api-gaming.vercel.app/products/search?name=K631%20PRO%20WT%2065"}>/products/search?name=K631%20PRO%20WT%2065</Link>
                </li>
                <li className="flex items-center justify-between">
                    <p className="font-bold text-blue-600">GET</p>
                    <Link className="text-blue-600" href={"https://api-gaming.vercel.app/products-cart"}>/products/cart</Link>
                </li>
                <li className="flex items-center justify-between">
                    <p className="font-bold text-purple-700">POST</p>
                    <p className="text-purple-700">/products-cart</p>
                </li>
                <li className="flex items-center justify-between">
                    <p className="font-bold text-purple-700">POST</p>
                    <p className="text-purple-700">/register</p>
                </li>
                <li className="flex items-center justify-between">
                    <p className="font-bold text-green-900">PUT</p>
                    <p className="text-green-900">/products-cart/:id</p>
                </li>
                <li className="flex items-center justify-between">
                    <p className="text-red-600 font-bold">DELETE</p>
                    <p className="text-red-600">/products-cart/:id</p>
                </li>
            </ul>
            <Button className="mt-5" color="secondary">
                View details on Docs
            </Button>
        </section>
    )
}