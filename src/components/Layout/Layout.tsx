import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
const Layout = () => {

    return (
        <>
            <div className="flex flex-col min-h-screen h-screen w-screen">
                <Header />
                <main className="flex-1 container mx-auto p-6">
                    <Outlet /> 
                </main>
                <Footer />
            </div>
        </>
    )
}

export default Layout
