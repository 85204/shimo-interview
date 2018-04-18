<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="Router"/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      transitionName: 'slide-right'
    }
  },
  watch: {
    '$route'(to, from) {
      //  监听路由变化时的状态为前进还是后退
      if (this.$router.isBack) {
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = 'slide-left'
      }
      this.$router.isBack = false
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.Router {
  position: absolute;
  width: 100%;
  transition: all 0.8s ease;
  top: 40px;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100% 0);
}
button {
  width: 100%;
  height: 40px;
  background-color: white;
  background-color: white;
  border-top-style: solid;
  border-right-style: none;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-top-width: 1px;
  border-left-style: none;
  border-color: black;
}

</style>

    
