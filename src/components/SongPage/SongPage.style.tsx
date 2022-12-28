import styled from "styled-components";

export const SongContentWrap = styled.div`
    margin-top: 40px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px 0px rgba(34, 60, 80, 0.2);
    border: 1px solid white;
    display: flex;
    flex-direction: column;
    padding: 24px;
`

export const MainWrap = styled.div`
    font-weight: 500;
    font-size: 18px;
    margin-top: 12px;
`

export const DescWrap = styled.div`
    display: flex;
    margin-bottom: 60px;
    img {
        height:80px;
    }
`
export const RightDesc = styled.div`
    margin-left: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const TextArea = styled.textarea`
    background: #9999;
    font-size: inherit;
    font-family: inherit;
    resize: none;
    border-radius: 8px;
    padding: 4px;
`
