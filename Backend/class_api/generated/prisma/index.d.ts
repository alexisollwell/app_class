
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Documents
 * 
 */
export type Documents = $Result.DefaultSelection<Prisma.$DocumentsPayload>
/**
 * Model DocumentStatusList
 * 
 */
export type DocumentStatusList = $Result.DefaultSelection<Prisma.$DocumentStatusListPayload>
/**
 * Model ReceivingUnit
 * 
 */
export type ReceivingUnit = $Result.DefaultSelection<Prisma.$ReceivingUnitPayload>
/**
 * Model Service
 * 
 */
export type Service = $Result.DefaultSelection<Prisma.$ServicePayload>
/**
 * Model ServiceActivities
 * 
 */
export type ServiceActivities = $Result.DefaultSelection<Prisma.$ServiceActivitiesPayload>
/**
 * Model ServiceStatusList
 * 
 */
export type ServiceStatusList = $Result.DefaultSelection<Prisma.$ServiceStatusListPayload>
/**
 * Model ServiceType
 * 
 */
export type ServiceType = $Result.DefaultSelection<Prisma.$ServiceTypePayload>
/**
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model ServiceActivitiesByUser
 * 
 */
export type ServiceActivitiesByUser = $Result.DefaultSelection<Prisma.$ServiceActivitiesByUserPayload>
/**
 * Model TotalActivityHours
 * The underlying view does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export type TotalActivityHours = $Result.DefaultSelection<Prisma.$TotalActivityHoursPayload>
/**
 * Model ServiceProgressView
 * The underlying view does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export type ServiceProgressView = $Result.DefaultSelection<Prisma.$ServiceProgressViewPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Documents
 * const documents = await prisma.documents.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Documents
   * const documents = await prisma.documents.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.documents`: Exposes CRUD operations for the **Documents** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documents
    * const documents = await prisma.documents.findMany()
    * ```
    */
  get documents(): Prisma.DocumentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.documentStatusList`: Exposes CRUD operations for the **DocumentStatusList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DocumentStatusLists
    * const documentStatusLists = await prisma.documentStatusList.findMany()
    * ```
    */
  get documentStatusList(): Prisma.DocumentStatusListDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.receivingUnit`: Exposes CRUD operations for the **ReceivingUnit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReceivingUnits
    * const receivingUnits = await prisma.receivingUnit.findMany()
    * ```
    */
  get receivingUnit(): Prisma.ReceivingUnitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.service`: Exposes CRUD operations for the **Service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.service.findMany()
    * ```
    */
  get service(): Prisma.ServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.serviceActivities`: Exposes CRUD operations for the **ServiceActivities** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServiceActivities
    * const serviceActivities = await prisma.serviceActivities.findMany()
    * ```
    */
  get serviceActivities(): Prisma.ServiceActivitiesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.serviceStatusList`: Exposes CRUD operations for the **ServiceStatusList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServiceStatusLists
    * const serviceStatusLists = await prisma.serviceStatusList.findMany()
    * ```
    */
  get serviceStatusList(): Prisma.ServiceStatusListDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.serviceType`: Exposes CRUD operations for the **ServiceType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServiceTypes
    * const serviceTypes = await prisma.serviceType.findMany()
    * ```
    */
  get serviceType(): Prisma.ServiceTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.serviceActivitiesByUser`: Exposes CRUD operations for the **ServiceActivitiesByUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServiceActivitiesByUsers
    * const serviceActivitiesByUsers = await prisma.serviceActivitiesByUser.findMany()
    * ```
    */
  get serviceActivitiesByUser(): Prisma.ServiceActivitiesByUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.totalActivityHours`: Exposes CRUD operations for the **TotalActivityHours** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TotalActivityHours
    * const totalActivityHours = await prisma.totalActivityHours.findMany()
    * ```
    */
  get totalActivityHours(): Prisma.TotalActivityHoursDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.serviceProgressView`: Exposes CRUD operations for the **ServiceProgressView** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServiceProgressViews
    * const serviceProgressViews = await prisma.serviceProgressView.findMany()
    * ```
    */
  get serviceProgressView(): Prisma.ServiceProgressViewDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Documents: 'Documents',
    DocumentStatusList: 'DocumentStatusList',
    ReceivingUnit: 'ReceivingUnit',
    Service: 'Service',
    ServiceActivities: 'ServiceActivities',
    ServiceStatusList: 'ServiceStatusList',
    ServiceType: 'ServiceType',
    Student: 'Student',
    ServiceActivitiesByUser: 'ServiceActivitiesByUser',
    TotalActivityHours: 'TotalActivityHours',
    ServiceProgressView: 'ServiceProgressView'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "documents" | "documentStatusList" | "receivingUnit" | "service" | "serviceActivities" | "serviceStatusList" | "serviceType" | "student" | "serviceActivitiesByUser" | "totalActivityHours" | "serviceProgressView"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Documents: {
        payload: Prisma.$DocumentsPayload<ExtArgs>
        fields: Prisma.DocumentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentsPayload>
          }
          findFirst: {
            args: Prisma.DocumentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentsPayload>
          }
          findMany: {
            args: Prisma.DocumentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentsPayload>[]
          }
          create: {
            args: Prisma.DocumentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentsPayload>
          }
          createMany: {
            args: Prisma.DocumentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DocumentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentsPayload>
          }
          update: {
            args: Prisma.DocumentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentsPayload>
          }
          deleteMany: {
            args: Prisma.DocumentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DocumentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentsPayload>
          }
          aggregate: {
            args: Prisma.DocumentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocuments>
          }
          groupBy: {
            args: Prisma.DocumentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentsCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentsCountAggregateOutputType> | number
          }
        }
      }
      DocumentStatusList: {
        payload: Prisma.$DocumentStatusListPayload<ExtArgs>
        fields: Prisma.DocumentStatusListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentStatusListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentStatusListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentStatusListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentStatusListPayload>
          }
          findFirst: {
            args: Prisma.DocumentStatusListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentStatusListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentStatusListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentStatusListPayload>
          }
          findMany: {
            args: Prisma.DocumentStatusListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentStatusListPayload>[]
          }
          create: {
            args: Prisma.DocumentStatusListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentStatusListPayload>
          }
          createMany: {
            args: Prisma.DocumentStatusListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DocumentStatusListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentStatusListPayload>
          }
          update: {
            args: Prisma.DocumentStatusListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentStatusListPayload>
          }
          deleteMany: {
            args: Prisma.DocumentStatusListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentStatusListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DocumentStatusListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentStatusListPayload>
          }
          aggregate: {
            args: Prisma.DocumentStatusListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocumentStatusList>
          }
          groupBy: {
            args: Prisma.DocumentStatusListGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentStatusListGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentStatusListCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentStatusListCountAggregateOutputType> | number
          }
        }
      }
      ReceivingUnit: {
        payload: Prisma.$ReceivingUnitPayload<ExtArgs>
        fields: Prisma.ReceivingUnitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReceivingUnitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceivingUnitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReceivingUnitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceivingUnitPayload>
          }
          findFirst: {
            args: Prisma.ReceivingUnitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceivingUnitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReceivingUnitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceivingUnitPayload>
          }
          findMany: {
            args: Prisma.ReceivingUnitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceivingUnitPayload>[]
          }
          create: {
            args: Prisma.ReceivingUnitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceivingUnitPayload>
          }
          createMany: {
            args: Prisma.ReceivingUnitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReceivingUnitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceivingUnitPayload>
          }
          update: {
            args: Prisma.ReceivingUnitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceivingUnitPayload>
          }
          deleteMany: {
            args: Prisma.ReceivingUnitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReceivingUnitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReceivingUnitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceivingUnitPayload>
          }
          aggregate: {
            args: Prisma.ReceivingUnitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReceivingUnit>
          }
          groupBy: {
            args: Prisma.ReceivingUnitGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReceivingUnitGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReceivingUnitCountArgs<ExtArgs>
            result: $Utils.Optional<ReceivingUnitCountAggregateOutputType> | number
          }
        }
      }
      Service: {
        payload: Prisma.$ServicePayload<ExtArgs>
        fields: Prisma.ServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findFirst: {
            args: Prisma.ServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findMany: {
            args: Prisma.ServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          create: {
            args: Prisma.ServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          createMany: {
            args: Prisma.ServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          update: {
            args: Prisma.ServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          deleteMany: {
            args: Prisma.ServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          aggregate: {
            args: Prisma.ServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateService>
          }
          groupBy: {
            args: Prisma.ServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCountAggregateOutputType> | number
          }
        }
      }
      ServiceActivities: {
        payload: Prisma.$ServiceActivitiesPayload<ExtArgs>
        fields: Prisma.ServiceActivitiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceActivitiesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceActivitiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceActivitiesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceActivitiesPayload>
          }
          findFirst: {
            args: Prisma.ServiceActivitiesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceActivitiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceActivitiesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceActivitiesPayload>
          }
          findMany: {
            args: Prisma.ServiceActivitiesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceActivitiesPayload>[]
          }
          create: {
            args: Prisma.ServiceActivitiesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceActivitiesPayload>
          }
          createMany: {
            args: Prisma.ServiceActivitiesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ServiceActivitiesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceActivitiesPayload>
          }
          update: {
            args: Prisma.ServiceActivitiesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceActivitiesPayload>
          }
          deleteMany: {
            args: Prisma.ServiceActivitiesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceActivitiesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ServiceActivitiesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceActivitiesPayload>
          }
          aggregate: {
            args: Prisma.ServiceActivitiesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServiceActivities>
          }
          groupBy: {
            args: Prisma.ServiceActivitiesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceActivitiesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceActivitiesCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceActivitiesCountAggregateOutputType> | number
          }
        }
      }
      ServiceStatusList: {
        payload: Prisma.$ServiceStatusListPayload<ExtArgs>
        fields: Prisma.ServiceStatusListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceStatusListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceStatusListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceStatusListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceStatusListPayload>
          }
          findFirst: {
            args: Prisma.ServiceStatusListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceStatusListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceStatusListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceStatusListPayload>
          }
          findMany: {
            args: Prisma.ServiceStatusListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceStatusListPayload>[]
          }
          create: {
            args: Prisma.ServiceStatusListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceStatusListPayload>
          }
          createMany: {
            args: Prisma.ServiceStatusListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ServiceStatusListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceStatusListPayload>
          }
          update: {
            args: Prisma.ServiceStatusListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceStatusListPayload>
          }
          deleteMany: {
            args: Prisma.ServiceStatusListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceStatusListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ServiceStatusListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceStatusListPayload>
          }
          aggregate: {
            args: Prisma.ServiceStatusListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServiceStatusList>
          }
          groupBy: {
            args: Prisma.ServiceStatusListGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceStatusListGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceStatusListCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceStatusListCountAggregateOutputType> | number
          }
        }
      }
      ServiceType: {
        payload: Prisma.$ServiceTypePayload<ExtArgs>
        fields: Prisma.ServiceTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceTypePayload>
          }
          findFirst: {
            args: Prisma.ServiceTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceTypePayload>
          }
          findMany: {
            args: Prisma.ServiceTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceTypePayload>[]
          }
          create: {
            args: Prisma.ServiceTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceTypePayload>
          }
          createMany: {
            args: Prisma.ServiceTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ServiceTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceTypePayload>
          }
          update: {
            args: Prisma.ServiceTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceTypePayload>
          }
          deleteMany: {
            args: Prisma.ServiceTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ServiceTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceTypePayload>
          }
          aggregate: {
            args: Prisma.ServiceTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServiceType>
          }
          groupBy: {
            args: Prisma.ServiceTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceTypeCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceTypeCountAggregateOutputType> | number
          }
        }
      }
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      ServiceActivitiesByUser: {
        payload: Prisma.$ServiceActivitiesByUserPayload<ExtArgs>
        fields: Prisma.ServiceActivitiesByUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceActivitiesByUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceActivitiesByUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceActivitiesByUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceActivitiesByUserPayload>
          }
          findFirst: {
            args: Prisma.ServiceActivitiesByUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceActivitiesByUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceActivitiesByUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceActivitiesByUserPayload>
          }
          findMany: {
            args: Prisma.ServiceActivitiesByUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceActivitiesByUserPayload>[]
          }
          create: {
            args: Prisma.ServiceActivitiesByUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceActivitiesByUserPayload>
          }
          createMany: {
            args: Prisma.ServiceActivitiesByUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ServiceActivitiesByUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceActivitiesByUserPayload>
          }
          update: {
            args: Prisma.ServiceActivitiesByUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceActivitiesByUserPayload>
          }
          deleteMany: {
            args: Prisma.ServiceActivitiesByUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceActivitiesByUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ServiceActivitiesByUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceActivitiesByUserPayload>
          }
          aggregate: {
            args: Prisma.ServiceActivitiesByUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServiceActivitiesByUser>
          }
          groupBy: {
            args: Prisma.ServiceActivitiesByUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceActivitiesByUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceActivitiesByUserCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceActivitiesByUserCountAggregateOutputType> | number
          }
        }
      }
      TotalActivityHours: {
        payload: Prisma.$TotalActivityHoursPayload<ExtArgs>
        fields: Prisma.TotalActivityHoursFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TotalActivityHoursFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TotalActivityHoursPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TotalActivityHoursFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TotalActivityHoursPayload>
          }
          findFirst: {
            args: Prisma.TotalActivityHoursFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TotalActivityHoursPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TotalActivityHoursFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TotalActivityHoursPayload>
          }
          findMany: {
            args: Prisma.TotalActivityHoursFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TotalActivityHoursPayload>[]
          }
          create: {
            args: Prisma.TotalActivityHoursCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TotalActivityHoursPayload>
          }
          createMany: {
            args: Prisma.TotalActivityHoursCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TotalActivityHoursDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TotalActivityHoursPayload>
          }
          update: {
            args: Prisma.TotalActivityHoursUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TotalActivityHoursPayload>
          }
          deleteMany: {
            args: Prisma.TotalActivityHoursDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TotalActivityHoursUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TotalActivityHoursUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TotalActivityHoursPayload>
          }
          aggregate: {
            args: Prisma.TotalActivityHoursAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTotalActivityHours>
          }
          groupBy: {
            args: Prisma.TotalActivityHoursGroupByArgs<ExtArgs>
            result: $Utils.Optional<TotalActivityHoursGroupByOutputType>[]
          }
          count: {
            args: Prisma.TotalActivityHoursCountArgs<ExtArgs>
            result: $Utils.Optional<TotalActivityHoursCountAggregateOutputType> | number
          }
        }
      }
      ServiceProgressView: {
        payload: Prisma.$ServiceProgressViewPayload<ExtArgs>
        fields: Prisma.ServiceProgressViewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceProgressViewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceProgressViewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceProgressViewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceProgressViewPayload>
          }
          findFirst: {
            args: Prisma.ServiceProgressViewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceProgressViewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceProgressViewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceProgressViewPayload>
          }
          findMany: {
            args: Prisma.ServiceProgressViewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceProgressViewPayload>[]
          }
          create: {
            args: Prisma.ServiceProgressViewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceProgressViewPayload>
          }
          createMany: {
            args: Prisma.ServiceProgressViewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ServiceProgressViewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceProgressViewPayload>
          }
          update: {
            args: Prisma.ServiceProgressViewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceProgressViewPayload>
          }
          deleteMany: {
            args: Prisma.ServiceProgressViewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceProgressViewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ServiceProgressViewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceProgressViewPayload>
          }
          aggregate: {
            args: Prisma.ServiceProgressViewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServiceProgressView>
          }
          groupBy: {
            args: Prisma.ServiceProgressViewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceProgressViewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceProgressViewCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceProgressViewCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    documents?: DocumentsOmit
    documentStatusList?: DocumentStatusListOmit
    receivingUnit?: ReceivingUnitOmit
    service?: ServiceOmit
    serviceActivities?: ServiceActivitiesOmit
    serviceStatusList?: ServiceStatusListOmit
    serviceType?: ServiceTypeOmit
    student?: StudentOmit
    serviceActivitiesByUser?: ServiceActivitiesByUserOmit
    totalActivityHours?: TotalActivityHoursOmit
    serviceProgressView?: ServiceProgressViewOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type DocumentStatusListCountOutputType
   */

  export type DocumentStatusListCountOutputType = {
    Documents: number
  }

  export type DocumentStatusListCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Documents?: boolean | DocumentStatusListCountOutputTypeCountDocumentsArgs
  }

  // Custom InputTypes
  /**
   * DocumentStatusListCountOutputType without action
   */
  export type DocumentStatusListCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentStatusListCountOutputType
     */
    select?: DocumentStatusListCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DocumentStatusListCountOutputType without action
   */
  export type DocumentStatusListCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentsWhereInput
  }


  /**
   * Count Type ReceivingUnitCountOutputType
   */

  export type ReceivingUnitCountOutputType = {
    Service: number
  }

  export type ReceivingUnitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Service?: boolean | ReceivingUnitCountOutputTypeCountServiceArgs
  }

  // Custom InputTypes
  /**
   * ReceivingUnitCountOutputType without action
   */
  export type ReceivingUnitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceivingUnitCountOutputType
     */
    select?: ReceivingUnitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReceivingUnitCountOutputType without action
   */
  export type ReceivingUnitCountOutputTypeCountServiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
  }


  /**
   * Count Type ServiceCountOutputType
   */

  export type ServiceCountOutputType = {
    Documents: number
    ServiceActivities: number
  }

  export type ServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Documents?: boolean | ServiceCountOutputTypeCountDocumentsArgs
    ServiceActivities?: boolean | ServiceCountOutputTypeCountServiceActivitiesArgs
  }

  // Custom InputTypes
  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCountOutputType
     */
    select?: ServiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentsWhereInput
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountServiceActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceActivitiesWhereInput
  }


  /**
   * Count Type ServiceStatusListCountOutputType
   */

  export type ServiceStatusListCountOutputType = {
    Service: number
  }

  export type ServiceStatusListCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Service?: boolean | ServiceStatusListCountOutputTypeCountServiceArgs
  }

  // Custom InputTypes
  /**
   * ServiceStatusListCountOutputType without action
   */
  export type ServiceStatusListCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceStatusListCountOutputType
     */
    select?: ServiceStatusListCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceStatusListCountOutputType without action
   */
  export type ServiceStatusListCountOutputTypeCountServiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
  }


  /**
   * Count Type ServiceTypeCountOutputType
   */

  export type ServiceTypeCountOutputType = {
    Service: number
  }

  export type ServiceTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Service?: boolean | ServiceTypeCountOutputTypeCountServiceArgs
  }

  // Custom InputTypes
  /**
   * ServiceTypeCountOutputType without action
   */
  export type ServiceTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceTypeCountOutputType
     */
    select?: ServiceTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceTypeCountOutputType without action
   */
  export type ServiceTypeCountOutputTypeCountServiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
  }


  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    Service: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Service?: boolean | StudentCountOutputTypeCountServiceArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountServiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Documents
   */

  export type AggregateDocuments = {
    _count: DocumentsCountAggregateOutputType | null
    _avg: DocumentsAvgAggregateOutputType | null
    _sum: DocumentsSumAggregateOutputType | null
    _min: DocumentsMinAggregateOutputType | null
    _max: DocumentsMaxAggregateOutputType | null
  }

  export type DocumentsAvgAggregateOutputType = {
    documentId: number | null
    docStatus_id: number | null
    service_id: number | null
  }

  export type DocumentsSumAggregateOutputType = {
    documentId: number | null
    docStatus_id: number | null
    service_id: number | null
  }

  export type DocumentsMinAggregateOutputType = {
    documentId: number | null
    docStatus_id: number | null
    codedFile: string | null
    fileType: string | null
    service_id: number | null
  }

  export type DocumentsMaxAggregateOutputType = {
    documentId: number | null
    docStatus_id: number | null
    codedFile: string | null
    fileType: string | null
    service_id: number | null
  }

  export type DocumentsCountAggregateOutputType = {
    documentId: number
    docStatus_id: number
    codedFile: number
    fileType: number
    service_id: number
    _all: number
  }


  export type DocumentsAvgAggregateInputType = {
    documentId?: true
    docStatus_id?: true
    service_id?: true
  }

  export type DocumentsSumAggregateInputType = {
    documentId?: true
    docStatus_id?: true
    service_id?: true
  }

  export type DocumentsMinAggregateInputType = {
    documentId?: true
    docStatus_id?: true
    codedFile?: true
    fileType?: true
    service_id?: true
  }

  export type DocumentsMaxAggregateInputType = {
    documentId?: true
    docStatus_id?: true
    codedFile?: true
    fileType?: true
    service_id?: true
  }

  export type DocumentsCountAggregateInputType = {
    documentId?: true
    docStatus_id?: true
    codedFile?: true
    fileType?: true
    service_id?: true
    _all?: true
  }

  export type DocumentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documents to aggregate.
     */
    where?: DocumentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentsOrderByWithRelationInput | DocumentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Documents
    **/
    _count?: true | DocumentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentsMaxAggregateInputType
  }

  export type GetDocumentsAggregateType<T extends DocumentsAggregateArgs> = {
        [P in keyof T & keyof AggregateDocuments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocuments[P]>
      : GetScalarType<T[P], AggregateDocuments[P]>
  }




  export type DocumentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentsWhereInput
    orderBy?: DocumentsOrderByWithAggregationInput | DocumentsOrderByWithAggregationInput[]
    by: DocumentsScalarFieldEnum[] | DocumentsScalarFieldEnum
    having?: DocumentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentsCountAggregateInputType | true
    _avg?: DocumentsAvgAggregateInputType
    _sum?: DocumentsSumAggregateInputType
    _min?: DocumentsMinAggregateInputType
    _max?: DocumentsMaxAggregateInputType
  }

  export type DocumentsGroupByOutputType = {
    documentId: number
    docStatus_id: number | null
    codedFile: string | null
    fileType: string | null
    service_id: number | null
    _count: DocumentsCountAggregateOutputType | null
    _avg: DocumentsAvgAggregateOutputType | null
    _sum: DocumentsSumAggregateOutputType | null
    _min: DocumentsMinAggregateOutputType | null
    _max: DocumentsMaxAggregateOutputType | null
  }

  type GetDocumentsGroupByPayload<T extends DocumentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentsGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentsGroupByOutputType[P]>
        }
      >
    >


  export type DocumentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    documentId?: boolean
    docStatus_id?: boolean
    codedFile?: boolean
    fileType?: boolean
    service_id?: boolean
    DocumentStatusList?: boolean | Documents$DocumentStatusListArgs<ExtArgs>
    Service?: boolean | Documents$ServiceArgs<ExtArgs>
  }, ExtArgs["result"]["documents"]>



  export type DocumentsSelectScalar = {
    documentId?: boolean
    docStatus_id?: boolean
    codedFile?: boolean
    fileType?: boolean
    service_id?: boolean
  }

  export type DocumentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"documentId" | "docStatus_id" | "codedFile" | "fileType" | "service_id", ExtArgs["result"]["documents"]>
  export type DocumentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DocumentStatusList?: boolean | Documents$DocumentStatusListArgs<ExtArgs>
    Service?: boolean | Documents$ServiceArgs<ExtArgs>
  }

  export type $DocumentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Documents"
    objects: {
      DocumentStatusList: Prisma.$DocumentStatusListPayload<ExtArgs> | null
      Service: Prisma.$ServicePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      documentId: number
      docStatus_id: number | null
      codedFile: string | null
      fileType: string | null
      service_id: number | null
    }, ExtArgs["result"]["documents"]>
    composites: {}
  }

  type DocumentsGetPayload<S extends boolean | null | undefined | DocumentsDefaultArgs> = $Result.GetResult<Prisma.$DocumentsPayload, S>

  type DocumentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: DocumentsCountAggregateInputType | true
    }

  export interface DocumentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Documents'], meta: { name: 'Documents' } }
    /**
     * Find zero or one Documents that matches the filter.
     * @param {DocumentsFindUniqueArgs} args - Arguments to find a Documents
     * @example
     * // Get one Documents
     * const documents = await prisma.documents.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentsFindUniqueArgs>(args: SelectSubset<T, DocumentsFindUniqueArgs<ExtArgs>>): Prisma__DocumentsClient<$Result.GetResult<Prisma.$DocumentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Documents that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentsFindUniqueOrThrowArgs} args - Arguments to find a Documents
     * @example
     * // Get one Documents
     * const documents = await prisma.documents.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentsFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentsClient<$Result.GetResult<Prisma.$DocumentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentsFindFirstArgs} args - Arguments to find a Documents
     * @example
     * // Get one Documents
     * const documents = await prisma.documents.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentsFindFirstArgs>(args?: SelectSubset<T, DocumentsFindFirstArgs<ExtArgs>>): Prisma__DocumentsClient<$Result.GetResult<Prisma.$DocumentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Documents that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentsFindFirstOrThrowArgs} args - Arguments to find a Documents
     * @example
     * // Get one Documents
     * const documents = await prisma.documents.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentsFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentsClient<$Result.GetResult<Prisma.$DocumentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documents
     * const documents = await prisma.documents.findMany()
     * 
     * // Get first 10 Documents
     * const documents = await prisma.documents.findMany({ take: 10 })
     * 
     * // Only select the `documentId`
     * const documentsWithDocumentIdOnly = await prisma.documents.findMany({ select: { documentId: true } })
     * 
     */
    findMany<T extends DocumentsFindManyArgs>(args?: SelectSubset<T, DocumentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Documents.
     * @param {DocumentsCreateArgs} args - Arguments to create a Documents.
     * @example
     * // Create one Documents
     * const Documents = await prisma.documents.create({
     *   data: {
     *     // ... data to create a Documents
     *   }
     * })
     * 
     */
    create<T extends DocumentsCreateArgs>(args: SelectSubset<T, DocumentsCreateArgs<ExtArgs>>): Prisma__DocumentsClient<$Result.GetResult<Prisma.$DocumentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Documents.
     * @param {DocumentsCreateManyArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const documents = await prisma.documents.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentsCreateManyArgs>(args?: SelectSubset<T, DocumentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Documents.
     * @param {DocumentsDeleteArgs} args - Arguments to delete one Documents.
     * @example
     * // Delete one Documents
     * const Documents = await prisma.documents.delete({
     *   where: {
     *     // ... filter to delete one Documents
     *   }
     * })
     * 
     */
    delete<T extends DocumentsDeleteArgs>(args: SelectSubset<T, DocumentsDeleteArgs<ExtArgs>>): Prisma__DocumentsClient<$Result.GetResult<Prisma.$DocumentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Documents.
     * @param {DocumentsUpdateArgs} args - Arguments to update one Documents.
     * @example
     * // Update one Documents
     * const documents = await prisma.documents.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentsUpdateArgs>(args: SelectSubset<T, DocumentsUpdateArgs<ExtArgs>>): Prisma__DocumentsClient<$Result.GetResult<Prisma.$DocumentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Documents.
     * @param {DocumentsDeleteManyArgs} args - Arguments to filter Documents to delete.
     * @example
     * // Delete a few Documents
     * const { count } = await prisma.documents.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentsDeleteManyArgs>(args?: SelectSubset<T, DocumentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documents
     * const documents = await prisma.documents.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentsUpdateManyArgs>(args: SelectSubset<T, DocumentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Documents.
     * @param {DocumentsUpsertArgs} args - Arguments to update or create a Documents.
     * @example
     * // Update or create a Documents
     * const documents = await prisma.documents.upsert({
     *   create: {
     *     // ... data to create a Documents
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Documents we want to update
     *   }
     * })
     */
    upsert<T extends DocumentsUpsertArgs>(args: SelectSubset<T, DocumentsUpsertArgs<ExtArgs>>): Prisma__DocumentsClient<$Result.GetResult<Prisma.$DocumentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentsCountArgs} args - Arguments to filter Documents to count.
     * @example
     * // Count the number of Documents
     * const count = await prisma.documents.count({
     *   where: {
     *     // ... the filter for the Documents we want to count
     *   }
     * })
    **/
    count<T extends DocumentsCountArgs>(
      args?: Subset<T, DocumentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DocumentsAggregateArgs>(args: Subset<T, DocumentsAggregateArgs>): Prisma.PrismaPromise<GetDocumentsAggregateType<T>>

    /**
     * Group by Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DocumentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentsGroupByArgs['orderBy'] }
        : { orderBy?: DocumentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DocumentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Documents model
   */
  readonly fields: DocumentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Documents.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    DocumentStatusList<T extends Documents$DocumentStatusListArgs<ExtArgs> = {}>(args?: Subset<T, Documents$DocumentStatusListArgs<ExtArgs>>): Prisma__DocumentStatusListClient<$Result.GetResult<Prisma.$DocumentStatusListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Service<T extends Documents$ServiceArgs<ExtArgs> = {}>(args?: Subset<T, Documents$ServiceArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Documents model
   */
  interface DocumentsFieldRefs {
    readonly documentId: FieldRef<"Documents", 'Int'>
    readonly docStatus_id: FieldRef<"Documents", 'Int'>
    readonly codedFile: FieldRef<"Documents", 'String'>
    readonly fileType: FieldRef<"Documents", 'String'>
    readonly service_id: FieldRef<"Documents", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Documents findUnique
   */
  export type DocumentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents
     */
    select?: DocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documents
     */
    omit?: DocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentsInclude<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where: DocumentsWhereUniqueInput
  }

  /**
   * Documents findUniqueOrThrow
   */
  export type DocumentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents
     */
    select?: DocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documents
     */
    omit?: DocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentsInclude<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where: DocumentsWhereUniqueInput
  }

  /**
   * Documents findFirst
   */
  export type DocumentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents
     */
    select?: DocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documents
     */
    omit?: DocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentsInclude<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where?: DocumentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentsOrderByWithRelationInput | DocumentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentsScalarFieldEnum | DocumentsScalarFieldEnum[]
  }

  /**
   * Documents findFirstOrThrow
   */
  export type DocumentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents
     */
    select?: DocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documents
     */
    omit?: DocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentsInclude<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where?: DocumentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentsOrderByWithRelationInput | DocumentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentsScalarFieldEnum | DocumentsScalarFieldEnum[]
  }

  /**
   * Documents findMany
   */
  export type DocumentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents
     */
    select?: DocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documents
     */
    omit?: DocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentsInclude<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where?: DocumentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentsOrderByWithRelationInput | DocumentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Documents.
     */
    cursor?: DocumentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    distinct?: DocumentsScalarFieldEnum | DocumentsScalarFieldEnum[]
  }

  /**
   * Documents create
   */
  export type DocumentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents
     */
    select?: DocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documents
     */
    omit?: DocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Documents.
     */
    data?: XOR<DocumentsCreateInput, DocumentsUncheckedCreateInput>
  }

  /**
   * Documents createMany
   */
  export type DocumentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Documents.
     */
    data: DocumentsCreateManyInput | DocumentsCreateManyInput[]
  }

  /**
   * Documents update
   */
  export type DocumentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents
     */
    select?: DocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documents
     */
    omit?: DocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Documents.
     */
    data: XOR<DocumentsUpdateInput, DocumentsUncheckedUpdateInput>
    /**
     * Choose, which Documents to update.
     */
    where: DocumentsWhereUniqueInput
  }

  /**
   * Documents updateMany
   */
  export type DocumentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentsUpdateManyMutationInput, DocumentsUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentsWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
  }

  /**
   * Documents upsert
   */
  export type DocumentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents
     */
    select?: DocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documents
     */
    omit?: DocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Documents to update in case it exists.
     */
    where: DocumentsWhereUniqueInput
    /**
     * In case the Documents found by the `where` argument doesn't exist, create a new Documents with this data.
     */
    create: XOR<DocumentsCreateInput, DocumentsUncheckedCreateInput>
    /**
     * In case the Documents was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentsUpdateInput, DocumentsUncheckedUpdateInput>
  }

  /**
   * Documents delete
   */
  export type DocumentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents
     */
    select?: DocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documents
     */
    omit?: DocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentsInclude<ExtArgs> | null
    /**
     * Filter which Documents to delete.
     */
    where: DocumentsWhereUniqueInput
  }

  /**
   * Documents deleteMany
   */
  export type DocumentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documents to delete
     */
    where?: DocumentsWhereInput
    /**
     * Limit how many Documents to delete.
     */
    limit?: number
  }

  /**
   * Documents.DocumentStatusList
   */
  export type Documents$DocumentStatusListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentStatusList
     */
    select?: DocumentStatusListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentStatusList
     */
    omit?: DocumentStatusListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentStatusListInclude<ExtArgs> | null
    where?: DocumentStatusListWhereInput
  }

  /**
   * Documents.Service
   */
  export type Documents$ServiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    where?: ServiceWhereInput
  }

  /**
   * Documents without action
   */
  export type DocumentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents
     */
    select?: DocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documents
     */
    omit?: DocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentsInclude<ExtArgs> | null
  }


  /**
   * Model DocumentStatusList
   */

  export type AggregateDocumentStatusList = {
    _count: DocumentStatusListCountAggregateOutputType | null
    _avg: DocumentStatusListAvgAggregateOutputType | null
    _sum: DocumentStatusListSumAggregateOutputType | null
    _min: DocumentStatusListMinAggregateOutputType | null
    _max: DocumentStatusListMaxAggregateOutputType | null
  }

  export type DocumentStatusListAvgAggregateOutputType = {
    docStatusId: number | null
  }

  export type DocumentStatusListSumAggregateOutputType = {
    docStatusId: number | null
  }

  export type DocumentStatusListMinAggregateOutputType = {
    docStatusId: number | null
    status: string | null
    description: string | null
  }

  export type DocumentStatusListMaxAggregateOutputType = {
    docStatusId: number | null
    status: string | null
    description: string | null
  }

  export type DocumentStatusListCountAggregateOutputType = {
    docStatusId: number
    status: number
    description: number
    _all: number
  }


  export type DocumentStatusListAvgAggregateInputType = {
    docStatusId?: true
  }

  export type DocumentStatusListSumAggregateInputType = {
    docStatusId?: true
  }

  export type DocumentStatusListMinAggregateInputType = {
    docStatusId?: true
    status?: true
    description?: true
  }

  export type DocumentStatusListMaxAggregateInputType = {
    docStatusId?: true
    status?: true
    description?: true
  }

  export type DocumentStatusListCountAggregateInputType = {
    docStatusId?: true
    status?: true
    description?: true
    _all?: true
  }

  export type DocumentStatusListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentStatusList to aggregate.
     */
    where?: DocumentStatusListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentStatusLists to fetch.
     */
    orderBy?: DocumentStatusListOrderByWithRelationInput | DocumentStatusListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentStatusListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentStatusLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentStatusLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DocumentStatusLists
    **/
    _count?: true | DocumentStatusListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentStatusListAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentStatusListSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentStatusListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentStatusListMaxAggregateInputType
  }

  export type GetDocumentStatusListAggregateType<T extends DocumentStatusListAggregateArgs> = {
        [P in keyof T & keyof AggregateDocumentStatusList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocumentStatusList[P]>
      : GetScalarType<T[P], AggregateDocumentStatusList[P]>
  }




  export type DocumentStatusListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentStatusListWhereInput
    orderBy?: DocumentStatusListOrderByWithAggregationInput | DocumentStatusListOrderByWithAggregationInput[]
    by: DocumentStatusListScalarFieldEnum[] | DocumentStatusListScalarFieldEnum
    having?: DocumentStatusListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentStatusListCountAggregateInputType | true
    _avg?: DocumentStatusListAvgAggregateInputType
    _sum?: DocumentStatusListSumAggregateInputType
    _min?: DocumentStatusListMinAggregateInputType
    _max?: DocumentStatusListMaxAggregateInputType
  }

  export type DocumentStatusListGroupByOutputType = {
    docStatusId: number
    status: string | null
    description: string | null
    _count: DocumentStatusListCountAggregateOutputType | null
    _avg: DocumentStatusListAvgAggregateOutputType | null
    _sum: DocumentStatusListSumAggregateOutputType | null
    _min: DocumentStatusListMinAggregateOutputType | null
    _max: DocumentStatusListMaxAggregateOutputType | null
  }

  type GetDocumentStatusListGroupByPayload<T extends DocumentStatusListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentStatusListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentStatusListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentStatusListGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentStatusListGroupByOutputType[P]>
        }
      >
    >


  export type DocumentStatusListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    docStatusId?: boolean
    status?: boolean
    description?: boolean
    Documents?: boolean | DocumentStatusList$DocumentsArgs<ExtArgs>
    _count?: boolean | DocumentStatusListCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentStatusList"]>



  export type DocumentStatusListSelectScalar = {
    docStatusId?: boolean
    status?: boolean
    description?: boolean
  }

  export type DocumentStatusListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"docStatusId" | "status" | "description", ExtArgs["result"]["documentStatusList"]>
  export type DocumentStatusListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Documents?: boolean | DocumentStatusList$DocumentsArgs<ExtArgs>
    _count?: boolean | DocumentStatusListCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DocumentStatusListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DocumentStatusList"
    objects: {
      Documents: Prisma.$DocumentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      docStatusId: number
      status: string | null
      description: string | null
    }, ExtArgs["result"]["documentStatusList"]>
    composites: {}
  }

  type DocumentStatusListGetPayload<S extends boolean | null | undefined | DocumentStatusListDefaultArgs> = $Result.GetResult<Prisma.$DocumentStatusListPayload, S>

  type DocumentStatusListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentStatusListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: DocumentStatusListCountAggregateInputType | true
    }

  export interface DocumentStatusListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DocumentStatusList'], meta: { name: 'DocumentStatusList' } }
    /**
     * Find zero or one DocumentStatusList that matches the filter.
     * @param {DocumentStatusListFindUniqueArgs} args - Arguments to find a DocumentStatusList
     * @example
     * // Get one DocumentStatusList
     * const documentStatusList = await prisma.documentStatusList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentStatusListFindUniqueArgs>(args: SelectSubset<T, DocumentStatusListFindUniqueArgs<ExtArgs>>): Prisma__DocumentStatusListClient<$Result.GetResult<Prisma.$DocumentStatusListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DocumentStatusList that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentStatusListFindUniqueOrThrowArgs} args - Arguments to find a DocumentStatusList
     * @example
     * // Get one DocumentStatusList
     * const documentStatusList = await prisma.documentStatusList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentStatusListFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentStatusListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentStatusListClient<$Result.GetResult<Prisma.$DocumentStatusListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentStatusList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentStatusListFindFirstArgs} args - Arguments to find a DocumentStatusList
     * @example
     * // Get one DocumentStatusList
     * const documentStatusList = await prisma.documentStatusList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentStatusListFindFirstArgs>(args?: SelectSubset<T, DocumentStatusListFindFirstArgs<ExtArgs>>): Prisma__DocumentStatusListClient<$Result.GetResult<Prisma.$DocumentStatusListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentStatusList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentStatusListFindFirstOrThrowArgs} args - Arguments to find a DocumentStatusList
     * @example
     * // Get one DocumentStatusList
     * const documentStatusList = await prisma.documentStatusList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentStatusListFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentStatusListFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentStatusListClient<$Result.GetResult<Prisma.$DocumentStatusListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DocumentStatusLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentStatusListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DocumentStatusLists
     * const documentStatusLists = await prisma.documentStatusList.findMany()
     * 
     * // Get first 10 DocumentStatusLists
     * const documentStatusLists = await prisma.documentStatusList.findMany({ take: 10 })
     * 
     * // Only select the `docStatusId`
     * const documentStatusListWithDocStatusIdOnly = await prisma.documentStatusList.findMany({ select: { docStatusId: true } })
     * 
     */
    findMany<T extends DocumentStatusListFindManyArgs>(args?: SelectSubset<T, DocumentStatusListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentStatusListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DocumentStatusList.
     * @param {DocumentStatusListCreateArgs} args - Arguments to create a DocumentStatusList.
     * @example
     * // Create one DocumentStatusList
     * const DocumentStatusList = await prisma.documentStatusList.create({
     *   data: {
     *     // ... data to create a DocumentStatusList
     *   }
     * })
     * 
     */
    create<T extends DocumentStatusListCreateArgs>(args: SelectSubset<T, DocumentStatusListCreateArgs<ExtArgs>>): Prisma__DocumentStatusListClient<$Result.GetResult<Prisma.$DocumentStatusListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DocumentStatusLists.
     * @param {DocumentStatusListCreateManyArgs} args - Arguments to create many DocumentStatusLists.
     * @example
     * // Create many DocumentStatusLists
     * const documentStatusList = await prisma.documentStatusList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentStatusListCreateManyArgs>(args?: SelectSubset<T, DocumentStatusListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DocumentStatusList.
     * @param {DocumentStatusListDeleteArgs} args - Arguments to delete one DocumentStatusList.
     * @example
     * // Delete one DocumentStatusList
     * const DocumentStatusList = await prisma.documentStatusList.delete({
     *   where: {
     *     // ... filter to delete one DocumentStatusList
     *   }
     * })
     * 
     */
    delete<T extends DocumentStatusListDeleteArgs>(args: SelectSubset<T, DocumentStatusListDeleteArgs<ExtArgs>>): Prisma__DocumentStatusListClient<$Result.GetResult<Prisma.$DocumentStatusListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DocumentStatusList.
     * @param {DocumentStatusListUpdateArgs} args - Arguments to update one DocumentStatusList.
     * @example
     * // Update one DocumentStatusList
     * const documentStatusList = await prisma.documentStatusList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentStatusListUpdateArgs>(args: SelectSubset<T, DocumentStatusListUpdateArgs<ExtArgs>>): Prisma__DocumentStatusListClient<$Result.GetResult<Prisma.$DocumentStatusListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DocumentStatusLists.
     * @param {DocumentStatusListDeleteManyArgs} args - Arguments to filter DocumentStatusLists to delete.
     * @example
     * // Delete a few DocumentStatusLists
     * const { count } = await prisma.documentStatusList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentStatusListDeleteManyArgs>(args?: SelectSubset<T, DocumentStatusListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentStatusLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentStatusListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DocumentStatusLists
     * const documentStatusList = await prisma.documentStatusList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentStatusListUpdateManyArgs>(args: SelectSubset<T, DocumentStatusListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DocumentStatusList.
     * @param {DocumentStatusListUpsertArgs} args - Arguments to update or create a DocumentStatusList.
     * @example
     * // Update or create a DocumentStatusList
     * const documentStatusList = await prisma.documentStatusList.upsert({
     *   create: {
     *     // ... data to create a DocumentStatusList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DocumentStatusList we want to update
     *   }
     * })
     */
    upsert<T extends DocumentStatusListUpsertArgs>(args: SelectSubset<T, DocumentStatusListUpsertArgs<ExtArgs>>): Prisma__DocumentStatusListClient<$Result.GetResult<Prisma.$DocumentStatusListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DocumentStatusLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentStatusListCountArgs} args - Arguments to filter DocumentStatusLists to count.
     * @example
     * // Count the number of DocumentStatusLists
     * const count = await prisma.documentStatusList.count({
     *   where: {
     *     // ... the filter for the DocumentStatusLists we want to count
     *   }
     * })
    **/
    count<T extends DocumentStatusListCountArgs>(
      args?: Subset<T, DocumentStatusListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentStatusListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DocumentStatusList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentStatusListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DocumentStatusListAggregateArgs>(args: Subset<T, DocumentStatusListAggregateArgs>): Prisma.PrismaPromise<GetDocumentStatusListAggregateType<T>>

    /**
     * Group by DocumentStatusList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentStatusListGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DocumentStatusListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentStatusListGroupByArgs['orderBy'] }
        : { orderBy?: DocumentStatusListGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DocumentStatusListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentStatusListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DocumentStatusList model
   */
  readonly fields: DocumentStatusListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DocumentStatusList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentStatusListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Documents<T extends DocumentStatusList$DocumentsArgs<ExtArgs> = {}>(args?: Subset<T, DocumentStatusList$DocumentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DocumentStatusList model
   */
  interface DocumentStatusListFieldRefs {
    readonly docStatusId: FieldRef<"DocumentStatusList", 'Int'>
    readonly status: FieldRef<"DocumentStatusList", 'String'>
    readonly description: FieldRef<"DocumentStatusList", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DocumentStatusList findUnique
   */
  export type DocumentStatusListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentStatusList
     */
    select?: DocumentStatusListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentStatusList
     */
    omit?: DocumentStatusListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentStatusListInclude<ExtArgs> | null
    /**
     * Filter, which DocumentStatusList to fetch.
     */
    where: DocumentStatusListWhereUniqueInput
  }

  /**
   * DocumentStatusList findUniqueOrThrow
   */
  export type DocumentStatusListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentStatusList
     */
    select?: DocumentStatusListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentStatusList
     */
    omit?: DocumentStatusListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentStatusListInclude<ExtArgs> | null
    /**
     * Filter, which DocumentStatusList to fetch.
     */
    where: DocumentStatusListWhereUniqueInput
  }

  /**
   * DocumentStatusList findFirst
   */
  export type DocumentStatusListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentStatusList
     */
    select?: DocumentStatusListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentStatusList
     */
    omit?: DocumentStatusListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentStatusListInclude<ExtArgs> | null
    /**
     * Filter, which DocumentStatusList to fetch.
     */
    where?: DocumentStatusListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentStatusLists to fetch.
     */
    orderBy?: DocumentStatusListOrderByWithRelationInput | DocumentStatusListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentStatusLists.
     */
    cursor?: DocumentStatusListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentStatusLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentStatusLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentStatusLists.
     */
    distinct?: DocumentStatusListScalarFieldEnum | DocumentStatusListScalarFieldEnum[]
  }

  /**
   * DocumentStatusList findFirstOrThrow
   */
  export type DocumentStatusListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentStatusList
     */
    select?: DocumentStatusListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentStatusList
     */
    omit?: DocumentStatusListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentStatusListInclude<ExtArgs> | null
    /**
     * Filter, which DocumentStatusList to fetch.
     */
    where?: DocumentStatusListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentStatusLists to fetch.
     */
    orderBy?: DocumentStatusListOrderByWithRelationInput | DocumentStatusListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentStatusLists.
     */
    cursor?: DocumentStatusListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentStatusLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentStatusLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentStatusLists.
     */
    distinct?: DocumentStatusListScalarFieldEnum | DocumentStatusListScalarFieldEnum[]
  }

  /**
   * DocumentStatusList findMany
   */
  export type DocumentStatusListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentStatusList
     */
    select?: DocumentStatusListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentStatusList
     */
    omit?: DocumentStatusListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentStatusListInclude<ExtArgs> | null
    /**
     * Filter, which DocumentStatusLists to fetch.
     */
    where?: DocumentStatusListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentStatusLists to fetch.
     */
    orderBy?: DocumentStatusListOrderByWithRelationInput | DocumentStatusListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DocumentStatusLists.
     */
    cursor?: DocumentStatusListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentStatusLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentStatusLists.
     */
    skip?: number
    distinct?: DocumentStatusListScalarFieldEnum | DocumentStatusListScalarFieldEnum[]
  }

  /**
   * DocumentStatusList create
   */
  export type DocumentStatusListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentStatusList
     */
    select?: DocumentStatusListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentStatusList
     */
    omit?: DocumentStatusListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentStatusListInclude<ExtArgs> | null
    /**
     * The data needed to create a DocumentStatusList.
     */
    data?: XOR<DocumentStatusListCreateInput, DocumentStatusListUncheckedCreateInput>
  }

  /**
   * DocumentStatusList createMany
   */
  export type DocumentStatusListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DocumentStatusLists.
     */
    data: DocumentStatusListCreateManyInput | DocumentStatusListCreateManyInput[]
  }

  /**
   * DocumentStatusList update
   */
  export type DocumentStatusListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentStatusList
     */
    select?: DocumentStatusListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentStatusList
     */
    omit?: DocumentStatusListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentStatusListInclude<ExtArgs> | null
    /**
     * The data needed to update a DocumentStatusList.
     */
    data: XOR<DocumentStatusListUpdateInput, DocumentStatusListUncheckedUpdateInput>
    /**
     * Choose, which DocumentStatusList to update.
     */
    where: DocumentStatusListWhereUniqueInput
  }

  /**
   * DocumentStatusList updateMany
   */
  export type DocumentStatusListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DocumentStatusLists.
     */
    data: XOR<DocumentStatusListUpdateManyMutationInput, DocumentStatusListUncheckedUpdateManyInput>
    /**
     * Filter which DocumentStatusLists to update
     */
    where?: DocumentStatusListWhereInput
    /**
     * Limit how many DocumentStatusLists to update.
     */
    limit?: number
  }

  /**
   * DocumentStatusList upsert
   */
  export type DocumentStatusListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentStatusList
     */
    select?: DocumentStatusListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentStatusList
     */
    omit?: DocumentStatusListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentStatusListInclude<ExtArgs> | null
    /**
     * The filter to search for the DocumentStatusList to update in case it exists.
     */
    where: DocumentStatusListWhereUniqueInput
    /**
     * In case the DocumentStatusList found by the `where` argument doesn't exist, create a new DocumentStatusList with this data.
     */
    create: XOR<DocumentStatusListCreateInput, DocumentStatusListUncheckedCreateInput>
    /**
     * In case the DocumentStatusList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentStatusListUpdateInput, DocumentStatusListUncheckedUpdateInput>
  }

  /**
   * DocumentStatusList delete
   */
  export type DocumentStatusListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentStatusList
     */
    select?: DocumentStatusListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentStatusList
     */
    omit?: DocumentStatusListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentStatusListInclude<ExtArgs> | null
    /**
     * Filter which DocumentStatusList to delete.
     */
    where: DocumentStatusListWhereUniqueInput
  }

  /**
   * DocumentStatusList deleteMany
   */
  export type DocumentStatusListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentStatusLists to delete
     */
    where?: DocumentStatusListWhereInput
    /**
     * Limit how many DocumentStatusLists to delete.
     */
    limit?: number
  }

  /**
   * DocumentStatusList.Documents
   */
  export type DocumentStatusList$DocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents
     */
    select?: DocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documents
     */
    omit?: DocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentsInclude<ExtArgs> | null
    where?: DocumentsWhereInput
    orderBy?: DocumentsOrderByWithRelationInput | DocumentsOrderByWithRelationInput[]
    cursor?: DocumentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentsScalarFieldEnum | DocumentsScalarFieldEnum[]
  }

  /**
   * DocumentStatusList without action
   */
  export type DocumentStatusListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentStatusList
     */
    select?: DocumentStatusListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentStatusList
     */
    omit?: DocumentStatusListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentStatusListInclude<ExtArgs> | null
  }


  /**
   * Model ReceivingUnit
   */

  export type AggregateReceivingUnit = {
    _count: ReceivingUnitCountAggregateOutputType | null
    _avg: ReceivingUnitAvgAggregateOutputType | null
    _sum: ReceivingUnitSumAggregateOutputType | null
    _min: ReceivingUnitMinAggregateOutputType | null
    _max: ReceivingUnitMaxAggregateOutputType | null
  }

  export type ReceivingUnitAvgAggregateOutputType = {
    receivingUnitId: number | null
  }

  export type ReceivingUnitSumAggregateOutputType = {
    receivingUnitId: number | null
  }

  export type ReceivingUnitMinAggregateOutputType = {
    receivingUnitId: number | null
    institutionName: string | null
    contactNumber: string | null
    institutionDirection: string | null
    contactEmail: string | null
    principalActivities: string | null
  }

  export type ReceivingUnitMaxAggregateOutputType = {
    receivingUnitId: number | null
    institutionName: string | null
    contactNumber: string | null
    institutionDirection: string | null
    contactEmail: string | null
    principalActivities: string | null
  }

  export type ReceivingUnitCountAggregateOutputType = {
    receivingUnitId: number
    institutionName: number
    contactNumber: number
    institutionDirection: number
    contactEmail: number
    principalActivities: number
    _all: number
  }


  export type ReceivingUnitAvgAggregateInputType = {
    receivingUnitId?: true
  }

  export type ReceivingUnitSumAggregateInputType = {
    receivingUnitId?: true
  }

  export type ReceivingUnitMinAggregateInputType = {
    receivingUnitId?: true
    institutionName?: true
    contactNumber?: true
    institutionDirection?: true
    contactEmail?: true
    principalActivities?: true
  }

  export type ReceivingUnitMaxAggregateInputType = {
    receivingUnitId?: true
    institutionName?: true
    contactNumber?: true
    institutionDirection?: true
    contactEmail?: true
    principalActivities?: true
  }

  export type ReceivingUnitCountAggregateInputType = {
    receivingUnitId?: true
    institutionName?: true
    contactNumber?: true
    institutionDirection?: true
    contactEmail?: true
    principalActivities?: true
    _all?: true
  }

  export type ReceivingUnitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReceivingUnit to aggregate.
     */
    where?: ReceivingUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReceivingUnits to fetch.
     */
    orderBy?: ReceivingUnitOrderByWithRelationInput | ReceivingUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReceivingUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReceivingUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReceivingUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReceivingUnits
    **/
    _count?: true | ReceivingUnitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReceivingUnitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReceivingUnitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReceivingUnitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReceivingUnitMaxAggregateInputType
  }

  export type GetReceivingUnitAggregateType<T extends ReceivingUnitAggregateArgs> = {
        [P in keyof T & keyof AggregateReceivingUnit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReceivingUnit[P]>
      : GetScalarType<T[P], AggregateReceivingUnit[P]>
  }




  export type ReceivingUnitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReceivingUnitWhereInput
    orderBy?: ReceivingUnitOrderByWithAggregationInput | ReceivingUnitOrderByWithAggregationInput[]
    by: ReceivingUnitScalarFieldEnum[] | ReceivingUnitScalarFieldEnum
    having?: ReceivingUnitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReceivingUnitCountAggregateInputType | true
    _avg?: ReceivingUnitAvgAggregateInputType
    _sum?: ReceivingUnitSumAggregateInputType
    _min?: ReceivingUnitMinAggregateInputType
    _max?: ReceivingUnitMaxAggregateInputType
  }

  export type ReceivingUnitGroupByOutputType = {
    receivingUnitId: number
    institutionName: string | null
    contactNumber: string | null
    institutionDirection: string | null
    contactEmail: string | null
    principalActivities: string | null
    _count: ReceivingUnitCountAggregateOutputType | null
    _avg: ReceivingUnitAvgAggregateOutputType | null
    _sum: ReceivingUnitSumAggregateOutputType | null
    _min: ReceivingUnitMinAggregateOutputType | null
    _max: ReceivingUnitMaxAggregateOutputType | null
  }

  type GetReceivingUnitGroupByPayload<T extends ReceivingUnitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReceivingUnitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReceivingUnitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReceivingUnitGroupByOutputType[P]>
            : GetScalarType<T[P], ReceivingUnitGroupByOutputType[P]>
        }
      >
    >


  export type ReceivingUnitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    receivingUnitId?: boolean
    institutionName?: boolean
    contactNumber?: boolean
    institutionDirection?: boolean
    contactEmail?: boolean
    principalActivities?: boolean
    Service?: boolean | ReceivingUnit$ServiceArgs<ExtArgs>
    _count?: boolean | ReceivingUnitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receivingUnit"]>



  export type ReceivingUnitSelectScalar = {
    receivingUnitId?: boolean
    institutionName?: boolean
    contactNumber?: boolean
    institutionDirection?: boolean
    contactEmail?: boolean
    principalActivities?: boolean
  }

  export type ReceivingUnitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"receivingUnitId" | "institutionName" | "contactNumber" | "institutionDirection" | "contactEmail" | "principalActivities", ExtArgs["result"]["receivingUnit"]>
  export type ReceivingUnitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Service?: boolean | ReceivingUnit$ServiceArgs<ExtArgs>
    _count?: boolean | ReceivingUnitCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ReceivingUnitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReceivingUnit"
    objects: {
      Service: Prisma.$ServicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      receivingUnitId: number
      institutionName: string | null
      contactNumber: string | null
      institutionDirection: string | null
      contactEmail: string | null
      principalActivities: string | null
    }, ExtArgs["result"]["receivingUnit"]>
    composites: {}
  }

  type ReceivingUnitGetPayload<S extends boolean | null | undefined | ReceivingUnitDefaultArgs> = $Result.GetResult<Prisma.$ReceivingUnitPayload, S>

  type ReceivingUnitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReceivingUnitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: ReceivingUnitCountAggregateInputType | true
    }

  export interface ReceivingUnitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReceivingUnit'], meta: { name: 'ReceivingUnit' } }
    /**
     * Find zero or one ReceivingUnit that matches the filter.
     * @param {ReceivingUnitFindUniqueArgs} args - Arguments to find a ReceivingUnit
     * @example
     * // Get one ReceivingUnit
     * const receivingUnit = await prisma.receivingUnit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReceivingUnitFindUniqueArgs>(args: SelectSubset<T, ReceivingUnitFindUniqueArgs<ExtArgs>>): Prisma__ReceivingUnitClient<$Result.GetResult<Prisma.$ReceivingUnitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReceivingUnit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReceivingUnitFindUniqueOrThrowArgs} args - Arguments to find a ReceivingUnit
     * @example
     * // Get one ReceivingUnit
     * const receivingUnit = await prisma.receivingUnit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReceivingUnitFindUniqueOrThrowArgs>(args: SelectSubset<T, ReceivingUnitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReceivingUnitClient<$Result.GetResult<Prisma.$ReceivingUnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReceivingUnit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceivingUnitFindFirstArgs} args - Arguments to find a ReceivingUnit
     * @example
     * // Get one ReceivingUnit
     * const receivingUnit = await prisma.receivingUnit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReceivingUnitFindFirstArgs>(args?: SelectSubset<T, ReceivingUnitFindFirstArgs<ExtArgs>>): Prisma__ReceivingUnitClient<$Result.GetResult<Prisma.$ReceivingUnitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReceivingUnit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceivingUnitFindFirstOrThrowArgs} args - Arguments to find a ReceivingUnit
     * @example
     * // Get one ReceivingUnit
     * const receivingUnit = await prisma.receivingUnit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReceivingUnitFindFirstOrThrowArgs>(args?: SelectSubset<T, ReceivingUnitFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReceivingUnitClient<$Result.GetResult<Prisma.$ReceivingUnitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReceivingUnits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceivingUnitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReceivingUnits
     * const receivingUnits = await prisma.receivingUnit.findMany()
     * 
     * // Get first 10 ReceivingUnits
     * const receivingUnits = await prisma.receivingUnit.findMany({ take: 10 })
     * 
     * // Only select the `receivingUnitId`
     * const receivingUnitWithReceivingUnitIdOnly = await prisma.receivingUnit.findMany({ select: { receivingUnitId: true } })
     * 
     */
    findMany<T extends ReceivingUnitFindManyArgs>(args?: SelectSubset<T, ReceivingUnitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceivingUnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReceivingUnit.
     * @param {ReceivingUnitCreateArgs} args - Arguments to create a ReceivingUnit.
     * @example
     * // Create one ReceivingUnit
     * const ReceivingUnit = await prisma.receivingUnit.create({
     *   data: {
     *     // ... data to create a ReceivingUnit
     *   }
     * })
     * 
     */
    create<T extends ReceivingUnitCreateArgs>(args: SelectSubset<T, ReceivingUnitCreateArgs<ExtArgs>>): Prisma__ReceivingUnitClient<$Result.GetResult<Prisma.$ReceivingUnitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReceivingUnits.
     * @param {ReceivingUnitCreateManyArgs} args - Arguments to create many ReceivingUnits.
     * @example
     * // Create many ReceivingUnits
     * const receivingUnit = await prisma.receivingUnit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReceivingUnitCreateManyArgs>(args?: SelectSubset<T, ReceivingUnitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ReceivingUnit.
     * @param {ReceivingUnitDeleteArgs} args - Arguments to delete one ReceivingUnit.
     * @example
     * // Delete one ReceivingUnit
     * const ReceivingUnit = await prisma.receivingUnit.delete({
     *   where: {
     *     // ... filter to delete one ReceivingUnit
     *   }
     * })
     * 
     */
    delete<T extends ReceivingUnitDeleteArgs>(args: SelectSubset<T, ReceivingUnitDeleteArgs<ExtArgs>>): Prisma__ReceivingUnitClient<$Result.GetResult<Prisma.$ReceivingUnitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReceivingUnit.
     * @param {ReceivingUnitUpdateArgs} args - Arguments to update one ReceivingUnit.
     * @example
     * // Update one ReceivingUnit
     * const receivingUnit = await prisma.receivingUnit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReceivingUnitUpdateArgs>(args: SelectSubset<T, ReceivingUnitUpdateArgs<ExtArgs>>): Prisma__ReceivingUnitClient<$Result.GetResult<Prisma.$ReceivingUnitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReceivingUnits.
     * @param {ReceivingUnitDeleteManyArgs} args - Arguments to filter ReceivingUnits to delete.
     * @example
     * // Delete a few ReceivingUnits
     * const { count } = await prisma.receivingUnit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReceivingUnitDeleteManyArgs>(args?: SelectSubset<T, ReceivingUnitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReceivingUnits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceivingUnitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReceivingUnits
     * const receivingUnit = await prisma.receivingUnit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReceivingUnitUpdateManyArgs>(args: SelectSubset<T, ReceivingUnitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ReceivingUnit.
     * @param {ReceivingUnitUpsertArgs} args - Arguments to update or create a ReceivingUnit.
     * @example
     * // Update or create a ReceivingUnit
     * const receivingUnit = await prisma.receivingUnit.upsert({
     *   create: {
     *     // ... data to create a ReceivingUnit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReceivingUnit we want to update
     *   }
     * })
     */
    upsert<T extends ReceivingUnitUpsertArgs>(args: SelectSubset<T, ReceivingUnitUpsertArgs<ExtArgs>>): Prisma__ReceivingUnitClient<$Result.GetResult<Prisma.$ReceivingUnitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReceivingUnits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceivingUnitCountArgs} args - Arguments to filter ReceivingUnits to count.
     * @example
     * // Count the number of ReceivingUnits
     * const count = await prisma.receivingUnit.count({
     *   where: {
     *     // ... the filter for the ReceivingUnits we want to count
     *   }
     * })
    **/
    count<T extends ReceivingUnitCountArgs>(
      args?: Subset<T, ReceivingUnitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReceivingUnitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReceivingUnit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceivingUnitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReceivingUnitAggregateArgs>(args: Subset<T, ReceivingUnitAggregateArgs>): Prisma.PrismaPromise<GetReceivingUnitAggregateType<T>>

    /**
     * Group by ReceivingUnit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceivingUnitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReceivingUnitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReceivingUnitGroupByArgs['orderBy'] }
        : { orderBy?: ReceivingUnitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReceivingUnitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReceivingUnitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReceivingUnit model
   */
  readonly fields: ReceivingUnitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReceivingUnit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReceivingUnitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Service<T extends ReceivingUnit$ServiceArgs<ExtArgs> = {}>(args?: Subset<T, ReceivingUnit$ServiceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ReceivingUnit model
   */
  interface ReceivingUnitFieldRefs {
    readonly receivingUnitId: FieldRef<"ReceivingUnit", 'Int'>
    readonly institutionName: FieldRef<"ReceivingUnit", 'String'>
    readonly contactNumber: FieldRef<"ReceivingUnit", 'String'>
    readonly institutionDirection: FieldRef<"ReceivingUnit", 'String'>
    readonly contactEmail: FieldRef<"ReceivingUnit", 'String'>
    readonly principalActivities: FieldRef<"ReceivingUnit", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ReceivingUnit findUnique
   */
  export type ReceivingUnitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceivingUnit
     */
    select?: ReceivingUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceivingUnit
     */
    omit?: ReceivingUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceivingUnitInclude<ExtArgs> | null
    /**
     * Filter, which ReceivingUnit to fetch.
     */
    where: ReceivingUnitWhereUniqueInput
  }

  /**
   * ReceivingUnit findUniqueOrThrow
   */
  export type ReceivingUnitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceivingUnit
     */
    select?: ReceivingUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceivingUnit
     */
    omit?: ReceivingUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceivingUnitInclude<ExtArgs> | null
    /**
     * Filter, which ReceivingUnit to fetch.
     */
    where: ReceivingUnitWhereUniqueInput
  }

  /**
   * ReceivingUnit findFirst
   */
  export type ReceivingUnitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceivingUnit
     */
    select?: ReceivingUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceivingUnit
     */
    omit?: ReceivingUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceivingUnitInclude<ExtArgs> | null
    /**
     * Filter, which ReceivingUnit to fetch.
     */
    where?: ReceivingUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReceivingUnits to fetch.
     */
    orderBy?: ReceivingUnitOrderByWithRelationInput | ReceivingUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReceivingUnits.
     */
    cursor?: ReceivingUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReceivingUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReceivingUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReceivingUnits.
     */
    distinct?: ReceivingUnitScalarFieldEnum | ReceivingUnitScalarFieldEnum[]
  }

  /**
   * ReceivingUnit findFirstOrThrow
   */
  export type ReceivingUnitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceivingUnit
     */
    select?: ReceivingUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceivingUnit
     */
    omit?: ReceivingUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceivingUnitInclude<ExtArgs> | null
    /**
     * Filter, which ReceivingUnit to fetch.
     */
    where?: ReceivingUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReceivingUnits to fetch.
     */
    orderBy?: ReceivingUnitOrderByWithRelationInput | ReceivingUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReceivingUnits.
     */
    cursor?: ReceivingUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReceivingUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReceivingUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReceivingUnits.
     */
    distinct?: ReceivingUnitScalarFieldEnum | ReceivingUnitScalarFieldEnum[]
  }

  /**
   * ReceivingUnit findMany
   */
  export type ReceivingUnitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceivingUnit
     */
    select?: ReceivingUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceivingUnit
     */
    omit?: ReceivingUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceivingUnitInclude<ExtArgs> | null
    /**
     * Filter, which ReceivingUnits to fetch.
     */
    where?: ReceivingUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReceivingUnits to fetch.
     */
    orderBy?: ReceivingUnitOrderByWithRelationInput | ReceivingUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReceivingUnits.
     */
    cursor?: ReceivingUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReceivingUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReceivingUnits.
     */
    skip?: number
    distinct?: ReceivingUnitScalarFieldEnum | ReceivingUnitScalarFieldEnum[]
  }

  /**
   * ReceivingUnit create
   */
  export type ReceivingUnitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceivingUnit
     */
    select?: ReceivingUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceivingUnit
     */
    omit?: ReceivingUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceivingUnitInclude<ExtArgs> | null
    /**
     * The data needed to create a ReceivingUnit.
     */
    data?: XOR<ReceivingUnitCreateInput, ReceivingUnitUncheckedCreateInput>
  }

  /**
   * ReceivingUnit createMany
   */
  export type ReceivingUnitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReceivingUnits.
     */
    data: ReceivingUnitCreateManyInput | ReceivingUnitCreateManyInput[]
  }

  /**
   * ReceivingUnit update
   */
  export type ReceivingUnitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceivingUnit
     */
    select?: ReceivingUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceivingUnit
     */
    omit?: ReceivingUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceivingUnitInclude<ExtArgs> | null
    /**
     * The data needed to update a ReceivingUnit.
     */
    data: XOR<ReceivingUnitUpdateInput, ReceivingUnitUncheckedUpdateInput>
    /**
     * Choose, which ReceivingUnit to update.
     */
    where: ReceivingUnitWhereUniqueInput
  }

  /**
   * ReceivingUnit updateMany
   */
  export type ReceivingUnitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReceivingUnits.
     */
    data: XOR<ReceivingUnitUpdateManyMutationInput, ReceivingUnitUncheckedUpdateManyInput>
    /**
     * Filter which ReceivingUnits to update
     */
    where?: ReceivingUnitWhereInput
    /**
     * Limit how many ReceivingUnits to update.
     */
    limit?: number
  }

  /**
   * ReceivingUnit upsert
   */
  export type ReceivingUnitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceivingUnit
     */
    select?: ReceivingUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceivingUnit
     */
    omit?: ReceivingUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceivingUnitInclude<ExtArgs> | null
    /**
     * The filter to search for the ReceivingUnit to update in case it exists.
     */
    where: ReceivingUnitWhereUniqueInput
    /**
     * In case the ReceivingUnit found by the `where` argument doesn't exist, create a new ReceivingUnit with this data.
     */
    create: XOR<ReceivingUnitCreateInput, ReceivingUnitUncheckedCreateInput>
    /**
     * In case the ReceivingUnit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReceivingUnitUpdateInput, ReceivingUnitUncheckedUpdateInput>
  }

  /**
   * ReceivingUnit delete
   */
  export type ReceivingUnitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceivingUnit
     */
    select?: ReceivingUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceivingUnit
     */
    omit?: ReceivingUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceivingUnitInclude<ExtArgs> | null
    /**
     * Filter which ReceivingUnit to delete.
     */
    where: ReceivingUnitWhereUniqueInput
  }

  /**
   * ReceivingUnit deleteMany
   */
  export type ReceivingUnitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReceivingUnits to delete
     */
    where?: ReceivingUnitWhereInput
    /**
     * Limit how many ReceivingUnits to delete.
     */
    limit?: number
  }

  /**
   * ReceivingUnit.Service
   */
  export type ReceivingUnit$ServiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    cursor?: ServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * ReceivingUnit without action
   */
  export type ReceivingUnitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceivingUnit
     */
    select?: ReceivingUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceivingUnit
     */
    omit?: ReceivingUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceivingUnitInclude<ExtArgs> | null
  }


  /**
   * Model Service
   */

  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  export type ServiceAvgAggregateOutputType = {
    serviceId: number | null
    student_id: number | null
    serviceType_id: number | null
    service_status_id: number | null
    receivingUnit_id: number | null
  }

  export type ServiceSumAggregateOutputType = {
    serviceId: number | null
    student_id: number | null
    serviceType_id: number | null
    service_status_id: number | null
    receivingUnit_id: number | null
  }

  export type ServiceMinAggregateOutputType = {
    serviceId: number | null
    student_id: number | null
    serviceType_id: number | null
    servicesStartDate: Date | null
    service_status_id: number | null
    supervisorName: string | null
    supervisorContactNumber: string | null
    programObjective: string | null
    supervisorPosition: string | null
    receivingUnit_id: number | null
  }

  export type ServiceMaxAggregateOutputType = {
    serviceId: number | null
    student_id: number | null
    serviceType_id: number | null
    servicesStartDate: Date | null
    service_status_id: number | null
    supervisorName: string | null
    supervisorContactNumber: string | null
    programObjective: string | null
    supervisorPosition: string | null
    receivingUnit_id: number | null
  }

  export type ServiceCountAggregateOutputType = {
    serviceId: number
    student_id: number
    serviceType_id: number
    servicesStartDate: number
    service_status_id: number
    supervisorName: number
    supervisorContactNumber: number
    programObjective: number
    supervisorPosition: number
    receivingUnit_id: number
    _all: number
  }


  export type ServiceAvgAggregateInputType = {
    serviceId?: true
    student_id?: true
    serviceType_id?: true
    service_status_id?: true
    receivingUnit_id?: true
  }

  export type ServiceSumAggregateInputType = {
    serviceId?: true
    student_id?: true
    serviceType_id?: true
    service_status_id?: true
    receivingUnit_id?: true
  }

  export type ServiceMinAggregateInputType = {
    serviceId?: true
    student_id?: true
    serviceType_id?: true
    servicesStartDate?: true
    service_status_id?: true
    supervisorName?: true
    supervisorContactNumber?: true
    programObjective?: true
    supervisorPosition?: true
    receivingUnit_id?: true
  }

  export type ServiceMaxAggregateInputType = {
    serviceId?: true
    student_id?: true
    serviceType_id?: true
    servicesStartDate?: true
    service_status_id?: true
    supervisorName?: true
    supervisorContactNumber?: true
    programObjective?: true
    supervisorPosition?: true
    receivingUnit_id?: true
  }

  export type ServiceCountAggregateInputType = {
    serviceId?: true
    student_id?: true
    serviceType_id?: true
    servicesStartDate?: true
    service_status_id?: true
    supervisorName?: true
    supervisorContactNumber?: true
    programObjective?: true
    supervisorPosition?: true
    receivingUnit_id?: true
    _all?: true
  }

  export type ServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Service to aggregate.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Services
    **/
    _count?: true | ServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceMaxAggregateInputType
  }

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>
  }




  export type ServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithAggregationInput | ServiceOrderByWithAggregationInput[]
    by: ServiceScalarFieldEnum[] | ServiceScalarFieldEnum
    having?: ServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCountAggregateInputType | true
    _avg?: ServiceAvgAggregateInputType
    _sum?: ServiceSumAggregateInputType
    _min?: ServiceMinAggregateInputType
    _max?: ServiceMaxAggregateInputType
  }

  export type ServiceGroupByOutputType = {
    serviceId: number
    student_id: number | null
    serviceType_id: number | null
    servicesStartDate: Date | null
    service_status_id: number | null
    supervisorName: string | null
    supervisorContactNumber: string | null
    programObjective: string | null
    supervisorPosition: string | null
    receivingUnit_id: number | null
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  type GetServiceGroupByPayload<T extends ServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>
        }
      >
    >


  export type ServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    serviceId?: boolean
    student_id?: boolean
    serviceType_id?: boolean
    servicesStartDate?: boolean
    service_status_id?: boolean
    supervisorName?: boolean
    supervisorContactNumber?: boolean
    programObjective?: boolean
    supervisorPosition?: boolean
    receivingUnit_id?: boolean
    Documents?: boolean | Service$DocumentsArgs<ExtArgs>
    ReceivingUnit?: boolean | Service$ReceivingUnitArgs<ExtArgs>
    ServiceType?: boolean | Service$ServiceTypeArgs<ExtArgs>
    ServiceStatusList?: boolean | Service$ServiceStatusListArgs<ExtArgs>
    Student?: boolean | Service$StudentArgs<ExtArgs>
    ServiceActivities?: boolean | Service$ServiceActivitiesArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>



  export type ServiceSelectScalar = {
    serviceId?: boolean
    student_id?: boolean
    serviceType_id?: boolean
    servicesStartDate?: boolean
    service_status_id?: boolean
    supervisorName?: boolean
    supervisorContactNumber?: boolean
    programObjective?: boolean
    supervisorPosition?: boolean
    receivingUnit_id?: boolean
  }

  export type ServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"serviceId" | "student_id" | "serviceType_id" | "servicesStartDate" | "service_status_id" | "supervisorName" | "supervisorContactNumber" | "programObjective" | "supervisorPosition" | "receivingUnit_id", ExtArgs["result"]["service"]>
  export type ServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Documents?: boolean | Service$DocumentsArgs<ExtArgs>
    ReceivingUnit?: boolean | Service$ReceivingUnitArgs<ExtArgs>
    ServiceType?: boolean | Service$ServiceTypeArgs<ExtArgs>
    ServiceStatusList?: boolean | Service$ServiceStatusListArgs<ExtArgs>
    Student?: boolean | Service$StudentArgs<ExtArgs>
    ServiceActivities?: boolean | Service$ServiceActivitiesArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Service"
    objects: {
      Documents: Prisma.$DocumentsPayload<ExtArgs>[]
      ReceivingUnit: Prisma.$ReceivingUnitPayload<ExtArgs> | null
      ServiceType: Prisma.$ServiceTypePayload<ExtArgs> | null
      ServiceStatusList: Prisma.$ServiceStatusListPayload<ExtArgs> | null
      Student: Prisma.$StudentPayload<ExtArgs> | null
      ServiceActivities: Prisma.$ServiceActivitiesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      serviceId: number
      student_id: number | null
      serviceType_id: number | null
      servicesStartDate: Date | null
      service_status_id: number | null
      supervisorName: string | null
      supervisorContactNumber: string | null
      programObjective: string | null
      supervisorPosition: string | null
      receivingUnit_id: number | null
    }, ExtArgs["result"]["service"]>
    composites: {}
  }

  type ServiceGetPayload<S extends boolean | null | undefined | ServiceDefaultArgs> = $Result.GetResult<Prisma.$ServicePayload, S>

  type ServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: ServiceCountAggregateInputType | true
    }

  export interface ServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Service'], meta: { name: 'Service' } }
    /**
     * Find zero or one Service that matches the filter.
     * @param {ServiceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceFindUniqueArgs>(args: SelectSubset<T, ServiceFindUniqueArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Service that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceFindFirstArgs>(args?: SelectSubset<T, ServiceFindFirstArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     * 
     * // Only select the `serviceId`
     * const serviceWithServiceIdOnly = await prisma.service.findMany({ select: { serviceId: true } })
     * 
     */
    findMany<T extends ServiceFindManyArgs>(args?: SelectSubset<T, ServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Service.
     * @param {ServiceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     * 
     */
    create<T extends ServiceCreateArgs>(args: SelectSubset<T, ServiceCreateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Services.
     * @param {ServiceCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceCreateManyArgs>(args?: SelectSubset<T, ServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Service.
     * @param {ServiceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     * 
     */
    delete<T extends ServiceDeleteArgs>(args: SelectSubset<T, ServiceDeleteArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Service.
     * @param {ServiceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceUpdateArgs>(args: SelectSubset<T, ServiceUpdateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Services.
     * @param {ServiceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceDeleteManyArgs>(args?: SelectSubset<T, ServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceUpdateManyArgs>(args: SelectSubset<T, ServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Service.
     * @param {ServiceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
     */
    upsert<T extends ServiceUpsertArgs>(args: SelectSubset<T, ServiceUpsertArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServiceCountArgs>(
      args?: Subset<T, ServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceAggregateArgs>(args: Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceGroupByArgs['orderBy'] }
        : { orderBy?: ServiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Service model
   */
  readonly fields: ServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Documents<T extends Service$DocumentsArgs<ExtArgs> = {}>(args?: Subset<T, Service$DocumentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ReceivingUnit<T extends Service$ReceivingUnitArgs<ExtArgs> = {}>(args?: Subset<T, Service$ReceivingUnitArgs<ExtArgs>>): Prisma__ReceivingUnitClient<$Result.GetResult<Prisma.$ReceivingUnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ServiceType<T extends Service$ServiceTypeArgs<ExtArgs> = {}>(args?: Subset<T, Service$ServiceTypeArgs<ExtArgs>>): Prisma__ServiceTypeClient<$Result.GetResult<Prisma.$ServiceTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ServiceStatusList<T extends Service$ServiceStatusListArgs<ExtArgs> = {}>(args?: Subset<T, Service$ServiceStatusListArgs<ExtArgs>>): Prisma__ServiceStatusListClient<$Result.GetResult<Prisma.$ServiceStatusListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Student<T extends Service$StudentArgs<ExtArgs> = {}>(args?: Subset<T, Service$StudentArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ServiceActivities<T extends Service$ServiceActivitiesArgs<ExtArgs> = {}>(args?: Subset<T, Service$ServiceActivitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceActivitiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Service model
   */
  interface ServiceFieldRefs {
    readonly serviceId: FieldRef<"Service", 'Int'>
    readonly student_id: FieldRef<"Service", 'Int'>
    readonly serviceType_id: FieldRef<"Service", 'Int'>
    readonly servicesStartDate: FieldRef<"Service", 'DateTime'>
    readonly service_status_id: FieldRef<"Service", 'Int'>
    readonly supervisorName: FieldRef<"Service", 'String'>
    readonly supervisorContactNumber: FieldRef<"Service", 'String'>
    readonly programObjective: FieldRef<"Service", 'String'>
    readonly supervisorPosition: FieldRef<"Service", 'String'>
    readonly receivingUnit_id: FieldRef<"Service", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Service findUnique
   */
  export type ServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findUniqueOrThrow
   */
  export type ServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findFirst
   */
  export type ServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findFirstOrThrow
   */
  export type ServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findMany
   */
  export type ServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service create
   */
  export type ServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Service.
     */
    data?: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
  }

  /**
   * Service createMany
   */
  export type ServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
  }

  /**
   * Service update
   */
  export type ServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Service.
     */
    data: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
    /**
     * Choose, which Service to update.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service updateMany
   */
  export type ServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service upsert
   */
  export type ServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Service to update in case it exists.
     */
    where: ServiceWhereUniqueInput
    /**
     * In case the Service found by the `where` argument doesn't exist, create a new Service with this data.
     */
    create: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
    /**
     * In case the Service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
  }

  /**
   * Service delete
   */
  export type ServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter which Service to delete.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service deleteMany
   */
  export type ServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to delete
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to delete.
     */
    limit?: number
  }

  /**
   * Service.Documents
   */
  export type Service$DocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents
     */
    select?: DocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documents
     */
    omit?: DocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentsInclude<ExtArgs> | null
    where?: DocumentsWhereInput
    orderBy?: DocumentsOrderByWithRelationInput | DocumentsOrderByWithRelationInput[]
    cursor?: DocumentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentsScalarFieldEnum | DocumentsScalarFieldEnum[]
  }

  /**
   * Service.ReceivingUnit
   */
  export type Service$ReceivingUnitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceivingUnit
     */
    select?: ReceivingUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceivingUnit
     */
    omit?: ReceivingUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceivingUnitInclude<ExtArgs> | null
    where?: ReceivingUnitWhereInput
  }

  /**
   * Service.ServiceType
   */
  export type Service$ServiceTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceType
     */
    select?: ServiceTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceType
     */
    omit?: ServiceTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceTypeInclude<ExtArgs> | null
    where?: ServiceTypeWhereInput
  }

  /**
   * Service.ServiceStatusList
   */
  export type Service$ServiceStatusListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceStatusList
     */
    select?: ServiceStatusListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceStatusList
     */
    omit?: ServiceStatusListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceStatusListInclude<ExtArgs> | null
    where?: ServiceStatusListWhereInput
  }

  /**
   * Service.Student
   */
  export type Service$StudentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
  }

  /**
   * Service.ServiceActivities
   */
  export type Service$ServiceActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceActivities
     */
    select?: ServiceActivitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceActivities
     */
    omit?: ServiceActivitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceActivitiesInclude<ExtArgs> | null
    where?: ServiceActivitiesWhereInput
    orderBy?: ServiceActivitiesOrderByWithRelationInput | ServiceActivitiesOrderByWithRelationInput[]
    cursor?: ServiceActivitiesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceActivitiesScalarFieldEnum | ServiceActivitiesScalarFieldEnum[]
  }

  /**
   * Service without action
   */
  export type ServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
  }


  /**
   * Model ServiceActivities
   */

  export type AggregateServiceActivities = {
    _count: ServiceActivitiesCountAggregateOutputType | null
    _avg: ServiceActivitiesAvgAggregateOutputType | null
    _sum: ServiceActivitiesSumAggregateOutputType | null
    _min: ServiceActivitiesMinAggregateOutputType | null
    _max: ServiceActivitiesMaxAggregateOutputType | null
  }

  export type ServiceActivitiesAvgAggregateOutputType = {
    serviceActivitieId: number | null
    service_id: number | null
    hours: number | null
  }

  export type ServiceActivitiesSumAggregateOutputType = {
    serviceActivitieId: number | null
    service_id: number | null
    hours: number | null
  }

  export type ServiceActivitiesMinAggregateOutputType = {
    serviceActivitieId: number | null
    service_id: number | null
    description: string | null
    postingDate: Date | null
    hours: number | null
  }

  export type ServiceActivitiesMaxAggregateOutputType = {
    serviceActivitieId: number | null
    service_id: number | null
    description: string | null
    postingDate: Date | null
    hours: number | null
  }

  export type ServiceActivitiesCountAggregateOutputType = {
    serviceActivitieId: number
    service_id: number
    description: number
    postingDate: number
    hours: number
    _all: number
  }


  export type ServiceActivitiesAvgAggregateInputType = {
    serviceActivitieId?: true
    service_id?: true
    hours?: true
  }

  export type ServiceActivitiesSumAggregateInputType = {
    serviceActivitieId?: true
    service_id?: true
    hours?: true
  }

  export type ServiceActivitiesMinAggregateInputType = {
    serviceActivitieId?: true
    service_id?: true
    description?: true
    postingDate?: true
    hours?: true
  }

  export type ServiceActivitiesMaxAggregateInputType = {
    serviceActivitieId?: true
    service_id?: true
    description?: true
    postingDate?: true
    hours?: true
  }

  export type ServiceActivitiesCountAggregateInputType = {
    serviceActivitieId?: true
    service_id?: true
    description?: true
    postingDate?: true
    hours?: true
    _all?: true
  }

  export type ServiceActivitiesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceActivities to aggregate.
     */
    where?: ServiceActivitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceActivities to fetch.
     */
    orderBy?: ServiceActivitiesOrderByWithRelationInput | ServiceActivitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceActivitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServiceActivities
    **/
    _count?: true | ServiceActivitiesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceActivitiesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceActivitiesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceActivitiesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceActivitiesMaxAggregateInputType
  }

  export type GetServiceActivitiesAggregateType<T extends ServiceActivitiesAggregateArgs> = {
        [P in keyof T & keyof AggregateServiceActivities]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServiceActivities[P]>
      : GetScalarType<T[P], AggregateServiceActivities[P]>
  }




  export type ServiceActivitiesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceActivitiesWhereInput
    orderBy?: ServiceActivitiesOrderByWithAggregationInput | ServiceActivitiesOrderByWithAggregationInput[]
    by: ServiceActivitiesScalarFieldEnum[] | ServiceActivitiesScalarFieldEnum
    having?: ServiceActivitiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceActivitiesCountAggregateInputType | true
    _avg?: ServiceActivitiesAvgAggregateInputType
    _sum?: ServiceActivitiesSumAggregateInputType
    _min?: ServiceActivitiesMinAggregateInputType
    _max?: ServiceActivitiesMaxAggregateInputType
  }

  export type ServiceActivitiesGroupByOutputType = {
    serviceActivitieId: number
    service_id: number | null
    description: string | null
    postingDate: Date | null
    hours: number | null
    _count: ServiceActivitiesCountAggregateOutputType | null
    _avg: ServiceActivitiesAvgAggregateOutputType | null
    _sum: ServiceActivitiesSumAggregateOutputType | null
    _min: ServiceActivitiesMinAggregateOutputType | null
    _max: ServiceActivitiesMaxAggregateOutputType | null
  }

  type GetServiceActivitiesGroupByPayload<T extends ServiceActivitiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceActivitiesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceActivitiesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceActivitiesGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceActivitiesGroupByOutputType[P]>
        }
      >
    >


  export type ServiceActivitiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    serviceActivitieId?: boolean
    service_id?: boolean
    description?: boolean
    postingDate?: boolean
    hours?: boolean
    Service?: boolean | ServiceActivities$ServiceArgs<ExtArgs>
  }, ExtArgs["result"]["serviceActivities"]>



  export type ServiceActivitiesSelectScalar = {
    serviceActivitieId?: boolean
    service_id?: boolean
    description?: boolean
    postingDate?: boolean
    hours?: boolean
  }

  export type ServiceActivitiesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"serviceActivitieId" | "service_id" | "description" | "postingDate" | "hours", ExtArgs["result"]["serviceActivities"]>
  export type ServiceActivitiesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Service?: boolean | ServiceActivities$ServiceArgs<ExtArgs>
  }

  export type $ServiceActivitiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServiceActivities"
    objects: {
      Service: Prisma.$ServicePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      serviceActivitieId: number
      service_id: number | null
      description: string | null
      postingDate: Date | null
      hours: number | null
    }, ExtArgs["result"]["serviceActivities"]>
    composites: {}
  }

  type ServiceActivitiesGetPayload<S extends boolean | null | undefined | ServiceActivitiesDefaultArgs> = $Result.GetResult<Prisma.$ServiceActivitiesPayload, S>

  type ServiceActivitiesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceActivitiesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: ServiceActivitiesCountAggregateInputType | true
    }

  export interface ServiceActivitiesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServiceActivities'], meta: { name: 'ServiceActivities' } }
    /**
     * Find zero or one ServiceActivities that matches the filter.
     * @param {ServiceActivitiesFindUniqueArgs} args - Arguments to find a ServiceActivities
     * @example
     * // Get one ServiceActivities
     * const serviceActivities = await prisma.serviceActivities.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceActivitiesFindUniqueArgs>(args: SelectSubset<T, ServiceActivitiesFindUniqueArgs<ExtArgs>>): Prisma__ServiceActivitiesClient<$Result.GetResult<Prisma.$ServiceActivitiesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ServiceActivities that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceActivitiesFindUniqueOrThrowArgs} args - Arguments to find a ServiceActivities
     * @example
     * // Get one ServiceActivities
     * const serviceActivities = await prisma.serviceActivities.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceActivitiesFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceActivitiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceActivitiesClient<$Result.GetResult<Prisma.$ServiceActivitiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceActivities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceActivitiesFindFirstArgs} args - Arguments to find a ServiceActivities
     * @example
     * // Get one ServiceActivities
     * const serviceActivities = await prisma.serviceActivities.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceActivitiesFindFirstArgs>(args?: SelectSubset<T, ServiceActivitiesFindFirstArgs<ExtArgs>>): Prisma__ServiceActivitiesClient<$Result.GetResult<Prisma.$ServiceActivitiesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceActivities that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceActivitiesFindFirstOrThrowArgs} args - Arguments to find a ServiceActivities
     * @example
     * // Get one ServiceActivities
     * const serviceActivities = await prisma.serviceActivities.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceActivitiesFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceActivitiesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceActivitiesClient<$Result.GetResult<Prisma.$ServiceActivitiesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ServiceActivities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceActivitiesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceActivities
     * const serviceActivities = await prisma.serviceActivities.findMany()
     * 
     * // Get first 10 ServiceActivities
     * const serviceActivities = await prisma.serviceActivities.findMany({ take: 10 })
     * 
     * // Only select the `serviceActivitieId`
     * const serviceActivitiesWithServiceActivitieIdOnly = await prisma.serviceActivities.findMany({ select: { serviceActivitieId: true } })
     * 
     */
    findMany<T extends ServiceActivitiesFindManyArgs>(args?: SelectSubset<T, ServiceActivitiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceActivitiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ServiceActivities.
     * @param {ServiceActivitiesCreateArgs} args - Arguments to create a ServiceActivities.
     * @example
     * // Create one ServiceActivities
     * const ServiceActivities = await prisma.serviceActivities.create({
     *   data: {
     *     // ... data to create a ServiceActivities
     *   }
     * })
     * 
     */
    create<T extends ServiceActivitiesCreateArgs>(args: SelectSubset<T, ServiceActivitiesCreateArgs<ExtArgs>>): Prisma__ServiceActivitiesClient<$Result.GetResult<Prisma.$ServiceActivitiesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ServiceActivities.
     * @param {ServiceActivitiesCreateManyArgs} args - Arguments to create many ServiceActivities.
     * @example
     * // Create many ServiceActivities
     * const serviceActivities = await prisma.serviceActivities.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceActivitiesCreateManyArgs>(args?: SelectSubset<T, ServiceActivitiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ServiceActivities.
     * @param {ServiceActivitiesDeleteArgs} args - Arguments to delete one ServiceActivities.
     * @example
     * // Delete one ServiceActivities
     * const ServiceActivities = await prisma.serviceActivities.delete({
     *   where: {
     *     // ... filter to delete one ServiceActivities
     *   }
     * })
     * 
     */
    delete<T extends ServiceActivitiesDeleteArgs>(args: SelectSubset<T, ServiceActivitiesDeleteArgs<ExtArgs>>): Prisma__ServiceActivitiesClient<$Result.GetResult<Prisma.$ServiceActivitiesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ServiceActivities.
     * @param {ServiceActivitiesUpdateArgs} args - Arguments to update one ServiceActivities.
     * @example
     * // Update one ServiceActivities
     * const serviceActivities = await prisma.serviceActivities.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceActivitiesUpdateArgs>(args: SelectSubset<T, ServiceActivitiesUpdateArgs<ExtArgs>>): Prisma__ServiceActivitiesClient<$Result.GetResult<Prisma.$ServiceActivitiesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ServiceActivities.
     * @param {ServiceActivitiesDeleteManyArgs} args - Arguments to filter ServiceActivities to delete.
     * @example
     * // Delete a few ServiceActivities
     * const { count } = await prisma.serviceActivities.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceActivitiesDeleteManyArgs>(args?: SelectSubset<T, ServiceActivitiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceActivitiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceActivities
     * const serviceActivities = await prisma.serviceActivities.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceActivitiesUpdateManyArgs>(args: SelectSubset<T, ServiceActivitiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ServiceActivities.
     * @param {ServiceActivitiesUpsertArgs} args - Arguments to update or create a ServiceActivities.
     * @example
     * // Update or create a ServiceActivities
     * const serviceActivities = await prisma.serviceActivities.upsert({
     *   create: {
     *     // ... data to create a ServiceActivities
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceActivities we want to update
     *   }
     * })
     */
    upsert<T extends ServiceActivitiesUpsertArgs>(args: SelectSubset<T, ServiceActivitiesUpsertArgs<ExtArgs>>): Prisma__ServiceActivitiesClient<$Result.GetResult<Prisma.$ServiceActivitiesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ServiceActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceActivitiesCountArgs} args - Arguments to filter ServiceActivities to count.
     * @example
     * // Count the number of ServiceActivities
     * const count = await prisma.serviceActivities.count({
     *   where: {
     *     // ... the filter for the ServiceActivities we want to count
     *   }
     * })
    **/
    count<T extends ServiceActivitiesCountArgs>(
      args?: Subset<T, ServiceActivitiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceActivitiesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServiceActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceActivitiesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceActivitiesAggregateArgs>(args: Subset<T, ServiceActivitiesAggregateArgs>): Prisma.PrismaPromise<GetServiceActivitiesAggregateType<T>>

    /**
     * Group by ServiceActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceActivitiesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceActivitiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceActivitiesGroupByArgs['orderBy'] }
        : { orderBy?: ServiceActivitiesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceActivitiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceActivitiesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServiceActivities model
   */
  readonly fields: ServiceActivitiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServiceActivities.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceActivitiesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Service<T extends ServiceActivities$ServiceArgs<ExtArgs> = {}>(args?: Subset<T, ServiceActivities$ServiceArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ServiceActivities model
   */
  interface ServiceActivitiesFieldRefs {
    readonly serviceActivitieId: FieldRef<"ServiceActivities", 'Int'>
    readonly service_id: FieldRef<"ServiceActivities", 'Int'>
    readonly description: FieldRef<"ServiceActivities", 'String'>
    readonly postingDate: FieldRef<"ServiceActivities", 'DateTime'>
    readonly hours: FieldRef<"ServiceActivities", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ServiceActivities findUnique
   */
  export type ServiceActivitiesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceActivities
     */
    select?: ServiceActivitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceActivities
     */
    omit?: ServiceActivitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceActivitiesInclude<ExtArgs> | null
    /**
     * Filter, which ServiceActivities to fetch.
     */
    where: ServiceActivitiesWhereUniqueInput
  }

  /**
   * ServiceActivities findUniqueOrThrow
   */
  export type ServiceActivitiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceActivities
     */
    select?: ServiceActivitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceActivities
     */
    omit?: ServiceActivitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceActivitiesInclude<ExtArgs> | null
    /**
     * Filter, which ServiceActivities to fetch.
     */
    where: ServiceActivitiesWhereUniqueInput
  }

  /**
   * ServiceActivities findFirst
   */
  export type ServiceActivitiesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceActivities
     */
    select?: ServiceActivitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceActivities
     */
    omit?: ServiceActivitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceActivitiesInclude<ExtArgs> | null
    /**
     * Filter, which ServiceActivities to fetch.
     */
    where?: ServiceActivitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceActivities to fetch.
     */
    orderBy?: ServiceActivitiesOrderByWithRelationInput | ServiceActivitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceActivities.
     */
    cursor?: ServiceActivitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceActivities.
     */
    distinct?: ServiceActivitiesScalarFieldEnum | ServiceActivitiesScalarFieldEnum[]
  }

  /**
   * ServiceActivities findFirstOrThrow
   */
  export type ServiceActivitiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceActivities
     */
    select?: ServiceActivitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceActivities
     */
    omit?: ServiceActivitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceActivitiesInclude<ExtArgs> | null
    /**
     * Filter, which ServiceActivities to fetch.
     */
    where?: ServiceActivitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceActivities to fetch.
     */
    orderBy?: ServiceActivitiesOrderByWithRelationInput | ServiceActivitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceActivities.
     */
    cursor?: ServiceActivitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceActivities.
     */
    distinct?: ServiceActivitiesScalarFieldEnum | ServiceActivitiesScalarFieldEnum[]
  }

  /**
   * ServiceActivities findMany
   */
  export type ServiceActivitiesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceActivities
     */
    select?: ServiceActivitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceActivities
     */
    omit?: ServiceActivitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceActivitiesInclude<ExtArgs> | null
    /**
     * Filter, which ServiceActivities to fetch.
     */
    where?: ServiceActivitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceActivities to fetch.
     */
    orderBy?: ServiceActivitiesOrderByWithRelationInput | ServiceActivitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServiceActivities.
     */
    cursor?: ServiceActivitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceActivities.
     */
    skip?: number
    distinct?: ServiceActivitiesScalarFieldEnum | ServiceActivitiesScalarFieldEnum[]
  }

  /**
   * ServiceActivities create
   */
  export type ServiceActivitiesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceActivities
     */
    select?: ServiceActivitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceActivities
     */
    omit?: ServiceActivitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceActivitiesInclude<ExtArgs> | null
    /**
     * The data needed to create a ServiceActivities.
     */
    data?: XOR<ServiceActivitiesCreateInput, ServiceActivitiesUncheckedCreateInput>
  }

  /**
   * ServiceActivities createMany
   */
  export type ServiceActivitiesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServiceActivities.
     */
    data: ServiceActivitiesCreateManyInput | ServiceActivitiesCreateManyInput[]
  }

  /**
   * ServiceActivities update
   */
  export type ServiceActivitiesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceActivities
     */
    select?: ServiceActivitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceActivities
     */
    omit?: ServiceActivitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceActivitiesInclude<ExtArgs> | null
    /**
     * The data needed to update a ServiceActivities.
     */
    data: XOR<ServiceActivitiesUpdateInput, ServiceActivitiesUncheckedUpdateInput>
    /**
     * Choose, which ServiceActivities to update.
     */
    where: ServiceActivitiesWhereUniqueInput
  }

  /**
   * ServiceActivities updateMany
   */
  export type ServiceActivitiesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServiceActivities.
     */
    data: XOR<ServiceActivitiesUpdateManyMutationInput, ServiceActivitiesUncheckedUpdateManyInput>
    /**
     * Filter which ServiceActivities to update
     */
    where?: ServiceActivitiesWhereInput
    /**
     * Limit how many ServiceActivities to update.
     */
    limit?: number
  }

  /**
   * ServiceActivities upsert
   */
  export type ServiceActivitiesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceActivities
     */
    select?: ServiceActivitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceActivities
     */
    omit?: ServiceActivitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceActivitiesInclude<ExtArgs> | null
    /**
     * The filter to search for the ServiceActivities to update in case it exists.
     */
    where: ServiceActivitiesWhereUniqueInput
    /**
     * In case the ServiceActivities found by the `where` argument doesn't exist, create a new ServiceActivities with this data.
     */
    create: XOR<ServiceActivitiesCreateInput, ServiceActivitiesUncheckedCreateInput>
    /**
     * In case the ServiceActivities was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceActivitiesUpdateInput, ServiceActivitiesUncheckedUpdateInput>
  }

  /**
   * ServiceActivities delete
   */
  export type ServiceActivitiesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceActivities
     */
    select?: ServiceActivitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceActivities
     */
    omit?: ServiceActivitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceActivitiesInclude<ExtArgs> | null
    /**
     * Filter which ServiceActivities to delete.
     */
    where: ServiceActivitiesWhereUniqueInput
  }

  /**
   * ServiceActivities deleteMany
   */
  export type ServiceActivitiesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceActivities to delete
     */
    where?: ServiceActivitiesWhereInput
    /**
     * Limit how many ServiceActivities to delete.
     */
    limit?: number
  }

  /**
   * ServiceActivities.Service
   */
  export type ServiceActivities$ServiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    where?: ServiceWhereInput
  }

  /**
   * ServiceActivities without action
   */
  export type ServiceActivitiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceActivities
     */
    select?: ServiceActivitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceActivities
     */
    omit?: ServiceActivitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceActivitiesInclude<ExtArgs> | null
  }


  /**
   * Model ServiceStatusList
   */

  export type AggregateServiceStatusList = {
    _count: ServiceStatusListCountAggregateOutputType | null
    _avg: ServiceStatusListAvgAggregateOutputType | null
    _sum: ServiceStatusListSumAggregateOutputType | null
    _min: ServiceStatusListMinAggregateOutputType | null
    _max: ServiceStatusListMaxAggregateOutputType | null
  }

  export type ServiceStatusListAvgAggregateOutputType = {
    serviceStatusId: number | null
  }

  export type ServiceStatusListSumAggregateOutputType = {
    serviceStatusId: number | null
  }

  export type ServiceStatusListMinAggregateOutputType = {
    serviceStatusId: number | null
    status: string | null
    description: string | null
  }

  export type ServiceStatusListMaxAggregateOutputType = {
    serviceStatusId: number | null
    status: string | null
    description: string | null
  }

  export type ServiceStatusListCountAggregateOutputType = {
    serviceStatusId: number
    status: number
    description: number
    _all: number
  }


  export type ServiceStatusListAvgAggregateInputType = {
    serviceStatusId?: true
  }

  export type ServiceStatusListSumAggregateInputType = {
    serviceStatusId?: true
  }

  export type ServiceStatusListMinAggregateInputType = {
    serviceStatusId?: true
    status?: true
    description?: true
  }

  export type ServiceStatusListMaxAggregateInputType = {
    serviceStatusId?: true
    status?: true
    description?: true
  }

  export type ServiceStatusListCountAggregateInputType = {
    serviceStatusId?: true
    status?: true
    description?: true
    _all?: true
  }

  export type ServiceStatusListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceStatusList to aggregate.
     */
    where?: ServiceStatusListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceStatusLists to fetch.
     */
    orderBy?: ServiceStatusListOrderByWithRelationInput | ServiceStatusListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceStatusListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceStatusLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceStatusLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServiceStatusLists
    **/
    _count?: true | ServiceStatusListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceStatusListAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceStatusListSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceStatusListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceStatusListMaxAggregateInputType
  }

  export type GetServiceStatusListAggregateType<T extends ServiceStatusListAggregateArgs> = {
        [P in keyof T & keyof AggregateServiceStatusList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServiceStatusList[P]>
      : GetScalarType<T[P], AggregateServiceStatusList[P]>
  }




  export type ServiceStatusListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceStatusListWhereInput
    orderBy?: ServiceStatusListOrderByWithAggregationInput | ServiceStatusListOrderByWithAggregationInput[]
    by: ServiceStatusListScalarFieldEnum[] | ServiceStatusListScalarFieldEnum
    having?: ServiceStatusListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceStatusListCountAggregateInputType | true
    _avg?: ServiceStatusListAvgAggregateInputType
    _sum?: ServiceStatusListSumAggregateInputType
    _min?: ServiceStatusListMinAggregateInputType
    _max?: ServiceStatusListMaxAggregateInputType
  }

  export type ServiceStatusListGroupByOutputType = {
    serviceStatusId: number
    status: string | null
    description: string | null
    _count: ServiceStatusListCountAggregateOutputType | null
    _avg: ServiceStatusListAvgAggregateOutputType | null
    _sum: ServiceStatusListSumAggregateOutputType | null
    _min: ServiceStatusListMinAggregateOutputType | null
    _max: ServiceStatusListMaxAggregateOutputType | null
  }

  type GetServiceStatusListGroupByPayload<T extends ServiceStatusListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceStatusListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceStatusListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceStatusListGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceStatusListGroupByOutputType[P]>
        }
      >
    >


  export type ServiceStatusListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    serviceStatusId?: boolean
    status?: boolean
    description?: boolean
    Service?: boolean | ServiceStatusList$ServiceArgs<ExtArgs>
    _count?: boolean | ServiceStatusListCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceStatusList"]>



  export type ServiceStatusListSelectScalar = {
    serviceStatusId?: boolean
    status?: boolean
    description?: boolean
  }

  export type ServiceStatusListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"serviceStatusId" | "status" | "description", ExtArgs["result"]["serviceStatusList"]>
  export type ServiceStatusListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Service?: boolean | ServiceStatusList$ServiceArgs<ExtArgs>
    _count?: boolean | ServiceStatusListCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ServiceStatusListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServiceStatusList"
    objects: {
      Service: Prisma.$ServicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      serviceStatusId: number
      status: string | null
      description: string | null
    }, ExtArgs["result"]["serviceStatusList"]>
    composites: {}
  }

  type ServiceStatusListGetPayload<S extends boolean | null | undefined | ServiceStatusListDefaultArgs> = $Result.GetResult<Prisma.$ServiceStatusListPayload, S>

  type ServiceStatusListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceStatusListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: ServiceStatusListCountAggregateInputType | true
    }

  export interface ServiceStatusListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServiceStatusList'], meta: { name: 'ServiceStatusList' } }
    /**
     * Find zero or one ServiceStatusList that matches the filter.
     * @param {ServiceStatusListFindUniqueArgs} args - Arguments to find a ServiceStatusList
     * @example
     * // Get one ServiceStatusList
     * const serviceStatusList = await prisma.serviceStatusList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceStatusListFindUniqueArgs>(args: SelectSubset<T, ServiceStatusListFindUniqueArgs<ExtArgs>>): Prisma__ServiceStatusListClient<$Result.GetResult<Prisma.$ServiceStatusListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ServiceStatusList that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceStatusListFindUniqueOrThrowArgs} args - Arguments to find a ServiceStatusList
     * @example
     * // Get one ServiceStatusList
     * const serviceStatusList = await prisma.serviceStatusList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceStatusListFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceStatusListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceStatusListClient<$Result.GetResult<Prisma.$ServiceStatusListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceStatusList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceStatusListFindFirstArgs} args - Arguments to find a ServiceStatusList
     * @example
     * // Get one ServiceStatusList
     * const serviceStatusList = await prisma.serviceStatusList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceStatusListFindFirstArgs>(args?: SelectSubset<T, ServiceStatusListFindFirstArgs<ExtArgs>>): Prisma__ServiceStatusListClient<$Result.GetResult<Prisma.$ServiceStatusListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceStatusList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceStatusListFindFirstOrThrowArgs} args - Arguments to find a ServiceStatusList
     * @example
     * // Get one ServiceStatusList
     * const serviceStatusList = await prisma.serviceStatusList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceStatusListFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceStatusListFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceStatusListClient<$Result.GetResult<Prisma.$ServiceStatusListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ServiceStatusLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceStatusListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceStatusLists
     * const serviceStatusLists = await prisma.serviceStatusList.findMany()
     * 
     * // Get first 10 ServiceStatusLists
     * const serviceStatusLists = await prisma.serviceStatusList.findMany({ take: 10 })
     * 
     * // Only select the `serviceStatusId`
     * const serviceStatusListWithServiceStatusIdOnly = await prisma.serviceStatusList.findMany({ select: { serviceStatusId: true } })
     * 
     */
    findMany<T extends ServiceStatusListFindManyArgs>(args?: SelectSubset<T, ServiceStatusListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceStatusListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ServiceStatusList.
     * @param {ServiceStatusListCreateArgs} args - Arguments to create a ServiceStatusList.
     * @example
     * // Create one ServiceStatusList
     * const ServiceStatusList = await prisma.serviceStatusList.create({
     *   data: {
     *     // ... data to create a ServiceStatusList
     *   }
     * })
     * 
     */
    create<T extends ServiceStatusListCreateArgs>(args: SelectSubset<T, ServiceStatusListCreateArgs<ExtArgs>>): Prisma__ServiceStatusListClient<$Result.GetResult<Prisma.$ServiceStatusListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ServiceStatusLists.
     * @param {ServiceStatusListCreateManyArgs} args - Arguments to create many ServiceStatusLists.
     * @example
     * // Create many ServiceStatusLists
     * const serviceStatusList = await prisma.serviceStatusList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceStatusListCreateManyArgs>(args?: SelectSubset<T, ServiceStatusListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ServiceStatusList.
     * @param {ServiceStatusListDeleteArgs} args - Arguments to delete one ServiceStatusList.
     * @example
     * // Delete one ServiceStatusList
     * const ServiceStatusList = await prisma.serviceStatusList.delete({
     *   where: {
     *     // ... filter to delete one ServiceStatusList
     *   }
     * })
     * 
     */
    delete<T extends ServiceStatusListDeleteArgs>(args: SelectSubset<T, ServiceStatusListDeleteArgs<ExtArgs>>): Prisma__ServiceStatusListClient<$Result.GetResult<Prisma.$ServiceStatusListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ServiceStatusList.
     * @param {ServiceStatusListUpdateArgs} args - Arguments to update one ServiceStatusList.
     * @example
     * // Update one ServiceStatusList
     * const serviceStatusList = await prisma.serviceStatusList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceStatusListUpdateArgs>(args: SelectSubset<T, ServiceStatusListUpdateArgs<ExtArgs>>): Prisma__ServiceStatusListClient<$Result.GetResult<Prisma.$ServiceStatusListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ServiceStatusLists.
     * @param {ServiceStatusListDeleteManyArgs} args - Arguments to filter ServiceStatusLists to delete.
     * @example
     * // Delete a few ServiceStatusLists
     * const { count } = await prisma.serviceStatusList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceStatusListDeleteManyArgs>(args?: SelectSubset<T, ServiceStatusListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceStatusLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceStatusListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceStatusLists
     * const serviceStatusList = await prisma.serviceStatusList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceStatusListUpdateManyArgs>(args: SelectSubset<T, ServiceStatusListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ServiceStatusList.
     * @param {ServiceStatusListUpsertArgs} args - Arguments to update or create a ServiceStatusList.
     * @example
     * // Update or create a ServiceStatusList
     * const serviceStatusList = await prisma.serviceStatusList.upsert({
     *   create: {
     *     // ... data to create a ServiceStatusList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceStatusList we want to update
     *   }
     * })
     */
    upsert<T extends ServiceStatusListUpsertArgs>(args: SelectSubset<T, ServiceStatusListUpsertArgs<ExtArgs>>): Prisma__ServiceStatusListClient<$Result.GetResult<Prisma.$ServiceStatusListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ServiceStatusLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceStatusListCountArgs} args - Arguments to filter ServiceStatusLists to count.
     * @example
     * // Count the number of ServiceStatusLists
     * const count = await prisma.serviceStatusList.count({
     *   where: {
     *     // ... the filter for the ServiceStatusLists we want to count
     *   }
     * })
    **/
    count<T extends ServiceStatusListCountArgs>(
      args?: Subset<T, ServiceStatusListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceStatusListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServiceStatusList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceStatusListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceStatusListAggregateArgs>(args: Subset<T, ServiceStatusListAggregateArgs>): Prisma.PrismaPromise<GetServiceStatusListAggregateType<T>>

    /**
     * Group by ServiceStatusList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceStatusListGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceStatusListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceStatusListGroupByArgs['orderBy'] }
        : { orderBy?: ServiceStatusListGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceStatusListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceStatusListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServiceStatusList model
   */
  readonly fields: ServiceStatusListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServiceStatusList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceStatusListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Service<T extends ServiceStatusList$ServiceArgs<ExtArgs> = {}>(args?: Subset<T, ServiceStatusList$ServiceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ServiceStatusList model
   */
  interface ServiceStatusListFieldRefs {
    readonly serviceStatusId: FieldRef<"ServiceStatusList", 'Int'>
    readonly status: FieldRef<"ServiceStatusList", 'String'>
    readonly description: FieldRef<"ServiceStatusList", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ServiceStatusList findUnique
   */
  export type ServiceStatusListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceStatusList
     */
    select?: ServiceStatusListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceStatusList
     */
    omit?: ServiceStatusListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceStatusListInclude<ExtArgs> | null
    /**
     * Filter, which ServiceStatusList to fetch.
     */
    where: ServiceStatusListWhereUniqueInput
  }

  /**
   * ServiceStatusList findUniqueOrThrow
   */
  export type ServiceStatusListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceStatusList
     */
    select?: ServiceStatusListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceStatusList
     */
    omit?: ServiceStatusListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceStatusListInclude<ExtArgs> | null
    /**
     * Filter, which ServiceStatusList to fetch.
     */
    where: ServiceStatusListWhereUniqueInput
  }

  /**
   * ServiceStatusList findFirst
   */
  export type ServiceStatusListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceStatusList
     */
    select?: ServiceStatusListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceStatusList
     */
    omit?: ServiceStatusListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceStatusListInclude<ExtArgs> | null
    /**
     * Filter, which ServiceStatusList to fetch.
     */
    where?: ServiceStatusListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceStatusLists to fetch.
     */
    orderBy?: ServiceStatusListOrderByWithRelationInput | ServiceStatusListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceStatusLists.
     */
    cursor?: ServiceStatusListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceStatusLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceStatusLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceStatusLists.
     */
    distinct?: ServiceStatusListScalarFieldEnum | ServiceStatusListScalarFieldEnum[]
  }

  /**
   * ServiceStatusList findFirstOrThrow
   */
  export type ServiceStatusListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceStatusList
     */
    select?: ServiceStatusListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceStatusList
     */
    omit?: ServiceStatusListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceStatusListInclude<ExtArgs> | null
    /**
     * Filter, which ServiceStatusList to fetch.
     */
    where?: ServiceStatusListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceStatusLists to fetch.
     */
    orderBy?: ServiceStatusListOrderByWithRelationInput | ServiceStatusListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceStatusLists.
     */
    cursor?: ServiceStatusListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceStatusLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceStatusLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceStatusLists.
     */
    distinct?: ServiceStatusListScalarFieldEnum | ServiceStatusListScalarFieldEnum[]
  }

  /**
   * ServiceStatusList findMany
   */
  export type ServiceStatusListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceStatusList
     */
    select?: ServiceStatusListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceStatusList
     */
    omit?: ServiceStatusListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceStatusListInclude<ExtArgs> | null
    /**
     * Filter, which ServiceStatusLists to fetch.
     */
    where?: ServiceStatusListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceStatusLists to fetch.
     */
    orderBy?: ServiceStatusListOrderByWithRelationInput | ServiceStatusListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServiceStatusLists.
     */
    cursor?: ServiceStatusListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceStatusLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceStatusLists.
     */
    skip?: number
    distinct?: ServiceStatusListScalarFieldEnum | ServiceStatusListScalarFieldEnum[]
  }

  /**
   * ServiceStatusList create
   */
  export type ServiceStatusListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceStatusList
     */
    select?: ServiceStatusListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceStatusList
     */
    omit?: ServiceStatusListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceStatusListInclude<ExtArgs> | null
    /**
     * The data needed to create a ServiceStatusList.
     */
    data?: XOR<ServiceStatusListCreateInput, ServiceStatusListUncheckedCreateInput>
  }

  /**
   * ServiceStatusList createMany
   */
  export type ServiceStatusListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServiceStatusLists.
     */
    data: ServiceStatusListCreateManyInput | ServiceStatusListCreateManyInput[]
  }

  /**
   * ServiceStatusList update
   */
  export type ServiceStatusListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceStatusList
     */
    select?: ServiceStatusListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceStatusList
     */
    omit?: ServiceStatusListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceStatusListInclude<ExtArgs> | null
    /**
     * The data needed to update a ServiceStatusList.
     */
    data: XOR<ServiceStatusListUpdateInput, ServiceStatusListUncheckedUpdateInput>
    /**
     * Choose, which ServiceStatusList to update.
     */
    where: ServiceStatusListWhereUniqueInput
  }

  /**
   * ServiceStatusList updateMany
   */
  export type ServiceStatusListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServiceStatusLists.
     */
    data: XOR<ServiceStatusListUpdateManyMutationInput, ServiceStatusListUncheckedUpdateManyInput>
    /**
     * Filter which ServiceStatusLists to update
     */
    where?: ServiceStatusListWhereInput
    /**
     * Limit how many ServiceStatusLists to update.
     */
    limit?: number
  }

  /**
   * ServiceStatusList upsert
   */
  export type ServiceStatusListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceStatusList
     */
    select?: ServiceStatusListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceStatusList
     */
    omit?: ServiceStatusListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceStatusListInclude<ExtArgs> | null
    /**
     * The filter to search for the ServiceStatusList to update in case it exists.
     */
    where: ServiceStatusListWhereUniqueInput
    /**
     * In case the ServiceStatusList found by the `where` argument doesn't exist, create a new ServiceStatusList with this data.
     */
    create: XOR<ServiceStatusListCreateInput, ServiceStatusListUncheckedCreateInput>
    /**
     * In case the ServiceStatusList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceStatusListUpdateInput, ServiceStatusListUncheckedUpdateInput>
  }

  /**
   * ServiceStatusList delete
   */
  export type ServiceStatusListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceStatusList
     */
    select?: ServiceStatusListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceStatusList
     */
    omit?: ServiceStatusListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceStatusListInclude<ExtArgs> | null
    /**
     * Filter which ServiceStatusList to delete.
     */
    where: ServiceStatusListWhereUniqueInput
  }

  /**
   * ServiceStatusList deleteMany
   */
  export type ServiceStatusListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceStatusLists to delete
     */
    where?: ServiceStatusListWhereInput
    /**
     * Limit how many ServiceStatusLists to delete.
     */
    limit?: number
  }

  /**
   * ServiceStatusList.Service
   */
  export type ServiceStatusList$ServiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    cursor?: ServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * ServiceStatusList without action
   */
  export type ServiceStatusListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceStatusList
     */
    select?: ServiceStatusListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceStatusList
     */
    omit?: ServiceStatusListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceStatusListInclude<ExtArgs> | null
  }


  /**
   * Model ServiceType
   */

  export type AggregateServiceType = {
    _count: ServiceTypeCountAggregateOutputType | null
    _avg: ServiceTypeAvgAggregateOutputType | null
    _sum: ServiceTypeSumAggregateOutputType | null
    _min: ServiceTypeMinAggregateOutputType | null
    _max: ServiceTypeMaxAggregateOutputType | null
  }

  export type ServiceTypeAvgAggregateOutputType = {
    serviceTypeId: number | null
    quantityToComplete: number | null
  }

  export type ServiceTypeSumAggregateOutputType = {
    serviceTypeId: number | null
    quantityToComplete: number | null
  }

  export type ServiceTypeMinAggregateOutputType = {
    serviceTypeId: number | null
    type: string | null
    description: string | null
    quantityToComplete: number | null
  }

  export type ServiceTypeMaxAggregateOutputType = {
    serviceTypeId: number | null
    type: string | null
    description: string | null
    quantityToComplete: number | null
  }

  export type ServiceTypeCountAggregateOutputType = {
    serviceTypeId: number
    type: number
    description: number
    quantityToComplete: number
    _all: number
  }


  export type ServiceTypeAvgAggregateInputType = {
    serviceTypeId?: true
    quantityToComplete?: true
  }

  export type ServiceTypeSumAggregateInputType = {
    serviceTypeId?: true
    quantityToComplete?: true
  }

  export type ServiceTypeMinAggregateInputType = {
    serviceTypeId?: true
    type?: true
    description?: true
    quantityToComplete?: true
  }

  export type ServiceTypeMaxAggregateInputType = {
    serviceTypeId?: true
    type?: true
    description?: true
    quantityToComplete?: true
  }

  export type ServiceTypeCountAggregateInputType = {
    serviceTypeId?: true
    type?: true
    description?: true
    quantityToComplete?: true
    _all?: true
  }

  export type ServiceTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceType to aggregate.
     */
    where?: ServiceTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceTypes to fetch.
     */
    orderBy?: ServiceTypeOrderByWithRelationInput | ServiceTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServiceTypes
    **/
    _count?: true | ServiceTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceTypeMaxAggregateInputType
  }

  export type GetServiceTypeAggregateType<T extends ServiceTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateServiceType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServiceType[P]>
      : GetScalarType<T[P], AggregateServiceType[P]>
  }




  export type ServiceTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceTypeWhereInput
    orderBy?: ServiceTypeOrderByWithAggregationInput | ServiceTypeOrderByWithAggregationInput[]
    by: ServiceTypeScalarFieldEnum[] | ServiceTypeScalarFieldEnum
    having?: ServiceTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceTypeCountAggregateInputType | true
    _avg?: ServiceTypeAvgAggregateInputType
    _sum?: ServiceTypeSumAggregateInputType
    _min?: ServiceTypeMinAggregateInputType
    _max?: ServiceTypeMaxAggregateInputType
  }

  export type ServiceTypeGroupByOutputType = {
    serviceTypeId: number
    type: string | null
    description: string | null
    quantityToComplete: number | null
    _count: ServiceTypeCountAggregateOutputType | null
    _avg: ServiceTypeAvgAggregateOutputType | null
    _sum: ServiceTypeSumAggregateOutputType | null
    _min: ServiceTypeMinAggregateOutputType | null
    _max: ServiceTypeMaxAggregateOutputType | null
  }

  type GetServiceTypeGroupByPayload<T extends ServiceTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceTypeGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceTypeGroupByOutputType[P]>
        }
      >
    >


  export type ServiceTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    serviceTypeId?: boolean
    type?: boolean
    description?: boolean
    quantityToComplete?: boolean
    Service?: boolean | ServiceType$ServiceArgs<ExtArgs>
    _count?: boolean | ServiceTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceType"]>



  export type ServiceTypeSelectScalar = {
    serviceTypeId?: boolean
    type?: boolean
    description?: boolean
    quantityToComplete?: boolean
  }

  export type ServiceTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"serviceTypeId" | "type" | "description" | "quantityToComplete", ExtArgs["result"]["serviceType"]>
  export type ServiceTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Service?: boolean | ServiceType$ServiceArgs<ExtArgs>
    _count?: boolean | ServiceTypeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ServiceTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServiceType"
    objects: {
      Service: Prisma.$ServicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      serviceTypeId: number
      type: string | null
      description: string | null
      quantityToComplete: number | null
    }, ExtArgs["result"]["serviceType"]>
    composites: {}
  }

  type ServiceTypeGetPayload<S extends boolean | null | undefined | ServiceTypeDefaultArgs> = $Result.GetResult<Prisma.$ServiceTypePayload, S>

  type ServiceTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: ServiceTypeCountAggregateInputType | true
    }

  export interface ServiceTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServiceType'], meta: { name: 'ServiceType' } }
    /**
     * Find zero or one ServiceType that matches the filter.
     * @param {ServiceTypeFindUniqueArgs} args - Arguments to find a ServiceType
     * @example
     * // Get one ServiceType
     * const serviceType = await prisma.serviceType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceTypeFindUniqueArgs>(args: SelectSubset<T, ServiceTypeFindUniqueArgs<ExtArgs>>): Prisma__ServiceTypeClient<$Result.GetResult<Prisma.$ServiceTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ServiceType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceTypeFindUniqueOrThrowArgs} args - Arguments to find a ServiceType
     * @example
     * // Get one ServiceType
     * const serviceType = await prisma.serviceType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceTypeClient<$Result.GetResult<Prisma.$ServiceTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceTypeFindFirstArgs} args - Arguments to find a ServiceType
     * @example
     * // Get one ServiceType
     * const serviceType = await prisma.serviceType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceTypeFindFirstArgs>(args?: SelectSubset<T, ServiceTypeFindFirstArgs<ExtArgs>>): Prisma__ServiceTypeClient<$Result.GetResult<Prisma.$ServiceTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceTypeFindFirstOrThrowArgs} args - Arguments to find a ServiceType
     * @example
     * // Get one ServiceType
     * const serviceType = await prisma.serviceType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceTypeClient<$Result.GetResult<Prisma.$ServiceTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ServiceTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceTypes
     * const serviceTypes = await prisma.serviceType.findMany()
     * 
     * // Get first 10 ServiceTypes
     * const serviceTypes = await prisma.serviceType.findMany({ take: 10 })
     * 
     * // Only select the `serviceTypeId`
     * const serviceTypeWithServiceTypeIdOnly = await prisma.serviceType.findMany({ select: { serviceTypeId: true } })
     * 
     */
    findMany<T extends ServiceTypeFindManyArgs>(args?: SelectSubset<T, ServiceTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ServiceType.
     * @param {ServiceTypeCreateArgs} args - Arguments to create a ServiceType.
     * @example
     * // Create one ServiceType
     * const ServiceType = await prisma.serviceType.create({
     *   data: {
     *     // ... data to create a ServiceType
     *   }
     * })
     * 
     */
    create<T extends ServiceTypeCreateArgs>(args: SelectSubset<T, ServiceTypeCreateArgs<ExtArgs>>): Prisma__ServiceTypeClient<$Result.GetResult<Prisma.$ServiceTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ServiceTypes.
     * @param {ServiceTypeCreateManyArgs} args - Arguments to create many ServiceTypes.
     * @example
     * // Create many ServiceTypes
     * const serviceType = await prisma.serviceType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceTypeCreateManyArgs>(args?: SelectSubset<T, ServiceTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ServiceType.
     * @param {ServiceTypeDeleteArgs} args - Arguments to delete one ServiceType.
     * @example
     * // Delete one ServiceType
     * const ServiceType = await prisma.serviceType.delete({
     *   where: {
     *     // ... filter to delete one ServiceType
     *   }
     * })
     * 
     */
    delete<T extends ServiceTypeDeleteArgs>(args: SelectSubset<T, ServiceTypeDeleteArgs<ExtArgs>>): Prisma__ServiceTypeClient<$Result.GetResult<Prisma.$ServiceTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ServiceType.
     * @param {ServiceTypeUpdateArgs} args - Arguments to update one ServiceType.
     * @example
     * // Update one ServiceType
     * const serviceType = await prisma.serviceType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceTypeUpdateArgs>(args: SelectSubset<T, ServiceTypeUpdateArgs<ExtArgs>>): Prisma__ServiceTypeClient<$Result.GetResult<Prisma.$ServiceTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ServiceTypes.
     * @param {ServiceTypeDeleteManyArgs} args - Arguments to filter ServiceTypes to delete.
     * @example
     * // Delete a few ServiceTypes
     * const { count } = await prisma.serviceType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceTypeDeleteManyArgs>(args?: SelectSubset<T, ServiceTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceTypes
     * const serviceType = await prisma.serviceType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceTypeUpdateManyArgs>(args: SelectSubset<T, ServiceTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ServiceType.
     * @param {ServiceTypeUpsertArgs} args - Arguments to update or create a ServiceType.
     * @example
     * // Update or create a ServiceType
     * const serviceType = await prisma.serviceType.upsert({
     *   create: {
     *     // ... data to create a ServiceType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceType we want to update
     *   }
     * })
     */
    upsert<T extends ServiceTypeUpsertArgs>(args: SelectSubset<T, ServiceTypeUpsertArgs<ExtArgs>>): Prisma__ServiceTypeClient<$Result.GetResult<Prisma.$ServiceTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ServiceTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceTypeCountArgs} args - Arguments to filter ServiceTypes to count.
     * @example
     * // Count the number of ServiceTypes
     * const count = await prisma.serviceType.count({
     *   where: {
     *     // ... the filter for the ServiceTypes we want to count
     *   }
     * })
    **/
    count<T extends ServiceTypeCountArgs>(
      args?: Subset<T, ServiceTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServiceType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceTypeAggregateArgs>(args: Subset<T, ServiceTypeAggregateArgs>): Prisma.PrismaPromise<GetServiceTypeAggregateType<T>>

    /**
     * Group by ServiceType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceTypeGroupByArgs['orderBy'] }
        : { orderBy?: ServiceTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServiceType model
   */
  readonly fields: ServiceTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServiceType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Service<T extends ServiceType$ServiceArgs<ExtArgs> = {}>(args?: Subset<T, ServiceType$ServiceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ServiceType model
   */
  interface ServiceTypeFieldRefs {
    readonly serviceTypeId: FieldRef<"ServiceType", 'Int'>
    readonly type: FieldRef<"ServiceType", 'String'>
    readonly description: FieldRef<"ServiceType", 'String'>
    readonly quantityToComplete: FieldRef<"ServiceType", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ServiceType findUnique
   */
  export type ServiceTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceType
     */
    select?: ServiceTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceType
     */
    omit?: ServiceTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceTypeInclude<ExtArgs> | null
    /**
     * Filter, which ServiceType to fetch.
     */
    where: ServiceTypeWhereUniqueInput
  }

  /**
   * ServiceType findUniqueOrThrow
   */
  export type ServiceTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceType
     */
    select?: ServiceTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceType
     */
    omit?: ServiceTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceTypeInclude<ExtArgs> | null
    /**
     * Filter, which ServiceType to fetch.
     */
    where: ServiceTypeWhereUniqueInput
  }

  /**
   * ServiceType findFirst
   */
  export type ServiceTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceType
     */
    select?: ServiceTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceType
     */
    omit?: ServiceTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceTypeInclude<ExtArgs> | null
    /**
     * Filter, which ServiceType to fetch.
     */
    where?: ServiceTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceTypes to fetch.
     */
    orderBy?: ServiceTypeOrderByWithRelationInput | ServiceTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceTypes.
     */
    cursor?: ServiceTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceTypes.
     */
    distinct?: ServiceTypeScalarFieldEnum | ServiceTypeScalarFieldEnum[]
  }

  /**
   * ServiceType findFirstOrThrow
   */
  export type ServiceTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceType
     */
    select?: ServiceTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceType
     */
    omit?: ServiceTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceTypeInclude<ExtArgs> | null
    /**
     * Filter, which ServiceType to fetch.
     */
    where?: ServiceTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceTypes to fetch.
     */
    orderBy?: ServiceTypeOrderByWithRelationInput | ServiceTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceTypes.
     */
    cursor?: ServiceTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceTypes.
     */
    distinct?: ServiceTypeScalarFieldEnum | ServiceTypeScalarFieldEnum[]
  }

  /**
   * ServiceType findMany
   */
  export type ServiceTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceType
     */
    select?: ServiceTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceType
     */
    omit?: ServiceTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceTypeInclude<ExtArgs> | null
    /**
     * Filter, which ServiceTypes to fetch.
     */
    where?: ServiceTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceTypes to fetch.
     */
    orderBy?: ServiceTypeOrderByWithRelationInput | ServiceTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServiceTypes.
     */
    cursor?: ServiceTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceTypes.
     */
    skip?: number
    distinct?: ServiceTypeScalarFieldEnum | ServiceTypeScalarFieldEnum[]
  }

  /**
   * ServiceType create
   */
  export type ServiceTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceType
     */
    select?: ServiceTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceType
     */
    omit?: ServiceTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a ServiceType.
     */
    data?: XOR<ServiceTypeCreateInput, ServiceTypeUncheckedCreateInput>
  }

  /**
   * ServiceType createMany
   */
  export type ServiceTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServiceTypes.
     */
    data: ServiceTypeCreateManyInput | ServiceTypeCreateManyInput[]
  }

  /**
   * ServiceType update
   */
  export type ServiceTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceType
     */
    select?: ServiceTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceType
     */
    omit?: ServiceTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a ServiceType.
     */
    data: XOR<ServiceTypeUpdateInput, ServiceTypeUncheckedUpdateInput>
    /**
     * Choose, which ServiceType to update.
     */
    where: ServiceTypeWhereUniqueInput
  }

  /**
   * ServiceType updateMany
   */
  export type ServiceTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServiceTypes.
     */
    data: XOR<ServiceTypeUpdateManyMutationInput, ServiceTypeUncheckedUpdateManyInput>
    /**
     * Filter which ServiceTypes to update
     */
    where?: ServiceTypeWhereInput
    /**
     * Limit how many ServiceTypes to update.
     */
    limit?: number
  }

  /**
   * ServiceType upsert
   */
  export type ServiceTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceType
     */
    select?: ServiceTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceType
     */
    omit?: ServiceTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the ServiceType to update in case it exists.
     */
    where: ServiceTypeWhereUniqueInput
    /**
     * In case the ServiceType found by the `where` argument doesn't exist, create a new ServiceType with this data.
     */
    create: XOR<ServiceTypeCreateInput, ServiceTypeUncheckedCreateInput>
    /**
     * In case the ServiceType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceTypeUpdateInput, ServiceTypeUncheckedUpdateInput>
  }

  /**
   * ServiceType delete
   */
  export type ServiceTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceType
     */
    select?: ServiceTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceType
     */
    omit?: ServiceTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceTypeInclude<ExtArgs> | null
    /**
     * Filter which ServiceType to delete.
     */
    where: ServiceTypeWhereUniqueInput
  }

  /**
   * ServiceType deleteMany
   */
  export type ServiceTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceTypes to delete
     */
    where?: ServiceTypeWhereInput
    /**
     * Limit how many ServiceTypes to delete.
     */
    limit?: number
  }

  /**
   * ServiceType.Service
   */
  export type ServiceType$ServiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    cursor?: ServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * ServiceType without action
   */
  export type ServiceTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceType
     */
    select?: ServiceTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceType
     */
    omit?: ServiceTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceTypeInclude<ExtArgs> | null
  }


  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    studentId: number | null
    grade: number | null
    studentStatus_id: number | null
  }

  export type StudentSumAggregateOutputType = {
    studentId: number | null
    grade: number | null
    studentStatus_id: number | null
  }

  export type StudentMinAggregateOutputType = {
    studentId: number | null
    name: string | null
    email: string | null
    phoneNumber: string | null
    careerInCourse: string | null
    classGroup: string | null
    enrollmentNumber: string | null
    careerModality: string | null
    grade: number | null
    studentStatus_id: number | null
    institutionalEmail: string | null
  }

  export type StudentMaxAggregateOutputType = {
    studentId: number | null
    name: string | null
    email: string | null
    phoneNumber: string | null
    careerInCourse: string | null
    classGroup: string | null
    enrollmentNumber: string | null
    careerModality: string | null
    grade: number | null
    studentStatus_id: number | null
    institutionalEmail: string | null
  }

  export type StudentCountAggregateOutputType = {
    studentId: number
    name: number
    email: number
    phoneNumber: number
    careerInCourse: number
    classGroup: number
    enrollmentNumber: number
    careerModality: number
    grade: number
    studentStatus_id: number
    institutionalEmail: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    studentId?: true
    grade?: true
    studentStatus_id?: true
  }

  export type StudentSumAggregateInputType = {
    studentId?: true
    grade?: true
    studentStatus_id?: true
  }

  export type StudentMinAggregateInputType = {
    studentId?: true
    name?: true
    email?: true
    phoneNumber?: true
    careerInCourse?: true
    classGroup?: true
    enrollmentNumber?: true
    careerModality?: true
    grade?: true
    studentStatus_id?: true
    institutionalEmail?: true
  }

  export type StudentMaxAggregateInputType = {
    studentId?: true
    name?: true
    email?: true
    phoneNumber?: true
    careerInCourse?: true
    classGroup?: true
    enrollmentNumber?: true
    careerModality?: true
    grade?: true
    studentStatus_id?: true
    institutionalEmail?: true
  }

  export type StudentCountAggregateInputType = {
    studentId?: true
    name?: true
    email?: true
    phoneNumber?: true
    careerInCourse?: true
    classGroup?: true
    enrollmentNumber?: true
    careerModality?: true
    grade?: true
    studentStatus_id?: true
    institutionalEmail?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    studentId: number
    name: string | null
    email: string | null
    phoneNumber: string | null
    careerInCourse: string | null
    classGroup: string | null
    enrollmentNumber: string | null
    careerModality: string | null
    grade: number | null
    studentStatus_id: number | null
    institutionalEmail: string | null
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    studentId?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    careerInCourse?: boolean
    classGroup?: boolean
    enrollmentNumber?: boolean
    careerModality?: boolean
    grade?: boolean
    studentStatus_id?: boolean
    institutionalEmail?: boolean
    Service?: boolean | Student$ServiceArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>



  export type StudentSelectScalar = {
    studentId?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    careerInCourse?: boolean
    classGroup?: boolean
    enrollmentNumber?: boolean
    careerModality?: boolean
    grade?: boolean
    studentStatus_id?: boolean
    institutionalEmail?: boolean
  }

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"studentId" | "name" | "email" | "phoneNumber" | "careerInCourse" | "classGroup" | "enrollmentNumber" | "careerModality" | "grade" | "studentStatus_id" | "institutionalEmail", ExtArgs["result"]["student"]>
  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Service?: boolean | Student$ServiceArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      Service: Prisma.$ServicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      studentId: number
      name: string | null
      email: string | null
      phoneNumber: string | null
      careerInCourse: string | null
      classGroup: string | null
      enrollmentNumber: string | null
      careerModality: string | null
      grade: number | null
      studentStatus_id: number | null
      institutionalEmail: string | null
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `studentId`
     * const studentWithStudentIdOnly = await prisma.student.findMany({ select: { studentId: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Service<T extends Student$ServiceArgs<ExtArgs> = {}>(args?: Subset<T, Student$ServiceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Student model
   */
  interface StudentFieldRefs {
    readonly studentId: FieldRef<"Student", 'Int'>
    readonly name: FieldRef<"Student", 'String'>
    readonly email: FieldRef<"Student", 'String'>
    readonly phoneNumber: FieldRef<"Student", 'String'>
    readonly careerInCourse: FieldRef<"Student", 'String'>
    readonly classGroup: FieldRef<"Student", 'String'>
    readonly enrollmentNumber: FieldRef<"Student", 'String'>
    readonly careerModality: FieldRef<"Student", 'String'>
    readonly grade: FieldRef<"Student", 'Int'>
    readonly studentStatus_id: FieldRef<"Student", 'Int'>
    readonly institutionalEmail: FieldRef<"Student", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data?: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Student.Service
   */
  export type Student$ServiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    cursor?: ServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Model ServiceActivitiesByUser
   */

  export type AggregateServiceActivitiesByUser = {
    _count: ServiceActivitiesByUserCountAggregateOutputType | null
    _avg: ServiceActivitiesByUserAvgAggregateOutputType | null
    _sum: ServiceActivitiesByUserSumAggregateOutputType | null
    _min: ServiceActivitiesByUserMinAggregateOutputType | null
    _max: ServiceActivitiesByUserMaxAggregateOutputType | null
  }

  export type ServiceActivitiesByUserAvgAggregateOutputType = {
    serviceActivitieId: number | null
    student_id: number | null
    hours: number | null
  }

  export type ServiceActivitiesByUserSumAggregateOutputType = {
    serviceActivitieId: number | null
    student_id: number | null
    hours: number | null
  }

  export type ServiceActivitiesByUserMinAggregateOutputType = {
    serviceActivitieId: number | null
    student_id: number | null
    description: string | null
    postingDate: Date | null
    hours: number | null
  }

  export type ServiceActivitiesByUserMaxAggregateOutputType = {
    serviceActivitieId: number | null
    student_id: number | null
    description: string | null
    postingDate: Date | null
    hours: number | null
  }

  export type ServiceActivitiesByUserCountAggregateOutputType = {
    serviceActivitieId: number
    student_id: number
    description: number
    postingDate: number
    hours: number
    _all: number
  }


  export type ServiceActivitiesByUserAvgAggregateInputType = {
    serviceActivitieId?: true
    student_id?: true
    hours?: true
  }

  export type ServiceActivitiesByUserSumAggregateInputType = {
    serviceActivitieId?: true
    student_id?: true
    hours?: true
  }

  export type ServiceActivitiesByUserMinAggregateInputType = {
    serviceActivitieId?: true
    student_id?: true
    description?: true
    postingDate?: true
    hours?: true
  }

  export type ServiceActivitiesByUserMaxAggregateInputType = {
    serviceActivitieId?: true
    student_id?: true
    description?: true
    postingDate?: true
    hours?: true
  }

  export type ServiceActivitiesByUserCountAggregateInputType = {
    serviceActivitieId?: true
    student_id?: true
    description?: true
    postingDate?: true
    hours?: true
    _all?: true
  }

  export type ServiceActivitiesByUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceActivitiesByUser to aggregate.
     */
    where?: ServiceActivitiesByUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceActivitiesByUsers to fetch.
     */
    orderBy?: ServiceActivitiesByUserOrderByWithRelationInput | ServiceActivitiesByUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceActivitiesByUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceActivitiesByUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceActivitiesByUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServiceActivitiesByUsers
    **/
    _count?: true | ServiceActivitiesByUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceActivitiesByUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceActivitiesByUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceActivitiesByUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceActivitiesByUserMaxAggregateInputType
  }

  export type GetServiceActivitiesByUserAggregateType<T extends ServiceActivitiesByUserAggregateArgs> = {
        [P in keyof T & keyof AggregateServiceActivitiesByUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServiceActivitiesByUser[P]>
      : GetScalarType<T[P], AggregateServiceActivitiesByUser[P]>
  }




  export type ServiceActivitiesByUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceActivitiesByUserWhereInput
    orderBy?: ServiceActivitiesByUserOrderByWithAggregationInput | ServiceActivitiesByUserOrderByWithAggregationInput[]
    by: ServiceActivitiesByUserScalarFieldEnum[] | ServiceActivitiesByUserScalarFieldEnum
    having?: ServiceActivitiesByUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceActivitiesByUserCountAggregateInputType | true
    _avg?: ServiceActivitiesByUserAvgAggregateInputType
    _sum?: ServiceActivitiesByUserSumAggregateInputType
    _min?: ServiceActivitiesByUserMinAggregateInputType
    _max?: ServiceActivitiesByUserMaxAggregateInputType
  }

  export type ServiceActivitiesByUserGroupByOutputType = {
    serviceActivitieId: number
    student_id: number | null
    description: string | null
    postingDate: Date | null
    hours: number | null
    _count: ServiceActivitiesByUserCountAggregateOutputType | null
    _avg: ServiceActivitiesByUserAvgAggregateOutputType | null
    _sum: ServiceActivitiesByUserSumAggregateOutputType | null
    _min: ServiceActivitiesByUserMinAggregateOutputType | null
    _max: ServiceActivitiesByUserMaxAggregateOutputType | null
  }

  type GetServiceActivitiesByUserGroupByPayload<T extends ServiceActivitiesByUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceActivitiesByUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceActivitiesByUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceActivitiesByUserGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceActivitiesByUserGroupByOutputType[P]>
        }
      >
    >


  export type ServiceActivitiesByUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    serviceActivitieId?: boolean
    student_id?: boolean
    description?: boolean
    postingDate?: boolean
    hours?: boolean
  }, ExtArgs["result"]["serviceActivitiesByUser"]>



  export type ServiceActivitiesByUserSelectScalar = {
    serviceActivitieId?: boolean
    student_id?: boolean
    description?: boolean
    postingDate?: boolean
    hours?: boolean
  }

  export type ServiceActivitiesByUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"serviceActivitieId" | "student_id" | "description" | "postingDate" | "hours", ExtArgs["result"]["serviceActivitiesByUser"]>

  export type $ServiceActivitiesByUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServiceActivitiesByUser"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      serviceActivitieId: number
      student_id: number | null
      description: string | null
      postingDate: Date | null
      hours: number | null
    }, ExtArgs["result"]["serviceActivitiesByUser"]>
    composites: {}
  }

  type ServiceActivitiesByUserGetPayload<S extends boolean | null | undefined | ServiceActivitiesByUserDefaultArgs> = $Result.GetResult<Prisma.$ServiceActivitiesByUserPayload, S>

  type ServiceActivitiesByUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceActivitiesByUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: ServiceActivitiesByUserCountAggregateInputType | true
    }

  export interface ServiceActivitiesByUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServiceActivitiesByUser'], meta: { name: 'ServiceActivitiesByUser' } }
    /**
     * Find zero or one ServiceActivitiesByUser that matches the filter.
     * @param {ServiceActivitiesByUserFindUniqueArgs} args - Arguments to find a ServiceActivitiesByUser
     * @example
     * // Get one ServiceActivitiesByUser
     * const serviceActivitiesByUser = await prisma.serviceActivitiesByUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceActivitiesByUserFindUniqueArgs>(args: SelectSubset<T, ServiceActivitiesByUserFindUniqueArgs<ExtArgs>>): Prisma__ServiceActivitiesByUserClient<$Result.GetResult<Prisma.$ServiceActivitiesByUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ServiceActivitiesByUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceActivitiesByUserFindUniqueOrThrowArgs} args - Arguments to find a ServiceActivitiesByUser
     * @example
     * // Get one ServiceActivitiesByUser
     * const serviceActivitiesByUser = await prisma.serviceActivitiesByUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceActivitiesByUserFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceActivitiesByUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceActivitiesByUserClient<$Result.GetResult<Prisma.$ServiceActivitiesByUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceActivitiesByUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceActivitiesByUserFindFirstArgs} args - Arguments to find a ServiceActivitiesByUser
     * @example
     * // Get one ServiceActivitiesByUser
     * const serviceActivitiesByUser = await prisma.serviceActivitiesByUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceActivitiesByUserFindFirstArgs>(args?: SelectSubset<T, ServiceActivitiesByUserFindFirstArgs<ExtArgs>>): Prisma__ServiceActivitiesByUserClient<$Result.GetResult<Prisma.$ServiceActivitiesByUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceActivitiesByUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceActivitiesByUserFindFirstOrThrowArgs} args - Arguments to find a ServiceActivitiesByUser
     * @example
     * // Get one ServiceActivitiesByUser
     * const serviceActivitiesByUser = await prisma.serviceActivitiesByUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceActivitiesByUserFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceActivitiesByUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceActivitiesByUserClient<$Result.GetResult<Prisma.$ServiceActivitiesByUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ServiceActivitiesByUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceActivitiesByUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceActivitiesByUsers
     * const serviceActivitiesByUsers = await prisma.serviceActivitiesByUser.findMany()
     * 
     * // Get first 10 ServiceActivitiesByUsers
     * const serviceActivitiesByUsers = await prisma.serviceActivitiesByUser.findMany({ take: 10 })
     * 
     * // Only select the `serviceActivitieId`
     * const serviceActivitiesByUserWithServiceActivitieIdOnly = await prisma.serviceActivitiesByUser.findMany({ select: { serviceActivitieId: true } })
     * 
     */
    findMany<T extends ServiceActivitiesByUserFindManyArgs>(args?: SelectSubset<T, ServiceActivitiesByUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceActivitiesByUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ServiceActivitiesByUser.
     * @param {ServiceActivitiesByUserCreateArgs} args - Arguments to create a ServiceActivitiesByUser.
     * @example
     * // Create one ServiceActivitiesByUser
     * const ServiceActivitiesByUser = await prisma.serviceActivitiesByUser.create({
     *   data: {
     *     // ... data to create a ServiceActivitiesByUser
     *   }
     * })
     * 
     */
    create<T extends ServiceActivitiesByUserCreateArgs>(args: SelectSubset<T, ServiceActivitiesByUserCreateArgs<ExtArgs>>): Prisma__ServiceActivitiesByUserClient<$Result.GetResult<Prisma.$ServiceActivitiesByUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ServiceActivitiesByUsers.
     * @param {ServiceActivitiesByUserCreateManyArgs} args - Arguments to create many ServiceActivitiesByUsers.
     * @example
     * // Create many ServiceActivitiesByUsers
     * const serviceActivitiesByUser = await prisma.serviceActivitiesByUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceActivitiesByUserCreateManyArgs>(args?: SelectSubset<T, ServiceActivitiesByUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ServiceActivitiesByUser.
     * @param {ServiceActivitiesByUserDeleteArgs} args - Arguments to delete one ServiceActivitiesByUser.
     * @example
     * // Delete one ServiceActivitiesByUser
     * const ServiceActivitiesByUser = await prisma.serviceActivitiesByUser.delete({
     *   where: {
     *     // ... filter to delete one ServiceActivitiesByUser
     *   }
     * })
     * 
     */
    delete<T extends ServiceActivitiesByUserDeleteArgs>(args: SelectSubset<T, ServiceActivitiesByUserDeleteArgs<ExtArgs>>): Prisma__ServiceActivitiesByUserClient<$Result.GetResult<Prisma.$ServiceActivitiesByUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ServiceActivitiesByUser.
     * @param {ServiceActivitiesByUserUpdateArgs} args - Arguments to update one ServiceActivitiesByUser.
     * @example
     * // Update one ServiceActivitiesByUser
     * const serviceActivitiesByUser = await prisma.serviceActivitiesByUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceActivitiesByUserUpdateArgs>(args: SelectSubset<T, ServiceActivitiesByUserUpdateArgs<ExtArgs>>): Prisma__ServiceActivitiesByUserClient<$Result.GetResult<Prisma.$ServiceActivitiesByUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ServiceActivitiesByUsers.
     * @param {ServiceActivitiesByUserDeleteManyArgs} args - Arguments to filter ServiceActivitiesByUsers to delete.
     * @example
     * // Delete a few ServiceActivitiesByUsers
     * const { count } = await prisma.serviceActivitiesByUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceActivitiesByUserDeleteManyArgs>(args?: SelectSubset<T, ServiceActivitiesByUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceActivitiesByUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceActivitiesByUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceActivitiesByUsers
     * const serviceActivitiesByUser = await prisma.serviceActivitiesByUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceActivitiesByUserUpdateManyArgs>(args: SelectSubset<T, ServiceActivitiesByUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ServiceActivitiesByUser.
     * @param {ServiceActivitiesByUserUpsertArgs} args - Arguments to update or create a ServiceActivitiesByUser.
     * @example
     * // Update or create a ServiceActivitiesByUser
     * const serviceActivitiesByUser = await prisma.serviceActivitiesByUser.upsert({
     *   create: {
     *     // ... data to create a ServiceActivitiesByUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceActivitiesByUser we want to update
     *   }
     * })
     */
    upsert<T extends ServiceActivitiesByUserUpsertArgs>(args: SelectSubset<T, ServiceActivitiesByUserUpsertArgs<ExtArgs>>): Prisma__ServiceActivitiesByUserClient<$Result.GetResult<Prisma.$ServiceActivitiesByUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ServiceActivitiesByUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceActivitiesByUserCountArgs} args - Arguments to filter ServiceActivitiesByUsers to count.
     * @example
     * // Count the number of ServiceActivitiesByUsers
     * const count = await prisma.serviceActivitiesByUser.count({
     *   where: {
     *     // ... the filter for the ServiceActivitiesByUsers we want to count
     *   }
     * })
    **/
    count<T extends ServiceActivitiesByUserCountArgs>(
      args?: Subset<T, ServiceActivitiesByUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceActivitiesByUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServiceActivitiesByUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceActivitiesByUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceActivitiesByUserAggregateArgs>(args: Subset<T, ServiceActivitiesByUserAggregateArgs>): Prisma.PrismaPromise<GetServiceActivitiesByUserAggregateType<T>>

    /**
     * Group by ServiceActivitiesByUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceActivitiesByUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceActivitiesByUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceActivitiesByUserGroupByArgs['orderBy'] }
        : { orderBy?: ServiceActivitiesByUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceActivitiesByUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceActivitiesByUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServiceActivitiesByUser model
   */
  readonly fields: ServiceActivitiesByUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServiceActivitiesByUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceActivitiesByUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ServiceActivitiesByUser model
   */
  interface ServiceActivitiesByUserFieldRefs {
    readonly serviceActivitieId: FieldRef<"ServiceActivitiesByUser", 'Int'>
    readonly student_id: FieldRef<"ServiceActivitiesByUser", 'Int'>
    readonly description: FieldRef<"ServiceActivitiesByUser", 'String'>
    readonly postingDate: FieldRef<"ServiceActivitiesByUser", 'DateTime'>
    readonly hours: FieldRef<"ServiceActivitiesByUser", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ServiceActivitiesByUser findUnique
   */
  export type ServiceActivitiesByUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceActivitiesByUser
     */
    select?: ServiceActivitiesByUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceActivitiesByUser
     */
    omit?: ServiceActivitiesByUserOmit<ExtArgs> | null
    /**
     * Filter, which ServiceActivitiesByUser to fetch.
     */
    where: ServiceActivitiesByUserWhereUniqueInput
  }

  /**
   * ServiceActivitiesByUser findUniqueOrThrow
   */
  export type ServiceActivitiesByUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceActivitiesByUser
     */
    select?: ServiceActivitiesByUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceActivitiesByUser
     */
    omit?: ServiceActivitiesByUserOmit<ExtArgs> | null
    /**
     * Filter, which ServiceActivitiesByUser to fetch.
     */
    where: ServiceActivitiesByUserWhereUniqueInput
  }

  /**
   * ServiceActivitiesByUser findFirst
   */
  export type ServiceActivitiesByUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceActivitiesByUser
     */
    select?: ServiceActivitiesByUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceActivitiesByUser
     */
    omit?: ServiceActivitiesByUserOmit<ExtArgs> | null
    /**
     * Filter, which ServiceActivitiesByUser to fetch.
     */
    where?: ServiceActivitiesByUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceActivitiesByUsers to fetch.
     */
    orderBy?: ServiceActivitiesByUserOrderByWithRelationInput | ServiceActivitiesByUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceActivitiesByUsers.
     */
    cursor?: ServiceActivitiesByUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceActivitiesByUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceActivitiesByUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceActivitiesByUsers.
     */
    distinct?: ServiceActivitiesByUserScalarFieldEnum | ServiceActivitiesByUserScalarFieldEnum[]
  }

  /**
   * ServiceActivitiesByUser findFirstOrThrow
   */
  export type ServiceActivitiesByUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceActivitiesByUser
     */
    select?: ServiceActivitiesByUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceActivitiesByUser
     */
    omit?: ServiceActivitiesByUserOmit<ExtArgs> | null
    /**
     * Filter, which ServiceActivitiesByUser to fetch.
     */
    where?: ServiceActivitiesByUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceActivitiesByUsers to fetch.
     */
    orderBy?: ServiceActivitiesByUserOrderByWithRelationInput | ServiceActivitiesByUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceActivitiesByUsers.
     */
    cursor?: ServiceActivitiesByUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceActivitiesByUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceActivitiesByUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceActivitiesByUsers.
     */
    distinct?: ServiceActivitiesByUserScalarFieldEnum | ServiceActivitiesByUserScalarFieldEnum[]
  }

  /**
   * ServiceActivitiesByUser findMany
   */
  export type ServiceActivitiesByUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceActivitiesByUser
     */
    select?: ServiceActivitiesByUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceActivitiesByUser
     */
    omit?: ServiceActivitiesByUserOmit<ExtArgs> | null
    /**
     * Filter, which ServiceActivitiesByUsers to fetch.
     */
    where?: ServiceActivitiesByUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceActivitiesByUsers to fetch.
     */
    orderBy?: ServiceActivitiesByUserOrderByWithRelationInput | ServiceActivitiesByUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServiceActivitiesByUsers.
     */
    cursor?: ServiceActivitiesByUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceActivitiesByUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceActivitiesByUsers.
     */
    skip?: number
    distinct?: ServiceActivitiesByUserScalarFieldEnum | ServiceActivitiesByUserScalarFieldEnum[]
  }

  /**
   * ServiceActivitiesByUser create
   */
  export type ServiceActivitiesByUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceActivitiesByUser
     */
    select?: ServiceActivitiesByUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceActivitiesByUser
     */
    omit?: ServiceActivitiesByUserOmit<ExtArgs> | null
    /**
     * The data needed to create a ServiceActivitiesByUser.
     */
    data: XOR<ServiceActivitiesByUserCreateInput, ServiceActivitiesByUserUncheckedCreateInput>
  }

  /**
   * ServiceActivitiesByUser createMany
   */
  export type ServiceActivitiesByUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServiceActivitiesByUsers.
     */
    data: ServiceActivitiesByUserCreateManyInput | ServiceActivitiesByUserCreateManyInput[]
  }

  /**
   * ServiceActivitiesByUser update
   */
  export type ServiceActivitiesByUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceActivitiesByUser
     */
    select?: ServiceActivitiesByUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceActivitiesByUser
     */
    omit?: ServiceActivitiesByUserOmit<ExtArgs> | null
    /**
     * The data needed to update a ServiceActivitiesByUser.
     */
    data: XOR<ServiceActivitiesByUserUpdateInput, ServiceActivitiesByUserUncheckedUpdateInput>
    /**
     * Choose, which ServiceActivitiesByUser to update.
     */
    where: ServiceActivitiesByUserWhereUniqueInput
  }

  /**
   * ServiceActivitiesByUser updateMany
   */
  export type ServiceActivitiesByUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServiceActivitiesByUsers.
     */
    data: XOR<ServiceActivitiesByUserUpdateManyMutationInput, ServiceActivitiesByUserUncheckedUpdateManyInput>
    /**
     * Filter which ServiceActivitiesByUsers to update
     */
    where?: ServiceActivitiesByUserWhereInput
    /**
     * Limit how many ServiceActivitiesByUsers to update.
     */
    limit?: number
  }

  /**
   * ServiceActivitiesByUser upsert
   */
  export type ServiceActivitiesByUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceActivitiesByUser
     */
    select?: ServiceActivitiesByUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceActivitiesByUser
     */
    omit?: ServiceActivitiesByUserOmit<ExtArgs> | null
    /**
     * The filter to search for the ServiceActivitiesByUser to update in case it exists.
     */
    where: ServiceActivitiesByUserWhereUniqueInput
    /**
     * In case the ServiceActivitiesByUser found by the `where` argument doesn't exist, create a new ServiceActivitiesByUser with this data.
     */
    create: XOR<ServiceActivitiesByUserCreateInput, ServiceActivitiesByUserUncheckedCreateInput>
    /**
     * In case the ServiceActivitiesByUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceActivitiesByUserUpdateInput, ServiceActivitiesByUserUncheckedUpdateInput>
  }

  /**
   * ServiceActivitiesByUser delete
   */
  export type ServiceActivitiesByUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceActivitiesByUser
     */
    select?: ServiceActivitiesByUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceActivitiesByUser
     */
    omit?: ServiceActivitiesByUserOmit<ExtArgs> | null
    /**
     * Filter which ServiceActivitiesByUser to delete.
     */
    where: ServiceActivitiesByUserWhereUniqueInput
  }

  /**
   * ServiceActivitiesByUser deleteMany
   */
  export type ServiceActivitiesByUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceActivitiesByUsers to delete
     */
    where?: ServiceActivitiesByUserWhereInput
    /**
     * Limit how many ServiceActivitiesByUsers to delete.
     */
    limit?: number
  }

  /**
   * ServiceActivitiesByUser without action
   */
  export type ServiceActivitiesByUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceActivitiesByUser
     */
    select?: ServiceActivitiesByUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceActivitiesByUser
     */
    omit?: ServiceActivitiesByUserOmit<ExtArgs> | null
  }


  /**
   * Model TotalActivityHours
   */

  export type AggregateTotalActivityHours = {
    _count: TotalActivityHoursCountAggregateOutputType | null
    _avg: TotalActivityHoursAvgAggregateOutputType | null
    _sum: TotalActivityHoursSumAggregateOutputType | null
    _min: TotalActivityHoursMinAggregateOutputType | null
    _max: TotalActivityHoursMaxAggregateOutputType | null
  }

  export type TotalActivityHoursAvgAggregateOutputType = {
    service_id: number | null
    totalHours: number | null
  }

  export type TotalActivityHoursSumAggregateOutputType = {
    service_id: number | null
    totalHours: number | null
  }

  export type TotalActivityHoursMinAggregateOutputType = {
    service_id: number | null
    totalHours: number | null
  }

  export type TotalActivityHoursMaxAggregateOutputType = {
    service_id: number | null
    totalHours: number | null
  }

  export type TotalActivityHoursCountAggregateOutputType = {
    service_id: number
    totalHours: number
    _all: number
  }


  export type TotalActivityHoursAvgAggregateInputType = {
    service_id?: true
    totalHours?: true
  }

  export type TotalActivityHoursSumAggregateInputType = {
    service_id?: true
    totalHours?: true
  }

  export type TotalActivityHoursMinAggregateInputType = {
    service_id?: true
    totalHours?: true
  }

  export type TotalActivityHoursMaxAggregateInputType = {
    service_id?: true
    totalHours?: true
  }

  export type TotalActivityHoursCountAggregateInputType = {
    service_id?: true
    totalHours?: true
    _all?: true
  }

  export type TotalActivityHoursAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TotalActivityHours to aggregate.
     */
    where?: TotalActivityHoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TotalActivityHours to fetch.
     */
    orderBy?: TotalActivityHoursOrderByWithRelationInput | TotalActivityHoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TotalActivityHoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TotalActivityHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TotalActivityHours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TotalActivityHours
    **/
    _count?: true | TotalActivityHoursCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TotalActivityHoursAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TotalActivityHoursSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TotalActivityHoursMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TotalActivityHoursMaxAggregateInputType
  }

  export type GetTotalActivityHoursAggregateType<T extends TotalActivityHoursAggregateArgs> = {
        [P in keyof T & keyof AggregateTotalActivityHours]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTotalActivityHours[P]>
      : GetScalarType<T[P], AggregateTotalActivityHours[P]>
  }




  export type TotalActivityHoursGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TotalActivityHoursWhereInput
    orderBy?: TotalActivityHoursOrderByWithAggregationInput | TotalActivityHoursOrderByWithAggregationInput[]
    by: TotalActivityHoursScalarFieldEnum[] | TotalActivityHoursScalarFieldEnum
    having?: TotalActivityHoursScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TotalActivityHoursCountAggregateInputType | true
    _avg?: TotalActivityHoursAvgAggregateInputType
    _sum?: TotalActivityHoursSumAggregateInputType
    _min?: TotalActivityHoursMinAggregateInputType
    _max?: TotalActivityHoursMaxAggregateInputType
  }

  export type TotalActivityHoursGroupByOutputType = {
    service_id: number
    totalHours: number | null
    _count: TotalActivityHoursCountAggregateOutputType | null
    _avg: TotalActivityHoursAvgAggregateOutputType | null
    _sum: TotalActivityHoursSumAggregateOutputType | null
    _min: TotalActivityHoursMinAggregateOutputType | null
    _max: TotalActivityHoursMaxAggregateOutputType | null
  }

  type GetTotalActivityHoursGroupByPayload<T extends TotalActivityHoursGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TotalActivityHoursGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TotalActivityHoursGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TotalActivityHoursGroupByOutputType[P]>
            : GetScalarType<T[P], TotalActivityHoursGroupByOutputType[P]>
        }
      >
    >


  export type TotalActivityHoursSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    service_id?: boolean
    totalHours?: boolean
  }, ExtArgs["result"]["totalActivityHours"]>



  export type TotalActivityHoursSelectScalar = {
    service_id?: boolean
    totalHours?: boolean
  }

  export type TotalActivityHoursOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"service_id" | "totalHours", ExtArgs["result"]["totalActivityHours"]>

  export type $TotalActivityHoursPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TotalActivityHours"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      service_id: number
      totalHours: number | null
    }, ExtArgs["result"]["totalActivityHours"]>
    composites: {}
  }

  type TotalActivityHoursGetPayload<S extends boolean | null | undefined | TotalActivityHoursDefaultArgs> = $Result.GetResult<Prisma.$TotalActivityHoursPayload, S>

  type TotalActivityHoursCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TotalActivityHoursFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: TotalActivityHoursCountAggregateInputType | true
    }

  export interface TotalActivityHoursDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TotalActivityHours'], meta: { name: 'TotalActivityHours' } }
    /**
     * Find zero or one TotalActivityHours that matches the filter.
     * @param {TotalActivityHoursFindUniqueArgs} args - Arguments to find a TotalActivityHours
     * @example
     * // Get one TotalActivityHours
     * const totalActivityHours = await prisma.totalActivityHours.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TotalActivityHoursFindUniqueArgs>(args: SelectSubset<T, TotalActivityHoursFindUniqueArgs<ExtArgs>>): Prisma__TotalActivityHoursClient<$Result.GetResult<Prisma.$TotalActivityHoursPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TotalActivityHours that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TotalActivityHoursFindUniqueOrThrowArgs} args - Arguments to find a TotalActivityHours
     * @example
     * // Get one TotalActivityHours
     * const totalActivityHours = await prisma.totalActivityHours.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TotalActivityHoursFindUniqueOrThrowArgs>(args: SelectSubset<T, TotalActivityHoursFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TotalActivityHoursClient<$Result.GetResult<Prisma.$TotalActivityHoursPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TotalActivityHours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TotalActivityHoursFindFirstArgs} args - Arguments to find a TotalActivityHours
     * @example
     * // Get one TotalActivityHours
     * const totalActivityHours = await prisma.totalActivityHours.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TotalActivityHoursFindFirstArgs>(args?: SelectSubset<T, TotalActivityHoursFindFirstArgs<ExtArgs>>): Prisma__TotalActivityHoursClient<$Result.GetResult<Prisma.$TotalActivityHoursPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TotalActivityHours that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TotalActivityHoursFindFirstOrThrowArgs} args - Arguments to find a TotalActivityHours
     * @example
     * // Get one TotalActivityHours
     * const totalActivityHours = await prisma.totalActivityHours.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TotalActivityHoursFindFirstOrThrowArgs>(args?: SelectSubset<T, TotalActivityHoursFindFirstOrThrowArgs<ExtArgs>>): Prisma__TotalActivityHoursClient<$Result.GetResult<Prisma.$TotalActivityHoursPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TotalActivityHours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TotalActivityHoursFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TotalActivityHours
     * const totalActivityHours = await prisma.totalActivityHours.findMany()
     * 
     * // Get first 10 TotalActivityHours
     * const totalActivityHours = await prisma.totalActivityHours.findMany({ take: 10 })
     * 
     * // Only select the `service_id`
     * const totalActivityHoursWithService_idOnly = await prisma.totalActivityHours.findMany({ select: { service_id: true } })
     * 
     */
    findMany<T extends TotalActivityHoursFindManyArgs>(args?: SelectSubset<T, TotalActivityHoursFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TotalActivityHoursPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TotalActivityHours.
     * @param {TotalActivityHoursCreateArgs} args - Arguments to create a TotalActivityHours.
     * @example
     * // Create one TotalActivityHours
     * const TotalActivityHours = await prisma.totalActivityHours.create({
     *   data: {
     *     // ... data to create a TotalActivityHours
     *   }
     * })
     * 
     */
    create<T extends TotalActivityHoursCreateArgs>(args: SelectSubset<T, TotalActivityHoursCreateArgs<ExtArgs>>): Prisma__TotalActivityHoursClient<$Result.GetResult<Prisma.$TotalActivityHoursPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TotalActivityHours.
     * @param {TotalActivityHoursCreateManyArgs} args - Arguments to create many TotalActivityHours.
     * @example
     * // Create many TotalActivityHours
     * const totalActivityHours = await prisma.totalActivityHours.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TotalActivityHoursCreateManyArgs>(args?: SelectSubset<T, TotalActivityHoursCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TotalActivityHours.
     * @param {TotalActivityHoursDeleteArgs} args - Arguments to delete one TotalActivityHours.
     * @example
     * // Delete one TotalActivityHours
     * const TotalActivityHours = await prisma.totalActivityHours.delete({
     *   where: {
     *     // ... filter to delete one TotalActivityHours
     *   }
     * })
     * 
     */
    delete<T extends TotalActivityHoursDeleteArgs>(args: SelectSubset<T, TotalActivityHoursDeleteArgs<ExtArgs>>): Prisma__TotalActivityHoursClient<$Result.GetResult<Prisma.$TotalActivityHoursPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TotalActivityHours.
     * @param {TotalActivityHoursUpdateArgs} args - Arguments to update one TotalActivityHours.
     * @example
     * // Update one TotalActivityHours
     * const totalActivityHours = await prisma.totalActivityHours.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TotalActivityHoursUpdateArgs>(args: SelectSubset<T, TotalActivityHoursUpdateArgs<ExtArgs>>): Prisma__TotalActivityHoursClient<$Result.GetResult<Prisma.$TotalActivityHoursPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TotalActivityHours.
     * @param {TotalActivityHoursDeleteManyArgs} args - Arguments to filter TotalActivityHours to delete.
     * @example
     * // Delete a few TotalActivityHours
     * const { count } = await prisma.totalActivityHours.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TotalActivityHoursDeleteManyArgs>(args?: SelectSubset<T, TotalActivityHoursDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TotalActivityHours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TotalActivityHoursUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TotalActivityHours
     * const totalActivityHours = await prisma.totalActivityHours.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TotalActivityHoursUpdateManyArgs>(args: SelectSubset<T, TotalActivityHoursUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TotalActivityHours.
     * @param {TotalActivityHoursUpsertArgs} args - Arguments to update or create a TotalActivityHours.
     * @example
     * // Update or create a TotalActivityHours
     * const totalActivityHours = await prisma.totalActivityHours.upsert({
     *   create: {
     *     // ... data to create a TotalActivityHours
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TotalActivityHours we want to update
     *   }
     * })
     */
    upsert<T extends TotalActivityHoursUpsertArgs>(args: SelectSubset<T, TotalActivityHoursUpsertArgs<ExtArgs>>): Prisma__TotalActivityHoursClient<$Result.GetResult<Prisma.$TotalActivityHoursPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TotalActivityHours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TotalActivityHoursCountArgs} args - Arguments to filter TotalActivityHours to count.
     * @example
     * // Count the number of TotalActivityHours
     * const count = await prisma.totalActivityHours.count({
     *   where: {
     *     // ... the filter for the TotalActivityHours we want to count
     *   }
     * })
    **/
    count<T extends TotalActivityHoursCountArgs>(
      args?: Subset<T, TotalActivityHoursCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TotalActivityHoursCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TotalActivityHours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TotalActivityHoursAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TotalActivityHoursAggregateArgs>(args: Subset<T, TotalActivityHoursAggregateArgs>): Prisma.PrismaPromise<GetTotalActivityHoursAggregateType<T>>

    /**
     * Group by TotalActivityHours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TotalActivityHoursGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TotalActivityHoursGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TotalActivityHoursGroupByArgs['orderBy'] }
        : { orderBy?: TotalActivityHoursGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TotalActivityHoursGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTotalActivityHoursGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TotalActivityHours model
   */
  readonly fields: TotalActivityHoursFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TotalActivityHours.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TotalActivityHoursClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TotalActivityHours model
   */
  interface TotalActivityHoursFieldRefs {
    readonly service_id: FieldRef<"TotalActivityHours", 'Int'>
    readonly totalHours: FieldRef<"TotalActivityHours", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TotalActivityHours findUnique
   */
  export type TotalActivityHoursFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TotalActivityHours
     */
    select?: TotalActivityHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TotalActivityHours
     */
    omit?: TotalActivityHoursOmit<ExtArgs> | null
    /**
     * Filter, which TotalActivityHours to fetch.
     */
    where: TotalActivityHoursWhereUniqueInput
  }

  /**
   * TotalActivityHours findUniqueOrThrow
   */
  export type TotalActivityHoursFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TotalActivityHours
     */
    select?: TotalActivityHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TotalActivityHours
     */
    omit?: TotalActivityHoursOmit<ExtArgs> | null
    /**
     * Filter, which TotalActivityHours to fetch.
     */
    where: TotalActivityHoursWhereUniqueInput
  }

  /**
   * TotalActivityHours findFirst
   */
  export type TotalActivityHoursFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TotalActivityHours
     */
    select?: TotalActivityHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TotalActivityHours
     */
    omit?: TotalActivityHoursOmit<ExtArgs> | null
    /**
     * Filter, which TotalActivityHours to fetch.
     */
    where?: TotalActivityHoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TotalActivityHours to fetch.
     */
    orderBy?: TotalActivityHoursOrderByWithRelationInput | TotalActivityHoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TotalActivityHours.
     */
    cursor?: TotalActivityHoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TotalActivityHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TotalActivityHours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TotalActivityHours.
     */
    distinct?: TotalActivityHoursScalarFieldEnum | TotalActivityHoursScalarFieldEnum[]
  }

  /**
   * TotalActivityHours findFirstOrThrow
   */
  export type TotalActivityHoursFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TotalActivityHours
     */
    select?: TotalActivityHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TotalActivityHours
     */
    omit?: TotalActivityHoursOmit<ExtArgs> | null
    /**
     * Filter, which TotalActivityHours to fetch.
     */
    where?: TotalActivityHoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TotalActivityHours to fetch.
     */
    orderBy?: TotalActivityHoursOrderByWithRelationInput | TotalActivityHoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TotalActivityHours.
     */
    cursor?: TotalActivityHoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TotalActivityHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TotalActivityHours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TotalActivityHours.
     */
    distinct?: TotalActivityHoursScalarFieldEnum | TotalActivityHoursScalarFieldEnum[]
  }

  /**
   * TotalActivityHours findMany
   */
  export type TotalActivityHoursFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TotalActivityHours
     */
    select?: TotalActivityHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TotalActivityHours
     */
    omit?: TotalActivityHoursOmit<ExtArgs> | null
    /**
     * Filter, which TotalActivityHours to fetch.
     */
    where?: TotalActivityHoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TotalActivityHours to fetch.
     */
    orderBy?: TotalActivityHoursOrderByWithRelationInput | TotalActivityHoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TotalActivityHours.
     */
    cursor?: TotalActivityHoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TotalActivityHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TotalActivityHours.
     */
    skip?: number
    distinct?: TotalActivityHoursScalarFieldEnum | TotalActivityHoursScalarFieldEnum[]
  }

  /**
   * TotalActivityHours create
   */
  export type TotalActivityHoursCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TotalActivityHours
     */
    select?: TotalActivityHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TotalActivityHours
     */
    omit?: TotalActivityHoursOmit<ExtArgs> | null
    /**
     * The data needed to create a TotalActivityHours.
     */
    data: XOR<TotalActivityHoursCreateInput, TotalActivityHoursUncheckedCreateInput>
  }

  /**
   * TotalActivityHours createMany
   */
  export type TotalActivityHoursCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TotalActivityHours.
     */
    data: TotalActivityHoursCreateManyInput | TotalActivityHoursCreateManyInput[]
  }

  /**
   * TotalActivityHours update
   */
  export type TotalActivityHoursUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TotalActivityHours
     */
    select?: TotalActivityHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TotalActivityHours
     */
    omit?: TotalActivityHoursOmit<ExtArgs> | null
    /**
     * The data needed to update a TotalActivityHours.
     */
    data: XOR<TotalActivityHoursUpdateInput, TotalActivityHoursUncheckedUpdateInput>
    /**
     * Choose, which TotalActivityHours to update.
     */
    where: TotalActivityHoursWhereUniqueInput
  }

  /**
   * TotalActivityHours updateMany
   */
  export type TotalActivityHoursUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TotalActivityHours.
     */
    data: XOR<TotalActivityHoursUpdateManyMutationInput, TotalActivityHoursUncheckedUpdateManyInput>
    /**
     * Filter which TotalActivityHours to update
     */
    where?: TotalActivityHoursWhereInput
    /**
     * Limit how many TotalActivityHours to update.
     */
    limit?: number
  }

  /**
   * TotalActivityHours upsert
   */
  export type TotalActivityHoursUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TotalActivityHours
     */
    select?: TotalActivityHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TotalActivityHours
     */
    omit?: TotalActivityHoursOmit<ExtArgs> | null
    /**
     * The filter to search for the TotalActivityHours to update in case it exists.
     */
    where: TotalActivityHoursWhereUniqueInput
    /**
     * In case the TotalActivityHours found by the `where` argument doesn't exist, create a new TotalActivityHours with this data.
     */
    create: XOR<TotalActivityHoursCreateInput, TotalActivityHoursUncheckedCreateInput>
    /**
     * In case the TotalActivityHours was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TotalActivityHoursUpdateInput, TotalActivityHoursUncheckedUpdateInput>
  }

  /**
   * TotalActivityHours delete
   */
  export type TotalActivityHoursDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TotalActivityHours
     */
    select?: TotalActivityHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TotalActivityHours
     */
    omit?: TotalActivityHoursOmit<ExtArgs> | null
    /**
     * Filter which TotalActivityHours to delete.
     */
    where: TotalActivityHoursWhereUniqueInput
  }

  /**
   * TotalActivityHours deleteMany
   */
  export type TotalActivityHoursDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TotalActivityHours to delete
     */
    where?: TotalActivityHoursWhereInput
    /**
     * Limit how many TotalActivityHours to delete.
     */
    limit?: number
  }

  /**
   * TotalActivityHours without action
   */
  export type TotalActivityHoursDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TotalActivityHours
     */
    select?: TotalActivityHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TotalActivityHours
     */
    omit?: TotalActivityHoursOmit<ExtArgs> | null
  }


  /**
   * Model ServiceProgressView
   */

  export type AggregateServiceProgressView = {
    _count: ServiceProgressViewCountAggregateOutputType | null
    _avg: ServiceProgressViewAvgAggregateOutputType | null
    _sum: ServiceProgressViewSumAggregateOutputType | null
    _min: ServiceProgressViewMinAggregateOutputType | null
    _max: ServiceProgressViewMaxAggregateOutputType | null
  }

  export type ServiceProgressViewAvgAggregateOutputType = {
    serviceId: number | null
    studentId: number | null
    totalHours: number | null
    serviceProgress: number | null
  }

  export type ServiceProgressViewSumAggregateOutputType = {
    serviceId: number | null
    studentId: number | null
    totalHours: number | null
    serviceProgress: number | null
  }

  export type ServiceProgressViewMinAggregateOutputType = {
    serviceId: number | null
    studentId: number | null
    name: string | null
    institutionalEmail: string | null
    type: string | null
    totalHours: number | null
    serviceProgress: number | null
  }

  export type ServiceProgressViewMaxAggregateOutputType = {
    serviceId: number | null
    studentId: number | null
    name: string | null
    institutionalEmail: string | null
    type: string | null
    totalHours: number | null
    serviceProgress: number | null
  }

  export type ServiceProgressViewCountAggregateOutputType = {
    serviceId: number
    studentId: number
    name: number
    institutionalEmail: number
    type: number
    totalHours: number
    serviceProgress: number
    _all: number
  }


  export type ServiceProgressViewAvgAggregateInputType = {
    serviceId?: true
    studentId?: true
    totalHours?: true
    serviceProgress?: true
  }

  export type ServiceProgressViewSumAggregateInputType = {
    serviceId?: true
    studentId?: true
    totalHours?: true
    serviceProgress?: true
  }

  export type ServiceProgressViewMinAggregateInputType = {
    serviceId?: true
    studentId?: true
    name?: true
    institutionalEmail?: true
    type?: true
    totalHours?: true
    serviceProgress?: true
  }

  export type ServiceProgressViewMaxAggregateInputType = {
    serviceId?: true
    studentId?: true
    name?: true
    institutionalEmail?: true
    type?: true
    totalHours?: true
    serviceProgress?: true
  }

  export type ServiceProgressViewCountAggregateInputType = {
    serviceId?: true
    studentId?: true
    name?: true
    institutionalEmail?: true
    type?: true
    totalHours?: true
    serviceProgress?: true
    _all?: true
  }

  export type ServiceProgressViewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceProgressView to aggregate.
     */
    where?: ServiceProgressViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceProgressViews to fetch.
     */
    orderBy?: ServiceProgressViewOrderByWithRelationInput | ServiceProgressViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceProgressViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceProgressViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceProgressViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServiceProgressViews
    **/
    _count?: true | ServiceProgressViewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceProgressViewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceProgressViewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceProgressViewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceProgressViewMaxAggregateInputType
  }

  export type GetServiceProgressViewAggregateType<T extends ServiceProgressViewAggregateArgs> = {
        [P in keyof T & keyof AggregateServiceProgressView]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServiceProgressView[P]>
      : GetScalarType<T[P], AggregateServiceProgressView[P]>
  }




  export type ServiceProgressViewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceProgressViewWhereInput
    orderBy?: ServiceProgressViewOrderByWithAggregationInput | ServiceProgressViewOrderByWithAggregationInput[]
    by: ServiceProgressViewScalarFieldEnum[] | ServiceProgressViewScalarFieldEnum
    having?: ServiceProgressViewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceProgressViewCountAggregateInputType | true
    _avg?: ServiceProgressViewAvgAggregateInputType
    _sum?: ServiceProgressViewSumAggregateInputType
    _min?: ServiceProgressViewMinAggregateInputType
    _max?: ServiceProgressViewMaxAggregateInputType
  }

  export type ServiceProgressViewGroupByOutputType = {
    serviceId: number
    studentId: number
    name: string | null
    institutionalEmail: string | null
    type: string | null
    totalHours: number | null
    serviceProgress: number | null
    _count: ServiceProgressViewCountAggregateOutputType | null
    _avg: ServiceProgressViewAvgAggregateOutputType | null
    _sum: ServiceProgressViewSumAggregateOutputType | null
    _min: ServiceProgressViewMinAggregateOutputType | null
    _max: ServiceProgressViewMaxAggregateOutputType | null
  }

  type GetServiceProgressViewGroupByPayload<T extends ServiceProgressViewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceProgressViewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceProgressViewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceProgressViewGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceProgressViewGroupByOutputType[P]>
        }
      >
    >


  export type ServiceProgressViewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    serviceId?: boolean
    studentId?: boolean
    name?: boolean
    institutionalEmail?: boolean
    type?: boolean
    totalHours?: boolean
    serviceProgress?: boolean
  }, ExtArgs["result"]["serviceProgressView"]>



  export type ServiceProgressViewSelectScalar = {
    serviceId?: boolean
    studentId?: boolean
    name?: boolean
    institutionalEmail?: boolean
    type?: boolean
    totalHours?: boolean
    serviceProgress?: boolean
  }

  export type ServiceProgressViewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"serviceId" | "studentId" | "name" | "institutionalEmail" | "type" | "totalHours" | "serviceProgress", ExtArgs["result"]["serviceProgressView"]>

  export type $ServiceProgressViewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServiceProgressView"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      serviceId: number
      studentId: number
      name: string | null
      institutionalEmail: string | null
      type: string | null
      totalHours: number | null
      serviceProgress: number | null
    }, ExtArgs["result"]["serviceProgressView"]>
    composites: {}
  }

  type ServiceProgressViewGetPayload<S extends boolean | null | undefined | ServiceProgressViewDefaultArgs> = $Result.GetResult<Prisma.$ServiceProgressViewPayload, S>

  type ServiceProgressViewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceProgressViewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: ServiceProgressViewCountAggregateInputType | true
    }

  export interface ServiceProgressViewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServiceProgressView'], meta: { name: 'ServiceProgressView' } }
    /**
     * Find zero or one ServiceProgressView that matches the filter.
     * @param {ServiceProgressViewFindUniqueArgs} args - Arguments to find a ServiceProgressView
     * @example
     * // Get one ServiceProgressView
     * const serviceProgressView = await prisma.serviceProgressView.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceProgressViewFindUniqueArgs>(args: SelectSubset<T, ServiceProgressViewFindUniqueArgs<ExtArgs>>): Prisma__ServiceProgressViewClient<$Result.GetResult<Prisma.$ServiceProgressViewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ServiceProgressView that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceProgressViewFindUniqueOrThrowArgs} args - Arguments to find a ServiceProgressView
     * @example
     * // Get one ServiceProgressView
     * const serviceProgressView = await prisma.serviceProgressView.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceProgressViewFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceProgressViewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceProgressViewClient<$Result.GetResult<Prisma.$ServiceProgressViewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceProgressView that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceProgressViewFindFirstArgs} args - Arguments to find a ServiceProgressView
     * @example
     * // Get one ServiceProgressView
     * const serviceProgressView = await prisma.serviceProgressView.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceProgressViewFindFirstArgs>(args?: SelectSubset<T, ServiceProgressViewFindFirstArgs<ExtArgs>>): Prisma__ServiceProgressViewClient<$Result.GetResult<Prisma.$ServiceProgressViewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceProgressView that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceProgressViewFindFirstOrThrowArgs} args - Arguments to find a ServiceProgressView
     * @example
     * // Get one ServiceProgressView
     * const serviceProgressView = await prisma.serviceProgressView.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceProgressViewFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceProgressViewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceProgressViewClient<$Result.GetResult<Prisma.$ServiceProgressViewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ServiceProgressViews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceProgressViewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceProgressViews
     * const serviceProgressViews = await prisma.serviceProgressView.findMany()
     * 
     * // Get first 10 ServiceProgressViews
     * const serviceProgressViews = await prisma.serviceProgressView.findMany({ take: 10 })
     * 
     * // Only select the `serviceId`
     * const serviceProgressViewWithServiceIdOnly = await prisma.serviceProgressView.findMany({ select: { serviceId: true } })
     * 
     */
    findMany<T extends ServiceProgressViewFindManyArgs>(args?: SelectSubset<T, ServiceProgressViewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceProgressViewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ServiceProgressView.
     * @param {ServiceProgressViewCreateArgs} args - Arguments to create a ServiceProgressView.
     * @example
     * // Create one ServiceProgressView
     * const ServiceProgressView = await prisma.serviceProgressView.create({
     *   data: {
     *     // ... data to create a ServiceProgressView
     *   }
     * })
     * 
     */
    create<T extends ServiceProgressViewCreateArgs>(args: SelectSubset<T, ServiceProgressViewCreateArgs<ExtArgs>>): Prisma__ServiceProgressViewClient<$Result.GetResult<Prisma.$ServiceProgressViewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ServiceProgressViews.
     * @param {ServiceProgressViewCreateManyArgs} args - Arguments to create many ServiceProgressViews.
     * @example
     * // Create many ServiceProgressViews
     * const serviceProgressView = await prisma.serviceProgressView.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceProgressViewCreateManyArgs>(args?: SelectSubset<T, ServiceProgressViewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ServiceProgressView.
     * @param {ServiceProgressViewDeleteArgs} args - Arguments to delete one ServiceProgressView.
     * @example
     * // Delete one ServiceProgressView
     * const ServiceProgressView = await prisma.serviceProgressView.delete({
     *   where: {
     *     // ... filter to delete one ServiceProgressView
     *   }
     * })
     * 
     */
    delete<T extends ServiceProgressViewDeleteArgs>(args: SelectSubset<T, ServiceProgressViewDeleteArgs<ExtArgs>>): Prisma__ServiceProgressViewClient<$Result.GetResult<Prisma.$ServiceProgressViewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ServiceProgressView.
     * @param {ServiceProgressViewUpdateArgs} args - Arguments to update one ServiceProgressView.
     * @example
     * // Update one ServiceProgressView
     * const serviceProgressView = await prisma.serviceProgressView.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceProgressViewUpdateArgs>(args: SelectSubset<T, ServiceProgressViewUpdateArgs<ExtArgs>>): Prisma__ServiceProgressViewClient<$Result.GetResult<Prisma.$ServiceProgressViewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ServiceProgressViews.
     * @param {ServiceProgressViewDeleteManyArgs} args - Arguments to filter ServiceProgressViews to delete.
     * @example
     * // Delete a few ServiceProgressViews
     * const { count } = await prisma.serviceProgressView.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceProgressViewDeleteManyArgs>(args?: SelectSubset<T, ServiceProgressViewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceProgressViews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceProgressViewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceProgressViews
     * const serviceProgressView = await prisma.serviceProgressView.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceProgressViewUpdateManyArgs>(args: SelectSubset<T, ServiceProgressViewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ServiceProgressView.
     * @param {ServiceProgressViewUpsertArgs} args - Arguments to update or create a ServiceProgressView.
     * @example
     * // Update or create a ServiceProgressView
     * const serviceProgressView = await prisma.serviceProgressView.upsert({
     *   create: {
     *     // ... data to create a ServiceProgressView
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceProgressView we want to update
     *   }
     * })
     */
    upsert<T extends ServiceProgressViewUpsertArgs>(args: SelectSubset<T, ServiceProgressViewUpsertArgs<ExtArgs>>): Prisma__ServiceProgressViewClient<$Result.GetResult<Prisma.$ServiceProgressViewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ServiceProgressViews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceProgressViewCountArgs} args - Arguments to filter ServiceProgressViews to count.
     * @example
     * // Count the number of ServiceProgressViews
     * const count = await prisma.serviceProgressView.count({
     *   where: {
     *     // ... the filter for the ServiceProgressViews we want to count
     *   }
     * })
    **/
    count<T extends ServiceProgressViewCountArgs>(
      args?: Subset<T, ServiceProgressViewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceProgressViewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServiceProgressView.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceProgressViewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceProgressViewAggregateArgs>(args: Subset<T, ServiceProgressViewAggregateArgs>): Prisma.PrismaPromise<GetServiceProgressViewAggregateType<T>>

    /**
     * Group by ServiceProgressView.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceProgressViewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceProgressViewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceProgressViewGroupByArgs['orderBy'] }
        : { orderBy?: ServiceProgressViewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceProgressViewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceProgressViewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServiceProgressView model
   */
  readonly fields: ServiceProgressViewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServiceProgressView.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceProgressViewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ServiceProgressView model
   */
  interface ServiceProgressViewFieldRefs {
    readonly serviceId: FieldRef<"ServiceProgressView", 'Int'>
    readonly studentId: FieldRef<"ServiceProgressView", 'Int'>
    readonly name: FieldRef<"ServiceProgressView", 'String'>
    readonly institutionalEmail: FieldRef<"ServiceProgressView", 'String'>
    readonly type: FieldRef<"ServiceProgressView", 'String'>
    readonly totalHours: FieldRef<"ServiceProgressView", 'Int'>
    readonly serviceProgress: FieldRef<"ServiceProgressView", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ServiceProgressView findUnique
   */
  export type ServiceProgressViewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceProgressView
     */
    select?: ServiceProgressViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceProgressView
     */
    omit?: ServiceProgressViewOmit<ExtArgs> | null
    /**
     * Filter, which ServiceProgressView to fetch.
     */
    where: ServiceProgressViewWhereUniqueInput
  }

  /**
   * ServiceProgressView findUniqueOrThrow
   */
  export type ServiceProgressViewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceProgressView
     */
    select?: ServiceProgressViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceProgressView
     */
    omit?: ServiceProgressViewOmit<ExtArgs> | null
    /**
     * Filter, which ServiceProgressView to fetch.
     */
    where: ServiceProgressViewWhereUniqueInput
  }

  /**
   * ServiceProgressView findFirst
   */
  export type ServiceProgressViewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceProgressView
     */
    select?: ServiceProgressViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceProgressView
     */
    omit?: ServiceProgressViewOmit<ExtArgs> | null
    /**
     * Filter, which ServiceProgressView to fetch.
     */
    where?: ServiceProgressViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceProgressViews to fetch.
     */
    orderBy?: ServiceProgressViewOrderByWithRelationInput | ServiceProgressViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceProgressViews.
     */
    cursor?: ServiceProgressViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceProgressViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceProgressViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceProgressViews.
     */
    distinct?: ServiceProgressViewScalarFieldEnum | ServiceProgressViewScalarFieldEnum[]
  }

  /**
   * ServiceProgressView findFirstOrThrow
   */
  export type ServiceProgressViewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceProgressView
     */
    select?: ServiceProgressViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceProgressView
     */
    omit?: ServiceProgressViewOmit<ExtArgs> | null
    /**
     * Filter, which ServiceProgressView to fetch.
     */
    where?: ServiceProgressViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceProgressViews to fetch.
     */
    orderBy?: ServiceProgressViewOrderByWithRelationInput | ServiceProgressViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceProgressViews.
     */
    cursor?: ServiceProgressViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceProgressViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceProgressViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceProgressViews.
     */
    distinct?: ServiceProgressViewScalarFieldEnum | ServiceProgressViewScalarFieldEnum[]
  }

  /**
   * ServiceProgressView findMany
   */
  export type ServiceProgressViewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceProgressView
     */
    select?: ServiceProgressViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceProgressView
     */
    omit?: ServiceProgressViewOmit<ExtArgs> | null
    /**
     * Filter, which ServiceProgressViews to fetch.
     */
    where?: ServiceProgressViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceProgressViews to fetch.
     */
    orderBy?: ServiceProgressViewOrderByWithRelationInput | ServiceProgressViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServiceProgressViews.
     */
    cursor?: ServiceProgressViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceProgressViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceProgressViews.
     */
    skip?: number
    distinct?: ServiceProgressViewScalarFieldEnum | ServiceProgressViewScalarFieldEnum[]
  }

  /**
   * ServiceProgressView create
   */
  export type ServiceProgressViewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceProgressView
     */
    select?: ServiceProgressViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceProgressView
     */
    omit?: ServiceProgressViewOmit<ExtArgs> | null
    /**
     * The data needed to create a ServiceProgressView.
     */
    data: XOR<ServiceProgressViewCreateInput, ServiceProgressViewUncheckedCreateInput>
  }

  /**
   * ServiceProgressView createMany
   */
  export type ServiceProgressViewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServiceProgressViews.
     */
    data: ServiceProgressViewCreateManyInput | ServiceProgressViewCreateManyInput[]
  }

  /**
   * ServiceProgressView update
   */
  export type ServiceProgressViewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceProgressView
     */
    select?: ServiceProgressViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceProgressView
     */
    omit?: ServiceProgressViewOmit<ExtArgs> | null
    /**
     * The data needed to update a ServiceProgressView.
     */
    data: XOR<ServiceProgressViewUpdateInput, ServiceProgressViewUncheckedUpdateInput>
    /**
     * Choose, which ServiceProgressView to update.
     */
    where: ServiceProgressViewWhereUniqueInput
  }

  /**
   * ServiceProgressView updateMany
   */
  export type ServiceProgressViewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServiceProgressViews.
     */
    data: XOR<ServiceProgressViewUpdateManyMutationInput, ServiceProgressViewUncheckedUpdateManyInput>
    /**
     * Filter which ServiceProgressViews to update
     */
    where?: ServiceProgressViewWhereInput
    /**
     * Limit how many ServiceProgressViews to update.
     */
    limit?: number
  }

  /**
   * ServiceProgressView upsert
   */
  export type ServiceProgressViewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceProgressView
     */
    select?: ServiceProgressViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceProgressView
     */
    omit?: ServiceProgressViewOmit<ExtArgs> | null
    /**
     * The filter to search for the ServiceProgressView to update in case it exists.
     */
    where: ServiceProgressViewWhereUniqueInput
    /**
     * In case the ServiceProgressView found by the `where` argument doesn't exist, create a new ServiceProgressView with this data.
     */
    create: XOR<ServiceProgressViewCreateInput, ServiceProgressViewUncheckedCreateInput>
    /**
     * In case the ServiceProgressView was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceProgressViewUpdateInput, ServiceProgressViewUncheckedUpdateInput>
  }

  /**
   * ServiceProgressView delete
   */
  export type ServiceProgressViewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceProgressView
     */
    select?: ServiceProgressViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceProgressView
     */
    omit?: ServiceProgressViewOmit<ExtArgs> | null
    /**
     * Filter which ServiceProgressView to delete.
     */
    where: ServiceProgressViewWhereUniqueInput
  }

  /**
   * ServiceProgressView deleteMany
   */
  export type ServiceProgressViewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceProgressViews to delete
     */
    where?: ServiceProgressViewWhereInput
    /**
     * Limit how many ServiceProgressViews to delete.
     */
    limit?: number
  }

  /**
   * ServiceProgressView without action
   */
  export type ServiceProgressViewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceProgressView
     */
    select?: ServiceProgressViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceProgressView
     */
    omit?: ServiceProgressViewOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable',
    Snapshot: 'Snapshot'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DocumentsScalarFieldEnum: {
    documentId: 'documentId',
    docStatus_id: 'docStatus_id',
    codedFile: 'codedFile',
    fileType: 'fileType',
    service_id: 'service_id'
  };

  export type DocumentsScalarFieldEnum = (typeof DocumentsScalarFieldEnum)[keyof typeof DocumentsScalarFieldEnum]


  export const DocumentStatusListScalarFieldEnum: {
    docStatusId: 'docStatusId',
    status: 'status',
    description: 'description'
  };

  export type DocumentStatusListScalarFieldEnum = (typeof DocumentStatusListScalarFieldEnum)[keyof typeof DocumentStatusListScalarFieldEnum]


  export const ReceivingUnitScalarFieldEnum: {
    receivingUnitId: 'receivingUnitId',
    institutionName: 'institutionName',
    contactNumber: 'contactNumber',
    institutionDirection: 'institutionDirection',
    contactEmail: 'contactEmail',
    principalActivities: 'principalActivities'
  };

  export type ReceivingUnitScalarFieldEnum = (typeof ReceivingUnitScalarFieldEnum)[keyof typeof ReceivingUnitScalarFieldEnum]


  export const ServiceScalarFieldEnum: {
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

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const ServiceActivitiesScalarFieldEnum: {
    serviceActivitieId: 'serviceActivitieId',
    service_id: 'service_id',
    description: 'description',
    postingDate: 'postingDate',
    hours: 'hours'
  };

  export type ServiceActivitiesScalarFieldEnum = (typeof ServiceActivitiesScalarFieldEnum)[keyof typeof ServiceActivitiesScalarFieldEnum]


  export const ServiceStatusListScalarFieldEnum: {
    serviceStatusId: 'serviceStatusId',
    status: 'status',
    description: 'description'
  };

  export type ServiceStatusListScalarFieldEnum = (typeof ServiceStatusListScalarFieldEnum)[keyof typeof ServiceStatusListScalarFieldEnum]


  export const ServiceTypeScalarFieldEnum: {
    serviceTypeId: 'serviceTypeId',
    type: 'type',
    description: 'description',
    quantityToComplete: 'quantityToComplete'
  };

  export type ServiceTypeScalarFieldEnum = (typeof ServiceTypeScalarFieldEnum)[keyof typeof ServiceTypeScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    studentId: 'studentId',
    name: 'name',
    email: 'email',
    phoneNumber: 'phoneNumber',
    careerInCourse: 'careerInCourse',
    classGroup: 'classGroup',
    enrollmentNumber: 'enrollmentNumber',
    careerModality: 'careerModality',
    grade: 'grade',
    studentStatus_id: 'studentStatus_id',
    institutionalEmail: 'institutionalEmail'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const ServiceActivitiesByUserScalarFieldEnum: {
    serviceActivitieId: 'serviceActivitieId',
    student_id: 'student_id',
    description: 'description',
    postingDate: 'postingDate',
    hours: 'hours'
  };

  export type ServiceActivitiesByUserScalarFieldEnum = (typeof ServiceActivitiesByUserScalarFieldEnum)[keyof typeof ServiceActivitiesByUserScalarFieldEnum]


  export const TotalActivityHoursScalarFieldEnum: {
    service_id: 'service_id',
    totalHours: 'totalHours'
  };

  export type TotalActivityHoursScalarFieldEnum = (typeof TotalActivityHoursScalarFieldEnum)[keyof typeof TotalActivityHoursScalarFieldEnum]


  export const ServiceProgressViewScalarFieldEnum: {
    serviceId: 'serviceId',
    studentId: 'studentId',
    name: 'name',
    institutionalEmail: 'institutionalEmail',
    type: 'type',
    totalHours: 'totalHours',
    serviceProgress: 'serviceProgress'
  };

  export type ServiceProgressViewScalarFieldEnum = (typeof ServiceProgressViewScalarFieldEnum)[keyof typeof ServiceProgressViewScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type DocumentsWhereInput = {
    AND?: DocumentsWhereInput | DocumentsWhereInput[]
    OR?: DocumentsWhereInput[]
    NOT?: DocumentsWhereInput | DocumentsWhereInput[]
    documentId?: IntFilter<"Documents"> | number
    docStatus_id?: IntNullableFilter<"Documents"> | number | null
    codedFile?: StringNullableFilter<"Documents"> | string | null
    fileType?: StringNullableFilter<"Documents"> | string | null
    service_id?: IntNullableFilter<"Documents"> | number | null
    DocumentStatusList?: XOR<DocumentStatusListNullableScalarRelationFilter, DocumentStatusListWhereInput> | null
    Service?: XOR<ServiceNullableScalarRelationFilter, ServiceWhereInput> | null
  }

  export type DocumentsOrderByWithRelationInput = {
    documentId?: SortOrder
    docStatus_id?: SortOrderInput | SortOrder
    codedFile?: SortOrderInput | SortOrder
    fileType?: SortOrderInput | SortOrder
    service_id?: SortOrderInput | SortOrder
    DocumentStatusList?: DocumentStatusListOrderByWithRelationInput
    Service?: ServiceOrderByWithRelationInput
  }

  export type DocumentsWhereUniqueInput = Prisma.AtLeast<{
    documentId?: number
    AND?: DocumentsWhereInput | DocumentsWhereInput[]
    OR?: DocumentsWhereInput[]
    NOT?: DocumentsWhereInput | DocumentsWhereInput[]
    docStatus_id?: IntNullableFilter<"Documents"> | number | null
    codedFile?: StringNullableFilter<"Documents"> | string | null
    fileType?: StringNullableFilter<"Documents"> | string | null
    service_id?: IntNullableFilter<"Documents"> | number | null
    DocumentStatusList?: XOR<DocumentStatusListNullableScalarRelationFilter, DocumentStatusListWhereInput> | null
    Service?: XOR<ServiceNullableScalarRelationFilter, ServiceWhereInput> | null
  }, "documentId">

  export type DocumentsOrderByWithAggregationInput = {
    documentId?: SortOrder
    docStatus_id?: SortOrderInput | SortOrder
    codedFile?: SortOrderInput | SortOrder
    fileType?: SortOrderInput | SortOrder
    service_id?: SortOrderInput | SortOrder
    _count?: DocumentsCountOrderByAggregateInput
    _avg?: DocumentsAvgOrderByAggregateInput
    _max?: DocumentsMaxOrderByAggregateInput
    _min?: DocumentsMinOrderByAggregateInput
    _sum?: DocumentsSumOrderByAggregateInput
  }

  export type DocumentsScalarWhereWithAggregatesInput = {
    AND?: DocumentsScalarWhereWithAggregatesInput | DocumentsScalarWhereWithAggregatesInput[]
    OR?: DocumentsScalarWhereWithAggregatesInput[]
    NOT?: DocumentsScalarWhereWithAggregatesInput | DocumentsScalarWhereWithAggregatesInput[]
    documentId?: IntWithAggregatesFilter<"Documents"> | number
    docStatus_id?: IntNullableWithAggregatesFilter<"Documents"> | number | null
    codedFile?: StringNullableWithAggregatesFilter<"Documents"> | string | null
    fileType?: StringNullableWithAggregatesFilter<"Documents"> | string | null
    service_id?: IntNullableWithAggregatesFilter<"Documents"> | number | null
  }

  export type DocumentStatusListWhereInput = {
    AND?: DocumentStatusListWhereInput | DocumentStatusListWhereInput[]
    OR?: DocumentStatusListWhereInput[]
    NOT?: DocumentStatusListWhereInput | DocumentStatusListWhereInput[]
    docStatusId?: IntFilter<"DocumentStatusList"> | number
    status?: StringNullableFilter<"DocumentStatusList"> | string | null
    description?: StringNullableFilter<"DocumentStatusList"> | string | null
    Documents?: DocumentsListRelationFilter
  }

  export type DocumentStatusListOrderByWithRelationInput = {
    docStatusId?: SortOrder
    status?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    Documents?: DocumentsOrderByRelationAggregateInput
  }

  export type DocumentStatusListWhereUniqueInput = Prisma.AtLeast<{
    docStatusId?: number
    AND?: DocumentStatusListWhereInput | DocumentStatusListWhereInput[]
    OR?: DocumentStatusListWhereInput[]
    NOT?: DocumentStatusListWhereInput | DocumentStatusListWhereInput[]
    status?: StringNullableFilter<"DocumentStatusList"> | string | null
    description?: StringNullableFilter<"DocumentStatusList"> | string | null
    Documents?: DocumentsListRelationFilter
  }, "docStatusId">

  export type DocumentStatusListOrderByWithAggregationInput = {
    docStatusId?: SortOrder
    status?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    _count?: DocumentStatusListCountOrderByAggregateInput
    _avg?: DocumentStatusListAvgOrderByAggregateInput
    _max?: DocumentStatusListMaxOrderByAggregateInput
    _min?: DocumentStatusListMinOrderByAggregateInput
    _sum?: DocumentStatusListSumOrderByAggregateInput
  }

  export type DocumentStatusListScalarWhereWithAggregatesInput = {
    AND?: DocumentStatusListScalarWhereWithAggregatesInput | DocumentStatusListScalarWhereWithAggregatesInput[]
    OR?: DocumentStatusListScalarWhereWithAggregatesInput[]
    NOT?: DocumentStatusListScalarWhereWithAggregatesInput | DocumentStatusListScalarWhereWithAggregatesInput[]
    docStatusId?: IntWithAggregatesFilter<"DocumentStatusList"> | number
    status?: StringNullableWithAggregatesFilter<"DocumentStatusList"> | string | null
    description?: StringNullableWithAggregatesFilter<"DocumentStatusList"> | string | null
  }

  export type ReceivingUnitWhereInput = {
    AND?: ReceivingUnitWhereInput | ReceivingUnitWhereInput[]
    OR?: ReceivingUnitWhereInput[]
    NOT?: ReceivingUnitWhereInput | ReceivingUnitWhereInput[]
    receivingUnitId?: IntFilter<"ReceivingUnit"> | number
    institutionName?: StringNullableFilter<"ReceivingUnit"> | string | null
    contactNumber?: StringNullableFilter<"ReceivingUnit"> | string | null
    institutionDirection?: StringNullableFilter<"ReceivingUnit"> | string | null
    contactEmail?: StringNullableFilter<"ReceivingUnit"> | string | null
    principalActivities?: StringNullableFilter<"ReceivingUnit"> | string | null
    Service?: ServiceListRelationFilter
  }

  export type ReceivingUnitOrderByWithRelationInput = {
    receivingUnitId?: SortOrder
    institutionName?: SortOrderInput | SortOrder
    contactNumber?: SortOrderInput | SortOrder
    institutionDirection?: SortOrderInput | SortOrder
    contactEmail?: SortOrderInput | SortOrder
    principalActivities?: SortOrderInput | SortOrder
    Service?: ServiceOrderByRelationAggregateInput
  }

  export type ReceivingUnitWhereUniqueInput = Prisma.AtLeast<{
    receivingUnitId?: number
    AND?: ReceivingUnitWhereInput | ReceivingUnitWhereInput[]
    OR?: ReceivingUnitWhereInput[]
    NOT?: ReceivingUnitWhereInput | ReceivingUnitWhereInput[]
    institutionName?: StringNullableFilter<"ReceivingUnit"> | string | null
    contactNumber?: StringNullableFilter<"ReceivingUnit"> | string | null
    institutionDirection?: StringNullableFilter<"ReceivingUnit"> | string | null
    contactEmail?: StringNullableFilter<"ReceivingUnit"> | string | null
    principalActivities?: StringNullableFilter<"ReceivingUnit"> | string | null
    Service?: ServiceListRelationFilter
  }, "receivingUnitId">

  export type ReceivingUnitOrderByWithAggregationInput = {
    receivingUnitId?: SortOrder
    institutionName?: SortOrderInput | SortOrder
    contactNumber?: SortOrderInput | SortOrder
    institutionDirection?: SortOrderInput | SortOrder
    contactEmail?: SortOrderInput | SortOrder
    principalActivities?: SortOrderInput | SortOrder
    _count?: ReceivingUnitCountOrderByAggregateInput
    _avg?: ReceivingUnitAvgOrderByAggregateInput
    _max?: ReceivingUnitMaxOrderByAggregateInput
    _min?: ReceivingUnitMinOrderByAggregateInput
    _sum?: ReceivingUnitSumOrderByAggregateInput
  }

  export type ReceivingUnitScalarWhereWithAggregatesInput = {
    AND?: ReceivingUnitScalarWhereWithAggregatesInput | ReceivingUnitScalarWhereWithAggregatesInput[]
    OR?: ReceivingUnitScalarWhereWithAggregatesInput[]
    NOT?: ReceivingUnitScalarWhereWithAggregatesInput | ReceivingUnitScalarWhereWithAggregatesInput[]
    receivingUnitId?: IntWithAggregatesFilter<"ReceivingUnit"> | number
    institutionName?: StringNullableWithAggregatesFilter<"ReceivingUnit"> | string | null
    contactNumber?: StringNullableWithAggregatesFilter<"ReceivingUnit"> | string | null
    institutionDirection?: StringNullableWithAggregatesFilter<"ReceivingUnit"> | string | null
    contactEmail?: StringNullableWithAggregatesFilter<"ReceivingUnit"> | string | null
    principalActivities?: StringNullableWithAggregatesFilter<"ReceivingUnit"> | string | null
  }

  export type ServiceWhereInput = {
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    serviceId?: IntFilter<"Service"> | number
    student_id?: IntNullableFilter<"Service"> | number | null
    serviceType_id?: IntNullableFilter<"Service"> | number | null
    servicesStartDate?: DateTimeNullableFilter<"Service"> | Date | string | null
    service_status_id?: IntNullableFilter<"Service"> | number | null
    supervisorName?: StringNullableFilter<"Service"> | string | null
    supervisorContactNumber?: StringNullableFilter<"Service"> | string | null
    programObjective?: StringNullableFilter<"Service"> | string | null
    supervisorPosition?: StringNullableFilter<"Service"> | string | null
    receivingUnit_id?: IntNullableFilter<"Service"> | number | null
    Documents?: DocumentsListRelationFilter
    ReceivingUnit?: XOR<ReceivingUnitNullableScalarRelationFilter, ReceivingUnitWhereInput> | null
    ServiceType?: XOR<ServiceTypeNullableScalarRelationFilter, ServiceTypeWhereInput> | null
    ServiceStatusList?: XOR<ServiceStatusListNullableScalarRelationFilter, ServiceStatusListWhereInput> | null
    Student?: XOR<StudentNullableScalarRelationFilter, StudentWhereInput> | null
    ServiceActivities?: ServiceActivitiesListRelationFilter
  }

  export type ServiceOrderByWithRelationInput = {
    serviceId?: SortOrder
    student_id?: SortOrderInput | SortOrder
    serviceType_id?: SortOrderInput | SortOrder
    servicesStartDate?: SortOrderInput | SortOrder
    service_status_id?: SortOrderInput | SortOrder
    supervisorName?: SortOrderInput | SortOrder
    supervisorContactNumber?: SortOrderInput | SortOrder
    programObjective?: SortOrderInput | SortOrder
    supervisorPosition?: SortOrderInput | SortOrder
    receivingUnit_id?: SortOrderInput | SortOrder
    Documents?: DocumentsOrderByRelationAggregateInput
    ReceivingUnit?: ReceivingUnitOrderByWithRelationInput
    ServiceType?: ServiceTypeOrderByWithRelationInput
    ServiceStatusList?: ServiceStatusListOrderByWithRelationInput
    Student?: StudentOrderByWithRelationInput
    ServiceActivities?: ServiceActivitiesOrderByRelationAggregateInput
  }

  export type ServiceWhereUniqueInput = Prisma.AtLeast<{
    serviceId?: number
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    student_id?: IntNullableFilter<"Service"> | number | null
    serviceType_id?: IntNullableFilter<"Service"> | number | null
    servicesStartDate?: DateTimeNullableFilter<"Service"> | Date | string | null
    service_status_id?: IntNullableFilter<"Service"> | number | null
    supervisorName?: StringNullableFilter<"Service"> | string | null
    supervisorContactNumber?: StringNullableFilter<"Service"> | string | null
    programObjective?: StringNullableFilter<"Service"> | string | null
    supervisorPosition?: StringNullableFilter<"Service"> | string | null
    receivingUnit_id?: IntNullableFilter<"Service"> | number | null
    Documents?: DocumentsListRelationFilter
    ReceivingUnit?: XOR<ReceivingUnitNullableScalarRelationFilter, ReceivingUnitWhereInput> | null
    ServiceType?: XOR<ServiceTypeNullableScalarRelationFilter, ServiceTypeWhereInput> | null
    ServiceStatusList?: XOR<ServiceStatusListNullableScalarRelationFilter, ServiceStatusListWhereInput> | null
    Student?: XOR<StudentNullableScalarRelationFilter, StudentWhereInput> | null
    ServiceActivities?: ServiceActivitiesListRelationFilter
  }, "serviceId">

  export type ServiceOrderByWithAggregationInput = {
    serviceId?: SortOrder
    student_id?: SortOrderInput | SortOrder
    serviceType_id?: SortOrderInput | SortOrder
    servicesStartDate?: SortOrderInput | SortOrder
    service_status_id?: SortOrderInput | SortOrder
    supervisorName?: SortOrderInput | SortOrder
    supervisorContactNumber?: SortOrderInput | SortOrder
    programObjective?: SortOrderInput | SortOrder
    supervisorPosition?: SortOrderInput | SortOrder
    receivingUnit_id?: SortOrderInput | SortOrder
    _count?: ServiceCountOrderByAggregateInput
    _avg?: ServiceAvgOrderByAggregateInput
    _max?: ServiceMaxOrderByAggregateInput
    _min?: ServiceMinOrderByAggregateInput
    _sum?: ServiceSumOrderByAggregateInput
  }

  export type ServiceScalarWhereWithAggregatesInput = {
    AND?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    OR?: ServiceScalarWhereWithAggregatesInput[]
    NOT?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    serviceId?: IntWithAggregatesFilter<"Service"> | number
    student_id?: IntNullableWithAggregatesFilter<"Service"> | number | null
    serviceType_id?: IntNullableWithAggregatesFilter<"Service"> | number | null
    servicesStartDate?: DateTimeNullableWithAggregatesFilter<"Service"> | Date | string | null
    service_status_id?: IntNullableWithAggregatesFilter<"Service"> | number | null
    supervisorName?: StringNullableWithAggregatesFilter<"Service"> | string | null
    supervisorContactNumber?: StringNullableWithAggregatesFilter<"Service"> | string | null
    programObjective?: StringNullableWithAggregatesFilter<"Service"> | string | null
    supervisorPosition?: StringNullableWithAggregatesFilter<"Service"> | string | null
    receivingUnit_id?: IntNullableWithAggregatesFilter<"Service"> | number | null
  }

  export type ServiceActivitiesWhereInput = {
    AND?: ServiceActivitiesWhereInput | ServiceActivitiesWhereInput[]
    OR?: ServiceActivitiesWhereInput[]
    NOT?: ServiceActivitiesWhereInput | ServiceActivitiesWhereInput[]
    serviceActivitieId?: IntFilter<"ServiceActivities"> | number
    service_id?: IntNullableFilter<"ServiceActivities"> | number | null
    description?: StringNullableFilter<"ServiceActivities"> | string | null
    postingDate?: DateTimeNullableFilter<"ServiceActivities"> | Date | string | null
    hours?: IntNullableFilter<"ServiceActivities"> | number | null
    Service?: XOR<ServiceNullableScalarRelationFilter, ServiceWhereInput> | null
  }

  export type ServiceActivitiesOrderByWithRelationInput = {
    serviceActivitieId?: SortOrder
    service_id?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    postingDate?: SortOrderInput | SortOrder
    hours?: SortOrderInput | SortOrder
    Service?: ServiceOrderByWithRelationInput
  }

  export type ServiceActivitiesWhereUniqueInput = Prisma.AtLeast<{
    serviceActivitieId?: number
    AND?: ServiceActivitiesWhereInput | ServiceActivitiesWhereInput[]
    OR?: ServiceActivitiesWhereInput[]
    NOT?: ServiceActivitiesWhereInput | ServiceActivitiesWhereInput[]
    service_id?: IntNullableFilter<"ServiceActivities"> | number | null
    description?: StringNullableFilter<"ServiceActivities"> | string | null
    postingDate?: DateTimeNullableFilter<"ServiceActivities"> | Date | string | null
    hours?: IntNullableFilter<"ServiceActivities"> | number | null
    Service?: XOR<ServiceNullableScalarRelationFilter, ServiceWhereInput> | null
  }, "serviceActivitieId">

  export type ServiceActivitiesOrderByWithAggregationInput = {
    serviceActivitieId?: SortOrder
    service_id?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    postingDate?: SortOrderInput | SortOrder
    hours?: SortOrderInput | SortOrder
    _count?: ServiceActivitiesCountOrderByAggregateInput
    _avg?: ServiceActivitiesAvgOrderByAggregateInput
    _max?: ServiceActivitiesMaxOrderByAggregateInput
    _min?: ServiceActivitiesMinOrderByAggregateInput
    _sum?: ServiceActivitiesSumOrderByAggregateInput
  }

  export type ServiceActivitiesScalarWhereWithAggregatesInput = {
    AND?: ServiceActivitiesScalarWhereWithAggregatesInput | ServiceActivitiesScalarWhereWithAggregatesInput[]
    OR?: ServiceActivitiesScalarWhereWithAggregatesInput[]
    NOT?: ServiceActivitiesScalarWhereWithAggregatesInput | ServiceActivitiesScalarWhereWithAggregatesInput[]
    serviceActivitieId?: IntWithAggregatesFilter<"ServiceActivities"> | number
    service_id?: IntNullableWithAggregatesFilter<"ServiceActivities"> | number | null
    description?: StringNullableWithAggregatesFilter<"ServiceActivities"> | string | null
    postingDate?: DateTimeNullableWithAggregatesFilter<"ServiceActivities"> | Date | string | null
    hours?: IntNullableWithAggregatesFilter<"ServiceActivities"> | number | null
  }

  export type ServiceStatusListWhereInput = {
    AND?: ServiceStatusListWhereInput | ServiceStatusListWhereInput[]
    OR?: ServiceStatusListWhereInput[]
    NOT?: ServiceStatusListWhereInput | ServiceStatusListWhereInput[]
    serviceStatusId?: IntFilter<"ServiceStatusList"> | number
    status?: StringNullableFilter<"ServiceStatusList"> | string | null
    description?: StringNullableFilter<"ServiceStatusList"> | string | null
    Service?: ServiceListRelationFilter
  }

  export type ServiceStatusListOrderByWithRelationInput = {
    serviceStatusId?: SortOrder
    status?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    Service?: ServiceOrderByRelationAggregateInput
  }

  export type ServiceStatusListWhereUniqueInput = Prisma.AtLeast<{
    serviceStatusId?: number
    AND?: ServiceStatusListWhereInput | ServiceStatusListWhereInput[]
    OR?: ServiceStatusListWhereInput[]
    NOT?: ServiceStatusListWhereInput | ServiceStatusListWhereInput[]
    status?: StringNullableFilter<"ServiceStatusList"> | string | null
    description?: StringNullableFilter<"ServiceStatusList"> | string | null
    Service?: ServiceListRelationFilter
  }, "serviceStatusId">

  export type ServiceStatusListOrderByWithAggregationInput = {
    serviceStatusId?: SortOrder
    status?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    _count?: ServiceStatusListCountOrderByAggregateInput
    _avg?: ServiceStatusListAvgOrderByAggregateInput
    _max?: ServiceStatusListMaxOrderByAggregateInput
    _min?: ServiceStatusListMinOrderByAggregateInput
    _sum?: ServiceStatusListSumOrderByAggregateInput
  }

  export type ServiceStatusListScalarWhereWithAggregatesInput = {
    AND?: ServiceStatusListScalarWhereWithAggregatesInput | ServiceStatusListScalarWhereWithAggregatesInput[]
    OR?: ServiceStatusListScalarWhereWithAggregatesInput[]
    NOT?: ServiceStatusListScalarWhereWithAggregatesInput | ServiceStatusListScalarWhereWithAggregatesInput[]
    serviceStatusId?: IntWithAggregatesFilter<"ServiceStatusList"> | number
    status?: StringNullableWithAggregatesFilter<"ServiceStatusList"> | string | null
    description?: StringNullableWithAggregatesFilter<"ServiceStatusList"> | string | null
  }

  export type ServiceTypeWhereInput = {
    AND?: ServiceTypeWhereInput | ServiceTypeWhereInput[]
    OR?: ServiceTypeWhereInput[]
    NOT?: ServiceTypeWhereInput | ServiceTypeWhereInput[]
    serviceTypeId?: IntFilter<"ServiceType"> | number
    type?: StringNullableFilter<"ServiceType"> | string | null
    description?: StringNullableFilter<"ServiceType"> | string | null
    quantityToComplete?: IntNullableFilter<"ServiceType"> | number | null
    Service?: ServiceListRelationFilter
  }

  export type ServiceTypeOrderByWithRelationInput = {
    serviceTypeId?: SortOrder
    type?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    quantityToComplete?: SortOrderInput | SortOrder
    Service?: ServiceOrderByRelationAggregateInput
  }

  export type ServiceTypeWhereUniqueInput = Prisma.AtLeast<{
    serviceTypeId?: number
    AND?: ServiceTypeWhereInput | ServiceTypeWhereInput[]
    OR?: ServiceTypeWhereInput[]
    NOT?: ServiceTypeWhereInput | ServiceTypeWhereInput[]
    type?: StringNullableFilter<"ServiceType"> | string | null
    description?: StringNullableFilter<"ServiceType"> | string | null
    quantityToComplete?: IntNullableFilter<"ServiceType"> | number | null
    Service?: ServiceListRelationFilter
  }, "serviceTypeId">

  export type ServiceTypeOrderByWithAggregationInput = {
    serviceTypeId?: SortOrder
    type?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    quantityToComplete?: SortOrderInput | SortOrder
    _count?: ServiceTypeCountOrderByAggregateInput
    _avg?: ServiceTypeAvgOrderByAggregateInput
    _max?: ServiceTypeMaxOrderByAggregateInput
    _min?: ServiceTypeMinOrderByAggregateInput
    _sum?: ServiceTypeSumOrderByAggregateInput
  }

  export type ServiceTypeScalarWhereWithAggregatesInput = {
    AND?: ServiceTypeScalarWhereWithAggregatesInput | ServiceTypeScalarWhereWithAggregatesInput[]
    OR?: ServiceTypeScalarWhereWithAggregatesInput[]
    NOT?: ServiceTypeScalarWhereWithAggregatesInput | ServiceTypeScalarWhereWithAggregatesInput[]
    serviceTypeId?: IntWithAggregatesFilter<"ServiceType"> | number
    type?: StringNullableWithAggregatesFilter<"ServiceType"> | string | null
    description?: StringNullableWithAggregatesFilter<"ServiceType"> | string | null
    quantityToComplete?: IntNullableWithAggregatesFilter<"ServiceType"> | number | null
  }

  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    studentId?: IntFilter<"Student"> | number
    name?: StringNullableFilter<"Student"> | string | null
    email?: StringNullableFilter<"Student"> | string | null
    phoneNumber?: StringNullableFilter<"Student"> | string | null
    careerInCourse?: StringNullableFilter<"Student"> | string | null
    classGroup?: StringNullableFilter<"Student"> | string | null
    enrollmentNumber?: StringNullableFilter<"Student"> | string | null
    careerModality?: StringNullableFilter<"Student"> | string | null
    grade?: IntNullableFilter<"Student"> | number | null
    studentStatus_id?: IntNullableFilter<"Student"> | number | null
    institutionalEmail?: StringNullableFilter<"Student"> | string | null
    Service?: ServiceListRelationFilter
  }

  export type StudentOrderByWithRelationInput = {
    studentId?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    careerInCourse?: SortOrderInput | SortOrder
    classGroup?: SortOrderInput | SortOrder
    enrollmentNumber?: SortOrderInput | SortOrder
    careerModality?: SortOrderInput | SortOrder
    grade?: SortOrderInput | SortOrder
    studentStatus_id?: SortOrderInput | SortOrder
    institutionalEmail?: SortOrderInput | SortOrder
    Service?: ServiceOrderByRelationAggregateInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    studentId?: number
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    name?: StringNullableFilter<"Student"> | string | null
    email?: StringNullableFilter<"Student"> | string | null
    phoneNumber?: StringNullableFilter<"Student"> | string | null
    careerInCourse?: StringNullableFilter<"Student"> | string | null
    classGroup?: StringNullableFilter<"Student"> | string | null
    enrollmentNumber?: StringNullableFilter<"Student"> | string | null
    careerModality?: StringNullableFilter<"Student"> | string | null
    grade?: IntNullableFilter<"Student"> | number | null
    studentStatus_id?: IntNullableFilter<"Student"> | number | null
    institutionalEmail?: StringNullableFilter<"Student"> | string | null
    Service?: ServiceListRelationFilter
  }, "studentId">

  export type StudentOrderByWithAggregationInput = {
    studentId?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    careerInCourse?: SortOrderInput | SortOrder
    classGroup?: SortOrderInput | SortOrder
    enrollmentNumber?: SortOrderInput | SortOrder
    careerModality?: SortOrderInput | SortOrder
    grade?: SortOrderInput | SortOrder
    studentStatus_id?: SortOrderInput | SortOrder
    institutionalEmail?: SortOrderInput | SortOrder
    _count?: StudentCountOrderByAggregateInput
    _avg?: StudentAvgOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
    _sum?: StudentSumOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    studentId?: IntWithAggregatesFilter<"Student"> | number
    name?: StringNullableWithAggregatesFilter<"Student"> | string | null
    email?: StringNullableWithAggregatesFilter<"Student"> | string | null
    phoneNumber?: StringNullableWithAggregatesFilter<"Student"> | string | null
    careerInCourse?: StringNullableWithAggregatesFilter<"Student"> | string | null
    classGroup?: StringNullableWithAggregatesFilter<"Student"> | string | null
    enrollmentNumber?: StringNullableWithAggregatesFilter<"Student"> | string | null
    careerModality?: StringNullableWithAggregatesFilter<"Student"> | string | null
    grade?: IntNullableWithAggregatesFilter<"Student"> | number | null
    studentStatus_id?: IntNullableWithAggregatesFilter<"Student"> | number | null
    institutionalEmail?: StringNullableWithAggregatesFilter<"Student"> | string | null
  }

  export type ServiceActivitiesByUserWhereInput = {
    AND?: ServiceActivitiesByUserWhereInput | ServiceActivitiesByUserWhereInput[]
    OR?: ServiceActivitiesByUserWhereInput[]
    NOT?: ServiceActivitiesByUserWhereInput | ServiceActivitiesByUserWhereInput[]
    serviceActivitieId?: IntFilter<"ServiceActivitiesByUser"> | number
    student_id?: IntNullableFilter<"ServiceActivitiesByUser"> | number | null
    description?: StringNullableFilter<"ServiceActivitiesByUser"> | string | null
    postingDate?: DateTimeNullableFilter<"ServiceActivitiesByUser"> | Date | string | null
    hours?: IntNullableFilter<"ServiceActivitiesByUser"> | number | null
  }

  export type ServiceActivitiesByUserOrderByWithRelationInput = {
    serviceActivitieId?: SortOrder
    student_id?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    postingDate?: SortOrderInput | SortOrder
    hours?: SortOrderInput | SortOrder
  }

  export type ServiceActivitiesByUserWhereUniqueInput = Prisma.AtLeast<{
    serviceActivitieId?: number
    AND?: ServiceActivitiesByUserWhereInput | ServiceActivitiesByUserWhereInput[]
    OR?: ServiceActivitiesByUserWhereInput[]
    NOT?: ServiceActivitiesByUserWhereInput | ServiceActivitiesByUserWhereInput[]
    student_id?: IntNullableFilter<"ServiceActivitiesByUser"> | number | null
    description?: StringNullableFilter<"ServiceActivitiesByUser"> | string | null
    postingDate?: DateTimeNullableFilter<"ServiceActivitiesByUser"> | Date | string | null
    hours?: IntNullableFilter<"ServiceActivitiesByUser"> | number | null
  }, "serviceActivitieId">

  export type ServiceActivitiesByUserOrderByWithAggregationInput = {
    serviceActivitieId?: SortOrder
    student_id?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    postingDate?: SortOrderInput | SortOrder
    hours?: SortOrderInput | SortOrder
    _count?: ServiceActivitiesByUserCountOrderByAggregateInput
    _avg?: ServiceActivitiesByUserAvgOrderByAggregateInput
    _max?: ServiceActivitiesByUserMaxOrderByAggregateInput
    _min?: ServiceActivitiesByUserMinOrderByAggregateInput
    _sum?: ServiceActivitiesByUserSumOrderByAggregateInput
  }

  export type ServiceActivitiesByUserScalarWhereWithAggregatesInput = {
    AND?: ServiceActivitiesByUserScalarWhereWithAggregatesInput | ServiceActivitiesByUserScalarWhereWithAggregatesInput[]
    OR?: ServiceActivitiesByUserScalarWhereWithAggregatesInput[]
    NOT?: ServiceActivitiesByUserScalarWhereWithAggregatesInput | ServiceActivitiesByUserScalarWhereWithAggregatesInput[]
    serviceActivitieId?: IntWithAggregatesFilter<"ServiceActivitiesByUser"> | number
    student_id?: IntNullableWithAggregatesFilter<"ServiceActivitiesByUser"> | number | null
    description?: StringNullableWithAggregatesFilter<"ServiceActivitiesByUser"> | string | null
    postingDate?: DateTimeNullableWithAggregatesFilter<"ServiceActivitiesByUser"> | Date | string | null
    hours?: IntNullableWithAggregatesFilter<"ServiceActivitiesByUser"> | number | null
  }

  export type TotalActivityHoursWhereInput = {
    AND?: TotalActivityHoursWhereInput | TotalActivityHoursWhereInput[]
    OR?: TotalActivityHoursWhereInput[]
    NOT?: TotalActivityHoursWhereInput | TotalActivityHoursWhereInput[]
    service_id?: IntFilter<"TotalActivityHours"> | number
    totalHours?: IntNullableFilter<"TotalActivityHours"> | number | null
  }

  export type TotalActivityHoursOrderByWithRelationInput = {
    service_id?: SortOrder
    totalHours?: SortOrderInput | SortOrder
  }

  export type TotalActivityHoursWhereUniqueInput = Prisma.AtLeast<{
    service_id?: number
    AND?: TotalActivityHoursWhereInput | TotalActivityHoursWhereInput[]
    OR?: TotalActivityHoursWhereInput[]
    NOT?: TotalActivityHoursWhereInput | TotalActivityHoursWhereInput[]
    totalHours?: IntNullableFilter<"TotalActivityHours"> | number | null
  }, "service_id">

  export type TotalActivityHoursOrderByWithAggregationInput = {
    service_id?: SortOrder
    totalHours?: SortOrderInput | SortOrder
    _count?: TotalActivityHoursCountOrderByAggregateInput
    _avg?: TotalActivityHoursAvgOrderByAggregateInput
    _max?: TotalActivityHoursMaxOrderByAggregateInput
    _min?: TotalActivityHoursMinOrderByAggregateInput
    _sum?: TotalActivityHoursSumOrderByAggregateInput
  }

  export type TotalActivityHoursScalarWhereWithAggregatesInput = {
    AND?: TotalActivityHoursScalarWhereWithAggregatesInput | TotalActivityHoursScalarWhereWithAggregatesInput[]
    OR?: TotalActivityHoursScalarWhereWithAggregatesInput[]
    NOT?: TotalActivityHoursScalarWhereWithAggregatesInput | TotalActivityHoursScalarWhereWithAggregatesInput[]
    service_id?: IntWithAggregatesFilter<"TotalActivityHours"> | number
    totalHours?: IntNullableWithAggregatesFilter<"TotalActivityHours"> | number | null
  }

  export type ServiceProgressViewWhereInput = {
    AND?: ServiceProgressViewWhereInput | ServiceProgressViewWhereInput[]
    OR?: ServiceProgressViewWhereInput[]
    NOT?: ServiceProgressViewWhereInput | ServiceProgressViewWhereInput[]
    serviceId?: IntFilter<"ServiceProgressView"> | number
    studentId?: IntFilter<"ServiceProgressView"> | number
    name?: StringNullableFilter<"ServiceProgressView"> | string | null
    institutionalEmail?: StringNullableFilter<"ServiceProgressView"> | string | null
    type?: StringNullableFilter<"ServiceProgressView"> | string | null
    totalHours?: IntNullableFilter<"ServiceProgressView"> | number | null
    serviceProgress?: IntNullableFilter<"ServiceProgressView"> | number | null
  }

  export type ServiceProgressViewOrderByWithRelationInput = {
    serviceId?: SortOrder
    studentId?: SortOrder
    name?: SortOrderInput | SortOrder
    institutionalEmail?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    totalHours?: SortOrderInput | SortOrder
    serviceProgress?: SortOrderInput | SortOrder
  }

  export type ServiceProgressViewWhereUniqueInput = Prisma.AtLeast<{
    serviceId?: number
    AND?: ServiceProgressViewWhereInput | ServiceProgressViewWhereInput[]
    OR?: ServiceProgressViewWhereInput[]
    NOT?: ServiceProgressViewWhereInput | ServiceProgressViewWhereInput[]
    studentId?: IntFilter<"ServiceProgressView"> | number
    name?: StringNullableFilter<"ServiceProgressView"> | string | null
    institutionalEmail?: StringNullableFilter<"ServiceProgressView"> | string | null
    type?: StringNullableFilter<"ServiceProgressView"> | string | null
    totalHours?: IntNullableFilter<"ServiceProgressView"> | number | null
    serviceProgress?: IntNullableFilter<"ServiceProgressView"> | number | null
  }, "serviceId">

  export type ServiceProgressViewOrderByWithAggregationInput = {
    serviceId?: SortOrder
    studentId?: SortOrder
    name?: SortOrderInput | SortOrder
    institutionalEmail?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    totalHours?: SortOrderInput | SortOrder
    serviceProgress?: SortOrderInput | SortOrder
    _count?: ServiceProgressViewCountOrderByAggregateInput
    _avg?: ServiceProgressViewAvgOrderByAggregateInput
    _max?: ServiceProgressViewMaxOrderByAggregateInput
    _min?: ServiceProgressViewMinOrderByAggregateInput
    _sum?: ServiceProgressViewSumOrderByAggregateInput
  }

  export type ServiceProgressViewScalarWhereWithAggregatesInput = {
    AND?: ServiceProgressViewScalarWhereWithAggregatesInput | ServiceProgressViewScalarWhereWithAggregatesInput[]
    OR?: ServiceProgressViewScalarWhereWithAggregatesInput[]
    NOT?: ServiceProgressViewScalarWhereWithAggregatesInput | ServiceProgressViewScalarWhereWithAggregatesInput[]
    serviceId?: IntWithAggregatesFilter<"ServiceProgressView"> | number
    studentId?: IntWithAggregatesFilter<"ServiceProgressView"> | number
    name?: StringNullableWithAggregatesFilter<"ServiceProgressView"> | string | null
    institutionalEmail?: StringNullableWithAggregatesFilter<"ServiceProgressView"> | string | null
    type?: StringNullableWithAggregatesFilter<"ServiceProgressView"> | string | null
    totalHours?: IntNullableWithAggregatesFilter<"ServiceProgressView"> | number | null
    serviceProgress?: IntNullableWithAggregatesFilter<"ServiceProgressView"> | number | null
  }

  export type DocumentsCreateInput = {
    codedFile?: string | null
    fileType?: string | null
    DocumentStatusList?: DocumentStatusListCreateNestedOneWithoutDocumentsInput
    Service?: ServiceCreateNestedOneWithoutDocumentsInput
  }

  export type DocumentsUncheckedCreateInput = {
    documentId?: number
    docStatus_id?: number | null
    codedFile?: string | null
    fileType?: string | null
    service_id?: number | null
  }

  export type DocumentsUpdateInput = {
    codedFile?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: NullableStringFieldUpdateOperationsInput | string | null
    DocumentStatusList?: DocumentStatusListUpdateOneWithoutDocumentsNestedInput
    Service?: ServiceUpdateOneWithoutDocumentsNestedInput
  }

  export type DocumentsUncheckedUpdateInput = {
    documentId?: IntFieldUpdateOperationsInput | number
    docStatus_id?: NullableIntFieldUpdateOperationsInput | number | null
    codedFile?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: NullableStringFieldUpdateOperationsInput | string | null
    service_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DocumentsCreateManyInput = {
    docStatus_id?: number | null
    codedFile?: string | null
    fileType?: string | null
    service_id?: number | null
  }

  export type DocumentsUpdateManyMutationInput = {
    codedFile?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DocumentsUncheckedUpdateManyInput = {
    documentId?: IntFieldUpdateOperationsInput | number
    docStatus_id?: NullableIntFieldUpdateOperationsInput | number | null
    codedFile?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: NullableStringFieldUpdateOperationsInput | string | null
    service_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DocumentStatusListCreateInput = {
    status?: string | null
    description?: string | null
    Documents?: DocumentsCreateNestedManyWithoutDocumentStatusListInput
  }

  export type DocumentStatusListUncheckedCreateInput = {
    docStatusId?: number
    status?: string | null
    description?: string | null
    Documents?: DocumentsUncheckedCreateNestedManyWithoutDocumentStatusListInput
  }

  export type DocumentStatusListUpdateInput = {
    status?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    Documents?: DocumentsUpdateManyWithoutDocumentStatusListNestedInput
  }

  export type DocumentStatusListUncheckedUpdateInput = {
    docStatusId?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    Documents?: DocumentsUncheckedUpdateManyWithoutDocumentStatusListNestedInput
  }

  export type DocumentStatusListCreateManyInput = {
    status?: string | null
    description?: string | null
  }

  export type DocumentStatusListUpdateManyMutationInput = {
    status?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DocumentStatusListUncheckedUpdateManyInput = {
    docStatusId?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReceivingUnitCreateInput = {
    institutionName?: string | null
    contactNumber?: string | null
    institutionDirection?: string | null
    contactEmail?: string | null
    principalActivities?: string | null
    Service?: ServiceCreateNestedManyWithoutReceivingUnitInput
  }

  export type ReceivingUnitUncheckedCreateInput = {
    receivingUnitId?: number
    institutionName?: string | null
    contactNumber?: string | null
    institutionDirection?: string | null
    contactEmail?: string | null
    principalActivities?: string | null
    Service?: ServiceUncheckedCreateNestedManyWithoutReceivingUnitInput
  }

  export type ReceivingUnitUpdateInput = {
    institutionName?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    institutionDirection?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    principalActivities?: NullableStringFieldUpdateOperationsInput | string | null
    Service?: ServiceUpdateManyWithoutReceivingUnitNestedInput
  }

  export type ReceivingUnitUncheckedUpdateInput = {
    receivingUnitId?: IntFieldUpdateOperationsInput | number
    institutionName?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    institutionDirection?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    principalActivities?: NullableStringFieldUpdateOperationsInput | string | null
    Service?: ServiceUncheckedUpdateManyWithoutReceivingUnitNestedInput
  }

  export type ReceivingUnitCreateManyInput = {
    institutionName?: string | null
    contactNumber?: string | null
    institutionDirection?: string | null
    contactEmail?: string | null
    principalActivities?: string | null
  }

  export type ReceivingUnitUpdateManyMutationInput = {
    institutionName?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    institutionDirection?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    principalActivities?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReceivingUnitUncheckedUpdateManyInput = {
    receivingUnitId?: IntFieldUpdateOperationsInput | number
    institutionName?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    institutionDirection?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    principalActivities?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ServiceCreateInput = {
    servicesStartDate?: Date | string | null
    supervisorName?: string | null
    supervisorContactNumber?: string | null
    programObjective?: string | null
    supervisorPosition?: string | null
    Documents?: DocumentsCreateNestedManyWithoutServiceInput
    ReceivingUnit?: ReceivingUnitCreateNestedOneWithoutServiceInput
    ServiceType?: ServiceTypeCreateNestedOneWithoutServiceInput
    ServiceStatusList?: ServiceStatusListCreateNestedOneWithoutServiceInput
    Student?: StudentCreateNestedOneWithoutServiceInput
    ServiceActivities?: ServiceActivitiesCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateInput = {
    serviceId?: number
    student_id?: number | null
    serviceType_id?: number | null
    servicesStartDate?: Date | string | null
    service_status_id?: number | null
    supervisorName?: string | null
    supervisorContactNumber?: string | null
    programObjective?: string | null
    supervisorPosition?: string | null
    receivingUnit_id?: number | null
    Documents?: DocumentsUncheckedCreateNestedManyWithoutServiceInput
    ServiceActivities?: ServiceActivitiesUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceUpdateInput = {
    servicesStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    supervisorName?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorContactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    programObjective?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorPosition?: NullableStringFieldUpdateOperationsInput | string | null
    Documents?: DocumentsUpdateManyWithoutServiceNestedInput
    ReceivingUnit?: ReceivingUnitUpdateOneWithoutServiceNestedInput
    ServiceType?: ServiceTypeUpdateOneWithoutServiceNestedInput
    ServiceStatusList?: ServiceStatusListUpdateOneWithoutServiceNestedInput
    Student?: StudentUpdateOneWithoutServiceNestedInput
    ServiceActivities?: ServiceActivitiesUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateInput = {
    serviceId?: IntFieldUpdateOperationsInput | number
    student_id?: NullableIntFieldUpdateOperationsInput | number | null
    serviceType_id?: NullableIntFieldUpdateOperationsInput | number | null
    servicesStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    service_status_id?: NullableIntFieldUpdateOperationsInput | number | null
    supervisorName?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorContactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    programObjective?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorPosition?: NullableStringFieldUpdateOperationsInput | string | null
    receivingUnit_id?: NullableIntFieldUpdateOperationsInput | number | null
    Documents?: DocumentsUncheckedUpdateManyWithoutServiceNestedInput
    ServiceActivities?: ServiceActivitiesUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceCreateManyInput = {
    student_id?: number | null
    serviceType_id?: number | null
    servicesStartDate?: Date | string | null
    service_status_id?: number | null
    supervisorName?: string | null
    supervisorContactNumber?: string | null
    programObjective?: string | null
    supervisorPosition?: string | null
    receivingUnit_id?: number | null
  }

  export type ServiceUpdateManyMutationInput = {
    servicesStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    supervisorName?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorContactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    programObjective?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorPosition?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ServiceUncheckedUpdateManyInput = {
    serviceId?: IntFieldUpdateOperationsInput | number
    student_id?: NullableIntFieldUpdateOperationsInput | number | null
    serviceType_id?: NullableIntFieldUpdateOperationsInput | number | null
    servicesStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    service_status_id?: NullableIntFieldUpdateOperationsInput | number | null
    supervisorName?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorContactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    programObjective?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorPosition?: NullableStringFieldUpdateOperationsInput | string | null
    receivingUnit_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ServiceActivitiesCreateInput = {
    description?: string | null
    postingDate?: Date | string | null
    hours?: number | null
    Service?: ServiceCreateNestedOneWithoutServiceActivitiesInput
  }

  export type ServiceActivitiesUncheckedCreateInput = {
    serviceActivitieId?: number
    service_id?: number | null
    description?: string | null
    postingDate?: Date | string | null
    hours?: number | null
  }

  export type ServiceActivitiesUpdateInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    postingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hours?: NullableIntFieldUpdateOperationsInput | number | null
    Service?: ServiceUpdateOneWithoutServiceActivitiesNestedInput
  }

  export type ServiceActivitiesUncheckedUpdateInput = {
    serviceActivitieId?: IntFieldUpdateOperationsInput | number
    service_id?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    postingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hours?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ServiceActivitiesCreateManyInput = {
    service_id?: number | null
    description?: string | null
    postingDate?: Date | string | null
    hours?: number | null
  }

  export type ServiceActivitiesUpdateManyMutationInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    postingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hours?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ServiceActivitiesUncheckedUpdateManyInput = {
    serviceActivitieId?: IntFieldUpdateOperationsInput | number
    service_id?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    postingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hours?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ServiceStatusListCreateInput = {
    status?: string | null
    description?: string | null
    Service?: ServiceCreateNestedManyWithoutServiceStatusListInput
  }

  export type ServiceStatusListUncheckedCreateInput = {
    serviceStatusId?: number
    status?: string | null
    description?: string | null
    Service?: ServiceUncheckedCreateNestedManyWithoutServiceStatusListInput
  }

  export type ServiceStatusListUpdateInput = {
    status?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    Service?: ServiceUpdateManyWithoutServiceStatusListNestedInput
  }

  export type ServiceStatusListUncheckedUpdateInput = {
    serviceStatusId?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    Service?: ServiceUncheckedUpdateManyWithoutServiceStatusListNestedInput
  }

  export type ServiceStatusListCreateManyInput = {
    status?: string | null
    description?: string | null
  }

  export type ServiceStatusListUpdateManyMutationInput = {
    status?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ServiceStatusListUncheckedUpdateManyInput = {
    serviceStatusId?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ServiceTypeCreateInput = {
    type?: string | null
    description?: string | null
    quantityToComplete?: number | null
    Service?: ServiceCreateNestedManyWithoutServiceTypeInput
  }

  export type ServiceTypeUncheckedCreateInput = {
    serviceTypeId?: number
    type?: string | null
    description?: string | null
    quantityToComplete?: number | null
    Service?: ServiceUncheckedCreateNestedManyWithoutServiceTypeInput
  }

  export type ServiceTypeUpdateInput = {
    type?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantityToComplete?: NullableIntFieldUpdateOperationsInput | number | null
    Service?: ServiceUpdateManyWithoutServiceTypeNestedInput
  }

  export type ServiceTypeUncheckedUpdateInput = {
    serviceTypeId?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantityToComplete?: NullableIntFieldUpdateOperationsInput | number | null
    Service?: ServiceUncheckedUpdateManyWithoutServiceTypeNestedInput
  }

  export type ServiceTypeCreateManyInput = {
    type?: string | null
    description?: string | null
    quantityToComplete?: number | null
  }

  export type ServiceTypeUpdateManyMutationInput = {
    type?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantityToComplete?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ServiceTypeUncheckedUpdateManyInput = {
    serviceTypeId?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantityToComplete?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type StudentCreateInput = {
    name?: string | null
    email?: string | null
    phoneNumber?: string | null
    careerInCourse?: string | null
    classGroup?: string | null
    enrollmentNumber?: string | null
    careerModality?: string | null
    grade?: number | null
    studentStatus_id?: number | null
    institutionalEmail?: string | null
    Service?: ServiceCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateInput = {
    studentId?: number
    name?: string | null
    email?: string | null
    phoneNumber?: string | null
    careerInCourse?: string | null
    classGroup?: string | null
    enrollmentNumber?: string | null
    careerModality?: string | null
    grade?: number | null
    studentStatus_id?: number | null
    institutionalEmail?: string | null
    Service?: ServiceUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    careerInCourse?: NullableStringFieldUpdateOperationsInput | string | null
    classGroup?: NullableStringFieldUpdateOperationsInput | string | null
    enrollmentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    careerModality?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableIntFieldUpdateOperationsInput | number | null
    studentStatus_id?: NullableIntFieldUpdateOperationsInput | number | null
    institutionalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    Service?: ServiceUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    studentId?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    careerInCourse?: NullableStringFieldUpdateOperationsInput | string | null
    classGroup?: NullableStringFieldUpdateOperationsInput | string | null
    enrollmentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    careerModality?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableIntFieldUpdateOperationsInput | number | null
    studentStatus_id?: NullableIntFieldUpdateOperationsInput | number | null
    institutionalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    Service?: ServiceUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateManyInput = {
    name?: string | null
    email?: string | null
    phoneNumber?: string | null
    careerInCourse?: string | null
    classGroup?: string | null
    enrollmentNumber?: string | null
    careerModality?: string | null
    grade?: number | null
    studentStatus_id?: number | null
    institutionalEmail?: string | null
  }

  export type StudentUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    careerInCourse?: NullableStringFieldUpdateOperationsInput | string | null
    classGroup?: NullableStringFieldUpdateOperationsInput | string | null
    enrollmentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    careerModality?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableIntFieldUpdateOperationsInput | number | null
    studentStatus_id?: NullableIntFieldUpdateOperationsInput | number | null
    institutionalEmail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StudentUncheckedUpdateManyInput = {
    studentId?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    careerInCourse?: NullableStringFieldUpdateOperationsInput | string | null
    classGroup?: NullableStringFieldUpdateOperationsInput | string | null
    enrollmentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    careerModality?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableIntFieldUpdateOperationsInput | number | null
    studentStatus_id?: NullableIntFieldUpdateOperationsInput | number | null
    institutionalEmail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ServiceActivitiesByUserCreateInput = {
    serviceActivitieId: number
    student_id?: number | null
    description?: string | null
    postingDate?: Date | string | null
    hours?: number | null
  }

  export type ServiceActivitiesByUserUncheckedCreateInput = {
    serviceActivitieId: number
    student_id?: number | null
    description?: string | null
    postingDate?: Date | string | null
    hours?: number | null
  }

  export type ServiceActivitiesByUserUpdateInput = {
    serviceActivitieId?: IntFieldUpdateOperationsInput | number
    student_id?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    postingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hours?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ServiceActivitiesByUserUncheckedUpdateInput = {
    serviceActivitieId?: IntFieldUpdateOperationsInput | number
    student_id?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    postingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hours?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ServiceActivitiesByUserCreateManyInput = {
    serviceActivitieId: number
    student_id?: number | null
    description?: string | null
    postingDate?: Date | string | null
    hours?: number | null
  }

  export type ServiceActivitiesByUserUpdateManyMutationInput = {
    serviceActivitieId?: IntFieldUpdateOperationsInput | number
    student_id?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    postingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hours?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ServiceActivitiesByUserUncheckedUpdateManyInput = {
    serviceActivitieId?: IntFieldUpdateOperationsInput | number
    student_id?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    postingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hours?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TotalActivityHoursCreateInput = {
    service_id: number
    totalHours?: number | null
  }

  export type TotalActivityHoursUncheckedCreateInput = {
    service_id: number
    totalHours?: number | null
  }

  export type TotalActivityHoursUpdateInput = {
    service_id?: IntFieldUpdateOperationsInput | number
    totalHours?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TotalActivityHoursUncheckedUpdateInput = {
    service_id?: IntFieldUpdateOperationsInput | number
    totalHours?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TotalActivityHoursCreateManyInput = {
    service_id: number
    totalHours?: number | null
  }

  export type TotalActivityHoursUpdateManyMutationInput = {
    service_id?: IntFieldUpdateOperationsInput | number
    totalHours?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TotalActivityHoursUncheckedUpdateManyInput = {
    service_id?: IntFieldUpdateOperationsInput | number
    totalHours?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ServiceProgressViewCreateInput = {
    serviceId: number
    studentId: number
    name?: string | null
    institutionalEmail?: string | null
    type?: string | null
    totalHours?: number | null
    serviceProgress?: number | null
  }

  export type ServiceProgressViewUncheckedCreateInput = {
    serviceId: number
    studentId: number
    name?: string | null
    institutionalEmail?: string | null
    type?: string | null
    totalHours?: number | null
    serviceProgress?: number | null
  }

  export type ServiceProgressViewUpdateInput = {
    serviceId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    institutionalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    totalHours?: NullableIntFieldUpdateOperationsInput | number | null
    serviceProgress?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ServiceProgressViewUncheckedUpdateInput = {
    serviceId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    institutionalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    totalHours?: NullableIntFieldUpdateOperationsInput | number | null
    serviceProgress?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ServiceProgressViewCreateManyInput = {
    serviceId: number
    studentId: number
    name?: string | null
    institutionalEmail?: string | null
    type?: string | null
    totalHours?: number | null
    serviceProgress?: number | null
  }

  export type ServiceProgressViewUpdateManyMutationInput = {
    serviceId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    institutionalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    totalHours?: NullableIntFieldUpdateOperationsInput | number | null
    serviceProgress?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ServiceProgressViewUncheckedUpdateManyInput = {
    serviceId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    institutionalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    totalHours?: NullableIntFieldUpdateOperationsInput | number | null
    serviceProgress?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DocumentStatusListNullableScalarRelationFilter = {
    is?: DocumentStatusListWhereInput | null
    isNot?: DocumentStatusListWhereInput | null
  }

  export type ServiceNullableScalarRelationFilter = {
    is?: ServiceWhereInput | null
    isNot?: ServiceWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DocumentsCountOrderByAggregateInput = {
    documentId?: SortOrder
    docStatus_id?: SortOrder
    codedFile?: SortOrder
    fileType?: SortOrder
    service_id?: SortOrder
  }

  export type DocumentsAvgOrderByAggregateInput = {
    documentId?: SortOrder
    docStatus_id?: SortOrder
    service_id?: SortOrder
  }

  export type DocumentsMaxOrderByAggregateInput = {
    documentId?: SortOrder
    docStatus_id?: SortOrder
    codedFile?: SortOrder
    fileType?: SortOrder
    service_id?: SortOrder
  }

  export type DocumentsMinOrderByAggregateInput = {
    documentId?: SortOrder
    docStatus_id?: SortOrder
    codedFile?: SortOrder
    fileType?: SortOrder
    service_id?: SortOrder
  }

  export type DocumentsSumOrderByAggregateInput = {
    documentId?: SortOrder
    docStatus_id?: SortOrder
    service_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DocumentsListRelationFilter = {
    every?: DocumentsWhereInput
    some?: DocumentsWhereInput
    none?: DocumentsWhereInput
  }

  export type DocumentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DocumentStatusListCountOrderByAggregateInput = {
    docStatusId?: SortOrder
    status?: SortOrder
    description?: SortOrder
  }

  export type DocumentStatusListAvgOrderByAggregateInput = {
    docStatusId?: SortOrder
  }

  export type DocumentStatusListMaxOrderByAggregateInput = {
    docStatusId?: SortOrder
    status?: SortOrder
    description?: SortOrder
  }

  export type DocumentStatusListMinOrderByAggregateInput = {
    docStatusId?: SortOrder
    status?: SortOrder
    description?: SortOrder
  }

  export type DocumentStatusListSumOrderByAggregateInput = {
    docStatusId?: SortOrder
  }

  export type ServiceListRelationFilter = {
    every?: ServiceWhereInput
    some?: ServiceWhereInput
    none?: ServiceWhereInput
  }

  export type ServiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReceivingUnitCountOrderByAggregateInput = {
    receivingUnitId?: SortOrder
    institutionName?: SortOrder
    contactNumber?: SortOrder
    institutionDirection?: SortOrder
    contactEmail?: SortOrder
    principalActivities?: SortOrder
  }

  export type ReceivingUnitAvgOrderByAggregateInput = {
    receivingUnitId?: SortOrder
  }

  export type ReceivingUnitMaxOrderByAggregateInput = {
    receivingUnitId?: SortOrder
    institutionName?: SortOrder
    contactNumber?: SortOrder
    institutionDirection?: SortOrder
    contactEmail?: SortOrder
    principalActivities?: SortOrder
  }

  export type ReceivingUnitMinOrderByAggregateInput = {
    receivingUnitId?: SortOrder
    institutionName?: SortOrder
    contactNumber?: SortOrder
    institutionDirection?: SortOrder
    contactEmail?: SortOrder
    principalActivities?: SortOrder
  }

  export type ReceivingUnitSumOrderByAggregateInput = {
    receivingUnitId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ReceivingUnitNullableScalarRelationFilter = {
    is?: ReceivingUnitWhereInput | null
    isNot?: ReceivingUnitWhereInput | null
  }

  export type ServiceTypeNullableScalarRelationFilter = {
    is?: ServiceTypeWhereInput | null
    isNot?: ServiceTypeWhereInput | null
  }

  export type ServiceStatusListNullableScalarRelationFilter = {
    is?: ServiceStatusListWhereInput | null
    isNot?: ServiceStatusListWhereInput | null
  }

  export type StudentNullableScalarRelationFilter = {
    is?: StudentWhereInput | null
    isNot?: StudentWhereInput | null
  }

  export type ServiceActivitiesListRelationFilter = {
    every?: ServiceActivitiesWhereInput
    some?: ServiceActivitiesWhereInput
    none?: ServiceActivitiesWhereInput
  }

  export type ServiceActivitiesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServiceCountOrderByAggregateInput = {
    serviceId?: SortOrder
    student_id?: SortOrder
    serviceType_id?: SortOrder
    servicesStartDate?: SortOrder
    service_status_id?: SortOrder
    supervisorName?: SortOrder
    supervisorContactNumber?: SortOrder
    programObjective?: SortOrder
    supervisorPosition?: SortOrder
    receivingUnit_id?: SortOrder
  }

  export type ServiceAvgOrderByAggregateInput = {
    serviceId?: SortOrder
    student_id?: SortOrder
    serviceType_id?: SortOrder
    service_status_id?: SortOrder
    receivingUnit_id?: SortOrder
  }

  export type ServiceMaxOrderByAggregateInput = {
    serviceId?: SortOrder
    student_id?: SortOrder
    serviceType_id?: SortOrder
    servicesStartDate?: SortOrder
    service_status_id?: SortOrder
    supervisorName?: SortOrder
    supervisorContactNumber?: SortOrder
    programObjective?: SortOrder
    supervisorPosition?: SortOrder
    receivingUnit_id?: SortOrder
  }

  export type ServiceMinOrderByAggregateInput = {
    serviceId?: SortOrder
    student_id?: SortOrder
    serviceType_id?: SortOrder
    servicesStartDate?: SortOrder
    service_status_id?: SortOrder
    supervisorName?: SortOrder
    supervisorContactNumber?: SortOrder
    programObjective?: SortOrder
    supervisorPosition?: SortOrder
    receivingUnit_id?: SortOrder
  }

  export type ServiceSumOrderByAggregateInput = {
    serviceId?: SortOrder
    student_id?: SortOrder
    serviceType_id?: SortOrder
    service_status_id?: SortOrder
    receivingUnit_id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ServiceActivitiesCountOrderByAggregateInput = {
    serviceActivitieId?: SortOrder
    service_id?: SortOrder
    description?: SortOrder
    postingDate?: SortOrder
    hours?: SortOrder
  }

  export type ServiceActivitiesAvgOrderByAggregateInput = {
    serviceActivitieId?: SortOrder
    service_id?: SortOrder
    hours?: SortOrder
  }

  export type ServiceActivitiesMaxOrderByAggregateInput = {
    serviceActivitieId?: SortOrder
    service_id?: SortOrder
    description?: SortOrder
    postingDate?: SortOrder
    hours?: SortOrder
  }

  export type ServiceActivitiesMinOrderByAggregateInput = {
    serviceActivitieId?: SortOrder
    service_id?: SortOrder
    description?: SortOrder
    postingDate?: SortOrder
    hours?: SortOrder
  }

  export type ServiceActivitiesSumOrderByAggregateInput = {
    serviceActivitieId?: SortOrder
    service_id?: SortOrder
    hours?: SortOrder
  }

  export type ServiceStatusListCountOrderByAggregateInput = {
    serviceStatusId?: SortOrder
    status?: SortOrder
    description?: SortOrder
  }

  export type ServiceStatusListAvgOrderByAggregateInput = {
    serviceStatusId?: SortOrder
  }

  export type ServiceStatusListMaxOrderByAggregateInput = {
    serviceStatusId?: SortOrder
    status?: SortOrder
    description?: SortOrder
  }

  export type ServiceStatusListMinOrderByAggregateInput = {
    serviceStatusId?: SortOrder
    status?: SortOrder
    description?: SortOrder
  }

  export type ServiceStatusListSumOrderByAggregateInput = {
    serviceStatusId?: SortOrder
  }

  export type ServiceTypeCountOrderByAggregateInput = {
    serviceTypeId?: SortOrder
    type?: SortOrder
    description?: SortOrder
    quantityToComplete?: SortOrder
  }

  export type ServiceTypeAvgOrderByAggregateInput = {
    serviceTypeId?: SortOrder
    quantityToComplete?: SortOrder
  }

  export type ServiceTypeMaxOrderByAggregateInput = {
    serviceTypeId?: SortOrder
    type?: SortOrder
    description?: SortOrder
    quantityToComplete?: SortOrder
  }

  export type ServiceTypeMinOrderByAggregateInput = {
    serviceTypeId?: SortOrder
    type?: SortOrder
    description?: SortOrder
    quantityToComplete?: SortOrder
  }

  export type ServiceTypeSumOrderByAggregateInput = {
    serviceTypeId?: SortOrder
    quantityToComplete?: SortOrder
  }

  export type StudentCountOrderByAggregateInput = {
    studentId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    careerInCourse?: SortOrder
    classGroup?: SortOrder
    enrollmentNumber?: SortOrder
    careerModality?: SortOrder
    grade?: SortOrder
    studentStatus_id?: SortOrder
    institutionalEmail?: SortOrder
  }

  export type StudentAvgOrderByAggregateInput = {
    studentId?: SortOrder
    grade?: SortOrder
    studentStatus_id?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    studentId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    careerInCourse?: SortOrder
    classGroup?: SortOrder
    enrollmentNumber?: SortOrder
    careerModality?: SortOrder
    grade?: SortOrder
    studentStatus_id?: SortOrder
    institutionalEmail?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    studentId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    careerInCourse?: SortOrder
    classGroup?: SortOrder
    enrollmentNumber?: SortOrder
    careerModality?: SortOrder
    grade?: SortOrder
    studentStatus_id?: SortOrder
    institutionalEmail?: SortOrder
  }

  export type StudentSumOrderByAggregateInput = {
    studentId?: SortOrder
    grade?: SortOrder
    studentStatus_id?: SortOrder
  }

  export type ServiceActivitiesByUserCountOrderByAggregateInput = {
    serviceActivitieId?: SortOrder
    student_id?: SortOrder
    description?: SortOrder
    postingDate?: SortOrder
    hours?: SortOrder
  }

  export type ServiceActivitiesByUserAvgOrderByAggregateInput = {
    serviceActivitieId?: SortOrder
    student_id?: SortOrder
    hours?: SortOrder
  }

  export type ServiceActivitiesByUserMaxOrderByAggregateInput = {
    serviceActivitieId?: SortOrder
    student_id?: SortOrder
    description?: SortOrder
    postingDate?: SortOrder
    hours?: SortOrder
  }

  export type ServiceActivitiesByUserMinOrderByAggregateInput = {
    serviceActivitieId?: SortOrder
    student_id?: SortOrder
    description?: SortOrder
    postingDate?: SortOrder
    hours?: SortOrder
  }

  export type ServiceActivitiesByUserSumOrderByAggregateInput = {
    serviceActivitieId?: SortOrder
    student_id?: SortOrder
    hours?: SortOrder
  }

  export type TotalActivityHoursCountOrderByAggregateInput = {
    service_id?: SortOrder
    totalHours?: SortOrder
  }

  export type TotalActivityHoursAvgOrderByAggregateInput = {
    service_id?: SortOrder
    totalHours?: SortOrder
  }

  export type TotalActivityHoursMaxOrderByAggregateInput = {
    service_id?: SortOrder
    totalHours?: SortOrder
  }

  export type TotalActivityHoursMinOrderByAggregateInput = {
    service_id?: SortOrder
    totalHours?: SortOrder
  }

  export type TotalActivityHoursSumOrderByAggregateInput = {
    service_id?: SortOrder
    totalHours?: SortOrder
  }

  export type ServiceProgressViewCountOrderByAggregateInput = {
    serviceId?: SortOrder
    studentId?: SortOrder
    name?: SortOrder
    institutionalEmail?: SortOrder
    type?: SortOrder
    totalHours?: SortOrder
    serviceProgress?: SortOrder
  }

  export type ServiceProgressViewAvgOrderByAggregateInput = {
    serviceId?: SortOrder
    studentId?: SortOrder
    totalHours?: SortOrder
    serviceProgress?: SortOrder
  }

  export type ServiceProgressViewMaxOrderByAggregateInput = {
    serviceId?: SortOrder
    studentId?: SortOrder
    name?: SortOrder
    institutionalEmail?: SortOrder
    type?: SortOrder
    totalHours?: SortOrder
    serviceProgress?: SortOrder
  }

  export type ServiceProgressViewMinOrderByAggregateInput = {
    serviceId?: SortOrder
    studentId?: SortOrder
    name?: SortOrder
    institutionalEmail?: SortOrder
    type?: SortOrder
    totalHours?: SortOrder
    serviceProgress?: SortOrder
  }

  export type ServiceProgressViewSumOrderByAggregateInput = {
    serviceId?: SortOrder
    studentId?: SortOrder
    totalHours?: SortOrder
    serviceProgress?: SortOrder
  }

  export type DocumentStatusListCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<DocumentStatusListCreateWithoutDocumentsInput, DocumentStatusListUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: DocumentStatusListCreateOrConnectWithoutDocumentsInput
    connect?: DocumentStatusListWhereUniqueInput
  }

  export type ServiceCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<ServiceCreateWithoutDocumentsInput, ServiceUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutDocumentsInput
    connect?: ServiceWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DocumentStatusListUpdateOneWithoutDocumentsNestedInput = {
    create?: XOR<DocumentStatusListCreateWithoutDocumentsInput, DocumentStatusListUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: DocumentStatusListCreateOrConnectWithoutDocumentsInput
    upsert?: DocumentStatusListUpsertWithoutDocumentsInput
    disconnect?: DocumentStatusListWhereInput | boolean
    delete?: DocumentStatusListWhereInput | boolean
    connect?: DocumentStatusListWhereUniqueInput
    update?: XOR<XOR<DocumentStatusListUpdateToOneWithWhereWithoutDocumentsInput, DocumentStatusListUpdateWithoutDocumentsInput>, DocumentStatusListUncheckedUpdateWithoutDocumentsInput>
  }

  export type ServiceUpdateOneWithoutDocumentsNestedInput = {
    create?: XOR<ServiceCreateWithoutDocumentsInput, ServiceUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutDocumentsInput
    upsert?: ServiceUpsertWithoutDocumentsInput
    disconnect?: ServiceWhereInput | boolean
    delete?: ServiceWhereInput | boolean
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutDocumentsInput, ServiceUpdateWithoutDocumentsInput>, ServiceUncheckedUpdateWithoutDocumentsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DocumentsCreateNestedManyWithoutDocumentStatusListInput = {
    create?: XOR<DocumentsCreateWithoutDocumentStatusListInput, DocumentsUncheckedCreateWithoutDocumentStatusListInput> | DocumentsCreateWithoutDocumentStatusListInput[] | DocumentsUncheckedCreateWithoutDocumentStatusListInput[]
    connectOrCreate?: DocumentsCreateOrConnectWithoutDocumentStatusListInput | DocumentsCreateOrConnectWithoutDocumentStatusListInput[]
    createMany?: DocumentsCreateManyDocumentStatusListInputEnvelope
    connect?: DocumentsWhereUniqueInput | DocumentsWhereUniqueInput[]
  }

  export type DocumentsUncheckedCreateNestedManyWithoutDocumentStatusListInput = {
    create?: XOR<DocumentsCreateWithoutDocumentStatusListInput, DocumentsUncheckedCreateWithoutDocumentStatusListInput> | DocumentsCreateWithoutDocumentStatusListInput[] | DocumentsUncheckedCreateWithoutDocumentStatusListInput[]
    connectOrCreate?: DocumentsCreateOrConnectWithoutDocumentStatusListInput | DocumentsCreateOrConnectWithoutDocumentStatusListInput[]
    createMany?: DocumentsCreateManyDocumentStatusListInputEnvelope
    connect?: DocumentsWhereUniqueInput | DocumentsWhereUniqueInput[]
  }

  export type DocumentsUpdateManyWithoutDocumentStatusListNestedInput = {
    create?: XOR<DocumentsCreateWithoutDocumentStatusListInput, DocumentsUncheckedCreateWithoutDocumentStatusListInput> | DocumentsCreateWithoutDocumentStatusListInput[] | DocumentsUncheckedCreateWithoutDocumentStatusListInput[]
    connectOrCreate?: DocumentsCreateOrConnectWithoutDocumentStatusListInput | DocumentsCreateOrConnectWithoutDocumentStatusListInput[]
    upsert?: DocumentsUpsertWithWhereUniqueWithoutDocumentStatusListInput | DocumentsUpsertWithWhereUniqueWithoutDocumentStatusListInput[]
    createMany?: DocumentsCreateManyDocumentStatusListInputEnvelope
    set?: DocumentsWhereUniqueInput | DocumentsWhereUniqueInput[]
    disconnect?: DocumentsWhereUniqueInput | DocumentsWhereUniqueInput[]
    delete?: DocumentsWhereUniqueInput | DocumentsWhereUniqueInput[]
    connect?: DocumentsWhereUniqueInput | DocumentsWhereUniqueInput[]
    update?: DocumentsUpdateWithWhereUniqueWithoutDocumentStatusListInput | DocumentsUpdateWithWhereUniqueWithoutDocumentStatusListInput[]
    updateMany?: DocumentsUpdateManyWithWhereWithoutDocumentStatusListInput | DocumentsUpdateManyWithWhereWithoutDocumentStatusListInput[]
    deleteMany?: DocumentsScalarWhereInput | DocumentsScalarWhereInput[]
  }

  export type DocumentsUncheckedUpdateManyWithoutDocumentStatusListNestedInput = {
    create?: XOR<DocumentsCreateWithoutDocumentStatusListInput, DocumentsUncheckedCreateWithoutDocumentStatusListInput> | DocumentsCreateWithoutDocumentStatusListInput[] | DocumentsUncheckedCreateWithoutDocumentStatusListInput[]
    connectOrCreate?: DocumentsCreateOrConnectWithoutDocumentStatusListInput | DocumentsCreateOrConnectWithoutDocumentStatusListInput[]
    upsert?: DocumentsUpsertWithWhereUniqueWithoutDocumentStatusListInput | DocumentsUpsertWithWhereUniqueWithoutDocumentStatusListInput[]
    createMany?: DocumentsCreateManyDocumentStatusListInputEnvelope
    set?: DocumentsWhereUniqueInput | DocumentsWhereUniqueInput[]
    disconnect?: DocumentsWhereUniqueInput | DocumentsWhereUniqueInput[]
    delete?: DocumentsWhereUniqueInput | DocumentsWhereUniqueInput[]
    connect?: DocumentsWhereUniqueInput | DocumentsWhereUniqueInput[]
    update?: DocumentsUpdateWithWhereUniqueWithoutDocumentStatusListInput | DocumentsUpdateWithWhereUniqueWithoutDocumentStatusListInput[]
    updateMany?: DocumentsUpdateManyWithWhereWithoutDocumentStatusListInput | DocumentsUpdateManyWithWhereWithoutDocumentStatusListInput[]
    deleteMany?: DocumentsScalarWhereInput | DocumentsScalarWhereInput[]
  }

  export type ServiceCreateNestedManyWithoutReceivingUnitInput = {
    create?: XOR<ServiceCreateWithoutReceivingUnitInput, ServiceUncheckedCreateWithoutReceivingUnitInput> | ServiceCreateWithoutReceivingUnitInput[] | ServiceUncheckedCreateWithoutReceivingUnitInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutReceivingUnitInput | ServiceCreateOrConnectWithoutReceivingUnitInput[]
    createMany?: ServiceCreateManyReceivingUnitInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type ServiceUncheckedCreateNestedManyWithoutReceivingUnitInput = {
    create?: XOR<ServiceCreateWithoutReceivingUnitInput, ServiceUncheckedCreateWithoutReceivingUnitInput> | ServiceCreateWithoutReceivingUnitInput[] | ServiceUncheckedCreateWithoutReceivingUnitInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutReceivingUnitInput | ServiceCreateOrConnectWithoutReceivingUnitInput[]
    createMany?: ServiceCreateManyReceivingUnitInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type ServiceUpdateManyWithoutReceivingUnitNestedInput = {
    create?: XOR<ServiceCreateWithoutReceivingUnitInput, ServiceUncheckedCreateWithoutReceivingUnitInput> | ServiceCreateWithoutReceivingUnitInput[] | ServiceUncheckedCreateWithoutReceivingUnitInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutReceivingUnitInput | ServiceCreateOrConnectWithoutReceivingUnitInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutReceivingUnitInput | ServiceUpsertWithWhereUniqueWithoutReceivingUnitInput[]
    createMany?: ServiceCreateManyReceivingUnitInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutReceivingUnitInput | ServiceUpdateWithWhereUniqueWithoutReceivingUnitInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutReceivingUnitInput | ServiceUpdateManyWithWhereWithoutReceivingUnitInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type ServiceUncheckedUpdateManyWithoutReceivingUnitNestedInput = {
    create?: XOR<ServiceCreateWithoutReceivingUnitInput, ServiceUncheckedCreateWithoutReceivingUnitInput> | ServiceCreateWithoutReceivingUnitInput[] | ServiceUncheckedCreateWithoutReceivingUnitInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutReceivingUnitInput | ServiceCreateOrConnectWithoutReceivingUnitInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutReceivingUnitInput | ServiceUpsertWithWhereUniqueWithoutReceivingUnitInput[]
    createMany?: ServiceCreateManyReceivingUnitInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutReceivingUnitInput | ServiceUpdateWithWhereUniqueWithoutReceivingUnitInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutReceivingUnitInput | ServiceUpdateManyWithWhereWithoutReceivingUnitInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type DocumentsCreateNestedManyWithoutServiceInput = {
    create?: XOR<DocumentsCreateWithoutServiceInput, DocumentsUncheckedCreateWithoutServiceInput> | DocumentsCreateWithoutServiceInput[] | DocumentsUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: DocumentsCreateOrConnectWithoutServiceInput | DocumentsCreateOrConnectWithoutServiceInput[]
    createMany?: DocumentsCreateManyServiceInputEnvelope
    connect?: DocumentsWhereUniqueInput | DocumentsWhereUniqueInput[]
  }

  export type ReceivingUnitCreateNestedOneWithoutServiceInput = {
    create?: XOR<ReceivingUnitCreateWithoutServiceInput, ReceivingUnitUncheckedCreateWithoutServiceInput>
    connectOrCreate?: ReceivingUnitCreateOrConnectWithoutServiceInput
    connect?: ReceivingUnitWhereUniqueInput
  }

  export type ServiceTypeCreateNestedOneWithoutServiceInput = {
    create?: XOR<ServiceTypeCreateWithoutServiceInput, ServiceTypeUncheckedCreateWithoutServiceInput>
    connectOrCreate?: ServiceTypeCreateOrConnectWithoutServiceInput
    connect?: ServiceTypeWhereUniqueInput
  }

  export type ServiceStatusListCreateNestedOneWithoutServiceInput = {
    create?: XOR<ServiceStatusListCreateWithoutServiceInput, ServiceStatusListUncheckedCreateWithoutServiceInput>
    connectOrCreate?: ServiceStatusListCreateOrConnectWithoutServiceInput
    connect?: ServiceStatusListWhereUniqueInput
  }

  export type StudentCreateNestedOneWithoutServiceInput = {
    create?: XOR<StudentCreateWithoutServiceInput, StudentUncheckedCreateWithoutServiceInput>
    connectOrCreate?: StudentCreateOrConnectWithoutServiceInput
    connect?: StudentWhereUniqueInput
  }

  export type ServiceActivitiesCreateNestedManyWithoutServiceInput = {
    create?: XOR<ServiceActivitiesCreateWithoutServiceInput, ServiceActivitiesUncheckedCreateWithoutServiceInput> | ServiceActivitiesCreateWithoutServiceInput[] | ServiceActivitiesUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ServiceActivitiesCreateOrConnectWithoutServiceInput | ServiceActivitiesCreateOrConnectWithoutServiceInput[]
    createMany?: ServiceActivitiesCreateManyServiceInputEnvelope
    connect?: ServiceActivitiesWhereUniqueInput | ServiceActivitiesWhereUniqueInput[]
  }

  export type DocumentsUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<DocumentsCreateWithoutServiceInput, DocumentsUncheckedCreateWithoutServiceInput> | DocumentsCreateWithoutServiceInput[] | DocumentsUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: DocumentsCreateOrConnectWithoutServiceInput | DocumentsCreateOrConnectWithoutServiceInput[]
    createMany?: DocumentsCreateManyServiceInputEnvelope
    connect?: DocumentsWhereUniqueInput | DocumentsWhereUniqueInput[]
  }

  export type ServiceActivitiesUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<ServiceActivitiesCreateWithoutServiceInput, ServiceActivitiesUncheckedCreateWithoutServiceInput> | ServiceActivitiesCreateWithoutServiceInput[] | ServiceActivitiesUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ServiceActivitiesCreateOrConnectWithoutServiceInput | ServiceActivitiesCreateOrConnectWithoutServiceInput[]
    createMany?: ServiceActivitiesCreateManyServiceInputEnvelope
    connect?: ServiceActivitiesWhereUniqueInput | ServiceActivitiesWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DocumentsUpdateManyWithoutServiceNestedInput = {
    create?: XOR<DocumentsCreateWithoutServiceInput, DocumentsUncheckedCreateWithoutServiceInput> | DocumentsCreateWithoutServiceInput[] | DocumentsUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: DocumentsCreateOrConnectWithoutServiceInput | DocumentsCreateOrConnectWithoutServiceInput[]
    upsert?: DocumentsUpsertWithWhereUniqueWithoutServiceInput | DocumentsUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: DocumentsCreateManyServiceInputEnvelope
    set?: DocumentsWhereUniqueInput | DocumentsWhereUniqueInput[]
    disconnect?: DocumentsWhereUniqueInput | DocumentsWhereUniqueInput[]
    delete?: DocumentsWhereUniqueInput | DocumentsWhereUniqueInput[]
    connect?: DocumentsWhereUniqueInput | DocumentsWhereUniqueInput[]
    update?: DocumentsUpdateWithWhereUniqueWithoutServiceInput | DocumentsUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: DocumentsUpdateManyWithWhereWithoutServiceInput | DocumentsUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: DocumentsScalarWhereInput | DocumentsScalarWhereInput[]
  }

  export type ReceivingUnitUpdateOneWithoutServiceNestedInput = {
    create?: XOR<ReceivingUnitCreateWithoutServiceInput, ReceivingUnitUncheckedCreateWithoutServiceInput>
    connectOrCreate?: ReceivingUnitCreateOrConnectWithoutServiceInput
    upsert?: ReceivingUnitUpsertWithoutServiceInput
    disconnect?: ReceivingUnitWhereInput | boolean
    delete?: ReceivingUnitWhereInput | boolean
    connect?: ReceivingUnitWhereUniqueInput
    update?: XOR<XOR<ReceivingUnitUpdateToOneWithWhereWithoutServiceInput, ReceivingUnitUpdateWithoutServiceInput>, ReceivingUnitUncheckedUpdateWithoutServiceInput>
  }

  export type ServiceTypeUpdateOneWithoutServiceNestedInput = {
    create?: XOR<ServiceTypeCreateWithoutServiceInput, ServiceTypeUncheckedCreateWithoutServiceInput>
    connectOrCreate?: ServiceTypeCreateOrConnectWithoutServiceInput
    upsert?: ServiceTypeUpsertWithoutServiceInput
    disconnect?: ServiceTypeWhereInput | boolean
    delete?: ServiceTypeWhereInput | boolean
    connect?: ServiceTypeWhereUniqueInput
    update?: XOR<XOR<ServiceTypeUpdateToOneWithWhereWithoutServiceInput, ServiceTypeUpdateWithoutServiceInput>, ServiceTypeUncheckedUpdateWithoutServiceInput>
  }

  export type ServiceStatusListUpdateOneWithoutServiceNestedInput = {
    create?: XOR<ServiceStatusListCreateWithoutServiceInput, ServiceStatusListUncheckedCreateWithoutServiceInput>
    connectOrCreate?: ServiceStatusListCreateOrConnectWithoutServiceInput
    upsert?: ServiceStatusListUpsertWithoutServiceInput
    disconnect?: ServiceStatusListWhereInput | boolean
    delete?: ServiceStatusListWhereInput | boolean
    connect?: ServiceStatusListWhereUniqueInput
    update?: XOR<XOR<ServiceStatusListUpdateToOneWithWhereWithoutServiceInput, ServiceStatusListUpdateWithoutServiceInput>, ServiceStatusListUncheckedUpdateWithoutServiceInput>
  }

  export type StudentUpdateOneWithoutServiceNestedInput = {
    create?: XOR<StudentCreateWithoutServiceInput, StudentUncheckedCreateWithoutServiceInput>
    connectOrCreate?: StudentCreateOrConnectWithoutServiceInput
    upsert?: StudentUpsertWithoutServiceInput
    disconnect?: StudentWhereInput | boolean
    delete?: StudentWhereInput | boolean
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutServiceInput, StudentUpdateWithoutServiceInput>, StudentUncheckedUpdateWithoutServiceInput>
  }

  export type ServiceActivitiesUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ServiceActivitiesCreateWithoutServiceInput, ServiceActivitiesUncheckedCreateWithoutServiceInput> | ServiceActivitiesCreateWithoutServiceInput[] | ServiceActivitiesUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ServiceActivitiesCreateOrConnectWithoutServiceInput | ServiceActivitiesCreateOrConnectWithoutServiceInput[]
    upsert?: ServiceActivitiesUpsertWithWhereUniqueWithoutServiceInput | ServiceActivitiesUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ServiceActivitiesCreateManyServiceInputEnvelope
    set?: ServiceActivitiesWhereUniqueInput | ServiceActivitiesWhereUniqueInput[]
    disconnect?: ServiceActivitiesWhereUniqueInput | ServiceActivitiesWhereUniqueInput[]
    delete?: ServiceActivitiesWhereUniqueInput | ServiceActivitiesWhereUniqueInput[]
    connect?: ServiceActivitiesWhereUniqueInput | ServiceActivitiesWhereUniqueInput[]
    update?: ServiceActivitiesUpdateWithWhereUniqueWithoutServiceInput | ServiceActivitiesUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ServiceActivitiesUpdateManyWithWhereWithoutServiceInput | ServiceActivitiesUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ServiceActivitiesScalarWhereInput | ServiceActivitiesScalarWhereInput[]
  }

  export type DocumentsUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<DocumentsCreateWithoutServiceInput, DocumentsUncheckedCreateWithoutServiceInput> | DocumentsCreateWithoutServiceInput[] | DocumentsUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: DocumentsCreateOrConnectWithoutServiceInput | DocumentsCreateOrConnectWithoutServiceInput[]
    upsert?: DocumentsUpsertWithWhereUniqueWithoutServiceInput | DocumentsUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: DocumentsCreateManyServiceInputEnvelope
    set?: DocumentsWhereUniqueInput | DocumentsWhereUniqueInput[]
    disconnect?: DocumentsWhereUniqueInput | DocumentsWhereUniqueInput[]
    delete?: DocumentsWhereUniqueInput | DocumentsWhereUniqueInput[]
    connect?: DocumentsWhereUniqueInput | DocumentsWhereUniqueInput[]
    update?: DocumentsUpdateWithWhereUniqueWithoutServiceInput | DocumentsUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: DocumentsUpdateManyWithWhereWithoutServiceInput | DocumentsUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: DocumentsScalarWhereInput | DocumentsScalarWhereInput[]
  }

  export type ServiceActivitiesUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ServiceActivitiesCreateWithoutServiceInput, ServiceActivitiesUncheckedCreateWithoutServiceInput> | ServiceActivitiesCreateWithoutServiceInput[] | ServiceActivitiesUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ServiceActivitiesCreateOrConnectWithoutServiceInput | ServiceActivitiesCreateOrConnectWithoutServiceInput[]
    upsert?: ServiceActivitiesUpsertWithWhereUniqueWithoutServiceInput | ServiceActivitiesUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ServiceActivitiesCreateManyServiceInputEnvelope
    set?: ServiceActivitiesWhereUniqueInput | ServiceActivitiesWhereUniqueInput[]
    disconnect?: ServiceActivitiesWhereUniqueInput | ServiceActivitiesWhereUniqueInput[]
    delete?: ServiceActivitiesWhereUniqueInput | ServiceActivitiesWhereUniqueInput[]
    connect?: ServiceActivitiesWhereUniqueInput | ServiceActivitiesWhereUniqueInput[]
    update?: ServiceActivitiesUpdateWithWhereUniqueWithoutServiceInput | ServiceActivitiesUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ServiceActivitiesUpdateManyWithWhereWithoutServiceInput | ServiceActivitiesUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ServiceActivitiesScalarWhereInput | ServiceActivitiesScalarWhereInput[]
  }

  export type ServiceCreateNestedOneWithoutServiceActivitiesInput = {
    create?: XOR<ServiceCreateWithoutServiceActivitiesInput, ServiceUncheckedCreateWithoutServiceActivitiesInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutServiceActivitiesInput
    connect?: ServiceWhereUniqueInput
  }

  export type ServiceUpdateOneWithoutServiceActivitiesNestedInput = {
    create?: XOR<ServiceCreateWithoutServiceActivitiesInput, ServiceUncheckedCreateWithoutServiceActivitiesInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutServiceActivitiesInput
    upsert?: ServiceUpsertWithoutServiceActivitiesInput
    disconnect?: ServiceWhereInput | boolean
    delete?: ServiceWhereInput | boolean
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutServiceActivitiesInput, ServiceUpdateWithoutServiceActivitiesInput>, ServiceUncheckedUpdateWithoutServiceActivitiesInput>
  }

  export type ServiceCreateNestedManyWithoutServiceStatusListInput = {
    create?: XOR<ServiceCreateWithoutServiceStatusListInput, ServiceUncheckedCreateWithoutServiceStatusListInput> | ServiceCreateWithoutServiceStatusListInput[] | ServiceUncheckedCreateWithoutServiceStatusListInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutServiceStatusListInput | ServiceCreateOrConnectWithoutServiceStatusListInput[]
    createMany?: ServiceCreateManyServiceStatusListInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type ServiceUncheckedCreateNestedManyWithoutServiceStatusListInput = {
    create?: XOR<ServiceCreateWithoutServiceStatusListInput, ServiceUncheckedCreateWithoutServiceStatusListInput> | ServiceCreateWithoutServiceStatusListInput[] | ServiceUncheckedCreateWithoutServiceStatusListInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutServiceStatusListInput | ServiceCreateOrConnectWithoutServiceStatusListInput[]
    createMany?: ServiceCreateManyServiceStatusListInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type ServiceUpdateManyWithoutServiceStatusListNestedInput = {
    create?: XOR<ServiceCreateWithoutServiceStatusListInput, ServiceUncheckedCreateWithoutServiceStatusListInput> | ServiceCreateWithoutServiceStatusListInput[] | ServiceUncheckedCreateWithoutServiceStatusListInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutServiceStatusListInput | ServiceCreateOrConnectWithoutServiceStatusListInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutServiceStatusListInput | ServiceUpsertWithWhereUniqueWithoutServiceStatusListInput[]
    createMany?: ServiceCreateManyServiceStatusListInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutServiceStatusListInput | ServiceUpdateWithWhereUniqueWithoutServiceStatusListInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutServiceStatusListInput | ServiceUpdateManyWithWhereWithoutServiceStatusListInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type ServiceUncheckedUpdateManyWithoutServiceStatusListNestedInput = {
    create?: XOR<ServiceCreateWithoutServiceStatusListInput, ServiceUncheckedCreateWithoutServiceStatusListInput> | ServiceCreateWithoutServiceStatusListInput[] | ServiceUncheckedCreateWithoutServiceStatusListInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutServiceStatusListInput | ServiceCreateOrConnectWithoutServiceStatusListInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutServiceStatusListInput | ServiceUpsertWithWhereUniqueWithoutServiceStatusListInput[]
    createMany?: ServiceCreateManyServiceStatusListInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutServiceStatusListInput | ServiceUpdateWithWhereUniqueWithoutServiceStatusListInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutServiceStatusListInput | ServiceUpdateManyWithWhereWithoutServiceStatusListInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type ServiceCreateNestedManyWithoutServiceTypeInput = {
    create?: XOR<ServiceCreateWithoutServiceTypeInput, ServiceUncheckedCreateWithoutServiceTypeInput> | ServiceCreateWithoutServiceTypeInput[] | ServiceUncheckedCreateWithoutServiceTypeInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutServiceTypeInput | ServiceCreateOrConnectWithoutServiceTypeInput[]
    createMany?: ServiceCreateManyServiceTypeInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type ServiceUncheckedCreateNestedManyWithoutServiceTypeInput = {
    create?: XOR<ServiceCreateWithoutServiceTypeInput, ServiceUncheckedCreateWithoutServiceTypeInput> | ServiceCreateWithoutServiceTypeInput[] | ServiceUncheckedCreateWithoutServiceTypeInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutServiceTypeInput | ServiceCreateOrConnectWithoutServiceTypeInput[]
    createMany?: ServiceCreateManyServiceTypeInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type ServiceUpdateManyWithoutServiceTypeNestedInput = {
    create?: XOR<ServiceCreateWithoutServiceTypeInput, ServiceUncheckedCreateWithoutServiceTypeInput> | ServiceCreateWithoutServiceTypeInput[] | ServiceUncheckedCreateWithoutServiceTypeInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutServiceTypeInput | ServiceCreateOrConnectWithoutServiceTypeInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutServiceTypeInput | ServiceUpsertWithWhereUniqueWithoutServiceTypeInput[]
    createMany?: ServiceCreateManyServiceTypeInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutServiceTypeInput | ServiceUpdateWithWhereUniqueWithoutServiceTypeInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutServiceTypeInput | ServiceUpdateManyWithWhereWithoutServiceTypeInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type ServiceUncheckedUpdateManyWithoutServiceTypeNestedInput = {
    create?: XOR<ServiceCreateWithoutServiceTypeInput, ServiceUncheckedCreateWithoutServiceTypeInput> | ServiceCreateWithoutServiceTypeInput[] | ServiceUncheckedCreateWithoutServiceTypeInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutServiceTypeInput | ServiceCreateOrConnectWithoutServiceTypeInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutServiceTypeInput | ServiceUpsertWithWhereUniqueWithoutServiceTypeInput[]
    createMany?: ServiceCreateManyServiceTypeInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutServiceTypeInput | ServiceUpdateWithWhereUniqueWithoutServiceTypeInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutServiceTypeInput | ServiceUpdateManyWithWhereWithoutServiceTypeInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type ServiceCreateNestedManyWithoutStudentInput = {
    create?: XOR<ServiceCreateWithoutStudentInput, ServiceUncheckedCreateWithoutStudentInput> | ServiceCreateWithoutStudentInput[] | ServiceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutStudentInput | ServiceCreateOrConnectWithoutStudentInput[]
    createMany?: ServiceCreateManyStudentInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type ServiceUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<ServiceCreateWithoutStudentInput, ServiceUncheckedCreateWithoutStudentInput> | ServiceCreateWithoutStudentInput[] | ServiceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutStudentInput | ServiceCreateOrConnectWithoutStudentInput[]
    createMany?: ServiceCreateManyStudentInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type ServiceUpdateManyWithoutStudentNestedInput = {
    create?: XOR<ServiceCreateWithoutStudentInput, ServiceUncheckedCreateWithoutStudentInput> | ServiceCreateWithoutStudentInput[] | ServiceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutStudentInput | ServiceCreateOrConnectWithoutStudentInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutStudentInput | ServiceUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: ServiceCreateManyStudentInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutStudentInput | ServiceUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutStudentInput | ServiceUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type ServiceUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<ServiceCreateWithoutStudentInput, ServiceUncheckedCreateWithoutStudentInput> | ServiceCreateWithoutStudentInput[] | ServiceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutStudentInput | ServiceCreateOrConnectWithoutStudentInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutStudentInput | ServiceUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: ServiceCreateManyStudentInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutStudentInput | ServiceUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutStudentInput | ServiceUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DocumentStatusListCreateWithoutDocumentsInput = {
    status?: string | null
    description?: string | null
  }

  export type DocumentStatusListUncheckedCreateWithoutDocumentsInput = {
    docStatusId?: number
    status?: string | null
    description?: string | null
  }

  export type DocumentStatusListCreateOrConnectWithoutDocumentsInput = {
    where: DocumentStatusListWhereUniqueInput
    create: XOR<DocumentStatusListCreateWithoutDocumentsInput, DocumentStatusListUncheckedCreateWithoutDocumentsInput>
  }

  export type ServiceCreateWithoutDocumentsInput = {
    servicesStartDate?: Date | string | null
    supervisorName?: string | null
    supervisorContactNumber?: string | null
    programObjective?: string | null
    supervisorPosition?: string | null
    ReceivingUnit?: ReceivingUnitCreateNestedOneWithoutServiceInput
    ServiceType?: ServiceTypeCreateNestedOneWithoutServiceInput
    ServiceStatusList?: ServiceStatusListCreateNestedOneWithoutServiceInput
    Student?: StudentCreateNestedOneWithoutServiceInput
    ServiceActivities?: ServiceActivitiesCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutDocumentsInput = {
    serviceId?: number
    student_id?: number | null
    serviceType_id?: number | null
    servicesStartDate?: Date | string | null
    service_status_id?: number | null
    supervisorName?: string | null
    supervisorContactNumber?: string | null
    programObjective?: string | null
    supervisorPosition?: string | null
    receivingUnit_id?: number | null
    ServiceActivities?: ServiceActivitiesUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutDocumentsInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutDocumentsInput, ServiceUncheckedCreateWithoutDocumentsInput>
  }

  export type DocumentStatusListUpsertWithoutDocumentsInput = {
    update: XOR<DocumentStatusListUpdateWithoutDocumentsInput, DocumentStatusListUncheckedUpdateWithoutDocumentsInput>
    create: XOR<DocumentStatusListCreateWithoutDocumentsInput, DocumentStatusListUncheckedCreateWithoutDocumentsInput>
    where?: DocumentStatusListWhereInput
  }

  export type DocumentStatusListUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: DocumentStatusListWhereInput
    data: XOR<DocumentStatusListUpdateWithoutDocumentsInput, DocumentStatusListUncheckedUpdateWithoutDocumentsInput>
  }

  export type DocumentStatusListUpdateWithoutDocumentsInput = {
    status?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DocumentStatusListUncheckedUpdateWithoutDocumentsInput = {
    docStatusId?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ServiceUpsertWithoutDocumentsInput = {
    update: XOR<ServiceUpdateWithoutDocumentsInput, ServiceUncheckedUpdateWithoutDocumentsInput>
    create: XOR<ServiceCreateWithoutDocumentsInput, ServiceUncheckedCreateWithoutDocumentsInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutDocumentsInput, ServiceUncheckedUpdateWithoutDocumentsInput>
  }

  export type ServiceUpdateWithoutDocumentsInput = {
    servicesStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    supervisorName?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorContactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    programObjective?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorPosition?: NullableStringFieldUpdateOperationsInput | string | null
    ReceivingUnit?: ReceivingUnitUpdateOneWithoutServiceNestedInput
    ServiceType?: ServiceTypeUpdateOneWithoutServiceNestedInput
    ServiceStatusList?: ServiceStatusListUpdateOneWithoutServiceNestedInput
    Student?: StudentUpdateOneWithoutServiceNestedInput
    ServiceActivities?: ServiceActivitiesUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutDocumentsInput = {
    serviceId?: IntFieldUpdateOperationsInput | number
    student_id?: NullableIntFieldUpdateOperationsInput | number | null
    serviceType_id?: NullableIntFieldUpdateOperationsInput | number | null
    servicesStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    service_status_id?: NullableIntFieldUpdateOperationsInput | number | null
    supervisorName?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorContactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    programObjective?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorPosition?: NullableStringFieldUpdateOperationsInput | string | null
    receivingUnit_id?: NullableIntFieldUpdateOperationsInput | number | null
    ServiceActivities?: ServiceActivitiesUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type DocumentsCreateWithoutDocumentStatusListInput = {
    codedFile?: string | null
    fileType?: string | null
    Service?: ServiceCreateNestedOneWithoutDocumentsInput
  }

  export type DocumentsUncheckedCreateWithoutDocumentStatusListInput = {
    documentId?: number
    codedFile?: string | null
    fileType?: string | null
    service_id?: number | null
  }

  export type DocumentsCreateOrConnectWithoutDocumentStatusListInput = {
    where: DocumentsWhereUniqueInput
    create: XOR<DocumentsCreateWithoutDocumentStatusListInput, DocumentsUncheckedCreateWithoutDocumentStatusListInput>
  }

  export type DocumentsCreateManyDocumentStatusListInputEnvelope = {
    data: DocumentsCreateManyDocumentStatusListInput | DocumentsCreateManyDocumentStatusListInput[]
  }

  export type DocumentsUpsertWithWhereUniqueWithoutDocumentStatusListInput = {
    where: DocumentsWhereUniqueInput
    update: XOR<DocumentsUpdateWithoutDocumentStatusListInput, DocumentsUncheckedUpdateWithoutDocumentStatusListInput>
    create: XOR<DocumentsCreateWithoutDocumentStatusListInput, DocumentsUncheckedCreateWithoutDocumentStatusListInput>
  }

  export type DocumentsUpdateWithWhereUniqueWithoutDocumentStatusListInput = {
    where: DocumentsWhereUniqueInput
    data: XOR<DocumentsUpdateWithoutDocumentStatusListInput, DocumentsUncheckedUpdateWithoutDocumentStatusListInput>
  }

  export type DocumentsUpdateManyWithWhereWithoutDocumentStatusListInput = {
    where: DocumentsScalarWhereInput
    data: XOR<DocumentsUpdateManyMutationInput, DocumentsUncheckedUpdateManyWithoutDocumentStatusListInput>
  }

  export type DocumentsScalarWhereInput = {
    AND?: DocumentsScalarWhereInput | DocumentsScalarWhereInput[]
    OR?: DocumentsScalarWhereInput[]
    NOT?: DocumentsScalarWhereInput | DocumentsScalarWhereInput[]
    documentId?: IntFilter<"Documents"> | number
    docStatus_id?: IntNullableFilter<"Documents"> | number | null
    codedFile?: StringNullableFilter<"Documents"> | string | null
    fileType?: StringNullableFilter<"Documents"> | string | null
    service_id?: IntNullableFilter<"Documents"> | number | null
  }

  export type ServiceCreateWithoutReceivingUnitInput = {
    servicesStartDate?: Date | string | null
    supervisorName?: string | null
    supervisorContactNumber?: string | null
    programObjective?: string | null
    supervisorPosition?: string | null
    Documents?: DocumentsCreateNestedManyWithoutServiceInput
    ServiceType?: ServiceTypeCreateNestedOneWithoutServiceInput
    ServiceStatusList?: ServiceStatusListCreateNestedOneWithoutServiceInput
    Student?: StudentCreateNestedOneWithoutServiceInput
    ServiceActivities?: ServiceActivitiesCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutReceivingUnitInput = {
    serviceId?: number
    student_id?: number | null
    serviceType_id?: number | null
    servicesStartDate?: Date | string | null
    service_status_id?: number | null
    supervisorName?: string | null
    supervisorContactNumber?: string | null
    programObjective?: string | null
    supervisorPosition?: string | null
    Documents?: DocumentsUncheckedCreateNestedManyWithoutServiceInput
    ServiceActivities?: ServiceActivitiesUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutReceivingUnitInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutReceivingUnitInput, ServiceUncheckedCreateWithoutReceivingUnitInput>
  }

  export type ServiceCreateManyReceivingUnitInputEnvelope = {
    data: ServiceCreateManyReceivingUnitInput | ServiceCreateManyReceivingUnitInput[]
  }

  export type ServiceUpsertWithWhereUniqueWithoutReceivingUnitInput = {
    where: ServiceWhereUniqueInput
    update: XOR<ServiceUpdateWithoutReceivingUnitInput, ServiceUncheckedUpdateWithoutReceivingUnitInput>
    create: XOR<ServiceCreateWithoutReceivingUnitInput, ServiceUncheckedCreateWithoutReceivingUnitInput>
  }

  export type ServiceUpdateWithWhereUniqueWithoutReceivingUnitInput = {
    where: ServiceWhereUniqueInput
    data: XOR<ServiceUpdateWithoutReceivingUnitInput, ServiceUncheckedUpdateWithoutReceivingUnitInput>
  }

  export type ServiceUpdateManyWithWhereWithoutReceivingUnitInput = {
    where: ServiceScalarWhereInput
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyWithoutReceivingUnitInput>
  }

  export type ServiceScalarWhereInput = {
    AND?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
    OR?: ServiceScalarWhereInput[]
    NOT?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
    serviceId?: IntFilter<"Service"> | number
    student_id?: IntNullableFilter<"Service"> | number | null
    serviceType_id?: IntNullableFilter<"Service"> | number | null
    servicesStartDate?: DateTimeNullableFilter<"Service"> | Date | string | null
    service_status_id?: IntNullableFilter<"Service"> | number | null
    supervisorName?: StringNullableFilter<"Service"> | string | null
    supervisorContactNumber?: StringNullableFilter<"Service"> | string | null
    programObjective?: StringNullableFilter<"Service"> | string | null
    supervisorPosition?: StringNullableFilter<"Service"> | string | null
    receivingUnit_id?: IntNullableFilter<"Service"> | number | null
  }

  export type DocumentsCreateWithoutServiceInput = {
    codedFile?: string | null
    fileType?: string | null
    DocumentStatusList?: DocumentStatusListCreateNestedOneWithoutDocumentsInput
  }

  export type DocumentsUncheckedCreateWithoutServiceInput = {
    documentId?: number
    docStatus_id?: number | null
    codedFile?: string | null
    fileType?: string | null
  }

  export type DocumentsCreateOrConnectWithoutServiceInput = {
    where: DocumentsWhereUniqueInput
    create: XOR<DocumentsCreateWithoutServiceInput, DocumentsUncheckedCreateWithoutServiceInput>
  }

  export type DocumentsCreateManyServiceInputEnvelope = {
    data: DocumentsCreateManyServiceInput | DocumentsCreateManyServiceInput[]
  }

  export type ReceivingUnitCreateWithoutServiceInput = {
    institutionName?: string | null
    contactNumber?: string | null
    institutionDirection?: string | null
    contactEmail?: string | null
    principalActivities?: string | null
  }

  export type ReceivingUnitUncheckedCreateWithoutServiceInput = {
    receivingUnitId?: number
    institutionName?: string | null
    contactNumber?: string | null
    institutionDirection?: string | null
    contactEmail?: string | null
    principalActivities?: string | null
  }

  export type ReceivingUnitCreateOrConnectWithoutServiceInput = {
    where: ReceivingUnitWhereUniqueInput
    create: XOR<ReceivingUnitCreateWithoutServiceInput, ReceivingUnitUncheckedCreateWithoutServiceInput>
  }

  export type ServiceTypeCreateWithoutServiceInput = {
    type?: string | null
    description?: string | null
    quantityToComplete?: number | null
  }

  export type ServiceTypeUncheckedCreateWithoutServiceInput = {
    serviceTypeId?: number
    type?: string | null
    description?: string | null
    quantityToComplete?: number | null
  }

  export type ServiceTypeCreateOrConnectWithoutServiceInput = {
    where: ServiceTypeWhereUniqueInput
    create: XOR<ServiceTypeCreateWithoutServiceInput, ServiceTypeUncheckedCreateWithoutServiceInput>
  }

  export type ServiceStatusListCreateWithoutServiceInput = {
    status?: string | null
    description?: string | null
  }

  export type ServiceStatusListUncheckedCreateWithoutServiceInput = {
    serviceStatusId?: number
    status?: string | null
    description?: string | null
  }

  export type ServiceStatusListCreateOrConnectWithoutServiceInput = {
    where: ServiceStatusListWhereUniqueInput
    create: XOR<ServiceStatusListCreateWithoutServiceInput, ServiceStatusListUncheckedCreateWithoutServiceInput>
  }

  export type StudentCreateWithoutServiceInput = {
    name?: string | null
    email?: string | null
    phoneNumber?: string | null
    careerInCourse?: string | null
    classGroup?: string | null
    enrollmentNumber?: string | null
    careerModality?: string | null
    grade?: number | null
    studentStatus_id?: number | null
    institutionalEmail?: string | null
  }

  export type StudentUncheckedCreateWithoutServiceInput = {
    studentId?: number
    name?: string | null
    email?: string | null
    phoneNumber?: string | null
    careerInCourse?: string | null
    classGroup?: string | null
    enrollmentNumber?: string | null
    careerModality?: string | null
    grade?: number | null
    studentStatus_id?: number | null
    institutionalEmail?: string | null
  }

  export type StudentCreateOrConnectWithoutServiceInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutServiceInput, StudentUncheckedCreateWithoutServiceInput>
  }

  export type ServiceActivitiesCreateWithoutServiceInput = {
    description?: string | null
    postingDate?: Date | string | null
    hours?: number | null
  }

  export type ServiceActivitiesUncheckedCreateWithoutServiceInput = {
    serviceActivitieId?: number
    description?: string | null
    postingDate?: Date | string | null
    hours?: number | null
  }

  export type ServiceActivitiesCreateOrConnectWithoutServiceInput = {
    where: ServiceActivitiesWhereUniqueInput
    create: XOR<ServiceActivitiesCreateWithoutServiceInput, ServiceActivitiesUncheckedCreateWithoutServiceInput>
  }

  export type ServiceActivitiesCreateManyServiceInputEnvelope = {
    data: ServiceActivitiesCreateManyServiceInput | ServiceActivitiesCreateManyServiceInput[]
  }

  export type DocumentsUpsertWithWhereUniqueWithoutServiceInput = {
    where: DocumentsWhereUniqueInput
    update: XOR<DocumentsUpdateWithoutServiceInput, DocumentsUncheckedUpdateWithoutServiceInput>
    create: XOR<DocumentsCreateWithoutServiceInput, DocumentsUncheckedCreateWithoutServiceInput>
  }

  export type DocumentsUpdateWithWhereUniqueWithoutServiceInput = {
    where: DocumentsWhereUniqueInput
    data: XOR<DocumentsUpdateWithoutServiceInput, DocumentsUncheckedUpdateWithoutServiceInput>
  }

  export type DocumentsUpdateManyWithWhereWithoutServiceInput = {
    where: DocumentsScalarWhereInput
    data: XOR<DocumentsUpdateManyMutationInput, DocumentsUncheckedUpdateManyWithoutServiceInput>
  }

  export type ReceivingUnitUpsertWithoutServiceInput = {
    update: XOR<ReceivingUnitUpdateWithoutServiceInput, ReceivingUnitUncheckedUpdateWithoutServiceInput>
    create: XOR<ReceivingUnitCreateWithoutServiceInput, ReceivingUnitUncheckedCreateWithoutServiceInput>
    where?: ReceivingUnitWhereInput
  }

  export type ReceivingUnitUpdateToOneWithWhereWithoutServiceInput = {
    where?: ReceivingUnitWhereInput
    data: XOR<ReceivingUnitUpdateWithoutServiceInput, ReceivingUnitUncheckedUpdateWithoutServiceInput>
  }

  export type ReceivingUnitUpdateWithoutServiceInput = {
    institutionName?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    institutionDirection?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    principalActivities?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReceivingUnitUncheckedUpdateWithoutServiceInput = {
    receivingUnitId?: IntFieldUpdateOperationsInput | number
    institutionName?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    institutionDirection?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    principalActivities?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ServiceTypeUpsertWithoutServiceInput = {
    update: XOR<ServiceTypeUpdateWithoutServiceInput, ServiceTypeUncheckedUpdateWithoutServiceInput>
    create: XOR<ServiceTypeCreateWithoutServiceInput, ServiceTypeUncheckedCreateWithoutServiceInput>
    where?: ServiceTypeWhereInput
  }

  export type ServiceTypeUpdateToOneWithWhereWithoutServiceInput = {
    where?: ServiceTypeWhereInput
    data: XOR<ServiceTypeUpdateWithoutServiceInput, ServiceTypeUncheckedUpdateWithoutServiceInput>
  }

  export type ServiceTypeUpdateWithoutServiceInput = {
    type?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantityToComplete?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ServiceTypeUncheckedUpdateWithoutServiceInput = {
    serviceTypeId?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantityToComplete?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ServiceStatusListUpsertWithoutServiceInput = {
    update: XOR<ServiceStatusListUpdateWithoutServiceInput, ServiceStatusListUncheckedUpdateWithoutServiceInput>
    create: XOR<ServiceStatusListCreateWithoutServiceInput, ServiceStatusListUncheckedCreateWithoutServiceInput>
    where?: ServiceStatusListWhereInput
  }

  export type ServiceStatusListUpdateToOneWithWhereWithoutServiceInput = {
    where?: ServiceStatusListWhereInput
    data: XOR<ServiceStatusListUpdateWithoutServiceInput, ServiceStatusListUncheckedUpdateWithoutServiceInput>
  }

  export type ServiceStatusListUpdateWithoutServiceInput = {
    status?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ServiceStatusListUncheckedUpdateWithoutServiceInput = {
    serviceStatusId?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StudentUpsertWithoutServiceInput = {
    update: XOR<StudentUpdateWithoutServiceInput, StudentUncheckedUpdateWithoutServiceInput>
    create: XOR<StudentCreateWithoutServiceInput, StudentUncheckedCreateWithoutServiceInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutServiceInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutServiceInput, StudentUncheckedUpdateWithoutServiceInput>
  }

  export type StudentUpdateWithoutServiceInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    careerInCourse?: NullableStringFieldUpdateOperationsInput | string | null
    classGroup?: NullableStringFieldUpdateOperationsInput | string | null
    enrollmentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    careerModality?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableIntFieldUpdateOperationsInput | number | null
    studentStatus_id?: NullableIntFieldUpdateOperationsInput | number | null
    institutionalEmail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StudentUncheckedUpdateWithoutServiceInput = {
    studentId?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    careerInCourse?: NullableStringFieldUpdateOperationsInput | string | null
    classGroup?: NullableStringFieldUpdateOperationsInput | string | null
    enrollmentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    careerModality?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableIntFieldUpdateOperationsInput | number | null
    studentStatus_id?: NullableIntFieldUpdateOperationsInput | number | null
    institutionalEmail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ServiceActivitiesUpsertWithWhereUniqueWithoutServiceInput = {
    where: ServiceActivitiesWhereUniqueInput
    update: XOR<ServiceActivitiesUpdateWithoutServiceInput, ServiceActivitiesUncheckedUpdateWithoutServiceInput>
    create: XOR<ServiceActivitiesCreateWithoutServiceInput, ServiceActivitiesUncheckedCreateWithoutServiceInput>
  }

  export type ServiceActivitiesUpdateWithWhereUniqueWithoutServiceInput = {
    where: ServiceActivitiesWhereUniqueInput
    data: XOR<ServiceActivitiesUpdateWithoutServiceInput, ServiceActivitiesUncheckedUpdateWithoutServiceInput>
  }

  export type ServiceActivitiesUpdateManyWithWhereWithoutServiceInput = {
    where: ServiceActivitiesScalarWhereInput
    data: XOR<ServiceActivitiesUpdateManyMutationInput, ServiceActivitiesUncheckedUpdateManyWithoutServiceInput>
  }

  export type ServiceActivitiesScalarWhereInput = {
    AND?: ServiceActivitiesScalarWhereInput | ServiceActivitiesScalarWhereInput[]
    OR?: ServiceActivitiesScalarWhereInput[]
    NOT?: ServiceActivitiesScalarWhereInput | ServiceActivitiesScalarWhereInput[]
    serviceActivitieId?: IntFilter<"ServiceActivities"> | number
    service_id?: IntNullableFilter<"ServiceActivities"> | number | null
    description?: StringNullableFilter<"ServiceActivities"> | string | null
    postingDate?: DateTimeNullableFilter<"ServiceActivities"> | Date | string | null
    hours?: IntNullableFilter<"ServiceActivities"> | number | null
  }

  export type ServiceCreateWithoutServiceActivitiesInput = {
    servicesStartDate?: Date | string | null
    supervisorName?: string | null
    supervisorContactNumber?: string | null
    programObjective?: string | null
    supervisorPosition?: string | null
    Documents?: DocumentsCreateNestedManyWithoutServiceInput
    ReceivingUnit?: ReceivingUnitCreateNestedOneWithoutServiceInput
    ServiceType?: ServiceTypeCreateNestedOneWithoutServiceInput
    ServiceStatusList?: ServiceStatusListCreateNestedOneWithoutServiceInput
    Student?: StudentCreateNestedOneWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutServiceActivitiesInput = {
    serviceId?: number
    student_id?: number | null
    serviceType_id?: number | null
    servicesStartDate?: Date | string | null
    service_status_id?: number | null
    supervisorName?: string | null
    supervisorContactNumber?: string | null
    programObjective?: string | null
    supervisorPosition?: string | null
    receivingUnit_id?: number | null
    Documents?: DocumentsUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutServiceActivitiesInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutServiceActivitiesInput, ServiceUncheckedCreateWithoutServiceActivitiesInput>
  }

  export type ServiceUpsertWithoutServiceActivitiesInput = {
    update: XOR<ServiceUpdateWithoutServiceActivitiesInput, ServiceUncheckedUpdateWithoutServiceActivitiesInput>
    create: XOR<ServiceCreateWithoutServiceActivitiesInput, ServiceUncheckedCreateWithoutServiceActivitiesInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutServiceActivitiesInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutServiceActivitiesInput, ServiceUncheckedUpdateWithoutServiceActivitiesInput>
  }

  export type ServiceUpdateWithoutServiceActivitiesInput = {
    servicesStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    supervisorName?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorContactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    programObjective?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorPosition?: NullableStringFieldUpdateOperationsInput | string | null
    Documents?: DocumentsUpdateManyWithoutServiceNestedInput
    ReceivingUnit?: ReceivingUnitUpdateOneWithoutServiceNestedInput
    ServiceType?: ServiceTypeUpdateOneWithoutServiceNestedInput
    ServiceStatusList?: ServiceStatusListUpdateOneWithoutServiceNestedInput
    Student?: StudentUpdateOneWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutServiceActivitiesInput = {
    serviceId?: IntFieldUpdateOperationsInput | number
    student_id?: NullableIntFieldUpdateOperationsInput | number | null
    serviceType_id?: NullableIntFieldUpdateOperationsInput | number | null
    servicesStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    service_status_id?: NullableIntFieldUpdateOperationsInput | number | null
    supervisorName?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorContactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    programObjective?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorPosition?: NullableStringFieldUpdateOperationsInput | string | null
    receivingUnit_id?: NullableIntFieldUpdateOperationsInput | number | null
    Documents?: DocumentsUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceCreateWithoutServiceStatusListInput = {
    servicesStartDate?: Date | string | null
    supervisorName?: string | null
    supervisorContactNumber?: string | null
    programObjective?: string | null
    supervisorPosition?: string | null
    Documents?: DocumentsCreateNestedManyWithoutServiceInput
    ReceivingUnit?: ReceivingUnitCreateNestedOneWithoutServiceInput
    ServiceType?: ServiceTypeCreateNestedOneWithoutServiceInput
    Student?: StudentCreateNestedOneWithoutServiceInput
    ServiceActivities?: ServiceActivitiesCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutServiceStatusListInput = {
    serviceId?: number
    student_id?: number | null
    serviceType_id?: number | null
    servicesStartDate?: Date | string | null
    supervisorName?: string | null
    supervisorContactNumber?: string | null
    programObjective?: string | null
    supervisorPosition?: string | null
    receivingUnit_id?: number | null
    Documents?: DocumentsUncheckedCreateNestedManyWithoutServiceInput
    ServiceActivities?: ServiceActivitiesUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutServiceStatusListInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutServiceStatusListInput, ServiceUncheckedCreateWithoutServiceStatusListInput>
  }

  export type ServiceCreateManyServiceStatusListInputEnvelope = {
    data: ServiceCreateManyServiceStatusListInput | ServiceCreateManyServiceStatusListInput[]
  }

  export type ServiceUpsertWithWhereUniqueWithoutServiceStatusListInput = {
    where: ServiceWhereUniqueInput
    update: XOR<ServiceUpdateWithoutServiceStatusListInput, ServiceUncheckedUpdateWithoutServiceStatusListInput>
    create: XOR<ServiceCreateWithoutServiceStatusListInput, ServiceUncheckedCreateWithoutServiceStatusListInput>
  }

  export type ServiceUpdateWithWhereUniqueWithoutServiceStatusListInput = {
    where: ServiceWhereUniqueInput
    data: XOR<ServiceUpdateWithoutServiceStatusListInput, ServiceUncheckedUpdateWithoutServiceStatusListInput>
  }

  export type ServiceUpdateManyWithWhereWithoutServiceStatusListInput = {
    where: ServiceScalarWhereInput
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyWithoutServiceStatusListInput>
  }

  export type ServiceCreateWithoutServiceTypeInput = {
    servicesStartDate?: Date | string | null
    supervisorName?: string | null
    supervisorContactNumber?: string | null
    programObjective?: string | null
    supervisorPosition?: string | null
    Documents?: DocumentsCreateNestedManyWithoutServiceInput
    ReceivingUnit?: ReceivingUnitCreateNestedOneWithoutServiceInput
    ServiceStatusList?: ServiceStatusListCreateNestedOneWithoutServiceInput
    Student?: StudentCreateNestedOneWithoutServiceInput
    ServiceActivities?: ServiceActivitiesCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutServiceTypeInput = {
    serviceId?: number
    student_id?: number | null
    servicesStartDate?: Date | string | null
    service_status_id?: number | null
    supervisorName?: string | null
    supervisorContactNumber?: string | null
    programObjective?: string | null
    supervisorPosition?: string | null
    receivingUnit_id?: number | null
    Documents?: DocumentsUncheckedCreateNestedManyWithoutServiceInput
    ServiceActivities?: ServiceActivitiesUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutServiceTypeInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutServiceTypeInput, ServiceUncheckedCreateWithoutServiceTypeInput>
  }

  export type ServiceCreateManyServiceTypeInputEnvelope = {
    data: ServiceCreateManyServiceTypeInput | ServiceCreateManyServiceTypeInput[]
  }

  export type ServiceUpsertWithWhereUniqueWithoutServiceTypeInput = {
    where: ServiceWhereUniqueInput
    update: XOR<ServiceUpdateWithoutServiceTypeInput, ServiceUncheckedUpdateWithoutServiceTypeInput>
    create: XOR<ServiceCreateWithoutServiceTypeInput, ServiceUncheckedCreateWithoutServiceTypeInput>
  }

  export type ServiceUpdateWithWhereUniqueWithoutServiceTypeInput = {
    where: ServiceWhereUniqueInput
    data: XOR<ServiceUpdateWithoutServiceTypeInput, ServiceUncheckedUpdateWithoutServiceTypeInput>
  }

  export type ServiceUpdateManyWithWhereWithoutServiceTypeInput = {
    where: ServiceScalarWhereInput
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyWithoutServiceTypeInput>
  }

  export type ServiceCreateWithoutStudentInput = {
    servicesStartDate?: Date | string | null
    supervisorName?: string | null
    supervisorContactNumber?: string | null
    programObjective?: string | null
    supervisorPosition?: string | null
    Documents?: DocumentsCreateNestedManyWithoutServiceInput
    ReceivingUnit?: ReceivingUnitCreateNestedOneWithoutServiceInput
    ServiceType?: ServiceTypeCreateNestedOneWithoutServiceInput
    ServiceStatusList?: ServiceStatusListCreateNestedOneWithoutServiceInput
    ServiceActivities?: ServiceActivitiesCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutStudentInput = {
    serviceId?: number
    serviceType_id?: number | null
    servicesStartDate?: Date | string | null
    service_status_id?: number | null
    supervisorName?: string | null
    supervisorContactNumber?: string | null
    programObjective?: string | null
    supervisorPosition?: string | null
    receivingUnit_id?: number | null
    Documents?: DocumentsUncheckedCreateNestedManyWithoutServiceInput
    ServiceActivities?: ServiceActivitiesUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutStudentInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutStudentInput, ServiceUncheckedCreateWithoutStudentInput>
  }

  export type ServiceCreateManyStudentInputEnvelope = {
    data: ServiceCreateManyStudentInput | ServiceCreateManyStudentInput[]
  }

  export type ServiceUpsertWithWhereUniqueWithoutStudentInput = {
    where: ServiceWhereUniqueInput
    update: XOR<ServiceUpdateWithoutStudentInput, ServiceUncheckedUpdateWithoutStudentInput>
    create: XOR<ServiceCreateWithoutStudentInput, ServiceUncheckedCreateWithoutStudentInput>
  }

  export type ServiceUpdateWithWhereUniqueWithoutStudentInput = {
    where: ServiceWhereUniqueInput
    data: XOR<ServiceUpdateWithoutStudentInput, ServiceUncheckedUpdateWithoutStudentInput>
  }

  export type ServiceUpdateManyWithWhereWithoutStudentInput = {
    where: ServiceScalarWhereInput
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyWithoutStudentInput>
  }

  export type DocumentsCreateManyDocumentStatusListInput = {
    codedFile?: string | null
    fileType?: string | null
    service_id?: number | null
  }

  export type DocumentsUpdateWithoutDocumentStatusListInput = {
    codedFile?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: NullableStringFieldUpdateOperationsInput | string | null
    Service?: ServiceUpdateOneWithoutDocumentsNestedInput
  }

  export type DocumentsUncheckedUpdateWithoutDocumentStatusListInput = {
    documentId?: IntFieldUpdateOperationsInput | number
    codedFile?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: NullableStringFieldUpdateOperationsInput | string | null
    service_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DocumentsUncheckedUpdateManyWithoutDocumentStatusListInput = {
    documentId?: IntFieldUpdateOperationsInput | number
    codedFile?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: NullableStringFieldUpdateOperationsInput | string | null
    service_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ServiceCreateManyReceivingUnitInput = {
    student_id?: number | null
    serviceType_id?: number | null
    servicesStartDate?: Date | string | null
    service_status_id?: number | null
    supervisorName?: string | null
    supervisorContactNumber?: string | null
    programObjective?: string | null
    supervisorPosition?: string | null
  }

  export type ServiceUpdateWithoutReceivingUnitInput = {
    servicesStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    supervisorName?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorContactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    programObjective?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorPosition?: NullableStringFieldUpdateOperationsInput | string | null
    Documents?: DocumentsUpdateManyWithoutServiceNestedInput
    ServiceType?: ServiceTypeUpdateOneWithoutServiceNestedInput
    ServiceStatusList?: ServiceStatusListUpdateOneWithoutServiceNestedInput
    Student?: StudentUpdateOneWithoutServiceNestedInput
    ServiceActivities?: ServiceActivitiesUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutReceivingUnitInput = {
    serviceId?: IntFieldUpdateOperationsInput | number
    student_id?: NullableIntFieldUpdateOperationsInput | number | null
    serviceType_id?: NullableIntFieldUpdateOperationsInput | number | null
    servicesStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    service_status_id?: NullableIntFieldUpdateOperationsInput | number | null
    supervisorName?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorContactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    programObjective?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorPosition?: NullableStringFieldUpdateOperationsInput | string | null
    Documents?: DocumentsUncheckedUpdateManyWithoutServiceNestedInput
    ServiceActivities?: ServiceActivitiesUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateManyWithoutReceivingUnitInput = {
    serviceId?: IntFieldUpdateOperationsInput | number
    student_id?: NullableIntFieldUpdateOperationsInput | number | null
    serviceType_id?: NullableIntFieldUpdateOperationsInput | number | null
    servicesStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    service_status_id?: NullableIntFieldUpdateOperationsInput | number | null
    supervisorName?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorContactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    programObjective?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorPosition?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DocumentsCreateManyServiceInput = {
    docStatus_id?: number | null
    codedFile?: string | null
    fileType?: string | null
  }

  export type ServiceActivitiesCreateManyServiceInput = {
    description?: string | null
    postingDate?: Date | string | null
    hours?: number | null
  }

  export type DocumentsUpdateWithoutServiceInput = {
    codedFile?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: NullableStringFieldUpdateOperationsInput | string | null
    DocumentStatusList?: DocumentStatusListUpdateOneWithoutDocumentsNestedInput
  }

  export type DocumentsUncheckedUpdateWithoutServiceInput = {
    documentId?: IntFieldUpdateOperationsInput | number
    docStatus_id?: NullableIntFieldUpdateOperationsInput | number | null
    codedFile?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DocumentsUncheckedUpdateManyWithoutServiceInput = {
    documentId?: IntFieldUpdateOperationsInput | number
    docStatus_id?: NullableIntFieldUpdateOperationsInput | number | null
    codedFile?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ServiceActivitiesUpdateWithoutServiceInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    postingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hours?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ServiceActivitiesUncheckedUpdateWithoutServiceInput = {
    serviceActivitieId?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    postingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hours?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ServiceActivitiesUncheckedUpdateManyWithoutServiceInput = {
    serviceActivitieId?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    postingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hours?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ServiceCreateManyServiceStatusListInput = {
    student_id?: number | null
    serviceType_id?: number | null
    servicesStartDate?: Date | string | null
    supervisorName?: string | null
    supervisorContactNumber?: string | null
    programObjective?: string | null
    supervisorPosition?: string | null
    receivingUnit_id?: number | null
  }

  export type ServiceUpdateWithoutServiceStatusListInput = {
    servicesStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    supervisorName?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorContactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    programObjective?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorPosition?: NullableStringFieldUpdateOperationsInput | string | null
    Documents?: DocumentsUpdateManyWithoutServiceNestedInput
    ReceivingUnit?: ReceivingUnitUpdateOneWithoutServiceNestedInput
    ServiceType?: ServiceTypeUpdateOneWithoutServiceNestedInput
    Student?: StudentUpdateOneWithoutServiceNestedInput
    ServiceActivities?: ServiceActivitiesUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutServiceStatusListInput = {
    serviceId?: IntFieldUpdateOperationsInput | number
    student_id?: NullableIntFieldUpdateOperationsInput | number | null
    serviceType_id?: NullableIntFieldUpdateOperationsInput | number | null
    servicesStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    supervisorName?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorContactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    programObjective?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorPosition?: NullableStringFieldUpdateOperationsInput | string | null
    receivingUnit_id?: NullableIntFieldUpdateOperationsInput | number | null
    Documents?: DocumentsUncheckedUpdateManyWithoutServiceNestedInput
    ServiceActivities?: ServiceActivitiesUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateManyWithoutServiceStatusListInput = {
    serviceId?: IntFieldUpdateOperationsInput | number
    student_id?: NullableIntFieldUpdateOperationsInput | number | null
    serviceType_id?: NullableIntFieldUpdateOperationsInput | number | null
    servicesStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    supervisorName?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorContactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    programObjective?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorPosition?: NullableStringFieldUpdateOperationsInput | string | null
    receivingUnit_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ServiceCreateManyServiceTypeInput = {
    student_id?: number | null
    servicesStartDate?: Date | string | null
    service_status_id?: number | null
    supervisorName?: string | null
    supervisorContactNumber?: string | null
    programObjective?: string | null
    supervisorPosition?: string | null
    receivingUnit_id?: number | null
  }

  export type ServiceUpdateWithoutServiceTypeInput = {
    servicesStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    supervisorName?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorContactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    programObjective?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorPosition?: NullableStringFieldUpdateOperationsInput | string | null
    Documents?: DocumentsUpdateManyWithoutServiceNestedInput
    ReceivingUnit?: ReceivingUnitUpdateOneWithoutServiceNestedInput
    ServiceStatusList?: ServiceStatusListUpdateOneWithoutServiceNestedInput
    Student?: StudentUpdateOneWithoutServiceNestedInput
    ServiceActivities?: ServiceActivitiesUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutServiceTypeInput = {
    serviceId?: IntFieldUpdateOperationsInput | number
    student_id?: NullableIntFieldUpdateOperationsInput | number | null
    servicesStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    service_status_id?: NullableIntFieldUpdateOperationsInput | number | null
    supervisorName?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorContactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    programObjective?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorPosition?: NullableStringFieldUpdateOperationsInput | string | null
    receivingUnit_id?: NullableIntFieldUpdateOperationsInput | number | null
    Documents?: DocumentsUncheckedUpdateManyWithoutServiceNestedInput
    ServiceActivities?: ServiceActivitiesUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateManyWithoutServiceTypeInput = {
    serviceId?: IntFieldUpdateOperationsInput | number
    student_id?: NullableIntFieldUpdateOperationsInput | number | null
    servicesStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    service_status_id?: NullableIntFieldUpdateOperationsInput | number | null
    supervisorName?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorContactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    programObjective?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorPosition?: NullableStringFieldUpdateOperationsInput | string | null
    receivingUnit_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ServiceCreateManyStudentInput = {
    serviceType_id?: number | null
    servicesStartDate?: Date | string | null
    service_status_id?: number | null
    supervisorName?: string | null
    supervisorContactNumber?: string | null
    programObjective?: string | null
    supervisorPosition?: string | null
    receivingUnit_id?: number | null
  }

  export type ServiceUpdateWithoutStudentInput = {
    servicesStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    supervisorName?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorContactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    programObjective?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorPosition?: NullableStringFieldUpdateOperationsInput | string | null
    Documents?: DocumentsUpdateManyWithoutServiceNestedInput
    ReceivingUnit?: ReceivingUnitUpdateOneWithoutServiceNestedInput
    ServiceType?: ServiceTypeUpdateOneWithoutServiceNestedInput
    ServiceStatusList?: ServiceStatusListUpdateOneWithoutServiceNestedInput
    ServiceActivities?: ServiceActivitiesUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutStudentInput = {
    serviceId?: IntFieldUpdateOperationsInput | number
    serviceType_id?: NullableIntFieldUpdateOperationsInput | number | null
    servicesStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    service_status_id?: NullableIntFieldUpdateOperationsInput | number | null
    supervisorName?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorContactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    programObjective?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorPosition?: NullableStringFieldUpdateOperationsInput | string | null
    receivingUnit_id?: NullableIntFieldUpdateOperationsInput | number | null
    Documents?: DocumentsUncheckedUpdateManyWithoutServiceNestedInput
    ServiceActivities?: ServiceActivitiesUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateManyWithoutStudentInput = {
    serviceId?: IntFieldUpdateOperationsInput | number
    serviceType_id?: NullableIntFieldUpdateOperationsInput | number | null
    servicesStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    service_status_id?: NullableIntFieldUpdateOperationsInput | number | null
    supervisorName?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorContactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    programObjective?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorPosition?: NullableStringFieldUpdateOperationsInput | string | null
    receivingUnit_id?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}