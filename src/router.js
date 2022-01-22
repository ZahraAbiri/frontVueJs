import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            //TutorialsList==employeeList
            path: "/cu",

            name: "",
            //tutorials
            component: () => import("./components/CustomerRegisterPage")
        },
        {
            //TutorialsList==employeeList
            path: "/",
            alias: "",
            name: "",
            //tutorials
            component: () => import("./components/HomeRegisterPage")
        }
        ]});