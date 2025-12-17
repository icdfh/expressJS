import styles from "./ProductCard.module.css";

function ProductCard({ product, onBuy }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{product.title}</h3>
      <p className={styles.price}>${product.price}</p>

      <p className={product.inStock ? styles.inStock : styles.outOfStock}>
        {product.inStock ? "В наличии" : "Нет в наличии"}
      </p>

      <p className={product.sale ? styles.sale : styles.noSale}>
        {product.sale ? "Скидка" : "Без скидки"}
      </p>

      <button
        className={styles.button}
        disabled={!product.inStock}
        onClick={() => onBuy(product.id)}
      >
        Купить
      </button>
    </div>
  );
}

export default ProductCard;
