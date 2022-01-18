<template>
    <div class="location-button" :style="{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(' + backgroundImageUrl + ')'}">
        <h1> {{ locationName }}</h1>
    </div>
</template>

<script>
export default {
    props: {
        locationName: { type: String, required: true },
        backgroundImageUrl: { type: String, default: '' }
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
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
    }

    .location-button h1 {
        color: white;
    }
</style>