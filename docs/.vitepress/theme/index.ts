import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import MobileAppearance from './MobileAppearance.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-content-before': () => h(MobileAppearance),
    })
  },
}
