import LemoClient from 'lemo-client'
import LemoUtils from 'lemo-utils'

const senderAddr = process.env.VUE_APP_SENDER_ADDRESS
const senderPrivate = process.env.VUE_APP_SENDER_PRIVATE

const getInstance = (() => {
    let lemo
    return () => {
        if (!lemo) {
            lemo = new LemoClient({
                chainID: 100,
                host: process.env.VUE_APP_LEMO_CLIENT_HOST,
            })
        }
        return lemo
    }
})()

export function send(to, amount) {
    const lemo = getInstance()
    lemo.tx.send({
        from: senderAddr,
        to,
        amount: LemoUtils.lemoToMo(amount).toString(10),
    }, senderPrivate)
}