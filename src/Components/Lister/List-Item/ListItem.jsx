import React, { useEffect, useState } from "react";
import {useParams, useLocation} from "react-router-dom";
import { getListItem } from "../listerActions";
import { connect } from 'react-redux'

const ListItem = props => {
    let {category, id} = useParams()
    let location = useLocation()

    useEffect(() => {
        props.getListItem('/'+category, id)
        console.log(props.listItem)
    }, [location.pathname])

    const generateDetails = (listItem) =>{
        if(!listItem) return ''
        if(typeof listItem === 'array'){
            for(const object of listItem){
                generateDetails(object)
            }
        }
        return Object.keys(listItem).map((keyName, keyIndex) => {
            if(typeof listItem[keyName]=== 'object'){
                generateDetails(listItem[keyName])
            }
            return(
            <p key={keyIndex}>{keyName}:{listItem[keyName]}</p>
        )})
    }
    return (
        <>
         <h1>{props.listItem.name}</h1>
         {
            generateDetails(props.listItem)
         }
        
        </>
    )
}

const mapStateToProps = state => {
    return {
        listItem: state.lister.listItem
    }
}

export default connect(mapStateToProps, { getListItem })(ListItem)
