import React from 'react'
import Image from 'next/image'
import styles from "../styles/PizzaCard.module.css"
import Link from 'next/link'

const PizzaCard = ({pizza}) => {
  return (
    <div className={styles.container}>
      <Link href={`/product/${pizza._id}`} passHref>
        <Image src={pizza.img} alt="pizza" width="400" height="400"/>
        </Link>
        <h1 className={styles.title}>{pizza.name}</h1>
        <span className={styles.price}>${pizza.prices[0]}</span>
        <p className={styles.desc}>
            {pizza.desc}
        </p>
    </div>
  )
}

export default PizzaCard