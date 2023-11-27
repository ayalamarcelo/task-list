import styles from './TaskList.module.css';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { TbTrash } from 'react-icons/tb';
import Swal from 'sweetalert2'

export function TaskList({ task, onDelete, onComplete }) {
  
  const alert = () => {
    Swal.fire({
      title: "Tarea Completada",
      icon: "success",
      background: '#0A2229',
      color: 'white',
      showConfirmButton: false,
      toast: true,
      timer: 1500
    });
    onComplete(task.id)
  }

  const deleteTask = () => {
    Swal.fire({
      title: "Tarea Eliminada",
      icon: "success",
      background: "#0A2229",
      color: 'white',
      showConfirmButton: false,
      toast: true,
      timer: 1500
    });
    onDelete(task.id)
  }

  return (
    <div className={styles.task}>
      <button className={styles.checkContainer} onClick={alert}>
        {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
      </button>

      <p className={task.isCompleted ? styles.textCompleted : ""}>
        {task.title}
      </p>

      <button className={styles.deleteButton} onClick={deleteTask}>
        <TbTrash size={25} />
      </button>
    </div>
  )
}