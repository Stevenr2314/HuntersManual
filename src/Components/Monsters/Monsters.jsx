import React, { useEffect } from "react";
import { connect } from 'react-redux'
import { getMonsters } from "../../Actions/MonsterActions";
import { MonsterCard, MonstersContainer, MonstersTitle } from "./MonstersElements";

const Monsters = props => {
    useEffect(() => {
        props.getMonsters()
    }, [])
    return (
        <MonstersContainer>
            <MonstersTitle>Monsters</MonstersTitle>
            {props.monsters.map(monster => 
                (
                    <MonsterCard key={monster.id}>
                        <h3 >{monster.name}</h3>
                    </MonsterCard>
                )
            )}
        </MonstersContainer>
    )
}

const mapStateToProps = state => {
    return {
        monsters : state.monsters
    }
}

export default connect(mapStateToProps, { getMonsters })(Monsters)