import { ReactNode } from 'react';
import { Placement } from '@popperjs/core';

export type TriggerWrapperProps = {
    children: ReactNode,
    popover: (onClose: React.MouseEventHandler) => ReactNode;
    placement?: Placement | undefined;
    skidding?: number | undefined;
    distance?: number | undefined;
};
