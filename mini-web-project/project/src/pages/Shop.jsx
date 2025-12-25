import { useEffect, useMemo, useState } from "react"
import { fetchProducts } from "../data/products"
import Search from "../components/Search/Search"
import ProductCard from "../components/ProductCard/ProductCard"

function Shop() {
  const [products, setProducts] = useState([])
  const [query, setQuery] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetchProducts()
      .then(setProducts)
      .finally(() => setLoading(false))
  }, [])

  const visibleProducts = useMemo(() => {
    return products.filter(p =>
      p.title.toLowerCase().includes(query.toLowerCase())
    )
  }, [products, query])

  return (
    <>
      <h1>Магазин</h1>

      <Search value={query} onChange={setQuery} />

      {loading && <p>Загрузка...</p>}

      {visibleProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  )
}

export default Shop
