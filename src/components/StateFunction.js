import React, { useState, useEffect } from 'react'
const eventHandle = () => { }
function StateFunction() {
    const [num, setNum] = useState(0)
    useEffect(() => {
        console.log('函数组件结束渲染')
        document.body.addEventListener('myType', eventHandle)
        //useeffect第一个参数返回值会在下一次副作用调用前执行
        //常见场景：事件销毁
        return () => {
            document.body.removeEventListener('myType', eventHandle)
            console.log('销毁上一次')
        }
    }, [num])
    return <div onClick={() => {
        //setState参数除了数值外，也可以为函数
        setNum(num => num + 1)
    }}>这是一个函数组件-{num}</div>
}
export default StateFunction