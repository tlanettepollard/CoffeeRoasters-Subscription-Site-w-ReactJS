import { createBrowserRouter } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Subscribe } from "./pages/Subscribe";


export const router = createBrowserRouter([
    {
        element: <PageLayout />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/about', element: <About /> },
            { path: '/subscribe', element: <Subscribe /> },
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
