import Vue from 'vue'
import Vuex from 'vuex'
import * as lemoAPI from './libs/lemo_api'
import * as utoolsEvents from './libs/utools_events'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        txTo: '',
    },
    mutations: {
        setTxTo(state, {txTo}) {
            state.txTo = txTo
        }
    },
    actions: {
        send(ignore, {to, amount}) {
            return lemoAPI.send(to, amount)
        }
    }
})

utoolsEvents.init(store)

export default store
