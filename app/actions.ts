import { IProduct } from './models/product.model'
import { IQuery } from './models/query.model'

export const getData = async (query: IQuery) => {
  const response = await fetch('https://ozon-db-3d4b2-default-rtdb.firebaseio.com/goods.json')
  const data = await response.json()
  return data.filter((product: IProduct) => {
    if (query.category) {
      if (query.category !== product.category) {
        return false
      }
    }
    if (query.search) {
      if(!product.title.includes(query.search)){
        return false
      }
    }
    return true
  })
}
