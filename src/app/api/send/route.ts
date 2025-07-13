import { EmailTemplate } from '@/components/EmailTemplate';
import { Resend } from 'resend';
import * as React from 'react';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: Request) {
    try {
        if (!resend) {
            return Response.json(
                { error: 'Email service is not configured' },
                { status: 500 }
            );
        }

        const { name, email, subject, message } = await request.json();

        if (!name || !email || !subject || !message) {
            return Response.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        const { data, error } = await resend.emails.send({
            from: 'DOTEXE <onboarding@resend.dev>',
            to: ['accounts@dotexe.com.au'],
            subject: `New Contact Form Message: ${subject}`,
            react: EmailTemplate({
                name,
                email,
                subject,
                message
            }) as React.ReactElement,
        });

        if (error) {
            console.error('Resend API error:', error);
            return Response.json(
                { error: 'Failed to send email' },
                { status: 500 }
            );
        }

        return Response.json(
            { success: true, data },
            { status: 200 }
        );
    } catch (error) {
        console.error('Server error:', error);
        return Response.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}