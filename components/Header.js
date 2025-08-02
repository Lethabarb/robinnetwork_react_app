import Link from "next/link";
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Header() {
    return (
        <Disclosure as="nav">
            <div className="
            grid grid-cols-2
            text-2xl 
            bg-slate-100 shadow-2xl text-blue-700  border-b-blue-700 border-b-2
            p-0 m-0
            lg:grid-cols-3">
                <div className="
            lg:flex justify-around items-center flex-row hidden
            ">
                    <div className="p-2 
                bg-gradient-to-b from-slate-50 from-50% to-blue-900 to-50% gradient-size
                hover:text-slate-50 
                h-full w-full
                flex justify-center items-center
                "><Link href="/">Home</Link></div>
                    <div className="p-2 
                bg-gradient-to-b from-slate-50 from-50% to-blue-900 to-50% gradient-size
                hover:text-slate-50 
                h-full w-full
                flex justify-center items-center
            "><Link href="/Projects">Projects</Link></div>

                </div>
                <div className="inset-y-0 left-0 flex items-center lg:hidden ml-2 p-2">
                    {/* Mobile menu button*/}
                    <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-blue-800 focus:ring-2 focus:ring-slate-700 focus:outline-hidden focus:ring-inset">
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                        <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                    </DisclosureButton>
                </div>
                <div className="
                flex justify-center items-center col-start-2
                text-3xl lg:text-6xl text-blue-50 w-full text-center
                bg-blue-800 h-full pl-10 pr-10 p-2
                "><Link href="/">Oliver Robin</Link></div>
                <div className="lg:flex justify-around items-center flex-row hidden">
                    <div className="p-2 
                bg-gradient-to-b from-slate-50 from-50% to-blue-900 to-50% gradient-size
                hover:text-slate-50 
                h-full w-full
                flex justify-center items-center
                "><Link href="/Experience">Experience</Link></div>
                    <div className="p-2 
                bg-gradient-to-b from-slate-50 from-50% to-blue-900 to-50% gradient-size
                hover:text-slate-50 
                h-full w-full
                flex justify-center items-center
                "><Link href="/Contact">Contact</Link></div>

                </div>
            </div>
            <DisclosurePanel transition className="lg:hidden
                origin-top transition duration-200 ease-out data-closed:-translate-y-6 data-closed:opacity-0
                w-[50vw]">
                <div className="
                flex justify-center items-center col-start-2 flex-col
                text-3xl lg:text-6xl text-blue-800 w-full text-center
                bg-slate-50 h-full pl-10 pr-10 p-2
                shadow
                ">
                    <div className="p-2 
                h-full w-full
                flex justify-center items-center
                ">
                        <Link href="/Experience">Home</Link>
                    </div>
                    <div className="p-2 
                h-full w-full
                flex justify-center items-center
                ">
                        <Link href="/Contact">Projects</Link>
                    </div>
                    <div className="p-2 
                h-full w-full
                flex justify-center items-center
                ">
                        <Link href="/Contact">Experience</Link>
                    </div>
                    <div className="p-2 
                h-full w-full
                flex justify-center items-center
                ">
                        <Link href="/Contact">Contact</Link>
                    </div>

                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}