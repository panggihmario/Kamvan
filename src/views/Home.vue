<template>
    <div id="app">
     <Top></Top>
     <Modal></Modal>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <Backlog></Backlog>
      <Todo></Todo>
      <Doing></Doing>
      <Done></Done>
    </v-layout>
  </v-container>
    </div>
</template>

<script>
import Backlog from '@/components/BackLog.vue'
import Todo from '@/components/ToDo.vue'
import Doing from '@/components/Doing.vue'
import Done from '@/components/Done.vue'
import Top from '@/components/Top.vue'
import Modal from '@/components/Modal.vue'

export default {
  components: {
    Backlog, Todo, Doing, Done, Top, Modal
  }
}
</script>
