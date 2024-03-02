import React from 'react';
import  classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
const Header=(props)=>{
    return(
        <React.Fragment>
            <header className={classes.header}> 
                <h1>Foodie</h1>
              <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src='https://cdn.dribbble.com/users/594424/screenshots/7087226/kc_dribble_shot.png' alt=''/>
                
            </div>
        </React.Fragment>
    )
}
export default Header;