import { ScrollShadow } from "@nextui-org/react";
import Link from "next/link";

export default function Sidebar(){
    return(
        <main id="sidebar" className="w-1/4 max-lg:hidden">
            <div className="w-full max-h-[700px] bg-slate-200 m-4 rounded-xl sticky top-[100px]" >
                <ScrollShadow size={100} className="w-full max-h-[700px]" visibility="none">
                    <section className="ml-4 flex flex-col gap-10 mt-5 mb-5">
                        <div>
                            <div className="flex items-center gap-2 ml-4">
                                <svg width={25} height={25} viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g fill="none" fill-rule="evenodd" id="页面-1" stroke-width="1.9440000000000002"> <g id="导航图标" transform="translate(-325.000000, -80.000000)"> <g id="编组" transform="translate(325.000000, 80.000000)"> <polygon fill="#ffffff" fill-opacity="0.01" fill-rule="nonzero" id="路径" points="24 0 0 0 0 24 24 24"></polygon> <polygon id="路径" points="22 7 12 2 2 7 2 17 12 22 22 17" stroke="#0f172a" stroke-linejoin="round" stroke-width="1.9440000000000002"></polygon> <line id="路径" stroke="#0f172a" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.9440000000000002" x1="2" x2="12" y1="7" y2="12"></line> <line id="路径" stroke="#0f172a" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.9440000000000002" x1="12" x2="12" y1="22" y2="12"></line> <line id="路径" stroke="#0f172a" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.9440000000000002" x1="22" x2="12" y1="7" y2="12"></line> <line id="路径" stroke="#0f172a" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.9440000000000002" x1="17" x2="7" y1="4.5" y2="9.5"></line> </g> </g> </g> </g></svg>
                                <p className="font-semibold text-2xl">Products</p>
                            </div>
                            <ul className="ml-5 mt-4 flex flex-col gap-4">
                                <li>
                                    <Link href={"#getAllProducts"} className="font-medium text-slate-700 hover:text-blue-500">Get all products</Link>
                                </li>
                                <li>
                                    <Link href={"#getASingleProduct"} className="font-medium text-slate-700 hover:text-blue-500">Get a single product by id</Link>
                                </li>
                                <li>
                                    <Link href={"#getProductByName"} className="font-medium text-slate-700 hover:text-blue-500">Get a product by name</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div className="flex items-center gap-2 ml-4">
                                <svg width={25} height={25} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="#0f172a" stroke-width="1.9440000000000002" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                <p className="font-semibold text-2xl">Cart</p>
                            </div>
                            <ul className="ml-5 mt-4 flex flex-col gap-4">
                                <li>
                                    <Link href={"#getCartProducts"} className="font-medium text-slate-700 hover:text-blue-500">Get products in cart</Link>
                                </li>
                                <li>
                                    <Link href={"#addProduct"} className="font-medium text-slate-700 hover:text-blue-500">Add product to cart</Link>
                                </li>
                                <li>
                                    <Link href={"#increaseQuantity"} className="font-medium text-slate-700 hover:text-blue-500">Increase product quantity</Link>
                                </li>
                                <li>
                                    <Link href={"#decreaseQuantity"} className="font-medium text-slate-700 hover:text-blue-500">Decrease product quantity</Link>
                                </li>
                                <li>
                                    <Link href={"#deleteProduct"} className="font-medium text-slate-700 hover:text-blue-500">Delete product from cart</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div className="flex items-center gap-2 ml-4">
                                <svg width={25} height={25} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#0f172a" stroke-width="1.9440000000000002" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                <p className="font-semibold text-2xl">Users</p>
                            </div>
                            <ul className="ml-5 mt-4 flex flex-col gap-4">
                                <li>
                                    <Link href={"#getAllUsers"} className="font-medium text-slate-700 hover:text-blue-500">Get all users</Link>
                                </li>
                                <li>
                                    <Link href={"#getUserById"} className="font-medium text-slate-700 hover:text-blue-500">Get a single user by id</Link>
                                </li>
                                <li>
                                    <Link href={"#registerUser"} className="font-medium text-slate-700 hover:text-blue-500">Register user</Link>
                                </li>
                                <li>
                                    <Link href={"#loginUser"} className="font-medium text-slate-700 hover:text-blue-500">Login with a user</Link>
                                </li>
                            </ul>
                        </div>
                    </section>
                </ScrollShadow>
            </div>
        </main>
    )
}