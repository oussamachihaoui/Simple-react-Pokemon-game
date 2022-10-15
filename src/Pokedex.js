import React , {Component} from "react";
import Pokecard from "./Pokecard";
import './Pokedex.css'
class Pokedex extends Component{   
    render(){
        let challange ;
        if (this.props.whoIsWinner){
            challange = <h1 className="Pokedex-winner">Winner</h1>
        }else {
            challange = <h1 className="Pokedex-loser">loser</h1>
        }
        return (
            <div className="Pokedex-content">
                {challange}
                <h4>Total XP : {this.props.power}</h4>
                <div className="Pokedex-card">
                {this.props.pokemon.map(n =>(
                    <Pokecard id={n.id} name={n.name} type={n.type} xp={n.base_experience} />
                ))}
                </div>
            </div>
        )
    }
}

export default Pokedex;