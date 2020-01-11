<template>
    <div class="container">
      <h1 class="h1-blogreg">Blog</h1>
      <div class="div-inputs">
        <input
            v-model="Name" 
            placeholder="Login" 
            type="text" name="login" 
            id="input-login">
        <input
            v-model="Password" 
            placeholder="Password" 
            type="password" 
            name="password" 
            id="input-password">
      </div>
      <div class="div-btn">
        <button 
            class="btn-login"
            @click="checkLogin"
        >Log in</button>
        <button 
            class="btn-signup"
            @click="$emit('checkReg')"
        >Sign up</button>
      </div>
    </div>
</template>

<script>
export default {
    props: ['users'],
    data() {
        return {
            Name: '',
            Password: ''
        }
    },
    mounted() {

    },
    methods: {
        checkLogin() {
            console.log(this.users)
            if (this.Name !== '' && this.Password !== '') {
                for (let i = 0; i < this.users.length; i++) {
                    if (this.users[i].name === this.Name && this.users[i].password === this.Password) {
                        this.$emit('loginTo')
                        this.$emit('nameLogin', this.Name)
                    }
                }
            }
        }
    }
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
.h1-blogreg {
  margin: 0;
  margin-right: 20px;
}
.div-inputs {
  border: 1px solid #aaa;
  display: inline-block;
  margin: 0 5px;
  height: 100%;
}
#input-login,
#input-password {
  font-size: 1rem;
  border: none;
  height: 100%;
  padding: 0 15px;
  outline: none;
}
#input-login {
  border-right: 1px solid #aaa;
}
#input-password {
  border-left: 1px solid #aaa;
}
.div-btn {
  display: flex;
  margin: 0 5px;
  height: 100%;
  justify-content: center;
  align-items: center;
}
.btn-login,
.btn-signup {
  outline: none;
  display: inline-block;
  height: 100%;
  border: none;
  background: #fff;
  padding: 0 20px;
  font-weight: 500;
  font-size: 1.1rem;
  transition: .3s ease;
  &:hover {
      cursor: pointer;
      box-shadow: 0 0 0 1px #777;
  }
}
.btn-login {
  margin-right: 5px;
}
.btn-signup {
  margin-left: 5px;
}
</style>