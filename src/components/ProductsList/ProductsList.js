import { useSelector } from "react-redux";
import ProductsItem from "../ProductsItem/ProductsItem";

function ProductsList() {
  const products = useSelector((state) => state.products);

  if (!products || !products.items) {
    return <p>Нет доступных продуктов</p>;
  }
  return (
    <ul>
      {products.items.map((item) => (
        <li key={item.id}>
          <ProductsItem {...item} />
        </li>
      ))}
    </ul>
  );
}

export default ProductsList;
