import { FC } from "react";

export type Pokemon = {
    id: number;
    name: string;
    types: string[];
    sprite: string;
}

export const PokemonRow: FC<Pokemon> = (pokemon) => {
    return (
        <>
        <table>
            <tbody>
                <tr>
                    <td>{pokemon.id}</td>
                    <td>{pokemon.name}</td>
                    <td>{pokemon.types}</td>
                    <td>{pokemon.sprite}</td>
                </tr>
            </tbody>
        </table>
        </>
    );
}