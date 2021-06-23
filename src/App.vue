<template>
    <div id="app">
        <div id="responsive" ref="responsive">
            <div class="resp-wrapper">
                <p>Responsive</p>
                <p>Devit Portfolio</p>
                <p>Coming Soon</p>
            </div>
        </div>
        <div id="wrapper" ref="contentWrapper">
            <nav>
                <a @click="navigateTo('wrapper')">devit huotkeo</a>
                <a @click="navigateTo('experience')">about</a>
                <a @click="navigateTo('portfolio')">work</a>
                <a @click="navigateTo('contact')">contact</a>
            </nav>
            <section class="head" id="head">
                <img class="logo" src="@/assets/logo.svg" alt="logo" />
                <span>Impossibly</span>
                <span>Creative</span>
                <span>Designer</span>
                <span>Craft your</span>
                <span>Brand and</span>
                <span>Interface</span>
                <span>To the next</span>
                <span>Level</span>
            </section>
            <section id="experience">
                <div class="left">
                    <p class="headline">About</p>
                    <p>
                        I am into designing interface and user experience and
                        branding identity. Therefore, my work has put all heart
                        and soul into it.
                    </p>
                </div>
                <div class="right">
                    <div
                        v-for="(exp, id) in experiences"
                        :key="id"
                        class="exp-detail"
                    >
                        <p>{{ exp.year }}</p>
                        <p>{{ exp.title }}</p>
                        <p>{{ exp.description }}</p>
                    </div>
                </div>
            </section>
            <section id="expert">
                <p class="headline">Expertise</p>
                <div class="expertise">
                    <p>Branding Identity</p>
                    <p>UI UX Design</p>
                    <p>Web Development</p>
                    <p>Software Development</p>
                </div>
            </section>
            <section id="portfolio">
                <p class="headline">My Work</p>
                <div class="table-content">
                    <p class="head">Project List</p>
                    <div class="projects">
                        <a
                            v-for="(project, id) in work"
                            :key="id"
                            @click="navigateTo(project.name)"
                            >{{ project.name }}</a
                        >
                    </div>
                </div>
                <div class="work" v-for="(project, id) in work" :key="id">
                    <dave-portfolio :project="project"></dave-portfolio>
                </div>
            </section>
            <section id="contact">
                <p class="headline">Contact</p>
                <div class="contact-me">
                    <a href="tel:087575857">Phone Number</a>
                    <a href="mailto:david.huotkeo@gmail.com">Email</a>
                    <a href="https://www.behance.net/devithuotkeo">Behance</a>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import db from "@/assets/database/data.json";
import Portfolio from "./components/Portfolio";

export default {
    data() {
        return {
            experiences: db.experience,
            work: db.work,
        };
    },
    name: "App",
    mounted() {
        // this.resizeScreeen();
        window.addEventListener("scroll", this.scrollChangeTheme);
        // window.addEventListener("resize", this.resizeScreeen);
    },
    methods: {
        scrollChangeTheme() {
            const head = document
                .getElementById("head")
                .getBoundingClientRect();
            if (head.height + head.y < 900) {
                document.body.classList.add("white");
            } else {
                document.body.classList.remove("white");
            }
        },
        // resizeScreeen() {
        //     const width = window.innerWidth;
        //     if (width < 1000) {
        //         if (width < 1000 && (width >= 1200 || width <= 800)) {
        //             this.$refs.responsive.style.display = "flex";
        //             this.$refs.contentWrapper.style.display = "none";
        //             document.body.style.overflow = "hidden";
        //         }
        //     } else {
        //         if (width > 1000 && width < 1200) {
        //             this.$refs.responsive.style.display = "none";
        //             this.$refs.contentWrapper.style.display = "block";
        //             document.body.style.overflow = "scroll";
        //         }
        //     }
        // },
        navigateTo(idName) {
            const offsetTop = document.getElementById(idName).offsetTop;

            scroll({
                top: offsetTop,
                behavior: "smooth",
            });
        },
    },
    components: {
        "dave-portfolio": Portfolio,
    },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&display=swap");
@import "../src/assets/css/root.css";
@import "../src/assets/css/head.css";
@import "../src/assets/css/experience.css";
@import "../src/assets/css/responsive.css";
@import "../src/assets/css/contact.css";

body {
    --text-color: var(--white-color);
    --background-color: var(--black-color);
    margin: 0;
    color: var(--text-color);
    background-color: var(--background-color);
    transition: background 1.5s cubic-bezier(0.075, 0.82, 0.165, 1),
        color 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}

#app {
    font-family: "Nunito Sans", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: start;
    min-height: 300vh;
    margin: 0 12vw;
}

section {
    margin-bottom: 150px;
}

.headline {
    font-size: 3rem;
    font-weight: bold;
    display: flex;
    flex-direction: column;
}

.black {
    --text-color: var(--white-color);
    --background-color: var(--black-color);
}

.white {
    --text-color: var(--black-color);
    --background-color: var(--white-color);
}

.table-content {
    margin-bottom: 50px;
}

p.head {
    font-size: 1.5rem;
}

.projects {
    display: flex;
    flex-direction: column;
}

.projects > a {
    cursor: pointer;
    opacity: 0.5;
    font-style: italic;
    width: fit-content;
    margin-bottom: 5px;
}

.projects > a:hover {
    opacity: 1;
    font-style: normal;
}
</style>
