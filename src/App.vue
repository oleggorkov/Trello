<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="scss">

body {
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding: 0;
}

button {
  &:focus {
    outline: none;
   }
}

#app {
  width: 100%;
  height: 100vh;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: antiquewhite;
}

.app__container {
  width: 700px;
  height: auto;

  padding: 30px;

  box-shadow: 0 0 15px black;
  background: darkgray;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 50px;
}

.router-link {
  width: 300px;
  height: 40px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  border: 2px solid rosybrown;
  box-shadow: 0 0 10px bisque;
  border-radius: 5px;

  font-size: 16px;
  font-weight: 700;

  background: burlywood;
  cursor: pointer;

  padding: 0 10px;

  color: white;
  text-decoration: none;

  transition: color .25s, background .25s, border .25s;

  &:hover {
    color: burlywood;
    background: white;
    border: 2px solid burlywood;

    & .new-board__plus span {
      background: burlywood;
    }
  }
}

</style>
