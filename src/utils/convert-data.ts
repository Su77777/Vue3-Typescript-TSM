import { coordinateData } from './coordinate-data'

function convertData(data: any) {
  const res = []
  for (let i = 0; i < data.length; i++) {
    // 获取传入数据里面城市的经纬度 第一个是上海 所以获取的是上海的经纬度
    const geoCoord = coordinateData[data[i].name]
    if (geoCoord) {
      res.push({
        // 第一个是上海 所以是上海的name 刚好和上面的geoCoord对应
        name: data[i].name,
        // 拿获取到的经纬度和上海的销量value 链接起来
        value: geoCoord.concat(data[i].value)
      })
    }
  }

  return res
}
export default convertData
