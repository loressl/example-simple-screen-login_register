import React from 'react';
import './styles.scss';

function Button({status, handleSubmit, name}){
    return(
      <div className={status ? "off" : "submit"}>
        <button onClick={handleSubmit}>{name}</button>
      </div>
    );
}

export default Button;