<template>
    <v-flex xs12 sm4 md3 lg3>
                <div
      id="e3"
      style="max-width: 400px; margin: auto;"
      class="white"
    >
      <v-toolbar
        color="pink"
        dark
      >
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title>Back-Log</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon class="black--text">
          <i class="fas fa-clipboard-list fa-2x"></i>
        </v-btn>
      </v-toolbar>
      <v-card>
        <v-container
          fluid
          grid-list-lg
        >
          <v-layout row wrap>
            <v-flex xs12 v-for="(task,index) in arrBacklog" :key=index>
              <v-card color="white" class="black--text" >
                <v-card-title class="headline mb-0">
                   {{task.backlog}}
                </v-card-title>
                <v-card-text>
                  <v-list>
                     <v-list-tile>
                       description : {{task.description}}
                    </v-list-tile>
                     <v-list-tile>
                       point : {{task.point}}
                    </v-list-tile>
                  </v-list>
                </v-card-text>
                <v-card-actions>
                    <v-layout row>
                        <v-flex xs6>
                      <v-btn small color="red" outline @click="deleteTask(index)">Delete</v-btn>
                        </v-flex>
                      <v-flex xs6>
                      <v-btn small color="black" outline @click="moveTodo(index)">Update</v-btn>
                        </v-flex>
                    </v-layout>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </div>
          </v-flex>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
  methods: {
    ...mapActions([
      'dataBackLog', 'moveTodo', 'deleteTask'
    ])
  },
  computed: {
    ...mapState([
      'arrBacklog'
    ])
  },
  mounted () {
    this.dataBackLog()
  }
}
</script>

<style>

</style>
