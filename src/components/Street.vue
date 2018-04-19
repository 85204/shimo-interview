<template>
  <div class="selector">
    <button v-for="i in streetData" :key="i" style="width:100%;height:40px" @click="handleStreetClick"
    >{{ i }}</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      streetData: [],
    }
  },
  created() {
    (async () => {
      const res = await axios.post('/api/get/street', { city: window.text.city, county: window.text.county })
      console.log(res.data)
      if (!res.data.errno) {
        this.streetData = res.data.street
      }
    })()
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
