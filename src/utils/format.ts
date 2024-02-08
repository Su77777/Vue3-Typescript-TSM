import utc from 'dayjs/plugin/utc'
import dayjs from 'dayjs'
const day = dayjs.extend(utc)

function formatDate(date: any) {
  const newDate = day.utc(date).utcOffset(8).format('YYYY-MM-DD HH:mm:ss')

  return newDate
}

export default formatDate
