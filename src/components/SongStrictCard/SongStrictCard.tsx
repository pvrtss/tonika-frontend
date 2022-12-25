import { CardTextWrap } from "components/SongCard/SongCard.style";
import { StatusLabel } from "components/StatusLabel";
import { ISong } from "interfaces";
import React, { useCallback, useState } from "react";
import {
  AcceptButtonWrap,
  DeclineButtonWrap,
  DeleteButtonWrap,
  LeftChild,
  RightChild,
  SongStrictCardWrap,
  StarF,
  StarO,
  StyledCheck,
  StyledClose,
  StyledTrash,
} from "./SongStrictCard.style";

import { SongStrictCardProps } from "./SongStrictCard.types";

const calcDefault = (favs: ISong[], song: ISong) => {
  return !!favs.filter((s) => s.pk === song.pk).length;
};

export const SongStrictCard: React.FC<SongStrictCardProps> = ({
  song,
  favorites,
  prestars,
  manage,
  folders,
  folder,
  onAccept,
  onDecline,
  onDelete,
}) => {
  const [isFavourite, setIsFavourite] = useState(
    prestars ? prestars : calcDefault(favorites ? favorites : [], song)
  );
  const handleClick = () => {
    if (!isFavourite) {
      fetch("/api/favourites/add/", {
        method: "POST",
        body: JSON.stringify({ song_pk: song.pk }),
      })
        .then((r) => r.json())
        .then((d) => console.log(d));
    } else {
      fetch("/api/favourites/delete/", {
        method: "DELETE",
        body: JSON.stringify({ song_pk: song.pk }),
      })
        .then((r) => r.json())
        .then((d) => console.log(d));
    }
    setIsFavourite((ps) => !ps);
  };

  const handleAccept = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.nativeEvent.stopPropagation();
      if (onAccept) {
        onAccept(e);
      }
    },
    [onAccept]
  );

  const handleDecline = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (onDecline) {
        onDecline(e);
      }
    },
    [onDecline]
  );

  const handleDelete = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (onDelete) {
        onDelete(e);
      }
    },
    [onDelete]
  );

  return (
    <SongStrictCardWrap>
      <LeftChild>
        <img src={song.cover} alt="song cover"></img>
        <CardTextWrap>
          <div>
            <b>{song.name}</b>
          </div>
          <div>{song.author}</div>
        </CardTextWrap>
      </LeftChild>
      <RightChild className="right">
        {manage ? (
          <>
            {song.status === "PE" ? (
              <>
                <AcceptButtonWrap onClick={handleAccept}>
                  <StyledCheck />
                </AcceptButtonWrap>
                <DeclineButtonWrap onClick={handleDecline}>
                  <StyledClose />
                </DeclineButtonWrap>
              </>
            ) : (
              <></>
            )}
            <StatusLabel status={"PE"} />
          </>
        ) : folders ? (
          <DeleteButtonWrap onClick={handleDelete}>
            <StyledTrash />
          </DeleteButtonWrap>
        ) : folder ? (
          <></>
        ) : isFavourite ? (
          <StarF onClick={handleClick} />
        ) : (
          <StarO onClick={handleClick} />
        )}
      </RightChild>
    </SongStrictCardWrap>
  );
};
