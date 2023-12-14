import { formatFiles, generateFiles, names, Tree } from '@nx/devkit';
import * as path from 'path';
import { NestGraphqlFeatureLibGeneratorSchema } from './schema';
import { libraryGenerator } from '@nx/js';

export async function nestGraphqlFeatureLibGenerator(
  tree: Tree,
  options: NestGraphqlFeatureLibGeneratorSchema
) {
  options.className = names(options.name).className;
  options.fileName = names(options.name).fileName;
  options.propertyName = names(options.name).propertyName;

  // generate feature library
  const projectRoot = `libs/api/feature-${options.fileName}`;
  const projectName = `api-feature-${options.fileName}`;
  await libraryGenerator(tree, {
    ...options,
    name: projectName,
    directory: projectRoot,
    projectNameAndRootFormat: 'as-provided',
    unitTestRunner: 'jest',
    bundler: 'swc',
    tags: 'scope:api',
  });
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);
  await formatFiles(tree);
}

export default nestGraphqlFeatureLibGenerator;
