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
                <router-link to="/locations/tom/menu">
                    <home-location-button class="location" 
                        :location-name="`Tom's Location`" 
                        background-image-url="https://media.istockphoto.com/photos/vegan-and-vegetarian-concept-healthy-lifestyle-picture-id650033398"
                    />
                </router-link>
            </div>
            <div class="location-row">
                <home-location-button class="location" :location-name="`Arty's Location`" />
                <router-link to="/locations/brandon/menu">
                    <home-location-button class="location" 
                        :location-name="`Brandon's Location`"
                        background-image-url="https://www.chicagotribune.com/resizer/M-y5GhubeWYO8w3hcubvpGQuTLI=/1400x0/top/cloudfront-us-east-1.images.arcpublishing.com/tronc/LY56OLHYNNHKHGUTOFD6J7MM5Y.jpg"
                    />
                </router-link>
            </div>
            <div class="location-row">
                <router-link to="/locations/dan/Menu">
                    <home-location-button class="location"
                        :location-name="`Dan's Location`"
                        background-image-url="https://animalfair.com/wp-content/uploads/2014/03/500full1.jpg"
                    />
                </router-link>
                <home-location-button class="location" :location-name="`John's Location`" />
            </div>
        </div>

    </div>
</template>

<script>
import HomeLocationButton from '../components/HomeLocationButton.vue';
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
