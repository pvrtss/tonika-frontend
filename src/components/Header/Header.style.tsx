import styled from 'styled-components'

import { ReactComponent as LogoSVG } from '../../assets/tonika-logo-small-a.svg';
import { ReactComponent as UserSVG } from '../../assets/user.svg';

export const HeaderWrap = styled.div`
    width: 100%;
    height: 60px;
    //background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 10px 10px -10px rgba(9, 12, 15, 0.2);
`

export const Logo = styled(LogoSVG)`
    height: 38px;
    ellipse {stroke: black;}

    @media (max-width: 330px) {
        height: 24px;
    }
`

export const UserIcoWrap = styled.div`
    position: absolute;
    top: 10px;
    right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
`

export const UserIco = styled(UserSVG)`
    width: 24px;
    height: 24px;
`
