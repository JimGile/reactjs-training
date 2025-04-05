import CartItem from "./CartItem.tsx";
import Book from "./Book";
import styles from "./CartItem.module.css";

interface CartProps {
  itemsInCart: Book[];
  removeFromCart: (idToRemove: string) => void;
  submitCart: (itemsInCart: Book[]) => void;
}

function Cart(props: CartProps) {
  let totalAmt = props.itemsInCart.reduce(
    (prev, cartItem) => prev + parseFloat(cartItem.price),
    0
  );

  return (
    <div>
      <h2>Cart</h2>
      {props.itemsInCart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          removeFromCart={props.removeFromCart}
        />
      ))}
      <div className={styles.cartRow}>
        <div className={styles.cartItemCol}></div>
        <div className={styles.cartItemCol}>Total:</div>
        <div className={styles.cartItemColAmt}>${totalAmt}</div>
      </div>
      <div>
        <button onClick={() => props.submitCart(props.itemsInCart)}>
          Check Out
        </button>
      </div>
    </div>
  );
}

export default Cart;
