export function init(store) {
    utools.onPluginEnter(({code, type, payload}) => {
        if (code === 'send' && type === 'regex') {
            store.commit('setTxTo', {txTo: payload})
        }
    })
}