import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct, toggleModalWindowToShowInfo } from "./productsSlice";
import styles from "./Products.module.css";

export function ToDoItem({ a, id, name, count }) {
  const arr = useSelector((state) => state.products.arr);
  console.log(arr);
  const dispatch = useDispatch();

  return (
    <div
      key={id}
      className={styles.item}
      onClick={() => {
        dispatch(toggleModalWindowToShowInfo(a));
      }}
    >
      <div>
        <div>
          <p className={styles.itemName}>{name}</p>
          <p>{count} counts</p>
        </div>

        <button
          className={styles.deleteItem}
          onClick={(e) => {
            e.stopPropagation();
            const confirm = window.confirm("DO YOU REALLY WANT TO DELETE?");
            if (confirm === true) {
              dispatch(deleteProduct({ id: id }));
            }
          }}
        >
          DEL
        </button>
      </div>
    </div>
  );
}
