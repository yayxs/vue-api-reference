import type { App } from 'vue'
export default {
  install(app: App) {
    const version = Number(app.version.split('.')[0])

    if (version < 3) {
      console.warn('This plugin requires Vue 3')
    } else {
      console.log('vue version', version)
    }
  }
}
