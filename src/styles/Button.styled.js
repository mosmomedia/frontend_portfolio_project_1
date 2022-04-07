import tw, { styled } from 'twin.macro';

export const Button = styled.button`
	${tw`rounded-[3rem] border-0 cursor-pointer shadow-sm text-base font-bold py-4 px-14 bg-indigo-500 text-white`}

	&:hover {
		${tw`opacity-90 scale-95`}
	}

	${({ primary }) => primary && tw`bg-primary text-primary`}
	${({ secondary }) => secondary && tw`bg-secondary text-secondary`}
`;
