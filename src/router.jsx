import { createBrowserRouter } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Navbar } from "./layout/Navbar/Navbar";
import { Footer } from "./layout/Footer/Footer";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Plan } from "./pages/Plan/Plan";


export const router = createBrowserRouter([
    {
        element: <PageLayout />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/about', element: <About /> },
            { path: '/plan', element: <Plan /> },
        ],
    },
    {
        element: <Footer />,
    },
]);

function PageLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}
