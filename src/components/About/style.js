import styled from "styled-components";

export const Title = styled.div`
    text-align: center;
    h2{
        font-size: 50px;
    }
    .lineLarge, .lineSmall{
        background-color: #c4c4c4;
        height: 4px;
        display: block;
        margin: auto;
    }
    .lineLarge{
        width: 97px;
        margin-bottom: 6px;
    }

    .lineSmall{
        width: 66px;
        margin-bottom: 58px;
    }
`
export const Description = styled.p`
    font-size: 24px;
    line-height: 30px;
`
export const Details = styled.div`
    h3{
        text-align: center;
        margin: 74px 0 22px;
        font-size: 43px;
        line-height: 30px;
    }
    ul{
        list-style: none;
        max-width: 400px;
        margin-top:52px;
        margin-left: 69px;
        li{
            font-size: 24px;
            margin-bottom: 30px;
        }
    }
    .details-list{
        display: flex;
        justify-content: center;
    }
`
export const AboutWrapper = styled.div`
    padding: 106px 0;
`