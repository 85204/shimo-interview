<template>
  <div class="selector">
    <button v-for="i in cityData" :key="i" style="" @click="handleCityClick"
    >{{ i }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cityData: ['北京', '上海'],
    }
  },
  methods: {
    handleCityClick(e) {
      window.text.city = e.target.textContent
      this.$router.push('/County')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
