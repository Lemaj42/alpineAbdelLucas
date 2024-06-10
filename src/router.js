import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Accueil from "./Pages/Accueil";
import NavBar from "./Pages/NavBar";


const router = createBrowserRouter([
    {
        path: "/",
        element: <>
            <NavBar>
            </NavBar>

            <Accueil>
            </Accueil>
        </>

    },
    {
        path: "/Configurators",
        element: <>
            <NavBar>
            </NavBar>

            <Accueil>
            </Accueil>
        </>
    }
])

function Router() {
    return <RouterProvider router={router} />
}

export default Router