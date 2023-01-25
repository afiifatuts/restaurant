import React from "react";
import Image from "next/image";
import styles from "../../styles/Order.module.css";

function Order() {
  const status = 0;

  const statusClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.unDone;
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <tr className={styles.tr}>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Address</th>
              <th>Total</th>
            </tr>
            <tr>
              <td>
                <span className={styles.id}>241242343</span>
              </td>
              <td>
                <span className={styles.name}>John Doe</span>
              </td>
              <td>
                <span className={styles.adress}>Jln. Kartini no 21</span>
              </td>
              <td>
                <span className={styles.total}>$39.80</span>
              </td>
            </tr>
          </table>
        </div>

        <div className={styles.row}>
          {/* ----------  Status Payment ----------- */}
          <div className={statusClass(0)}>
            <Image src="/img/paid.png" width="30" height="30" alt="status" />
            <span>Payment</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/img/checked.png"
                width="20"
                height="20"
                alt="status"
              />
            </div>
          </div>

          {/* ----------  Status Preparing ----------- */}
          <div className={statusClass(1)}>
            <Image src="/img/bake.png" width="30" height="30" alt="status" />
            <span>Preparing</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/img/checked.png"
                width="20"
                height="20"
                alt="status"
              />
            </div>
          </div>
          {/* ----------  Status Delivery ----------- */}
          <div className={statusClass(2)}>
            <Image src="/img/bike.png" width="30" height="30" alt="status" />
            <span>Payment</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/img/checked.png"
                width="20"
                height="20"
                alt="status"
              />
            </div>
          </div>
          {/* ----------  Status Delivered ----------- */}
          <div className={statusClass(3)}>
            <Image
              src="/img/delivered.png"
              width="30"
              height="30"
              alt="status"
            />
            <span>Payment</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/img/checked.png"
                width="20"
                height="20"
                alt="status"
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal: </b>$79.60
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount: </b>$0.0
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total: </b>$79.60
          </div>
          <button className={styles.button}>PAID</button>
        </div>
      </div>
    </div>
  );
}

export default Order;
