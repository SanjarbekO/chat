import {useRoutes} from "react-router-dom";
import LogIn from "../pages/LogIn/LogIn";
import Chat from "../pages/Chat/Chat";


export default function Router () {
    const routes = useRoutes([
        {
          path:'/',
          element: <LogIn/>
        },
        {
            path: '/chat',
            element: <Chat/>
        },

    ]);
    return routes
};