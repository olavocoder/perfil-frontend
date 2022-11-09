import * as S from './style'
import Image from 'next/image'

export default function Hero({ data }) {
    data = data.hero
    return <>
        <S.HeroWrapper>
            <S.Photo>
                <Image
                    src={data.photo.mediaItemUrl}
                    width={453}
                    height={453}
                />
            </S.Photo>
            <S.UserInfo>
                <div>
                    <h1>{data.name}</h1>
                    <p>{data.desc}</p>
                </div>
                <S.SocialWrapper>
                    {data.social.map((item, index) => {
                        return <a href={item.url}>
                            <Image
                                src={item.img.mediaItemUrl}
                                width={70}
                                height={70}
                            />
                        </a>
                    })}
                </S.SocialWrapper>
            </S.UserInfo>
        </S.HeroWrapper>
    </>
}