import React, { useCallback, useRef, useState } from 'react';
import { usePopper } from 'react-popper';

import { BodyPortal } from 'components/BodyPortal';
import { useOnClickOutside } from 'utils/useOnClickOutside';

import { PopoverContainer } from './TriggerWrapper.style';
import { TriggerWrapperProps } from './TriggerWrapper.types';

export const TriggerWrapper: React.FC<TriggerWrapperProps> = ({ children, popover, placement, skidding, distance }) => {
    const [isOpen, setIsOpen] = useState(false);
    const refEl = useRef<HTMLDivElement | null>(null);
    const popEl = useRef<HTMLDivElement | null>(null);
    const { styles, attributes } = usePopper(refEl.current, popEl.current, {
        placement: placement ? placement : 'bottom',
        modifiers: [
            {
                name: 'offset',
                options: {
                    offset: [skidding ? skidding : 0, distance ? distance : 12],
                },
            },
        ],
    });

    const onClick = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
        setIsOpen((prevState) => !prevState);
    }, []);

    const onClose = useCallback(() => {
        setIsOpen(false);
    }, []);

    useOnClickOutside(popEl, onClose);

    return (
        <>
            <div onClick={onClick} ref={refEl} style={styles.res}>
                {children}
            </div>
            <BodyPortal>
                <PopoverContainer ref={popEl} show={isOpen} style={styles.popper} {...attributes.popper}>
                    {popover(onClose)}
                </PopoverContainer>
            </BodyPortal>
        </>
    );
};
