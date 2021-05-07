import styles from "./task.module.scss";

import TaskImg from "../../assets/taskImg.png";

interface TaskProps {
  isLate?: boolean;
  isShortDeadline?: boolean;
}

const Task: React.FC<TaskProps> = ({ isLate, isShortDeadline }) => {
  return (
    <div className={styles.task}>
      {isLate && (
        <div className={styles.lateTask}>
          <span>Atrasado :(</span>
        </div>
      )}
      {isShortDeadline && (
        <div className={styles.shortDeadlineTask}>
          <span>Prazo curto!</span>
        </div>
      )}
      <img src={TaskImg} alt="TaskImg" />

      <div>
        <span>Nome da tarefa</span>
        <p>
          Descrição da tarefa, o que deve ser feito e muitas informações que
          explicam melhor do que se trata.
        </p>
        <span>
          Prazo: <strong>00/00</strong>
        </span>
        <p className={styles.inclusion}>Data de inclusão: há 2 semanas</p>
      </div>
    </div>
  );
};

export default Task;
