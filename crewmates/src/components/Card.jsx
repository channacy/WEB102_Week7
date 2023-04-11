import React from 'react'
import { useState } from 'react'
import './Card.css'
import { Link } from 'react-router-dom'


const Card = (props) =>  {

  return (
      <div className="Card">
          <h4 className="id">ID: {props.id}</h4>
          <h2 className="name">Name: {props.name}</h2>
          <h3 className="role">Role: {props.role}</h3>
          <h3 className="lane">Lane: {props.lane}</h3>
          <Link to={`/edit/${props.id}`}><button className="editButton"> Edit </button></Link>
      </div>
  );
};

export default Card;