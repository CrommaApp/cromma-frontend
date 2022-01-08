import React from 'react';
import PostUploadForm from '@components/features/upload/post-upload-form';
import { ContentWrapper } from '@components/shared/content-wrapper/styled';

const PostUpload = () => {
	return (
		<>
			<ContentWrapper>
				<PostUploadForm />
			</ContentWrapper>
		</>
	);
};

export default PostUpload;
