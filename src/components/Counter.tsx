import styles from './Counter.module.scss'

interface CounterProps {
  count?: number
  total: number
}

export const Counter = ({ count, total }: CounterProps) => {
  console.log(count === undefined)
  return (
    <>
      {' '}
      {count !== undefined ? (
        <span className={styles.counter}>
          {' '}
          {count}
          {' de '}
          {total}
        </span>
      ) : (
        <span className={styles.counter}>{total}</span>
      )}
    </>
  )
}
