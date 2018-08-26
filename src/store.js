import Vue from 'vue'
import Vuex from 'vuex'
import database from '@/fire.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    backlog: '',
    arrBacklog: [],
    arrTodo: [],
    arrDoing: [],
    arrDone: [],
    description: '',
    point: '',
    dialog: false
  },
  mutations: {
    setDialog (state, payload) {
      state.dialog = payload
    },
    setBackLog (state, payload) {
      state.backlog = payload
    },
    setDescription (state, payload) {
      state.description = payload
    },
    setPoint (state, payload) {
      state.point = payload
    }
  },
  actions: {
    openDialog (context) {
      context.commit('setDialog', true)
    },
    addBackLog (context) {
      database.ref('backlog').push({
        backlog: this.state.backlog,
        description: this.state.description,
        point: this.state.point
      }, function (err) {
        if (err) {
          console.log(err)
        } else {
          console.log('success')
        }
      })
    },
    dataBackLog () {
      let self = this
      database.ref('backlog').on('value', snapshot => {
        var data = snapshot.val()
        self.state.arrBacklog = data
      })
    },
    dataTodo (context) {
      let self = this
      database.ref('todo').on('value', snapshot => {
        var data = snapshot.val()
        self.state.arrTodo = data
      })
    },
    dataDoing (context) {
      let self = this
      database.ref('doing').on('value', snapshot => {
        var data = snapshot.val()
        self.state.arrDoing = data
      })
    },
    dataDone (context) {
      let self = this
      database.ref('done').on('value', snapshot => {
        var data = snapshot.val()
        self.state.arrDone = data
      })
    },
    moveTodo (context, index) {
      database.ref('backlog').child(index).once('value')
        .then(snapshot => {
          let data = snapshot.val()
          database.ref(`/todo/${index}`).set(data, function (err) {
            if (err) {
              console.log(err)
            } else {
              console.log('success')
            }
          })
          database.ref(`backlog/${index}`).remove()
        })
    },
    moveBacklog (context, index) {
      database.ref('todo').child(index).once('value')
        .then(snapshot => {
          let data = snapshot.val()
          database.ref(`/backlog/${index}`).set(data, function (err) {
            if (err) {
              console.log(err)
            } else {
              console.log('success to backlog')
            }
          })
          database.ref(`/todo/${index}`).remove()
        })
    },
    moveDoing (context, index) {
      database.ref('todo').child(index).once('value')
        .then(snapshot => {
          let data = snapshot.val()
          database.ref(`/doing/${index}`).set(data, function (err) {
            if (err) {
              console.log(err)
            } else {
              console.log('success to backlog')
            }
          })
          database.ref(`/todo/${index}`).remove()
        })
    },
    moveDone (context, index) {
      database.ref('doing').child(index).once('value')
        .then(snapshot => {
          let data = snapshot.val()
          database.ref(`/done/${index}`).set(data, function (err) {
            if (err) {
              console.log(err)
            } else {
              console.log('success move to done')
            }
          })
          database.ref(`/doing/${index}`).remove()
        })
    },
    backTodo (context, index) {
      database.ref('doing').child(index).once('value')
        .then(snapshot => {
          let data = snapshot.val()
          database.ref(`/todo/${index}`).set(data, function (err) {
            if (err) {
              console.log(err)
            } else {
              console.log('back todo')
            }
          })
          database.ref(`/doing/${index}`).remove()
        })
    },
    backDoing (context, index) {
      database.ref('done').child(index).once('value')
        .then(snapshot => {
          let data = snapshot.val()
          database.ref(`/doing/${index}`).set(data, function (err) {
            if (err) {
              console.log(err)
            } else {
              console.log('back todo')
            }
          })
          database.ref(`/done/${index}`).remove()
        })
    },
    deleteTask (context, index) {
      database.ref(`backlog/${index}`).remove()
    },
    finish (context, index) {
      database.ref(`done/${index}`).remove()
    }
  }
})
