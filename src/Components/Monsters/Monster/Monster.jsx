import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { selectMonster, getMonster } from "../MonsterActions";
import { Arrow, Container, ImgContainer, Info, MonsterDiv, Name, Titles, Weaknesses } from './MonsterElements'

const Monster = props => {
    let params = useParams();
    let navigate = useNavigate()

    useEffect(() => {
            props.getMonster(params.id)
    }, [params.id])

    let monster = props.currentMonster
    let starOutput = amount => {
        let stars = ''
        for(let i = 0; i < amount; i++){
            stars += '⭐'
        }
        return stars
    }

    let handleClick = string => {
        let id = parseInt(params.id)
        if(string === "left"){
            navigate(`/monsters/${id - 1}`)
        } else {
            navigate(`/monsters/${id + 1}`)
        }
    }
    
    return(
        <Container>
            <Arrow onClick={() => handleClick("left")}>⬅</Arrow>
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
                    {monster.locations?.map(location => (
                        <p key={location.id}>{location.name} ({location.zoneCount} Zones)</p>
                    ))}
                    <Titles>Weaknesses</Titles>
                    <Weaknesses>
                    {monster.weaknesses?.map(weakness => (
                        <p key={weakness.element}>{weakness.element} - {starOutput(weakness.stars)}</p>
                    ))}
                    </Weaknesses>
                    <Titles>Resistances</Titles>
                    <Titles>Rewards</Titles>
                </Info>
            </MonsterDiv>
            <Arrow onClick={() => handleClick("right")}>➡</Arrow>
        </Container>
    )
}
const mapStateToProps = state => {
    return{
        currentMonster: state.currentMonster,
        monsters: state.monsters
    }
}
export default connect(mapStateToProps, {selectMonster, getMonster})(Monster)