import { ScrollShadow } from "@nextui-org/react";
import Link from "next/link";

export default function Sidebar(){
    return(
        <main id="sidebar" className="w-1/4 max-lg:hidden">
            <div className="w-[250px] h-[600px] bg-slate-200 m-4 rounded-xl" >
                <ScrollShadow size={100} className="w-[250px] h-[600px]" visibility="none">
                    <section className="ml-4 flex flex-col gap-10 mt-5 mb-5">
                        <div>
                            <p className="font-semibold ml-4  text-2xl">Products</p>
                            <ul className="ml-5 mt-4 flex flex-col gap-4">
                                <li>
                                    <Link href={"#getAllProducts"} className="font-medium text-slate-700 hover:text-blue-500">Get all products</Link>
                                </li>
                                <li>
                                    <Link href={"#getASingleProduct"} className="font-medium text-slate-700 hover:text-blue-500">Get a single product by id</Link>
                                </li>
                                <li>
                                    <Link href={"#"} className="font-medium text-slate-700 hover:text-blue-500">Get a product by name</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-semibold ml-4 text-2xl">Cart</p>
                            <ul className="ml-5 mt-4 flex flex-col gap-4">
                                <li>
                                    <Link href={"#"} className="font-medium text-slate-700 hover:text-blue-500">Get products in cart</Link>
                                </li>
                                <li>
                                    <Link href={"#"} className="font-medium text-slate-700 hover:text-blue-500">Add product to cart</Link>
                                </li>
                                <li>
                                    <Link href={"#"} className="font-medium text-slate-700 hover:text-blue-500">Update product quantity</Link>
                                </li>
                                <li>
                                    <Link href={"#"} className="font-medium text-slate-700 hover:text-blue-500">Delete product from cart</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-semibold ml-4 text-2xl">Users</p>
                            <ul className="ml-5 mt-4 flex flex-col gap-4">
                                <li>
                                    <Link href={"#"} className="font-medium text-slate-700 hover:text-blue-500">Get all users</Link>
                                </li>
                                <li>
                                    <Link href={"#"} className="font-medium text-slate-700 hover:text-blue-500">Get a single user by id</Link>
                                </li>
                                <li>
                                    <Link href={"#"} className="font-medium text-slate-700 hover:text-blue-500">Register user</Link>
                                </li>
                                <li>
                                    <Link href={"#"} className="font-medium text-slate-700 hover:text-blue-500">Login with a user</Link>
                                </li>
                            </ul>
                        </div>
                    </section>
                </ScrollShadow>
            </div>
        </main>
    )
}