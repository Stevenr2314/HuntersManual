import React, { useEffect } from "react";
import { connect } from 'react-redux'
import { getList } from "./listerActions";
import { MonsterCard, MonstersContainer, MonstersTitle } from "./MonstersElements";
import { Outlet , useLocation, useNavigate} from "react-router-dom";

const Lister = props => {
    let location = useLocation()
    let navigate = useNavigate()

    useEffect(() => {
        props.getList(location.pathname)
    }, [])
    
    let handleClick = id => {
        navigate(`/monsters/${id}`)
    }

    return (
        <MonstersContainer>
            {location.pathname === '/monsters' ? 
            <>
                <MonstersTitle>Monsters</MonstersTitle>
                {
                props.monsters.length > 1 ?
                props.monsters.map(monster => 
                    (
                        <MonsterCard key={monster.id} onClick={() => handleClick(monster.id)}>
                            <h2 >{monster.name}</h2>
                            <h3>{monster.type}</h3>
                        </MonsterCard>
                    )
                ) 
                :
                <h1>LOADING</h1>
                } 
            </>
            :
            <Outlet /> 
            }
        </MonstersContainer>
    )
}

const mapStateToProps = state => {
    return {
        list : state.lister.list,
        listItem: state.lister.listItem
    }
}

export default connect(mapStateToProps, { getList })(Lister)