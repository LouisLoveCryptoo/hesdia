<template>

    <h1>
        Welcome to the blog post page {{ id }}
    </h1>

    <div v-for="(blg, index) in blog" :key="index">
        {{ blg.title }}
        <br>
    </div>

</template>
<script setup>

const route = useRoute()

const id = ref(route.params.id)

const {data: blog} = await useFetch('/api/blog', {
    transform: (res) => res.data
});

console.log(blog.value)
</script>