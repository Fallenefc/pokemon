import React from 'react';

const SearchedPokemon = props => {

    const weight = props.weight / 10
    const height = props.height / 10

    return (
        <div className="container-1">
            <div className="container-2">
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
                            <td>{props.id}</td>
                            <td>{props.name}</td>
                            <td><img src={props.img} alt=""></img></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="container-3">
                <div>
                    <table>
                        <thead>
                            <tr>
                            <th></th>
                            <th>Types</th>
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className={props.types[0]}>{props.types[0]}</td>
                                <td></td>
                                <td className={props.types[1]}>{props.types[1]}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                            <th></th>
                            <th>Abilities</th>
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{props.abilities[0]}</td>
                                <td>{props.abilities[2]}</td>
                                <td>{props.abilities[1]}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="container-4">
                <div>
                        <table>
                        <thead>
                            <tr>
                                <th>Stat Names</th>
                                <th>Stat Values</th>
                            </tr>
                        </thead>
                            <tbody>
                                <tr>
                                    <td>HP</td>
                                    <td>{props.baseStats[0]}</td>
                                </tr>
                                <tr>
                                    <td>Attack</td>
                                    <td>{props.baseStats[1]}</td>
                                </tr>
                                <tr>
                                    <td>Defense</td>
                                    <td>{props.baseStats[2]}</td>
                                </tr>
                                <tr>
                                    <td>Sp. Attack</td>
                                    <td>{props.baseStats[3]}</td>
                                </tr>
                                <tr>
                                    <td>Sp. Defense</td>
                                    <td>{props.baseStats[4]}</td>
                                </tr>
                                <tr>
                                    <td>Speed</td>
                                    <td>{props.baseStats[5]}</td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                        <div>
                    <table>
                        <thead>
                            <tr>
                            <th>Weight</th>
                            <th>Height</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{weight} kg</td>
                                <td>{height} m</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default SearchedPokemon