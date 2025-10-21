import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
const Layout = () => {

    return (
        <>
            <div className="flex flex-col min-h-screen h-screen w-full">
                <Header />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    )
}

export default Layout
