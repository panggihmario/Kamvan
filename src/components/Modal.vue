<template>
     <v-layout row justify-center>
      <v-dialog v-model="dialog" persistent max-width="500px">
           <main style="background-color:white">
        <v-card>
          <v-card-title>
            <span class="headline">New Task</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12>
                  <v-text-field label="New Task" v-model="backLog" required></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="description" v-model="description" required></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="point" v-model="point" required></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1"  v-on:click="addBackLog" flat @click.native="dialog = false" >Save</v-btn>
          </v-card-actions>
        </v-card>
           </main>
      </v-dialog>
    </v-layout>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
  methods: {
    ...mapActions([
      'addBackLog'
    ])
  },
  computed: {
    ...mapState([
      'backlog', 'description', 'point'
    ]),
    dialog: {
      get () {
        return this.$store.state.dialog
      },
      set () {
        this.$store.commit('setDialog', false)
      }
    },
    backLog: {
      get () {
        return this.$store.state.backLog
      },
      set (value) {
        this.$store.commit('setBackLog', value)
      }
    },
    description: {
      get () {
        return this.$store.state.description
      },
      set (value) {
        this.$store.commit('setDescription', value)
      }
    },
    point: {
      get () {
        return this.$store.state.point
      },
      set (value) {
        this.$store.commit('setPoint', value)
      }
    }
  }
}
</script>

<style>

</style>
