import styles from './ChatContainer.module.scss'
import Header from './Header'
import MessageList from './MessageList'
import InputMessage from './messages/InputMessage'

const ChatContainer = () => {
    return (
        <section className={styles.msger}>
            <Header />
            <MessageList />
            <InputMessage />
        </section>
    )
}
export default ChatContainer