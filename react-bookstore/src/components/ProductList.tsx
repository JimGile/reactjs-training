import Product from "./Product.tsx";
import styles from "./ProductList.module.css";
import Book from "./Book";

interface Props {
  itemsInCart: Book[] | [];
  addToCart: (product: Book) => void;
  removeFromCart: (idToRemove: string) => void;
  products: Book[] | [];
}

function ProductList(props: Props) {
  let itemIds = props.itemsInCart.map((item: Book) => item.id);

  return (
    <ul className={styles.productList}>
      {props.products.map((product) => (
        <li key={product.id} className={styles.productListItem}>
          <Product
            {...product}
            inCart={itemIds.includes(product.id) ? true : false}
            addToCart={props.addToCart}
            removeFromCart={props.removeFromCart}
          />
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
