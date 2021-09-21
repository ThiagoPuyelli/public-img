export default function pagination (data: Array<any>, page: number, length: number) {
  let actualPage = length * (page - 1)
  const dataSend = []
  for (let i = 0; i < length; i++) {
    if (data[actualPage]) {
      dataSend.push(data[actualPage])
    }
    actualPage++
  }
  const pages = Math.ceil(data.length / length)

  return { data: dataSend, pages }
}
