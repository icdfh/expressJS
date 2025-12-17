
function ProductCard({product, onBuy}) {

  return (
    <>
        <div>
            <h3>{product.title}</h3>
            <p>{product.price}</p>

            <p>{product.inStock ? "В наличии": "Нет в наличии"}</p>
            <p>{product.sale ? "Скидка": "Без скидки"}</p>

            <button 
            disabled = {!product.inStock} 
            onClick={() => onBuy(product.id)}>Купить</button>
        </div>
    </>
  )
}

export default ProductCard
