import styles from './Header.module.scss'
import img from '../assets/images/Logo.svg'

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={img} width={32} alt="Logo" />
      <span className={styles.to}>to</span>
      <span className={styles.do}>do</span>
    </header>
  )
}
