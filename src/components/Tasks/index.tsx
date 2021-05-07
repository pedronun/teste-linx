import Task from "../Task";
import styles from "./tasks.module.scss";

const Tasks = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Task isShortDeadline />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task isLate />
        <Task />
      </div>
      <div className={styles.buttonSeeMore}>
        <button className={styles.seeMore}>ver mais +</button>
      </div>
    </div>
  );
};

export default Tasks;
