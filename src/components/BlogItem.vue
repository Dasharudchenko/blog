<template>
    <li>
        <div class="div-item">
            <div class="div-text-title">
                <span>
                    {{ blogItem.title }}
                </span>
            </div>
            <hr v-if="!checkLogin">
            <div class="div-btn"
                v-if="!checkLogin"
            >
                <button class="btn-edit"
                        @click="show"
                >Edit</button>
                <button class="btn-remove" 
                        v-on:click="$emit('remove-item', blogItem.id)"
                >Delete</button>
            </div>
        </div>
        <ModalCheageBlog
            v-if="showEdit"
            @closeEdit="closeEdit"
            @edit-blog="editBlog"
        />
    </li>
</template>

<script>
import ModalCheageBlog from '@/components/ModalCheageBlog'
export default {
    props: {
        checkLogin: Boolean,
        blogItem: {
            type: Object,
            required: true
        },
        index: Number
    },
    data() {
        return {
            showEdit: false
        }
    },
    methods: {
        show() {
            this.showEdit = true
            this.$emit('text', this.blogItem.title)
        },
        closeEdit() {
            this.showEdit = false
        },
        editBlog(value) {
            this.showEdit = false
            this.blogItem.title = value.title
        }
    },
    components: {
        ModalCheageBlog
    }
}
</script>

<style scoped lang="scss">
    li {
        border: 1px solid #ccc;
        padding: .5rem 2rem;
        margin-bottom: 10px;
        box-shadow: 0 3px 5px rgba(200, 200, 200, 1);
        background: rgb(250, 250, 250);
    }
    .div-item {
        span {
            display: block;
        }
        hr {
            margin: 5px;
            margin-bottom: 10px;
        }
    }
    .div-text-title {
        display: flex;
        padding: 20px 0;
        text-align: start;
    }
    .div-btn {
        margin: 0;
        display: flex;
        justify-content: space-around;
    }
    .btn-remove,
    .btn-edit {
        background: rgb(250, 250, 250);
        font-weight: bold;
        font-size: 1.05rem;
        padding: 5px 10px;
        border: none;
        transition: .2s;
        &:hover {
            box-shadow: 0 0 0 1px #444;
            cursor: pointer;
        }
    }
    .btn-remove {
        margin-left: 6px;
    }
    .btn-edit {
        margin-right: 6px;
    }
</style>