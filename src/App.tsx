import './global.sass'
import styles from './App.module.sass'
import { Header } from './components/Header'
import { Main } from './components/Main'

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Main />
    </div>
  )
}

export default App
