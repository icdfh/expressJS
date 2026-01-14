import { useEffect, useMemo, useReducer } from "react";
import { fetchProducts } from "../data/products";
import Search from "../components/Search/Search";
import ProductCard from "../components/ProductCard/ProductCard";

import { SHOP_INIT, shopReducer } from "./shopReducer";

function Shop() {
  const [state, dispatch] = useReducer(shopReducer, SHOP_INIT);

  const { products, query, loading, error } = state;

  useEffect(() => {
    dispatch({ type: "LOAD_START" });

    fetchProducts()
      .then((data) => {
        dispatch({ type: "LOAD_SUCCESS", payload: data });
      })
      .catch((e) => {
        dispatch({
          type: "LOAD_ERROR",
          payload: e.message,
        });
      });
  }, []);

  const visibleProducts = useMemo(() => {
    return products.filter((p) =>
      p.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [products, query]);

  return (
    <>
      <h1>Магазин</h1>

      <Search
        value={query}
        onChange={(value) =>
          dispatch({ type: "SET_QUERY", payload: value })
        }
      />

      {loading && <p>Загрузка...</p>}
      {error && <p style={{ color: "crimson" }}>{error}</p>}

      {visibleProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
}

export default Shop;
