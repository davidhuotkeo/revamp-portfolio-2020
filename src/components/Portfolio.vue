<template>
    <div class="portfolio" :id="project.name">
        <img
            class="image-cover"
            :src="getImage(project.image)"
            :alt="project.name"
        />
        <p class="heading">{{ project.name }}</p>
        <p class="text">{{ project.description }}</p>
        <div class="content">
            <div
                v-for="(content, id) in project.content"
                :key="id"
                class="content-wrap"
            >
                <img
                    v-if="content.type == 'image'"
                    :src="getImage(content.content)"
                />
                <p class="text" v-if="content.type == 'text'">
                    {{ content.content }}
                </p>
            </div>
        </div>
        <div class="more" ref="more">
            <div class="more-content" v-for="(content, id) in project.more" :key="id">
                <img
                    v-if="content.type == 'image'"
                    :src="getImage(content.content)"
                />
                <p class="title" v-if="content.type == 'title'">
                    {{ content.content }}
                </p>
                <p class="text" v-if="content.type == 'text'">
                    {{ content.content }}
                </p>
            </div>
        </div>
        <p v-if="toggled" @click="moreLess" class="read">Roll Back</p>
        <p v-else @click="moreLess" class="read">Read More</p>
    </div>
</template>

<script>
export default {
    props: ["project"],
    data() {
        return {
            toggled: false,
        };
    },
    methods: {
        moreLess() {
            let moreStyle = this.$refs.more.style
            let heightContent = this.$refs.more.scrollHeight

            if (this.toggled) {
                this.navigateTo(this.project.name)
                moreStyle.height = "0px"
            } else moreStyle.height = `${heightContent}px`

            this.toggled = !this.toggled;
        },
        navigateTo(idName) {
            const offsetTop = document.getElementById(idName).offsetTop;

            scroll({
                top: offsetTop,
                behavior: "smooth",
            });
        },
    },
};
</script>

<style scoped>
@import "../../src/assets/css/portfolio.css";
</style>