import React from 'react';
import styled from 'styled-components';

const PostsStateWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%%;
`;

type Props = {
	statement: string;
};

const PostsState = ({ statement }: Props) => {
	return (
		<PostsStateWrapper>
			<h1>{statement}</h1>
		</PostsStateWrapper>
	);
};

export default PostsState;
