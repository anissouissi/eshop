import {
  formatFiles,
  generateFiles,
  readProjectConfiguration,
  Tree,
  updateJson,
} from '@nx/devkit';
import * as path from 'path';
import { PrismaLibGeneratorSchema } from './schema';
import { libraryGenerator } from '@nx/js';
import { join } from 'path';

export async function prismaLibGenerator(
  tree: Tree,
  options: PrismaLibGeneratorSchema
) {
  // generate data-access-db library
  let projectRoot = `libs/api/${options.name}/data-access-db`;
  let projectName = `api-${options.name}-data-access-db`;
  await libraryGenerator(tree, {
    ...options,
    name: projectName,
    directory: projectRoot,
    projectNameAndRootFormat: 'as-provided',
    unitTestRunner: 'none',
    bundler: 'swc',
    tags: 'scope:api',
  });
  // generate data-access-db custom files
  let projectConfig = readProjectConfiguration(tree, projectName);
  tree.delete(join(projectConfig.root, './src/lib'));
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);
  // update project.json targets
  updateDataAccessLibTargets(tree, projectRoot, options);

  // generate generated-db-types library
  projectRoot = `libs/api/${options.name}/generated-db-types`;
  projectName = `api-${options.name}-generated-db-types`;
  await libraryGenerator(tree, {
    ...options,
    name: projectName,
    directory: projectRoot,
    projectNameAndRootFormat: 'as-provided',
    unitTestRunner: 'none',
    bundler: 'swc',
    tags: 'scope:api',
  });
  projectConfig = readProjectConfiguration(tree, projectName);
  tree.delete(join(projectConfig.root, './src/lib'));

  await formatFiles(tree);
}

function updateDataAccessLibTargets(
  host: Tree,
  projectRoot: string,
  options: PrismaLibGeneratorSchema
): void {
  updateJson(host, `./${projectRoot}/project.json`, (json) => {
    const targets = json.targets;
    targets['generate-db-types'] = {
      executor: '@aso/automation:prisma-generate',
      options: {
        schemaPath: `${projectRoot}/src/lib/schema.prisma`,
      },
    };
    targets['push-db'] = {
      executor: '@aso/automation:prisma-push',
      options: { schemaPath: `${projectRoot}/src/lib/schema.prisma` },
    };
    if (options.provider === 'postgresql') {
      targets['generate-db-migration'] = {
        executor: '@aso/automation:prisma-migrate',
        options: { schemaPath: `${projectRoot}/src/lib/schema.prisma` },
      };
    }

    return json;
  });
}

export default prismaLibGenerator;
