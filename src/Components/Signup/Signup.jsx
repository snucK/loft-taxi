import React from 'react'

export default function Signin({ redirectToPage }) {
    return (
        <>
            <h1>Signup</h1>
            <form action="POST">
                <input type="text" placeholder="Login" />
                <input type="password" placeholder="Password" />
                <input type="email" placeholder="Email" />
                <button onClick={redirectToPage} data-name="Signup-submit">Submit</button>
            </form>
        </>
    )
}
