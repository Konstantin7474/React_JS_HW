import { useDispatch } from "react-redux";
import {
  deleteProducts,
  updateProducts,
} from "../../redux/slices/productSlice";
import { useState } from "react";

function ProductsItem({ id, name, description, price, available }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editedDescription, setEditedDescription] = useState(description);
  const [editedPrice, setEditedPrice] = useState(price);
  const [editedAvailable, setEditedAvailable] = useState(available);

  const deleteItem = () => {
    if (window.confirm("Удалить?")) {
      dispatch(deleteProducts(id));
    }
  };

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  const handleUpdate = () => {
    dispatch(
      updateProducts({
        id,
        name: editedName,
        description: editedDescription,
        price: editedPrice,
        available: editedAvailable,
      })
    );
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <input
            type="number"
            value={editedPrice}
            onChange={(e) => setEditedPrice(e.target.value)}
          />
          <label>
            <input
              type="checkbox"
              value={editedAvailable}
              onChange={(e) => setEditedAvailable(e.target.checked)}
            />
            Доступен
          </label>
          <button onClick={handleUpdate}>Сохранить изменения</button>
          <button onClick={toggleEditMode}>Отмена</button>
        </>
      ) : (
        <>
          <h3>Название: {name}</h3>
          <p> Описание: {description}</p>
          <p> Цена : {price}</p>
          <p> Доступность : {available ? "Доступен" : "Недоступен"}</p>
          <button onClick={deleteItem}>Удалить</button>
          <button onClick={toggleEditMode}>Изменить</button>
        </>
      )}
    </div>
  );
}

export default ProductsItem;
