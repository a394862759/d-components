import Vue from 'vue'
import Router from 'vue-router'
import doc from "./views/doc.vue"
import {
  components
} from "@/demo/index.js"

let doc_components = []

for (let key in components) {
  doc_components.push({
    path: key,
    name: key,
    component: components[key]
  })
}

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/doc',
    name: 'doc',
    component: doc,
    children: doc_components
  }, {
    path: '*',
    redirect: "/doc/dInput"
  }]
})