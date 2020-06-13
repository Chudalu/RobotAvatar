import React from 'react';

const Card = ({data}) => {

    return (
        <div className='tc bg-dark-red dib br3 pa5 ma2 grow bw2 shadow-5'>
            <img alt='Robot Avatar' src={`https://robohash.org/${data.fullname}?300x300`}/>
            <div>
                <h2> Name: {data.fullname} </h2>
                <p>Gender: {data.gender} </p>
                <p>Ethnicity: {data.ethnicity} </p>
            </div>
        </div>
    )
}

export default Card;