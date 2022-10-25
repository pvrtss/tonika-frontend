import styled from 'styled-components';

interface PopoverContainerProps {
    show: boolean;
}

export const PopoverContainer = styled.div<PopoverContainerProps>`
    ${({ show }) => (show ? 'display: block;' : 'display: none;')};
`;