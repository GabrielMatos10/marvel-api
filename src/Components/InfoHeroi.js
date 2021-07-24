import styled from "styled-components";
import React from "react";

const Descricao = styled.div `
max-width: auto;
background-color: white;
`
const InfoHeroi = ({ item }) => {
  return (
    <div>
      <img
        src={item.thumbnail.path + "/portrait_fantastic.jpg"}
        alt="Imagem do Herói"
      />
      <div><strong>{item.name}</strong></div>
      <Descricao>{item.description}</Descricao>
      
    </div>
  );
};

export default InfoHeroi;
