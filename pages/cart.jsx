import styles from "../styles/Cart.module.css";
import Image from "next/image";

const Cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <thead >
            <tr className={styles.trTitle}>
              <th>
                <div>Product</div>
              </th>
              <th>
                <div>Name</div>
              </th>
              <th>
                <div>Extras</div>
              </th>
              <th>
                <div>Price</div>
              </th>
              <th>
                <div>Quantity</div>
              </th>
              <th>
                <div>Total</div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.tr}>
              <td>
                <div className={styles.imgContainer}>
                <img
                    src="/img/pizza.png"
                    width="100"
                    height="100"
                    alt=""
                  />
                </div>
              </td>
              <td>
                <span className={styles.name}>CORALZO</span>
              </td>
              <td>
                <span className={styles.extras}>
                  Double ingredient, spicy sauce
                </span>
              </td>
              <td>
                <span className={styles.price}>$19.90</span>
              </td>
              <td>
                <span className={styles.quantity}>2 box</span>
              </td>
              <td>
                <span className={styles.total}>$39.80</span>
              </td>
            </tr>

            <tr className={styles.tr}>
              <td>
                <div className={styles.imgContainer}>
                  <img
                    src="/img/pizza.png"
                    width="100"
                    height="100"
                    alt=""
                  />
                </div>
              </td>
              <td>
                <span className={styles.name}>CORALZO</span>
              </td>
              <td>
                <span className={styles.extras}>
                  Double ingredient, spicy sauce
                </span>
              </td>
              <td>
                <span className={styles.price}>$19.90</span>
              </td>
              <td>
                <span className={styles.quantity}>2 box</span>
              </td>
              <td>
                <span className={styles.total}>$39.80</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>$79.60
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>$79.60
          </div>
          <button className={styles.button}>CHECKOUT NOW!</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
