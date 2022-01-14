module.exports = {
  clearMocks: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/main/**/*.ts',
    '!<rootDir>/src/infra/prisma-client.ts',
    '!<rootDir>/src/shared/errors/globalErrorHandling.ts',
    '!<rootDir>/src/server.ts',
  ],
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  roots: ['<rootDir>/src', '<rootDir>/tests'],
  testMatch: ['**/*.spec.ts'],
  transform: {
    '\\.ts$': 'ts-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/singleton.ts'],
};
