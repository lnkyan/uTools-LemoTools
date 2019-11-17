export function init(vueRouter) {
    if (!window.utools) {
        console.warn('web调试模式')
        return
    }
    utools.onPluginEnter(({code, type, payload}) => {
        if (code === 'send' && type === 'regex') {
            vueRouter.push({name: wallet, query: {to: payload}})
        }
    })
}