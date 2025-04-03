<template>
  <div>
    <h2>{{ $t('register') }}</h2>
    <p>{{ $t('welcome') }}</p>
    <form>
      <label for="username">{{ $t('enterUsername') }}:</label>
      <input id="username" type="text" :placeholder="$t('enterUsername')" /><br /><br />

      <label for="email">{{ $t('enterEmail') }}:</label>
      <input id="email" type="email" :placeholder="$t('enterEmail')" /><br /><br />

      <label for="password">{{ $t('enterPassword') }}:</label>
      <input id="password" type="password" :placeholder="$t('enterPassword')" /><br /><br />

      <button type="submit">{{ $t('submitRegister') }}</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Register'
}
</script>

<style scoped>
/* Your styles here */
</style>
