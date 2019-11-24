import Vue from 'vue';
import VueRouter from 'vue-router';
//import Pos from '../views/Pos';
import Home from '../views/commom/Home';
import DashBoard from '../views/page/DashBoard';
import AmCharts from '../views/page/BasicCharts';
import FormInput from '../views/page/FormInput';
import FormLayouts from '../views/page/FormLayouts';
import BasicTables from '../views/page/BasicTables';
import EditorPage from '../views/page/EditorPage';
import MarkdownPage from '../views/page/MarkdownPage';
import TodoList from '../views/page/TodoListPage';

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        children: [
            {
                path:'',
                component: DashBoard
            },{
                path:'/DashBoard',
                component: DashBoard
            },{
                path:'/EditorPage',
                component:EditorPage
            },{
                path:'/MarkdownPage',
                component:MarkdownPage
            },            {
                path:'/BasicCharts',
                component:AmCharts
            },{
                path:'/FormInput',
                component:FormInput
            },{
                path:'/FormLayouts',
                component:FormLayouts
            },{
                path:'/BasicTables',
                component:BasicTables
            },{
                path:'/TodoList',
                component:TodoList
            }
        ]
    }
]

const router = new VueRouter({
    mode:'history',
    base:__dirname,
    routes
});

export default router
