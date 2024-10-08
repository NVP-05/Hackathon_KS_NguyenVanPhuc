<template>
    <div>
        <div class="flex justify-center items-center w-full bg-slate-400 h-16">
            <b>Header</b>
        </div>

        <div>
            <div class="flex">
        <div class="w-1/5 bg-gray-900 text-white min-h-screen p-4">
            <ul>
              <li class="mb-4">
                <router-link 
                  to="/admin" 
                  class="text-white hover:text-gray-300"
                  :class="{ 'bg-gray-700': isActive('/admin') }"
                >
                  Dashboard
                </router-link>
              </li>
              <li class="mb-4">
                <router-link 
                  to="/admin/manager-category" 
                  class="text-white hover:text-gray-300"
                  :class="{ 'bg-gray-700': isActive('/admin/manager-category') }"
                >
                  Manager Category
                </router-link>
              </li>
              <li>
                <router-link 
                  to="/admin/manager-product" 
                  class="text-white hover:text-gray-300"
                  :class="{ 'bg-gray-700': isActive('/admin/manager-product') }"
                >
                  Manager Product
                </router-link>
              </li>
            </ul>
        </div>

        <div class="w-4/5">
            <router-view></router-view>
        </div>

    </div>
        </div>

    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  
  const isActive = (path) => {
    return route.path === path;
  };
  </script>
  
  <style >

  </style>
  