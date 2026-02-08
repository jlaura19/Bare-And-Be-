import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// EmailOctopus API endpoint
app.post('/api/subscribe', async (req, res) => {
    const { email } = req.body;

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        return res.status(400).json({
            success: false,
            message: 'Please enter a valid email address.',
        });
    }

    const EMAILOCTOPUS_API_KEY = process.env.VITE_EMAILOCTOPUS_API_KEY;
    const EMAILOCTOPUS_LIST_ID = process.env.VITE_EMAILOCTOPUS_LIST_ID;

    // Check if API credentials are configured
    if (!EMAILOCTOPUS_API_KEY || !EMAILOCTOPUS_LIST_ID) {
        console.error('EmailOctopus API credentials are not configured');
        return res.status(500).json({
            success: false,
            message: 'Newsletter service is not configured.',
        });
    }

    try {
        const response = await fetch(
            `https://emailoctopus.com/api/1.6/lists/${EMAILOCTOPUS_LIST_ID}/contacts`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    api_key: EMAILOCTOPUS_API_KEY,
                    email_address: email,
                    status: 'SUBSCRIBED',
                }),
            }
        );

        const data = await response.json();

        if (!response.ok) {
            // Handle specific error cases
            if (data.error?.code === 'MEMBER_EXISTS_WITH_EMAIL_ADDRESS') {
                return res.status(400).json({
                    success: false,
                    message: 'This email is already subscribed to our newsletter.',
                });
            }

            if (data.error?.code === 'INVALID_PARAMETERS') {
                return res.status(400).json({
                    success: false,
                    message: 'Invalid email address. Please check and try again.',
                });
            }

            return res.status(400).json({
                success: false,
                message: data.error?.message || 'Failed to subscribe. Please try again.',
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Successfully subscribed! Check your inbox for confirmation.',
        });
    } catch (error) {
        console.error('Newsletter subscription error:', error);
        return res.status(500).json({
            success: false,
            message: 'Network error. Please try again later.',
        });
    }
});

app.listen(PORT, () => {
    console.log(`\n✅ Dev API server running on http://localhost:${PORT}`);
    console.log(`📧 Newsletter endpoint: http://localhost:${PORT}/api/subscribe\n`);
});
