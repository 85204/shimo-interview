<template>
  <div class="selector">
    <button v-for="i in streetData" :key="i" style="width:100%;height:40px" @click="handleStreetClick"
    >{{ i }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // streetData: ['虹口1', '虹口2', '虹口3'],
    }
  },
  computed: {
    streetData() {
      switch (window.text.county) {
        case '东城':
          return ['东城', '西城']
        case '西城':
          return ['虹口', '浦东']
        case '虹口':
          return ['虹口1', '虹口2']
        case '浦东':
          return ['浦东2', '浦东3']
        default:
          this.$router.push('/')
          return []
      }
    }
  },
  methods: {
    handleStreetClick(e) {
      window.text.street = e.target.textContent
      this.$router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
