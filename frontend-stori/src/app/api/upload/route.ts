import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { NextRequest, NextResponse } from "next/server";
import { cleanFileName } from "../../../utils/cleanFileName";

const s3 = new S3Client({ 
  region: process.env.NEXT_PUBLIC_AWS_REGION || "",
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY || "",
  }
});
const BUCKET_NAME = process.env.NEXT_PUBLIC_AWS_BUCKET_NAME || "";

export async function POST(request: NextRequest) {
  if (!request.body) {
    return NextResponse.json({ status: 400, body: 'No file provided' });
  }
  const data = await streamToBuffer(request.body);
  const fileName = cleanFileName(request.headers.get('filename') || "");
  const fileType = request.headers.get('extension') || "";
  
  const command =  new PutObjectCommand({
    Bucket: BUCKET_NAME,
    Key: fileName,
    Body: data,
    ContentType: fileType,
  });

  try {
    const response = await s3.send(command);
    return NextResponse.json({ fileUrl: fileName });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        status: 500,
        body: error
      }
    )
  }
}

// async function streamToBuffer(readableStream: ReadableStream<Uint8Array>): Promise<Buffer> {
//   const chunks: Uint8Array[] = [];
//   const reader = readableStream.getReader();
//   let chunk;
//   while ((chunk = await reader.read()) && !chunk.done) {
//     chunks.push(chunk.value);
//   }
//   return Buffer.concat(chunks);
// }
async function streamToBuffer(readableStream: ReadableStream<Uint8Array>): Promise<Uint8Array> {
  const reader = readableStream.getReader();
  const chunks: Uint8Array[] = [];
  let result;
  while (!(result = await reader.read()).done) {
    chunks.push(result.value);
  }
  let totalLength = 0;
  chunks.forEach(chunk => totalLength += chunk.length);
  const resultArray = new Uint8Array(totalLength);
  let offset = 0;
  for(let chunk of chunks) {
    resultArray.set(chunk, offset);
    offset += chunk.length;
  }
  return resultArray;
}