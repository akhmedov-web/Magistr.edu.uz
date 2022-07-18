import React from 'react'
import ChangePassword from './ChangePassword'
import Registration from './Registration'
import Login from "./Login"

export default function Modal() {
    return (
        <>
           <Registration/>
           <Login/>
           <ChangePassword/>
        </>
    )
}
