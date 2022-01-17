<template>
    <div class="location-button">
        <h1> {{ locationName }}</h1>
    </div>
</template>

<script>
export default {
    props: {
        locationSlug: { type: String, required: true },
        locationName: { type: String, required: true }
    }
}
</script>

<style>
    .location-button {
        border: 1px solid black;
        border-radius: 8px;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
</style>