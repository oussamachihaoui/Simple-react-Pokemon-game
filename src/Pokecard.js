import React , {Component} from "react";
import './Pokecard.css'

const pokemonImg = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'

const fancyPic = (number)=> ( number <= 900 ? `00${number}`.slice(-3) : number) 
class Pokecard extends Component{
    render(){
        let imgSrc = `${pokemonImg}${fancyPic(this.props.id)}.png`
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