<template>
    <div class="container">
        <div class="nav">
            <ul class="nav-links">
                <router-link to="/">
                    <li class="nav-link">Home</li>
                </router-link>
            </ul>
        </div>

        <slot />

        <div class="footer">
            <div class="footer-content">
                <h2>Footer</h2>
            </div>
            <div class="footer-content">
                <p>This is footer text</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        isHome: { type: Boolean, default: true }
    }
}
</script>

<style>
    .container {
        position: relative;
    }

    .nav {
        position: sticky;
        top: 0;
        left: 0;
        height: 4rem;
        width: 100%;
        z-index: 50;
        background-color: #91c9a2;
        box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.2);
    }

    .nav ul {
        list-style: none;
    }

    .nav-links {
        margin: 0;
        display: flex;
        position: relative;
        justify-content: flex-start;
    }

    .nav-link {
        height: 4rem;
        padding: 0 1rem 0 1rem;
        display: flex;
        align-items: center;
    }

    .nav-link:hover {
        background-color: #eda864;
    }

    .footer {
        width: 100%;
        background-color: #91c9a2;
        display: flex;
        justify-content: space-around;
    }

    .footer-content {
        display: flex;
        align-items: center;
    }
</style>