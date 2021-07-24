import React from "react";
import styled from "styled-components";
import InfoHeroi from "./InfoHeroi";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`

const TabelaHeroi = ({items,isLoading}) => {
  return isLoading ? <h1>Loading</h1> :
  <Container >
      {
          items.map(item=>(
              <InfoHeroi key={item.id} item={item}></InfoHeroi>
          ))
      }
  </Container>
}

export default TabelaHeroi;
