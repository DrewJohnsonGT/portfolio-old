import React from 'react'
import { Link, navigate } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { Colors } from '../../utils/constants'

const ProjectDiv = styled.div`
    flex: 1;
    background-color: white;
    max-width: 550px;
    height: 500px;
    border-radius: 1px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
        0px 2px 2px 0px rgba(0, 0, 0, 0.14),
        0px 3px 1px -2px rgba(0, 0, 0, 0.12);
    @media (max-width: 1250px) {
        max-width: 550px;
        min-width: 350px;
        height: 400px;
    }
`
const ProjectImageDiv = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    min-height: 0;
    &:hover > div {
        bottom: 0;
        height: 100%;
    }
`
const ProjectImage = styled(Img)`
    width: 100%;
    height: 100%;
`
const ProjectImageMask = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.4);
`
const Description = styled.div`
    position: absolute;
    bottom: 100%;
    left: 0;
    right: 0;
    background-color: ${Colors.lightOrange};
    overflow: hidden;
    width: 100%;
    height: 0;
    z-index: 10;
    transition: 0.5s ease;
    cursor: pointer;
`
const DescriptionText = styled.div`
    color: white;
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 1.25em;
    padding: 0.25rem;
`
const ProjectTitle = styled.div`
    font-size: 1.75em;
    font-weight: bold;
    text-align: center;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${Colors.darkOrangeText};
    z-index: 1;
`
const ProjectClient = styled.a`
    font-size: 1.5em;
    font-weight: bold;

    text-align: center;
    color: ${Colors.lightOrange};
    z-index: 1;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`
const ProjectLocation = styled.div`
    font-size: 1em;
    font-weight: 300;
    color: ${Colors.darkOrangeText};
    z-index: 1;
`
const ProjectTechBar = styled.div`
    padding: 0.25em;
    text-align: center;
`
const ProjectTech = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`
const TechChip = styled.p`
    background-color: ${Colors.lightOrange};
    border-radius: 8px;
    padding: 5px;
    color: white;
    margin: 5px;
`
const ClientLogo = styled(Img)`
    height: 70px;
    width: 70px;
    max-height: 70px;
    border-radius: 50%;
    border: 4px solid white;
    background-color: white;
    position: absolute;
    z-index: 1;
    top: 5px;
    right: 5px;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
        0px 2px 2px 0px rgba(0, 0, 0, 0.14),
        0px 3px 1px -2px rgba(0, 0, 0, 0.12);
`
const ProjectType = styled.span`
    background-color: ${Colors.lightOrange};
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 2.5px;
    color: white;
`
const TextLink = styled(Link)`
    text-decoration: none;
    color: ${Colors.darkOrangeText};
    &:hover {
        text-decoration: underline;
    }
`
const onProjectClick = () => navigate('/projects')
const Project = ({
    name,
    client,
    location,
    type,
    description,
    clientLogo,
    tech,
    image,
    clientWebsite,
    ...props
}) => (
    <ProjectDiv {...props}>
        <ProjectImageDiv>
            <ProjectImage fluid={image} alt={name} />
            <ProjectImageMask />
            <ClientLogo
                fluid={clientLogo}
                alt={client}
                style={{ position: 'absolute' }}
            />
            <ProjectType>{type}</ProjectType>
            <Description onClick={() => onProjectClick()}>
                <DescriptionText>{description}</DescriptionText>
            </Description>
        </ProjectImageDiv>

        <ProjectTechBar>
            <ProjectTitle>
                <TextLink to={'/projects'}>{name}</TextLink>
            </ProjectTitle>
            <ProjectClient href={clientWebsite} target={'__blank'}>
                {client}
            </ProjectClient>
            <ProjectLocation>{location}</ProjectLocation>
            <ProjectTech>
                {tech.map(t => (
                    <TechChip key={t}>{t}</TechChip>
                ))}
            </ProjectTech>
        </ProjectTechBar>
    </ProjectDiv>
)

export default Project
