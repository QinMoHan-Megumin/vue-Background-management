import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        redirect: "/login",
    },
    {
        path: "/login",
        name: "login",
        component: () =>
            import ("../views/login.vue"),
    },
    {
        path: "/shouye",
        name: "shouye",
        component: () =>
            import ("../views/shouye/index.vue"),
        children: [{
                path: "houtai",
                name: "houtai",
                component: () =>
                    import ("../views/shouye/houtai.vue"),
            },
            { 
                path: "album",
                name: "album",
                component: () =>
                    import ("../views/shouye/album.vue"),
                meta: { title: "相册管理" },
            },
            {
                path: "shoplist",
                name: "shoplist",
                component: () =>
                    import ("../views/shouye/shoplist.vue"),
                meta: { title: "商品列表" },
            },
        ],
    },
    {
        path:"/dingdan",
        name:"dingdan",
        component: () =>
            import ("../views/dingdan/index.vue"),
        children: [{
            path: "ddgl",
            name: "ddgl",
            component: () =>
                import ("../views/dingdan/ddgl.vue"),
            meta:{title:"订单管理"}
        },
        {
            path: "fapiao",
            name: "fapiao",
            component: () =>
                import ("../views/dingdan/fapiao.vue"),
            meta: { title: "发票管理" },
        },
        {
            path: "shouhou",
            name: "shouhou",
            component: () =>
                import ("../views/dingdan/shouhou.vue"),
            meta: { title: "售后服务" },
        }]
    },
    {
        path: "/shop",
        name: "shop",
        component: () =>
            import ("../views/shop/index.vue"),
        children: [{
                path: "list",
                name: "list",
                component: () =>
                    import ("../views/shop/list.vue"),
                meta: { title: "商品列表" },
            },
            {
                path: "cate",
                name: "cate",
                component: () =>
                    import ("../views/shop/cate.vue"),
                meta: { title: "商品分类" },
            },
        ],
    },
    {
        path: "/huiyuan",
        name: "huiyuan",
        component: () =>
            import ("../views/huiyuan/index.vue"),
        children: [{
                path: "hylist",
                name: "hylist",
                component: () =>
                    import ("../views/huiyuan/hylist.vue"),
                meta: { title: "会员列表" },
            },
            {
                path: "lv",
                name: "lv",
                component: () =>
                    import ("../views/huiyuan/lv.vue"),
                meta: { title: "会员等级" },
            },
        ],
    },
    {
        path:"/shezhi",
        name:"shezhi",
        component: () =>
            import ("../views/shezhi/index.vue"),
        children: [{
            path: "jichusz",
            name: "jichusz",
            component: () =>
                import ("../views/shezhi/jichusz.vue"),
            meta:{title:"基础设置"}
        },
        {
            path: "wuliusz",
            name: "wuliusz",
            component: () =>
                import ("../views/shezhi/wuliusz.vue"),
            meta: { title: "物流设置" },
        },
        {
            path: "guanliyuangl",
            name: "guanliyuangl",
            component: () =>
                import ("../views/shezhi/guanliyuangl.vue"),
            meta: { title: "管理员管理" },
        },
        {
            path: "jiaoyisz",
            name: "jiaoyisz",
            component: () =>
                import ("../views/shezhi/jiaoyisz.vue"),
            meta: { title: "交易设置" },
        }]
    }
];
// 第一级路由加载在app。vue的坑里
// 子路由属于谁就加载在谁的坑里

const router = new VueRouter({
    routes,
});

router.beforeEach((to, from, next) => {
    if (localStorage.getItem("token")) {
        next();
    } else {
        if (to.path == "/login") {
            next();
        } else {
            next("/login");
        }
    }
});

export default router;