import { useParams } from "react-router-dom"
import { fetchProducts } from "../data/products"
import { useEffect, useState } from "react"

function likeReducer(state, action){
  switch(action.type){
    case -> дальше прописать польностью логику лайков
  }
}

function ProductPages() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProducts().then(products => {
      const found = products.find(p => p.id === Number(id))
      setProduct(found)
      setLoading(false)
    })
  }, [id])

  if (loading) return <p>Загрузка...</p>
  if (!product) return <p>Товар не найден</p>

  return (
    <>
      <h1>{product.title}</h1>
      <p>Цена: {product.price}</p>
      <p>ID товара: {id}</p>
    </>
  )
}

export default ProductPages
