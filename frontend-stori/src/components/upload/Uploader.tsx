import { UploadFile } from "antd/es/upload";
import { InboxOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { message, Upload } from 'antd';
import { FC } from "react";
import Typography from "@mui/material/Typography";

interface UploaderProps {
  allowedExtensions: string[]
  fileList: UploadFile[]
  id: string
  onUploadFile: (params: any) => void
  setFileList: (params: any) => void
}

const Uploader: FC<UploaderProps> = ({
  fileList,
  id,
  allowedExtensions,
  onUploadFile,
  setFileList,
}) => {
  const { Dragger } = Upload;

  const onChange: UploadProps['onChange'] = ({ file, fileList }) => {
    if (file.status === 'done') {
      onUploadFile(file.response);
    }
    setFileList(fileList);
  }

  const beforeUpload = (file: File) => {
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('File must smaller than 2MB!');
    }
    return isLt2M;
  };

  return (
    <Dragger
      id={id}
      fileList={fileList}
      maxCount={1}
      accept={allowedExtensions.join(',')}
      action="/api/upload"
      method="POST"
      onChange={onChange}
      beforeUpload={beforeUpload}
      style={{ width: '100%' }}
      onRemove={() => setFileList([])}
      headers={
        {
          filename: fileList[0]?.name,
          extension: fileList[0]?.type || "",
        }
      }
      type="drag"
      disabled={fileList.length > 0}
    >
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <Typography variant="body1" gutterBottom>
        {fileList.length < 1 && "Upload Newsletter"}
      </Typography>
      <Typography variant="body2" gutterBottom>
        {fileList.length < 1 && "Only .pdf and .png files are allowed"}
      </Typography>
    </Dragger>
  );
}

export default Uploader;