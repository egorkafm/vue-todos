<template>
  <div @submit.prevent="handleSubmit">
    <form>
      <label for="name">Name</label>
      <input v-model="name" class="mb" type="text">
      <label for="password">Password</label>
      <input v-model="password" class="mb" type="password">
      <button @click="submit" type="submit">LOGIN</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ModalLogin',
  data() {
    return {
      name: '',
      password: ''
    }
  },
  mounted() {
    if (localStorage.name === 'admin' && localStorage.password === '12345') {
      this.name = localStorage.name;
      this.password = localStorage.password;
    }
  },
  
  watch: {
    name(newName) {
      localStorage.name = newName;
    }
  },
  methods: {
    submit() {
      localStorage.name = this.name;
      localStorage.password = this.password;
      if (localStorage.name === 'admin' && localStorage.password === '12345') {
        alert('Welcome, admin!')
      }
      // this.name = '';
      // this.password = '';
  
      console.log('wwww');
    },
    handleSubmit() {

    }
  }
}
</script>

<style>
.modal-wrapper {
  width: 421px;
  height: 414px;
  padding: 40px 30px 10px 30px;
  margin: 0 auto;
}
label {
  width: 48px;
  height: 21px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  color: #333333;
}
input {
  display: block;
  width: 421px;
  height: 53px;
  margin: 0;
  padding: 0;
  background: #FFFFFF;
  border: 1px solid #9A9A9A;
  box-sizing: border-box;
}

button {
  background: #0076C0;
  color: #FFFFFF;
  width: 421px;
  height: 53px;
  border: none;
}
button:hover {
  cursor: pointer;
  opacity: 0.9;
}
.mb {
  margin-bottom: 20px;
}
</style>