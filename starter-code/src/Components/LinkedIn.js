import React from 'react'

function LinkedIn(props){
  return (


    <a href={props.link}><img  className = "img-linkedIn" src={props.link ? "/img/linkedin.png" : ""}alt=""/></a>
  );
}


export default LinkedIn;