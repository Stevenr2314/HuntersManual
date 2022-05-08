import React, { useEffect, useState } from "react";
import { connect } from 'react-redux'
import { getList } from "./listerActions";
import { MonsterCard, MonstersContainer, MonstersTitle } from "../Monsters/MonstersElements";
import { Outlet , useLocation, useNavigate} from "react-router-dom";

const Lister = props => {
    let location = useLocation()
    let navigate = useNavigate()
    const [title, setTitle] = useState('')

    useEffect(() => {
        props.getList(location.pathname)
        setTitle(location.pathname.charAt(1).toUpperCase() + location.pathname.slice(2))
    }, [location.pathname])
    
    let handleClick = id => {
        navigate(`${location.pathname}/${id}`)
    }

    return (
        <MonstersContainer>
            {location.pathname.length > 2 ? 
            <>
                <MonstersTitle>{title}</MonstersTitle>
                {
                props.list.length > 1 ?
                props.list.map(listItem => 
                    (
                        <MonsterCard key={listItem.id} onClick={() => handleClick(listItem.id)}>
                            <h2 >{listItem.name}</h2>
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