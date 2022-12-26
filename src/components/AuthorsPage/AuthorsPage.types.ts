import React from "react";

export type AuthorsPageProps = {
    manage?:boolean,
    onDelete?: React.MouseEventHandler,
    onEdit?: React.MouseEventHandler,
};