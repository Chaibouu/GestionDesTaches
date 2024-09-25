"use client"
import {Notebook, Settings, CreditCard} from 'lucide-react'
import Link from "next/link"
import {usePathname} from "next/navigation"

export default function DashboardNav(){
    const pathname = usePathname();

    const menuDashboard = [
        {name:"Tâches", icon: Notebook, path:"/Dashoard/taches"},
        {name:"Settings", icon: Settings, path:"/Dashoard/settings"},
        {name:"Tâches", icon: CreditCard, path:"/Dashoard/taches"},
    ]
    return(
        <nav className="flex md:flex-col md:h-full md:w-16 w-full lg:w-40 gap-2">
            {menuDashboard.map((link, index)=>{
                const isActive = pathname.starWith(link.path)
                return(
                    <Link href={link.path}>
                        <div className="flex items-center ">

                        </div>
                    </Link>
                )
            })}
        </nav>
    )
}