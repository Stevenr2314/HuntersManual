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
    return (
        <>
         <h1>{props.listItem.name}</h1>
        </>
    )
}

const mapStateToProps = state => {
    return {
        listItem: state.lister.listItem
    }
}

export default connect(mapStateToProps, { getListItem })(ListItem)
