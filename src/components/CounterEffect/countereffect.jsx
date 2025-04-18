import { useEffect, useState } from "react";
import styles from './countereffect.module.css';

const CounterEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(() =>{    //Se ejecuta despues de renderizar el componente
        console.log(`El contador se actualizó a un valor de: ${count}`);
    }, [count]) 

    return(
        <div className={styles.counterContainer}>
          <p>El contador está en: {count}</p>
          <div className={styles.counterButtons}>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
          </div>
        </div>
      );
}

export default CounterEffect