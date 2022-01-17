<template>
    <div class="home">
        <!-- <div class="hero-image">
            <div class="hero-text">
                <h1>Hail Seitan</h1>
                <p>Damn Good Vegan Food</p>
            </div>
        </div> -->

        <div class="logo">
            <img src="smallgreylogo.png" alt="">
        </div>

        <h1 class="subtitle">Damn Good Vegan Food</h1>

        <div class="locations">
            <div class="location-row-single">
                <home-location-button class="location" :locationName="`Tom's Location`" :locationSlug="'tom'" />
            </div>
            <div class="location-row">
                <home-location-button class="location" :locationName="`Arty's Location`" :locationSlug="'arty'" />
                <home-location-button class="location" :locationName="`Brandon's Location`" :locationSlug="'brandon'" />
            </div>
            <div class="location-row">
                <home-location-button class="location" :locationName="`Dan's Location`" :locationSlug="'dan'" />
                <home-location-button class="location" :locationName="`John's Location`" :locationSlug="'john'" />
            </div>
        </div>

    </div>
</template>

<script>
import HomeLocationButton from './HomeLocationButton.vue';
export default {
    components: {
        HomeLocationButton
    },
}
</script>

<style>
    .home {
        height: 100%;
    }

    .logo {
        display: flex;
        justify-content: center;
    }

    .subtitle {
        text-align: center;
    }

    .hero-image {
        background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://media.istockphoto.com/photos/vegan-and-vegetarian-concept-healthy-lifestyle-picture-id650033398");
        /* Set a specific height */
        height: 20rem;

        /* Position and center the image to scale nicely on all screens */
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
    }

    .hero-text {
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
    }

    .locations {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .location-row-single {
        width: 50%;
        margin: 1rem 0 1rem 0;
        display: flex;
        justify-content: center;
    }

    .location-row {
        width: 50%;
        margin: 1rem 0 1rem 0;
        display: flex;
        justify-content: space-between;
    }
    
    .location {
        height: 16rem;
        width: 16rem;
    }
</style>