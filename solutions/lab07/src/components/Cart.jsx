import CartItem from './CartItem.jsx';

function Cart(props) {
  return (
    <div>
      <h2>Cart</h2>
      <CartItem />
      <CartItem />
      <CartItem />
      Total: $x USD
    </div>
  );
}

export default Cart;
