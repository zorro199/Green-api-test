import styles from './Messages.module.scss'
import React, { useState } from "react";
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { chatService } from '../../../../services/ChatServise'

const InputMessage = () => {

  const [chatId, setChatId] = useState(localStorage.getItem('number') + '@c.us')
  const [message, setMessage] = useState('')

  const handleOnClick = (e) => {
    setChatId(localStorage.getItem('number') + '@c.us')
    e.preventDefault();
    mutate()
  }

 const queryClient = useQueryClient()

const { mutate, isPending } = useMutation({
  mutationKey: ['create message'],
  mutationFn: () => chatService.sendMessage(chatId, message),
  onSuccess() {
    setMessage(''),
    queryClient.refetchQueries({
        queryKey: ['message-sendlist']
    })
  }
})

    return (
        <div className={styles.msgerInputarea} >
        <input type="text" 
               className={styles.msgerInput} 
               placeholder="Enter your message..." 
               onChange={e => setMessage(e.target.value)} />
        <button className={styles.msgerSendBtn} onClick={handleOnClick}>Send</button>
      </div>
    )
}
export default InputMessage