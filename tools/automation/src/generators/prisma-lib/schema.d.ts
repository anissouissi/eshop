export interface PrismaLibGeneratorSchema {
  name: string;
  provider: 'postgresql' | 'mongodb';
  databaseUrlEnvKey: string;
}
