import React, { Fragment } from 'react'

export default function authentication({ children }) {
    return (
        <Fragment>
            <main>
                {children}
            </main>
        </Fragment>
    )
}
