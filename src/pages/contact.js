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

const EmailStatus = {
    UNSENT: 'UNSENT',
    SENT: 'SENT',
    ERROR: 'ERROR',
};

const ContactPage = () => {
    const [emailStatus, setEmailStatus] = useState(EmailStatus.UNSENT);
    const [isSendingEmail, setIsSendingEmail] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    return (
        <Wrapper>
            <PageTitle type='pageTitle'>Contact</PageTitle>
            {emailStatus === EmailStatus.SENT && (
                <Prompt type='subheader1'>
                    Your message has been sent,
                    <br />
                    <Text type='primary' emphasis='HIGH'>
                        Thank You!
                    </Text>
                </Prompt>
            )}
            {emailStatus === EmailStatus.ERROR && (
                <Prompt type='subheader1'>
                    Error: Unable to send message at this time, <br />
                    Please try again later! <br />
                    <Text type='primary' emphasis='HIGH'>
                        Thank You!
                    </Text>
                </Prompt>
            )}
            {emailStatus === EmailStatus.UNSENT && (
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
                            onClick={() => {
                                setIsSendingEmail(true);
                                sendContactEmail({
                                    contactName: name,
                                    contactEmail: email,
                                    message,
                                })
                                    .then(() =>
                                        setEmailStatus(EmailStatus.SENT)
                                    )
                                    .catch((e) => {
                                        setEmailStatus(EmailStatus.ERROR);
                                    })
                                    .finally(() => setIsSendingEmail(false));
                            }}
                            disabled={!name || !email || !message}>
                            Send{isSendingEmail && 'ing...'}
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
