import React from 'react'
import { createPortal } from 'react-dom'

// 传送门
export default class Dialog extends React.Component {
    render() {
        // 一定要 return
        return createPortal((
            <div>hello</div>
        ), document.querySelector('#root'))
    }
}
