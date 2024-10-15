import { updateProducts } from "../../redux/slices/productSlice";

function ProductsUpdates({ product }) {
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [available, setAvailable] = useState(product.available);
  const dispatch = useDispatch();

  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateProducts({
        id: product.id,
        name,
        description,
        price,
        available,
      })
    );
  };

  return (
    <form onSubmit={handlerSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="Имя"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        placeholder="Описание"
      />
      <input
        type="number"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
        placeholder="Цена"
      />
      <label>
        <input
          type="checkbox"
          value={available}
          onChange={(e) => {
            setAvailable(e.target.value);
          }}
        />
        Доступен
      </label>
      <button type="submit">Сохранить изменения</button>
    </form>
  );
}

export default ProductsUpdates;

