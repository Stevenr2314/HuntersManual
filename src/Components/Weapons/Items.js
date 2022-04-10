import React, { useEffect }  from "react";
import { Outlet , useLocation, useNavigate} from "react-router-dom";
import { connect } from 'react-redux'
import { getItems } from "./ItemActions";

const Items = props => {
    let location = useLocation()
    let navigate = useNavigate()

    let handleClick = id => {
        navigate(`/items/${id}`)
    }

    useEffect(() => {
        props.getItems()
    }, [])

    return(
        <div>
            {
                location.pathname='/items' ?
                <>
                    <h1>ITEMS</h1>
                    { props.items.length > 1 ?
                        props.items.map(item => {
                            return(
                            <div key={item.id} onClick={() => handleClick(item.id)}>
                                <h2>{item.name}</h2>
                                <h3>Rarity: {item.rarity}</h3>
                            </div>
                            )
                        })
                    :
                    <h1>LOADING</h1>
                    }
                </>
                :
                <Outlet />
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        items : state.items.items,
        currentItem: state.items.currentItem
    }
}

export default connect(mapStateToProps, { getItems })(Items)