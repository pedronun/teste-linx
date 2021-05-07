import styles from "./filter.module.scss";

const Filter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.leftSide}>
          <input type="text" placeholder="Busque tarefas"/>
          <button>Buscar</button>
        </div>
        <div className={styles.rightSide}>
            <p>Organizar por: </p>
            <select>
                <option>Prazo</option>
            </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
