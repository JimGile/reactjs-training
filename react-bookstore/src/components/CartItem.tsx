import Book from "./Book";
import styles from "./CartItem.module.css";

interface CartItemProps {
  item: Book;
  removeFromCart: (idToRemove: string) => void;
}

function CartItem(props: CartItemProps) {
  const { id, title, price } = props.item;

  return (
    <div className={styles.cartRow}>
      <div className={styles.cartItemCol}>
        <button onClick={() => props.removeFromCart(id)}>Remove</button>{" "}
      </div>
      <div className={styles.cartItemCol}>{title}:</div>
      <div className={styles.cartItemColAmt}>${price}</div>
    </div>
  );
}

export default CartItem;
