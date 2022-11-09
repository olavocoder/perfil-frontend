import styled from "styled-components";
// paletas neon
export const Photo = styled.div`
    border-radius: 100%;
    background-color: rgb(0 0 0 / 68%);
    box-shadow: inset -3px 7px 6px 5px #818181;
    width: 453px;
    height: 453px;
    margin-bottom: -140px;
    z-index: 1;
    img{
        border-radius: 100%;
        padding: 25px;
    }
`
export const UserInfo = styled.div`
    padding: 168px 43px 40px;
    width: 613px;
    background-color:rgb(0 0 0 / 81%);
    border-radius: 13px;
    text-align: center;
    box-shadow: inset 0px -1px 20px 5px #bbbbbb;
    color: #fff;
    h1{
        margin-bottom: 5px;
        font-size: 55px;
    }
    p{
        margin-bottom: 55px;
        font-size: 24px;
        font-weight: lighter;
    }
`

export const SocialWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    img{
        border-radius: 100%;
    }
`

export const HeroWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding: 94px 0;
`