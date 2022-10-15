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
                <div> 
                    Type : {this.props.type} <br></br>
                    Xp : {this.props.xp}
                </div>
            </div>
        )
    }
}

export default Pokecard;