import React, { useState, useMemo, } from 'react'

function StateFunction() {
    const [num, setNum] = useState(1)
    const [age, setAge] = useState(18)
    const doubleNum = useMemo(() => {
        console.log('获取双倍num')
        return 2 * num
    }, [num])
    return <div onClick={() => {
        setAge(age + 1)
    }}>这是一个函数组件-{doubleNum}</div>
}
export default StateFunction