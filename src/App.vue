<template>
    <div id="app">
        <div id="nav">
            <dave-nav></dave-nav>
        </div>
        <router-view></router-view>
    </div>
</template>

<style>
@import "./css/style.css";

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: var(--black-color);
    text-align: start;
}

body {
    margin: 0;
    background-color: var(--white-color);
    font-size: var(--font-size);
}
</style>
