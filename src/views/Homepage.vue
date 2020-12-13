<template>
    <div id="home">
        <div class="title">
            <span class="name">DEVIT HUOTKEO</span>
            <span>Building UI UX and Branding is</span>
            <span>What I do</span>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.title {
    margin: 0 var(--margin-big);
    display: flex;
    flex-direction: column;
    font-weight: 500;
}

span {
    font-size: 1.5rem;
    font-weight: 600;
}

.title > span:first-child {
    font-size: 0.7rem;
    opacity: 0.7;
}
</style>