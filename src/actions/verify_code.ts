import { createServerFn } from '@tanstack/react-start';

export const verify_code = createServerFn({ method: 'POST' })
    .inputValidator((data: FormData) => {
        const attempt = data.get('attempt');

        if (typeof attempt !== 'string')
            throw new Error('Please provide your guess');

        if (attempt.length >= 32)
            throw new Error('Your guess must be less than 32 characters');

        return { attempt };
    })
    .handler(async ({ data }) => {
        const { attempt } = data;

        const converted = attempt.toLowerCase();

        if (converted === process.env.SECRETCODE) {
            return { success: true };
        }

        return { success: false };
    });
