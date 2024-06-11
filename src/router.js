import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Accueil from "./Pages/Accueil";
import NavBar from "./Pages/NavBar";
import Configurators from "./Pages/Configurators";
import Footer from "./Pages/Footer";


const router = createBrowserRouter([
    {
        path: "/",
        element: <div>
            <NavBar />
            <Accueil />
            <Footer />
        </div>
    },
    {
        path: "/Configurators",
        element: <div>
            <NavBar />
            <Configurators />
            <Footer />

        </div>
    }
])

function Router() {
    return <RouterProvider router={router} />
}

export default Router