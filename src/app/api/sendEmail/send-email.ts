import { NextApiRequest, NextApiResponse } from 'next';

type FormData = {
    name: string;
    email: string;
    phone: string;
    message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const formData: FormData = req.body;

        try {
            const response = await fetch('https://formsubmit.co/kennethramirezcastro@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                res.status(200).json({ message: 'Email sent successfully!' });
            } else {
                console.error('Failed to send email:', response.statusText);
                res.status(500).json({ message: 'Failed to send email' });
            }
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ message: 'Failed to send email' });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
