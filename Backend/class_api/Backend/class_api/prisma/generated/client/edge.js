
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/edge.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
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





/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable',
  Snapshot: 'Snapshot'
});

exports.Prisma.DocumentsScalarFieldEnum = {
  documentId: 'documentId',
  docStatus_id: 'docStatus_id',
  codedFile: 'codedFile',
  fileType: 'fileType',
  service_id: 'service_id'
};

exports.Prisma.DocumentStatusListScalarFieldEnum = {
  docStatusId: 'docStatusId',
  status: 'status',
  description: 'description'
};

exports.Prisma.ReceivingUnitScalarFieldEnum = {
  receivingUnitId: 'receivingUnitId',
  institutionName: 'institutionName',
  contactNumber: 'contactNumber',
  institutionDirection: 'institutionDirection',
  contactEmail: 'contactEmail',
  principalActivities: 'principalActivities'
};

exports.Prisma.ServiceScalarFieldEnum = {
  serviceId: 'serviceId',
  student_id: 'student_id',
  serviceType_id: 'serviceType_id',
  servicesStartDate: 'servicesStartDate',
  service_status_id: 'service_status_id',
  supervisorName: 'supervisorName',
  supervisorContactNumber: 'supervisorContactNumber',
  programObjective: 'programObjective',
  supervisorPosition: 'supervisorPosition',
  receivingUnit_id: 'receivingUnit_id'
};

exports.Prisma.ServiceActivitiesScalarFieldEnum = {
  serviceActivitieId: 'serviceActivitieId',
  service_id: 'service_id',
  description: 'description',
  postingDate: 'postingDate',
  hours: 'hours'
};

exports.Prisma.ServiceStatusListScalarFieldEnum = {
  serviceStatusId: 'serviceStatusId',
  status: 'status',
  description: 'description'
};

exports.Prisma.ServiceTypeScalarFieldEnum = {
  serviceTypeId: 'serviceTypeId',
  type: 'type',
  description: 'description',
  quantityToComplete: 'quantityToComplete'
};

exports.Prisma.StudentScalarFieldEnum = {
  studentId: 'studentId',
  name: 'name',
  email: 'email',
  phoneNumber: 'phoneNumber',
  careerInCourse: 'careerInCourse',
  classGroup: 'classGroup',
  enrollmentNumber: 'enrollmentNumber'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  Documents: 'Documents',
  DocumentStatusList: 'DocumentStatusList',
  ReceivingUnit: 'ReceivingUnit',
  Service: 'Service',
  ServiceActivities: 'ServiceActivities',
  ServiceStatusList: 'ServiceStatusList',
  ServiceType: 'ServiceType',
  Student: 'Student'
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
      "value": "C:\\Users\\MarcoHidalgo\\Desktop\\SK\\app_class\\Backend\\class_api\\Backend\\class_api\\prisma\\generated\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [
      "multiSchema",
      "relationJoins"
    ],
    "sourceFilePath": "C:\\Users\\MarcoHidalgo\\Desktop\\SK\\app_class\\Backend\\class_api\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../../../.env",
    "schemaEnvPath": "../../../../../.env"
  },
  "relativePath": "../../../../../prisma",
  "clientVersion": "6.6.0",
  "engineVersion": "f676762280b54cd07c770017ed3711ddde35f37a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "sqlserver",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider        = \"prisma-client-js\"\n  output          = \"../Backend/class_api/prisma/generated/client\"\n  previewFeatures = [\"multiSchema\", \"relationJoins\"]\n}\n\ndatasource db {\n  provider = \"sqlserver\"\n  url      = env(\"DATABASE_URL\")\n  schemas  = [\"cs\"]\n}\n\nmodel Documents {\n  documentId         Int                 @id(map: \"PK__Document__EFAAAD857D09D75C\") @default(autoincrement())\n  docStatus_id       Int?\n  codedFile          String?             @map(\"64codedFile\") @db.NVarChar(Max)\n  fileType           String?             @db.NVarChar(50)\n  service_id         Int?\n  DocumentStatusList DocumentStatusList? @relation(fields: [docStatus_id], references: [docStatusId], onDelete: NoAction, onUpdate: NoAction, map: \"FK__Documents__docSt__46E78A0C\")\n  Service            Service?            @relation(fields: [service_id], references: [serviceId], onDelete: NoAction, onUpdate: NoAction, map: \"FK__Documents__servi__47DBAE45\")\n\n  @@schema(\"cs\")\n}\n\nmodel DocumentStatusList {\n  docStatusId Int         @id(map: \"PK__Document__92AD4D07B714111F\") @default(autoincrement())\n  status      String?     @db.VarChar(100)\n  description String?     @db.NVarChar(Max)\n  Documents   Documents[]\n\n  @@schema(\"cs\")\n}\n\nmodel ReceivingUnit {\n  receivingUnitId      Int       @id(map: \"PK__Receivin__D50C1D3AB820744C\") @default(autoincrement())\n  institutionName      String?   @db.NVarChar(255)\n  contactNumber        String?   @db.NVarChar(50)\n  institutionDirection String?   @db.NVarChar(255)\n  contactEmail         String?   @db.NVarChar(255)\n  principalActivities  String?   @db.NVarChar(Max)\n  Service              Service[]\n\n  @@schema(\"cs\")\n}\n\nmodel Service {\n  serviceId               Int                 @id(map: \"PK__Service__455070DFF7DE738E\") @default(autoincrement())\n  student_id              Int?\n  serviceType_id          Int?\n  servicesStartDate       DateTime?           @db.Date\n  service_status_id       Int?\n  supervisorName          String?             @db.NVarChar(100)\n  supervisorContactNumber String?             @db.NVarChar(50)\n  programObjective        String?             @db.NVarChar(Max)\n  supervisorPosition      String?             @db.NVarChar(100)\n  receivingUnit_id        Int?\n  Documents               Documents[]\n  ReceivingUnit           ReceivingUnit?      @relation(fields: [receivingUnit_id], references: [receivingUnitId], onDelete: NoAction, onUpdate: NoAction, map: \"FK__Service__receivi__440B1D61\")\n  ServiceType             ServiceType?        @relation(fields: [serviceType_id], references: [serviceTypeId], onDelete: NoAction, onUpdate: NoAction, map: \"FK__Service__service__4222D4EF\")\n  ServiceStatusList       ServiceStatusList?  @relation(fields: [service_status_id], references: [serviceStatusId], onDelete: NoAction, onUpdate: NoAction, map: \"FK__Service__service__4316F928\")\n  Student                 Student?            @relation(fields: [student_id], references: [studentId], onDelete: NoAction, onUpdate: NoAction, map: \"FK__Service__student__412EB0B6\")\n  ServiceActivities       ServiceActivities[]\n\n  @@schema(\"cs\")\n}\n\nmodel ServiceActivities {\n  serviceActivitieId Int       @id(map: \"PK__ServiceA__6ED850E9DF0B16F3\") @default(autoincrement())\n  service_id         Int?\n  description        String?   @db.NVarChar(Max)\n  postingDate        DateTime? @db.Date\n  hours              Int?\n  Service            Service?  @relation(fields: [service_id], references: [serviceId], onDelete: NoAction, onUpdate: NoAction, map: \"FK__ServiceAc__servi__4AB81AF0\")\n\n  @@schema(\"cs\")\n}\n\nmodel ServiceStatusList {\n  serviceStatusId Int       @id(map: \"PK__ServiceS__D08F36E54279C1DF\") @default(autoincrement())\n  status          String?   @db.VarChar(100)\n  description     String?   @db.NVarChar(Max)\n  Service         Service[]\n\n  @@schema(\"cs\")\n}\n\nmodel ServiceType {\n  serviceTypeId      Int       @id(map: \"PK__ServiceT__FB4CEA39A820CD31\") @default(autoincrement())\n  type               String?   @db.VarChar(100)\n  description        String?   @db.NVarChar(Max)\n  quantityToComplete Int?\n  Service            Service[]\n\n  @@schema(\"cs\")\n}\n\nmodel Student {\n  studentId        Int       @id(map: \"PK__Student__4D11D63C743763C7\") @default(autoincrement())\n  name             String?   @db.NVarChar(100)\n  email            String?   @db.NVarChar(100)\n  phoneNumber      String?   @db.VarChar(50)\n  careerInCourse   String?   @db.NVarChar(100)\n  classGroup       String?   @db.NVarChar(50)\n  enrollmentNumber String?   @db.NVarChar(50)\n  Service          Service[]\n\n  @@schema(\"cs\")\n}\n",
  "inlineSchemaHash": "c77615c171a31227d46060eb70a7c0689fd71d0bb82b342b4b979df4bd16195e",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Documents\":{\"dbName\":null,\"schema\":\"cs\",\"fields\":[{\"name\":\"documentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"docStatus_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"codedFile\",\"dbName\":\"64codedFile\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"NVarChar\",[\"Max\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fileType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"NVarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"service_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DocumentStatusList\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DocumentStatusList\",\"nativeType\":null,\"relationName\":\"DocumentStatusListToDocuments\",\"relationFromFields\":[\"docStatus_id\"],\"relationToFields\":[\"docStatusId\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Service\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Service\",\"nativeType\":null,\"relationName\":\"DocumentsToService\",\"relationFromFields\":[\"service_id\"],\"relationToFields\":[\"serviceId\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"DocumentStatusList\":{\"dbName\":null,\"schema\":\"cs\",\"fields\":[{\"name\":\"docStatusId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"NVarChar\",[\"Max\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Documents\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Documents\",\"nativeType\":null,\"relationName\":\"DocumentStatusListToDocuments\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ReceivingUnit\":{\"dbName\":null,\"schema\":\"cs\",\"fields\":[{\"name\":\"receivingUnitId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"institutionName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"NVarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contactNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"NVarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"institutionDirection\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"NVarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contactEmail\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"NVarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"principalActivities\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"NVarChar\",[\"Max\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Service\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Service\",\"nativeType\":null,\"relationName\":\"ReceivingUnitToService\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Service\":{\"dbName\":null,\"schema\":\"cs\",\"fields\":[{\"name\":\"serviceId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"student_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"serviceType_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"servicesStartDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"service_status_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"supervisorName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"NVarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"supervisorContactNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"NVarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"programObjective\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"NVarChar\",[\"Max\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"supervisorPosition\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"NVarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"receivingUnit_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Documents\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Documents\",\"nativeType\":null,\"relationName\":\"DocumentsToService\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ReceivingUnit\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ReceivingUnit\",\"nativeType\":null,\"relationName\":\"ReceivingUnitToService\",\"relationFromFields\":[\"receivingUnit_id\"],\"relationToFields\":[\"receivingUnitId\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ServiceType\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ServiceType\",\"nativeType\":null,\"relationName\":\"ServiceToServiceType\",\"relationFromFields\":[\"serviceType_id\"],\"relationToFields\":[\"serviceTypeId\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ServiceStatusList\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ServiceStatusList\",\"nativeType\":null,\"relationName\":\"ServiceToServiceStatusList\",\"relationFromFields\":[\"service_status_id\"],\"relationToFields\":[\"serviceStatusId\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Student\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Student\",\"nativeType\":null,\"relationName\":\"ServiceToStudent\",\"relationFromFields\":[\"student_id\"],\"relationToFields\":[\"studentId\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ServiceActivities\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ServiceActivities\",\"nativeType\":null,\"relationName\":\"ServiceToServiceActivities\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ServiceActivities\":{\"dbName\":null,\"schema\":\"cs\",\"fields\":[{\"name\":\"serviceActivitieId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"service_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"NVarChar\",[\"Max\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"postingDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hours\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Service\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Service\",\"nativeType\":null,\"relationName\":\"ServiceToServiceActivities\",\"relationFromFields\":[\"service_id\"],\"relationToFields\":[\"serviceId\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ServiceStatusList\":{\"dbName\":null,\"schema\":\"cs\",\"fields\":[{\"name\":\"serviceStatusId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"NVarChar\",[\"Max\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Service\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Service\",\"nativeType\":null,\"relationName\":\"ServiceToServiceStatusList\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ServiceType\":{\"dbName\":null,\"schema\":\"cs\",\"fields\":[{\"name\":\"serviceTypeId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"NVarChar\",[\"Max\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"quantityToComplete\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Service\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Service\",\"nativeType\":null,\"relationName\":\"ServiceToServiceType\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Student\":{\"dbName\":null,\"schema\":\"cs\",\"fields\":[{\"name\":\"studentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"NVarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"NVarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phoneNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"careerInCourse\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"NVarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"classGroup\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"NVarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"enrollmentNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"NVarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Service\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Service\",\"nativeType\":null,\"relationName\":\"ServiceToStudent\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

