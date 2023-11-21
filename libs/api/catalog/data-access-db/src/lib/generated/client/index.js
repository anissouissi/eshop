
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
exports.Prisma.ProductScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  price: 'price',
  picture: 'picture',
  brand: 'brand',
  stock: 'stock'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};


exports.Prisma.ModelName = {
  Product: 'Product'
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
      "value": "/Users/anis/dev/aso/libs/api/catalog/data-access-db/src/lib/generated/client",
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
  "activeProvider": "mongodb",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "CATALOG_DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "ZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgPSAibW9uZ29kYiIKICB1cmwgICAgICA9IGVudigiQ0FUQUxPR19EQVRBQkFTRV9VUkwiKQp9CgpnZW5lcmF0b3IgY2xpZW50IHsKICBwcm92aWRlciA9ICJwcmlzbWEtY2xpZW50LWpzIgogIG91dHB1dCA9ICIuL2dlbmVyYXRlZC9jbGllbnQiCn0KCm1vZGVsIFByb2R1Y3QgewogIGlkIFN0cmluZyBAaWQgQGRlZmF1bHQoYXV0bygpKSBAbWFwKCJfaWQiKSBAZGIuT2JqZWN0SWQKCiAgLy8vIEBWYWxpZGF0b3IuSXNTdHJpbmcoKQogIC8vLyBAVmFsaWRhdG9yLk1heExlbmd0aCg1MCkKICBuYW1lIFN0cmluZwoKICAvLy8gQFZhbGlkYXRvci5Jc1N0cmluZygpCiAgZGVzY3JpcHRpb24gU3RyaW5nCgogIC8vLyBAVmFsaWRhdG9yLklzTnVtYmVyKCkKICAvLy8gQFZhbGlkYXRvci5NaW4oMSkKICBwcmljZSBGbG9hdAoKICAvLy8gQFZhbGlkYXRvci5Jc1N0cmluZygpCiAgcGljdHVyZSBTdHJpbmcKCiAgLy8vIEBWYWxpZGF0b3IuSXNTdHJpbmcoKQogIGJyYW5kIFN0cmluZwoKICAvLy8gQFZhbGlkYXRvci5Jc051bWJlcigpCiAgc3RvY2sgSW50Cn0KCmdlbmVyYXRvciBuZXN0Z3JhcGhxbCB7CiAgICBwcm92aWRlciAgICAgICAgICAgICAgICA9ICJub2RlIG5vZGVfbW9kdWxlcy9wcmlzbWEtbmVzdGpzLWdyYXBocWwiCiAgICBvdXRwdXQgICAgICAgICAgICAgICAgICA9ICIuLi8uLi8uLi9nZW5lcmF0ZWQtZGItdHlwZXMvc3JjIgogICAgcHVyZ2VPdXRwdXQgICAgICAgICAgICAgICAgICAgPSBmYWxzZQogICAgY29tYmluZVNjYWxhckZpbHRlcnMgICAgICAgICAgPSB0cnVlCiAgICBlbWl0U2luZ2xlICAgICAgICAgICAgICAgICAgICA9IHRydWUKICAgIG5vQXRvbWljT3BlcmF0aW9ucyAgICAgICAgICAgID0gdHJ1ZQogICAgLy8gZmllbGQgdmFsaWRhdG9yCiAgICBmaWVsZHNfVmFsaWRhdG9yX2lucHV0ICAgICAgICA9IHRydWUKICAgIGZpZWxkc19WYWxpZGF0b3Jfb3V0cHV0ICAgICAgID0gdHJ1ZQogICAgZmllbGRzX1ZhbGlkYXRvcl9tb2RlbCAgICAgICAgPSB0cnVlCiAgICBmaWVsZHNfVmFsaWRhdG9yX2Zyb20gICAgICAgICA9ICJjbGFzcy12YWxpZGF0b3IiCiAgICAvLyBBcmdzIHdoZXJlfGRhdGEgbmVzdGVkIHZhbGlkYXRvcgogICAgZGVjb3JhdGVfMV90eXBlICAgICAgICAgICAgICAgPSAiKkFyZ3MiCiAgICBkZWNvcmF0ZV8xX2ZpZWxkICAgICAgICAgICAgICA9ICJAKGRhdGF8d2hlcmUpIgogICAgZGVjb3JhdGVfMV9uYW1lICAgICAgICAgICAgICAgPSBWYWxpZGF0ZU5lc3RlZAogICAgZGVjb3JhdGVfMV9mcm9tICAgICAgICAgICAgICAgPSAiY2xhc3MtdmFsaWRhdG9yIgogICAgZGVjb3JhdGVfMV9hcmd1bWVudHMgICAgICAgICAgPSAiW10iCn0K",
  "inlineSchemaHash": "a8a4a162f31172f3d19c7c3a9ba24ff0e85171667527a1158f546e4d7a8876af",
  "noEngine": false
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "libs/api/catalog/data-access-db/src/lib/generated/client",
    "api/catalog/data-access-db/src/lib/generated/client",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"Product\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@Validator.IsString()\\\\n@Validator.MaxLength(50)\"},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@Validator.IsString()\"},{\"name\":\"price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@Validator.IsNumber()\\\\n@Validator.Min(1)\"},{\"name\":\"picture\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@Validator.IsString()\"},{\"name\":\"brand\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@Validator.IsString()\"},{\"name\":\"stock\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@Validator.IsNumber()\"}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
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
path.join(process.cwd(), "libs/api/catalog/data-access-db/src/lib/generated/client/libquery_engine-darwin.dylib.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "libs/api/catalog/data-access-db/src/lib/generated/client/schema.prisma")
