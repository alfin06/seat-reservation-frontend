<template>
  <div>
    <h1>{{ $t('title') }}</h1>
    
    <!-- Language Switcher -->
    <div>
      <button @click="changeLanguage('en')">English</button>
      <button @click="changeLanguage('zh')">中文</button>
    </div>

    <!-- Navigation Links -->
    <nav>
      <router-link to="/register">{{ $t('register') }}</router-link> |
      <router-link to="/login">{{ $t('login') }}</router-link>
    </nav>

    <!-- Render the active route's component -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang;
    }
  }
}
</script>

<style>
nav {
  margin-bottom: 20px;
}
</style>
