<template>
    <div id="nav">
        <img src="@/assets/logo.svg" alt="logo" />

        <div class="letter-nav">
            <router-link to="/">Case Studies</router-link>
            <router-link to="/">About Me</router-link>
            <router-link to="/">Website Appearance</router-link>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
#nav {
    --text-title-space: 40px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 var(--margin-big);
    margin-top: var(--margin-top);
}

img {
    width: 50px;
}

a {
    font-size: 0.9rem;
    text-decoration: none;
    color: var(--black-color);
    margin: 0 var(--text-title-space);
}

a:first-child {
    color: var(--accent-color);
}

a:last-child {
    margin-right: 0;
}
</style>