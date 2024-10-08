import DashboardNav from "@/components/DashboardNav/DashboardNav"
export default async function DasboardLayout({children}: Readonly<{children: React.ReactNode}>){
    return (
        <section className="max-w-[1200px] mx-auto md-flex md:items-center md:gap-4 h-screen w-full mt-2 p-2">

            <DashboardNav />
            <div className="w-full h-full">
                {children}
            </div>

        </section>
    )
}