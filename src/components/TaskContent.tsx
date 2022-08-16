import styles from './TaskContent.module.scss'
import { ClipboardText, Trash } from 'phosphor-react'
import { Counter } from './Counter'
import { ListProps } from './Main'
import { FormEvent, useCallback } from 'react'

interface TaskContentProps {
  list: ListProps[]
  setList: (e: any) => void
}

export const TaskContent = ({ list, setList }: TaskContentProps) => {
  function handleChangedCheckBox(event: FormEvent<HTMLInputElement>) {
    console.log(event?.currentTarget.name)
    const id = event.currentTarget.id
    setList(
      list.map((lists) =>
        lists.id === id
          ? {
              ...lists,
              isCompleted: !lists.isCompleted,
              concludeAt: !lists.concludeAt ? new Date() : null,
            }
          : { ...lists },
      ),
    )
  }

  function handleDeleteList(event: FormEvent<SVGSVGElement>) {
    const id = event?.currentTarget.id
    setList(list.filter((lis) => lis.id !== id))
  }

  const memoizeFunction = useCallback(
    () =>
      list.reduce((counter, obj) => {
        obj.isCompleted && counter++
        return counter
      }, 0),
    [list],
  )

  return (
    <div className={styles.main}>
      <div className={styles.taskContent}>
        <div>
          {'Tarefas criadas'} <Counter total={list.length} />
        </div>
        <div>
          Concluídas <Counter count={memoizeFunction()} total={list.length} />
        </div>
      </div>
      <hr />
      <div className={styles.taskMsg}>
        {list.length <= 0 ? (
          <>
            <ClipboardText size={42} />
            <div>Você ainda não tem tarefas cadastradas</div>
            <div>Cire tarefas e organize seus itens a fazer</div>
          </>
        ) : (
          <table>
            <tbody>
              {list.map((lis) => (
                <tr key={lis.id}>
                  <td>
                    <div className={styles.checkBox}>
                      <input
                        type="checkbox"
                        name={lis.id}
                        id={lis.id}
                        onChange={handleChangedCheckBox}
                      />
                      <label htmlFor={lis.id}></label>
                      <div style={{ width: '80%' }}>{lis.value}</div>
                      <Trash
                        size={24}
                        style={{ cursor: 'pointer' }}
                        onClick={handleDeleteList}
                        id={lis.id}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}
