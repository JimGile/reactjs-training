import Book from "./Book";

interface CartItemProps {
  item: Book;
  removeFromCart: (idToRemove: string) => void;
}

function CartItem(props: CartItemProps) {
  const { id, title, price } = props.item;

  return (
    <p>
      <button onClick={() => props.removeFromCart(id)}>Remove</button> {title}:
      ${price}
    </p>
  );
}

export default CartItem;
