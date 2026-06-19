import { join } from 'node:path';
import { tmpdir } from 'node:os';

import { writeFile } from 'node:fs/promises';
import { stat } from 'node:fs/promises';

import ffmpeg from '@/apis/ffmpeg';

const convert_video = async (
    id: string,
    file: any,
): Promise<{ output_path: string; size: number }> => {
    const input_path = join(tmpdir(), `${id}-in`);
    const output_path = join(process.cwd(), 'temp', `${id}.mp4`);

    // Buffer the upload to temp disk so ffmpeg can read it.
    await writeFile(input_path, Buffer.from(await file.arrayBuffer()));

    await ffmpeg([
        '-i',
        input_path,
        '-t',
        '6', // hard-cap duration at 6s — server-enforced
        '-c:v',
        'libx264',
        '-crf',
        '26',
        '-preset',
        'veryfast', // 6s clip, no reason to grind slowly
        '-c:a',
        'aac',
        '-b:a',
        '256k',
        '-movflags',
        '+faststart', // metadata up front for web playback
        '-y',
        output_path,
    ]);

    const { size } = await stat(output_path);

    return { output_path, size };
};

export default convert_video;
