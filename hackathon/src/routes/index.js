import DashboardPage from "../views/DashboardPage.vue"
import ManagerCategory from "../views/ManagerCategory.vue"
import ManagerProduct from "../views/ManagerProduct.vue"
import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/admin", 
        name: "admin",
        component: () => 
            import(/* webpackChunkName "dashboard" */"@/views/DashboardPage.vue"),
        children: [
            {
            path: "manager-category",
            name: "managerCategory",
            component: () => 
                import(/* webpackChunkName "managerCategory" */"@/views/ManagerCategory.vue"),
            },
            {
                path: "manager-product",
                name: "managerProduct",
                component: () => 
                    import(/* webpackChunkName "managerProduct" */"@/views/ManagerProduct.vue"),
            },
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;