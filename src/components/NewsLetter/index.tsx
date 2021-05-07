import styles from "./newsletter.module.scss";

const NewsLetter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
          <span>Quer receber dicas para organizar melhor a sua rotina? Cadastre-se!</span>
          <div className={styles.form}>
            <input type="text" placeholder="Digite seu nome"/>
            <input type="text" placeholder="Digite seu e-mail"/>
            <button>Cadastrar</button>
          </div>
      </div>
    </div>
  );
};

export default NewsLetter;
