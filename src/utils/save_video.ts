import aws from '@/apis/aws';

const save_video = async (
    id: string,
    district: string,
    tags: string[],
    title: string,
) => {
    let item = {
        id,
        district,
        title,
    } as {
        id: string;
        district: string;
        tags?: string[];
        title: string;
    };

    if (tags.length) item.tags = tags;

    const input = {
        TableName: '6ine_videos--beta',
        Item: aws.dynamo.marshall(item),
    };

    await aws.dynamo.put(input);
};

export default save_video;
