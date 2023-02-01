<template>
    <div class="card">
        <p class="m-7 text-7xl font-bold">{{ error.statusCode }}</p>
        <p class="m-7 text-6xl">Ooops.</p>
        <p class="m-7">{{ error.message }}</p>
        <button class="btn m-7" @click="handleClearError">Go Home...</button>
    </div>
</template>

<script setup lang="ts">
    defineProps(['error'])

    const handleClearError = () => clearError({ redirect: '/'})

</script>

<style scoped>

</style>