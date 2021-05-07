import React from "react";
import { useParams, useHistory } from "react-router-dom";

import { IdProps/* , SingleCharacterProps */ } from "../../types/CharacterType";
import * as S from "../SingleCharacter/styles";

function CharacterItem({ character, likedList, likeBtnHandleClick }: any) {
  const { id } = useParams<IdProps>();
  const history = useHistory();

  const characters = character?.episodes?.results.map((a: any) =>
    a.characters.map((char: any) => char)
  );

  const characterArray = characters?.reduce((acc: any, curr: any) => {
    return [...acc, ...curr];
  });

  const singleCharacter = characterArray?.find((char: any) => char.id === id);

  const { name, image, status, location, origin } = singleCharacter || {};
  const isLiked = likedList.some((id: any) => id === singleCharacter?.id);

  function handleClick() {
    if (!history) {
      return <div>No Character</div>;
    } else {
      history.push("/");
    }
  }

  return (
    <S.Wrapper>
      <S.ReturnButton onClick={handleClick}>
        <i className="fas fa-long-arrow-alt-left fa-3x"></i>
      </S.ReturnButton>
      {singleCharacter && (
        <S.Section>
          <S.StyledButton
            isLiked={!isLiked}
            onClick={() => likeBtnHandleClick(id)}
          >
            <i className="fas fa-heart fa-2x"></i>
          </S.StyledButton>
          <S.ProfilePicture src={image} alt={name} />

          <S.Status alive={status === "Alive"}>
            {singleCharacter.status}
          </S.Status>
          <S.Name>{name}</S.Name>
          <S.Location>
            <span>
              <S.LocationTitle>Origin</S.LocationTitle> {origin.name}
            </span>
            <span>
              <S.LocationTitle>Lives</S.LocationTitle>
              {location.name}
            </span>
          </S.Location>
        </S.Section>
      )}
    </S.Wrapper>
  );
}

export default CharacterItem;
