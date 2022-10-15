import React , {Component} from "react";
import './Pokecard.css'
const pokemonImg = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

class Pokecard extends Component{
    render(){
        let imgSrc = `${pokemonImg}${this.props.id}.png`
        return (
            <div className="Pokecard">
                <h1>{this.props.name}</h1>
                <img src={imgSrc} />
                <div className="Pokecard-info"> 
                    TYPE : {this.props.type} <br></br>
                    XP : {this.props.xp}
                </div>
            </div>
        )
    }
}

export default Pokecard;