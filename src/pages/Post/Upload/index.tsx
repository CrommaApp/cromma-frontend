import React from 'react';
import PostUploadForm from '@components/features/Upload/PostUploadForm';
import { ContentWrapper } from '@components/shared/ContentWrapper/styled';

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
