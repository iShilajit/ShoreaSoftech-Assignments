import React from 'react'

const Card = ({ key, uid, title, body }) => {
    return (
        <>
            <div className="card">
           
                <div><span> UserId:</span> {uid}</div>
                <div><span>Title:</span> {title}</div>
                <div><span>Body:</span> {body}</div>
            </div>


        </>
    )
}

export default Card