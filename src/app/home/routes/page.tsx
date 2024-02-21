import { Button } from "@nextui-org/react";
import Link from "next/link";


export default function Routes(){
    return(
        <section className="w-full lg:w-3/5 mx-auto mt-20 p-5">
            <p className="text-2xl text-slate-400 mb-5">Routes of products</p>
            <ul className="w-full bg-slate-300 p-2 rounded-lg flex flex-col gap-5">
                <li className="flex items-center justify-between bg-blue-700 bg-opacity-20 p-2 rounded-lg">
                    <p className="font-bold text-blue-600">GET</p>
                    <Link className="text-blue-600" href={"https://api-gaming.vercel.app/products"} target="_blank">/products</Link>
                </li>
                <li className="flex items-center justify-between bg-blue-700 bg-opacity-20 p-2 rounded-lg">
                    <p className="font-bold text-blue-600">GET</p>
                    <Link className="text-blue-600" href={"https://api-gaming.vercel.app/products/6542700933c25546cfde098e"}target="_blank">/products/productId</Link>
                </li>
                <li className="flex items-center justify-between bg-blue-700 bg-opacity-20 p-2 rounded-lg">
                    <p className="font-bold text-blue-600">GET</p>
                    <Link className="text-blue-600" href={"https://api-gaming.vercel.app/products/search?name=K631%20PRO%20WT%2065"} target="_blank">/products/search?name=name</Link>
                </li>
                <li className="flex items-center justify-between bg-blue-700 bg-opacity-20 p-2 rounded-lg">
                    <p className="font-bold text-blue-600">GET</p>
                    <Link className="text-blue-600" href={"https://api-gaming.vercel.app/products-cart"} target="_blank">/products/cart</Link>
                </li>
                <li className="flex items-center justify-between bg-blue-700 bg-opacity-20 p-2 rounded-lg">
                    <p className="font-bold text-blue-600">GET</p>
                    <Link className="text-blue-600" href={"https://api-gaming.vercel.app/users"} target="_blank">/users</Link>
                </li>
                <li className="flex items-center justify-between bg-blue-700 bg-opacity-20 p-2 rounded-lg">
                    <p className="font-bold text-blue-600">GET</p>
                    <Link className="text-blue-600" href={"https://api-gaming.vercel.app/user/65d3b01b92478bc91a283b0f"} target="_blank">/user/:userId</Link>
                </li>
                <li className="flex items-center justify-between bg-green-400 bg-opacity-20 p-2 rounded-lg">
                    <p className="font-bold text-green-700">POST</p>
                    <p className="text-green-700">/products-cart</p>
                </li>
                <li className="flex items-center justify-between bg-green-400 bg-opacity-20 p-2 rounded-lg">
                    <p className="font-bold text-green-700">POST</p>
                    <p className="text-green-700">/register</p>
                </li>
                <li className="flex items-center justify-between bg-green-400 bg-opacity-20 p-2 rounded-lg">
                    <p className="font-bold text-green-700">POST</p>
                    <p className="text-green-700">/login</p>
                </li>
                <li className="flex items-center justify-between bg-teal-400 bg-opacity-40 p-2 rounded-lg">
                    <p className="font-bold text-teal-700">PUT</p>
                    <p className="text-teal-700">/products-cart/productId?query=add</p>
                </li>
                <li className="flex items-center justify-between bg-teal-400 bg-opacity-40 p-2 rounded-lg">
                    <p className="font-bold text-teal-700">PUT</p>
                    <p className="text-teal-700">/products-cart/productId?query=del</p>
                </li>
                <li className="flex items-center justify-between bg-red-500 bg-opacity-20 p-2 rounded-lg">
                    <p className="text-red-600 font-bold">DELETE</p>
                    <p className="text-red-600">/products-cart/:id</p>
                </li>
            </ul>
            <Link href={"/docs"}>
                <Button className="mt-5" color="primary">
                    <p className="text-white">View details in Docs</p>
                </Button>
            </Link>
        </section>
    )
}