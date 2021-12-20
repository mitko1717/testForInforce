import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addProduct,
  toggleModalWindowToAddNewItem,
} from "../todo/productsSlice";
import styles from "../todo/Products.module.css";

export function ModalToAdd() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(1);
  const [weight, setWeight] = useState("");
  const { products, modalWindowToAdd } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  return (
    <div>
      {modalWindowToAdd && (
        <div className={styles.modalToAdd}>
          <h5>NEW ITEM</h5>
          <div>
            <input
              type="text"
              placeholder="name"
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
            <input
              type="number"
              placeholder="count"
              onChange={(e) => {
                setCount(e.target.value);
              }}
            />
            <input
              type="number"
              placeholder="weight"
              onChange={(e) => {
                setWeight(e.target.value);
              }}
            />
          </div>

          <button
            type="submit"
            onClick={() => {
              if (text !== "") {
                dispatch(
                  addProduct({
                    id: Date.now(),
                    name: text,
                    count: count,
                    weight: weight,
                  })
                );
              }
              console.log(products);
              setText("");
              setCount(1);
              dispatch(toggleModalWindowToAddNewItem());
            }}
          >
            ADD
          </button>
          <button
            onClick={() => {
              setText("");
              setCount(1);
              dispatch(toggleModalWindowToAddNewItem());
            }}
          >
            CANCEL
          </button>
        </div>
      )}
    </div>
  );
}
