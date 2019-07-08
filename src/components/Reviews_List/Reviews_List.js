import React from 'react'
import Stars from './Stars_Reviews_List';
import Recommended from './Recomended_Reviews_List';
const dateFormat = require('dateformat');
const now = new Date();

const Reviews_List = (props) => {
    return (
        <ul className="reviews-list">
            {
                props.reviews.map((r, i) => {
                    return (
                        <div className="row" key={i}>
                            <div className="personal">
                                <p className="bold">{r.username}</p>
                                <p className="grey">Age: {r.age}</p>
                                <p className="grey">Height: {r.height}</p>
                                <p className="grey">Location: {r.location}</p>
                            </div>
                            <div className="opinnion">
                                <div className="star-date">
                                    <Stars stars={r.stars}/>
                                    <p className="grey">{dateFormat(r.date, "mm/dd/yyyy")}</p>
                                </div>
                                <p>{r.title}</p>
                                <p className="grey">{r.body}</p>
                                <p className="grey"><span className="bold">Fit: </span >{r.fit}</p>
                                <p className="grey"><span className="bold">Fit: </span>{r.sizePurchased}</p>
                                <p className="grey"><span className="bold">Fit: </span>{r.sizeNormalyWorn}</p>
                                <br></br>
                                <Recommended recomend={r.recommended}/>
                            </div>
                            <div className="border-bottom"></div>
                        </div>
                    )
                })
            }
        </ul>
    )
}

export default Reviews_List