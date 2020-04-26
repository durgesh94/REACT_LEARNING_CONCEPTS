import React from "react";

const Destructuring = ({ data: { name, address }, phone }) => {
    return (
        <div>
            <h5>Destructuring</h5>
            {name} {address} {phone}
        </div>
    )
}

export default Destructuring;