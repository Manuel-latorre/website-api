'use client'

import Link from "next/link";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, DropdownItem, DropdownMenu, Dropdown, DropdownTrigger, Accordion, AccordionItem} from "@nextui-org/react";
import { useState } from "react";


export default function Nav () {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return(

        <Navbar onMenuOpenChange={setIsMenuOpen} className="h-[100px] w-full  mx-auto justify-center bg-slate-700">
        <NavbarContent>
            <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
            />
            <NavbarBrand className="max-sm:justify-center">
                <Link href={"/"}>
                    <svg width={80} height={80} viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" transform="rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 10L6 12L8 14" stroke="#ffffff" stroke-width="1.44" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M16 10L18 12L16 14" stroke="#ffffff" stroke-width="1.44" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#94a3b8" stroke-width="1.44" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M13 9.66992L11 14.33" stroke="#ffffff" stroke-width="1.44" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </Link>
            </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-10 " justify="center">
            <NavbarItem>
            <Link className="text-slate-300 text-lg hover:text-slate-50" href="/">
                Home
            </Link>
            </NavbarItem>
            <NavbarItem>
            <Link className="text-slate-300 text-lg hover:text-slate-50" href="/docs">
                Docs
            </Link>
            </NavbarItem>
            <NavbarItem>
            <Link className="text-slate-300 text-lg hover:text-slate-50" color="foreground" href="https://github.com/Manuel-latorre/website-api">
                Github
            </Link>
            </NavbarItem>
        </NavbarContent>
        <NavbarMenu className="bg-slate-800 pt-5">
                <section className=" mt-10 flex flex-col gap-5">
                    <NavbarItem>
                        <Link onClick={() => setIsMenuOpen(false)} href="/" className="text-white text-lg pb-4">
                            Home
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link onClick={() => setIsMenuOpen(false)} href="/docs" className="text-white text-lg pb-4">
                            Docs
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link onClick={() => setIsMenuOpen(false)} href="https://github.com/Manuel-latorre/website-api" className="text-white text-lg pb-4">
                            Github
                        </Link>
                    </NavbarItem>
                </section>
                <section className="mt-10 flex flex-col gap-5">
                    <div className="flex items-center gap-2">
                        <svg width={25} height={25} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M6.2 2H6.16146H6.16142C5.63429 1.99998 5.17954 1.99997 4.80497 2.03057C4.40963 2.06287 4.01641 2.13419 3.63803 2.32698C3.07354 2.6146 2.6146 3.07354 2.32698 3.63803C2.13419 4.01641 2.06287 4.40963 2.03057 4.80497C1.99997 5.17954 1.99998 5.63429 2 6.16142V6.16146V6.2V6.8V6.83855V6.83859C1.99998 7.36572 1.99997 7.82047 2.03057 8.19503C2.06287 8.59037 2.13419 8.98359 2.32698 9.36197C2.6146 9.92646 3.07354 10.3854 3.63803 10.673C4.01641 10.8658 4.40963 10.9371 4.80497 10.9694C5.17954 11 5.6343 11 6.16145 11H6.16148H6.2H6.8H6.83852H6.83855C7.3657 11 7.82046 11 8.19503 10.9694C8.59037 10.9371 8.98359 10.8658 9.36197 10.673C9.92646 10.3854 10.3854 9.92646 10.673 9.36197C10.8658 8.98359 10.9371 8.59037 10.9694 8.19503C11 7.82046 11 7.3657 11 6.83855V6.83852V6.8V6.2V6.16148V6.16145C11 5.6343 11 5.17954 10.9694 4.80497C10.9371 4.40963 10.8658 4.01641 10.673 3.63803C10.3854 3.07354 9.92646 2.6146 9.36197 2.32698C8.98359 2.13419 8.59037 2.06287 8.19503 2.03057C7.82047 1.99997 7.36572 1.99998 6.83859 2H6.83855H6.8H6.2ZM4.54601 4.109C4.59546 4.0838 4.69617 4.04612 4.96784 4.02393C5.25117 4.00078 5.62345 4 6.2 4H6.8C7.37655 4 7.74883 4.00078 8.03217 4.02393C8.30383 4.04612 8.40455 4.0838 8.45399 4.109C8.64215 4.20487 8.79514 4.35785 8.89101 4.54601C8.9162 4.59546 8.95388 4.69617 8.97607 4.96784C8.99922 5.25117 9 5.62345 9 6.2V6.8C9 7.37655 8.99922 7.74883 8.97607 8.03217C8.95388 8.30383 8.9162 8.40455 8.89101 8.45399C8.79514 8.64215 8.64215 8.79514 8.45399 8.89101C8.40455 8.9162 8.30383 8.95388 8.03217 8.97607C7.74883 8.99922 7.37656 9 6.8 9H6.2C5.62345 9 5.25117 8.99922 4.96784 8.97607C4.69617 8.95388 4.59546 8.9162 4.54601 8.89101C4.35785 8.79514 4.20487 8.64215 4.109 8.45399C4.0838 8.40455 4.04612 8.30383 4.02393 8.03217C4.00078 7.74883 4 7.37656 4 6.8V6.2C4 5.62345 4.00078 5.25117 4.02393 4.96784C4.04612 4.69617 4.0838 4.59546 4.109 4.54601C4.20487 4.35785 4.35785 4.20487 4.54601 4.109ZM17.2 2H17.1615H17.1614C16.6343 1.99998 16.1795 1.99997 15.805 2.03057C15.4096 2.06287 15.0164 2.13419 14.638 2.32698C14.0735 2.6146 13.6146 3.07354 13.327 3.63803C13.1342 4.01641 13.0629 4.40963 13.0306 4.80497C13 5.17955 13 5.63431 13 6.16146L13 6.2V6.8L13 6.83855C13 7.36569 13 7.82046 13.0306 8.19503C13.0629 8.59037 13.1342 8.98359 13.327 9.36197C13.6146 9.92646 14.0735 10.3854 14.638 10.673C15.0164 10.8658 15.4096 10.9371 15.805 10.9694C16.1795 11 16.6343 11 17.1615 11H17.1615H17.2H17.8H17.8385H17.8386C18.3657 11 18.8205 11 19.195 10.9694C19.5904 10.9371 19.9836 10.8658 20.362 10.673C20.9265 10.3854 21.3854 9.92646 21.673 9.36197C21.8658 8.98359 21.9371 8.59037 21.9694 8.19503C22 7.82049 22 7.36578 22 6.83869V6.83867V6.83864V6.83852V6.8V6.2V6.16148V6.16136V6.16134V6.16131C22 5.63422 22 5.17951 21.9694 4.80497C21.9371 4.40963 21.8658 4.01641 21.673 3.63803C21.3854 3.07354 20.9265 2.6146 20.362 2.32698C19.9836 2.13419 19.5904 2.06287 19.195 2.03057C18.8205 1.99997 18.3657 1.99998 17.8386 2H17.8385H17.8H17.2ZM15.546 4.109C15.5955 4.0838 15.6962 4.04612 15.9678 4.02393C16.2512 4.00078 16.6234 4 17.2 4H17.8C18.3766 4 18.7488 4.00078 19.0322 4.02393C19.3038 4.04612 19.4045 4.0838 19.454 4.109C19.6422 4.20487 19.7951 4.35785 19.891 4.54601C19.9162 4.59546 19.9539 4.69617 19.9761 4.96784C19.9992 5.25117 20 5.62345 20 6.2V6.8C20 7.37655 19.9992 7.74883 19.9761 8.03217C19.9539 8.30383 19.9162 8.40455 19.891 8.45399C19.7951 8.64215 19.6422 8.79514 19.454 8.89101C19.4045 8.9162 19.3038 8.95388 19.0322 8.97607C18.7488 8.99922 18.3766 9 17.8 9H17.2C16.6234 9 16.2512 8.99922 15.9678 8.97607C15.6962 8.95388 15.5955 8.9162 15.546 8.89101C15.3578 8.79514 15.2049 8.64215 15.109 8.45399C15.0838 8.40455 15.0461 8.30383 15.0239 8.03217C15.0008 7.74883 15 7.37656 15 6.8V6.2C15 5.62345 15.0008 5.25117 15.0239 4.96784C15.0461 4.69617 15.0838 4.59546 15.109 4.54601C15.2049 4.35785 15.3578 4.20487 15.546 4.109ZM6.16146 13L6.2 13H6.8L6.83855 13C7.36569 13 7.82046 13 8.19503 13.0306C8.59037 13.0629 8.98359 13.1342 9.36197 13.327C9.92646 13.6146 10.3854 14.0735 10.673 14.638C10.8658 15.0164 10.9371 15.4096 10.9694 15.805C11 16.1795 11 16.6343 11 17.1615V17.1615V17.2V17.8V17.8385V17.8386C11 18.3657 11 18.8205 10.9694 19.195C10.9371 19.5904 10.8658 19.9836 10.673 20.362C10.3854 20.9265 9.92646 21.3854 9.36197 21.673C8.98359 21.8658 8.59037 21.9371 8.19503 21.9694C7.82049 22 7.36577 22 6.83867 22H6.83865H6.83852H6.8H6.2H6.16148H6.16136H6.16134C5.63424 22 5.17952 22 4.80497 21.9694C4.40963 21.9371 4.01641 21.8658 3.63803 21.673C3.07354 21.3854 2.6146 20.9265 2.32698 20.362C2.13419 19.9836 2.06287 19.5904 2.03057 19.195C1.99997 18.8205 1.99998 18.3657 2 17.8386V17.8385V17.8V17.2V17.1615V17.1614C1.99998 16.6343 1.99997 16.1795 2.03057 15.805C2.06287 15.4096 2.13419 15.0164 2.32698 14.638C2.6146 14.0735 3.07354 13.6146 3.63803 13.327C4.01641 13.1342 4.40963 13.0629 4.80497 13.0306C5.17955 13 5.63431 13 6.16146 13ZM4.96784 15.0239C4.69617 15.0461 4.59546 15.0838 4.54601 15.109C4.35785 15.2049 4.20487 15.3578 4.109 15.546C4.0838 15.5955 4.04612 15.6962 4.02393 15.9678C4.00078 16.2512 4 16.6234 4 17.2V17.8C4 18.3766 4.00078 18.7488 4.02393 19.0322C4.04612 19.3038 4.0838 19.4045 4.109 19.454C4.20487 19.6422 4.35785 19.7951 4.54601 19.891C4.59546 19.9162 4.69617 19.9539 4.96784 19.9761C5.25117 19.9992 5.62345 20 6.2 20H6.8C7.37656 20 7.74883 19.9992 8.03217 19.9761C8.30383 19.9539 8.40455 19.9162 8.45399 19.891C8.64215 19.7951 8.79514 19.6422 8.89101 19.454C8.9162 19.4045 8.95388 19.3038 8.97607 19.0322C8.99922 18.7488 9 18.3766 9 17.8V17.2C9 16.6234 8.99922 16.2512 8.97607 15.9678C8.95388 15.6962 8.9162 15.5955 8.89101 15.546C8.79514 15.3578 8.64215 15.2049 8.45399 15.109C8.40455 15.0838 8.30383 15.0461 8.03217 15.0239C7.74883 15.0008 7.37655 15 6.8 15H6.2C5.62345 15 5.25117 15.0008 4.96784 15.0239ZM17.2 13L17.1615 13C16.6343 13 16.1795 13 15.805 13.0306C15.4096 13.0629 15.0164 13.1342 14.638 13.327C14.0735 13.6146 13.6146 14.0735 13.327 14.638C13.1342 15.0164 13.0629 15.4096 13.0306 15.805C13 16.1795 13 16.6343 13 17.1615L13 17.2V17.8L13 17.8385C13 18.3657 13 18.8205 13.0306 19.195C13.0629 19.5904 13.1342 19.9836 13.327 20.362C13.6146 20.9265 14.0735 21.3854 14.638 21.673C15.0164 21.8658 15.4096 21.9371 15.805 21.9694C16.1795 22 16.6343 22 17.1614 22H17.1615H17.2H17.8H17.8385H17.8386C18.3658 22 18.8205 22 19.195 21.9694C19.5904 21.9371 19.9836 21.8658 20.362 21.673C20.9265 21.3854 21.3854 20.9265 21.673 20.362C21.8658 19.9836 21.9371 19.5904 21.9694 19.195C22 18.8205 22 18.3658 22 17.8386V17.8385V17.8V17.2V17.1615V17.1614C22 16.6343 22 16.1795 21.9694 15.805C21.9371 15.4096 21.8658 15.0164 21.673 14.638C21.3854 14.0735 20.9265 13.6146 20.362 13.327C19.9836 13.1342 19.5904 13.0629 19.195 13.0306C18.8205 13 18.3657 13 17.8385 13L17.8 13H17.2ZM15.546 15.109C15.5955 15.0838 15.6962 15.0461 15.9678 15.0239C16.2512 15.0008 16.6234 15 17.2 15H17.8C18.3766 15 18.7488 15.0008 19.0322 15.0239C19.3038 15.0461 19.4045 15.0838 19.454 15.109C19.6422 15.2049 19.7951 15.3578 19.891 15.546C19.9162 15.5955 19.9539 15.6962 19.9761 15.9678C19.9992 16.2512 20 16.6234 20 17.2V17.8C20 18.3766 19.9992 18.7488 19.9761 19.0322C19.9539 19.3038 19.9162 19.4045 19.891 19.454C19.7951 19.6422 19.6422 19.7951 19.454 19.891C19.4045 19.9162 19.3038 19.9539 19.0322 19.9761C18.7488 19.9992 18.3766 20 17.8 20H17.2C16.6234 20 16.2512 19.9992 15.9678 19.9761C15.6962 19.9539 15.5955 19.9162 15.546 19.891C15.3578 19.7951 15.2049 19.6422 15.109 19.454C15.0838 19.4045 15.0461 19.3038 15.0239 19.0322C15.0008 18.7488 15 18.3766 15 17.8V17.2C15 16.6234 15.0008 16.2512 15.0239 15.9678C15.0461 15.6962 15.0838 15.5955 15.109 15.546C15.2049 15.3578 15.3578 15.2049 15.546 15.109Z" fill="#ffffff"></path> </g></svg>
                        <p className="text-xl text-white">Resources</p>
                    </div>
                    <ul className="flex flex-col ml-3 gap-4">
                        <li>
                            <Link onClick={() => setIsMenuOpen(false)} href="#getAllProducts" className="text-xl text-slate-300 hover:bg-slate-500 flex items-center gap-2">
                                <svg width={22} height={22} viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g fill="none" fill-rule="evenodd" id="页面-1" stroke-width="0.984"> <g id="导航图标" transform="translate(-325.000000, -80.000000)"> <g id="编组" transform="translate(325.000000, 80.000000)"> <polygon fill="#ffffffFFFFFF" fill-opacity="0.01" fill-rule="nonzero" id="路径" points="24 0 0 0 0 24 24 24"></polygon> <polygon id="路径" points="22 7 12 2 2 7 2 17 12 22 22 17" stroke="#ffffff" stroke-linejoin="round" stroke-width="0.984"></polygon> <line id="路径" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.984" x1="2" x2="12" y1="7" y2="12"></line> <line id="路径" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.984" x1="12" x2="12" y1="22" y2="12"></line> <line id="路径" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.984" x1="22" x2="12" y1="7" y2="12"></line> <line id="路径" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.984" x1="17" x2="7" y1="4.5" y2="9.5"></line> </g> </g> </g> </g></svg>
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link onClick={() => setIsMenuOpen(false)} href="#getCartProducts" className="text-xl text-slate-300 hover:bg-slate-500 flex items-center gap-2 ">
                            <svg width={22} height={22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="#ffffff" stroke-width="0.984" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                Cart
                            </Link>
                        </li>
                        <li>
                            <Link onClick={() => setIsMenuOpen(false)} href="#getAllUsers" className="text-xl text-slate-300 hover:bg-slate-500 flex items-center gap-2">
                                <svg width={22} height={22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#ffffff" stroke-width="0.984" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                Users
                            </Link>
                        </li>
                    </ul>
                </section>
                <section className="mt-10 flex flex-col gap-5">
                    <div className="flex items-center gap-2">
                    <svg width={25} height={25} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="18" cy="18" r="3"></circle> <circle cx="6" cy="6" r="3"></circle> <path d="M13 6h3a2 2 0 012 2v7"></path> <line x1="6" y1="9" x2="6" y2="21"></line> </g></svg>
                        <p className="text-xl text-white">Requests</p>
                    </div>
                    <NavbarItem>
                        <Accordion isCompact={true} className="w-3/5">
                            <AccordionItem key="1" aria-label="GET" title="GET">
                              Hola
                            </AccordionItem>
                            <AccordionItem key="2" aria-label="POST" title="POST">
                              Hola
                            </AccordionItem>
                            <AccordionItem key="3" aria-label="PUT" title="PUT">
                              Hola
                            </AccordionItem>
                            <AccordionItem key="4" aria-label="DELETE" title="DELETE">
                              Hola
                            </AccordionItem>
                        </Accordion>
                    </NavbarItem>

                    
                </section>
            </NavbarMenu>
        </Navbar>
    )
}