import styles from './cards.module.css';

const Card = ({title, description}) =>{
    return (
    <section className={styles.card}>
      <h2 className={styles.cardTitle}>{title}</h2>
      <p className={styles.cardDescription}>{description}</p>
    </section>
    )
}

export default Card;