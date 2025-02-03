import { useMutation, useQueries, useQuery } from '@tanstack/react-query';
import styles from './MessageList.module.scss'
import OutMessages from './messages/OutMessages';
import SendMessages from './messages/SendMessages';
import { chatService } from '../../../services/ChatServise'
import './Message.css'

const MessageList = () => {
    const [getOutList, getSendList] = useQueries({
        queries: [
          {
            queryKey: ['message-outlist'],
            queryFn: () => chatService.getOutMessage()
          }, {
            queryKey: ['message-sendlist'],
            queryFn: () => chatService.getSendMyMessage()
          },
        ]
      })

      const chatNumber = localStorage.getItem('number') + '@c.us'

      const incoming = getOutList.data?.filter(type => type.type === 'incoming')
      const outgoing = getSendList.data?.filter(type => type.type === 'outgoing')  
      let isSentByCurrentUser = false;
      //  не доделан условный рендеринг сообщений

    return (
  <main className={styles.msgerChat}>
      { getOutList.data?.filter(num => num.chatId === chatNumber).map(msg => (
          <OutMessages key={msg.idMessage} text={msg.textMessage} number={msg.chatId} />
      )) }
      { getSendList.data?.filter(num => num.chatId === chatNumber).map(msg => (
          <SendMessages key={msg.idMessage} text={msg.textMessage} number={'+79997770000'} />
      )) }
</main>
    )
}
export default MessageList