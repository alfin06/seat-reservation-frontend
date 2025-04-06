import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'

// Import translation files
import en from './locales/en.json'
import zh from './locales/zh.json'

// Configure i18n
const i18n = createI18n({
  locale: 'en', // Set default language (you can change it to 'zh' if preferred)
  fallbackLocale: 'en',
  messages: {
    en,
    zh
  }
})

createApp(App)
  .use(router)
  .use(i18n)
  .mount('#app')
