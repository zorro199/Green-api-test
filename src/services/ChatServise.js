import axios from "axios"

class ChatService {
    //
    #apiUrl = 'https://1103.api.green-api.com'
    #idInstance  = localStorage.getItem('idInstance')
    #apiTokenInstance = localStorage.getItem('apiTokenInstance')

    sendMessages = `${this.#apiUrl}/waInstance${this.#idInstance}/sendMessage/${this.#apiTokenInstance}`
    getNotify = `${this.#apiUrl}/waInstance${this.#idInstance}/receiveNotification/${this.#apiTokenInstance}?receiveTimeout=5`
    deleteNotify = `${this.#apiUrl}/waInstance${this.#idInstance}/deleteNotification/${this.#apiTokenInstance}/`
    getOutMessages = `${this.#apiUrl}/waInstance${this.#idInstance}/lastIncomingMessages/${this.#apiTokenInstance}?minutes=100`
    getSendMyMessages = `${this.#apiUrl}/waInstance${this.#idInstance}/lastOutgoingMessages/${this.#apiTokenInstance}?minutes=100`

    async getNotifyMessage() {
        const { data } = await axios.get(this.getNotify)
        return data
    }

    async deleteNotifyMessage(receiptId) {
        const { data } = await axios.delete(this.deleteNotify + receiptId)
        return data
    }

    async sendMessage(chatId, message) {
        const { data } = await axios.post(this.sendMessages, {
            chatId,
            message
        })
        return data
    }

    async getSendMyMessage() {
        const { data } = await axios.get(this.getSendMyMessages)
        return data
    }

   async getOutMessage() {
        const { data } = await axios.post(this.getOutMessages)
        return data
    }
}

export const chatService = new ChatService()