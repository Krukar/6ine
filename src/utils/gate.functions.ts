import { createServerFn } from '@tanstack/react-start';

import { z } from 'zod';

const schema = z.object({
    attempt: z.string().length(7),
});

export const verify_code = createServerFn()
    .inputValidator(schema)
    .handler(async ({ data }) => {
        const { attempt } = data;

        const converted = attempt.toLowerCase();

        if (converted === process.env.SECRETCODE) {
            return { success: true };
        }

        return { success: false };
    });
