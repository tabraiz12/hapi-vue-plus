<template>
  <div id="app">
    <h1>\{{ msg }}</h1>
    <button class="button" v-on:click="helloCall()">Call API</button>
    <p>API says: \{{ api }}</p>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        // note: changing this line won't causes changes
        // with hot-reload because the reloaded component
        // preserves its current state and we are modifying
        // its initial state.
        msg: 'Welcome!',
        api: ''
      }
    },
    methods: {
      helloCall: function() {
        this.$http({
          url: '/api/call',
          method: 'GET'
        }).then(function(response) {
          this.$set('api', response.data.message)
        }, function(response) {
          return false
        })
      }
    }
  }
</script>

<style>
  body {
    font-family: Open Sans, sans-serif;
  }
</style>
