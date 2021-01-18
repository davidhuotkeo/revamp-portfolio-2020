<template>
    <div id="nav">
        <img src="@/assets/logo.svg" alt="logo" />

        <div class="letter-nav">
            <router-link to="/">Case Studies</router-link>
            <router-link to="/">About Me</router-link>
            <dave-theme></dave-theme>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
#nav {
    position: fixed;
    top: 0;
    left: 0;
    width: calc(100vw - var(--margin-big) * 2);

    --text-title-space: 40px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 var(--margin-big);
    margin-top: var(--margin-top);

    z-index: 10;
}

.letter-nav {
    display: flex;
    align-items: center;
}

img {
    width: 50px;
}

a {
    font-size: 0.9rem;
    text-decoration: none;
    color: var(--text-color);
}

.letter-nav > *:not(:last-child) {
    margin-right: var(--text-title-space);
}

a:last-child {
    margin-right: 0;
}
</style>