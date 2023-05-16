import { PokedexTable, PokedexTableProps } from "../pokedex-table/pokedex-table.component"
import {FC} from "react";
import { PokemonTypeSelection } from "../pokemon-type-selection/pokemon-type-selection.component";
import {useState} from 'react';


export const FilteredPokedexTable: FC<PokedexTableProps> = (pokemon) => {
    const [displaytype, setType] = useState("");
    const [displayPokemon, setDisplayPokemon] = useState(pokemon.props);
    const changeType = (newType: string | undefined) => {
        if (newType) {
            setType(newType);
        } else {
            setType("");
        }
        
        
    }
    return (
        <>
            <PokedexTable props={displayPokemon}/>
            <PokemonTypeSelection selectedType={displaytype} selectType={changeType}/>
        </>
    );
}