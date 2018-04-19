<template>
  <div class="selector">
    <button v-for="i in cityData" :key="i" style="" @click="handleCityClick"
    >{{ i }}</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      cityData: [],
    }
  },
  created() {
    (async () => {
      const res = await axios.post('/api/get/city')
      console.log(res.data)
      if (!res.data.errno) {
        this.cityData = res.data.city
      }
    })()
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
