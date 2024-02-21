'use client'

// import Link from "next/link";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, DropdownItem, DropdownMenu, Dropdown, DropdownTrigger, Accordion, AccordionItem, Link} from "@nextui-org/react";
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
            <Link className="text-slate-300 text-lg hover:text-slate-50" color="foreground" href="https://github.com/Manuel-latorre/api-ecommerce" target="_blank">
                Github
            </Link>
            </NavbarItem>
        </NavbarContent>
        <NavbarMenu className="bg-slate-800 pt-5">
                <section className=" mt-10 flex flex-col gap-5">
                    <div className="flex items-center gap-2">
                        <svg width={25} height={25} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M0 0h48v48H0z" fill="none"></path> <g id="Shopicon"> <path d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20c11.046,0,20-8.954,20-20S35.046,4,24,4z M31.96,22 c-0.208-5.225-1.223-9.846-2.726-13.103c5.649,1.964,9.861,6.998,10.627,13.103H31.96z M24,39.9 c-1.213-0.955-3.608-5.736-3.954-13.9h7.908C27.608,34.164,25.213,38.945,24,39.9z M20.046,22C20.392,13.836,22.787,9.055,24,8.1 c1.213,0.955,3.608,5.736,3.954,13.9H20.046z M18.766,8.897C17.264,12.154,16.248,16.775,16.04,22H8.139 C8.905,15.896,13.117,10.861,18.766,8.897z M16.04,26c0.208,5.225,1.223,9.846,2.726,13.103C13.117,37.139,8.905,32.104,8.139,26 H16.04z M29.234,39.103c1.502-3.257,2.518-7.878,2.726-13.103h7.902C39.095,32.104,34.883,37.139,29.234,39.103z"></path> </g> </g></svg>
                        <p className="text-xl text-white">Pages</p>
                    </div>
                    <ul className="flex flex-col ml-3 gap-4">
                        <li>
                            <Link onClick={() => setIsMenuOpen(false)} href="/" className="text-xl text-slate-300 hover:bg-slate-500 flex items-center gap-2">
                            <svg width={22} height={22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 15.0001C8 15.0001 9.6 17.0001 12 17.0001C14.4 17.0001 16 15.0001 16 15.0001M3 14.6001V12.1302C3 10.9815 3 10.4071 3.14805 9.87819C3.2792 9.40966 3.49473 8.96898 3.78405 8.5778C4.11067 8.1362 4.56404 7.78358 5.47078 7.07834L8.07078 5.05612C9.47608 3.96311 10.1787 3.4166 10.9546 3.20653C11.6392 3.02116 12.3608 3.02116 13.0454 3.20653C13.8213 3.4166 14.5239 3.96311 15.9292 5.05612L18.5292 7.07834C19.436 7.78358 19.8893 8.1362 20.2159 8.5778C20.5053 8.96898 20.7208 9.40966 20.8519 9.87819C21 10.4071 21 10.9815 21 12.1302V14.6001C21 16.8403 21 17.9604 20.564 18.816C20.1805 19.5687 19.5686 20.1806 18.816 20.5641C17.9603 21.0001 16.8402 21.0001 14.6 21.0001H9.4C7.15979 21.0001 6.03969 21.0001 5.18404 20.5641C4.43139 20.1806 3.81947 19.5687 3.43597 18.816C3 17.9604 3 16.8403 3 14.6001Z" stroke="#ffffff" stroke-width="0.984" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link onClick={() => setIsMenuOpen(false)} href="/docs" className="text-xl text-slate-300 hover:bg-slate-500 flex items-center gap-2">
                            <svg width={22} height={22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#ffffff" stroke-width="0.984"></path> <path d="M15.5 9L15.6716 9.17157C17.0049 10.5049 17.6716 11.1716 17.6716 12C17.6716 12.8284 17.0049 13.4951 15.6716 14.8284L15.5 15" stroke="#ffffff" stroke-width="0.984" stroke-linecap="round"></path> <path d="M13.2939 7.17041L11.9998 12L10.7058 16.8297" stroke="#ffffff" stroke-width="0.984" stroke-linecap="round"></path> <path d="M8.50019 9L8.32861 9.17157C6.99528 10.5049 6.32861 11.1716 6.32861 12C6.32861 12.8284 6.99528 13.4951 8.32861 14.8284L8.50019 15" stroke="#ffffff" stroke-width="0.984" stroke-linecap="round"></path> </g></svg>
                                Docs
                            </Link>                         
                        </li> 
                        <li>
                            <Link onClick={() => setIsMenuOpen(false)} href="https://github.com/Manuel-latorre/api-ecommerce" target="_blank" className="text-xl text-slate-300 hover:bg-slate-500 flex items-center gap-2">
                            <svg width={22} height={22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.54545C5.94479 1.54545 1.04348 6.42167 1.04348 12.4277C1.04348 16.8374 3.6861 20.6328 7.4903 22.3403C7.88799 22.5188 8.27744 22.4482 8.58123 22.2205C8.89257 21.9871 9.11323 21.5853 9.11323 21.1128V20.5426L7.75618 20.3588C7.74631 20.3575 7.73648 20.3559 7.72671 20.354C6.97768 20.2083 6.47304 19.9453 6.10316 19.5662C5.7917 19.247 5.60192 18.8646 5.44107 18.5405C5.42204 18.5022 5.40342 18.4647 5.38505 18.4282C5.18145 18.0236 5.03633 17.7364 4.89784 17.5171C4.76321 17.304 4.65787 17.1937 4.55411 17.1249C4.28955 16.9497 4.03631 16.6531 4.03631 16.2816C4.03631 16.0778 4.1185 15.8695 4.29663 15.722C4.46448 15.583 4.66637 15.5395 4.84185 15.5395C5.06432 15.5395 5.27305 15.6076 5.44732 15.6858C5.6254 15.7657 5.80173 15.8721 5.96683 15.9821C6.36867 16.25 6.76495 16.5675 7.10004 16.9576C7.44896 17.3638 7.69554 17.6224 8.06841 17.6753C8.37359 17.7186 8.68574 17.7199 8.92914 17.7088C8.93981 17.651 8.95288 17.5898 8.96889 17.5263C8.99766 17.4123 9.03798 17.2829 9.09513 17.149C8.81903 17.0842 8.51955 16.9997 8.21846 16.8929C7.56371 16.6607 6.83548 16.3005 6.34535 15.7526C5.80695 15.1508 5.47376 14.6145 5.28766 13.9858C5.10653 13.3739 5.07692 12.7113 5.07692 11.8945C5.07692 10.6456 5.61813 9.59213 6.02356 9.03344C5.89031 8.60808 5.7509 8.05573 5.68912 7.53172C5.65119 7.20991 5.63878 6.86932 5.68999 6.56435C5.73929 6.27079 5.86521 5.91105 6.19386 5.69335C6.51135 5.48304 6.88251 5.49165 7.17256 5.54637C7.47424 5.60328 7.78715 5.72824 8.07491 5.87064C8.5435 6.10253 9.00981 6.41322 9.35917 6.67557C9.96146 6.49867 11.0262 6.27125 11.9886 6.25009C11.9962 6.24993 12.0038 6.24993 12.0114 6.25009C12.9746 6.27127 13.9923 6.49865 14.5789 6.67472C14.9281 6.41255 15.3939 6.10228 15.862 5.87064C16.1498 5.72824 16.4627 5.60328 16.7644 5.54637C17.0544 5.49165 17.4256 5.48304 17.7431 5.69335C18.0717 5.91105 18.1976 6.27079 18.2469 6.56435C18.2981 6.86932 18.2857 7.20991 18.2478 7.53172C18.186 8.05573 18.0466 8.60808 17.9134 9.03344C18.3188 9.59213 18.86 10.6456 18.86 11.8945C18.86 12.7113 18.8304 13.3739 18.6493 13.9858C18.4632 14.6145 18.13 15.1508 17.5916 15.7526C17.1015 16.3005 16.3732 16.6607 15.7185 16.8929C15.3488 17.024 14.9816 17.1215 14.6571 17.1902C14.78 17.562 14.8237 17.863 14.8237 18.0357V21.1255C14.8237 21.5964 15.043 21.9975 15.3532 22.2314C15.656 22.4598 16.0446 22.5319 16.4424 22.3567C20.2814 20.6648 22.9565 16.8603 22.9565 12.4277C22.9565 6.42167 18.0552 1.54545 12 1.54545ZM9.47621 18.7103C9.21695 18.7474 9.47471 18.7106 9.47471 18.7106L9.47202 18.7109L9.46363 18.7121L9.43515 18.7157C9.41116 18.7187 9.37728 18.7227 9.33492 18.727C9.25033 18.7356 9.13113 18.7458 8.98854 18.7526C8.70624 18.766 8.31904 18.7667 7.92203 18.7104C7.13052 18.598 6.65046 18.0378 6.33885 17.6742C6.32876 17.6624 6.31886 17.6509 6.30913 17.6395C6.20907 17.523 6.09953 17.4125 5.98201 17.307C6.08533 17.4975 6.19176 17.709 6.3068 17.9376L6.31681 17.9575C6.33465 17.993 6.35183 18.0273 6.36849 18.0605C6.54298 18.4089 6.65892 18.6403 6.8493 18.8354C7.03478 19.0255 7.32532 19.2089 7.91124 19.3249L9.70488 19.5678C9.96366 19.6029 10.1567 19.8242 10.1567 20.0858V21.1128C10.1567 21.9133 9.78216 22.6259 9.2064 23.0575C8.62309 23.4948 7.83355 23.64 7.06368 23.2944C2.90196 21.4265 0 17.2686 0 12.4277C0 5.83613 5.37667 0.5 12 0.5C18.6233 0.5 24 5.83613 24 12.4277C24 17.2954 21.0612 21.4633 16.8625 23.3136C16.0929 23.6528 15.3063 23.5045 14.7257 23.0667C14.1525 22.6344 13.7802 21.9234 13.7802 21.1255V18.0357C13.7802 17.9657 13.7313 17.5614 13.4577 17.0177C13.3807 16.8647 13.3834 16.6837 13.4649 16.5331C13.5465 16.3826 13.6965 16.2816 13.8664 16.2628C14.2086 16.225 14.787 16.1142 15.3703 15.9074C15.9643 15.6967 16.4974 15.4094 16.8145 15.0549C17.2852 14.5287 17.5196 14.1251 17.6489 13.6885C17.7831 13.2351 17.8165 12.7071 17.8165 11.8945C17.8165 10.7538 17.2169 9.79498 16.9407 9.48618C16.8134 9.34393 16.7737 9.14346 16.8372 8.96333C16.9762 8.56877 17.147 7.95628 17.2115 7.4091C17.244 7.13351 17.2458 6.90386 17.2179 6.7378C17.1992 6.6261 17.1738 6.57992 17.1641 6.56531C17.1461 6.56043 17.087 6.54932 16.9575 6.57376C16.7872 6.60589 16.5703 6.68615 16.3241 6.80799C15.8345 7.05026 15.3246 7.40853 15.0077 7.66438C14.8659 7.77889 14.6747 7.81099 14.5034 7.74908C14.1011 7.60372 13.0026 7.31957 12 7.29555C10.9929 7.31966 9.8314 7.60534 9.43357 7.74908C9.26222 7.81099 9.07104 7.77889 8.92921 7.66438C8.6123 7.40853 8.1024 7.05026 7.61281 6.80799C7.3666 6.68615 7.14974 6.60589 6.97947 6.57376C6.84991 6.54932 6.79082 6.56043 6.77288 6.56531C6.76313 6.57992 6.73777 6.6261 6.71901 6.7378C6.69113 6.90386 6.69291 7.13351 6.7254 7.4091C6.7899 7.95628 6.96075 8.56877 7.09974 8.96333C7.16319 9.14346 7.12352 9.34393 6.99626 9.48618C6.72 9.79498 6.1204 10.7538 6.1204 11.8945C6.1204 12.7071 6.15386 13.2351 6.28807 13.6885C6.4173 14.1251 6.65172 14.5287 7.1224 15.0549C7.43953 15.4094 7.97265 15.6967 8.56664 15.9074C9.14989 16.1142 9.72837 16.225 10.0705 16.2628C10.2856 16.2865 10.4637 16.4408 10.5182 16.6505C10.5728 16.8602 10.4925 17.082 10.3165 17.2079C10.1511 17.3261 10.0423 17.5378 9.98056 17.7825C9.95142 17.898 9.93711 18.0043 9.93027 18.0813C9.92688 18.1194 9.92543 18.1492 9.92481 18.1679L9.92437 18.1869C9.92729 18.4492 9.73547 18.6733 9.47621 18.7103Z" fill="#ffffff"></path> </g></svg>
                                Github
                            </Link>
                        </li>

                    </ul>
                </section>
                <section className="mt-10 flex flex-col gap-5">
                    <div className="flex items-center gap-2">
                        <svg width={25} height={25} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M6.2 2H6.16146H6.16142C5.63429 1.99998 5.17954 1.99997 4.80497 2.03057C4.40963 2.06287 4.01641 2.13419 3.63803 2.32698C3.07354 2.6146 2.6146 3.07354 2.32698 3.63803C2.13419 4.01641 2.06287 4.40963 2.03057 4.80497C1.99997 5.17954 1.99998 5.63429 2 6.16142V6.16146V6.2V6.8V6.83855V6.83859C1.99998 7.36572 1.99997 7.82047 2.03057 8.19503C2.06287 8.59037 2.13419 8.98359 2.32698 9.36197C2.6146 9.92646 3.07354 10.3854 3.63803 10.673C4.01641 10.8658 4.40963 10.9371 4.80497 10.9694C5.17954 11 5.6343 11 6.16145 11H6.16148H6.2H6.8H6.83852H6.83855C7.3657 11 7.82046 11 8.19503 10.9694C8.59037 10.9371 8.98359 10.8658 9.36197 10.673C9.92646 10.3854 10.3854 9.92646 10.673 9.36197C10.8658 8.98359 10.9371 8.59037 10.9694 8.19503C11 7.82046 11 7.3657 11 6.83855V6.83852V6.8V6.2V6.16148V6.16145C11 5.6343 11 5.17954 10.9694 4.80497C10.9371 4.40963 10.8658 4.01641 10.673 3.63803C10.3854 3.07354 9.92646 2.6146 9.36197 2.32698C8.98359 2.13419 8.59037 2.06287 8.19503 2.03057C7.82047 1.99997 7.36572 1.99998 6.83859 2H6.83855H6.8H6.2ZM4.54601 4.109C4.59546 4.0838 4.69617 4.04612 4.96784 4.02393C5.25117 4.00078 5.62345 4 6.2 4H6.8C7.37655 4 7.74883 4.00078 8.03217 4.02393C8.30383 4.04612 8.40455 4.0838 8.45399 4.109C8.64215 4.20487 8.79514 4.35785 8.89101 4.54601C8.9162 4.59546 8.95388 4.69617 8.97607 4.96784C8.99922 5.25117 9 5.62345 9 6.2V6.8C9 7.37655 8.99922 7.74883 8.97607 8.03217C8.95388 8.30383 8.9162 8.40455 8.89101 8.45399C8.79514 8.64215 8.64215 8.79514 8.45399 8.89101C8.40455 8.9162 8.30383 8.95388 8.03217 8.97607C7.74883 8.99922 7.37656 9 6.8 9H6.2C5.62345 9 5.25117 8.99922 4.96784 8.97607C4.69617 8.95388 4.59546 8.9162 4.54601 8.89101C4.35785 8.79514 4.20487 8.64215 4.109 8.45399C4.0838 8.40455 4.04612 8.30383 4.02393 8.03217C4.00078 7.74883 4 7.37656 4 6.8V6.2C4 5.62345 4.00078 5.25117 4.02393 4.96784C4.04612 4.69617 4.0838 4.59546 4.109 4.54601C4.20487 4.35785 4.35785 4.20487 4.54601 4.109ZM17.2 2H17.1615H17.1614C16.6343 1.99998 16.1795 1.99997 15.805 2.03057C15.4096 2.06287 15.0164 2.13419 14.638 2.32698C14.0735 2.6146 13.6146 3.07354 13.327 3.63803C13.1342 4.01641 13.0629 4.40963 13.0306 4.80497C13 5.17955 13 5.63431 13 6.16146L13 6.2V6.8L13 6.83855C13 7.36569 13 7.82046 13.0306 8.19503C13.0629 8.59037 13.1342 8.98359 13.327 9.36197C13.6146 9.92646 14.0735 10.3854 14.638 10.673C15.0164 10.8658 15.4096 10.9371 15.805 10.9694C16.1795 11 16.6343 11 17.1615 11H17.1615H17.2H17.8H17.8385H17.8386C18.3657 11 18.8205 11 19.195 10.9694C19.5904 10.9371 19.9836 10.8658 20.362 10.673C20.9265 10.3854 21.3854 9.92646 21.673 9.36197C21.8658 8.98359 21.9371 8.59037 21.9694 8.19503C22 7.82049 22 7.36578 22 6.83869V6.83867V6.83864V6.83852V6.8V6.2V6.16148V6.16136V6.16134V6.16131C22 5.63422 22 5.17951 21.9694 4.80497C21.9371 4.40963 21.8658 4.01641 21.673 3.63803C21.3854 3.07354 20.9265 2.6146 20.362 2.32698C19.9836 2.13419 19.5904 2.06287 19.195 2.03057C18.8205 1.99997 18.3657 1.99998 17.8386 2H17.8385H17.8H17.2ZM15.546 4.109C15.5955 4.0838 15.6962 4.04612 15.9678 4.02393C16.2512 4.00078 16.6234 4 17.2 4H17.8C18.3766 4 18.7488 4.00078 19.0322 4.02393C19.3038 4.04612 19.4045 4.0838 19.454 4.109C19.6422 4.20487 19.7951 4.35785 19.891 4.54601C19.9162 4.59546 19.9539 4.69617 19.9761 4.96784C19.9992 5.25117 20 5.62345 20 6.2V6.8C20 7.37655 19.9992 7.74883 19.9761 8.03217C19.9539 8.30383 19.9162 8.40455 19.891 8.45399C19.7951 8.64215 19.6422 8.79514 19.454 8.89101C19.4045 8.9162 19.3038 8.95388 19.0322 8.97607C18.7488 8.99922 18.3766 9 17.8 9H17.2C16.6234 9 16.2512 8.99922 15.9678 8.97607C15.6962 8.95388 15.5955 8.9162 15.546 8.89101C15.3578 8.79514 15.2049 8.64215 15.109 8.45399C15.0838 8.40455 15.0461 8.30383 15.0239 8.03217C15.0008 7.74883 15 7.37656 15 6.8V6.2C15 5.62345 15.0008 5.25117 15.0239 4.96784C15.0461 4.69617 15.0838 4.59546 15.109 4.54601C15.2049 4.35785 15.3578 4.20487 15.546 4.109ZM6.16146 13L6.2 13H6.8L6.83855 13C7.36569 13 7.82046 13 8.19503 13.0306C8.59037 13.0629 8.98359 13.1342 9.36197 13.327C9.92646 13.6146 10.3854 14.0735 10.673 14.638C10.8658 15.0164 10.9371 15.4096 10.9694 15.805C11 16.1795 11 16.6343 11 17.1615V17.1615V17.2V17.8V17.8385V17.8386C11 18.3657 11 18.8205 10.9694 19.195C10.9371 19.5904 10.8658 19.9836 10.673 20.362C10.3854 20.9265 9.92646 21.3854 9.36197 21.673C8.98359 21.8658 8.59037 21.9371 8.19503 21.9694C7.82049 22 7.36577 22 6.83867 22H6.83865H6.83852H6.8H6.2H6.16148H6.16136H6.16134C5.63424 22 5.17952 22 4.80497 21.9694C4.40963 21.9371 4.01641 21.8658 3.63803 21.673C3.07354 21.3854 2.6146 20.9265 2.32698 20.362C2.13419 19.9836 2.06287 19.5904 2.03057 19.195C1.99997 18.8205 1.99998 18.3657 2 17.8386V17.8385V17.8V17.2V17.1615V17.1614C1.99998 16.6343 1.99997 16.1795 2.03057 15.805C2.06287 15.4096 2.13419 15.0164 2.32698 14.638C2.6146 14.0735 3.07354 13.6146 3.63803 13.327C4.01641 13.1342 4.40963 13.0629 4.80497 13.0306C5.17955 13 5.63431 13 6.16146 13ZM4.96784 15.0239C4.69617 15.0461 4.59546 15.0838 4.54601 15.109C4.35785 15.2049 4.20487 15.3578 4.109 15.546C4.0838 15.5955 4.04612 15.6962 4.02393 15.9678C4.00078 16.2512 4 16.6234 4 17.2V17.8C4 18.3766 4.00078 18.7488 4.02393 19.0322C4.04612 19.3038 4.0838 19.4045 4.109 19.454C4.20487 19.6422 4.35785 19.7951 4.54601 19.891C4.59546 19.9162 4.69617 19.9539 4.96784 19.9761C5.25117 19.9992 5.62345 20 6.2 20H6.8C7.37656 20 7.74883 19.9992 8.03217 19.9761C8.30383 19.9539 8.40455 19.9162 8.45399 19.891C8.64215 19.7951 8.79514 19.6422 8.89101 19.454C8.9162 19.4045 8.95388 19.3038 8.97607 19.0322C8.99922 18.7488 9 18.3766 9 17.8V17.2C9 16.6234 8.99922 16.2512 8.97607 15.9678C8.95388 15.6962 8.9162 15.5955 8.89101 15.546C8.79514 15.3578 8.64215 15.2049 8.45399 15.109C8.40455 15.0838 8.30383 15.0461 8.03217 15.0239C7.74883 15.0008 7.37655 15 6.8 15H6.2C5.62345 15 5.25117 15.0008 4.96784 15.0239ZM17.2 13L17.1615 13C16.6343 13 16.1795 13 15.805 13.0306C15.4096 13.0629 15.0164 13.1342 14.638 13.327C14.0735 13.6146 13.6146 14.0735 13.327 14.638C13.1342 15.0164 13.0629 15.4096 13.0306 15.805C13 16.1795 13 16.6343 13 17.1615L13 17.2V17.8L13 17.8385C13 18.3657 13 18.8205 13.0306 19.195C13.0629 19.5904 13.1342 19.9836 13.327 20.362C13.6146 20.9265 14.0735 21.3854 14.638 21.673C15.0164 21.8658 15.4096 21.9371 15.805 21.9694C16.1795 22 16.6343 22 17.1614 22H17.1615H17.2H17.8H17.8385H17.8386C18.3658 22 18.8205 22 19.195 21.9694C19.5904 21.9371 19.9836 21.8658 20.362 21.673C20.9265 21.3854 21.3854 20.9265 21.673 20.362C21.8658 19.9836 21.9371 19.5904 21.9694 19.195C22 18.8205 22 18.3658 22 17.8386V17.8385V17.8V17.2V17.1615V17.1614C22 16.6343 22 16.1795 21.9694 15.805C21.9371 15.4096 21.8658 15.0164 21.673 14.638C21.3854 14.0735 20.9265 13.6146 20.362 13.327C19.9836 13.1342 19.5904 13.0629 19.195 13.0306C18.8205 13 18.3657 13 17.8385 13L17.8 13H17.2ZM15.546 15.109C15.5955 15.0838 15.6962 15.0461 15.9678 15.0239C16.2512 15.0008 16.6234 15 17.2 15H17.8C18.3766 15 18.7488 15.0008 19.0322 15.0239C19.3038 15.0461 19.4045 15.0838 19.454 15.109C19.6422 15.2049 19.7951 15.3578 19.891 15.546C19.9162 15.5955 19.9539 15.6962 19.9761 15.9678C19.9992 16.2512 20 16.6234 20 17.2V17.8C20 18.3766 19.9992 18.7488 19.9761 19.0322C19.9539 19.3038 19.9162 19.4045 19.891 19.454C19.7951 19.6422 19.6422 19.7951 19.454 19.891C19.4045 19.9162 19.3038 19.9539 19.0322 19.9761C18.7488 19.9992 18.3766 20 17.8 20H17.2C16.6234 20 16.2512 19.9992 15.9678 19.9761C15.6962 19.9539 15.5955 19.9162 15.546 19.891C15.3578 19.7951 15.2049 19.6422 15.109 19.454C15.0838 19.4045 15.0461 19.3038 15.0239 19.0322C15.0008 18.7488 15 18.3766 15 17.8V17.2C15 16.6234 15.0008 16.2512 15.0239 15.9678C15.0461 15.6962 15.0838 15.5955 15.109 15.546C15.2049 15.3578 15.3578 15.2049 15.546 15.109Z" fill="#ffffff"></path> </g></svg>
                        <p className="text-xl text-white">Resources</p>
                    </div>
                    <ul className="flex flex-col ml-3 gap-4">
                        <li>
                            <Link onClick={() => setIsMenuOpen(false)} href={"/docs/#getAllProducts"} className="text-xl text-slate-300 hover:bg-slate-500 flex items-center gap-2">
                                <svg width={22} height={22} viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g fill="none" fill-rule="evenodd" id="页面-1" stroke-width="0.984"> <g id="导航图标" transform="translate(-325.000000, -80.000000)"> <g id="编组" transform="translate(325.000000, 80.000000)"> <polygon fill="#ffffffFFFFFF" fill-opacity="0.01" fill-rule="nonzero" id="路径" points="24 0 0 0 0 24 24 24"></polygon> <polygon id="路径" points="22 7 12 2 2 7 2 17 12 22 22 17" stroke="#ffffff" stroke-linejoin="round" stroke-width="0.984"></polygon> <line id="路径" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.984" x1="2" x2="12" y1="7" y2="12"></line> <line id="路径" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.984" x1="12" x2="12" y1="22" y2="12"></line> <line id="路径" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.984" x1="22" x2="12" y1="7" y2="12"></line> <line id="路径" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.984" x1="17" x2="7" y1="4.5" y2="9.5"></line> </g> </g> </g> </g></svg>
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link onClick={() => setIsMenuOpen(false)} href={"/docs/#getCartProducts"} className="text-xl text-slate-300 hover:bg-slate-500 flex items-center gap-2 ">
                            <svg width={22} height={22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="#ffffff" stroke-width="0.984" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                Cart
                            </Link>
                        </li>
                        <li>
                            <Link onClick={() => setIsMenuOpen(false)} href={"/docs/#getAllUsers"} className="text-xl text-slate-300 hover:bg-slate-500 flex items-center gap-2">
                                <svg width={22} height={22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#ffffff" stroke-width="0.984" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                Users
                            </Link>
                        </li>
                    </ul>
                </section>
                <section className="mt-10 flex flex-col gap-5 mb-10 pb-20">
                    <div className="flex items-center gap-2">
                    <svg width={25} height={25} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="18" cy="18" r="3"></circle> <circle cx="6" cy="6" r="3"></circle> <path d="M13 6h3a2 2 0 012 2v7"></path> <line x1="6" y1="9" x2="6" y2="21"></line> </g></svg>
                        <p className="text-xl text-white">Requests</p>
                    </div>
                    <NavbarItem>
                        <Accordion isCompact={true} className="w-full p-2 flex flex-col gap-2" showDivider={false}>
                            <AccordionItem key="1" aria-label="GET" title={<p className="font-bold text-blue-600">GET</p>} className="bg-blue-900 px-2 rounded-lg text-blue-500">
                              <ul className="flex flex-col gap-4 pb-2">
                                <li className="flex items-center justify-between bg-blue-950 p-1 rounded-lg">
                                    <p>All products</p>
                                    <Link onClick={() => setIsMenuOpen(false)} href={"/docs/#getAllProducts"}>/products</Link>
                                </li>
                                <li className="flex items-center justify-between bg-blue-950 p-1 rounded-lg">
                                    <p>Single product</p>
                                    <Link onClick={() => setIsMenuOpen(false)} href={"/docs/#getASingleProduct"}>/products/:id</Link>
                                </li>
                                <li className="flex items-center justify-between bg-blue-950 p-1 rounded-lg">
                                    <p>Product by name</p>
                                    <Link onClick={() => setIsMenuOpen(false)} href={"/docs/#getASingleProduct"}>/products/search?=name</Link>
                                </li>
                                <li className="flex items-center justify-between bg-blue-950 p-1 rounded-lg">
                                    <p>Cart products</p>
                                    <Link onClick={() => setIsMenuOpen(false)} href={"/docs/#getCartProducts"}>/products-cart</Link>
                                </li>
                                <li className="flex items-center justify-between bg-blue-950 p-1 rounded-lg">
                                    <p>All users</p>
                                    <Link onClick={() => setIsMenuOpen(false)} href={"/docs/#getAllUsers"}>/users</Link>
                                </li>
                                <li className="flex items-center justify-between bg-blue-950 p-1 rounded-lg ">
                                    <p>A user by id</p>
                                    <Link onClick={() => setIsMenuOpen(false)} href={"/docs/#getUserById"}>/user/:idUser</Link>
                                </li>
                              </ul>
                            </AccordionItem>
                            <AccordionItem key="2" aria-label="POST" title={<p className="font-bold text-green-500">POST</p>} className="bg-green-700 px-2 rounded-lg text-green-500">
                                <ul className="flex flex-col gap-4 pb-2">
                                    <li className="flex items-center justify-between bg-green-950 p-1 rounded-lg">
                                        <p>Add product to cart</p>
                                        <Link onClick={() => setIsMenuOpen(false)} href={"/docs/#addProduct"} className="text-green-500">/products-cart</Link>
                                    </li>
                                    <li className="flex items-center justify-between bg-green-950 p-1 rounded-lg">
                                        <p>Register user</p>
                                        <Link onClick={() => setIsMenuOpen(false)} href={"/docs/#registerUser"} className="text-green-500">/register</Link>
                                    </li>
                                    <li className="flex items-center justify-between bg-green-950 p-1 rounded-lg">
                                        <p>Login</p>
                                        <Link onClick={() => setIsMenuOpen(false)} href={"/docs/#loginUser"} className="text-green-500">/login</Link>
                                    </li>
                                </ul>
                            </AccordionItem>
                            <AccordionItem key="3" aria-label="PUT" title={<p className="font-bold text-emerald-900">PUT</p>} className="bg-emerald-600 px-2 rounded-lg text-emerald-950">
                                <ul className="flex flex-col gap-4 pb-2">
                                    <li className="flex items-center justify-between bg-emerald-700 p-1 rounded-lg">
                                        <div className="flex items-center gap-1">
                                            <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 12H15" stroke="#022c22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 9L12 15" stroke="#022c22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z" stroke="#022c22" stroke-width="2"></path> </g></svg>
                                            <p>Quantity</p>
                                        </div>
                                        <Link onClick={() => setIsMenuOpen(false)} href={"/docs/#increaseQuantity"} className="text-emerald-950">/products-cart/id?query=add</Link>
                                    </li>
                                    <li className="flex items-center justify-between bg-emerald-700 p-1 rounded-lg">
                                        <div className="flex items-center gap-1">
                                            <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 12H15" stroke="#022c22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z" stroke="#022c22" stroke-width="2"></path> </g></svg>
                                            <p>Quantity</p>
                                        </div>
                                        <Link onClick={() => setIsMenuOpen(false)} href={"/docs/#decreaseQuantity"} className="text-emerald-950">/products-cart/id?query=del</Link>
                                    </li>
                                </ul>
                            </AccordionItem>
                            <AccordionItem key="4" aria-label="DELETE" title={<p className="font-bold text-red-950">PUT</p>} className="bg-red-400 px-2 rounded-lg text-red-950">
                                <ul className="flex flex-col gap-4 pb-2">
                                    <li className="flex items-center justify-between bg-red-500 p-1 rounded-lg">
                                        <p>Delete cart product</p>
                                        <Link href={"/docs/#deleteProduct"} onClick={() => setIsMenuOpen(false)} className="text-red-950">/products-cart/:id</Link>
                                    </li>
                                </ul>
                            </AccordionItem>
                        </Accordion>
                    </NavbarItem>

                    
                </section>
            </NavbarMenu>
        </Navbar>
    )
}