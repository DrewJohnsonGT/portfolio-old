import React from 'react';
import styled from 'styled-components';
import { FaCheckCircle } from 'react-icons/fa';
import { Colors } from '../../utils/constants';

const SkillSection = styled.div`
    flex: 1;
    background-color: white;
    max-width: 350px;
    border-radius: 1px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem 0;
    margin: 4rem 2rem;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
        0px 2px 2px 0px rgba(0, 0, 0, 0.14),
        0px 3px 1px -2px rgba(0, 0, 0, 0.12);
`;
const SkillItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;
const SkillHeader = styled.div`
    text-align: center;
    font-weight: bold;
    font-size: 1.25rem;
    color: ${Colors.darkOrangeText};
`;
const SkillItem = styled.div`
    margin: 0.5rem;
`;
const SkillLabel = styled.div`
    font-weight: 400;
    font-size: 1rem;
    align-items: center;
    display: flex;
`;
const CheckIcon = styled(FaCheckCircle)`
    color: ${Colors.lightOrange};
    margin-right: 5px;
`;
const Skills = ({ title, skills }) => (
    <SkillSection>
        <SkillHeader>{title}</SkillHeader>
        <SkillItems>
            {skills.map(skill => (
                <SkillItem key={skill.label}>
                    <SkillLabel>
                        <CheckIcon />
                        {skill.label}
                    </SkillLabel>
                </SkillItem>
            ))}
        </SkillItems>
    </SkillSection>
);

export default Skills;
