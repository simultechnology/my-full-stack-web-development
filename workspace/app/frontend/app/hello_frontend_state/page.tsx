'use client'
import {useEffect, useState} from 'react'

export default function Page() {
    const [data, setData] = useState({name: '初期値'})
    useEffect(() => {
        let counter = 0
        setInterval(() => {
            const change = {name: `変更 ${counter++}`}
            setData(change)
        },1000)
    }, [])
    return <div>hello {data.name}!</div>
}