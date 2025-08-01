import Link from "next/link";

export default function Header() {
    return (
        <div className="
            grid grid-cols-3
            text-2xl 
            bg-slate-100 shadow-2xl text-blue-700  border-b-blue-700 border-b-2
            p-0 m-0">
            <div className="
            flex justify-around items-center flex-row
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
                <div className="
                flex justify-center items-center
                text-6xl text-blue-50 w-full 
                bg-blue-800 h-full pl-10 pr-10 p-2"><Link href="/">Oliver Robin</Link></div>
            <div className="flex justify-around items-center flex-row">
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
    )
}