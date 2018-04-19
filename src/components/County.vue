<template>
  <div class="selector">
    <button v-for="i in countyData" :key="i" style="width:100%;height:40px" @click="handleCountyClick"
    >{{ i }}</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      countyData: []
    }
  },
  created() {
    (async () => {
      const res = await axios.post('/api/get/county', { city: window.text.city })
      console.log(res.data)
      if (!res.data.errno) {
        this.countyData = res.data.county
      }
    })()
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
