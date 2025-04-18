import { useState } from "react";
import styles from './togglebutton.module.css'

const ToggleButton= () => {
    const [isActive, setIsActive] = useState(false);

    return(
        <button
            onClick={() => setIsActive(!isActive)}
            className={`${styles.button} ${isActive ? styles.active : styles.inactive}`}
        >
            {isActive ? "Activo ✅" : "Inactivo ⛔"}
        </button>
    )
}

export default ToggleButton;