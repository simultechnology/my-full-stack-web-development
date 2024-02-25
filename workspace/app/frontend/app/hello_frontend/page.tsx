'use client'

import axios from "axios"
import { useState, useEffect } from "react"

export default function Page() {
    const [data, setData] = useState({ name: 'init' })

    useEffect(() => {
        axios.get('/api/hello')
            .then(res => res.data)
            .then(data => setData(data))
    }, [])
    return <div> {data.name}!</div>
}