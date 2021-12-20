import { useSelector, useDispatch } from "react-redux";
import { toggleModalWindowToShowInfo } from "../todo/productsSlice";
import styles from "../todo/Products.module.css";

export function ModalToShow() {
  const { productToShowInfo } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  return (
    <div>
      <div className={styles.modalToShowInfo}>
        <h5>PRODUCT INFO</h5>
        <div>NAME: {productToShowInfo.name}</div>
        <div>
          SIZE:
          <br />
          <span>width: {productToShowInfo?.size.width} </span>
          <span>height: {productToShowInfo?.size.height}</span>
        </div>
        <div>WEIGHT: {productToShowInfo?.weight}</div>
        <div>ID: {productToShowInfo.id}</div>
        <button
          onClick={() => {
            dispatch(toggleModalWindowToShowInfo());
          }}
        >
          CLOSE
        </button>
      </div>
    </div>
  );
}
