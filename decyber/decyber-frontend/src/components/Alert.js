import React from 'react'

export default function Alert(props) {
    return (
        <div style={{height : `props.alert?50px:0px`}}>
            { props.alert && <div className={`alert alert-${props.alert.theme} alert-dismissible fadeshow`} role="alert">{props.alert.message}</div>}

        </div>
    )
}
