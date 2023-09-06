import * as tsconfig from './tsconfig.json';
import { pathsToModuleNameMapper } from 'ts-jest';

const moduleNameMapper = pathsToModuleNameMapper(
	tsconfig.compilerOptions.paths,
	{
		prefix: '<rootDir>/'
	}
);

const jestConfig = {
	setupFilesAfterEnv: ['./jest.setup.ts'],
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.(ts|tsx|js|jsx)?$': 'ts-jest'
	},
	moduleNameMapper,
	globals: {
		'ts-jest': {
			tsconfig: 'tsconfig.jest.json'
		}
	}
};

export default jestConfig;
