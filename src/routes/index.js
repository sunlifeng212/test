import { Admin, Login, NotFout, Admin1 } from '../view'
export const mianRoute = [
    {
        component: Login,
        path: "/login"
    },
    {
        component: NotFout,
        path: "/404"
    },
]
export const adminRoute = [
    {
        component: Admin,
        path: "/admin/a"
    },
    {
        component: Admin1,
        path: "/admin1/:id"
    },
]