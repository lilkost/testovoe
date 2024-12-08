import { Alert } from 'antd'
import React from 'react'

const Alerts = ({message, type}) => {
    return (
        <Alert className='alert' message={message} type={type}/>
    )
}

export default Alerts