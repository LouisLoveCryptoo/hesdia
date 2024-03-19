<template>

    <h1>
        Simu
    </h1>

    {{ playData }}

</template>
<script setup>
const {data: playData} = useFetch("/api/play/conv-simulator");
console.log(playData.value)
</script>