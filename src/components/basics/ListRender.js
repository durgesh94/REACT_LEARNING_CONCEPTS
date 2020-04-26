import React from "react";
import Tech from "./Tech";

const ListRender = () => {
    const names = ['React', 'Angular', 'Vue'];
    const technologies = [
        {
            id: 1,
            name: 'React',
            type: 'Library',
            release: '2013'
        },
        {
            id: 2,
            name: 'Angular',
            type: 'Framework',
            release: '2010'
        },
        {
            id: 3,
            name: 'Vue',
            type: 'Framework',
            release: '2014'
        }
    ]
    const nameList = names.map((name, index) => <div key={index}> {index} - {name}</div>)

    const techList = technologies.map((tech, index) => (
        <Tech key={index} tech={tech} />
    ))

    return (
        <div>
            <div>{nameList}</div>
            <div>{techList}</div>
        </div>
    )
}

export default ListRender;