import { createStore } from 'redux'

export interface IState {
    data: string
}

interface IAction {
    type: string,
    payLoad: any
}
const initState: IState = {
    data: ''
}


const reducer = (state = initState, action: IAction) => {
    switch (action.type) {
        case "CHANGE_DATA":
            return {
                ...state,
                ...action.payLoad
            }
        default:
            return {
                ...state
            }
    }
}
// 创建客户端store,默认把第一次渲染的值赋给window作为初始默认值
export function createClientStore() {
    return createStore(reducer, window.BACKEND_DATA)
}
// 创建服务端store
export function createServerStore() {
    return createStore(reducer)
}