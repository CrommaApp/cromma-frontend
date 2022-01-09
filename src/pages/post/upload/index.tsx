import React from 'react';
import PostUploadForm from '@components/features/upload/post-upload-form';
import { ContentWrapper } from '@components/shared/content-wrapper/styled';

const PostUpload = () => {
	return (
		<>
			<ContentWrapper>
				<h1 className="a11y-hidden">게시글 작성 폼</h1>
				<PostUploadForm />
			</ContentWrapper>
		</>
	);
};

export default PostUpload;
