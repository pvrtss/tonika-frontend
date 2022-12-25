import React from 'react';
import { LabelText, LabelWrap } from './StatusLabel.style';

import { StatusLabelProps } from './StatusLabel.types';


export const StatusLabel: React.FC<StatusLabelProps> = ({status}) => {
    return <LabelWrap status={status}><LabelText status={status}>{status}</LabelText></LabelWrap>;
};
