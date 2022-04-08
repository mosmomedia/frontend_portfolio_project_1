import tw, { styled } from 'twin.macro';

export const StyleHeader = styled.div`
	${tw`bg-header  py-10`}
	.leftItem {
		${tw`text-center space-y-5 px-5 md:text-left lg:max-w-[50%]`}
	}
`;

export const Nav = styled.nav`
	${tw`flex flex-col items-center mb-5 md:flex-row md:justify-between`}
`;

export const Logo = styled.img`
	${tw`mb-14 md:mb-0`}
`;

export const Image = styled.img`
	${tw`w-4/5 mt-10 mb-8 md:w-[40%]`}
`;
