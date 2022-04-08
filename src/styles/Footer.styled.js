import tw, { styled } from 'twin.macro';

export const StyledFooter = styled.footer`
	${tw`bg-footer text-white pt-24 pb-14`}

	img {
		${tw`mx-auto mb-10 md:mx-0`}
	}

	ul {
		${tw`space-y-4 mb-4`}
	}

	ul li {
		${tw`text-center md:text-left`}
	}

	p {
		${tw`text-center md:text-left`}
	}

	.footerLogo,
	.left_section,
	p {
		${tw`md:pl-3`}
	}

	.left_section {
		${tw`md:w-3/5`}
	}

	.right_section {
		${tw`md:flex md:flex-row md:space-x-10 md:pr-3`}
	}
`;
