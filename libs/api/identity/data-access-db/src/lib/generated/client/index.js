
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
} = require('./runtime/library')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.6.0
 * Query Engine version: e95e739751f42d8ca026f6b910f5a2dc5adeaeee
 */
Prisma.prismaVersion = {
  client: "5.6.0",
  engine: "e95e739751f42d8ca026f6b910f5a2dc5adeaeee"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  name: 'name',
  password: 'password'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  User: 'User'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/anis/dev/aso/libs/api/identity/data-access-db/src/lib/generated/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null
  },
  "relativePath": "../..",
  "clientVersion": "5.6.0",
  "engineVersion": "e95e739751f42d8ca026f6b910f5a2dc5adeaeee",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "IDENTITY_DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "ZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgPSAicG9zdGdyZXNxbCIKICB1cmwgICAgICA9IGVudigiSURFTlRJVFlfREFUQUJBU0VfVVJMIikKfQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgPSAiLi9nZW5lcmF0ZWQvY2xpZW50Igp9Cgptb2RlbCBVc2VyIHsKICBpZCBTdHJpbmcgQGlkIEBkZWZhdWx0KHV1aWQoKSkKCiAgLy8vIEBWYWxpZGF0b3IuSXNFbWFpbCgpCiAgZW1haWwgU3RyaW5nIEB1bmlxdWUKCiAgLy8vIEBWYWxpZGF0b3IuSXNTdHJpbmcoKQogIC8vLyBAVmFsaWRhdG9yLk1heExlbmd0aCgxMDApCiAgLy8vIEBWYWxpZGF0b3IuTWluTGVuZ3RoKDMpCiAgbmFtZSBTdHJpbmc/CgogIC8vLyBAVmFsaWRhdG9yLklzU3RyaW5nKCkKICAvLy8gQFZhbGlkYXRvci5NYXhMZW5ndGgoMTAwKQogIC8vLyBAVmFsaWRhdG9yLk1pbkxlbmd0aCg4KQogIC8vLyBASGlkZUZpZWxkKCkKICBwYXNzd29yZCBTdHJpbmcKfQoKZ2VuZXJhdG9yIG5lc3RncmFwaHFsIHsKICAgIHByb3ZpZGVyICAgICAgICAgICAgICAgID0gIm5vZGUgbm9kZV9tb2R1bGVzL3ByaXNtYS1uZXN0anMtZ3JhcGhxbCIKICAgIG91dHB1dCAgICAgICAgICAgICAgICAgID0gIi4uLy4uLy4uL2dlbmVyYXRlZC1kYi10eXBlcy9zcmMiCiAgICBwdXJnZU91dHB1dCAgICAgICAgICAgICAgICAgICA9IGZhbHNlCiAgICBjb21iaW5lU2NhbGFyRmlsdGVycyAgICAgICAgICA9IHRydWUKICAgIGVtaXRTaW5nbGUgICAgICAgICAgICAgICAgICAgID0gdHJ1ZQogICAgbm9BdG9taWNPcGVyYXRpb25zICAgICAgICAgICAgPSB0cnVlCiAgICAvLyBmaWVsZCB2YWxpZGF0b3IKICAgIGZpZWxkc19WYWxpZGF0b3JfaW5wdXQgICAgICAgID0gdHJ1ZQogICAgZmllbGRzX1ZhbGlkYXRvcl9vdXRwdXQgICAgICAgPSB0cnVlCiAgICBmaWVsZHNfVmFsaWRhdG9yX21vZGVsICAgICAgICA9IHRydWUKICAgIGZpZWxkc19WYWxpZGF0b3JfZnJvbSAgICAgICAgID0gImNsYXNzLXZhbGlkYXRvciIKICAgIC8vIEFyZ3Mgd2hlcmV8ZGF0YSBuZXN0ZWQgdmFsaWRhdG9yCiAgICBkZWNvcmF0ZV8xX3R5cGUgICAgICAgICAgICAgICA9ICIqQXJncyIKICAgIGRlY29yYXRlXzFfZmllbGQgICAgICAgICAgICAgID0gIkAoZGF0YXx3aGVyZSkiCiAgICBkZWNvcmF0ZV8xX25hbWUgICAgICAgICAgICAgICA9IFZhbGlkYXRlTmVzdGVkCiAgICBkZWNvcmF0ZV8xX2Zyb20gICAgICAgICAgICAgICA9ICJjbGFzcy12YWxpZGF0b3IiCiAgICBkZWNvcmF0ZV8xX2FyZ3VtZW50cyAgICAgICAgICA9ICJbXSIKfQo=",
  "inlineSchemaHash": "975ea33927df193831cc6d7f359b425e23152eed123cc83670d61f1bd488285f",
  "noEngine": false
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "libs/api/identity/data-access-db/src/lib/generated/client",
    "api/identity/data-access-db/src/lib/generated/client",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@Validator.IsEmail()\"},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@Validator.IsString()\\\\n@Validator.MaxLength(100)\\\\n@Validator.MinLength(3)\"},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@Validator.IsString()\\\\n@Validator.MaxLength(100)\\\\n@Validator.MinLength(8)\\\\n@HideField()\"}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined


const { warnEnvConflicts } = require('./runtime/library')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-darwin.dylib.node");
path.join(process.cwd(), "libs/api/identity/data-access-db/src/lib/generated/client/libquery_engine-darwin.dylib.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "libs/api/identity/data-access-db/src/lib/generated/client/schema.prisma")
