export default function getCalendarData(d) {
  const date = d ? new Date(d) : new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const ArrayData = [
    {
      date: `${year}-${month}-${day}`,
      title: '5th Molokiya Half Marathon'
    },
    {
      date: `${year}-${month}-${day}`,
      title: '27 BookForum'
    },
    {
      date: `${year}-${month + 1}-2`,
      title: 'Street Food So Good'
    },
    {
      date: `${year}-${month + 1}-15`,
      title: 'Весняна феєрія'
    },
    {
      date: `${year}-${month + 2}-6`,
      title: 'Кармен-сюїта'
    }
  ]
  const ObjectData = {}

  ArrayData.forEach(item => {
    ObjectData[item.date] = { ...item }
  })

  return {
    Array: ArrayData,
    Object: ObjectData
  }
}
