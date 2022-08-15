import styles from './TaskContent.module.scss'
import { ClipboardText } from 'phosphor-react'
import { Counter } from './Counter'

export const TaskContent = () => {
  return (
    <div className={styles.main}>
      <div className={styles.taskContent}>
        <div>
          {'Tarefas criadas'} <Counter count={0} />
        </div>
        <div>
          Concluídas <Counter count={0} />{' '}
        </div>
      </div>
      <hr />
      <div className={styles.taskMsg}>
        <ClipboardText size={42} />
        <div>Você ainda não tem tarefas cadastradas</div>
        <div>Cire tarefas e organize seus itens a fazer</div>
      </div>
    </div>
  )
}
