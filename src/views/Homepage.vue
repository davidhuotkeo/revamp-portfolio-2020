<template>
    <div id="home">
        <div class="intro-overlay">
            <div class="overlay-top"></div>
            <div class="overlay-top"></div>
            <div class="overlay-top"></div>
            <div class="overlay-bottom"></div>
            <div class="overlay-bottom"></div>
            <div class="overlay-bottom"></div>
        </div>
        <div class="content">
            <p>DEVIT HUOTKEO</p>
            <p>Building UI UX and Branding is What I do</p>
            <dave-btn name="Contact me"></dave-btn>
        </div>
        <div class="bottom-content">
            <div
                class="bottom-content-image"
                v-for="casestudy in casestudies"
                :key="casestudy.id"
                :style="{
                    backgroundImage: `url(${require('@/assets/new-year.jpg')})`,
                }"
            >
                <div class="black-cover"></div>
                <div class="title">
                    <p>{{ casestudy.type }}</p>
                    <p>{{ casestudy.title }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import db from "@/assets/data/db.json";

export default {
    data() {
        return {
            casestudies: db.caseStudy,
        };
    },
    methods: {
        scaleCaseStudy() {}
    },
    mounted() {
        const topOverlay = document.querySelectorAll(".overlay-top")
        const bottomOverlay = document.querySelectorAll(".overlay-bottom")

        let delay = 1
        topOverlay.forEach(overlay => {
            overlay.style.animationDelay = `${delay}s`
            delay += 0.1
        })

        let delayBottom = delay + 1

        bottomOverlay.forEach(overlay => {
            overlay.style.animationDelay = `${delayBottom}s`
            delayBottom += 0.2
        })
    },
};
</script>

<style scoped>
#home {
    --column: repeat(3, 1fr);
    --row: repeat(2, 1fr);
}

#home,
.intro-overlay {
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: var(--column);
    grid-template-rows: var(--row);
}

.intro-overlay {
    position: absolute;
    top: 0;
    left: 0;
}

.overlay-top, .overlay-bottom {
    background-color: var(--text-color);
    transform-origin: top;
    transform: scaleY(1);
    animation: scaleTop 0.5s ease-in-out forwards;
}

.overlay-bottom {
    z-index: 2;
    transform-origin: right;
    transform: scaleX(1);
    animation: scaleRight 0.5s ease-in-out forwards;
}

.content {
    grid-row: 1 / 2;
    grid-column: 1 / 4;
    align-self: end;
    padding: 0 var(--margin-big);
    margin-bottom: 70px;
    color: var(--text-color);
}

.content > p:first-child {
    font-size: 0.8rem;
    margin-bottom: 0;
}

.content > p:nth-child(2) {
    font-size: 1.5rem;
    margin: 0;
    font-weight:600;
    max-width: 400px;
}

.content > *:last-child {
    margin-top: 15px;
}

.bottom-content {
    width: 100vw;
    display: grid;
    color: var(--bg-color);
    grid-template-columns: var(--column);
}

.bottom-content > div {
    background-size:cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
}

.black-cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--black-color);
    opacity: 0.5;
    z-index: 0;
}

.title {
    z-index: 1;
    position: absolute;
    bottom: 30px;
    color: var(--white-color);
}

.title > p {
    margin: 0;
    margin: 0 30px;
}

.title > p:first-child {
    font-size: 0.9rem;
}

.title > p:not(:first-child) {
    font-weight: 600;
    font-size: 1.3rem;
}

@keyframes scaleTop {
    0% {
        transform: scaleY(1);
    }
    100% {
        transform: scaleY(0);
    }
}

@keyframes scaleRight {
    0% {
        transform: scaleX(1);
    }
    100% {
        transform: scaleX(0);
    }
}

</style>