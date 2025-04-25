
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
 * Model MobilePhone
 * 
 */
export type MobilePhone = $Result.DefaultSelection<Prisma.$MobilePhonePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more MobilePhones
 * const mobilePhones = await prisma.mobilePhone.findMany()
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
   * // Fetch zero or more MobilePhones
   * const mobilePhones = await prisma.mobilePhone.findMany()
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
   * `prisma.mobilePhone`: Exposes CRUD operations for the **MobilePhone** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MobilePhones
    * const mobilePhones = await prisma.mobilePhone.findMany()
    * ```
    */
  get mobilePhone(): Prisma.MobilePhoneDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    MobilePhone: 'MobilePhone'
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
      modelProps: "mobilePhone"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      MobilePhone: {
        payload: Prisma.$MobilePhonePayload<ExtArgs>
        fields: Prisma.MobilePhoneFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MobilePhoneFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MobilePhonePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MobilePhoneFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MobilePhonePayload>
          }
          findFirst: {
            args: Prisma.MobilePhoneFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MobilePhonePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MobilePhoneFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MobilePhonePayload>
          }
          findMany: {
            args: Prisma.MobilePhoneFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MobilePhonePayload>[]
          }
          create: {
            args: Prisma.MobilePhoneCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MobilePhonePayload>
          }
          createMany: {
            args: Prisma.MobilePhoneCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MobilePhoneCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MobilePhonePayload>[]
          }
          delete: {
            args: Prisma.MobilePhoneDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MobilePhonePayload>
          }
          update: {
            args: Prisma.MobilePhoneUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MobilePhonePayload>
          }
          deleteMany: {
            args: Prisma.MobilePhoneDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MobilePhoneUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MobilePhoneUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MobilePhonePayload>[]
          }
          upsert: {
            args: Prisma.MobilePhoneUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MobilePhonePayload>
          }
          aggregate: {
            args: Prisma.MobilePhoneAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMobilePhone>
          }
          groupBy: {
            args: Prisma.MobilePhoneGroupByArgs<ExtArgs>
            result: $Utils.Optional<MobilePhoneGroupByOutputType>[]
          }
          count: {
            args: Prisma.MobilePhoneCountArgs<ExtArgs>
            result: $Utils.Optional<MobilePhoneCountAggregateOutputType> | number
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
    mobilePhone?: MobilePhoneOmit
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
   * Models
   */

  /**
   * Model MobilePhone
   */

  export type AggregateMobilePhone = {
    _count: MobilePhoneCountAggregateOutputType | null
    _avg: MobilePhoneAvgAggregateOutputType | null
    _sum: MobilePhoneSumAggregateOutputType | null
    _min: MobilePhoneMinAggregateOutputType | null
    _max: MobilePhoneMaxAggregateOutputType | null
  }

  export type MobilePhoneAvgAggregateOutputType = {
    id: number | null
    price: number | null
    ram: number | null
    storage: number | null
    screen_size: number | null
  }

  export type MobilePhoneSumAggregateOutputType = {
    id: number | null
    price: number | null
    ram: number | null
    storage: number | null
    screen_size: number | null
  }

  export type MobilePhoneMinAggregateOutputType = {
    id: number | null
    brand: string | null
    model: string | null
    price: number | null
    ram: number | null
    storage: number | null
    processor: string | null
    screen_size: number | null
  }

  export type MobilePhoneMaxAggregateOutputType = {
    id: number | null
    brand: string | null
    model: string | null
    price: number | null
    ram: number | null
    storage: number | null
    processor: string | null
    screen_size: number | null
  }

  export type MobilePhoneCountAggregateOutputType = {
    id: number
    brand: number
    model: number
    price: number
    ram: number
    storage: number
    processor: number
    screen_size: number
    _all: number
  }


  export type MobilePhoneAvgAggregateInputType = {
    id?: true
    price?: true
    ram?: true
    storage?: true
    screen_size?: true
  }

  export type MobilePhoneSumAggregateInputType = {
    id?: true
    price?: true
    ram?: true
    storage?: true
    screen_size?: true
  }

  export type MobilePhoneMinAggregateInputType = {
    id?: true
    brand?: true
    model?: true
    price?: true
    ram?: true
    storage?: true
    processor?: true
    screen_size?: true
  }

  export type MobilePhoneMaxAggregateInputType = {
    id?: true
    brand?: true
    model?: true
    price?: true
    ram?: true
    storage?: true
    processor?: true
    screen_size?: true
  }

  export type MobilePhoneCountAggregateInputType = {
    id?: true
    brand?: true
    model?: true
    price?: true
    ram?: true
    storage?: true
    processor?: true
    screen_size?: true
    _all?: true
  }

  export type MobilePhoneAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MobilePhone to aggregate.
     */
    where?: MobilePhoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MobilePhones to fetch.
     */
    orderBy?: MobilePhoneOrderByWithRelationInput | MobilePhoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MobilePhoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MobilePhones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MobilePhones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MobilePhones
    **/
    _count?: true | MobilePhoneCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MobilePhoneAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MobilePhoneSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MobilePhoneMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MobilePhoneMaxAggregateInputType
  }

  export type GetMobilePhoneAggregateType<T extends MobilePhoneAggregateArgs> = {
        [P in keyof T & keyof AggregateMobilePhone]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMobilePhone[P]>
      : GetScalarType<T[P], AggregateMobilePhone[P]>
  }




  export type MobilePhoneGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MobilePhoneWhereInput
    orderBy?: MobilePhoneOrderByWithAggregationInput | MobilePhoneOrderByWithAggregationInput[]
    by: MobilePhoneScalarFieldEnum[] | MobilePhoneScalarFieldEnum
    having?: MobilePhoneScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MobilePhoneCountAggregateInputType | true
    _avg?: MobilePhoneAvgAggregateInputType
    _sum?: MobilePhoneSumAggregateInputType
    _min?: MobilePhoneMinAggregateInputType
    _max?: MobilePhoneMaxAggregateInputType
  }

  export type MobilePhoneGroupByOutputType = {
    id: number
    brand: string
    model: string
    price: number
    ram: number
    storage: number
    processor: string
    screen_size: number
    _count: MobilePhoneCountAggregateOutputType | null
    _avg: MobilePhoneAvgAggregateOutputType | null
    _sum: MobilePhoneSumAggregateOutputType | null
    _min: MobilePhoneMinAggregateOutputType | null
    _max: MobilePhoneMaxAggregateOutputType | null
  }

  type GetMobilePhoneGroupByPayload<T extends MobilePhoneGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MobilePhoneGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MobilePhoneGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MobilePhoneGroupByOutputType[P]>
            : GetScalarType<T[P], MobilePhoneGroupByOutputType[P]>
        }
      >
    >


  export type MobilePhoneSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brand?: boolean
    model?: boolean
    price?: boolean
    ram?: boolean
    storage?: boolean
    processor?: boolean
    screen_size?: boolean
  }, ExtArgs["result"]["mobilePhone"]>

  export type MobilePhoneSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brand?: boolean
    model?: boolean
    price?: boolean
    ram?: boolean
    storage?: boolean
    processor?: boolean
    screen_size?: boolean
  }, ExtArgs["result"]["mobilePhone"]>

  export type MobilePhoneSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brand?: boolean
    model?: boolean
    price?: boolean
    ram?: boolean
    storage?: boolean
    processor?: boolean
    screen_size?: boolean
  }, ExtArgs["result"]["mobilePhone"]>

  export type MobilePhoneSelectScalar = {
    id?: boolean
    brand?: boolean
    model?: boolean
    price?: boolean
    ram?: boolean
    storage?: boolean
    processor?: boolean
    screen_size?: boolean
  }

  export type MobilePhoneOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "brand" | "model" | "price" | "ram" | "storage" | "processor" | "screen_size", ExtArgs["result"]["mobilePhone"]>

  export type $MobilePhonePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MobilePhone"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      brand: string
      model: string
      price: number
      ram: number
      storage: number
      processor: string
      screen_size: number
    }, ExtArgs["result"]["mobilePhone"]>
    composites: {}
  }

  type MobilePhoneGetPayload<S extends boolean | null | undefined | MobilePhoneDefaultArgs> = $Result.GetResult<Prisma.$MobilePhonePayload, S>

  type MobilePhoneCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MobilePhoneFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MobilePhoneCountAggregateInputType | true
    }

  export interface MobilePhoneDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MobilePhone'], meta: { name: 'MobilePhone' } }
    /**
     * Find zero or one MobilePhone that matches the filter.
     * @param {MobilePhoneFindUniqueArgs} args - Arguments to find a MobilePhone
     * @example
     * // Get one MobilePhone
     * const mobilePhone = await prisma.mobilePhone.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MobilePhoneFindUniqueArgs>(args: SelectSubset<T, MobilePhoneFindUniqueArgs<ExtArgs>>): Prisma__MobilePhoneClient<$Result.GetResult<Prisma.$MobilePhonePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MobilePhone that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MobilePhoneFindUniqueOrThrowArgs} args - Arguments to find a MobilePhone
     * @example
     * // Get one MobilePhone
     * const mobilePhone = await prisma.mobilePhone.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MobilePhoneFindUniqueOrThrowArgs>(args: SelectSubset<T, MobilePhoneFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MobilePhoneClient<$Result.GetResult<Prisma.$MobilePhonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MobilePhone that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MobilePhoneFindFirstArgs} args - Arguments to find a MobilePhone
     * @example
     * // Get one MobilePhone
     * const mobilePhone = await prisma.mobilePhone.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MobilePhoneFindFirstArgs>(args?: SelectSubset<T, MobilePhoneFindFirstArgs<ExtArgs>>): Prisma__MobilePhoneClient<$Result.GetResult<Prisma.$MobilePhonePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MobilePhone that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MobilePhoneFindFirstOrThrowArgs} args - Arguments to find a MobilePhone
     * @example
     * // Get one MobilePhone
     * const mobilePhone = await prisma.mobilePhone.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MobilePhoneFindFirstOrThrowArgs>(args?: SelectSubset<T, MobilePhoneFindFirstOrThrowArgs<ExtArgs>>): Prisma__MobilePhoneClient<$Result.GetResult<Prisma.$MobilePhonePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MobilePhones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MobilePhoneFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MobilePhones
     * const mobilePhones = await prisma.mobilePhone.findMany()
     * 
     * // Get first 10 MobilePhones
     * const mobilePhones = await prisma.mobilePhone.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mobilePhoneWithIdOnly = await prisma.mobilePhone.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MobilePhoneFindManyArgs>(args?: SelectSubset<T, MobilePhoneFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MobilePhonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MobilePhone.
     * @param {MobilePhoneCreateArgs} args - Arguments to create a MobilePhone.
     * @example
     * // Create one MobilePhone
     * const MobilePhone = await prisma.mobilePhone.create({
     *   data: {
     *     // ... data to create a MobilePhone
     *   }
     * })
     * 
     */
    create<T extends MobilePhoneCreateArgs>(args: SelectSubset<T, MobilePhoneCreateArgs<ExtArgs>>): Prisma__MobilePhoneClient<$Result.GetResult<Prisma.$MobilePhonePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MobilePhones.
     * @param {MobilePhoneCreateManyArgs} args - Arguments to create many MobilePhones.
     * @example
     * // Create many MobilePhones
     * const mobilePhone = await prisma.mobilePhone.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MobilePhoneCreateManyArgs>(args?: SelectSubset<T, MobilePhoneCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MobilePhones and returns the data saved in the database.
     * @param {MobilePhoneCreateManyAndReturnArgs} args - Arguments to create many MobilePhones.
     * @example
     * // Create many MobilePhones
     * const mobilePhone = await prisma.mobilePhone.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MobilePhones and only return the `id`
     * const mobilePhoneWithIdOnly = await prisma.mobilePhone.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MobilePhoneCreateManyAndReturnArgs>(args?: SelectSubset<T, MobilePhoneCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MobilePhonePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MobilePhone.
     * @param {MobilePhoneDeleteArgs} args - Arguments to delete one MobilePhone.
     * @example
     * // Delete one MobilePhone
     * const MobilePhone = await prisma.mobilePhone.delete({
     *   where: {
     *     // ... filter to delete one MobilePhone
     *   }
     * })
     * 
     */
    delete<T extends MobilePhoneDeleteArgs>(args: SelectSubset<T, MobilePhoneDeleteArgs<ExtArgs>>): Prisma__MobilePhoneClient<$Result.GetResult<Prisma.$MobilePhonePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MobilePhone.
     * @param {MobilePhoneUpdateArgs} args - Arguments to update one MobilePhone.
     * @example
     * // Update one MobilePhone
     * const mobilePhone = await prisma.mobilePhone.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MobilePhoneUpdateArgs>(args: SelectSubset<T, MobilePhoneUpdateArgs<ExtArgs>>): Prisma__MobilePhoneClient<$Result.GetResult<Prisma.$MobilePhonePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MobilePhones.
     * @param {MobilePhoneDeleteManyArgs} args - Arguments to filter MobilePhones to delete.
     * @example
     * // Delete a few MobilePhones
     * const { count } = await prisma.mobilePhone.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MobilePhoneDeleteManyArgs>(args?: SelectSubset<T, MobilePhoneDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MobilePhones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MobilePhoneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MobilePhones
     * const mobilePhone = await prisma.mobilePhone.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MobilePhoneUpdateManyArgs>(args: SelectSubset<T, MobilePhoneUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MobilePhones and returns the data updated in the database.
     * @param {MobilePhoneUpdateManyAndReturnArgs} args - Arguments to update many MobilePhones.
     * @example
     * // Update many MobilePhones
     * const mobilePhone = await prisma.mobilePhone.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MobilePhones and only return the `id`
     * const mobilePhoneWithIdOnly = await prisma.mobilePhone.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MobilePhoneUpdateManyAndReturnArgs>(args: SelectSubset<T, MobilePhoneUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MobilePhonePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MobilePhone.
     * @param {MobilePhoneUpsertArgs} args - Arguments to update or create a MobilePhone.
     * @example
     * // Update or create a MobilePhone
     * const mobilePhone = await prisma.mobilePhone.upsert({
     *   create: {
     *     // ... data to create a MobilePhone
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MobilePhone we want to update
     *   }
     * })
     */
    upsert<T extends MobilePhoneUpsertArgs>(args: SelectSubset<T, MobilePhoneUpsertArgs<ExtArgs>>): Prisma__MobilePhoneClient<$Result.GetResult<Prisma.$MobilePhonePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MobilePhones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MobilePhoneCountArgs} args - Arguments to filter MobilePhones to count.
     * @example
     * // Count the number of MobilePhones
     * const count = await prisma.mobilePhone.count({
     *   where: {
     *     // ... the filter for the MobilePhones we want to count
     *   }
     * })
    **/
    count<T extends MobilePhoneCountArgs>(
      args?: Subset<T, MobilePhoneCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MobilePhoneCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MobilePhone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MobilePhoneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MobilePhoneAggregateArgs>(args: Subset<T, MobilePhoneAggregateArgs>): Prisma.PrismaPromise<GetMobilePhoneAggregateType<T>>

    /**
     * Group by MobilePhone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MobilePhoneGroupByArgs} args - Group by arguments.
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
      T extends MobilePhoneGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MobilePhoneGroupByArgs['orderBy'] }
        : { orderBy?: MobilePhoneGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MobilePhoneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMobilePhoneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MobilePhone model
   */
  readonly fields: MobilePhoneFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MobilePhone.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MobilePhoneClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the MobilePhone model
   */
  interface MobilePhoneFieldRefs {
    readonly id: FieldRef<"MobilePhone", 'Int'>
    readonly brand: FieldRef<"MobilePhone", 'String'>
    readonly model: FieldRef<"MobilePhone", 'String'>
    readonly price: FieldRef<"MobilePhone", 'Float'>
    readonly ram: FieldRef<"MobilePhone", 'Int'>
    readonly storage: FieldRef<"MobilePhone", 'Int'>
    readonly processor: FieldRef<"MobilePhone", 'String'>
    readonly screen_size: FieldRef<"MobilePhone", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * MobilePhone findUnique
   */
  export type MobilePhoneFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MobilePhone
     */
    select?: MobilePhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MobilePhone
     */
    omit?: MobilePhoneOmit<ExtArgs> | null
    /**
     * Filter, which MobilePhone to fetch.
     */
    where: MobilePhoneWhereUniqueInput
  }

  /**
   * MobilePhone findUniqueOrThrow
   */
  export type MobilePhoneFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MobilePhone
     */
    select?: MobilePhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MobilePhone
     */
    omit?: MobilePhoneOmit<ExtArgs> | null
    /**
     * Filter, which MobilePhone to fetch.
     */
    where: MobilePhoneWhereUniqueInput
  }

  /**
   * MobilePhone findFirst
   */
  export type MobilePhoneFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MobilePhone
     */
    select?: MobilePhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MobilePhone
     */
    omit?: MobilePhoneOmit<ExtArgs> | null
    /**
     * Filter, which MobilePhone to fetch.
     */
    where?: MobilePhoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MobilePhones to fetch.
     */
    orderBy?: MobilePhoneOrderByWithRelationInput | MobilePhoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MobilePhones.
     */
    cursor?: MobilePhoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MobilePhones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MobilePhones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MobilePhones.
     */
    distinct?: MobilePhoneScalarFieldEnum | MobilePhoneScalarFieldEnum[]
  }

  /**
   * MobilePhone findFirstOrThrow
   */
  export type MobilePhoneFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MobilePhone
     */
    select?: MobilePhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MobilePhone
     */
    omit?: MobilePhoneOmit<ExtArgs> | null
    /**
     * Filter, which MobilePhone to fetch.
     */
    where?: MobilePhoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MobilePhones to fetch.
     */
    orderBy?: MobilePhoneOrderByWithRelationInput | MobilePhoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MobilePhones.
     */
    cursor?: MobilePhoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MobilePhones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MobilePhones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MobilePhones.
     */
    distinct?: MobilePhoneScalarFieldEnum | MobilePhoneScalarFieldEnum[]
  }

  /**
   * MobilePhone findMany
   */
  export type MobilePhoneFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MobilePhone
     */
    select?: MobilePhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MobilePhone
     */
    omit?: MobilePhoneOmit<ExtArgs> | null
    /**
     * Filter, which MobilePhones to fetch.
     */
    where?: MobilePhoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MobilePhones to fetch.
     */
    orderBy?: MobilePhoneOrderByWithRelationInput | MobilePhoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MobilePhones.
     */
    cursor?: MobilePhoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MobilePhones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MobilePhones.
     */
    skip?: number
    distinct?: MobilePhoneScalarFieldEnum | MobilePhoneScalarFieldEnum[]
  }

  /**
   * MobilePhone create
   */
  export type MobilePhoneCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MobilePhone
     */
    select?: MobilePhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MobilePhone
     */
    omit?: MobilePhoneOmit<ExtArgs> | null
    /**
     * The data needed to create a MobilePhone.
     */
    data: XOR<MobilePhoneCreateInput, MobilePhoneUncheckedCreateInput>
  }

  /**
   * MobilePhone createMany
   */
  export type MobilePhoneCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MobilePhones.
     */
    data: MobilePhoneCreateManyInput | MobilePhoneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MobilePhone createManyAndReturn
   */
  export type MobilePhoneCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MobilePhone
     */
    select?: MobilePhoneSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MobilePhone
     */
    omit?: MobilePhoneOmit<ExtArgs> | null
    /**
     * The data used to create many MobilePhones.
     */
    data: MobilePhoneCreateManyInput | MobilePhoneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MobilePhone update
   */
  export type MobilePhoneUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MobilePhone
     */
    select?: MobilePhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MobilePhone
     */
    omit?: MobilePhoneOmit<ExtArgs> | null
    /**
     * The data needed to update a MobilePhone.
     */
    data: XOR<MobilePhoneUpdateInput, MobilePhoneUncheckedUpdateInput>
    /**
     * Choose, which MobilePhone to update.
     */
    where: MobilePhoneWhereUniqueInput
  }

  /**
   * MobilePhone updateMany
   */
  export type MobilePhoneUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MobilePhones.
     */
    data: XOR<MobilePhoneUpdateManyMutationInput, MobilePhoneUncheckedUpdateManyInput>
    /**
     * Filter which MobilePhones to update
     */
    where?: MobilePhoneWhereInput
    /**
     * Limit how many MobilePhones to update.
     */
    limit?: number
  }

  /**
   * MobilePhone updateManyAndReturn
   */
  export type MobilePhoneUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MobilePhone
     */
    select?: MobilePhoneSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MobilePhone
     */
    omit?: MobilePhoneOmit<ExtArgs> | null
    /**
     * The data used to update MobilePhones.
     */
    data: XOR<MobilePhoneUpdateManyMutationInput, MobilePhoneUncheckedUpdateManyInput>
    /**
     * Filter which MobilePhones to update
     */
    where?: MobilePhoneWhereInput
    /**
     * Limit how many MobilePhones to update.
     */
    limit?: number
  }

  /**
   * MobilePhone upsert
   */
  export type MobilePhoneUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MobilePhone
     */
    select?: MobilePhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MobilePhone
     */
    omit?: MobilePhoneOmit<ExtArgs> | null
    /**
     * The filter to search for the MobilePhone to update in case it exists.
     */
    where: MobilePhoneWhereUniqueInput
    /**
     * In case the MobilePhone found by the `where` argument doesn't exist, create a new MobilePhone with this data.
     */
    create: XOR<MobilePhoneCreateInput, MobilePhoneUncheckedCreateInput>
    /**
     * In case the MobilePhone was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MobilePhoneUpdateInput, MobilePhoneUncheckedUpdateInput>
  }

  /**
   * MobilePhone delete
   */
  export type MobilePhoneDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MobilePhone
     */
    select?: MobilePhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MobilePhone
     */
    omit?: MobilePhoneOmit<ExtArgs> | null
    /**
     * Filter which MobilePhone to delete.
     */
    where: MobilePhoneWhereUniqueInput
  }

  /**
   * MobilePhone deleteMany
   */
  export type MobilePhoneDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MobilePhones to delete
     */
    where?: MobilePhoneWhereInput
    /**
     * Limit how many MobilePhones to delete.
     */
    limit?: number
  }

  /**
   * MobilePhone without action
   */
  export type MobilePhoneDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MobilePhone
     */
    select?: MobilePhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MobilePhone
     */
    omit?: MobilePhoneOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const MobilePhoneScalarFieldEnum: {
    id: 'id',
    brand: 'brand',
    model: 'model',
    price: 'price',
    ram: 'ram',
    storage: 'storage',
    processor: 'processor',
    screen_size: 'screen_size'
  };

  export type MobilePhoneScalarFieldEnum = (typeof MobilePhoneScalarFieldEnum)[keyof typeof MobilePhoneScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type MobilePhoneWhereInput = {
    AND?: MobilePhoneWhereInput | MobilePhoneWhereInput[]
    OR?: MobilePhoneWhereInput[]
    NOT?: MobilePhoneWhereInput | MobilePhoneWhereInput[]
    id?: IntFilter<"MobilePhone"> | number
    brand?: StringFilter<"MobilePhone"> | string
    model?: StringFilter<"MobilePhone"> | string
    price?: FloatFilter<"MobilePhone"> | number
    ram?: IntFilter<"MobilePhone"> | number
    storage?: IntFilter<"MobilePhone"> | number
    processor?: StringFilter<"MobilePhone"> | string
    screen_size?: FloatFilter<"MobilePhone"> | number
  }

  export type MobilePhoneOrderByWithRelationInput = {
    id?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    price?: SortOrder
    ram?: SortOrder
    storage?: SortOrder
    processor?: SortOrder
    screen_size?: SortOrder
  }

  export type MobilePhoneWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MobilePhoneWhereInput | MobilePhoneWhereInput[]
    OR?: MobilePhoneWhereInput[]
    NOT?: MobilePhoneWhereInput | MobilePhoneWhereInput[]
    brand?: StringFilter<"MobilePhone"> | string
    model?: StringFilter<"MobilePhone"> | string
    price?: FloatFilter<"MobilePhone"> | number
    ram?: IntFilter<"MobilePhone"> | number
    storage?: IntFilter<"MobilePhone"> | number
    processor?: StringFilter<"MobilePhone"> | string
    screen_size?: FloatFilter<"MobilePhone"> | number
  }, "id">

  export type MobilePhoneOrderByWithAggregationInput = {
    id?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    price?: SortOrder
    ram?: SortOrder
    storage?: SortOrder
    processor?: SortOrder
    screen_size?: SortOrder
    _count?: MobilePhoneCountOrderByAggregateInput
    _avg?: MobilePhoneAvgOrderByAggregateInput
    _max?: MobilePhoneMaxOrderByAggregateInput
    _min?: MobilePhoneMinOrderByAggregateInput
    _sum?: MobilePhoneSumOrderByAggregateInput
  }

  export type MobilePhoneScalarWhereWithAggregatesInput = {
    AND?: MobilePhoneScalarWhereWithAggregatesInput | MobilePhoneScalarWhereWithAggregatesInput[]
    OR?: MobilePhoneScalarWhereWithAggregatesInput[]
    NOT?: MobilePhoneScalarWhereWithAggregatesInput | MobilePhoneScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MobilePhone"> | number
    brand?: StringWithAggregatesFilter<"MobilePhone"> | string
    model?: StringWithAggregatesFilter<"MobilePhone"> | string
    price?: FloatWithAggregatesFilter<"MobilePhone"> | number
    ram?: IntWithAggregatesFilter<"MobilePhone"> | number
    storage?: IntWithAggregatesFilter<"MobilePhone"> | number
    processor?: StringWithAggregatesFilter<"MobilePhone"> | string
    screen_size?: FloatWithAggregatesFilter<"MobilePhone"> | number
  }

  export type MobilePhoneCreateInput = {
    brand: string
    model: string
    price: number
    ram: number
    storage: number
    processor: string
    screen_size: number
  }

  export type MobilePhoneUncheckedCreateInput = {
    id?: number
    brand: string
    model: string
    price: number
    ram: number
    storage: number
    processor: string
    screen_size: number
  }

  export type MobilePhoneUpdateInput = {
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    ram?: IntFieldUpdateOperationsInput | number
    storage?: IntFieldUpdateOperationsInput | number
    processor?: StringFieldUpdateOperationsInput | string
    screen_size?: FloatFieldUpdateOperationsInput | number
  }

  export type MobilePhoneUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    ram?: IntFieldUpdateOperationsInput | number
    storage?: IntFieldUpdateOperationsInput | number
    processor?: StringFieldUpdateOperationsInput | string
    screen_size?: FloatFieldUpdateOperationsInput | number
  }

  export type MobilePhoneCreateManyInput = {
    id?: number
    brand: string
    model: string
    price: number
    ram: number
    storage: number
    processor: string
    screen_size: number
  }

  export type MobilePhoneUpdateManyMutationInput = {
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    ram?: IntFieldUpdateOperationsInput | number
    storage?: IntFieldUpdateOperationsInput | number
    processor?: StringFieldUpdateOperationsInput | string
    screen_size?: FloatFieldUpdateOperationsInput | number
  }

  export type MobilePhoneUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    ram?: IntFieldUpdateOperationsInput | number
    storage?: IntFieldUpdateOperationsInput | number
    processor?: StringFieldUpdateOperationsInput | string
    screen_size?: FloatFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type MobilePhoneCountOrderByAggregateInput = {
    id?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    price?: SortOrder
    ram?: SortOrder
    storage?: SortOrder
    processor?: SortOrder
    screen_size?: SortOrder
  }

  export type MobilePhoneAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    ram?: SortOrder
    storage?: SortOrder
    screen_size?: SortOrder
  }

  export type MobilePhoneMaxOrderByAggregateInput = {
    id?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    price?: SortOrder
    ram?: SortOrder
    storage?: SortOrder
    processor?: SortOrder
    screen_size?: SortOrder
  }

  export type MobilePhoneMinOrderByAggregateInput = {
    id?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    price?: SortOrder
    ram?: SortOrder
    storage?: SortOrder
    processor?: SortOrder
    screen_size?: SortOrder
  }

  export type MobilePhoneSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    ram?: SortOrder
    storage?: SortOrder
    screen_size?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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