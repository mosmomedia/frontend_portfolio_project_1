import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/Global';
import { Container } from './styles/Container.styled';

import Header from './components/Header';
import Footer from './components/Footer';
import Content from './content';
import Card from './components/Card';

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
