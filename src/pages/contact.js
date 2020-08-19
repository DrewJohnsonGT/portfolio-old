import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdSend } from 'react-icons/md';
import { AiOutlineLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import { Text, TextInput, ActionButton } from 'components/index';
import { COLORS, LINKED_IN_URL, TWITTER_URL } from 'utils/constants';

const Wrapper = styled.div`
    margin: auto;
`;
const PageTitle = styled(Text)`
    justify-content: center;
`;
const Prompt = styled(Text)`
    text-align: center;
`;
const ContactForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: visible;
`;
const NameInput = styled(TextInput)``;
const EmailInput = styled(TextInput)``;
const MessageInput = styled(TextInput)``;
const SubmitButton = styled(ActionButton)`
    margin: 0;
`;
const SendIcon = styled(MdSend)`
    color: white;
    height: 1.5rem;
    width: 1.5rem;
    margin: 0.25rem;
`;
const IconDiv = styled.div`
    display: flex;
    justify-content: center;
`;
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
const sendContactEmail = (emailParameters) =>
    fetch(process.env.GATSBY_CONTACT_POST_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailParameters),
    });

const ContactPage = () => {
    const [hasEmailBeenSent, setEmailHasBeenSent] = useState(false);
    const [name, setName] = useState('Drew Johnson');
    const [email, setEmail] = useState('drewjohnsongt@gmail.com');
    const [message, setMessage] = useState(
        'This is a typing test of the speed at which I type test'
    );
    return (
        <Wrapper>
            <PageTitle type='pageTitle'>Contact</PageTitle>
            {hasEmailBeenSent ? (
                <Prompt type='subheader1'>
                    Your message has been sent,{' '}
                    <Text type='primary' emphasis='HIGH'>
                        Thank You!
                    </Text>
                </Prompt>
            ) : (
                <>
                    <Prompt type='subheader1'>
                        Want to get in contact with me?
                    </Prompt>
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
                            onClick={() =>
                                sendContactEmail({
                                    contactName: name,
                                    contactEmail: email,
                                    message,
                                })
                                    .then(() => setEmailHasBeenSent(true))
                                    .catch((e) => console.log(e))
                            }
                            disabled={!name || !email || !message}>
                            Send
                            <SendIcon />
                        </SubmitButton>
                    </ContactForm>
                </>
            )}
            <Prompt type='subheader1'>
                Feel free to also reach me on these:
            </Prompt>
            <IconDiv>
                <LinkedInIcon onClick={() => window.open(LINKED_IN_URL)} />
                <TwitterIcon onClick={() => window.open(TWITTER_URL)} />
            </IconDiv>
        </Wrapper>
    );
};

export default ContactPage;
