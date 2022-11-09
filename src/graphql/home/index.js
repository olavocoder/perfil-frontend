import { gql } from "@apollo/client"

const HomeGraph = gql`
query{
    categories {
        nodes {
        name
        hardskills{
            img{
                mediaItemUrl
                altText
            }
        }
        }
    }
    pages{
        nodes{
            home{
                hero{
                    name
                    desc
                    social{
                        img {
                        mediaItemUrl
                        altText
                        }
                        url
                    }
                    photo{
                        mediaItemUrl
                        altText
                    }
                }
                about{
                    desc
                    details{
                        attribute
                        name
                    }
                    title
                    titleDetails
                }
                skills{
                    title
                    titleHard
                    titleSoft
                    softSkills{
                        img{
                            mediaItemUrl
                            altText
                        }
                        name
                    }
                }
            }
        }
    }
}
`

export default HomeGraph