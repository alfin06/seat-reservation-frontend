<template>
    <div class="admin-dashboard">
      <h1>Admin Dashboard</h1>
      
      <!-- Navigation Tabs -->
      <div class="admin-tabs">
        <button 
          v-for="tab in tabs" 
          :key="tab.id"
          :class="{ active: currentTab === tab.id }"
          @click="currentTab = tab.id"
        >
          {{ tab.label }}
        </button>
      </div>
  
      <!-- Tab Content -->
      <div class="tab-content">
        <div v-if="currentTab === 'rooms'">
          <RoomManagement />
        </div>
        <div v-if="currentTab === 'users'">
          <UserManagement />
        </div>
        <div v-if="currentTab === 'reports'">
          <ReportsView />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import RoomManagement from '@/components/admin/RoomManagement.vue';
  import UserManagement from '@/components/admin/UserManagement.vue';
  import ReportsView from '@/components/admin/ReportsView.vue';
  
  export default {
    components: {
      RoomManagement,
      UserManagement,
      ReportsView
    },
    data() {
      return {
        currentTab: 'rooms',
        tabs: [
          { id: 'rooms', label: 'Room Management' },
          { id: 'users', label: 'User Management' },
          { id: 'reports', label: 'Reports' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .admin-dashboard {
    padding: 20px;
  }
  
  .admin-tabs {
    display: flex;
    margin-bottom: 20px;
    border-bottom: 1px solid #ddd;
  }
  
  .admin-tabs button {
    padding: 10px 20px;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
  }
  
  .admin-tabs button.active {
    border-bottom: 2px solid #42b983;
    font-weight: bold;
  }
  
  .tab-content {
    background: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  </style>