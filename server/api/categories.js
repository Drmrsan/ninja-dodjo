export default defineEventHandler(async (event) => {
    const data = await $fetch('https://fakestoreapi.com/products/categories')

    // get api key from env vars
    const { apiKey } = useRuntimeConfig();

    return data
})