import { StyleHeader, Nav, Logo, Image } from '../styles/Header.styled';
import { Button } from '../styles/Button.styled';
import { Container } from '../styles/Container.styled';
import { Flex } from '../styles/Flex';
import 'twin.macro';
import 'styled-components/macro';

export default function Header() {
	return (
		<StyleHeader>
			<Container>
				<Nav>
					<Logo src="./images/logo.svg"></Logo>
					<Button secondary>Try It Free</Button>
				</Nav>

				<Flex>
					<div tw="text-center space-y-5 md:text-left">
						<h1>Build The Community Your Fans Will Love</h1>

						<p>
							Huddle re-imagines the way we build communities. You have a voice,
							but so does your audience. Create connections with your users as
							you engage in genuine discussion.
						</p>
						<Button primary>Get Started For Free</Button>
					</div>
					<Image src="./images/illustration-mockups.svg" alt="" />
				</Flex>
			</Container>
		</StyleHeader>
	);
}
