import React, { useEffect }  from "react";
import { Outlet , useLocation, useNavigate} from "react-router-dom";
import { connect } from 'react-redux'
import { getWeapons } from "./WeaponActions";

const Weapons = props => {
    let location = useLocation()
    let navigate = useNavigate()

    let handleClick = id => {
        navigate(`/weapons/${id}`)
    }

    useEffect(() => {
        props.getWeapons()
    }, [])

    return(
        <div>
            {
                location.pathname='/weapons' ?
                <>
                    <h1>WEAPONS</h1>
                    { props.weapons.length > 1 ?
                        props.weapons.map(weapon => {
                            return(
                            <div key={weapon.id} onClick={() => handleClick(weapon.id)}>
                                <h2>{weapon.name}</h2>
                                <h3>Rarity: {weapon.rarity}</h3>
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
        weapons : state.weapons.weapons,
        currentweapon: state.weapons.currentweapon
    }
}

export default connect(mapStateToProps, { getWeapons })(Weapons)