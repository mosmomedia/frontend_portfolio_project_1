import { ThemeProvider } from 'styled-components';
import { Container } from './styles/Container.styled';

import Header from './components/Header';
import Footer from './components/Footer';
import Content from './content';
import Card from './components/Card';

import { GlobalStyles } from 'twin.macro';
import StyleBase from './styles/Global';

const theme = {
	colors: {
		header: '#ebfbff',
		body: '#fff',
		footer: '#003333',
	},
	mobile: '768px',
};

function App() {
	return (
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyles />
				<StyleBase />
				<Header />
				<Container>
					{Content.map((item, idx) => (
						<Card key={idx} item={item} />
					))}
				</Container>
			</>
			<Footer></Footer>
		</ThemeProvider>
	);
}

export default App;
