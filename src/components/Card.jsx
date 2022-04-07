import { StyledCard } from '../styles/Card.styled';
import { Flex } from '../styles/Flex';
import 'twin.macro';
import 'styled-components/macro';

export default function Card({ item: { id, title, body, image } }) {
	return (
		<StyledCard>
			<Flex rowReverse={id % 2 === 0} tw="md:justify-between">
				<div tw="space-y-5 mb-10 md:w-1/2">
					<h2> {title} </h2>
					<p> {body}</p>
				</div>
				<div tw="md:w-[40%]">
					<img src={`./images/${image}`} alt="content img" />
				</div>
			</Flex>
		</StyledCard>
	);
}
