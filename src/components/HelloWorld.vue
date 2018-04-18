<template>
  <div class="hello">
    <el-button type="info" @click="select">选择城市</el-button>

    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // msg: ''
    }
  },
  mounted() {
    if (!window.text)
      window.text = {}
  },
  computed: {
    msg() {
      if (typeof window.text.street !== 'undefined') {
        let text = ''
        for (const key in window.text) {
          if (window.text.hasOwnProperty(key)) {
            const element = window.text[key];
            text += element + ' - '
          }
        }
        return text.substring(0, text.length - 3)
      }
      return ''
    }
  },
  methods: {
    select() {
      window.text = {}
      this.$router.push('/City')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
