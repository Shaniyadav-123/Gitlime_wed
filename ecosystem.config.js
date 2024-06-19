module.exports = {
	apps: [
		{
			name: 'gitlime-website',
			script: 'index.js',
			watch: '.',
			env: {
				NODE_ENV: 'development',
			},
			env_production: {
				NODE_ENV: 'production',
			},
		},
	],

	deploy: {
		production: {
			user: 'ec2-user',
			host: '3.141.23.23',
			ref: 'origin/master',
			repo: 'git@github.com:gitlimetech/gitlimetech.git',
			path: '/var/www/gitlime/public_html',
			'pre-deploy-local': '',
			'post-deploy':
				'npm install && pm2 reload ecosystem.config.js --env production',
			'pre-setup': '',
		},
	},
};
