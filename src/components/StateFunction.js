import React, { useState, useMemo, useCallback} from 'react'
const set = new Set()
function StateFunction() {
    const [num, setNum] = useState(1)
    const [age, setAge] = useState(18)
    const doubleNum = useCallback(() => {
        console.log('获取双倍num')
        return 2 * num
    }, [num])
    set.add(doubleNum)
    console.log('set的size：',set.size)
    return <div onClick={() => {
        setAge(age + 1)
    }}>这是一个函数组件-{doubleNum()}</div>
}
export default StateFunction