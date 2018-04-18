<template>
  <div class="selector">
    <button v-for="i in countyData" :key="i" style="width:100%;height:40px" @click="handleCountyClick"
    >{{ i }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  computed: {
    countyData() {
      switch (window.text.city) {
        case '北京':
          return ['东城', '西城']
        case '上海':
          return ['虹口', '浦东']
        default:
          this.$router.push('/')
          return []
      }
    }
  },
  methods: {
    handleCountyClick(e) {
      window.text.county = e.target.textContent
      this.$router.push('/Street')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
