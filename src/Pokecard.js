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
                <div className="Pokecard-img">
                    <img src={imgSrc} alt={this.props.name}/>
                </div>
                <div className="Pokecard-info"> 
                   <div>TYPE : {this.props.type}</div> 
                    <div>XP : {this.props.xp}</div>   
                </div>
            </div>
        )
    }
}

export default Pokecard;