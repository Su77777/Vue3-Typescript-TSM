import { defineStore } from 'pinia'

const useCounterStore = defineStore('counter',{
  state:()=>({
    counter:0
  }),
  getters:{
    doubleCounter(state) {
      return state.counter*2
    }
  },
  actions:{
    changeCounter(newValue:number) {
      this.counter = newValue
    },
    addCounter() {
      this.counter++
    }
  }
})


export default useCounterStore
