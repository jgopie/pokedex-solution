import { Pokemon, PokemonRow } from "../pokemon-row/pokemon-row.component"
import {FC} from 'react';

export type PokedexTableProps = {
    props: Array<Pokemon>
}

export const PokedexTable: FC<PokedexTableProps> = ({props}) => {
    return(
        <>
            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Types</td>
                        <td>Sprite</td>
                    </tr>
                </thead>
            </table>
            {props.map(pokemon =>  <PokemonRow {...pokemon} key={pokemon.id}/>)}
        </>
    );
}