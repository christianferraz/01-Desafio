import styles from './Main.module.sass'
import { PlusCircle } from 'phosphor-react'

export const Main = () => {
  return (
    <main className={styles.main}>
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
    </main>
  )
}
