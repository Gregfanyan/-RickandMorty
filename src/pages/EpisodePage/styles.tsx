import styled from "styled-components";


export const EpisodeSection = styled.div`
  min-width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  grid-gap: 10px;

  @media screen and (max-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5px;
  }

  @media screen and (max-width: 726px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 5px;
  }
`;