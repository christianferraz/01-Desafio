import styles from './Counter.module.scss'

interface CounterProps {
  count: number
}

export const Counter = ({ count }: CounterProps) => {
  return <span className={styles.counter}>{count}</span>
}
