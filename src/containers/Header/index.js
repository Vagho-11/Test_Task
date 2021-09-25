import React from "react"
import "./Header.scss"



const Header = ()=>{
    return(
        <header className="header">
            <div className="content container">
               
                    <img className="content__logo" src="./logo.png" alt="logo"/>
               
                <p className="header__text">Cats</p>

                
            </div>
        </header>
    )
}
export default Header