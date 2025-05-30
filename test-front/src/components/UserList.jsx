import React, { useEffect, useState } from 'react'

function UserList() {
    const [data, setData] = useState()

    const handleFetchData = () => {

    }

    useEffect(() => {
        handleFetchData()
    }, [data])

    return (


        <div>UserList</div>



    )
}

export default UserList