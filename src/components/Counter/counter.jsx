import { useState } from "react";
import styles from './counter.module.css';

const Counter = () =>{
    const [count, setCount] = useState(0);

    return(
      <div className={styles.counterContainer}>
        <p>El contador está en: {count}</p>
        <div className={styles.counterButtons}>
          <button onClick={() => setCount(count + 1)}>Incrementar</button>
          <button onClick={() => setCount(count - 1)}>Decrementar</button>
        </div>
      </div>
    );
}

export default Counter; 