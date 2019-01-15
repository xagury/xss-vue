<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import * as types from './store/const'
export default {
  name: 'App',
   created() {
    this.initCar()
    this.initUser()
    this.initUsername()
  },
  methods: {
    ...mapActions(['initCar','initUser','initUsername'])
  },
 
}
</script>

<style>
#app {
 
}
</style>
