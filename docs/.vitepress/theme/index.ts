import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import SidebarIcons from './SidebarIcons.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'sidebar-nav-before': () => h(SidebarIcons),
    })
  },
}
