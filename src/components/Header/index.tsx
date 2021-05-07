import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.container}>
      <main className={styles.content}>
          <h1>Tarefas a fazer</h1>
          <p>Adicione e complete tarefas para organizar melhor a sua semana. :)</p>
      </main>
    </header>
  );
};

export default Header;
