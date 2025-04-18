import { useState } from "react";
import styles from './nameform.module.css';

const NameForm = () => {
    const [name, setName] = useState("");
    
    return (
        <div className={styles.formContainer}>
            <input 
            className={styles.inputField}
            type="text"
            placeholder="Ingresa tu nombre"
            value={name} 
            onChange={(event) => setName(event.target.value)}
            />
            <p className={styles.greetingText}>Hola, {name || "visitante"}</p>
        </div>
    )
}

export default NameForm;