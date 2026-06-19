import aws from '@/apis/aws';

import { createReadStream } from 'node:fs';

const upload_vide = async (id: string, output_path: string, size: number) => {
    const Key = `videos/${id}.mp4`;

    await aws.s3.put({
        Bucket: process.env.S3_BUCKET_NAME,
        Key,
        Body: createReadStream(output_path),
        ContentLength: size,
    });
};

export default upload_vide;
