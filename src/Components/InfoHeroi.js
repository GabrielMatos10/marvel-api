import styled from "styled-components";
import React from "react";

const Grid = styled.div`
  width: 350px;
  background-color: transparent;
  color: #fff;
  border-radius: 5px;
  padding: 20px;
  color: black;
  font-size: 100%;
`;
const Grid1 = styled.div`
  padding-left: 100px;
  grid-column: 1;
  grid-row: 2;
`;
const Grid2 = styled.div`
  padding-left: 20px;
  grid-column: 2;
  grid-row: 2;
`;

const Grid3 = styled.div`
  padding-left: 100px;
  grid-column: 2;
  grid-row: 2;
`;

const InfoHeroi = ({ item }) => {
  return (
    <Grid>
      <Grid1>
        <img
          src={item.thumbnail.path + "/portrait_fantastic.jpg"}
          alt="Imagem do Herói"
        />
      </Grid1>
      <Grid3><strong>{item.name}</strong></Grid3>
      <Grid2>{item.description}</Grid2>
    </Grid>
  );
};

export default InfoHeroi;
