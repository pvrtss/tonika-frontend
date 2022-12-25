import { ISong } from "interfaces"
import React from "react"

export type SongStrictCardProps = {
    song: ISong,
    favorites?: ISong[],
    folder?: boolean,
    prestars?: boolean,
    manage?: boolean,
    folders?: boolean,
    onDecline?: React.MouseEventHandler,
    onAccept?: React.MouseEventHandler,
    onDelete?: React.MouseEventHandler,
}
