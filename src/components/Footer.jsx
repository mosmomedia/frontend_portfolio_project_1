import { Container } from '../styles/Container.styled';
import { Flex } from '../styles/Flex';
import { StyledFooter } from '../styles/Footer.styled';
import 'twin.macro';
import 'styled-components/macro';

export default function Footer() {
	return (
		<StyledFooter>
			<Container>
				<div className="footerLogo">
					<img src="./images/logo_white.svg" alt="" />
				</div>

				<Flex tw="md:space-x-10" flexBetween>
					<div className="left_section">
						<ul>
							<li>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua
							</li>
							<li>+1-543-123-4567</li>
							<li>example@huddle.com</li>
						</ul>
					</div>
					<div className="right_section">
						<ul>
							<li>About Us</li>
							<li>What We Do</li>
							<li>FAQ</li>
						</ul>
						<ul>
							<li>Career</li>
							<li>Blog</li>
							<li>Contact Us</li>
						</ul>
					</div>
				</Flex>
				<p>&copy; 2021 Huddle. All rights reserved</p>
			</Container>
		</StyledFooter>
	);
}
