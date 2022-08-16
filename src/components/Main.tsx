import styles from './Main.module.scss'
import { PlusCircle } from 'phosphor-react'
import { TaskContent } from './TaskContent'
import { FormEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export interface ListProps {
  id: string
  value: string
  createAt: Date
  isCompleted: boolean
  concludeAt?: Date
}

export const Main = () => {
  const [list, setList] = useState<ListProps[]>([])

  function handleaddValueList(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const value = event?.currentTarget?.listInput.value
    event.currentTarget.listInput.value = ''
    const id = uuidv4()
    setList((list) => [
      ...list,
      { id, value, createAt: new Date(), isCompleted: false },
    ])
  }
  return (
    <main>
      <div className={styles.main}>
        <form className={styles.formContainer} onSubmit={handleaddValueList}>
          <input
            id="listInput"
            type="text"
            className={styles.input}
            placeholder="Adicione uma nova tarefa"
          />
          <button className={styles.button} type="submit">
            Criar
            <PlusCircle size={24} />
          </button>
        </form>
      </div>
      <TaskContent list={list} setList={setList} />
    </main>
  )
}
