import React, { useEffect } from "react";
import { connect } from 'react-redux'
import { getMonsters } from "../../Actions/MonsterActions";
import { MonsterCard, MonstersContainer, MonstersTitle } from "./MonstersElements";
import { Outlet , useLocation} from "react-router-dom";

const Monsters = props => {
    let location = useLocation()

    useEffect(() => {
        props.getMonsters()
    }, [])
    

    return (
        <MonstersContainer>
            {location.pathname === '/monsters' ? 
            <>
                <MonstersTitle>Monsters</MonstersTitle>
                {props.monsters.map(monster => 
                    (
                        <MonsterCard key={monster.id} to={`/monsters/${monster.name}`}>
                            <h2 >{monster.name}</h2>
                            <h3>{monster.type}</h3>
                        </MonsterCard>
                    )
                )} 
            </>
            :
            <Outlet /> 
            }
        </MonstersContainer>
    )
}

const mapStateToProps = state => {
    return {
        monsters : state.monsters,
        currentMonster: state.currentMonster
    }
}

export default connect(mapStateToProps, { getMonsters })(Monsters)