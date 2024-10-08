<template>
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
      <div class="bg-white p-6 rounded-lg w-96">
        <h3 class="text-xl font-bold mb-4">Add New Product</h3>
  
        <div class="mb-4">
          <label for="name" class="block text-gray-700">Name</label>
          <input
            v-model="product.name"
            type="text"
            id="name"
            class="w-full border border-gray-300 p-2 rounded mt-1"
          />
          <span v-if="errors.name" class="text-red-500 text-sm">{{ errors.name }}</span>
        </div>
  
        <div class="mb-4">
          <label for="image" class="block text-gray-700">Image</label>
          <input
            v-model="product.image"
            type="text"
            id="image"
            class="w-full border border-gray-300 p-2 rounded mt-1"
          />
          <span v-if="errors.image" class="text-red-500 text-sm">{{ errors.image }}</span>
        </div>
  
        <div class="mb-4">
          <label for="price" class="block text-gray-700">Price</label>
          <input
            v-model="product.price"
            type="number"
            id="price"
            class="w-full border border-gray-300 p-2 rounded mt-1"
          />
          <span v-if="errors.price" class="text-red-500 text-sm">{{ errors.price }}</span>
        </div>
  
        <div class="mb-4">
          <label for="quantity" class="block text-gray-700">Quantity</label>
          <input
            v-model="product.quantity"
            type="number"
            id="quantity"
            class="w-full border border-gray-300 p-2 rounded mt-1"
          />
          <span v-if="errors.quantity" class="text-red-500 text-sm">{{ errors.quantity }}</span>
        </div>
  
        <div class="flex justify-between">
          <button
            class="bg-gray-300 text-gray-700 px-4 py-2 rounded"
            @click="emit('closeForm')"
          >
            Close
          </button>
          <button class="bg-blue-500 text-white px-4 py-2 rounded" @click="handleSubmit">
            Add
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const emit = defineEmits(['addProduct', 'closeForm']);
  const product = ref({
    name: '',
    image: '',
    price: 0,
    quantity: 1,
  });
  
  const errors = ref({
    name: null,
    image: null,
    price: null,
    quantity: null,
  });
  
  const handleSubmit = () => {
    clearErrors();
    if (!product.value.name) {
      errors.value.name = 'This field is required';
    }
    if (!product.value.image) {
      errors.value.image = 'This field is required';
    }
    if (product.value.price < 10000) {
      errors.value.price = 'Price must be at least 10,000';
    }
    if (product.value.quantity < 1 || product.value.quantity > 100) {
      errors.value.quantity = 'Quantity must be between 1 and 100';
    }
  
    if (!hasErrors()) {
      emit('addProduct', { ...product.value });
      emit('closeForm');

    }
  };
  
  const clearErrors = () => {
    errors.value.name = null;
    errors.value.image = null;
    errors.value.price = null;
    errors.value.quantity = null;
  };
  
  const hasErrors = () => {
    return errors.value.name || errors.value.image || errors.value.price || errors.value.quantity;
  };
  </script>
  
  <style scoped></style>
  