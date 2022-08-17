import { publish } from 'gh-pages';

publish(
	'build', // path to public directory
	{
		branch: 'gh-pages',
		repo: 'https://github.com/imranmollajoy/imranmollajoy.github.io', // Update to point to your repository
		user: {
			name: 'Imran Molla Joy', // update to use your name
			email: 'imranmollajoy@gmail.com' // Update to use your email
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);
