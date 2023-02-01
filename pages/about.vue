<template>
    <div>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat maiores, soluta itaque deleniti eaque beatae mollitia sed earum obcaecati consequuntur aliquam non laboriosam culpa perferendis molestiae et ad iure laudantium.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat maiores, soluta itaque deleniti eaque beatae mollitia sed earum obcaecati consequuntur aliquam non laboriosam culpa perferendis molestiae et ad iure laudantium.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat maiores, soluta itaque deleniti eaque beatae mollitia sed earum obcaecati consequuntur aliquam non laboriosam culpa perferendis molestiae et ad iure laudantium.</p>
    
        <p>{{ data }}</p>
    
    </div>
</template>

<script setup>

    const { data } = useFetch('/api/categories')

</script>

<style scoped>

</style>