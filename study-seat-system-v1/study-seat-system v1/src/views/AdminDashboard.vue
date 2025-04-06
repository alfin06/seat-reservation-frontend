<template>
    <el-card class="admin-card">
      <h2>{{ $t('adminTitle') }}</h2>
      <el-tabs v-model="activeTab" type="card">
        <el-tab-pane :label="$t('adminRoomManagement')" name="rooms">
          <p>{{ $t('manageRoomsDesc') }}</p>
          <el-button type="primary" @click="addRoom">{{ $t('addRoom') }}</el-button>
          <div class="table-wrapper">
            <el-table :data="rooms" style="width: 100%;">
              <el-table-column prop="name" :label="$t('roomNameColumn')" width="150" />
              <el-table-column prop="capacity" :label="$t('capacityColumn')" width="120" />
              <el-table-column :label="$t('actionsColumn')" width="180">
                <template #default="scope">
                  <el-button type="primary" size="mini" @click="editRoom(scope.row)">{{ $t('editButton') }}</el-button>
                  <el-button type="danger" size="mini" @click="deleteRoom(scope.row)">{{ $t('deleteButton') }}</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="$t('adminReports')" name="reports">
          <p>{{ $t('adminReportsDesc') }}</p>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </template>
  
  <script>
  export default {
    name: 'AdminDashboard',
    data() {
      return {
        activeTab: 'rooms',
        rooms: [
          { id: 1, name: 'Room A', capacity: 30 },
          { id: 2, name: 'Room B', capacity: 20 }
        ]
      }
    },
    methods: {
      addRoom() {
        console.log('Add Room clicked');
      },
      editRoom(room) {
        console.log('Edit Room:', room);
      },
      deleteRoom(room) {
        console.log('Delete Room:', room);
      }
    }
  }
  </script>
  
  <style scoped>
  .admin-card {
    max-width: 500px;      /* Limit width */
    width: 100%;           /* Allow responsiveness */
    margin: 20px auto;     /* Center horizontally */
    padding: 20px;
    box-sizing: border-box;
  }
  
  .table-wrapper {
    overflow-x: auto;  /* Ensure table doesn't force container to stretch */
  }
  </style>
  