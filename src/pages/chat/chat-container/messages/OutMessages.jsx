import { useEffect, useState } from 'react'
import styles from './Messages.module.scss'
import { useQuery } from '@tanstack/react-query'
import { chatService } from '../../../../services/ChatServise'


const OutMessages = ({text, number}) => {

   const { data } = useQuery({
    queryKey: ['message-out-notify'],
    queryFn: () => chatService.getNotifyMessage()
  })

    const getNotifyMessages = async (receiptId) => {
       const getNotifyUrl = chatService.getNotifyMessage()
       const deleteNotifyUrl = chatService.deleteNotifyMessage(receiptId)
       try {
         Promise.all([
          getNotifyUrl, // 1 get notify
          setTimeout(() => {
            deleteNotifyUrl // 2 delete notify after get
          }, 5000)
        ])
       } catch (error) {
         console.log('error notify', error)
       }
     }
        
  useEffect(() => {
    const receiptId = data?.receiptId
    getNotifyMessages(receiptId)
  })

    return (
      <div className={`${styles.msg} + ${styles.leftMsg}`}>
      <div
       className={styles.msgImg}
       style={{backgroundImage: 'url(https://image.flaticon.com/icons/svg/327/327779.svg)'}}
      ></div>
  
      <div className={styles.msgBubble}>
        <div className={styles.msgInfo}>
              <div className={styles.msgInfoName}>
              {number.split('').splice(0, 11)}
              </div>
          <div className={styles.msgInfoTime}>12:46</div>
        </div>
  
        <div className={styles.msgInfoTime}>
          <p>{text}</p>
        </div>
      </div>
    </div>
    )
}
export default OutMessages