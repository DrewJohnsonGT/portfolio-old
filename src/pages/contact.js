import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { RiSendPlaneLine } from 'react-icons/ri';
import { AiOutlineLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import { Text, TextInput, ActionButton } from 'components/index';
import { COLORS, LINKED_IN_URL, TWITTER_URL } from 'utils/constants';

const PageTitle = styled(Text)``;
const Prompt = styled(Text)``;
const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    overflow: visible;
`;
const NameInput = styled(TextInput)``;
const EmailInput = styled(TextInput)``;
const MessageInput = styled(TextInput)``;
const SubmitButton = styled(ActionButton)``;
const SendIcon = styled(RiSendPlaneLine)`
    color: white;
    height: 1.5rem;
    width: 1.5rem;
    margin: 0.25rem;
`;
const IconDiv = styled.div``;
const IconStyles = css`
    height: 5rem;
    width: 5rem;
    transform: scale(0.95);
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
        transform: scale(1);
    }
`;
const LinkedInIcon = styled(AiOutlineLinkedin)`
    ${IconStyles};
    color: ${COLORS.LINKED_IN_BLUE};
    &:hover {
        color: ${COLORS.LINKED_IN_LIGHT_BLUE};
    }
`;
const TwitterIcon = styled(AiOutlineTwitter)`
    ${IconStyles};
    color: ${COLORS.TWITTER_BLUE};
    &:hover {
        color: ${COLORS.TWITTER_LIGHT_BLUE};
    }
`;
const ContactPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    return (
        <>
            <PageTitle type='header'>Contact</PageTitle>
            <Prompt type='subheader1'>Want to get in contact with me?</Prompt>
            <ContactForm>
                <NameInput
                    value={name}
                    onChange={(newName) => setName(newName)}
                    placeholder='Name'
                    required
                />
                <EmailInput
                    value={email}
                    onChange={(newEmail) => setEmail(newEmail)}
                    placeholder='Email'
                    required
                />
                <MessageInput
                    value={message}
                    onChange={(newMessage) => setMessage(newMessage)}
                    placeholder='Message'
                    type='textarea'
                    required
                />
                <SubmitButton
                    type='submit'
                    disabled={!name || !email || !message}>
                    Send
                    <SendIcon />
                </SubmitButton>
            </ContactForm>
            <Prompt type='subheader1'>
                Feel free to also reach me a few other ways
            </Prompt>
            <IconDiv>
                <LinkedInIcon onClick={() => window.open(LINKED_IN_URL)} />
                <TwitterIcon onClick={() => window.open(TWITTER_URL)} />
            </IconDiv>
        </>
    );
};

export default ContactPage;
