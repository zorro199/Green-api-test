import styles from './Header.module.scss' 

const Header = () => {
    return (
        <header className={styles.msgerHeader}>
        <div>
          <i>Green-Api Test</i>
        </div>
        <div>
          <span>config</span>
        </div>
      </header>
    )
}
export default Header