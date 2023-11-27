import { TaskList } from '../TaskList'
import styles from './TaskItem.module.css';

export function TaskItem({ tasks, onDelete, onComplete }) {
  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter(task => task.isCompleted).length;

  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Tasks Quantity:</p>
          <span>{tasksQuantity}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Tasks:</p>
          <span>{completedTasks} of {tasksQuantity}</span>
        </div>
      </header>

      <div className={styles.list}>
        {tasks.map((task) => (
          <TaskList key={task.id} task={task} onDelete={onDelete} onComplete={onComplete} />
        ))}
      </div>
    </section>
  )
}