import React from 'react'
import { useState } from 'react'
import './Card.css'
import { Link } from 'react-router-dom'


const Card = (props) =>  {

  return (
      <div className="Card">
          <h2 className="name">Name: {props.name}</h2>
          <h3 className="count">Count: {props.count}</h3>
          <h3 className="id">ID: {props.id}</h3>
          <Link to={`/edit/${props.id}`}><button className="editButton"> Edit </button></Link>
      </div>
  );
};

export default Card;