require('dotenv').config();

const {
    MAILGUN_API_KEY,
    MAILGUN_DOMAIN,
    MAILGUN_URL,
    FROM_EMAIL_ADDRESS,
    CONTACT_TO_EMAIL_ADDRESS,
} = process.env;

const mailgun = require('mailgun-js')({
    apiKey: MAILGUN_API_KEY,
    domain: MAILGUN_DOMAIN,
    url: MAILGUN_URL,
});

exports.handler = async (event, _context, callback) => {
    if (event.httpMethod !== 'POST') {
        callback({
            statusCode: 405,
            body: 'Method Not Allowed',
            headers: { Allow: 'POST' },
        });
    }
    const data = JSON.parse(event.body);
    if (!data.message || !data.contactName || !data.contactEmail) {
        callback({
            statusCode: 422,
            body: 'Name, email, and message are required.',
        });
    }

    const mailgunData = {
        from: FROM_EMAIL_ADDRESS,
        to: `${data.contactName} <${CONTACT_TO_EMAIL_ADDRESS}>`,
        'Reply-To': data.contactEmail,
        subject: `${data.contactName} - New contact from Personal Site Contact Form`,
        text: `Name: ${data.contactName}
             \nEmail: ${data.contactEmail}
             \nMessage: ${data.message}`,
    };
    return mailgun
        .messages()
        .send(mailgunData)
        .then(() =>
            callback(null, {
                statusCode: 200,
                body: "Your message was sent successfully! We'll be in touch.",
            })
        )
        .catch((error) => {
            console.log(error);
            callback({
                statusCode: 422,
                body: error.message,
            });
        });
};
