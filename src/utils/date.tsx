import dayjs, { Dayjs } from 'dayjs'
require('dayjs/locale/vi')

dayjs.locale('vi')

export const isToday = (d: Date | number) => {
  const date = typeof d === 'number' ? dayjs.unix(d) : dayjs(d)
  return date.isSame(dayjs(), 'date')
}

export const formatDate = (d: Date | Dayjs | number) => {
  if (typeof d === 'number') return dayjs.unix(d).format('DD-MM-YYYY')
  return dayjs(d).format('DD-MM-YYYY')
}

export const formatDateTime = (d: Date | Dayjs | number) => {
  if (typeof d === 'number') return dayjs.unix(d).format('dd, DD-MM-YYYY HH:mm:ss')
  return dayjs(d).format('DD-MM-YYYY')
}
