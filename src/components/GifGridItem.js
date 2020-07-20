import React from 'react';

export const GifGridItem = ({id, title, url}) => {
    // console.log({id, title, url});
    return (
        <div className="card animate__animated animate__fadeInDown" style={{marginBottom: '1rem'}}>
            <img className="card-img-top" src={url} alt={title} />
            <p className="card-title">{title}</p>
        </div>
    )
}