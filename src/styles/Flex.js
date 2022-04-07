import tw, { styled } from 'twin.macro';

export const Flex = styled.div`
	${tw`flex flex-col items-center md:flex-row`}

	${({ colReverse }) => colReverse && tw`flex-col-reverse`}
	${({ rowReverse }) => rowReverse && tw`md:flex-row-reverse`}
`;
