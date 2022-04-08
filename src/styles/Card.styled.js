import tw, { styled } from 'twin.macro';

export const StyledCard = styled.div`
	${tw`bg-white rounded-2xl shadow-sm my-10 p-14`}

	img {
		${tw`w-4/5 mx-auto md:w-full`}
	}
`;
