import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header/Header";
import Footer from "../components/layout/footer/Footer"

export default function AppLayout(){
    return(
        <>
            <div className="flex flex-col min-h-screen bg-gray-50">
                <Header />

                <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-6 sm:px-6 lg:px-8">
                    <Outlet />
                </main>

                <Footer />
            </div>
        </>
    )
}