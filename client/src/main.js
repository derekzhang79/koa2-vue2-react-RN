// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import VueResource from 'vue-resource'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueI18n from 'vue-i18n'
import * as lang from './assets/lang/lang'
const langs = ['zh', 'en']

// console.log(Vue.http)
Vue.use(VueResource)
Vue.use(elementUI)

// lang-config
if (!window.sessionStorage.lang) {
  window.sessionStorage.lang = langConfig(langs)
}
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: window.sessionStorage.lang, // set locale
  messages: lang.messages // set locale messages
})
console.log('main: ' + window.lang)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  i18n,
  template: `<div>
                <transition name="fade">
                    <router-view class="view"></router-view>
                </transition>
            </div>`
}).$mount('#app')

function langConfig (langs) {
  for (let i = 0; i < langs.length; i++) {
    if (~window.navigator.language.toLocaleLowerCase().indexOf(langs[i])) {
      return langs[i]
    }
  }
}
