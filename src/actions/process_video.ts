import { createServerFn } from '@tanstack/react-start';

import { nanoid } from 'nanoid';

import convert_video from '@/utils/convert_video';
import save_video from '@/utils/save_video';
import upload_video from '@/utils/upload_video';

export const process_video = createServerFn({ method: 'POST' })
    .inputValidator((data: FormData) => {
        const district = data.get('district');
        const file = data.get('file');
        const tags = data.getAll('tags');
        const title = data.get('title');

        // District
        if (
            typeof district !== 'string' ||
            ![
                'Old Toronto',
                'Etobicoke',
                'Scarborough',
                'York',
                'North York',
                'East York',
            ].includes(district)
        )
            throw new Error('Please select a valid district');

        // File
        if (!(file instanceof File)) throw new Error('Please select a file');

        if (file.size > 52428800)
            throw new Error('File must be less than 50mb');

        // Tags
        if (!tags.every((tag) => typeof tag === 'string'))
            throw new Error('Invalid tags');

        // Title
        if (typeof title !== 'string')
            throw new Error('Please provide a title');

        if (title.length >= 256)
            throw new Error('Title must be less than 256 characters');

        return {
            district,
            file,
            tags,
            title,
        };
    })
    .handler(async ({ data: { district, file, tags, title } }) => {
        try {
            const id = nanoid(6);

            // Compress the video using ffmpeg
            // const { output_path, size } = await convert_video(id, file);

            // Upload the video to s3
            // await upload_video(id, output_path, size);

            // TODO: GET THE USER ID!!!!
            // MAKE THE ITEM HERE THEN PASS THAT ALONG AS THE ITEM!!!!

            // Add the video details to DynamoDB
            await save_video();

            // delete when its all done

            return { id };
        } catch (err) {
            if (import.meta.env.DEV) console.log(err);

            throw new Error("Ooops. It didn't work, please try again.");
        }
    });
