import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

import { DynamoDBClient, PutItemCommand } from '@aws-sdk/client-dynamodb';
import { marshall } from '@aws-sdk/util-dynamodb';

import type { PutObjectCommandInput } from '@aws-sdk/client-s3';

const dynamo = new DynamoDBClient({});
const s3 = new S3Client();

const aws = {
    dynamo: {
        marshall,
        put: async (input) => {
            const command = new PutItemCommand(input);

            return dynamo.send(command);
        },
    },
    s3: {
        put: async (input: PutObjectCommandInput) => {
            const command = new PutObjectCommand(input);

            return await s3.send(command);
        },
    },
};

export default aws;
