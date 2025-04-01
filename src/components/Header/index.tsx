import { HeaderContainer } from "./styles";
import logo from "../../assets/ignite-logo.svg";
import { NavLink } from "react-router-dom";
import { Scroll } from "phosphor-react";
import { Timer } from "phosphor-react";

export function Header() {
    return (
        <HeaderContainer>
            <img src={logo} alt="" />
            <nav>
                <NavLink to="/" title="Timer" className={({ isActive }) => isActive ? 'active' : ''}>
                    <Timer size={24} />
                </NavLink>
                <NavLink to="/history" title="Histórico" className={({ isActive }) => isActive ? 'active' : ''}>
                    <Scroll size={24} />
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}
