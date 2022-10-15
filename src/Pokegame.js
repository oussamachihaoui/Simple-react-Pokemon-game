import React , {Component} from "react";
import Pokedex from "./Pokedex";
import './Pokedex.css'
class Pokegame extends Component{
    static defaultProps =  {
      pokemon :  [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
          ]
    }
   
    render(){
        let deck1 = [];
		let deck2 = [ ...this.props.pokemon ];
		while (deck1.length < deck2.length) {
			let randIdx = Math.floor(Math.random() * deck2.length);
			let randPokemon = deck2.splice(randIdx, 1)[0];
			deck1.push(randPokemon);
		}
        let sum1 = deck1.reduce((lvl , pokemon) => lvl+ pokemon.base_experience , 0)
        let sum2 = deck2.reduce((lvl , pokemon) => lvl + pokemon.base_experience , 0)
        return (
            <div >
                <Pokedex pokemon ={deck1} power ={sum1} whoIsWinner ={sum1 > sum2}/>
                <Pokedex pokemon={deck2} power ={sum2} whoIsWinner={sum2 > sum1} />
            </div>
        )
    }
}

export default Pokegame;