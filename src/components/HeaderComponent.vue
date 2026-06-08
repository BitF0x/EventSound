<template>
    <header id="main-header">

        <!-- Logo + Burger -->
        <div class="header-top">
            <span class="logo">IRONVAWE AUDIO</span>

            <button class="burger" @click="toggleMenu"></button>
        </div>

        <!-- Navigation -->
        <nav :class="{ open: isMenuOpen }">
            <RouterLink @click="closeMenu" to="/">HOME</RouterLink>
            <RouterLink @click="closeMenu" to="/solutions">SOLUTIONS</RouterLink>
            <RouterLink @click="closeMenu" to="/aboutus">ABOUT US</RouterLink>
            <RouterLink @click="closeMenu" to="/contacts">CONTACTS</RouterLink>
        </nav>

    </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMenuOpen = ref(false)
const isScrolled = ref(false)

function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
    isMenuOpen.value = false
}


</script>

<style scoped>
/* ================= HEADER ================= */

#main-header {
    position: static;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    transition: 0.3s;
    background-color: var(--fg);

}

#main-header.scrolled {
    background-color: var(--fg);
}

/* ================= TOP BAR ================= */

.header-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 2rem;
    padding-left: 1em;
    color: var(--accent);
}

/* ================= BURGER ================= */

.burger {
    width: 50px;
    height: 50px;
    font-size: 24px;

    border: 2px solid var(--decor-1);
    background: var(--fg);
    cursor: pointer;

    display: none;
}

/* ================= NAV ================= */

nav {
    width: 30%;
    display: flex;
    justify-content: space-evenly;
    margin: 0 auto;
}

nav a {
    padding: 0 .5em;
    text-decoration: none;
    color: inherit;
    font-weight: bold;
    font-size: 1.125vw;
    transition: .25s;
}

nav a:hover {
    color: var(--accent);
}

/* ================= MOBILE ================= */

@media (max-width: 900px) {

    #main-header{
        display: flex;
        flex-direction: column;
    }

    .header-top{
        width: 100%;
        align-items: center;
    }

    .logo{
        padding-left: .125em;
        font-size: 8vw;
    }

    .burger {
        display: flex;
        align-items: center;
        justify-content: center;
        background-image: url("/src/assets/icons/burger-menu.png");
        background-position: center;
        background-size: cover;
        margin: .25em;
    }

    nav {
        display: none;
        width: 100%;
        position:absolute;
        margin-top: 3.75em;
        background-color: var(--fg);
    }

    nav.open {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    nav a {
        width: 100%;
        padding: .75em 0;
        font-size: 4vw;
        text-align: center;
        border-top: 1px solid var(--accent);
    }
    nav a:last-child{
        border-bottom: 1px solid var(--accent);
    }
}
</style>