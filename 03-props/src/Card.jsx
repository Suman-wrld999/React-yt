import React from 'react'

const Card = (props) => {

    console.log(props.user , props.age);

    return (
        <div className="card">
            <img src="https://images.unsplash.com/photo-1668293750324-bd77c1f08ca9?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <h1>{props.user}</h1>
            <p>{props.para}</p>
            <button>view profile</button>
        </div>
    )
}

export default Card