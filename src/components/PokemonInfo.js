import React from 'react';

const PokemonInfo = props => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {props.id}
                        {props.name}
                        <img src={props.img}></img>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default PokemonInfo