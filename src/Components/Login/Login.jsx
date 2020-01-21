import React from 'react'

export default function Login({ redirectToPage }) {
    return (
        <>
            <h1>Login</h1>
            <form action="POST">
                <input type="text" placeholder="Login" />
                <input type="password" placeholder="Password" />
                <button onClick={redirectToPage} data-name="Login-submit">Submit</button>
            </form>
        </>
    )
}
