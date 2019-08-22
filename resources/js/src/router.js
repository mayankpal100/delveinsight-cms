/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  Object Strucutre:
                    path => router path
                    name => router name
                    component(lazy loading) => component to load
                    meta : {
                      rule => which user can have access (ACL)
                      breadcrumb => Add breadcrumb to specific page
                      pageTitle => Display title besides breadcrumb
                    }
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: '/admin/',
    routes: [

      {
    // =============================================================================
    // MAIN LAYOUT ROUTES
    // =============================================================================
        path: '',
        component: () => import('./layouts/main/Main.vue'),
        children: [
      // =============================================================================
      // Theme Routes
      // =============================================================================
          {
            path: '/',
            name: 'home',
            component: () => import('./views2/Home.vue'),
          },
          {
            path: '/page2',
            name: 'page2',
            component: () => import('./views2/Page2.vue'),
          }, 
          {
            path: '/test-page',
            name: 'testPage',
            component: () => import('./views2/pages/testPage.vue'),
          },
          {
            path: '/dashboard/analytics',
            name: 'dashboard-analytics',
            component: () => import('./views/DashboardAnalytics.vue'),
            meta: {
                rule: 'editor'
            }
          },
          {
            path: '/dashboard/ecommerce',
            name: 'dashboard-ecommerce',
            component: () => import('./views/DashboardECommerce.vue'),
            meta: {
                rule: 'admin'
            }
          },
        // =============================================================================
        // EXTENSIONS
        // =============================================================================
          {
            path: '/extensions/quill-editor',
            name: 'extra-component-quill-editor',
            component: () => import('@/views/components/extra-components/quill-editor/QuillEditor.vue'),
            meta: {
                breadcrumb: [
                    { title: 'Home', url: '/' },
                    { title: 'Extra Components' },
                    { title: 'Quill Editor', active: true },
                ],
                pageTitle: 'Quill Editor',
                rule: 'editor'
            },
          },
        // =============================================================================
        // Pages Routes
        // =============================================================================
          {
            path: '/report/create',
            name: 'create-report',
            component: () => import('@/views/pages/report/Create.vue'),
            meta: {
                breadcrumb: [
                    { title: 'Home', url: '/' },
                    { title: 'Report' },
                    { title: 'Create', active: true },
                ],
                pageTitle: 'Create Report',
                rule: 'editor'
            },
          },      
        ],
      },
    // =============================================================================
    // FULL PAGE LAYOUTS
    // =============================================================================
      {
        path: '',
        component: () => import('@/layouts/full-page/FullPage.vue'),
        children: [
      // =============================================================================
      // PAGES
      // =============================================================================
          {
            path: '/pages/login',
            name: 'pageLogin',
            component: () => import('@/views2/pages/Login.vue')
          },
          {
            path: '/pages/error-404',
            name: 'pageError404',
            component: () => import('@/views2/pages/Error404.vue')
          },
        ]
      },
      // Redirect to 404 page, if no match found
      {
        path: '*',
        redirect: '/pages/error-404'
      }
    ],
})

export default router
