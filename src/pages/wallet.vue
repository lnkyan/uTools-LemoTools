<template>
    <div class="wallet-page">
        <i-input v-model="to"></i-input>
        <i-input v-model="amount"></i-input>
        <i-button @click="send">发送测试币</i-button>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'

    export default {
        name: 'wallet-page',
        data() {
            return {
                amount: '0',
            }
        },
        computed: {
            ...mapState({
                vxTxTo: state => state.txTo,
            }),
            to: {
                get() {
                    return this.vxTxTo
                },
                set(newValue) {
                    this.$store.commit('setTxTo', {txTo: newValue})
                }
            }
        },
        methods: {
            ...mapActions({
                vxSend: 'send'
            }),
            async send() {
                try {
                    this.vxSend({to: this.to, amount: this.amount})
                    this.$Message.success('发送成功')
                } catch (e) {
                    console.error(e)
                    this.$Message.error('发送失败')
                }
            }
        }
    }
</script>
