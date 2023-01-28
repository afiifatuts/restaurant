import React from "react";
import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = ({pizzaList}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        The Best Pizza in Town 
      </h1>
      <p className={styles.desc}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis harum
        expedita eaque praesentium, impedit inventore, unde ut illum ad nobis
        minima consequatur laboriosam, sunt et nemo eum neque voluptates! Rerum.
      </p>

      <div className={styles.wrapper}>
      {pizzaList.map((pizza)=>(
          <PizzaCard key={pizza._id} pizza={pizza}/>
      ))}
        
      </div>
    </div>
  );
}

export default PizzaList;
