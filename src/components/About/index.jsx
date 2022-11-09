import * as S from './style'

const About = ({ data }) => {
    data = data.about
    return <S.AboutWrapper>
        <S.Title>
            <h2>{data.title}</h2>
            <span className='lineLarge'></span>
            <span className='lineSmall'></span>
        </S.Title>
        <S.Description>{data.desc}</S.Description>
        <S.Details>
            <h3>{data.titleDetails}</h3>
            <div className='details-list'>
                <ul>
                    {
                        data.details.map((item, index) => {
                            return (
                                <li>{item.name}</li>
                            )
                        })
                    }
                </ul>
                <ul>
                    {
                        data.details.map((item, index) => {
                            return (
                                <li>{item.attribute}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </S.Details>
    </S.AboutWrapper>
}

export default About