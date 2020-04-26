import React from "react";

const Tech = ({ tech, key }) => {
    return (
        <p>{key} {tech.name} is {tech.type} and intially release in {tech.release}.</p>
    )
}

export default Tech;