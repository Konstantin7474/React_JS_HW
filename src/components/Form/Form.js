import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProducts } from "../../redux/slices/productSlice";

function Form() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [available, setAvailable] = useState(false);

  const dispatch = useDispatch();

  const handlerSubmit = (e) => {
    e.preventDefault();

    dispatch(addProducts({ name, description, price, available }));
    setName("");
    setDescription("");
    setPrice(0);
    setAvailable(false);
  };

  return (
    <form onSubmit={handlerSubmit}>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
        placeholder="Имя"
        required
      />
      <input
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        placeholder="Описание"
        required
      />
      <input
        type="number"
        onChange={(e) => setPrice(Number(e.target.value))}
        value={price}
        placeholder="Цена"
        required
      />
      <label>
        <input
          type="checkbox"
          checked={available}
          onChange={(e) => setAvailable(e.target.checked)}
        />
        Доступен
      </label>

      <button type="submit">Добавить</button>
    </form>
  );
}

export default Form;
