import React from 'react';

interface EmailTemplateProps {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    name,
    email,
    subject,
    message
}) => (
    <div>
        <h1>New Contact Form Submission</h1>
        <div style={{ marginTop: '20px' }}>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Subject:</strong> {subject}</p>
            <p style={{ marginTop: '20px' }}><strong>Message:</strong></p>
            <p style={{ whiteSpace: 'pre-wrap' }}>{message}</p>
        </div>
    </div>
);