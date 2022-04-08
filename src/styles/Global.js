import { createGlobalStyle } from 'styled-components';
import tw from 'twin.macro';

const StyleBase = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

* {
	${tw`box-border`}
}

body {
	${tw`bg-body text-[hsl(192, 100%, 9%)] text-xl m-0`}
	font-family: 'Poppins', sans-serif;
}

h1{
	${tw`text-3xl md:text-2xl lg:text-3xl`}
}

h2{
	${tw`text-2xl`}
}

li{
	${tw`text-base lg:text-lg xl:text-xl`}
}

p {
	${tw`opacity-70 text-base lg:text-lg xl:text-xl `}
}

img {
	${tw`max-w-full`}
}
`;

export default StyleBase;
