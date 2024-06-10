import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import Test from "./test/test";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>page dacceuil
                    <nav>
                        <Link to={"/config"}>config</Link>
                    </nav>
                </div>
    },
    {
        path: "/config",
        element: <div>page de configuration
                <Test></Test>
            <nav>
                        <Link to={"/"}>accueil</Link>
                    </nav>
        </div>
    }
])

function Router() {
    return <RouterProvider router={router} />
}

export default Router