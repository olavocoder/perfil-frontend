import * as S from './style'
import Image from 'next/image'

const Skills = ({ data, cat }) => {
    data = data.skills
    console.log(data)
    return <S.Skills>
        <S.Title>
            <h2>{data.title}</h2>
            <span className='lineLarge'></span>
            <span className='lineSmall'></span>
        </S.Title>
        <S.SkillsWrapper>
            <S.SkillsItems>
                <h3>{data.titleHard}</h3>
                <S.SkillsItem>
                    {cat.map((item, index) => {
                        return (
                            <div>
                                <Image
                                    width={80}
                                    height={80}
                                    src={item.hardskills.img?.mediaItemUrl}
                                />
                                <p>{item.name}</p>
                            </div>
                        )
                    })}
                </S.SkillsItem>
            </S.SkillsItems>
            <S.SkillsItems>
                <h3>{data.titleSoft}</h3>
                <S.SkillsItem>
                    {cat.map((item, index) => {
                        return (
                            <div>
                                <Image
                                    width={80}
                                    height={80}
                                    src={item.hardskills.img?.mediaItemUrl}
                                />
                                <p>{item.name}</p>
                            </div>
                        )
                    })}
                </S.SkillsItem>
            </S.SkillsItems>
        </S.SkillsWrapper>
    </S.Skills>
}

export default Skills