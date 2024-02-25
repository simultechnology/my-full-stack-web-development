'use client'
import axios from 'axios'
import {useEffect, useState} from 'react'

export default function Page() {
    const [data, setData] = useState({message: '', population: 0})
    useEffect(() => {
        axios.get('/api/backend/hello_db/backend')
            .then((res) => res.data).then((data) => {
            setData(data)
        })
    }, [])
    return <div>hello {data.message}!<br/> {data.population}</div>
}