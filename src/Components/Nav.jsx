import { NavLink } from 'react-router-dom';

    export default function Nav({state, setState}) {

        const handleClick = () => {
            setState(!state)
        }
        return (
            <div className="nav">
                <div className="link hover">Unutrasnjost
                </div>
                <div className="dropdown">
                    <NavLink to={"/"} activeclassName="active">Unutrasnjost</NavLink>
                    <NavLink to={"/2"} activeclassName="active">Terasa Lijevo</NavLink>
                    <NavLink to={"/3"} activeclassName="active">Terasa Desno</NavLink>
                </div>
                <div className="link" onClick={handleClick}>Kasa</div>
            </div>
        )
    }