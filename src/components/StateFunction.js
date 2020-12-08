import React, { useState, useEffect, useLayoutEffect } from 'react'

function StateFunction() {
    const [greeting, setGreeting] = useState('你好')
    //useEffect会有闪屏，useLayoutEffect不会
    useLayoutEffect(() => {
        console.log('问候语:', greeting)
        if (greeting === '内心草泥马') {
            setGreeting('你好')
        }
    }, [greeting])
    return <div onClick={() => {
        setGreeting('内心草泥马')
    }}>这是一个函数组件-{greeting}</div>
}
export default StateFunction