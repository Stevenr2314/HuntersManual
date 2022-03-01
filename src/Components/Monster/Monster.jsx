import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { selectMonster, getMonster } from "../../Actions/MonsterActions";
import { ImgContainer, Info, MonsterDiv, Name, Titles } from './MonsterElements'

const Monster = props => {
    let params = useParams();

    useEffect(() => {
        props.selectMonster(props.monsters.filter(monster => monster.name === params.name)[0]) 
    }, [params.name])

    let monster = props.currentMonster
    let starOutput = amount => {
        let stars = ''
        for(let i = 0; i < amount; i++){
            stars += '⭐'
        }
        return stars
    }
    
    return(
        <MonsterDiv>
            <Info>
                <Name>{monster.name} <Titles className="species"> - {monster.species}</Titles></Name>
                <ImgContainer>
                    <img src='' alt={monster.name} />
                </ImgContainer>
                <b/>
                <Titles>Description</Titles>
                <p>{monster.description}</p>
            </Info>
            <Info>
                <Titles>Type</Titles>
                <p>{monster.type}</p>
                <Titles>Locations</Titles>
                {monster.locations.map(location => (
                    <p key={location.id}>{location.name} ({location.zoneCount} Zones)</p>
                ))}
                <Titles>Weaknesses</Titles>
                {monster.weaknesses.map(weakness => (
                    <p key={weakness.element}>{weakness.element} - {starOutput(weakness.stars)}</p>
                ))}
                <Titles>Resistances</Titles>
                <Titles>Rewards</Titles>
            </Info>
        </MonsterDiv>
    )
}
const mapStateToProps = state => {
    return{
        currentMonster: state.currentMonster,
        monsters: state.monsters
    }
}
export default connect(mapStateToProps, {selectMonster, getMonster})(Monster)