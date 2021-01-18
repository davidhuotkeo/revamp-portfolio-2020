<template>
    <div id="app" class="light">
        <div id="nav">
            <dave-nav></dave-nav>
        </div>
        <router-view></router-view>
    </div>
</template>

<style>
@import "./css/style.css";
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");

#app {
    font-family: "Poppins", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: var(--text-color);
    text-align: start;
    background-color: var(--bg-color);

    transition: background 0.5s ease-in, color 1s ease-in;
}

body {
    margin: 0;
    font-size: var(--font-size);
    width: 100vw;
    min-height: calc(100vh - var(--margin-top));
}
</style>
