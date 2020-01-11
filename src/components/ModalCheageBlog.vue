<template>
    <div id="div-modal" class="div-modal">
        <div class="modal-wrapper">
            <div class="modal-container">
                <div class="div-textarea">
                    <textarea 
                        id="textarea-modal-edit"
                        v-on:keydown="textareaHeight"
                        v-model="text"
                    ></textarea>
                </div>
                <div class="div-btn-modal">
                    <button 
                        class="btn-cancel-modal"
                        @click="$emit('closeEdit')"
                    >Cancel</button>
                    <button 
                        class="btn-create-modal"
                        @click="onSubmit"
                    >Edit</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            text: ''
        }
    },
    methods: {
        textareaHeight: function(e) {
            e.target.style.height = 'auto'
            e.target.style.height = e.target.scrollHeight + 'px'
        },
        onSubmit() {
            if (this.text.trim()) {
                const editBlog = {
                    id: Date.now(),
                    title: this.text
                }

                this.$emit('edit-blog', editBlog)
                this.text = ''
            }
        },
        setText: function(value) {
            console.log(value)
            this.text = value
        }
    },
    created() {
        this.$parent.$on('text', this.setText)
        // находим элемент textarea для вставки существующиего текста
        // document.getElementById('textarea-modal-edit')
    }
}
</script>

<style lang="scss">
    .div-modal {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba( #000000, .5);
        display: table;
        transition: opasity .3s ease;
    }
    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }
    .modal-container {
        width: 35%;
        margin: 0px auto;
        padding: 20px 20px;
        background-color: #fff;
        box-shadow: 0 2px 9px rgba(#000, .33);
        transition: all .3s ease;
    }
    .div-btn-modal {
        display: flex;
        justify-content: space-around;
        margin-top: 20px;
    }
    .btn-create-modal,
    .btn-cancel-modal {
        outline: none;
        color: #000;
        font-weight: bold;
        font-size: 1.05rem;
        border: none;
        padding: 10px 15px;
        &:hover {
            cursor: pointer;
        }
    }
    .btn-create-modal {
        margin-left: 6px;
        &:hover {
            box-shadow: 0 0 0 1px #444 inset;
            cursor: pointer;
            text-shadow: none;
        }
    }
    .btn-cancel-modal {
        margin-right: 6px;
        &:hover {
            box-shadow: 0 0 0 1px #444 inset;
            cursor: pointer;
        }
    }
    #textarea-modal-edit {
        outline: none;
        width: 100%;
        border: none;
        border-bottom: 1px solid #555;
        resize: none; 
        overflow: hidden;
        font-size: 1.2rem;
    }
</style>