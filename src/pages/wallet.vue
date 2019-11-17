<template>
    <div class="wallet-page">
        <Row gutter="8">
            <i-col span="12">
                <i-input v-model="to" placeholder="请输入目标地址"></i-input>
            </i-col>
            <i-col span="12">
                <i-input v-model="amount" placeholder="请输入数量">
                    <span slot="append">LEMO</span>
                </i-input>
            </i-col>
        </Row>
        <Row>
            <i-col span="24">
                <i-button type="primary" @click="send">发送测试币</i-button>
            </i-col>
        </Row>
    </div>
</template>

<script>
    import * as lemoAPI from '../libs/lemo_api'

    export default {
        name: 'wallet-page',
        data() {
            return {
                to: this.$route.query.to || '',
                amount: '0',
            }
        },
        computed: {},
        methods: {
            async send() {
                try {
                    await lemoAPI.send(this.to, this.amount)
                    this.$Message.success('发送成功')
                } catch (e) {
                    console.error(e)
                    this.$Message.error('发送失败')
                }
            }
        },
    }
</script>

<style lang="scss">
    .wallet-page {
        padding: 12px 40px;

        .ivu-row {
            margin-bottom: 20px;
        }
    }
</style>
