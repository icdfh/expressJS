import { useState, useMemo } from "react";
import { products as initialProducts } from "./data/products";

import Tabs from "./components/Tabs/Tabs";
import Modal from "./components/Modal/Modal";
import LikeButton from "./components/LikeButton/LikeButton";
import Search from "./components/Search/Search";
import ProductCard from "./components/ProductCard/ProductCard";

import styles from "./App.module.css";

function App() {
  const [tab, setTab] = useState("feed");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(12);

  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  function toggleLikeSafe() {
    setIsLiked((prevLiked) => {
      setLikesCount((prevCount) =>
        prevLiked ? prevCount - 1 : prevCount + 1
      );
      return !prevLiked;
    });
  }

  const visibleProducts = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    return initialProducts.filter((p) => {
      const matchesSearch = p.title
        .toLowerCase()
        .includes(normalized);

      const matchesFilter =
        filter === "all" ||
        (filter === "inStock" && p.inStock) ||
        (filter === "sale" && p.sale);

      return matchesSearch && matchesFilter;
    });
  }, [query, filter]);

  function buyProduct(productId) {
    console.log("Покупка товара:", productId);
    openModal();
  }

  return (
    <div className={styles.app}>
      <Tabs value={tab} onChange={setTab} />

      {tab === "feed" && (
        <section className={styles.section}>
          <h1 className={styles.title}>Лента</h1>

          <LikeButton
            isLiked={isLiked}
            likesCount={likesCount}
            onToggle={toggleLikeSafe}
          />
        </section>
      )}

      {tab === "shop" && (
        <section className={styles.section}>
          <h1 className={styles.title}>Магазин</h1>

          <Search value={query} onChange={setQuery} />

          <div className={styles.filters}>
            <button onClick={() => setFilter("all")}>Все</button>
            <button onClick={() => setFilter("inStock")}>В наличии</button>
            <button onClick={() => setFilter("sale")}>Со скидкой</button>
          </div>

          <div className={styles.products}>
            {visibleProducts.length === 0 && (
              <p className={styles.empty}>Товары не найдены</p>
            )}

            {visibleProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onBuy={buyProduct}
              />
            ))}
          </div>
        </section>
      )}

      {tab === "profile" && (
        <section className={styles.section}>
          <h1 className={styles.title}>Профиль</h1>
          <p>Здесь будет информация о пользователе</p>
        </section>
      )}

      {isModalOpen && (
        <Modal title="Покупка товара" onClose={closeModal}>
          <p>Спасибо за покупку!</p>
          <button onClick={closeModal}>Закрыть</button>
        </Modal>
      )}
    </div>
  );
}

export default App;
