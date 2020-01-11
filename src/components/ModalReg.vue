<template>
    <div class="div-modal-reg">
        <div class="modal-wrapper">
            <div class="modal-container">
                <div class="div-input-modal-reg">
                    <div class="container-login">
                        <label for="loginReg">Login</label>
                        <input v-model="Login" id="loginReg" type="text">
                    </div>
                    <div class="container-passreg">
                        <label for="passReg">Password</label>
                        <input v-model="Password" id="passReg" type="password">
                    </div>
                    <div class="container-confpassreg">
                        <label for="confPassReg">Confirm password</label>
                        <input v-model="ConfPass" id="confPassReg" type="password">
                    </div>
                </div>
                <div class="div-btn-modal-reg">
                    <button 
                        class="btn-cancel-modal-reg"
                        @click="$emit('dereg')"
                    >Cancel</button>
                    <button 
                        class="btn-ok-modal-reg"
                        @click="checkConfPass"
                    >Sign up</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            Login: '',
            Password: '',
            ConfPass: ''
        }
    },
    methods: {
        checkConfPass() {
            if (this.Login !== '' && this.Password !== '' && this.ConfPass !== '') {
                if (this.Password === this.ConfPass) {
                    this.$emit('okReg', this.Login, this.Password)
                } else {
                    alert("Password do not match")
                }
            } else {
                alert("Not all fields are filled")
            }
        }
    }
}
</script>

<style lang="scss">
.div-modal-reg {
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
#loginReg,
#passReg,
#confPassReg {
    margin: 0 auto;
}
.btn-ok-modal-reg,
.btn-cancel-modal-reg {
    outline: none;
    font-weight: bold;
    font-size: 1.05rem;
    border: none;
    padding: 10px 10px;
    transition: .2s;
    &:hover {
        background: #fff;
        cursor: pointer;
    }
}
.btn-ok-modal-reg {
    margin-left: 6px;
    background: #fff;
    &:hover {
        box-shadow: 0 0 0 1px #444;
        cursor: pointer;
        text-shadow: none;
    }
}
.btn-cancel-modal-reg {
    margin-right: 6px;
    background: #fff;
    &:hover {
        box-shadow: 0 0 0 1px #444;
        cursor: pointer;
        text-shadow: none;
    }
}
.div-btn-modal-reg {
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
}
.container-login,
.container-passreg,
.container-confpassreg {
    & input {
        outline: none;
        display: block;
        width: 50%;
        min-width: 150px;
        font-size: 1.2rem;
        border: 1px solid rgba(0, 0, 0, 0.5);
        background: rgb(248, 248, 248);
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        padding: 5px;
    }
    & label {
        display: block;
        margin-bottom: 3px;
        font-size: 1.3rem;
    }
}
.container-passreg {
    margin: 25px 0;
}
</style>