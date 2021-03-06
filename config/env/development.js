'use strict';

module.exports = {
	db: 'mongodb://localhost/obusmeanjs-dev',
	app: {
		title: 'obusmeanjs - Development Environment'
	},
	facebook: {
		clientID: process.env.FACEBOOK_ID || '493412360836848',
		clientSecret: process.env.FACEBOOK_SECRET || '6f125918a1031ad72e20a52cb1a0020c',
		callbackURL: '/auth/facebook/callback'
	},
	twitter: {
		clientID: process.env.TWITTER_KEY || 'wRUKyFKALJqlvZTWTn5eZdluW',
		clientSecret: process.env.TWITTER_SECRET || 'gCkpNAOv50OluNYlqqEJiuNekGnah7b8mwFyMerbPtSGhs6NQw',
		callbackURL: '/auth/twitter/callback'
	},
	google: {
		clientID: process.env.GOOGLE_ID || 'APP_ID',
		clientSecret: process.env.GOOGLE_SECRET || 'APP_SECRET',
		callbackURL: '/auth/google/callback'
	},
	linkedin: {
		clientID: process.env.LINKEDIN_ID || 'APP_ID',
		clientSecret: process.env.LINKEDIN_SECRET || 'APP_SECRET',
		callbackURL: '/auth/linkedin/callback'
	},
	github: {
		clientID: process.env.GITHUB_ID || 'APP_ID',
		clientSecret: process.env.GITHUB_SECRET || 'APP_SECRET',
		callbackURL: '/auth/github/callback'
	},
	mailer: {
		from: process.env.MAILER_FROM || 'MAILER_FROM',
		options: {
			service: process.env.MAILER_SERVICE_PROVIDER || 'MAILER_SERVICE_PROVIDER',
			auth: {
				user: process.env.MAILER_EMAIL_ID || 'MAILER_EMAIL_ID',
				pass: process.env.MAILER_PASSWORD || 'MAILER_PASSWORD'
			}
		}
	}
};
