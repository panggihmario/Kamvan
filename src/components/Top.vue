<template>
     <v-layout align-start justify-space-around row fill-height>
        <h1>Kamvan Board</h1>
    <div>
      <v-btn color="black" outline  @click="openDialog">Add Task</v-btn>
    </div>
      </v-layout>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
  methods: {
    ...mapActions([
      'openDialog'
    ])
  }
}
</script>

<style>

</style>
