module.exports = {
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/setUpTests.ts'],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
	transformIgnorePatterns: ['/node_modules/'],
	testRegex: '/tests/.*\\.(ts|tsx)$',
	clearMocks: true,
};
