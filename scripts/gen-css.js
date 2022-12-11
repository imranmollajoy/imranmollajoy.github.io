let newGen = [
	{
		name: 'android',
		colors: {
			light: ['#006e09', '#ffffff', '#96fa85', '#002201'],
			dark: ['#7bdc6c', '#003a02', '#005305', '#96fa85']
		}
	},
	{
		name: 'comparison',
		colors: {
			light: ['#9a3a75', '#ffffff', '#ffd8e9', '#3c0029'],
			dark: ['#ffaed8', '#600444', '#7d215c', '#ffd8e9']
		}
	},
	{
		name: 'science',
		colors: {
			light: ['#6f4da0', '#ffffff', '#eddcff', '#280056'],
			dark: ['#d7baff', '#3f1c6e', '#563587', '#eddcff']
		}
	},
	{
		name: 'security',
		colors: {
			light: ['#b02f08', '#ffffff', '#ffdbd2', '#3c0800'],
			dark: ['#ffb4a1', '#611300', '#891e00', '#ffdbd2']
		}
	},
	{
		name: 'technology',
		colors: {
			light: ['#134de8', '#ffffff', '#dde1ff', '#001453'],
			dark: ['#b7c4ff', '#002584', '#0037b8', '#dde1ff']
		}
	},
	{
		name: 'web-development',
		colors: {
			light: ['#855400', '#ffffff', '#ffddb7', '#2a1700'],
			dark: ['#ffb95c', '#462a00', '#653e00', '#ffddb7']
		}
	},
	{
		name: 'uncategorized',
		colors: {
			light: ['#006b56', '#ffffff', '#7df8d5', '#002018'],
			dark: ['#5fdbba', '#00382c', '#005141', '#7df8d5']
		}
	}
];
let cats = ['android', 'comparison', 'science', 'security', 'technology', 'web-development'];
var body = '';
var darkBody = '';
var classes = '';

newGen.forEach((element) => {
	const { name, colors } = element;
	const { light, dark } = colors;
	body += `
		--${name}: ${light[0]};
		--on-${name}: ${light[1]}; 
		--${name}-container: ${light[2]}; 
		--on-${name}-container: ${light[3]}; 
	`;
	darkBody += `
		--${name}: ${dark[0]};
		--on-${name}: ${dark[1]}; 
		--${name}-container: ${dark[2]}; 
		--on-${name}-container: ${dark[3]}; 
	`;
	classes += `
	.${name}{
		color: var(--on-${name}) !important;
		background-color: var(--${name}) !important
	} 
	.${name}-container{
		color: var(--on-${name}-container) !important; 
		background-color: var(--${name}-container) !important
	}
	`;
});

var final = `
	body{
		${body}
	}
	body.dark{
		${darkBody}
	}
	${classes}
`;

console.log(final);
