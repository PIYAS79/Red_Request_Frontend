import { ReactNode } from "react"

export type baseRoute_Types = {
    name: string,
    path: string,
    element: ReactNode
}


type React_Router_Dom_Routes_Type = {
    path: string,
    element: ReactNode
}

const generateRoutes = (items: baseRoute_Types[]) => {
    const routes = items.reduce((acc: React_Router_Dom_Routes_Type[], items) => {
        if (items.path && items.element) {
            acc.push({
                path: items.path,
                element: items.element
            })
        }
        return acc;
    }, [])
    return routes;
}

export default generateRoutes;