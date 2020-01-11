<template>
    <div class="div-container-list">
        <ul>
            <BlogItem
                v-for="(blogItem, i) of blogs"
                v-bind:blogItem="blogItem"
                v-bind:checkLogin="checkLogin"
                v-bind:index="i"
                v-on:remove-item="removeItem"
                :key='blogItem.blogs'
            />
        </ul>
    </div>
</template>

<script>
import BlogItem from '@/components/BlogItem'
export default {
    props: ['blogs', 'checkLogin'],
    components: {
        BlogItem
    },
    methods: {
        addItems() {
            
        },
        removeItem(id) {
            this.$emit('remove-item', id)
        }
    }
}
</script>

<style scoped>
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .div-container-list {
        width: 50%;
        margin: 0 auto;
    }
</style>