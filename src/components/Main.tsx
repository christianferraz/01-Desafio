import styles from './Main.module.scss'
import { PlusCircle } from 'phosphor-react'
import { TaskContent } from './TaskContent'

export const Main = () => {
  return (
    <main>
      <div className={styles.main}>
        <form className={styles.formContainer}>
          <input
            type="text"
            className={styles.input}
            placeholder="Adicione uma nova tarefa"
          />
          <button className={styles.button} type="button">
            Criar
            <PlusCircle size={24} />
          </button>
        </form>
      </div>
      <TaskContent />
    </main>
  )
}
