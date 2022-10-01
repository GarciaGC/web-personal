//importar nuestra Layout
import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutBasic from "../layouts/LayoutBasic";

//Importamos nuestras paginas
import AdminHome from '../pages/Admin'; 
import AdminSignIn from '../pages/Admin/SignIn/SingnIn';

//client pages
import Home from "../pages/Home";
import Contact from "../pages/Contact";

//nuestro sistema de rutas, nuestra configuracion
const routesAdmin = [
    {
        path: "/admin",  //cuando la ruta sea admin nos mandara a es apagina
        layout: LayoutAdmin,
        component: AdminHome,
    },
    {
        path: "/admin/login",
        layout: LayoutAdmin,
        component: AdminSignIn,
    },
]

const routesClient = [
    {
        path: "/",
        layout: LayoutBasic,
        component: Home,
    },
    {
        path: "/contact",
        layout: LayoutBasic,
        component: Contact,
    },
];
const routes = [...routesAdmin, ...routesClient];
export default routes;