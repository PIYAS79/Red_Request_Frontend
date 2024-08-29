import { ReactNode } from "react"
import { baseRoute_Types } from "./react.routes"
import { NavLink } from "react-router-dom"




type generateAnt_D_Routes_Type = {
    key: string,
    label: ReactNode
}
const generateAnt_D_Routes=(items:baseRoute_Types[])=>{
    const sidebarRoutes = items.reduce((acc:generateAnt_D_Routes_Type[],item)=>{
        if(item.name && item.path){
            acc.push({
                key:item.name,
                label:<NavLink to={`${item.path}`}> { item.name } </NavLink>
            })
        }
        return acc;
    },[])
    return sidebarRoutes;
}


// const generateAnt_D_Routes = (items: baseRoute_Types[]) => {
//     const routes = items.reduce((acc: generateAnt_D_Routes_Type[], item) => {
//         if (item.name && item.path) {
//             acc.push({
//                 key: item.name,
//                 label: <Menu.Item key={item.name}>
//                     <NavLink to={`/${item.path}`}>{item.name}</NavLink>
//                 </Menu.Item>
//             })
//         }
//         return acc;
//     }, [])
//     return routes;
// }


export default generateAnt_D_Routes