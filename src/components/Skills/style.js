import styled from "styled-components";

export const Title = styled.div`
    text-align: center;
    h2{
        text-shadow: 0px 2px 3px black;
        font-size: 50px;
    }
    .lineLarge, .lineSmall{
        background-color: #5c5c5c;
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

export const SkillsWrapper = styled.div`
    display: flex;
    justify-content: space-around;
`

export const SkillsItems = styled.div`
    h3{
        text-shadow: 0px 2px 3px black;
        font-size: 43px;
        line-height: 30px;
        margin-bottom: 43px;
        text-align: center;
    }
`

export const SkillsItem = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    justify-items: center;
    background-color:rgb(0 0 0 / 81%);
    border-radius: 13px;
    box-shadow: inset 0px -1px 20px 5px #bbbbbb;
    padding: 32px 22px;
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        p{
            text-align: center;
        }
    }
`

export const Skills = styled.div`
    padding: 80px 0;
`