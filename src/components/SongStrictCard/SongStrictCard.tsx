import { StatusLabel } from "components/StatusLabel";
import { ISong } from "interfaces";
import React, { useCallback, useState } from "react";
import { useAppDispatch, useAppSelector } from "utils/hooks";
import {
  AcceptButtonWrap,
  AddButtonWrap,
  DeclineButtonWrap,
  DeleteButtonWrap,
  LeftChild,
  RightChild,
  SongStrictCardWrap,
  StarF,
  StarO,
  StyledAdd,
  StyledCheck,
  StyledClose,
  StyledTrash,
} from "./SongStrictCard.style";

import { SongStrictCardProps } from "./SongStrictCard.types";
import { setFavourites } from "slices/userSlice";
import { setAllSongs } from "slices/allSongsSlice";

const calcDefault = (favs: ISong[], song: ISong) => {
  console.log(!!favs.filter((s) => s.pk === song.pk).length);

  return !!favs.filter((s) => s.pk === song.pk).length;
};

export const SongStrictCard: React.FC<SongStrictCardProps> = ({
  song,
  favorites,
  stars,
  prestars,
  manage,
  folders,
  folder,
  onAccept,
  onDecline,
  onDelete,
  folderPk,
  fromViewset,
}) => {
  const userState = useAppSelector((state) => state.user);
  const [isFavourite, setIsFavourite] = useState(
    prestars
      ? prestars
      : userState.user
      ? calcDefault(favorites ? favorites : [], song)
      : false
  );
  const dispatch = useAppDispatch();
  const handleFavourite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isFavourite) {
      fetch("/api/favourites/add/", {
        method: "POST",
        body: JSON.stringify({ song_pk: song.pk }),
      })
        .then((r) => r.json())
        .then((d) => {
          dispatch(setFavourites(d));
          console.log(d);
        });
    } else {
      fetch("/api/favourites/delete/", {
        method: "DELETE",
        body: JSON.stringify({ song_pk: song.pk }),
      })
        .then((r) => r.json())
        .then((d) => {
          dispatch(setFavourites(d));
          console.log(d);
        });
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
      fetch("/api/songs/accept", {
        method: "POST",
        body: JSON.stringify({ song_pk: song.pk }),
      })
        .then((res) => res.json())
        .then((res) => {
          dispatch(setAllSongs(res));
        });
    },
    [onAccept, song, dispatch]
  );

  const handleDecline = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (onDecline) {
        onDecline(e);
      }
      fetch("/api/songs/decline", {
        method: "POST",
        body: JSON.stringify({ song_pk: song.pk }),
      })
        .then((res) => res.json())
        .then((res) => {
          dispatch(setAllSongs(res));
        });
    },
    [onDecline, song, dispatch]
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
        <img src={"%PUBLIC_URL%" + song.cover} alt="song cover"></img>
        <div style={{ marginLeft: "20px" }}>
          <div>
            <b>{song.name}</b>
          </div>
          <div>{song.author}</div>
        </div>
      </LeftChild>
      <RightChild className="right">
        {userState.user &&
          (manage ? (
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
              <StatusLabel status={song.status} />
            </>
          ) : folders ? (
            <DeleteButtonWrap onClick={handleDelete}>
              <StyledTrash />
            </DeleteButtonWrap>
          ) : folder ? (
            <AddButtonWrap>
              <StyledAdd />
            </AddButtonWrap>
          ) : (
            <></>
          ))}
        {userState.user &&
          stars &&
          (isFavourite ? (
            <StarF onClick={handleFavourite} />
          ) : (
            <StarO onClick={handleFavourite} />
          ))}
      </RightChild>
    </SongStrictCardWrap>
  );
};
