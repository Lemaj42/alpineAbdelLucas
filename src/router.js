import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Configurators from "./Pages/Configurators";
import Accueil from "./Pages/Accueil";
import NavBar from "./Pages/NavBar";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>
            <NavBar />
            <Accueil />
        </div>
    },
    {
        path: "/Configurators",
        element: <div>
            <NavBar />
            <Configurators />
        </div>
    }
])

function Router() {
    return <RouterProvider router={router} />
}

export default Router