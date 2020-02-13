import React from 'react';
import { Link, navigate, graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import {
    SEO,
    Layout,
    LinkButton,
    ProjectCard,
    SkillsCard,
    OtherStuff
} from 'components/index';
import styled, { css } from 'styled-components';
import { COLORS } from '../utils/constants';
import {
    ReactLogo,
    ReduxLogo,
    JavaScriptLogo,
    HTMLLogo,
    CSSLogo,
    NodeJsLogo,
    MSSQLLogo,
    GraphQLLogo,
    PythonLogo,
    NetSuiteLogo,
    TypeScriptLogo,
    JestLogo,
    AWSLogo,
    FireBaseLogo,
    HadoopLogo,
    HBaseLogo,
    ScalaLogo,
    KafkaLogo,
    SparkLogo,
    CucumberLogo,
    JavaLogo
} from '../assets/icons/logos/index';

const frontendSkills = [
    { label: 'JavaScript', icon: JavaScriptLogo },
    { label: 'TypeScript', icon: TypeScriptLogo },
    { label: 'React', icon: ReactLogo },
    { label: 'Redux', icon: ReduxLogo },
    { label: 'HTML', icon: HTMLLogo },
    { label: 'CSS', icon: CSSLogo }
];
const backendSkills = [
    { label: 'Node.js', icon: NodeJsLogo },
    { label: 'SQL/MSSQL', icon: MSSQLLogo },
    { label: 'GraphQL', icon: GraphQLLogo },
    { label: 'AWS', icon: AWSLogo },
    { label: 'FireBase', icon: FireBaseLogo }
];
const bigDataSkills = [
    {
        label: 'Python',
        icon: PythonLogo
    },
    { label: 'Hadoop', icon: HadoopLogo },
    { label: 'HBase', icon: HBaseLogo },
    { label: 'Scala', icon: ScalaLogo },
    { label: 'Kafka', icon: KafkaLogo },
    { label: 'Spark', icon: SparkLogo }
];
const otherSkills = [
    { label: 'DevOps', icon: '' },
    { label: 'Java', icon: JavaLogo },
    { label: 'NetSuite', icon: NetSuiteLogo },
    { label: 'TDD/BDD', icon: JestLogo },
    { label: 'SuiteScript', icon: CucumberLogo }
];
const projects = [
    {
        name: 'Explosion Vent Sizing Tool',
        client: 'Schenck Process',
        location: 'Kansas City, KS',
        type: 'Web Application',
        description: `Internal tool used by engineering and sales teams to appropriately 
            size and report on various explosion vents. Accepts a wide set of
            parameters and performs standards based calculations. Role based
            administrative systems allow lead engineers to handle standards
            updates with code changes`,
        tech: ['React', 'Redux', 'Node.js', 'SQL', 'IIS', 'HTML/CSS'],
        image: 'Vent',
        clientLogo: 'SchenckLogo',
        clientWebsite: 'https://www.schenckprocess.com'
    },
    {
        name: 'Room Scheduler',
        client: 'Federal Aviation Administration',
        location: 'Atlanta, GA',
        type: 'Progressive Web Application ',
        description: `Utilized by Atlanta based air traffic controllers to reserve rooms for
         various events. Administrative roles can manipulate calendar events, with real-time
         updates to other team members. Support for repeat events and dynamic UI for mobile use.`,
        tech: ['React', 'Redux', 'FireBase', 'styled components', 'HTML/CSS'],
        image: 'AirTraffic',
        clientLogo: 'FAALogo',
        clientWebsite: 'https://www.faa.gov'
    },
    {
        name: 'NetSuite Login Chrome Extension',
        client: 'Meridian Business Services',
        location: 'Kansas City, KS',
        type: 'Chrome Extension',
        description: `Facilitate use of shared client NetSuite accounts by implementation 
            engineers by providing and tracking access. Administrative roles can
            assign access to others with abstracted/obfuscated login information.
            Prevents multi-logging of client accounts and the resulting loss of progress.`,
        tech: [
            'React',
            'Redux',
            'Chrome API',
            'Firebase',
            'styled components',
            'HTML/CSS'
        ],
        image: 'ChromeNetSuite',
        clientLogo: 'MeridianLogo',
        clientWebsite: 'https://www.meridianbusiness.com/'
    }
];
// Intro
const IntroDiv = styled.div`
    display: flex;
    flex-direction: row;
    padding: 3rem;
    padding-bottom: 1rem;
    background-color: ${COLORS.lightOrange};
    overflow: hidden;
    @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;
const Profile = styled(Img)`
    min-width: 240px;
    margin-right: 2vw;
    border-radius: 4px;
    align-self: center;
    border: 3px solid ${COLORS.darkOrange};
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
        0px 2px 2px 0px rgba(0, 0, 0, 0.14),
        0px 3px 1px -2px rgba(0, 0, 0, 0.12);
    @media (max-width: 800px) {
        margin-bottom: 1vh;
    }
`;
const IntroTextDiv = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    color: white;
    min-width: 300px;
    @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;
const Hello = styled.div`
    font-weight: 300;
    font-size: 1.5em;
    text-align: left;
    @media (max-width: 800px) {
        text-align: center;
    }
`;
const Name = styled.div`
    font-weight: 900;
    font-size: 3.5em;
    text-align: left;
    @media (max-width: 800px) {
        text-align: center;
    }
`;
const Description = styled.div`
    font-weight: 400;
    font-size: 1.25em;
    text-align: left;
    max-width: 800px;
    @media (max-width: 800px) {
        text-align: center;
    }
`;
const TextLink = styled(Link)`
    text-decoration: none;
    color: rgba(0, 0, 0, 0.5);
    &:hover {
        text-decoration: underline;
    }
`;
const Jeff = styled(Img)`
    width: 200px;
    -webkit-filter: drop-shadow(2px 1px 0 white) drop-shadow(-1px -1px 0 white);
    filter: drop-shadow(2px 1px 0 white) drop-shadow(-1px -1px 0 white);
    cursor: pointer;
    &:hover {
        -webkit-filter: drop-shadow(4px 4px 0 #db5700)
            drop-shadow(-4px -4px 0 #db5700);
        filter: drop-shadow(4px 4px 0 #db5700) drop-shadow(-4px -4px 0 #db5700);
    }
`;
const HiJeff = styled.p`
    display: flex;
    position: absolute;
    top: -15px;
    right: -90px;
    width: 160px;
    height: 40px;
    padding: 0px;

    color: ${COLORS.darkOrange};
    font-weight: bold;
    align-items: center;
    justify-content: center;
    background: ${COLORS.offWhite};
    -webkit-border-radius: 25px;
    -moz-border-radius: 25px;
    border-radius: 25px;
    border: ${COLORS.darkOrange} solid 4px;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
        0px 2px 2px 0px rgba(0, 0, 0, 0.14),
        0px 3px 1px -2px rgba(0, 0, 0, 0.12);
    &:before {
        content: '';
        position: absolute;
        border-style: solid;
        border-width: 11px 16px 11px 0;
        border-color: transparent ${COLORS.darkOrange};
        display: block;
        width: 0;
        z-index: 0;
        left: -15px;
        top: 6px;
    }
    &:after {
        content: '';
        position: absolute;
        border-style: solid;
        border-width: 8px 13px 8px 0;
        border-color: transparent ${COLORS.offWhite};
        display: block;
        width: 0;
        z-index: 1;
        left: -8px;
        top: 9px;
    }
`;
const JeffDiv = styled.div`
    position: relative;
    margin: auto;
    align-self: flex-end;
    margin-right: 75px;
`;
// Skills
const SkillsDiv = styled.div`
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    background-color: ${COLORS.offWhite};
    align-items: center;
    justify-content: center;
`;
const HeaderText = styled.div`
    flex: 1;
    text-align: center;
    font-weight: bold;
    font-size: 1.75rem;
    color: ${COLORS.darkOrangeText};
`;
const SubHeaderText = styled.div`
    text-align: center;
    color: ${COLORS.darkOrangeText};
    max-width: 800px;
    font-size: 1.25rem;
`;
const SkillSectionsDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    text-align: center;
    align-items: center;
    justify-content: space-around;
    position: relative;
`;

const SkillIcon = styled.div`
    opacity: 0.6;
    position: absolute;
    top: 0;
    z-index: 1;
    left: -100px;
    ${() => {
        const offset = Math.random() * 100;
        const travelSpeed = Math.max(Math.random() * 45, 10);
        const spinSpeed = Math.max(Math.random() * 15, 5);
        const delay = Math.random() * 5;
        return css`
            top: ${offset - 10 > 0 ? offset - 10 : offset}%;
            animation: shooting ${travelSpeed}s infinite ${delay}s linear,
                spin ${spinSpeed}s infinite linear;
        `;
    }}
    @keyframes shooting {
        from {
            left: -100px;
        }
        to {
            left: calc(100% + 100px);
        }
    }
    @keyframes spin {
        100% {
            transform: rotate(360deg);
        }
    }
`;

const SkillImage = styled.img`
    height: 30px;
    width: 30px;
    z-index: -1;
`;

const FeaturedProjectsDiv = styled.div`
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    align-items: center;
    justify-content: center;
`;
const ProjectsDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    @media (max-width: 1250px) {
        flex-direction: column;
    }
`;
const ViewAllProjects = styled(LinkButton)``;
const NonTechDiv = styled.div`
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    align-items: center;
    justify-content: center;
`;

const AboutPage = () => {
    const data = useStaticQuery(graphql`
        query {
            profile: file(relativePath: { eq: "images/profile2.png" }) {
                childImageSharp {
                    fluid(maxWidth: 250, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            JeffImage: file(relativePath: { eq: "images/jeff_angle.png" }) {
                childImageSharp {
                    fluid(quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            Vent: file(relativePath: { eq: "images/explosion_vent.jpg" }) {
                childImageSharp {
                    fluid(quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            AirTraffic: file(relativePath: { eq: "images/air_traffic.jpg" }) {
                childImageSharp {
                    fluid(quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            ChromeNetSuite: file(
                relativePath: { eq: "images/netsuite_chrome.png" }
            ) {
                childImageSharp {
                    fluid(quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            SchenckLogo: file(relativePath: { eq: "images/schenck_logo.png" }) {
                childImageSharp {
                    fluid(quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            FAALogo: file(relativePath: { eq: "images/faa_logo.png" }) {
                childImageSharp {
                    fluid(quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            MeridianLogo: file(
                relativePath: { eq: "images/meridian_logo.png" }
            ) {
                childImageSharp {
                    fluid(quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);
    return (
        <Layout>
            <SEO
                title="Home"
                keywords={[`gatsby`, `application`, `react`, `drew`, 'johnson']}
            />
            <IntroDiv>
                <Profile
                    fluid={data.profile.childImageSharp.fluid}
                    alt="Drew Johnson's Profile"
                />
                <IntroTextDiv>
                    <Hello>Hello, my name is</Hello>
                    <Name>Drew Johnson</Name>
                    <Description>
                        I'm a full-stack developer with a strong understanding
                        of the web and surrounding frameworks, architectures,
                        and patterns. I've led the development on numerous
                        enterprise <TextLink to="/projects">projects</TextLink>{' '}
                        and am constantly seeking to conquer new challenges. Do
                        you have a challenging web project? Check out my{' '}
                        <TextLink to="/resume">Resume</TextLink>
                    </Description>
                </IntroTextDiv>
                <JeffDiv>
                    <Jeff
                        fluid={data.JeffImage.childImageSharp.fluid}
                        alt="My Robot Jefferey"
                        onClick={() => navigate('/projects')}
                    />
                    <HiJeff>And I'm Jefferey!</HiJeff>
                </JeffDiv>
            </IntroDiv>
            <SkillsDiv>
                <HeaderText>Skills Overview</HeaderText>
                <SubHeaderText>
                    Below is a quick overview of the main technical skill set
                    and tools I use. For more detail{' '}
                    <TextLink to="/resume" style={{ color: COLORS.darkOrange }}>
                        Check out my online Resume
                    </TextLink>
                </SubHeaderText>
                <SkillSectionsDiv>
                    <SkillsCard title="Backend" skills={backendSkills} />
                    <SkillsCard title="Frontend" skills={frontendSkills} />
                    <SkillsCard title="Big Data" skills={bigDataSkills} />
                    <SkillsCard title="Others" skills={otherSkills} />

                    {[
                        ...backendSkills,
                        ...frontendSkills,
                        ...bigDataSkills,
                        ...otherSkills
                    ].map(skill => (
                        <SkillIcon key={skill.label}>
                            {skill.icon && (
                                <SkillImage
                                    src={skill.icon}
                                    alt={skill.label}
                                />
                            )}
                        </SkillIcon>
                    ))}
                </SkillSectionsDiv>
            </SkillsDiv>
            <FeaturedProjectsDiv>
                <HeaderText>Projects</HeaderText>
                <SubHeaderText>
                    Here are a few of my recent projects
                </SubHeaderText>
                <ProjectsDiv>
                    {projects.map(project => (
                        <ProjectCard
                            key={project.name}
                            {...project}
                            image={data[project.image].childImageSharp.fluid}
                            clientLogo={
                                data[project.clientLogo].childImageSharp.fluid
                            }
                        />
                    ))}
                </ProjectsDiv>
                <ViewAllProjects to="/projects">
                    View All Projects
                </ViewAllProjects>
            </FeaturedProjectsDiv>
            <NonTechDiv>
                <HeaderText>Other Stuff</HeaderText>
                <SubHeaderText>And a few things just about me</SubHeaderText>
                <OtherStuff></OtherStuff>
            </NonTechDiv>
        </Layout>
    );
};

export default AboutPage;
