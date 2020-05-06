import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/index'
        },
        {
            path: '/index',
            component: resolve => require(['@/views/index.vue'], resolve),
            redirect: '/search_food',
            children: [
                {
                    path: '/search_food',
                    component: search_food => require(['@/views/search_food.vue'], search_food)
                },
                {
                    path: '/food_contrast',
                    component: contrast => require(['@/views/food_contrast.vue'], contrast)
                },
                {
                    path: '/food_power',
                    component: power => require(['@/views/food_power.vue'], power),

                },
                {
                    path: '/food_power/nutrition_details',
                    component: nudetails => require(['@/views/nutrition_details.vue'], nudetails)
                },
                {
                    path: '/search_food/result',
                    component: result => require(['@/views/search_food_result.vue'], result)
                },
                {
                    path: '/food_contrast/result',
                    component: contrast_result => require(['@/views/food_contrast_result.vue'], contrast_result)
                }
            ]
        },

    ]
})