import React from "react";
import { useParams, useHistory } from "react-router-dom";

import * as S from "./styles";
import {
  episodeProps,
  EpisodeItemProps,
  EpisodeType,
} from "../../types/EpisodeType";

function EpisodeItem({ episodeData }: EpisodeItemProps) {
  const { episode } = useParams<episodeProps>();
  const history = useHistory();

  const singleEpisode = episodeData?.episodes?.results.find(
    (e: EpisodeType) => e.episode === episode
  );

  function handleClick() {
    if (!history) {
      return <div>No Episode</div>;
    } else {
      history.push("/");
    }
  }

  return (
    <S.Wrapper>
      <S.ReturnButton onClick={handleClick}>
        <i className="fas fa-long-arrow-alt-left fa-3x"></i>
      </S.ReturnButton>
      {singleEpisode ? (
        <div>
          <h1>Episode Name: {singleEpisode.name}</h1>
          <h2>Air Date: {singleEpisode.air_date}</h2>
        </div>
      ) : (
        <h1>No Episode for this Character</h1>
      )}
    </S.Wrapper>
  );
}

export default EpisodeItem;
