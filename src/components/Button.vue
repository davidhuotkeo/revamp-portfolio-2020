<template>
    <div class="button">
        {{name}}
        <img src="@/assets/arrow-icon.svg" alt="arrow">
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        },
        white: {
            type: Boolean,
            required: false
        }
    }
};
</script>

<style scoped>
* {
    opacity: 0.6;
    transition: all 0.1s ease-in;
    cursor: pointer;
    width: fit-content;
}

*:hover > img {
    transform: translateX(10px);
}

img {
    width: 20px;
    margin-left: 20px;
}

</style>