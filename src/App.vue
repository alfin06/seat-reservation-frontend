<template>
  <div class="app">
    <header class="app-header">
      <h1>Study Seat Reservation System</h1>
      <nav class="main-nav">
        <router-link to="/register" class="nav-link">Register</router-link>
        <span class="nav-divider">|</span>
        <router-link to="/login" class="nav-link">Login</router-link>
        <span class="nav-divider">|</span>
        <router-link to="/reservation" class="nav-link">Study Room & Seat Reservation</router-link>
        <span class="nav-divider">|</span>
        <router-link to="/checkin" class="nav-link">Check-In & No-show Management</router-link>
        <span class="nav-divider">|</span>
        <router-link to="/instant-booking" class="nav-link">Seat Availability & Instant Booking</router-link>
        <span class="nav-divider">|</span>
        <router-link to="/admin" class="nav-link">Admin Dashboard</router-link>
      </nav>
    </header>

    <main class="app-content">
      <router-view />
    </main>
  </div>
</template>

<style>
.app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.app-header {
  text-align: center;
  margin-bottom: 30px;
}

.app-header h1 {
  font-size: 2rem;
  margin-bottom: 15px;
  color: #2c3e50;
}

.main-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 5px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}

.nav-link {
  font-weight: 600;
  color: #2c3e50;
  text-decoration: none;
  padding: 5px 10px;
}

.nav-link:hover {
  color: #646cff;
}

.nav-link.router-link-exact-active {
  color: #646cff;
  text-decoration: underline;
}

.nav-divider {
  color: #ccc;
  padding: 0 5px;
}

.app-content {
  padding: 20px 0;
}
</style>