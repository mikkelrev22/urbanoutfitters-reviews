import React from 'react'

const Recommended = (props) => {
    const { recommended } = props
    return(
        <div>
            {recommended ? (
                <p className="grey"><span className="bold">Yes, </span>I recommended this product</p>
            ) : (
                <p className="grey"><span className="bold">No, </span>I did not recommended this product</p>
            )}
        </div>
    )
}

export default Recommended