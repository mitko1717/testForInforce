import { useSelector, useDispatch } from "react-redux";
import {
  fetchProducts,
  toggleModalWindowToAddNewItem,
  deleteAll,
} from "./productsSlice";
import styles from "./Products.module.css";
import { ToDoItem } from "./ProductsItem";
import { ModalToAdd } from "../modals/modalToAdd";
import { ModalToShow } from "../modals/modalToShow";

export function ToDo() {
  const {
    products,
    modalWindowToAdd,
    fetchProductsAbility,
    modalWindowToShowInfo,
  } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      {fetchProductsAbility && (
        <div
          className={styles.fetch}
          onClick={() => {
            dispatch(fetchProducts());
          }}
        >
          FETCH ALL PRODUCTS
        </div>
      )}
      <div className={styles.list}>
        {products.length > 0 && (
          <div>
            <h1>PRODUCTS LIST</h1>

            {products
              // .sort((a, b) => a.count > b.count)
              .map((a, index) => {
                return (
                  <ToDoItem
                    a={a}
                    index={index}
                    name={a.name}
                    id={a.id}
                    key={a.id}
                    count={a.count}
                  />
                );
              })}
          </div>
        )}
      </div>
      <div className={styles.btnContainer}>
        <button
          className={styles.newProduct}
          onClick={() => {
            dispatch(toggleModalWindowToAddNewItem());
          }}
        >
          ADD NEW PRODUCT
        </button>
        <button
          className={
            products.length > 0 ? styles.deleteAll : styles.deleteAllNotActive
          }
          onClick={() => {
            dispatch(deleteAll());
          }}
        >
          DELETE ALL PRODUCTS
        </button>
      </div>

      {modalWindowToAdd && <ModalToAdd />}
      {modalWindowToShowInfo && <ModalToShow />}
    </div>
  );
}
