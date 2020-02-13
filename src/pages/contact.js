import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { SEO, Layout, ActionButton, Modal } from 'components/index';
import styled, { css } from 'styled-components';
import { COLORS } from '../utils/constants';
import { sendEmail } from '../utils/helpers';

const TopBar = styled.div`
    height: 150px;
    background-color: ${COLORS.lightOrange};
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    position: relative;
    @media (max-width: 600px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 75px;
    }
`;
const Header = styled.div`
    font-size: 1.75em;
    font-weight: bold;
    flex: 1;
    color: white;
    margin: 1rem;
`;
const ContactFormDiv = styled.div`
    width: 100%;
    max-width: 700px;
`;
const ContactForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;
const ContactSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-height: calc(100vh - 340px);
    padding-top: 100px;
    @media (max-width: 600px) {
        min-height: calc(100vh - 165px);
        padding-top: 175px;
    }
`;
const TextInput = styled.input`
    width: calc(50% - 2rem);
    padding: 0.5rem 0.75rem;
    font-size: 1.25rem;
    font-weight: 300;
    color: ${COLORS.darkOrange}88;
    box-shadow: 0 0 0 1px ${COLORS.lightOrange}88;
    -moz-box-shadow: 0 0 0 1px ${COLORS.lightOrange}88;
    -webkit-box-shadow: 0 0 0 1px ${COLORS.lightOrange}88;
    border-color: transparent;
    border-radius: 0;
    margin: 1rem;
    box-sizing: border-box;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    display: flex;
    @media (max-width: 600px) {
        width: calc(100% - 2rem);
        ${({ type }) =>
            type === 'email' &&
            css`
                margin-bottom: 2rem;
            `}
    }
    &:focus {
        box-shadow: 0 0 0 3px ${COLORS.lightOrange};
        -moz-box-shadow: 0 0 0 3px ${COLORS.lightOrange};
        -webkit-box-shadow: 0 0 0 3px ${COLORS.lightOrange};
        outline: none;
    }
    &:hover {
        box-shadow: 0 0 0 3px ${COLORS.lightOrange};
        -moz-box-shadow: 0 0 0 3px ${COLORS.lightOrange};
        -webkit-box-shadow: 0 0 0 3px ${COLORS.lightOrange};
    }
    ${({ error }) =>
        error &&
        css`
            box-shadow: 0 0 0 3px #cc0000;
        `}
`;
const TextAreaInput = styled.textarea`
    padding: 0.5rem 0.75rem;
    font-size: 1.25rem;
    font-weight: 300;
    color: ${COLORS.darkOrange}88;
    box-shadow: 0 0 0 1px ${COLORS.lightOrange}88;
    border-color: transparent;
    border-radius: 0;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    height: auto;
    width: calc(100% - 4rem);
    &:focus {
        box-shadow: 0 0 0 3px ${COLORS.lightOrange};
        outline: none;
    }
    &:hover {
        box-shadow: 0 0 0 3px ${COLORS.lightOrange};
    }
    ${({ error }) =>
        error &&
        css`
            box-shadow: 0 0 0 3px #cc0000;
        `}
`;
const TextInputsDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 100%;
    @media (max-width: 600px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;
const SubHeader = styled.div`
    text-align: center;
    font-weight: bold;
    font-size: 1.75rem;
    margin: 0.25rem;
    color: ${COLORS.darkOrangeText};
`;

const Description = styled.div`
    max-width: 700px;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
        0px 2px 2px 0px rgba(0, 0, 0, 0.14),
        0px 3px 1px -2px rgba(0, 0, 0, 0.12);
    color: ${COLORS.darkOrangeText};
    padding: 1em;
    margin: 1em;
    font-size: 1.15em;
    text-align: center;
`;
const SendButton = styled(ActionButton)`
    color: white;
    margin: 1rem;
    width: calc(100% - 2rem);
    font-size: 1.25rem;
    &:disabled {
        color: white;
        background-color: gray;
    }
`;
const Avatar = styled(Img)`
    height: 200px;
    width: 200px;
    border-radius: 50%;
    border: 5px solid ${COLORS.darkOrange};
    position: absolute;
    left: calc(50% - 100px);
    bottom: -100px;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
        0px 2px 2px 0px rgba(0, 0, 0, 0.14),
        0px 3px 1px -2px rgba(0, 0, 0, 0.12);
    @media (max-width: 600px) {
        height: 150px;
        width: 150px;
        left: calc(50% - 75px);
        bottom: -165px;
    }
`;
export const data = graphql`
    query {
        profile: file(relativePath: { eq: "images/profile2.png" }) {
            childImageSharp {
                fluid(maxWidth: 250, quality: 100) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;
class Contact extends Component {
    state = {
        name: '',
        email: '',
        message: '',
        nameError: false,
        emailError: false,
        messageError: false,
        isModalOpen: false,
        modalTitle: '',
        modalMessage: '',
        loading: false
    };
    handleChange = ({ target: { value, id } }) =>
        this.setState({
            [id]: value,
            [id + 'Error']: false
        });

    resetForm = () => this.setState({ name: '', email: '', message: '' });

    handleFormSubmit = () => {
        const { email, name, message } = this.state;
        if (this.validateForm()) {
            this.setState({ loading: true });
            sendEmail({ email, name, message })
                .then(() => {
                    this.resetForm();
                    this.setState({
                        isModalOpen: true,
                        modalTitle: 'Email sent!',
                        modalMessage: "I'll get back to you shortly :)",
                        loading: false
                    });
                })
                .catch(err => {
                    console.log(err);
                    this.setState({
                        isModalOpen: true,
                        modalTitle: 'Unable to send Email',
                        modalMessage:
                            'Try directly reaching out to me at DrewJohnsonGT@gmail.com',
                        loading: false
                    });
                });
        }
    };
    handleClose = () =>
        this.setState({
            isModalOpen: false,
            modalTitle: '',
            modalMessage: ''
        });
    validEmail = email => email.includes('@') && email.includes('.com');

    validateForm = () => {
        const { email, name, message } = this.state;
        const emailError = !this.validEmail(email);
        const nameError = name.length === 0;
        const messageError = message.length === 0;
        this.setState({
            emailError,
            nameError,
            messageError
        });
        return !emailError && !nameError && !messageError;
    };
    render() {
        const {
            name,
            email,
            message,
            nameError,
            emailError,
            messageError,
            isModalOpen,
            modalTitle,
            modalMessage,
            loading
        } = this.state;
        const { data } = this.props;
        console.log(data);
        return (
            <Layout>
                <SEO
                    title="Contact"
                    keywords={[
                        `gatsby`,
                        `application`,
                        `react`,
                        `drew`,
                        'johnson',
                        'portfolio',
                        'projects',
                        'contact',
                        'web developer'
                    ]}
                />
                <TopBar>
                    <Header>Contact</Header>
                    <Avatar
                        fluid={data.profile.childImageSharp.fluid}
                        alt="Drew Johnson Software Developer"
                        style={{ position: 'absolute' }}
                    />
                </TopBar>
                <ContactSection>
                    <Description>
                        I'm always looking for new challenges and ways to learn
                        and grow as a developer. If you're interested in hiring
                        me for your project or have other inquiries, use the
                        form below to get in touch.
                    </Description>
                    <SubHeader>Get In Touch</SubHeader>
                    <ContactFormDiv>
                        <ContactForm>
                            <TextInputsDiv>
                                <TextInput
                                    id="name"
                                    value={name}
                                    placeholder="Name"
                                    onChange={this.handleChange}
                                    error={nameError}
                                    required
                                />
                                <TextInput
                                    id="email"
                                    value={email}
                                    onChange={this.handleChange}
                                    placeholder="Email"
                                    type="email"
                                    error={emailError}
                                    required
                                />
                            </TextInputsDiv>
                            <TextAreaInput
                                value={message}
                                id="message"
                                placeholder="Message"
                                onChange={this.handleChange}
                                type="textarea"
                                error={messageError}
                                required
                            />
                            <SendButton
                                type="submit"
                                onClick={this.handleFormSubmit}
                            >
                                {loading ? 'Sending..' : 'Send'}
                            </SendButton>
                        </ContactForm>
                    </ContactFormDiv>
                </ContactSection>
                <Modal
                    open={isModalOpen}
                    title={modalTitle}
                    message={modalMessage}
                    handleClose={this.handleClose}
                />
            </Layout>
        );
    }
}

export default Contact;
