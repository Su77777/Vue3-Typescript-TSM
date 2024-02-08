import { defineStore } from 'pinia'
import CountData from '@/data/count.json'
import RoseData from '@/data/roseData.json'
import mapData from '@/data/mapData.json'

interface IAnalysis {
  countData: any[]
  roseData: any[]
  mapData: any[]
}


const useAnalysisStore = defineStore('analysis', {
  state: (): IAnalysis => ({
    countData: [],
    roseData: [],
    mapData: {} as any
  }),
  actions: {
    fetchCountData() {
      this.countData = CountData
    },
    fetchRoseData() {
      this.roseData = RoseData
    },
    fetchMapData() {
      this.mapData  = mapData.data
    }
  }
})

export default useAnalysisStore
