import React, { useState } from 'react'
function StateFunction() {
    //函数组件中有了状态
    const [name, setName] = useState('函数')
    return <div onClick={() => { setName('小函数') }}>这是一个函数组件-{name}</div>
}
export default StateFunction