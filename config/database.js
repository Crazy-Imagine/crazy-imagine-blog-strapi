module.exports = ({ env }) => ({
	defaultConnection: 'default',
	connections: {
		default: {
			connector: 'bookshelf',
			settings: {
				client: 'postgres',
				host: env('DATABASE_HOST', 'blogadmin.cocsqhxalrmd.us-east-1.rds.amazonaws.com'),
				port: env.int('DATABASE_PORT', 5432),
				database: env('DATABASE_NAME', 'blogadmin'),
				username: env('DATABASE_USERNAME', 'postgres'),
				password: env('DATABASE_PASSWORD', 'postgres'),
			},
			options: {
				ssl: false,
			},
		},
	},
});
