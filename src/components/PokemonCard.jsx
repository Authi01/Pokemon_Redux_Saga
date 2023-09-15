import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function PokemonCard({ pokemon, imageUrl }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Link to={`/description/${pokemon.name}`}></Link>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{pokemon.name}</Card.Title>
        <Card.Text></Card.Text>
        <Link to={`/description/${pokemon.name}`}>
          <Button variant="primary">Get h Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default PokemonCard;
