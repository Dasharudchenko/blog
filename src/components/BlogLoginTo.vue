<template>
    <div class="container">
        <h1 class="h1-blogreg">Blog</h1>
        <div class="div-welcome">
            <p>{{ nameLogin }}</p>
        </div> 
        <div class="div-btn">
            <button 
                class="btn-signout"
                @click="$emit('checkExit', true)"
            >Sign out</button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['nameLogin']
}
</script>

<style lang="scss">
.container {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
}
.div-welcome{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 20px;
    height: 100%;
    p {
        margin: 0;
        font-size: 1.5rem;
    }
}
.div-btn {
    display: flex;
    margin: 0 20px;
    height: 100%;
    justify-content: center;
    align-items: center;
    .btn-signout {
        outline: none;
        display: inline-block;
        height: 100%;
        background: #fff;
        border: none;
        padding: 0 20px;
        font-weight: 500;
        font-size: 1.1rem;
        transition: .3s;
        &:hover {
            cursor: pointer;
            box-shadow: 0 0 0 1px #777;
        }
    }
}
</style>