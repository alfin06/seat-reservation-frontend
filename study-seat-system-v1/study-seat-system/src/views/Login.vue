<template>
  <div>
    <h2>{{ $t('login') }}</h2>
    <p>{{ $t('welcome') }}</p>
    <form>
      <label for="email">{{ $t('enterEmail') }}:</label>
      <input id="email" type="email" :placeholder="$t('enterEmail')" /><br /><br />

      <label for="password">{{ $t('enterPassword') }}:</label>
      <input id="password" type="password" :placeholder="$t('enterPassword')" /><br /><br />

      <button type="submit">{{ $t('submitLogin') }}</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style scoped>
/* Your styles here */
</style>
