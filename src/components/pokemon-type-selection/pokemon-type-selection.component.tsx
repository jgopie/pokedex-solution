import {FC} from 'react';

type PokemonTypeSelectionProps = {
    selectedType: string | undefined;
    selectType: (type: string | undefined) => void;
  }

export const PokemonTypeSelection: FC<PokemonTypeSelectionProps> = (props) => {
    const handleInput = (event) => {
        props.selectType(event.target.value.toLowerCase());
    }
    return (
        <>
            <div>
                <label htmlFor='typeSelector'>Select Type</label>
                <input type='text' name='typeSelector' value={props.selectedType} onInput={handleInput}/>
            </div>
        </>
    )
}