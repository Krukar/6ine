import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);

const ffmpeg = async function (args: string[]): Promise<void> {
    try {
        await execFileAsync('ffmpeg', args, {
            maxBuffer: 10 * 1024 * 1024, // ffmpeg is chatty on stderr; give it room
        });
    } catch (err) {
        if (import.meta.env.DEV) console.log(err);

        throw new Error(`ffmpeg failed to convert`);
    }
};

export default ffmpeg;
