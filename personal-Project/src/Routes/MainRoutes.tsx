import {createBrowserRouter} from "react-router-dom"
import HomeLayouts from "../Components/Layouts/HomeLayouts"
import Homescreen from "../Pages/Home/Homescreen"

export const element = createBrowserRouter([
    {
        path:"/",
        element:<HomeLayouts/>,
        children:[
            {
                index:true,
                element:<Homescreen/>
            }
        ]
    }
])