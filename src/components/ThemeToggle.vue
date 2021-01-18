<template>
    <div id="toggle">
        <img
            src="@/assets/sunny-icon.svg"
            alt="sun"
            @click="toggleTheme(true)"
            :style="lightTheme ? '' : turnOff"
        />
        <img
            src="@/assets/moon-icon.svg"
            @click="toggleTheme(false)"
            alt="moon"
            :style="lightTheme ? turnOff : ''"
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            lightTheme: true,
            turnOff: {
                opacity: 0.2,
            },
        };
    },
    methods: {
        toggleTheme(light) {
            if (light) {
                this.lightTheme = true;
                this.addBodyClass("light", "dark");
                this.changeSVGElement(true)
            } else {
                this.lightTheme = false;
                this.addBodyClass("dark", "light");
                this.changeSVGElement(false)
            }
        },
        addBodyClass(addedStyle, removedStyle) {
            const body = document.getElementById("app").classList;
            body.add(addedStyle);
            body.remove(removedStyle);
        },
        changeSVGElement(light) {
            const logo = document.querySelector("#nav img")
            const arrow = document.querySelectorAll(".button > img")

            if (light) {
                logo.src = require("@/assets/logo.svg")
                arrow.forEach(e => {
                    e.src = require("@/assets/arrow-icon.svg")
                })
            } else {
                logo.src = require("@/assets/logo-white.svg")
                arrow.forEach(e => {
                    e.src = require("@/assets/arrow-white-icon.svg")
                })
            }
        }
    },
    mounted() {
        console.log(document.querySelector("#nav img").src);
    }
};
</script>

<style scoped>
#toggle {
    padding: 10px 20px;
    background-color: var(--black-color);
    border-radius: 30px;
    display: flex;
    align-items: center;
}

img:first-child {
    margin-right: 30px;
    width: 20px;
}

img {
    width: 15px;
    cursor: pointer;
}

.not-toggled {
    opacity: 0.5;
}
</style>