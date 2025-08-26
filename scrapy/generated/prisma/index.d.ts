
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Brand
 * 
 */
export type Brand = $Result.DefaultSelection<Prisma.$BrandPayload>
/**
 * Model MainCategory
 * 
 */
export type MainCategory = $Result.DefaultSelection<Prisma.$MainCategoryPayload>
/**
 * Model SubCategory
 * 
 */
export type SubCategory = $Result.DefaultSelection<Prisma.$SubCategoryPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model ProductColor
 * 
 */
export type ProductColor = $Result.DefaultSelection<Prisma.$ProductColorPayload>
/**
 * Model ProductSize
 * 
 */
export type ProductSize = $Result.DefaultSelection<Prisma.$ProductSizePayload>
/**
 * Model ProductImage
 * 
 */
export type ProductImage = $Result.DefaultSelection<Prisma.$ProductImagePayload>
/**
 * Model ProductStock
 * 
 */
export type ProductStock = $Result.DefaultSelection<Prisma.$ProductStockPayload>
/**
 * Model DataSync
 * 
 */
export type DataSync = $Result.DefaultSelection<Prisma.$DataSyncPayload>
/**
 * Model PriceHistory
 * 
 */
export type PriceHistory = $Result.DefaultSelection<Prisma.$PriceHistoryPayload>
/**
 * Model StockHistory
 * 
 */
export type StockHistory = $Result.DefaultSelection<Prisma.$StockHistoryPayload>
/**
 * Model CategoryHistory
 * 
 */
export type CategoryHistory = $Result.DefaultSelection<Prisma.$CategoryHistoryPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.brand`: Exposes CRUD operations for the **Brand** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Brands
    * const brands = await prisma.brand.findMany()
    * ```
    */
  get brand(): Prisma.BrandDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mainCategory`: Exposes CRUD operations for the **MainCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MainCategories
    * const mainCategories = await prisma.mainCategory.findMany()
    * ```
    */
  get mainCategory(): Prisma.MainCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subCategory`: Exposes CRUD operations for the **SubCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubCategories
    * const subCategories = await prisma.subCategory.findMany()
    * ```
    */
  get subCategory(): Prisma.SubCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productColor`: Exposes CRUD operations for the **ProductColor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductColors
    * const productColors = await prisma.productColor.findMany()
    * ```
    */
  get productColor(): Prisma.ProductColorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productSize`: Exposes CRUD operations for the **ProductSize** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductSizes
    * const productSizes = await prisma.productSize.findMany()
    * ```
    */
  get productSize(): Prisma.ProductSizeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productImage`: Exposes CRUD operations for the **ProductImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductImages
    * const productImages = await prisma.productImage.findMany()
    * ```
    */
  get productImage(): Prisma.ProductImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productStock`: Exposes CRUD operations for the **ProductStock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductStocks
    * const productStocks = await prisma.productStock.findMany()
    * ```
    */
  get productStock(): Prisma.ProductStockDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dataSync`: Exposes CRUD operations for the **DataSync** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DataSyncs
    * const dataSyncs = await prisma.dataSync.findMany()
    * ```
    */
  get dataSync(): Prisma.DataSyncDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.priceHistory`: Exposes CRUD operations for the **PriceHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PriceHistories
    * const priceHistories = await prisma.priceHistory.findMany()
    * ```
    */
  get priceHistory(): Prisma.PriceHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stockHistory`: Exposes CRUD operations for the **StockHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StockHistories
    * const stockHistories = await prisma.stockHistory.findMany()
    * ```
    */
  get stockHistory(): Prisma.StockHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoryHistory`: Exposes CRUD operations for the **CategoryHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CategoryHistories
    * const categoryHistories = await prisma.categoryHistory.findMany()
    * ```
    */
  get categoryHistory(): Prisma.CategoryHistoryDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
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
    User: 'User',
    Brand: 'Brand',
    MainCategory: 'MainCategory',
    SubCategory: 'SubCategory',
    Product: 'Product',
    ProductColor: 'ProductColor',
    ProductSize: 'ProductSize',
    ProductImage: 'ProductImage',
    ProductStock: 'ProductStock',
    DataSync: 'DataSync',
    PriceHistory: 'PriceHistory',
    StockHistory: 'StockHistory',
    CategoryHistory: 'CategoryHistory'
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
      modelProps: "user" | "brand" | "mainCategory" | "subCategory" | "product" | "productColor" | "productSize" | "productImage" | "productStock" | "dataSync" | "priceHistory" | "stockHistory" | "categoryHistory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Brand: {
        payload: Prisma.$BrandPayload<ExtArgs>
        fields: Prisma.BrandFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BrandFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BrandFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          findFirst: {
            args: Prisma.BrandFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BrandFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          findMany: {
            args: Prisma.BrandFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>[]
          }
          create: {
            args: Prisma.BrandCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          createMany: {
            args: Prisma.BrandCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BrandDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          update: {
            args: Prisma.BrandUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          deleteMany: {
            args: Prisma.BrandDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BrandUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BrandUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          aggregate: {
            args: Prisma.BrandAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBrand>
          }
          groupBy: {
            args: Prisma.BrandGroupByArgs<ExtArgs>
            result: $Utils.Optional<BrandGroupByOutputType>[]
          }
          count: {
            args: Prisma.BrandCountArgs<ExtArgs>
            result: $Utils.Optional<BrandCountAggregateOutputType> | number
          }
        }
      }
      MainCategory: {
        payload: Prisma.$MainCategoryPayload<ExtArgs>
        fields: Prisma.MainCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MainCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MainCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainCategoryPayload>
          }
          findFirst: {
            args: Prisma.MainCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MainCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainCategoryPayload>
          }
          findMany: {
            args: Prisma.MainCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainCategoryPayload>[]
          }
          create: {
            args: Prisma.MainCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainCategoryPayload>
          }
          createMany: {
            args: Prisma.MainCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MainCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainCategoryPayload>
          }
          update: {
            args: Prisma.MainCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainCategoryPayload>
          }
          deleteMany: {
            args: Prisma.MainCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MainCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MainCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainCategoryPayload>
          }
          aggregate: {
            args: Prisma.MainCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMainCategory>
          }
          groupBy: {
            args: Prisma.MainCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<MainCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.MainCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<MainCategoryCountAggregateOutputType> | number
          }
        }
      }
      SubCategory: {
        payload: Prisma.$SubCategoryPayload<ExtArgs>
        fields: Prisma.SubCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>
          }
          findFirst: {
            args: Prisma.SubCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>
          }
          findMany: {
            args: Prisma.SubCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>[]
          }
          create: {
            args: Prisma.SubCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>
          }
          createMany: {
            args: Prisma.SubCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SubCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>
          }
          update: {
            args: Prisma.SubCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>
          }
          deleteMany: {
            args: Prisma.SubCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>
          }
          aggregate: {
            args: Prisma.SubCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubCategory>
          }
          groupBy: {
            args: Prisma.SubCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<SubCategoryCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      ProductColor: {
        payload: Prisma.$ProductColorPayload<ExtArgs>
        fields: Prisma.ProductColorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductColorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductColorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductColorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductColorPayload>
          }
          findFirst: {
            args: Prisma.ProductColorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductColorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductColorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductColorPayload>
          }
          findMany: {
            args: Prisma.ProductColorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductColorPayload>[]
          }
          create: {
            args: Prisma.ProductColorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductColorPayload>
          }
          createMany: {
            args: Prisma.ProductColorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductColorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductColorPayload>
          }
          update: {
            args: Prisma.ProductColorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductColorPayload>
          }
          deleteMany: {
            args: Prisma.ProductColorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductColorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductColorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductColorPayload>
          }
          aggregate: {
            args: Prisma.ProductColorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductColor>
          }
          groupBy: {
            args: Prisma.ProductColorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductColorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductColorCountArgs<ExtArgs>
            result: $Utils.Optional<ProductColorCountAggregateOutputType> | number
          }
        }
      }
      ProductSize: {
        payload: Prisma.$ProductSizePayload<ExtArgs>
        fields: Prisma.ProductSizeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductSizeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSizePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductSizeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSizePayload>
          }
          findFirst: {
            args: Prisma.ProductSizeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSizePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductSizeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSizePayload>
          }
          findMany: {
            args: Prisma.ProductSizeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSizePayload>[]
          }
          create: {
            args: Prisma.ProductSizeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSizePayload>
          }
          createMany: {
            args: Prisma.ProductSizeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductSizeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSizePayload>
          }
          update: {
            args: Prisma.ProductSizeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSizePayload>
          }
          deleteMany: {
            args: Prisma.ProductSizeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductSizeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductSizeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSizePayload>
          }
          aggregate: {
            args: Prisma.ProductSizeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductSize>
          }
          groupBy: {
            args: Prisma.ProductSizeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductSizeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductSizeCountArgs<ExtArgs>
            result: $Utils.Optional<ProductSizeCountAggregateOutputType> | number
          }
        }
      }
      ProductImage: {
        payload: Prisma.$ProductImagePayload<ExtArgs>
        fields: Prisma.ProductImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          findFirst: {
            args: Prisma.ProductImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          findMany: {
            args: Prisma.ProductImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>[]
          }
          create: {
            args: Prisma.ProductImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          createMany: {
            args: Prisma.ProductImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          update: {
            args: Prisma.ProductImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          deleteMany: {
            args: Prisma.ProductImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          aggregate: {
            args: Prisma.ProductImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductImage>
          }
          groupBy: {
            args: Prisma.ProductImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductImageCountArgs<ExtArgs>
            result: $Utils.Optional<ProductImageCountAggregateOutputType> | number
          }
        }
      }
      ProductStock: {
        payload: Prisma.$ProductStockPayload<ExtArgs>
        fields: Prisma.ProductStockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductStockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductStockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductStockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductStockPayload>
          }
          findFirst: {
            args: Prisma.ProductStockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductStockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductStockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductStockPayload>
          }
          findMany: {
            args: Prisma.ProductStockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductStockPayload>[]
          }
          create: {
            args: Prisma.ProductStockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductStockPayload>
          }
          createMany: {
            args: Prisma.ProductStockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductStockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductStockPayload>
          }
          update: {
            args: Prisma.ProductStockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductStockPayload>
          }
          deleteMany: {
            args: Prisma.ProductStockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductStockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductStockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductStockPayload>
          }
          aggregate: {
            args: Prisma.ProductStockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductStock>
          }
          groupBy: {
            args: Prisma.ProductStockGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductStockGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductStockCountArgs<ExtArgs>
            result: $Utils.Optional<ProductStockCountAggregateOutputType> | number
          }
        }
      }
      DataSync: {
        payload: Prisma.$DataSyncPayload<ExtArgs>
        fields: Prisma.DataSyncFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DataSyncFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataSyncPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DataSyncFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataSyncPayload>
          }
          findFirst: {
            args: Prisma.DataSyncFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataSyncPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DataSyncFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataSyncPayload>
          }
          findMany: {
            args: Prisma.DataSyncFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataSyncPayload>[]
          }
          create: {
            args: Prisma.DataSyncCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataSyncPayload>
          }
          createMany: {
            args: Prisma.DataSyncCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DataSyncDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataSyncPayload>
          }
          update: {
            args: Prisma.DataSyncUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataSyncPayload>
          }
          deleteMany: {
            args: Prisma.DataSyncDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DataSyncUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DataSyncUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataSyncPayload>
          }
          aggregate: {
            args: Prisma.DataSyncAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDataSync>
          }
          groupBy: {
            args: Prisma.DataSyncGroupByArgs<ExtArgs>
            result: $Utils.Optional<DataSyncGroupByOutputType>[]
          }
          count: {
            args: Prisma.DataSyncCountArgs<ExtArgs>
            result: $Utils.Optional<DataSyncCountAggregateOutputType> | number
          }
        }
      }
      PriceHistory: {
        payload: Prisma.$PriceHistoryPayload<ExtArgs>
        fields: Prisma.PriceHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PriceHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PriceHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload>
          }
          findFirst: {
            args: Prisma.PriceHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PriceHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload>
          }
          findMany: {
            args: Prisma.PriceHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload>[]
          }
          create: {
            args: Prisma.PriceHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload>
          }
          createMany: {
            args: Prisma.PriceHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PriceHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload>
          }
          update: {
            args: Prisma.PriceHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload>
          }
          deleteMany: {
            args: Prisma.PriceHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PriceHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PriceHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload>
          }
          aggregate: {
            args: Prisma.PriceHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePriceHistory>
          }
          groupBy: {
            args: Prisma.PriceHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<PriceHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.PriceHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<PriceHistoryCountAggregateOutputType> | number
          }
        }
      }
      StockHistory: {
        payload: Prisma.$StockHistoryPayload<ExtArgs>
        fields: Prisma.StockHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StockHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StockHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockHistoryPayload>
          }
          findFirst: {
            args: Prisma.StockHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StockHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockHistoryPayload>
          }
          findMany: {
            args: Prisma.StockHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockHistoryPayload>[]
          }
          create: {
            args: Prisma.StockHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockHistoryPayload>
          }
          createMany: {
            args: Prisma.StockHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StockHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockHistoryPayload>
          }
          update: {
            args: Prisma.StockHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockHistoryPayload>
          }
          deleteMany: {
            args: Prisma.StockHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StockHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StockHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockHistoryPayload>
          }
          aggregate: {
            args: Prisma.StockHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStockHistory>
          }
          groupBy: {
            args: Prisma.StockHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<StockHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.StockHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<StockHistoryCountAggregateOutputType> | number
          }
        }
      }
      CategoryHistory: {
        payload: Prisma.$CategoryHistoryPayload<ExtArgs>
        fields: Prisma.CategoryHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryHistoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryHistoryPayload>
          }
          findMany: {
            args: Prisma.CategoryHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryHistoryPayload>[]
          }
          create: {
            args: Prisma.CategoryHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryHistoryPayload>
          }
          createMany: {
            args: Prisma.CategoryHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoryHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryHistoryPayload>
          }
          update: {
            args: Prisma.CategoryHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryHistoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoryHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryHistoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoryHistory>
          }
          groupBy: {
            args: Prisma.CategoryHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryHistoryCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    user?: UserOmit
    brand?: BrandOmit
    mainCategory?: MainCategoryOmit
    subCategory?: SubCategoryOmit
    product?: ProductOmit
    productColor?: ProductColorOmit
    productSize?: ProductSizeOmit
    productImage?: ProductImageOmit
    productStock?: ProductStockOmit
    dataSync?: DataSyncOmit
    priceHistory?: PriceHistoryOmit
    stockHistory?: StockHistoryOmit
    categoryHistory?: CategoryHistoryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type BrandCountOutputType
   */

  export type BrandCountOutputType = {
    mainCategories: number
    products: number
  }

  export type BrandCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mainCategories?: boolean | BrandCountOutputTypeCountMainCategoriesArgs
    products?: boolean | BrandCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * BrandCountOutputType without action
   */
  export type BrandCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandCountOutputType
     */
    select?: BrandCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BrandCountOutputType without action
   */
  export type BrandCountOutputTypeCountMainCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MainCategoryWhereInput
  }

  /**
   * BrandCountOutputType without action
   */
  export type BrandCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type MainCategoryCountOutputType
   */

  export type MainCategoryCountOutputType = {
    subcategories: number
  }

  export type MainCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subcategories?: boolean | MainCategoryCountOutputTypeCountSubcategoriesArgs
  }

  // Custom InputTypes
  /**
   * MainCategoryCountOutputType without action
   */
  export type MainCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainCategoryCountOutputType
     */
    select?: MainCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MainCategoryCountOutputType without action
   */
  export type MainCategoryCountOutputTypeCountSubcategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubCategoryWhereInput
  }


  /**
   * Count Type SubCategoryCountOutputType
   */

  export type SubCategoryCountOutputType = {
    subcategories: number
    products: number
    history: number
  }

  export type SubCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subcategories?: boolean | SubCategoryCountOutputTypeCountSubcategoriesArgs
    products?: boolean | SubCategoryCountOutputTypeCountProductsArgs
    history?: boolean | SubCategoryCountOutputTypeCountHistoryArgs
  }

  // Custom InputTypes
  /**
   * SubCategoryCountOutputType without action
   */
  export type SubCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategoryCountOutputType
     */
    select?: SubCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubCategoryCountOutputType without action
   */
  export type SubCategoryCountOutputTypeCountSubcategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubCategoryWhereInput
  }

  /**
   * SubCategoryCountOutputType without action
   */
  export type SubCategoryCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }

  /**
   * SubCategoryCountOutputType without action
   */
  export type SubCategoryCountOutputTypeCountHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryHistoryWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    colors: number
    images: number
    sizes: number
    stock: number
    subCategories: number
    priceHistory: number
    stockHistory: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    colors?: boolean | ProductCountOutputTypeCountColorsArgs
    images?: boolean | ProductCountOutputTypeCountImagesArgs
    sizes?: boolean | ProductCountOutputTypeCountSizesArgs
    stock?: boolean | ProductCountOutputTypeCountStockArgs
    subCategories?: boolean | ProductCountOutputTypeCountSubCategoriesArgs
    priceHistory?: boolean | ProductCountOutputTypeCountPriceHistoryArgs
    stockHistory?: boolean | ProductCountOutputTypeCountStockHistoryArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountColorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductColorWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductImageWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountSizesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductSizeWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountStockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductStockWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountSubCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubCategoryWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountPriceHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriceHistoryWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountStockHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockHistoryWhereInput
  }


  /**
   * Count Type ProductColorCountOutputType
   */

  export type ProductColorCountOutputType = {
    images: number
    sizes: number
    stock: number
    priceHistory: number
    stockHistory: number
  }

  export type ProductColorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | ProductColorCountOutputTypeCountImagesArgs
    sizes?: boolean | ProductColorCountOutputTypeCountSizesArgs
    stock?: boolean | ProductColorCountOutputTypeCountStockArgs
    priceHistory?: boolean | ProductColorCountOutputTypeCountPriceHistoryArgs
    stockHistory?: boolean | ProductColorCountOutputTypeCountStockHistoryArgs
  }

  // Custom InputTypes
  /**
   * ProductColorCountOutputType without action
   */
  export type ProductColorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductColorCountOutputType
     */
    select?: ProductColorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductColorCountOutputType without action
   */
  export type ProductColorCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductImageWhereInput
  }

  /**
   * ProductColorCountOutputType without action
   */
  export type ProductColorCountOutputTypeCountSizesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductSizeWhereInput
  }

  /**
   * ProductColorCountOutputType without action
   */
  export type ProductColorCountOutputTypeCountStockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductStockWhereInput
  }

  /**
   * ProductColorCountOutputType without action
   */
  export type ProductColorCountOutputTypeCountPriceHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriceHistoryWhereInput
  }

  /**
   * ProductColorCountOutputType without action
   */
  export type ProductColorCountOutputTypeCountStockHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockHistoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    passwordHash: string | null
    name: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    passwordHash: string | null
    name: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    name: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    passwordHash: string
    name: string | null
    role: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "name" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      passwordHash: string
      name: string | null
      role: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Brand
   */

  export type AggregateBrand = {
    _count: BrandCountAggregateOutputType | null
    _min: BrandMinAggregateOutputType | null
    _max: BrandMaxAggregateOutputType | null
  }

  export type BrandMinAggregateOutputType = {
    id: string | null
    name: string | null
    timestamp: Date | null
  }

  export type BrandMaxAggregateOutputType = {
    id: string | null
    name: string | null
    timestamp: Date | null
  }

  export type BrandCountAggregateOutputType = {
    id: number
    name: number
    timestamp: number
    _all: number
  }


  export type BrandMinAggregateInputType = {
    id?: true
    name?: true
    timestamp?: true
  }

  export type BrandMaxAggregateInputType = {
    id?: true
    name?: true
    timestamp?: true
  }

  export type BrandCountAggregateInputType = {
    id?: true
    name?: true
    timestamp?: true
    _all?: true
  }

  export type BrandAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brand to aggregate.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Brands
    **/
    _count?: true | BrandCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BrandMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BrandMaxAggregateInputType
  }

  export type GetBrandAggregateType<T extends BrandAggregateArgs> = {
        [P in keyof T & keyof AggregateBrand]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBrand[P]>
      : GetScalarType<T[P], AggregateBrand[P]>
  }




  export type BrandGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrandWhereInput
    orderBy?: BrandOrderByWithAggregationInput | BrandOrderByWithAggregationInput[]
    by: BrandScalarFieldEnum[] | BrandScalarFieldEnum
    having?: BrandScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BrandCountAggregateInputType | true
    _min?: BrandMinAggregateInputType
    _max?: BrandMaxAggregateInputType
  }

  export type BrandGroupByOutputType = {
    id: string
    name: string
    timestamp: Date
    _count: BrandCountAggregateOutputType | null
    _min: BrandMinAggregateOutputType | null
    _max: BrandMaxAggregateOutputType | null
  }

  type GetBrandGroupByPayload<T extends BrandGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BrandGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BrandGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BrandGroupByOutputType[P]>
            : GetScalarType<T[P], BrandGroupByOutputType[P]>
        }
      >
    >


  export type BrandSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    timestamp?: boolean
    mainCategories?: boolean | Brand$mainCategoriesArgs<ExtArgs>
    products?: boolean | Brand$productsArgs<ExtArgs>
    _count?: boolean | BrandCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brand"]>



  export type BrandSelectScalar = {
    id?: boolean
    name?: boolean
    timestamp?: boolean
  }

  export type BrandOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "timestamp", ExtArgs["result"]["brand"]>
  export type BrandInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mainCategories?: boolean | Brand$mainCategoriesArgs<ExtArgs>
    products?: boolean | Brand$productsArgs<ExtArgs>
    _count?: boolean | BrandCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BrandPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Brand"
    objects: {
      mainCategories: Prisma.$MainCategoryPayload<ExtArgs>[]
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      timestamp: Date
    }, ExtArgs["result"]["brand"]>
    composites: {}
  }

  type BrandGetPayload<S extends boolean | null | undefined | BrandDefaultArgs> = $Result.GetResult<Prisma.$BrandPayload, S>

  type BrandCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BrandFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BrandCountAggregateInputType | true
    }

  export interface BrandDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Brand'], meta: { name: 'Brand' } }
    /**
     * Find zero or one Brand that matches the filter.
     * @param {BrandFindUniqueArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BrandFindUniqueArgs>(args: SelectSubset<T, BrandFindUniqueArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Brand that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BrandFindUniqueOrThrowArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BrandFindUniqueOrThrowArgs>(args: SelectSubset<T, BrandFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Brand that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindFirstArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BrandFindFirstArgs>(args?: SelectSubset<T, BrandFindFirstArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Brand that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindFirstOrThrowArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BrandFindFirstOrThrowArgs>(args?: SelectSubset<T, BrandFindFirstOrThrowArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Brands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Brands
     * const brands = await prisma.brand.findMany()
     * 
     * // Get first 10 Brands
     * const brands = await prisma.brand.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const brandWithIdOnly = await prisma.brand.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BrandFindManyArgs>(args?: SelectSubset<T, BrandFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Brand.
     * @param {BrandCreateArgs} args - Arguments to create a Brand.
     * @example
     * // Create one Brand
     * const Brand = await prisma.brand.create({
     *   data: {
     *     // ... data to create a Brand
     *   }
     * })
     * 
     */
    create<T extends BrandCreateArgs>(args: SelectSubset<T, BrandCreateArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Brands.
     * @param {BrandCreateManyArgs} args - Arguments to create many Brands.
     * @example
     * // Create many Brands
     * const brand = await prisma.brand.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BrandCreateManyArgs>(args?: SelectSubset<T, BrandCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Brand.
     * @param {BrandDeleteArgs} args - Arguments to delete one Brand.
     * @example
     * // Delete one Brand
     * const Brand = await prisma.brand.delete({
     *   where: {
     *     // ... filter to delete one Brand
     *   }
     * })
     * 
     */
    delete<T extends BrandDeleteArgs>(args: SelectSubset<T, BrandDeleteArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Brand.
     * @param {BrandUpdateArgs} args - Arguments to update one Brand.
     * @example
     * // Update one Brand
     * const brand = await prisma.brand.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BrandUpdateArgs>(args: SelectSubset<T, BrandUpdateArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Brands.
     * @param {BrandDeleteManyArgs} args - Arguments to filter Brands to delete.
     * @example
     * // Delete a few Brands
     * const { count } = await prisma.brand.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BrandDeleteManyArgs>(args?: SelectSubset<T, BrandDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Brands
     * const brand = await prisma.brand.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BrandUpdateManyArgs>(args: SelectSubset<T, BrandUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Brand.
     * @param {BrandUpsertArgs} args - Arguments to update or create a Brand.
     * @example
     * // Update or create a Brand
     * const brand = await prisma.brand.upsert({
     *   create: {
     *     // ... data to create a Brand
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Brand we want to update
     *   }
     * })
     */
    upsert<T extends BrandUpsertArgs>(args: SelectSubset<T, BrandUpsertArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandCountArgs} args - Arguments to filter Brands to count.
     * @example
     * // Count the number of Brands
     * const count = await prisma.brand.count({
     *   where: {
     *     // ... the filter for the Brands we want to count
     *   }
     * })
    **/
    count<T extends BrandCountArgs>(
      args?: Subset<T, BrandCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BrandCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Brand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BrandAggregateArgs>(args: Subset<T, BrandAggregateArgs>): Prisma.PrismaPromise<GetBrandAggregateType<T>>

    /**
     * Group by Brand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandGroupByArgs} args - Group by arguments.
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
      T extends BrandGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BrandGroupByArgs['orderBy'] }
        : { orderBy?: BrandGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BrandGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBrandGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Brand model
   */
  readonly fields: BrandFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Brand.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BrandClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mainCategories<T extends Brand$mainCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, Brand$mainCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MainCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    products<T extends Brand$productsArgs<ExtArgs> = {}>(args?: Subset<T, Brand$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Brand model
   */
  interface BrandFieldRefs {
    readonly id: FieldRef<"Brand", 'String'>
    readonly name: FieldRef<"Brand", 'String'>
    readonly timestamp: FieldRef<"Brand", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Brand findUnique
   */
  export type BrandFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand findUniqueOrThrow
   */
  export type BrandFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand findFirst
   */
  export type BrandFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brands.
     */
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }

  /**
   * Brand findFirstOrThrow
   */
  export type BrandFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brands.
     */
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }

  /**
   * Brand findMany
   */
  export type BrandFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brands to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }

  /**
   * Brand create
   */
  export type BrandCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The data needed to create a Brand.
     */
    data: XOR<BrandCreateInput, BrandUncheckedCreateInput>
  }

  /**
   * Brand createMany
   */
  export type BrandCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Brands.
     */
    data: BrandCreateManyInput | BrandCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Brand update
   */
  export type BrandUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The data needed to update a Brand.
     */
    data: XOR<BrandUpdateInput, BrandUncheckedUpdateInput>
    /**
     * Choose, which Brand to update.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand updateMany
   */
  export type BrandUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Brands.
     */
    data: XOR<BrandUpdateManyMutationInput, BrandUncheckedUpdateManyInput>
    /**
     * Filter which Brands to update
     */
    where?: BrandWhereInput
    /**
     * Limit how many Brands to update.
     */
    limit?: number
  }

  /**
   * Brand upsert
   */
  export type BrandUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The filter to search for the Brand to update in case it exists.
     */
    where: BrandWhereUniqueInput
    /**
     * In case the Brand found by the `where` argument doesn't exist, create a new Brand with this data.
     */
    create: XOR<BrandCreateInput, BrandUncheckedCreateInput>
    /**
     * In case the Brand was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BrandUpdateInput, BrandUncheckedUpdateInput>
  }

  /**
   * Brand delete
   */
  export type BrandDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter which Brand to delete.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand deleteMany
   */
  export type BrandDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brands to delete
     */
    where?: BrandWhereInput
    /**
     * Limit how many Brands to delete.
     */
    limit?: number
  }

  /**
   * Brand.mainCategories
   */
  export type Brand$mainCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainCategory
     */
    select?: MainCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MainCategory
     */
    omit?: MainCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainCategoryInclude<ExtArgs> | null
    where?: MainCategoryWhereInput
    orderBy?: MainCategoryOrderByWithRelationInput | MainCategoryOrderByWithRelationInput[]
    cursor?: MainCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MainCategoryScalarFieldEnum | MainCategoryScalarFieldEnum[]
  }

  /**
   * Brand.products
   */
  export type Brand$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Brand without action
   */
  export type BrandDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
  }


  /**
   * Model MainCategory
   */

  export type AggregateMainCategory = {
    _count: MainCategoryCountAggregateOutputType | null
    _avg: MainCategoryAvgAggregateOutputType | null
    _sum: MainCategorySumAggregateOutputType | null
    _min: MainCategoryMinAggregateOutputType | null
    _max: MainCategoryMaxAggregateOutputType | null
  }

  export type MainCategoryAvgAggregateOutputType = {
    id: number | null
    level: number | null
  }

  export type MainCategorySumAggregateOutputType = {
    id: number | null
    level: number | null
  }

  export type MainCategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    brandId: string | null
    gender: string | null
    level: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MainCategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    brandId: string | null
    gender: string | null
    level: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MainCategoryCountAggregateOutputType = {
    id: number
    name: number
    brandId: number
    gender: number
    level: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MainCategoryAvgAggregateInputType = {
    id?: true
    level?: true
  }

  export type MainCategorySumAggregateInputType = {
    id?: true
    level?: true
  }

  export type MainCategoryMinAggregateInputType = {
    id?: true
    name?: true
    brandId?: true
    gender?: true
    level?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MainCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    brandId?: true
    gender?: true
    level?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MainCategoryCountAggregateInputType = {
    id?: true
    name?: true
    brandId?: true
    gender?: true
    level?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MainCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MainCategory to aggregate.
     */
    where?: MainCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MainCategories to fetch.
     */
    orderBy?: MainCategoryOrderByWithRelationInput | MainCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MainCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MainCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MainCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MainCategories
    **/
    _count?: true | MainCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MainCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MainCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MainCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MainCategoryMaxAggregateInputType
  }

  export type GetMainCategoryAggregateType<T extends MainCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateMainCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMainCategory[P]>
      : GetScalarType<T[P], AggregateMainCategory[P]>
  }




  export type MainCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MainCategoryWhereInput
    orderBy?: MainCategoryOrderByWithAggregationInput | MainCategoryOrderByWithAggregationInput[]
    by: MainCategoryScalarFieldEnum[] | MainCategoryScalarFieldEnum
    having?: MainCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MainCategoryCountAggregateInputType | true
    _avg?: MainCategoryAvgAggregateInputType
    _sum?: MainCategorySumAggregateInputType
    _min?: MainCategoryMinAggregateInputType
    _max?: MainCategoryMaxAggregateInputType
  }

  export type MainCategoryGroupByOutputType = {
    id: number
    name: string
    brandId: string
    gender: string
    level: number
    createdAt: Date
    updatedAt: Date
    _count: MainCategoryCountAggregateOutputType | null
    _avg: MainCategoryAvgAggregateOutputType | null
    _sum: MainCategorySumAggregateOutputType | null
    _min: MainCategoryMinAggregateOutputType | null
    _max: MainCategoryMaxAggregateOutputType | null
  }

  type GetMainCategoryGroupByPayload<T extends MainCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MainCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MainCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MainCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], MainCategoryGroupByOutputType[P]>
        }
      >
    >


  export type MainCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    brandId?: boolean
    gender?: boolean
    level?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    brand?: boolean | BrandDefaultArgs<ExtArgs>
    subcategories?: boolean | MainCategory$subcategoriesArgs<ExtArgs>
    _count?: boolean | MainCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mainCategory"]>



  export type MainCategorySelectScalar = {
    id?: boolean
    name?: boolean
    brandId?: boolean
    gender?: boolean
    level?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MainCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "brandId" | "gender" | "level" | "createdAt" | "updatedAt", ExtArgs["result"]["mainCategory"]>
  export type MainCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brand?: boolean | BrandDefaultArgs<ExtArgs>
    subcategories?: boolean | MainCategory$subcategoriesArgs<ExtArgs>
    _count?: boolean | MainCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MainCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MainCategory"
    objects: {
      brand: Prisma.$BrandPayload<ExtArgs>
      subcategories: Prisma.$SubCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      brandId: string
      gender: string
      level: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["mainCategory"]>
    composites: {}
  }

  type MainCategoryGetPayload<S extends boolean | null | undefined | MainCategoryDefaultArgs> = $Result.GetResult<Prisma.$MainCategoryPayload, S>

  type MainCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MainCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MainCategoryCountAggregateInputType | true
    }

  export interface MainCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MainCategory'], meta: { name: 'MainCategory' } }
    /**
     * Find zero or one MainCategory that matches the filter.
     * @param {MainCategoryFindUniqueArgs} args - Arguments to find a MainCategory
     * @example
     * // Get one MainCategory
     * const mainCategory = await prisma.mainCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MainCategoryFindUniqueArgs>(args: SelectSubset<T, MainCategoryFindUniqueArgs<ExtArgs>>): Prisma__MainCategoryClient<$Result.GetResult<Prisma.$MainCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MainCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MainCategoryFindUniqueOrThrowArgs} args - Arguments to find a MainCategory
     * @example
     * // Get one MainCategory
     * const mainCategory = await prisma.mainCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MainCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, MainCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MainCategoryClient<$Result.GetResult<Prisma.$MainCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MainCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MainCategoryFindFirstArgs} args - Arguments to find a MainCategory
     * @example
     * // Get one MainCategory
     * const mainCategory = await prisma.mainCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MainCategoryFindFirstArgs>(args?: SelectSubset<T, MainCategoryFindFirstArgs<ExtArgs>>): Prisma__MainCategoryClient<$Result.GetResult<Prisma.$MainCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MainCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MainCategoryFindFirstOrThrowArgs} args - Arguments to find a MainCategory
     * @example
     * // Get one MainCategory
     * const mainCategory = await prisma.mainCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MainCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, MainCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__MainCategoryClient<$Result.GetResult<Prisma.$MainCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MainCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MainCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MainCategories
     * const mainCategories = await prisma.mainCategory.findMany()
     * 
     * // Get first 10 MainCategories
     * const mainCategories = await prisma.mainCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mainCategoryWithIdOnly = await prisma.mainCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MainCategoryFindManyArgs>(args?: SelectSubset<T, MainCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MainCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MainCategory.
     * @param {MainCategoryCreateArgs} args - Arguments to create a MainCategory.
     * @example
     * // Create one MainCategory
     * const MainCategory = await prisma.mainCategory.create({
     *   data: {
     *     // ... data to create a MainCategory
     *   }
     * })
     * 
     */
    create<T extends MainCategoryCreateArgs>(args: SelectSubset<T, MainCategoryCreateArgs<ExtArgs>>): Prisma__MainCategoryClient<$Result.GetResult<Prisma.$MainCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MainCategories.
     * @param {MainCategoryCreateManyArgs} args - Arguments to create many MainCategories.
     * @example
     * // Create many MainCategories
     * const mainCategory = await prisma.mainCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MainCategoryCreateManyArgs>(args?: SelectSubset<T, MainCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MainCategory.
     * @param {MainCategoryDeleteArgs} args - Arguments to delete one MainCategory.
     * @example
     * // Delete one MainCategory
     * const MainCategory = await prisma.mainCategory.delete({
     *   where: {
     *     // ... filter to delete one MainCategory
     *   }
     * })
     * 
     */
    delete<T extends MainCategoryDeleteArgs>(args: SelectSubset<T, MainCategoryDeleteArgs<ExtArgs>>): Prisma__MainCategoryClient<$Result.GetResult<Prisma.$MainCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MainCategory.
     * @param {MainCategoryUpdateArgs} args - Arguments to update one MainCategory.
     * @example
     * // Update one MainCategory
     * const mainCategory = await prisma.mainCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MainCategoryUpdateArgs>(args: SelectSubset<T, MainCategoryUpdateArgs<ExtArgs>>): Prisma__MainCategoryClient<$Result.GetResult<Prisma.$MainCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MainCategories.
     * @param {MainCategoryDeleteManyArgs} args - Arguments to filter MainCategories to delete.
     * @example
     * // Delete a few MainCategories
     * const { count } = await prisma.mainCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MainCategoryDeleteManyArgs>(args?: SelectSubset<T, MainCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MainCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MainCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MainCategories
     * const mainCategory = await prisma.mainCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MainCategoryUpdateManyArgs>(args: SelectSubset<T, MainCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MainCategory.
     * @param {MainCategoryUpsertArgs} args - Arguments to update or create a MainCategory.
     * @example
     * // Update or create a MainCategory
     * const mainCategory = await prisma.mainCategory.upsert({
     *   create: {
     *     // ... data to create a MainCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MainCategory we want to update
     *   }
     * })
     */
    upsert<T extends MainCategoryUpsertArgs>(args: SelectSubset<T, MainCategoryUpsertArgs<ExtArgs>>): Prisma__MainCategoryClient<$Result.GetResult<Prisma.$MainCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MainCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MainCategoryCountArgs} args - Arguments to filter MainCategories to count.
     * @example
     * // Count the number of MainCategories
     * const count = await prisma.mainCategory.count({
     *   where: {
     *     // ... the filter for the MainCategories we want to count
     *   }
     * })
    **/
    count<T extends MainCategoryCountArgs>(
      args?: Subset<T, MainCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MainCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MainCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MainCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MainCategoryAggregateArgs>(args: Subset<T, MainCategoryAggregateArgs>): Prisma.PrismaPromise<GetMainCategoryAggregateType<T>>

    /**
     * Group by MainCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MainCategoryGroupByArgs} args - Group by arguments.
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
      T extends MainCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MainCategoryGroupByArgs['orderBy'] }
        : { orderBy?: MainCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MainCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMainCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MainCategory model
   */
  readonly fields: MainCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MainCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MainCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    brand<T extends BrandDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BrandDefaultArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subcategories<T extends MainCategory$subcategoriesArgs<ExtArgs> = {}>(args?: Subset<T, MainCategory$subcategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the MainCategory model
   */
  interface MainCategoryFieldRefs {
    readonly id: FieldRef<"MainCategory", 'Int'>
    readonly name: FieldRef<"MainCategory", 'String'>
    readonly brandId: FieldRef<"MainCategory", 'String'>
    readonly gender: FieldRef<"MainCategory", 'String'>
    readonly level: FieldRef<"MainCategory", 'Int'>
    readonly createdAt: FieldRef<"MainCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"MainCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MainCategory findUnique
   */
  export type MainCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainCategory
     */
    select?: MainCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MainCategory
     */
    omit?: MainCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MainCategory to fetch.
     */
    where: MainCategoryWhereUniqueInput
  }

  /**
   * MainCategory findUniqueOrThrow
   */
  export type MainCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainCategory
     */
    select?: MainCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MainCategory
     */
    omit?: MainCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MainCategory to fetch.
     */
    where: MainCategoryWhereUniqueInput
  }

  /**
   * MainCategory findFirst
   */
  export type MainCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainCategory
     */
    select?: MainCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MainCategory
     */
    omit?: MainCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MainCategory to fetch.
     */
    where?: MainCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MainCategories to fetch.
     */
    orderBy?: MainCategoryOrderByWithRelationInput | MainCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MainCategories.
     */
    cursor?: MainCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MainCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MainCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MainCategories.
     */
    distinct?: MainCategoryScalarFieldEnum | MainCategoryScalarFieldEnum[]
  }

  /**
   * MainCategory findFirstOrThrow
   */
  export type MainCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainCategory
     */
    select?: MainCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MainCategory
     */
    omit?: MainCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MainCategory to fetch.
     */
    where?: MainCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MainCategories to fetch.
     */
    orderBy?: MainCategoryOrderByWithRelationInput | MainCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MainCategories.
     */
    cursor?: MainCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MainCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MainCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MainCategories.
     */
    distinct?: MainCategoryScalarFieldEnum | MainCategoryScalarFieldEnum[]
  }

  /**
   * MainCategory findMany
   */
  export type MainCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainCategory
     */
    select?: MainCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MainCategory
     */
    omit?: MainCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MainCategories to fetch.
     */
    where?: MainCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MainCategories to fetch.
     */
    orderBy?: MainCategoryOrderByWithRelationInput | MainCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MainCategories.
     */
    cursor?: MainCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MainCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MainCategories.
     */
    skip?: number
    distinct?: MainCategoryScalarFieldEnum | MainCategoryScalarFieldEnum[]
  }

  /**
   * MainCategory create
   */
  export type MainCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainCategory
     */
    select?: MainCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MainCategory
     */
    omit?: MainCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a MainCategory.
     */
    data: XOR<MainCategoryCreateInput, MainCategoryUncheckedCreateInput>
  }

  /**
   * MainCategory createMany
   */
  export type MainCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MainCategories.
     */
    data: MainCategoryCreateManyInput | MainCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MainCategory update
   */
  export type MainCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainCategory
     */
    select?: MainCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MainCategory
     */
    omit?: MainCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a MainCategory.
     */
    data: XOR<MainCategoryUpdateInput, MainCategoryUncheckedUpdateInput>
    /**
     * Choose, which MainCategory to update.
     */
    where: MainCategoryWhereUniqueInput
  }

  /**
   * MainCategory updateMany
   */
  export type MainCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MainCategories.
     */
    data: XOR<MainCategoryUpdateManyMutationInput, MainCategoryUncheckedUpdateManyInput>
    /**
     * Filter which MainCategories to update
     */
    where?: MainCategoryWhereInput
    /**
     * Limit how many MainCategories to update.
     */
    limit?: number
  }

  /**
   * MainCategory upsert
   */
  export type MainCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainCategory
     */
    select?: MainCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MainCategory
     */
    omit?: MainCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the MainCategory to update in case it exists.
     */
    where: MainCategoryWhereUniqueInput
    /**
     * In case the MainCategory found by the `where` argument doesn't exist, create a new MainCategory with this data.
     */
    create: XOR<MainCategoryCreateInput, MainCategoryUncheckedCreateInput>
    /**
     * In case the MainCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MainCategoryUpdateInput, MainCategoryUncheckedUpdateInput>
  }

  /**
   * MainCategory delete
   */
  export type MainCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainCategory
     */
    select?: MainCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MainCategory
     */
    omit?: MainCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainCategoryInclude<ExtArgs> | null
    /**
     * Filter which MainCategory to delete.
     */
    where: MainCategoryWhereUniqueInput
  }

  /**
   * MainCategory deleteMany
   */
  export type MainCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MainCategories to delete
     */
    where?: MainCategoryWhereInput
    /**
     * Limit how many MainCategories to delete.
     */
    limit?: number
  }

  /**
   * MainCategory.subcategories
   */
  export type MainCategory$subcategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    where?: SubCategoryWhereInput
    orderBy?: SubCategoryOrderByWithRelationInput | SubCategoryOrderByWithRelationInput[]
    cursor?: SubCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubCategoryScalarFieldEnum | SubCategoryScalarFieldEnum[]
  }

  /**
   * MainCategory without action
   */
  export type MainCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainCategory
     */
    select?: MainCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MainCategory
     */
    omit?: MainCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainCategoryInclude<ExtArgs> | null
  }


  /**
   * Model SubCategory
   */

  export type AggregateSubCategory = {
    _count: SubCategoryCountAggregateOutputType | null
    _avg: SubCategoryAvgAggregateOutputType | null
    _sum: SubCategorySumAggregateOutputType | null
    _min: SubCategoryMinAggregateOutputType | null
    _max: SubCategoryMaxAggregateOutputType | null
  }

  export type SubCategoryAvgAggregateOutputType = {
    categoryId: number | null
    level: number | null
    matchingId: number | null
    productCount: number | null
    parentCategoryId: number | null
    parentSubCategoryId: number | null
  }

  export type SubCategorySumAggregateOutputType = {
    categoryId: number | null
    level: number | null
    matchingId: number | null
    productCount: number | null
    parentCategoryId: number | null
    parentSubCategoryId: number | null
  }

  export type SubCategoryMinAggregateOutputType = {
    categoryId: number | null
    categoryName: string | null
    brand: string | null
    gender: string | null
    level: number | null
    isLeaf: boolean | null
    matchingId: number | null
    productCount: number | null
    parentCategoryId: number | null
    parentSubCategoryId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubCategoryMaxAggregateOutputType = {
    categoryId: number | null
    categoryName: string | null
    brand: string | null
    gender: string | null
    level: number | null
    isLeaf: boolean | null
    matchingId: number | null
    productCount: number | null
    parentCategoryId: number | null
    parentSubCategoryId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubCategoryCountAggregateOutputType = {
    categoryId: number
    categoryName: number
    brand: number
    gender: number
    level: number
    isLeaf: number
    matchingId: number
    productCount: number
    parentCategoryId: number
    parentSubCategoryId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubCategoryAvgAggregateInputType = {
    categoryId?: true
    level?: true
    matchingId?: true
    productCount?: true
    parentCategoryId?: true
    parentSubCategoryId?: true
  }

  export type SubCategorySumAggregateInputType = {
    categoryId?: true
    level?: true
    matchingId?: true
    productCount?: true
    parentCategoryId?: true
    parentSubCategoryId?: true
  }

  export type SubCategoryMinAggregateInputType = {
    categoryId?: true
    categoryName?: true
    brand?: true
    gender?: true
    level?: true
    isLeaf?: true
    matchingId?: true
    productCount?: true
    parentCategoryId?: true
    parentSubCategoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubCategoryMaxAggregateInputType = {
    categoryId?: true
    categoryName?: true
    brand?: true
    gender?: true
    level?: true
    isLeaf?: true
    matchingId?: true
    productCount?: true
    parentCategoryId?: true
    parentSubCategoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubCategoryCountAggregateInputType = {
    categoryId?: true
    categoryName?: true
    brand?: true
    gender?: true
    level?: true
    isLeaf?: true
    matchingId?: true
    productCount?: true
    parentCategoryId?: true
    parentSubCategoryId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubCategory to aggregate.
     */
    where?: SubCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubCategories to fetch.
     */
    orderBy?: SubCategoryOrderByWithRelationInput | SubCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubCategories
    **/
    _count?: true | SubCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubCategoryMaxAggregateInputType
  }

  export type GetSubCategoryAggregateType<T extends SubCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateSubCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubCategory[P]>
      : GetScalarType<T[P], AggregateSubCategory[P]>
  }




  export type SubCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubCategoryWhereInput
    orderBy?: SubCategoryOrderByWithAggregationInput | SubCategoryOrderByWithAggregationInput[]
    by: SubCategoryScalarFieldEnum[] | SubCategoryScalarFieldEnum
    having?: SubCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubCategoryCountAggregateInputType | true
    _avg?: SubCategoryAvgAggregateInputType
    _sum?: SubCategorySumAggregateInputType
    _min?: SubCategoryMinAggregateInputType
    _max?: SubCategoryMaxAggregateInputType
  }

  export type SubCategoryGroupByOutputType = {
    categoryId: number
    categoryName: string
    brand: string
    gender: string
    level: number
    isLeaf: boolean
    matchingId: number | null
    productCount: number | null
    parentCategoryId: number | null
    parentSubCategoryId: number | null
    createdAt: Date
    updatedAt: Date
    _count: SubCategoryCountAggregateOutputType | null
    _avg: SubCategoryAvgAggregateOutputType | null
    _sum: SubCategorySumAggregateOutputType | null
    _min: SubCategoryMinAggregateOutputType | null
    _max: SubCategoryMaxAggregateOutputType | null
  }

  type GetSubCategoryGroupByPayload<T extends SubCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], SubCategoryGroupByOutputType[P]>
        }
      >
    >


  export type SubCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    categoryId?: boolean
    categoryName?: boolean
    brand?: boolean
    gender?: boolean
    level?: boolean
    isLeaf?: boolean
    matchingId?: boolean
    productCount?: boolean
    parentCategoryId?: boolean
    parentSubCategoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parentCategory?: boolean | SubCategory$parentCategoryArgs<ExtArgs>
    parentSubCategory?: boolean | SubCategory$parentSubCategoryArgs<ExtArgs>
    subcategories?: boolean | SubCategory$subcategoriesArgs<ExtArgs>
    products?: boolean | SubCategory$productsArgs<ExtArgs>
    history?: boolean | SubCategory$historyArgs<ExtArgs>
    _count?: boolean | SubCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subCategory"]>



  export type SubCategorySelectScalar = {
    categoryId?: boolean
    categoryName?: boolean
    brand?: boolean
    gender?: boolean
    level?: boolean
    isLeaf?: boolean
    matchingId?: boolean
    productCount?: boolean
    parentCategoryId?: boolean
    parentSubCategoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"categoryId" | "categoryName" | "brand" | "gender" | "level" | "isLeaf" | "matchingId" | "productCount" | "parentCategoryId" | "parentSubCategoryId" | "createdAt" | "updatedAt", ExtArgs["result"]["subCategory"]>
  export type SubCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parentCategory?: boolean | SubCategory$parentCategoryArgs<ExtArgs>
    parentSubCategory?: boolean | SubCategory$parentSubCategoryArgs<ExtArgs>
    subcategories?: boolean | SubCategory$subcategoriesArgs<ExtArgs>
    products?: boolean | SubCategory$productsArgs<ExtArgs>
    history?: boolean | SubCategory$historyArgs<ExtArgs>
    _count?: boolean | SubCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SubCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubCategory"
    objects: {
      parentCategory: Prisma.$MainCategoryPayload<ExtArgs> | null
      parentSubCategory: Prisma.$SubCategoryPayload<ExtArgs> | null
      subcategories: Prisma.$SubCategoryPayload<ExtArgs>[]
      products: Prisma.$ProductPayload<ExtArgs>[]
      history: Prisma.$CategoryHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      categoryId: number
      categoryName: string
      brand: string
      gender: string
      level: number
      isLeaf: boolean
      matchingId: number | null
      productCount: number | null
      parentCategoryId: number | null
      parentSubCategoryId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subCategory"]>
    composites: {}
  }

  type SubCategoryGetPayload<S extends boolean | null | undefined | SubCategoryDefaultArgs> = $Result.GetResult<Prisma.$SubCategoryPayload, S>

  type SubCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubCategoryCountAggregateInputType | true
    }

  export interface SubCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubCategory'], meta: { name: 'SubCategory' } }
    /**
     * Find zero or one SubCategory that matches the filter.
     * @param {SubCategoryFindUniqueArgs} args - Arguments to find a SubCategory
     * @example
     * // Get one SubCategory
     * const subCategory = await prisma.subCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubCategoryFindUniqueArgs>(args: SelectSubset<T, SubCategoryFindUniqueArgs<ExtArgs>>): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SubCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubCategoryFindUniqueOrThrowArgs} args - Arguments to find a SubCategory
     * @example
     * // Get one SubCategory
     * const subCategory = await prisma.subCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, SubCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryFindFirstArgs} args - Arguments to find a SubCategory
     * @example
     * // Get one SubCategory
     * const subCategory = await prisma.subCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubCategoryFindFirstArgs>(args?: SelectSubset<T, SubCategoryFindFirstArgs<ExtArgs>>): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryFindFirstOrThrowArgs} args - Arguments to find a SubCategory
     * @example
     * // Get one SubCategory
     * const subCategory = await prisma.subCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, SubCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SubCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubCategories
     * const subCategories = await prisma.subCategory.findMany()
     * 
     * // Get first 10 SubCategories
     * const subCategories = await prisma.subCategory.findMany({ take: 10 })
     * 
     * // Only select the `categoryId`
     * const subCategoryWithCategoryIdOnly = await prisma.subCategory.findMany({ select: { categoryId: true } })
     * 
     */
    findMany<T extends SubCategoryFindManyArgs>(args?: SelectSubset<T, SubCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SubCategory.
     * @param {SubCategoryCreateArgs} args - Arguments to create a SubCategory.
     * @example
     * // Create one SubCategory
     * const SubCategory = await prisma.subCategory.create({
     *   data: {
     *     // ... data to create a SubCategory
     *   }
     * })
     * 
     */
    create<T extends SubCategoryCreateArgs>(args: SelectSubset<T, SubCategoryCreateArgs<ExtArgs>>): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SubCategories.
     * @param {SubCategoryCreateManyArgs} args - Arguments to create many SubCategories.
     * @example
     * // Create many SubCategories
     * const subCategory = await prisma.subCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubCategoryCreateManyArgs>(args?: SelectSubset<T, SubCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SubCategory.
     * @param {SubCategoryDeleteArgs} args - Arguments to delete one SubCategory.
     * @example
     * // Delete one SubCategory
     * const SubCategory = await prisma.subCategory.delete({
     *   where: {
     *     // ... filter to delete one SubCategory
     *   }
     * })
     * 
     */
    delete<T extends SubCategoryDeleteArgs>(args: SelectSubset<T, SubCategoryDeleteArgs<ExtArgs>>): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SubCategory.
     * @param {SubCategoryUpdateArgs} args - Arguments to update one SubCategory.
     * @example
     * // Update one SubCategory
     * const subCategory = await prisma.subCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubCategoryUpdateArgs>(args: SelectSubset<T, SubCategoryUpdateArgs<ExtArgs>>): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SubCategories.
     * @param {SubCategoryDeleteManyArgs} args - Arguments to filter SubCategories to delete.
     * @example
     * // Delete a few SubCategories
     * const { count } = await prisma.subCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubCategoryDeleteManyArgs>(args?: SelectSubset<T, SubCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubCategories
     * const subCategory = await prisma.subCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubCategoryUpdateManyArgs>(args: SelectSubset<T, SubCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SubCategory.
     * @param {SubCategoryUpsertArgs} args - Arguments to update or create a SubCategory.
     * @example
     * // Update or create a SubCategory
     * const subCategory = await prisma.subCategory.upsert({
     *   create: {
     *     // ... data to create a SubCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubCategory we want to update
     *   }
     * })
     */
    upsert<T extends SubCategoryUpsertArgs>(args: SelectSubset<T, SubCategoryUpsertArgs<ExtArgs>>): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SubCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryCountArgs} args - Arguments to filter SubCategories to count.
     * @example
     * // Count the number of SubCategories
     * const count = await prisma.subCategory.count({
     *   where: {
     *     // ... the filter for the SubCategories we want to count
     *   }
     * })
    **/
    count<T extends SubCategoryCountArgs>(
      args?: Subset<T, SubCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubCategoryAggregateArgs>(args: Subset<T, SubCategoryAggregateArgs>): Prisma.PrismaPromise<GetSubCategoryAggregateType<T>>

    /**
     * Group by SubCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryGroupByArgs} args - Group by arguments.
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
      T extends SubCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubCategoryGroupByArgs['orderBy'] }
        : { orderBy?: SubCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubCategory model
   */
  readonly fields: SubCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parentCategory<T extends SubCategory$parentCategoryArgs<ExtArgs> = {}>(args?: Subset<T, SubCategory$parentCategoryArgs<ExtArgs>>): Prisma__MainCategoryClient<$Result.GetResult<Prisma.$MainCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    parentSubCategory<T extends SubCategory$parentSubCategoryArgs<ExtArgs> = {}>(args?: Subset<T, SubCategory$parentSubCategoryArgs<ExtArgs>>): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    subcategories<T extends SubCategory$subcategoriesArgs<ExtArgs> = {}>(args?: Subset<T, SubCategory$subcategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    products<T extends SubCategory$productsArgs<ExtArgs> = {}>(args?: Subset<T, SubCategory$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    history<T extends SubCategory$historyArgs<ExtArgs> = {}>(args?: Subset<T, SubCategory$historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SubCategory model
   */
  interface SubCategoryFieldRefs {
    readonly categoryId: FieldRef<"SubCategory", 'Int'>
    readonly categoryName: FieldRef<"SubCategory", 'String'>
    readonly brand: FieldRef<"SubCategory", 'String'>
    readonly gender: FieldRef<"SubCategory", 'String'>
    readonly level: FieldRef<"SubCategory", 'Int'>
    readonly isLeaf: FieldRef<"SubCategory", 'Boolean'>
    readonly matchingId: FieldRef<"SubCategory", 'Int'>
    readonly productCount: FieldRef<"SubCategory", 'Int'>
    readonly parentCategoryId: FieldRef<"SubCategory", 'Int'>
    readonly parentSubCategoryId: FieldRef<"SubCategory", 'Int'>
    readonly createdAt: FieldRef<"SubCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"SubCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SubCategory findUnique
   */
  export type SubCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SubCategory to fetch.
     */
    where: SubCategoryWhereUniqueInput
  }

  /**
   * SubCategory findUniqueOrThrow
   */
  export type SubCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SubCategory to fetch.
     */
    where: SubCategoryWhereUniqueInput
  }

  /**
   * SubCategory findFirst
   */
  export type SubCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SubCategory to fetch.
     */
    where?: SubCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubCategories to fetch.
     */
    orderBy?: SubCategoryOrderByWithRelationInput | SubCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubCategories.
     */
    cursor?: SubCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubCategories.
     */
    distinct?: SubCategoryScalarFieldEnum | SubCategoryScalarFieldEnum[]
  }

  /**
   * SubCategory findFirstOrThrow
   */
  export type SubCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SubCategory to fetch.
     */
    where?: SubCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubCategories to fetch.
     */
    orderBy?: SubCategoryOrderByWithRelationInput | SubCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubCategories.
     */
    cursor?: SubCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubCategories.
     */
    distinct?: SubCategoryScalarFieldEnum | SubCategoryScalarFieldEnum[]
  }

  /**
   * SubCategory findMany
   */
  export type SubCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SubCategories to fetch.
     */
    where?: SubCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubCategories to fetch.
     */
    orderBy?: SubCategoryOrderByWithRelationInput | SubCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubCategories.
     */
    cursor?: SubCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubCategories.
     */
    skip?: number
    distinct?: SubCategoryScalarFieldEnum | SubCategoryScalarFieldEnum[]
  }

  /**
   * SubCategory create
   */
  export type SubCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a SubCategory.
     */
    data: XOR<SubCategoryCreateInput, SubCategoryUncheckedCreateInput>
  }

  /**
   * SubCategory createMany
   */
  export type SubCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubCategories.
     */
    data: SubCategoryCreateManyInput | SubCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubCategory update
   */
  export type SubCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a SubCategory.
     */
    data: XOR<SubCategoryUpdateInput, SubCategoryUncheckedUpdateInput>
    /**
     * Choose, which SubCategory to update.
     */
    where: SubCategoryWhereUniqueInput
  }

  /**
   * SubCategory updateMany
   */
  export type SubCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubCategories.
     */
    data: XOR<SubCategoryUpdateManyMutationInput, SubCategoryUncheckedUpdateManyInput>
    /**
     * Filter which SubCategories to update
     */
    where?: SubCategoryWhereInput
    /**
     * Limit how many SubCategories to update.
     */
    limit?: number
  }

  /**
   * SubCategory upsert
   */
  export type SubCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the SubCategory to update in case it exists.
     */
    where: SubCategoryWhereUniqueInput
    /**
     * In case the SubCategory found by the `where` argument doesn't exist, create a new SubCategory with this data.
     */
    create: XOR<SubCategoryCreateInput, SubCategoryUncheckedCreateInput>
    /**
     * In case the SubCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubCategoryUpdateInput, SubCategoryUncheckedUpdateInput>
  }

  /**
   * SubCategory delete
   */
  export type SubCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * Filter which SubCategory to delete.
     */
    where: SubCategoryWhereUniqueInput
  }

  /**
   * SubCategory deleteMany
   */
  export type SubCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubCategories to delete
     */
    where?: SubCategoryWhereInput
    /**
     * Limit how many SubCategories to delete.
     */
    limit?: number
  }

  /**
   * SubCategory.parentCategory
   */
  export type SubCategory$parentCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainCategory
     */
    select?: MainCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MainCategory
     */
    omit?: MainCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainCategoryInclude<ExtArgs> | null
    where?: MainCategoryWhereInput
  }

  /**
   * SubCategory.parentSubCategory
   */
  export type SubCategory$parentSubCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    where?: SubCategoryWhereInput
  }

  /**
   * SubCategory.subcategories
   */
  export type SubCategory$subcategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    where?: SubCategoryWhereInput
    orderBy?: SubCategoryOrderByWithRelationInput | SubCategoryOrderByWithRelationInput[]
    cursor?: SubCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubCategoryScalarFieldEnum | SubCategoryScalarFieldEnum[]
  }

  /**
   * SubCategory.products
   */
  export type SubCategory$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * SubCategory.history
   */
  export type SubCategory$historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryHistory
     */
    select?: CategoryHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryHistory
     */
    omit?: CategoryHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryHistoryInclude<ExtArgs> | null
    where?: CategoryHistoryWhereInput
    orderBy?: CategoryHistoryOrderByWithRelationInput | CategoryHistoryOrderByWithRelationInput[]
    cursor?: CategoryHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryHistoryScalarFieldEnum | CategoryHistoryScalarFieldEnum[]
  }

  /**
   * SubCategory without action
   */
  export type SubCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    brandName: string | null
    productId: string | null
    name: string | null
    price: number | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    brandName: string | null
    productId: string | null
    name: string | null
    price: number | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    brandName: number
    productId: number
    name: number
    price: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    price?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    price?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    brandName?: true
    productId?: true
    name?: true
    price?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    brandName?: true
    productId?: true
    name?: true
    price?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    brandName?: true
    productId?: true
    name?: true
    price?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    brandName: string
    productId: string
    name: string
    price: number | null
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brandName?: boolean
    productId?: boolean
    name?: boolean
    price?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    brand?: boolean | BrandDefaultArgs<ExtArgs>
    colors?: boolean | Product$colorsArgs<ExtArgs>
    images?: boolean | Product$imagesArgs<ExtArgs>
    sizes?: boolean | Product$sizesArgs<ExtArgs>
    stock?: boolean | Product$stockArgs<ExtArgs>
    subCategories?: boolean | Product$subCategoriesArgs<ExtArgs>
    priceHistory?: boolean | Product$priceHistoryArgs<ExtArgs>
    stockHistory?: boolean | Product$stockHistoryArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>



  export type ProductSelectScalar = {
    id?: boolean
    brandName?: boolean
    productId?: boolean
    name?: boolean
    price?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "brandName" | "productId" | "name" | "price" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brand?: boolean | BrandDefaultArgs<ExtArgs>
    colors?: boolean | Product$colorsArgs<ExtArgs>
    images?: boolean | Product$imagesArgs<ExtArgs>
    sizes?: boolean | Product$sizesArgs<ExtArgs>
    stock?: boolean | Product$stockArgs<ExtArgs>
    subCategories?: boolean | Product$subCategoriesArgs<ExtArgs>
    priceHistory?: boolean | Product$priceHistoryArgs<ExtArgs>
    stockHistory?: boolean | Product$stockHistoryArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      brand: Prisma.$BrandPayload<ExtArgs>
      colors: Prisma.$ProductColorPayload<ExtArgs>[]
      images: Prisma.$ProductImagePayload<ExtArgs>[]
      sizes: Prisma.$ProductSizePayload<ExtArgs>[]
      stock: Prisma.$ProductStockPayload<ExtArgs>[]
      subCategories: Prisma.$SubCategoryPayload<ExtArgs>[]
      priceHistory: Prisma.$PriceHistoryPayload<ExtArgs>[]
      stockHistory: Prisma.$StockHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      brandName: string
      productId: string
      name: string
      price: number | null
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    brand<T extends BrandDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BrandDefaultArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    colors<T extends Product$colorsArgs<ExtArgs> = {}>(args?: Subset<T, Product$colorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductColorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    images<T extends Product$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Product$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sizes<T extends Product$sizesArgs<ExtArgs> = {}>(args?: Subset<T, Product$sizesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductSizePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stock<T extends Product$stockArgs<ExtArgs> = {}>(args?: Subset<T, Product$stockArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductStockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subCategories<T extends Product$subCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, Product$subCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    priceHistory<T extends Product$priceHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Product$priceHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stockHistory<T extends Product$stockHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Product$stockHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'Int'>
    readonly brandName: FieldRef<"Product", 'String'>
    readonly productId: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly price: FieldRef<"Product", 'Int'>
    readonly description: FieldRef<"Product", 'String'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.colors
   */
  export type Product$colorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductColor
     */
    select?: ProductColorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductColor
     */
    omit?: ProductColorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductColorInclude<ExtArgs> | null
    where?: ProductColorWhereInput
    orderBy?: ProductColorOrderByWithRelationInput | ProductColorOrderByWithRelationInput[]
    cursor?: ProductColorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductColorScalarFieldEnum | ProductColorScalarFieldEnum[]
  }

  /**
   * Product.images
   */
  export type Product$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    where?: ProductImageWhereInput
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    cursor?: ProductImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductImageScalarFieldEnum | ProductImageScalarFieldEnum[]
  }

  /**
   * Product.sizes
   */
  export type Product$sizesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSize
     */
    select?: ProductSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSize
     */
    omit?: ProductSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSizeInclude<ExtArgs> | null
    where?: ProductSizeWhereInput
    orderBy?: ProductSizeOrderByWithRelationInput | ProductSizeOrderByWithRelationInput[]
    cursor?: ProductSizeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductSizeScalarFieldEnum | ProductSizeScalarFieldEnum[]
  }

  /**
   * Product.stock
   */
  export type Product$stockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductStock
     */
    select?: ProductStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductStock
     */
    omit?: ProductStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductStockInclude<ExtArgs> | null
    where?: ProductStockWhereInput
    orderBy?: ProductStockOrderByWithRelationInput | ProductStockOrderByWithRelationInput[]
    cursor?: ProductStockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductStockScalarFieldEnum | ProductStockScalarFieldEnum[]
  }

  /**
   * Product.subCategories
   */
  export type Product$subCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    where?: SubCategoryWhereInput
    orderBy?: SubCategoryOrderByWithRelationInput | SubCategoryOrderByWithRelationInput[]
    cursor?: SubCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubCategoryScalarFieldEnum | SubCategoryScalarFieldEnum[]
  }

  /**
   * Product.priceHistory
   */
  export type Product$priceHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceHistory
     */
    omit?: PriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    where?: PriceHistoryWhereInput
    orderBy?: PriceHistoryOrderByWithRelationInput | PriceHistoryOrderByWithRelationInput[]
    cursor?: PriceHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PriceHistoryScalarFieldEnum | PriceHistoryScalarFieldEnum[]
  }

  /**
   * Product.stockHistory
   */
  export type Product$stockHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockHistory
     */
    select?: StockHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockHistory
     */
    omit?: StockHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockHistoryInclude<ExtArgs> | null
    where?: StockHistoryWhereInput
    orderBy?: StockHistoryOrderByWithRelationInput | StockHistoryOrderByWithRelationInput[]
    cursor?: StockHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockHistoryScalarFieldEnum | StockHistoryScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model ProductColor
   */

  export type AggregateProductColor = {
    _count: ProductColorCountAggregateOutputType | null
    _avg: ProductColorAvgAggregateOutputType | null
    _sum: ProductColorSumAggregateOutputType | null
    _min: ProductColorMinAggregateOutputType | null
    _max: ProductColorMaxAggregateOutputType | null
  }

  export type ProductColorAvgAggregateOutputType = {
    id: number | null
    price: number | null
    productId: number | null
  }

  export type ProductColorSumAggregateOutputType = {
    id: number | null
    price: number | null
    productId: number | null
  }

  export type ProductColorMinAggregateOutputType = {
    id: number | null
    colorId: string | null
    name: string | null
    hexCode: string | null
    price: number | null
    description: string | null
    productId: number | null
  }

  export type ProductColorMaxAggregateOutputType = {
    id: number | null
    colorId: string | null
    name: string | null
    hexCode: string | null
    price: number | null
    description: string | null
    productId: number | null
  }

  export type ProductColorCountAggregateOutputType = {
    id: number
    colorId: number
    name: number
    hexCode: number
    price: number
    description: number
    productId: number
    _all: number
  }


  export type ProductColorAvgAggregateInputType = {
    id?: true
    price?: true
    productId?: true
  }

  export type ProductColorSumAggregateInputType = {
    id?: true
    price?: true
    productId?: true
  }

  export type ProductColorMinAggregateInputType = {
    id?: true
    colorId?: true
    name?: true
    hexCode?: true
    price?: true
    description?: true
    productId?: true
  }

  export type ProductColorMaxAggregateInputType = {
    id?: true
    colorId?: true
    name?: true
    hexCode?: true
    price?: true
    description?: true
    productId?: true
  }

  export type ProductColorCountAggregateInputType = {
    id?: true
    colorId?: true
    name?: true
    hexCode?: true
    price?: true
    description?: true
    productId?: true
    _all?: true
  }

  export type ProductColorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductColor to aggregate.
     */
    where?: ProductColorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductColors to fetch.
     */
    orderBy?: ProductColorOrderByWithRelationInput | ProductColorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductColorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductColors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductColors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductColors
    **/
    _count?: true | ProductColorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductColorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductColorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductColorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductColorMaxAggregateInputType
  }

  export type GetProductColorAggregateType<T extends ProductColorAggregateArgs> = {
        [P in keyof T & keyof AggregateProductColor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductColor[P]>
      : GetScalarType<T[P], AggregateProductColor[P]>
  }




  export type ProductColorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductColorWhereInput
    orderBy?: ProductColorOrderByWithAggregationInput | ProductColorOrderByWithAggregationInput[]
    by: ProductColorScalarFieldEnum[] | ProductColorScalarFieldEnum
    having?: ProductColorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductColorCountAggregateInputType | true
    _avg?: ProductColorAvgAggregateInputType
    _sum?: ProductColorSumAggregateInputType
    _min?: ProductColorMinAggregateInputType
    _max?: ProductColorMaxAggregateInputType
  }

  export type ProductColorGroupByOutputType = {
    id: number
    colorId: string
    name: string
    hexCode: string | null
    price: number | null
    description: string | null
    productId: number
    _count: ProductColorCountAggregateOutputType | null
    _avg: ProductColorAvgAggregateOutputType | null
    _sum: ProductColorSumAggregateOutputType | null
    _min: ProductColorMinAggregateOutputType | null
    _max: ProductColorMaxAggregateOutputType | null
  }

  type GetProductColorGroupByPayload<T extends ProductColorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductColorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductColorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductColorGroupByOutputType[P]>
            : GetScalarType<T[P], ProductColorGroupByOutputType[P]>
        }
      >
    >


  export type ProductColorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    colorId?: boolean
    name?: boolean
    hexCode?: boolean
    price?: boolean
    description?: boolean
    productId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    images?: boolean | ProductColor$imagesArgs<ExtArgs>
    sizes?: boolean | ProductColor$sizesArgs<ExtArgs>
    stock?: boolean | ProductColor$stockArgs<ExtArgs>
    priceHistory?: boolean | ProductColor$priceHistoryArgs<ExtArgs>
    stockHistory?: boolean | ProductColor$stockHistoryArgs<ExtArgs>
    _count?: boolean | ProductColorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productColor"]>



  export type ProductColorSelectScalar = {
    id?: boolean
    colorId?: boolean
    name?: boolean
    hexCode?: boolean
    price?: boolean
    description?: boolean
    productId?: boolean
  }

  export type ProductColorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "colorId" | "name" | "hexCode" | "price" | "description" | "productId", ExtArgs["result"]["productColor"]>
  export type ProductColorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    images?: boolean | ProductColor$imagesArgs<ExtArgs>
    sizes?: boolean | ProductColor$sizesArgs<ExtArgs>
    stock?: boolean | ProductColor$stockArgs<ExtArgs>
    priceHistory?: boolean | ProductColor$priceHistoryArgs<ExtArgs>
    stockHistory?: boolean | ProductColor$stockHistoryArgs<ExtArgs>
    _count?: boolean | ProductColorCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProductColorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductColor"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      images: Prisma.$ProductImagePayload<ExtArgs>[]
      sizes: Prisma.$ProductSizePayload<ExtArgs>[]
      stock: Prisma.$ProductStockPayload<ExtArgs>[]
      priceHistory: Prisma.$PriceHistoryPayload<ExtArgs>[]
      stockHistory: Prisma.$StockHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      colorId: string
      name: string
      hexCode: string | null
      price: number | null
      description: string | null
      productId: number
    }, ExtArgs["result"]["productColor"]>
    composites: {}
  }

  type ProductColorGetPayload<S extends boolean | null | undefined | ProductColorDefaultArgs> = $Result.GetResult<Prisma.$ProductColorPayload, S>

  type ProductColorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductColorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductColorCountAggregateInputType | true
    }

  export interface ProductColorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductColor'], meta: { name: 'ProductColor' } }
    /**
     * Find zero or one ProductColor that matches the filter.
     * @param {ProductColorFindUniqueArgs} args - Arguments to find a ProductColor
     * @example
     * // Get one ProductColor
     * const productColor = await prisma.productColor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductColorFindUniqueArgs>(args: SelectSubset<T, ProductColorFindUniqueArgs<ExtArgs>>): Prisma__ProductColorClient<$Result.GetResult<Prisma.$ProductColorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductColor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductColorFindUniqueOrThrowArgs} args - Arguments to find a ProductColor
     * @example
     * // Get one ProductColor
     * const productColor = await prisma.productColor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductColorFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductColorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductColorClient<$Result.GetResult<Prisma.$ProductColorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductColor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductColorFindFirstArgs} args - Arguments to find a ProductColor
     * @example
     * // Get one ProductColor
     * const productColor = await prisma.productColor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductColorFindFirstArgs>(args?: SelectSubset<T, ProductColorFindFirstArgs<ExtArgs>>): Prisma__ProductColorClient<$Result.GetResult<Prisma.$ProductColorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductColor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductColorFindFirstOrThrowArgs} args - Arguments to find a ProductColor
     * @example
     * // Get one ProductColor
     * const productColor = await prisma.productColor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductColorFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductColorFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductColorClient<$Result.GetResult<Prisma.$ProductColorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductColors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductColorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductColors
     * const productColors = await prisma.productColor.findMany()
     * 
     * // Get first 10 ProductColors
     * const productColors = await prisma.productColor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productColorWithIdOnly = await prisma.productColor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductColorFindManyArgs>(args?: SelectSubset<T, ProductColorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductColorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductColor.
     * @param {ProductColorCreateArgs} args - Arguments to create a ProductColor.
     * @example
     * // Create one ProductColor
     * const ProductColor = await prisma.productColor.create({
     *   data: {
     *     // ... data to create a ProductColor
     *   }
     * })
     * 
     */
    create<T extends ProductColorCreateArgs>(args: SelectSubset<T, ProductColorCreateArgs<ExtArgs>>): Prisma__ProductColorClient<$Result.GetResult<Prisma.$ProductColorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductColors.
     * @param {ProductColorCreateManyArgs} args - Arguments to create many ProductColors.
     * @example
     * // Create many ProductColors
     * const productColor = await prisma.productColor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductColorCreateManyArgs>(args?: SelectSubset<T, ProductColorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductColor.
     * @param {ProductColorDeleteArgs} args - Arguments to delete one ProductColor.
     * @example
     * // Delete one ProductColor
     * const ProductColor = await prisma.productColor.delete({
     *   where: {
     *     // ... filter to delete one ProductColor
     *   }
     * })
     * 
     */
    delete<T extends ProductColorDeleteArgs>(args: SelectSubset<T, ProductColorDeleteArgs<ExtArgs>>): Prisma__ProductColorClient<$Result.GetResult<Prisma.$ProductColorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductColor.
     * @param {ProductColorUpdateArgs} args - Arguments to update one ProductColor.
     * @example
     * // Update one ProductColor
     * const productColor = await prisma.productColor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductColorUpdateArgs>(args: SelectSubset<T, ProductColorUpdateArgs<ExtArgs>>): Prisma__ProductColorClient<$Result.GetResult<Prisma.$ProductColorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductColors.
     * @param {ProductColorDeleteManyArgs} args - Arguments to filter ProductColors to delete.
     * @example
     * // Delete a few ProductColors
     * const { count } = await prisma.productColor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductColorDeleteManyArgs>(args?: SelectSubset<T, ProductColorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductColors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductColorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductColors
     * const productColor = await prisma.productColor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductColorUpdateManyArgs>(args: SelectSubset<T, ProductColorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductColor.
     * @param {ProductColorUpsertArgs} args - Arguments to update or create a ProductColor.
     * @example
     * // Update or create a ProductColor
     * const productColor = await prisma.productColor.upsert({
     *   create: {
     *     // ... data to create a ProductColor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductColor we want to update
     *   }
     * })
     */
    upsert<T extends ProductColorUpsertArgs>(args: SelectSubset<T, ProductColorUpsertArgs<ExtArgs>>): Prisma__ProductColorClient<$Result.GetResult<Prisma.$ProductColorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductColors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductColorCountArgs} args - Arguments to filter ProductColors to count.
     * @example
     * // Count the number of ProductColors
     * const count = await prisma.productColor.count({
     *   where: {
     *     // ... the filter for the ProductColors we want to count
     *   }
     * })
    **/
    count<T extends ProductColorCountArgs>(
      args?: Subset<T, ProductColorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductColorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductColor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductColorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductColorAggregateArgs>(args: Subset<T, ProductColorAggregateArgs>): Prisma.PrismaPromise<GetProductColorAggregateType<T>>

    /**
     * Group by ProductColor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductColorGroupByArgs} args - Group by arguments.
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
      T extends ProductColorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductColorGroupByArgs['orderBy'] }
        : { orderBy?: ProductColorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductColorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductColorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductColor model
   */
  readonly fields: ProductColorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductColor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductColorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    images<T extends ProductColor$imagesArgs<ExtArgs> = {}>(args?: Subset<T, ProductColor$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sizes<T extends ProductColor$sizesArgs<ExtArgs> = {}>(args?: Subset<T, ProductColor$sizesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductSizePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stock<T extends ProductColor$stockArgs<ExtArgs> = {}>(args?: Subset<T, ProductColor$stockArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductStockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    priceHistory<T extends ProductColor$priceHistoryArgs<ExtArgs> = {}>(args?: Subset<T, ProductColor$priceHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stockHistory<T extends ProductColor$stockHistoryArgs<ExtArgs> = {}>(args?: Subset<T, ProductColor$stockHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ProductColor model
   */
  interface ProductColorFieldRefs {
    readonly id: FieldRef<"ProductColor", 'Int'>
    readonly colorId: FieldRef<"ProductColor", 'String'>
    readonly name: FieldRef<"ProductColor", 'String'>
    readonly hexCode: FieldRef<"ProductColor", 'String'>
    readonly price: FieldRef<"ProductColor", 'Int'>
    readonly description: FieldRef<"ProductColor", 'String'>
    readonly productId: FieldRef<"ProductColor", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ProductColor findUnique
   */
  export type ProductColorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductColor
     */
    select?: ProductColorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductColor
     */
    omit?: ProductColorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductColorInclude<ExtArgs> | null
    /**
     * Filter, which ProductColor to fetch.
     */
    where: ProductColorWhereUniqueInput
  }

  /**
   * ProductColor findUniqueOrThrow
   */
  export type ProductColorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductColor
     */
    select?: ProductColorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductColor
     */
    omit?: ProductColorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductColorInclude<ExtArgs> | null
    /**
     * Filter, which ProductColor to fetch.
     */
    where: ProductColorWhereUniqueInput
  }

  /**
   * ProductColor findFirst
   */
  export type ProductColorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductColor
     */
    select?: ProductColorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductColor
     */
    omit?: ProductColorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductColorInclude<ExtArgs> | null
    /**
     * Filter, which ProductColor to fetch.
     */
    where?: ProductColorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductColors to fetch.
     */
    orderBy?: ProductColorOrderByWithRelationInput | ProductColorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductColors.
     */
    cursor?: ProductColorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductColors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductColors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductColors.
     */
    distinct?: ProductColorScalarFieldEnum | ProductColorScalarFieldEnum[]
  }

  /**
   * ProductColor findFirstOrThrow
   */
  export type ProductColorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductColor
     */
    select?: ProductColorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductColor
     */
    omit?: ProductColorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductColorInclude<ExtArgs> | null
    /**
     * Filter, which ProductColor to fetch.
     */
    where?: ProductColorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductColors to fetch.
     */
    orderBy?: ProductColorOrderByWithRelationInput | ProductColorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductColors.
     */
    cursor?: ProductColorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductColors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductColors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductColors.
     */
    distinct?: ProductColorScalarFieldEnum | ProductColorScalarFieldEnum[]
  }

  /**
   * ProductColor findMany
   */
  export type ProductColorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductColor
     */
    select?: ProductColorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductColor
     */
    omit?: ProductColorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductColorInclude<ExtArgs> | null
    /**
     * Filter, which ProductColors to fetch.
     */
    where?: ProductColorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductColors to fetch.
     */
    orderBy?: ProductColorOrderByWithRelationInput | ProductColorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductColors.
     */
    cursor?: ProductColorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductColors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductColors.
     */
    skip?: number
    distinct?: ProductColorScalarFieldEnum | ProductColorScalarFieldEnum[]
  }

  /**
   * ProductColor create
   */
  export type ProductColorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductColor
     */
    select?: ProductColorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductColor
     */
    omit?: ProductColorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductColorInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductColor.
     */
    data: XOR<ProductColorCreateInput, ProductColorUncheckedCreateInput>
  }

  /**
   * ProductColor createMany
   */
  export type ProductColorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductColors.
     */
    data: ProductColorCreateManyInput | ProductColorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductColor update
   */
  export type ProductColorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductColor
     */
    select?: ProductColorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductColor
     */
    omit?: ProductColorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductColorInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductColor.
     */
    data: XOR<ProductColorUpdateInput, ProductColorUncheckedUpdateInput>
    /**
     * Choose, which ProductColor to update.
     */
    where: ProductColorWhereUniqueInput
  }

  /**
   * ProductColor updateMany
   */
  export type ProductColorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductColors.
     */
    data: XOR<ProductColorUpdateManyMutationInput, ProductColorUncheckedUpdateManyInput>
    /**
     * Filter which ProductColors to update
     */
    where?: ProductColorWhereInput
    /**
     * Limit how many ProductColors to update.
     */
    limit?: number
  }

  /**
   * ProductColor upsert
   */
  export type ProductColorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductColor
     */
    select?: ProductColorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductColor
     */
    omit?: ProductColorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductColorInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductColor to update in case it exists.
     */
    where: ProductColorWhereUniqueInput
    /**
     * In case the ProductColor found by the `where` argument doesn't exist, create a new ProductColor with this data.
     */
    create: XOR<ProductColorCreateInput, ProductColorUncheckedCreateInput>
    /**
     * In case the ProductColor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductColorUpdateInput, ProductColorUncheckedUpdateInput>
  }

  /**
   * ProductColor delete
   */
  export type ProductColorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductColor
     */
    select?: ProductColorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductColor
     */
    omit?: ProductColorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductColorInclude<ExtArgs> | null
    /**
     * Filter which ProductColor to delete.
     */
    where: ProductColorWhereUniqueInput
  }

  /**
   * ProductColor deleteMany
   */
  export type ProductColorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductColors to delete
     */
    where?: ProductColorWhereInput
    /**
     * Limit how many ProductColors to delete.
     */
    limit?: number
  }

  /**
   * ProductColor.images
   */
  export type ProductColor$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    where?: ProductImageWhereInput
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    cursor?: ProductImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductImageScalarFieldEnum | ProductImageScalarFieldEnum[]
  }

  /**
   * ProductColor.sizes
   */
  export type ProductColor$sizesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSize
     */
    select?: ProductSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSize
     */
    omit?: ProductSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSizeInclude<ExtArgs> | null
    where?: ProductSizeWhereInput
    orderBy?: ProductSizeOrderByWithRelationInput | ProductSizeOrderByWithRelationInput[]
    cursor?: ProductSizeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductSizeScalarFieldEnum | ProductSizeScalarFieldEnum[]
  }

  /**
   * ProductColor.stock
   */
  export type ProductColor$stockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductStock
     */
    select?: ProductStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductStock
     */
    omit?: ProductStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductStockInclude<ExtArgs> | null
    where?: ProductStockWhereInput
    orderBy?: ProductStockOrderByWithRelationInput | ProductStockOrderByWithRelationInput[]
    cursor?: ProductStockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductStockScalarFieldEnum | ProductStockScalarFieldEnum[]
  }

  /**
   * ProductColor.priceHistory
   */
  export type ProductColor$priceHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceHistory
     */
    omit?: PriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    where?: PriceHistoryWhereInput
    orderBy?: PriceHistoryOrderByWithRelationInput | PriceHistoryOrderByWithRelationInput[]
    cursor?: PriceHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PriceHistoryScalarFieldEnum | PriceHistoryScalarFieldEnum[]
  }

  /**
   * ProductColor.stockHistory
   */
  export type ProductColor$stockHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockHistory
     */
    select?: StockHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockHistory
     */
    omit?: StockHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockHistoryInclude<ExtArgs> | null
    where?: StockHistoryWhereInput
    orderBy?: StockHistoryOrderByWithRelationInput | StockHistoryOrderByWithRelationInput[]
    cursor?: StockHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockHistoryScalarFieldEnum | StockHistoryScalarFieldEnum[]
  }

  /**
   * ProductColor without action
   */
  export type ProductColorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductColor
     */
    select?: ProductColorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductColor
     */
    omit?: ProductColorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductColorInclude<ExtArgs> | null
  }


  /**
   * Model ProductSize
   */

  export type AggregateProductSize = {
    _count: ProductSizeCountAggregateOutputType | null
    _avg: ProductSizeAvgAggregateOutputType | null
    _sum: ProductSizeSumAggregateOutputType | null
    _min: ProductSizeMinAggregateOutputType | null
    _max: ProductSizeMaxAggregateOutputType | null
  }

  export type ProductSizeAvgAggregateOutputType = {
    id: number | null
    sizeId: number | null
    price: number | null
    sku: number | null
    productId: number | null
    colorId: number | null
  }

  export type ProductSizeSumAggregateOutputType = {
    id: number | null
    sizeId: number | null
    price: number | null
    sku: number | null
    productId: number | null
    colorId: number | null
  }

  export type ProductSizeMinAggregateOutputType = {
    id: number | null
    sizeId: number | null
    name: string | null
    availability: string | null
    price: number | null
    sku: number | null
    productId: number | null
    colorId: number | null
    colorName: string | null
  }

  export type ProductSizeMaxAggregateOutputType = {
    id: number | null
    sizeId: number | null
    name: string | null
    availability: string | null
    price: number | null
    sku: number | null
    productId: number | null
    colorId: number | null
    colorName: string | null
  }

  export type ProductSizeCountAggregateOutputType = {
    id: number
    sizeId: number
    name: number
    availability: number
    price: number
    sku: number
    productId: number
    colorId: number
    colorName: number
    _all: number
  }


  export type ProductSizeAvgAggregateInputType = {
    id?: true
    sizeId?: true
    price?: true
    sku?: true
    productId?: true
    colorId?: true
  }

  export type ProductSizeSumAggregateInputType = {
    id?: true
    sizeId?: true
    price?: true
    sku?: true
    productId?: true
    colorId?: true
  }

  export type ProductSizeMinAggregateInputType = {
    id?: true
    sizeId?: true
    name?: true
    availability?: true
    price?: true
    sku?: true
    productId?: true
    colorId?: true
    colorName?: true
  }

  export type ProductSizeMaxAggregateInputType = {
    id?: true
    sizeId?: true
    name?: true
    availability?: true
    price?: true
    sku?: true
    productId?: true
    colorId?: true
    colorName?: true
  }

  export type ProductSizeCountAggregateInputType = {
    id?: true
    sizeId?: true
    name?: true
    availability?: true
    price?: true
    sku?: true
    productId?: true
    colorId?: true
    colorName?: true
    _all?: true
  }

  export type ProductSizeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductSize to aggregate.
     */
    where?: ProductSizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductSizes to fetch.
     */
    orderBy?: ProductSizeOrderByWithRelationInput | ProductSizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductSizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductSizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductSizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductSizes
    **/
    _count?: true | ProductSizeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductSizeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSizeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductSizeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductSizeMaxAggregateInputType
  }

  export type GetProductSizeAggregateType<T extends ProductSizeAggregateArgs> = {
        [P in keyof T & keyof AggregateProductSize]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductSize[P]>
      : GetScalarType<T[P], AggregateProductSize[P]>
  }




  export type ProductSizeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductSizeWhereInput
    orderBy?: ProductSizeOrderByWithAggregationInput | ProductSizeOrderByWithAggregationInput[]
    by: ProductSizeScalarFieldEnum[] | ProductSizeScalarFieldEnum
    having?: ProductSizeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductSizeCountAggregateInputType | true
    _avg?: ProductSizeAvgAggregateInputType
    _sum?: ProductSizeSumAggregateInputType
    _min?: ProductSizeMinAggregateInputType
    _max?: ProductSizeMaxAggregateInputType
  }

  export type ProductSizeGroupByOutputType = {
    id: number
    sizeId: number
    name: string
    availability: string
    price: number | null
    sku: number | null
    productId: number
    colorId: number | null
    colorName: string | null
    _count: ProductSizeCountAggregateOutputType | null
    _avg: ProductSizeAvgAggregateOutputType | null
    _sum: ProductSizeSumAggregateOutputType | null
    _min: ProductSizeMinAggregateOutputType | null
    _max: ProductSizeMaxAggregateOutputType | null
  }

  type GetProductSizeGroupByPayload<T extends ProductSizeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductSizeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductSizeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductSizeGroupByOutputType[P]>
            : GetScalarType<T[P], ProductSizeGroupByOutputType[P]>
        }
      >
    >


  export type ProductSizeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sizeId?: boolean
    name?: boolean
    availability?: boolean
    price?: boolean
    sku?: boolean
    productId?: boolean
    colorId?: boolean
    colorName?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    color?: boolean | ProductSize$colorArgs<ExtArgs>
  }, ExtArgs["result"]["productSize"]>



  export type ProductSizeSelectScalar = {
    id?: boolean
    sizeId?: boolean
    name?: boolean
    availability?: boolean
    price?: boolean
    sku?: boolean
    productId?: boolean
    colorId?: boolean
    colorName?: boolean
  }

  export type ProductSizeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sizeId" | "name" | "availability" | "price" | "sku" | "productId" | "colorId" | "colorName", ExtArgs["result"]["productSize"]>
  export type ProductSizeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    color?: boolean | ProductSize$colorArgs<ExtArgs>
  }

  export type $ProductSizePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductSize"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      color: Prisma.$ProductColorPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sizeId: number
      name: string
      availability: string
      price: number | null
      sku: number | null
      productId: number
      colorId: number | null
      colorName: string | null
    }, ExtArgs["result"]["productSize"]>
    composites: {}
  }

  type ProductSizeGetPayload<S extends boolean | null | undefined | ProductSizeDefaultArgs> = $Result.GetResult<Prisma.$ProductSizePayload, S>

  type ProductSizeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductSizeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductSizeCountAggregateInputType | true
    }

  export interface ProductSizeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductSize'], meta: { name: 'ProductSize' } }
    /**
     * Find zero or one ProductSize that matches the filter.
     * @param {ProductSizeFindUniqueArgs} args - Arguments to find a ProductSize
     * @example
     * // Get one ProductSize
     * const productSize = await prisma.productSize.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductSizeFindUniqueArgs>(args: SelectSubset<T, ProductSizeFindUniqueArgs<ExtArgs>>): Prisma__ProductSizeClient<$Result.GetResult<Prisma.$ProductSizePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductSize that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductSizeFindUniqueOrThrowArgs} args - Arguments to find a ProductSize
     * @example
     * // Get one ProductSize
     * const productSize = await prisma.productSize.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductSizeFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductSizeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductSizeClient<$Result.GetResult<Prisma.$ProductSizePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductSize that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSizeFindFirstArgs} args - Arguments to find a ProductSize
     * @example
     * // Get one ProductSize
     * const productSize = await prisma.productSize.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductSizeFindFirstArgs>(args?: SelectSubset<T, ProductSizeFindFirstArgs<ExtArgs>>): Prisma__ProductSizeClient<$Result.GetResult<Prisma.$ProductSizePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductSize that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSizeFindFirstOrThrowArgs} args - Arguments to find a ProductSize
     * @example
     * // Get one ProductSize
     * const productSize = await prisma.productSize.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductSizeFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductSizeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductSizeClient<$Result.GetResult<Prisma.$ProductSizePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductSizes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSizeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductSizes
     * const productSizes = await prisma.productSize.findMany()
     * 
     * // Get first 10 ProductSizes
     * const productSizes = await prisma.productSize.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productSizeWithIdOnly = await prisma.productSize.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductSizeFindManyArgs>(args?: SelectSubset<T, ProductSizeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductSizePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductSize.
     * @param {ProductSizeCreateArgs} args - Arguments to create a ProductSize.
     * @example
     * // Create one ProductSize
     * const ProductSize = await prisma.productSize.create({
     *   data: {
     *     // ... data to create a ProductSize
     *   }
     * })
     * 
     */
    create<T extends ProductSizeCreateArgs>(args: SelectSubset<T, ProductSizeCreateArgs<ExtArgs>>): Prisma__ProductSizeClient<$Result.GetResult<Prisma.$ProductSizePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductSizes.
     * @param {ProductSizeCreateManyArgs} args - Arguments to create many ProductSizes.
     * @example
     * // Create many ProductSizes
     * const productSize = await prisma.productSize.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductSizeCreateManyArgs>(args?: SelectSubset<T, ProductSizeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductSize.
     * @param {ProductSizeDeleteArgs} args - Arguments to delete one ProductSize.
     * @example
     * // Delete one ProductSize
     * const ProductSize = await prisma.productSize.delete({
     *   where: {
     *     // ... filter to delete one ProductSize
     *   }
     * })
     * 
     */
    delete<T extends ProductSizeDeleteArgs>(args: SelectSubset<T, ProductSizeDeleteArgs<ExtArgs>>): Prisma__ProductSizeClient<$Result.GetResult<Prisma.$ProductSizePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductSize.
     * @param {ProductSizeUpdateArgs} args - Arguments to update one ProductSize.
     * @example
     * // Update one ProductSize
     * const productSize = await prisma.productSize.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductSizeUpdateArgs>(args: SelectSubset<T, ProductSizeUpdateArgs<ExtArgs>>): Prisma__ProductSizeClient<$Result.GetResult<Prisma.$ProductSizePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductSizes.
     * @param {ProductSizeDeleteManyArgs} args - Arguments to filter ProductSizes to delete.
     * @example
     * // Delete a few ProductSizes
     * const { count } = await prisma.productSize.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductSizeDeleteManyArgs>(args?: SelectSubset<T, ProductSizeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductSizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSizeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductSizes
     * const productSize = await prisma.productSize.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductSizeUpdateManyArgs>(args: SelectSubset<T, ProductSizeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductSize.
     * @param {ProductSizeUpsertArgs} args - Arguments to update or create a ProductSize.
     * @example
     * // Update or create a ProductSize
     * const productSize = await prisma.productSize.upsert({
     *   create: {
     *     // ... data to create a ProductSize
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductSize we want to update
     *   }
     * })
     */
    upsert<T extends ProductSizeUpsertArgs>(args: SelectSubset<T, ProductSizeUpsertArgs<ExtArgs>>): Prisma__ProductSizeClient<$Result.GetResult<Prisma.$ProductSizePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductSizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSizeCountArgs} args - Arguments to filter ProductSizes to count.
     * @example
     * // Count the number of ProductSizes
     * const count = await prisma.productSize.count({
     *   where: {
     *     // ... the filter for the ProductSizes we want to count
     *   }
     * })
    **/
    count<T extends ProductSizeCountArgs>(
      args?: Subset<T, ProductSizeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductSizeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductSize.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSizeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductSizeAggregateArgs>(args: Subset<T, ProductSizeAggregateArgs>): Prisma.PrismaPromise<GetProductSizeAggregateType<T>>

    /**
     * Group by ProductSize.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSizeGroupByArgs} args - Group by arguments.
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
      T extends ProductSizeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductSizeGroupByArgs['orderBy'] }
        : { orderBy?: ProductSizeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductSizeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductSizeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductSize model
   */
  readonly fields: ProductSizeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductSize.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductSizeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    color<T extends ProductSize$colorArgs<ExtArgs> = {}>(args?: Subset<T, ProductSize$colorArgs<ExtArgs>>): Prisma__ProductColorClient<$Result.GetResult<Prisma.$ProductColorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProductSize model
   */
  interface ProductSizeFieldRefs {
    readonly id: FieldRef<"ProductSize", 'Int'>
    readonly sizeId: FieldRef<"ProductSize", 'Int'>
    readonly name: FieldRef<"ProductSize", 'String'>
    readonly availability: FieldRef<"ProductSize", 'String'>
    readonly price: FieldRef<"ProductSize", 'Int'>
    readonly sku: FieldRef<"ProductSize", 'Int'>
    readonly productId: FieldRef<"ProductSize", 'Int'>
    readonly colorId: FieldRef<"ProductSize", 'Int'>
    readonly colorName: FieldRef<"ProductSize", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProductSize findUnique
   */
  export type ProductSizeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSize
     */
    select?: ProductSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSize
     */
    omit?: ProductSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSizeInclude<ExtArgs> | null
    /**
     * Filter, which ProductSize to fetch.
     */
    where: ProductSizeWhereUniqueInput
  }

  /**
   * ProductSize findUniqueOrThrow
   */
  export type ProductSizeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSize
     */
    select?: ProductSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSize
     */
    omit?: ProductSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSizeInclude<ExtArgs> | null
    /**
     * Filter, which ProductSize to fetch.
     */
    where: ProductSizeWhereUniqueInput
  }

  /**
   * ProductSize findFirst
   */
  export type ProductSizeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSize
     */
    select?: ProductSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSize
     */
    omit?: ProductSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSizeInclude<ExtArgs> | null
    /**
     * Filter, which ProductSize to fetch.
     */
    where?: ProductSizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductSizes to fetch.
     */
    orderBy?: ProductSizeOrderByWithRelationInput | ProductSizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductSizes.
     */
    cursor?: ProductSizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductSizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductSizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductSizes.
     */
    distinct?: ProductSizeScalarFieldEnum | ProductSizeScalarFieldEnum[]
  }

  /**
   * ProductSize findFirstOrThrow
   */
  export type ProductSizeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSize
     */
    select?: ProductSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSize
     */
    omit?: ProductSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSizeInclude<ExtArgs> | null
    /**
     * Filter, which ProductSize to fetch.
     */
    where?: ProductSizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductSizes to fetch.
     */
    orderBy?: ProductSizeOrderByWithRelationInput | ProductSizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductSizes.
     */
    cursor?: ProductSizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductSizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductSizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductSizes.
     */
    distinct?: ProductSizeScalarFieldEnum | ProductSizeScalarFieldEnum[]
  }

  /**
   * ProductSize findMany
   */
  export type ProductSizeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSize
     */
    select?: ProductSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSize
     */
    omit?: ProductSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSizeInclude<ExtArgs> | null
    /**
     * Filter, which ProductSizes to fetch.
     */
    where?: ProductSizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductSizes to fetch.
     */
    orderBy?: ProductSizeOrderByWithRelationInput | ProductSizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductSizes.
     */
    cursor?: ProductSizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductSizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductSizes.
     */
    skip?: number
    distinct?: ProductSizeScalarFieldEnum | ProductSizeScalarFieldEnum[]
  }

  /**
   * ProductSize create
   */
  export type ProductSizeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSize
     */
    select?: ProductSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSize
     */
    omit?: ProductSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSizeInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductSize.
     */
    data: XOR<ProductSizeCreateInput, ProductSizeUncheckedCreateInput>
  }

  /**
   * ProductSize createMany
   */
  export type ProductSizeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductSizes.
     */
    data: ProductSizeCreateManyInput | ProductSizeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductSize update
   */
  export type ProductSizeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSize
     */
    select?: ProductSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSize
     */
    omit?: ProductSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSizeInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductSize.
     */
    data: XOR<ProductSizeUpdateInput, ProductSizeUncheckedUpdateInput>
    /**
     * Choose, which ProductSize to update.
     */
    where: ProductSizeWhereUniqueInput
  }

  /**
   * ProductSize updateMany
   */
  export type ProductSizeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductSizes.
     */
    data: XOR<ProductSizeUpdateManyMutationInput, ProductSizeUncheckedUpdateManyInput>
    /**
     * Filter which ProductSizes to update
     */
    where?: ProductSizeWhereInput
    /**
     * Limit how many ProductSizes to update.
     */
    limit?: number
  }

  /**
   * ProductSize upsert
   */
  export type ProductSizeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSize
     */
    select?: ProductSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSize
     */
    omit?: ProductSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSizeInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductSize to update in case it exists.
     */
    where: ProductSizeWhereUniqueInput
    /**
     * In case the ProductSize found by the `where` argument doesn't exist, create a new ProductSize with this data.
     */
    create: XOR<ProductSizeCreateInput, ProductSizeUncheckedCreateInput>
    /**
     * In case the ProductSize was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductSizeUpdateInput, ProductSizeUncheckedUpdateInput>
  }

  /**
   * ProductSize delete
   */
  export type ProductSizeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSize
     */
    select?: ProductSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSize
     */
    omit?: ProductSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSizeInclude<ExtArgs> | null
    /**
     * Filter which ProductSize to delete.
     */
    where: ProductSizeWhereUniqueInput
  }

  /**
   * ProductSize deleteMany
   */
  export type ProductSizeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductSizes to delete
     */
    where?: ProductSizeWhereInput
    /**
     * Limit how many ProductSizes to delete.
     */
    limit?: number
  }

  /**
   * ProductSize.color
   */
  export type ProductSize$colorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductColor
     */
    select?: ProductColorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductColor
     */
    omit?: ProductColorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductColorInclude<ExtArgs> | null
    where?: ProductColorWhereInput
  }

  /**
   * ProductSize without action
   */
  export type ProductSizeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSize
     */
    select?: ProductSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSize
     */
    omit?: ProductSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSizeInclude<ExtArgs> | null
  }


  /**
   * Model ProductImage
   */

  export type AggregateProductImage = {
    _count: ProductImageCountAggregateOutputType | null
    _avg: ProductImageAvgAggregateOutputType | null
    _sum: ProductImageSumAggregateOutputType | null
    _min: ProductImageMinAggregateOutputType | null
    _max: ProductImageMaxAggregateOutputType | null
  }

  export type ProductImageAvgAggregateOutputType = {
    id: number | null
    order: number | null
    productId: number | null
    colorId: number | null
    colorIndex: number | null
  }

  export type ProductImageSumAggregateOutputType = {
    id: number | null
    order: number | null
    productId: number | null
    colorId: number | null
    colorIndex: number | null
  }

  export type ProductImageMinAggregateOutputType = {
    id: number | null
    url: string | null
    type: string | null
    kind: string | null
    order: number | null
    productId: number | null
    colorId: number | null
    colorName: string | null
    colorIndex: number | null
  }

  export type ProductImageMaxAggregateOutputType = {
    id: number | null
    url: string | null
    type: string | null
    kind: string | null
    order: number | null
    productId: number | null
    colorId: number | null
    colorName: string | null
    colorIndex: number | null
  }

  export type ProductImageCountAggregateOutputType = {
    id: number
    url: number
    type: number
    kind: number
    order: number
    productId: number
    colorId: number
    colorName: number
    colorIndex: number
    _all: number
  }


  export type ProductImageAvgAggregateInputType = {
    id?: true
    order?: true
    productId?: true
    colorId?: true
    colorIndex?: true
  }

  export type ProductImageSumAggregateInputType = {
    id?: true
    order?: true
    productId?: true
    colorId?: true
    colorIndex?: true
  }

  export type ProductImageMinAggregateInputType = {
    id?: true
    url?: true
    type?: true
    kind?: true
    order?: true
    productId?: true
    colorId?: true
    colorName?: true
    colorIndex?: true
  }

  export type ProductImageMaxAggregateInputType = {
    id?: true
    url?: true
    type?: true
    kind?: true
    order?: true
    productId?: true
    colorId?: true
    colorName?: true
    colorIndex?: true
  }

  export type ProductImageCountAggregateInputType = {
    id?: true
    url?: true
    type?: true
    kind?: true
    order?: true
    productId?: true
    colorId?: true
    colorName?: true
    colorIndex?: true
    _all?: true
  }

  export type ProductImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductImage to aggregate.
     */
    where?: ProductImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductImages
    **/
    _count?: true | ProductImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductImageMaxAggregateInputType
  }

  export type GetProductImageAggregateType<T extends ProductImageAggregateArgs> = {
        [P in keyof T & keyof AggregateProductImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductImage[P]>
      : GetScalarType<T[P], AggregateProductImage[P]>
  }




  export type ProductImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductImageWhereInput
    orderBy?: ProductImageOrderByWithAggregationInput | ProductImageOrderByWithAggregationInput[]
    by: ProductImageScalarFieldEnum[] | ProductImageScalarFieldEnum
    having?: ProductImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductImageCountAggregateInputType | true
    _avg?: ProductImageAvgAggregateInputType
    _sum?: ProductImageSumAggregateInputType
    _min?: ProductImageMinAggregateInputType
    _max?: ProductImageMaxAggregateInputType
  }

  export type ProductImageGroupByOutputType = {
    id: number
    url: string
    type: string
    kind: string
    order: number
    productId: number
    colorId: number | null
    colorName: string | null
    colorIndex: number | null
    _count: ProductImageCountAggregateOutputType | null
    _avg: ProductImageAvgAggregateOutputType | null
    _sum: ProductImageSumAggregateOutputType | null
    _min: ProductImageMinAggregateOutputType | null
    _max: ProductImageMaxAggregateOutputType | null
  }

  type GetProductImageGroupByPayload<T extends ProductImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductImageGroupByOutputType[P]>
            : GetScalarType<T[P], ProductImageGroupByOutputType[P]>
        }
      >
    >


  export type ProductImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    type?: boolean
    kind?: boolean
    order?: boolean
    productId?: boolean
    colorId?: boolean
    colorName?: boolean
    colorIndex?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    color?: boolean | ProductImage$colorArgs<ExtArgs>
  }, ExtArgs["result"]["productImage"]>



  export type ProductImageSelectScalar = {
    id?: boolean
    url?: boolean
    type?: boolean
    kind?: boolean
    order?: boolean
    productId?: boolean
    colorId?: boolean
    colorName?: boolean
    colorIndex?: boolean
  }

  export type ProductImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "type" | "kind" | "order" | "productId" | "colorId" | "colorName" | "colorIndex", ExtArgs["result"]["productImage"]>
  export type ProductImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    color?: boolean | ProductImage$colorArgs<ExtArgs>
  }

  export type $ProductImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductImage"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      color: Prisma.$ProductColorPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string
      type: string
      kind: string
      order: number
      productId: number
      colorId: number | null
      colorName: string | null
      colorIndex: number | null
    }, ExtArgs["result"]["productImage"]>
    composites: {}
  }

  type ProductImageGetPayload<S extends boolean | null | undefined | ProductImageDefaultArgs> = $Result.GetResult<Prisma.$ProductImagePayload, S>

  type ProductImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductImageCountAggregateInputType | true
    }

  export interface ProductImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductImage'], meta: { name: 'ProductImage' } }
    /**
     * Find zero or one ProductImage that matches the filter.
     * @param {ProductImageFindUniqueArgs} args - Arguments to find a ProductImage
     * @example
     * // Get one ProductImage
     * const productImage = await prisma.productImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductImageFindUniqueArgs>(args: SelectSubset<T, ProductImageFindUniqueArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductImageFindUniqueOrThrowArgs} args - Arguments to find a ProductImage
     * @example
     * // Get one ProductImage
     * const productImage = await prisma.productImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageFindFirstArgs} args - Arguments to find a ProductImage
     * @example
     * // Get one ProductImage
     * const productImage = await prisma.productImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductImageFindFirstArgs>(args?: SelectSubset<T, ProductImageFindFirstArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageFindFirstOrThrowArgs} args - Arguments to find a ProductImage
     * @example
     * // Get one ProductImage
     * const productImage = await prisma.productImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductImages
     * const productImages = await prisma.productImage.findMany()
     * 
     * // Get first 10 ProductImages
     * const productImages = await prisma.productImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productImageWithIdOnly = await prisma.productImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductImageFindManyArgs>(args?: SelectSubset<T, ProductImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductImage.
     * @param {ProductImageCreateArgs} args - Arguments to create a ProductImage.
     * @example
     * // Create one ProductImage
     * const ProductImage = await prisma.productImage.create({
     *   data: {
     *     // ... data to create a ProductImage
     *   }
     * })
     * 
     */
    create<T extends ProductImageCreateArgs>(args: SelectSubset<T, ProductImageCreateArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductImages.
     * @param {ProductImageCreateManyArgs} args - Arguments to create many ProductImages.
     * @example
     * // Create many ProductImages
     * const productImage = await prisma.productImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductImageCreateManyArgs>(args?: SelectSubset<T, ProductImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductImage.
     * @param {ProductImageDeleteArgs} args - Arguments to delete one ProductImage.
     * @example
     * // Delete one ProductImage
     * const ProductImage = await prisma.productImage.delete({
     *   where: {
     *     // ... filter to delete one ProductImage
     *   }
     * })
     * 
     */
    delete<T extends ProductImageDeleteArgs>(args: SelectSubset<T, ProductImageDeleteArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductImage.
     * @param {ProductImageUpdateArgs} args - Arguments to update one ProductImage.
     * @example
     * // Update one ProductImage
     * const productImage = await prisma.productImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductImageUpdateArgs>(args: SelectSubset<T, ProductImageUpdateArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductImages.
     * @param {ProductImageDeleteManyArgs} args - Arguments to filter ProductImages to delete.
     * @example
     * // Delete a few ProductImages
     * const { count } = await prisma.productImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductImageDeleteManyArgs>(args?: SelectSubset<T, ProductImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductImages
     * const productImage = await prisma.productImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductImageUpdateManyArgs>(args: SelectSubset<T, ProductImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductImage.
     * @param {ProductImageUpsertArgs} args - Arguments to update or create a ProductImage.
     * @example
     * // Update or create a ProductImage
     * const productImage = await prisma.productImage.upsert({
     *   create: {
     *     // ... data to create a ProductImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductImage we want to update
     *   }
     * })
     */
    upsert<T extends ProductImageUpsertArgs>(args: SelectSubset<T, ProductImageUpsertArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageCountArgs} args - Arguments to filter ProductImages to count.
     * @example
     * // Count the number of ProductImages
     * const count = await prisma.productImage.count({
     *   where: {
     *     // ... the filter for the ProductImages we want to count
     *   }
     * })
    **/
    count<T extends ProductImageCountArgs>(
      args?: Subset<T, ProductImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductImageAggregateArgs>(args: Subset<T, ProductImageAggregateArgs>): Prisma.PrismaPromise<GetProductImageAggregateType<T>>

    /**
     * Group by ProductImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageGroupByArgs} args - Group by arguments.
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
      T extends ProductImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductImageGroupByArgs['orderBy'] }
        : { orderBy?: ProductImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductImage model
   */
  readonly fields: ProductImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    color<T extends ProductImage$colorArgs<ExtArgs> = {}>(args?: Subset<T, ProductImage$colorArgs<ExtArgs>>): Prisma__ProductColorClient<$Result.GetResult<Prisma.$ProductColorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProductImage model
   */
  interface ProductImageFieldRefs {
    readonly id: FieldRef<"ProductImage", 'Int'>
    readonly url: FieldRef<"ProductImage", 'String'>
    readonly type: FieldRef<"ProductImage", 'String'>
    readonly kind: FieldRef<"ProductImage", 'String'>
    readonly order: FieldRef<"ProductImage", 'Int'>
    readonly productId: FieldRef<"ProductImage", 'Int'>
    readonly colorId: FieldRef<"ProductImage", 'Int'>
    readonly colorName: FieldRef<"ProductImage", 'String'>
    readonly colorIndex: FieldRef<"ProductImage", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ProductImage findUnique
   */
  export type ProductImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductImage to fetch.
     */
    where: ProductImageWhereUniqueInput
  }

  /**
   * ProductImage findUniqueOrThrow
   */
  export type ProductImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductImage to fetch.
     */
    where: ProductImageWhereUniqueInput
  }

  /**
   * ProductImage findFirst
   */
  export type ProductImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductImage to fetch.
     */
    where?: ProductImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductImages.
     */
    cursor?: ProductImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductImages.
     */
    distinct?: ProductImageScalarFieldEnum | ProductImageScalarFieldEnum[]
  }

  /**
   * ProductImage findFirstOrThrow
   */
  export type ProductImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductImage to fetch.
     */
    where?: ProductImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductImages.
     */
    cursor?: ProductImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductImages.
     */
    distinct?: ProductImageScalarFieldEnum | ProductImageScalarFieldEnum[]
  }

  /**
   * ProductImage findMany
   */
  export type ProductImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductImages to fetch.
     */
    where?: ProductImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductImages.
     */
    cursor?: ProductImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    distinct?: ProductImageScalarFieldEnum | ProductImageScalarFieldEnum[]
  }

  /**
   * ProductImage create
   */
  export type ProductImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductImage.
     */
    data: XOR<ProductImageCreateInput, ProductImageUncheckedCreateInput>
  }

  /**
   * ProductImage createMany
   */
  export type ProductImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductImages.
     */
    data: ProductImageCreateManyInput | ProductImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductImage update
   */
  export type ProductImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductImage.
     */
    data: XOR<ProductImageUpdateInput, ProductImageUncheckedUpdateInput>
    /**
     * Choose, which ProductImage to update.
     */
    where: ProductImageWhereUniqueInput
  }

  /**
   * ProductImage updateMany
   */
  export type ProductImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductImages.
     */
    data: XOR<ProductImageUpdateManyMutationInput, ProductImageUncheckedUpdateManyInput>
    /**
     * Filter which ProductImages to update
     */
    where?: ProductImageWhereInput
    /**
     * Limit how many ProductImages to update.
     */
    limit?: number
  }

  /**
   * ProductImage upsert
   */
  export type ProductImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductImage to update in case it exists.
     */
    where: ProductImageWhereUniqueInput
    /**
     * In case the ProductImage found by the `where` argument doesn't exist, create a new ProductImage with this data.
     */
    create: XOR<ProductImageCreateInput, ProductImageUncheckedCreateInput>
    /**
     * In case the ProductImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductImageUpdateInput, ProductImageUncheckedUpdateInput>
  }

  /**
   * ProductImage delete
   */
  export type ProductImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter which ProductImage to delete.
     */
    where: ProductImageWhereUniqueInput
  }

  /**
   * ProductImage deleteMany
   */
  export type ProductImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductImages to delete
     */
    where?: ProductImageWhereInput
    /**
     * Limit how many ProductImages to delete.
     */
    limit?: number
  }

  /**
   * ProductImage.color
   */
  export type ProductImage$colorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductColor
     */
    select?: ProductColorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductColor
     */
    omit?: ProductColorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductColorInclude<ExtArgs> | null
    where?: ProductColorWhereInput
  }

  /**
   * ProductImage without action
   */
  export type ProductImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
  }


  /**
   * Model ProductStock
   */

  export type AggregateProductStock = {
    _count: ProductStockCountAggregateOutputType | null
    _avg: ProductStockAvgAggregateOutputType | null
    _sum: ProductStockSumAggregateOutputType | null
    _min: ProductStockMinAggregateOutputType | null
    _max: ProductStockMaxAggregateOutputType | null
  }

  export type ProductStockAvgAggregateOutputType = {
    id: number | null
    sizeId: number | null
    price: number | null
    sku: number | null
    productId: number | null
    colorId: number | null
  }

  export type ProductStockSumAggregateOutputType = {
    id: number | null
    sizeId: number | null
    price: number | null
    sku: number | null
    productId: number | null
    colorId: number | null
  }

  export type ProductStockMinAggregateOutputType = {
    id: number | null
    sizeId: number | null
    name: string | null
    availability: string | null
    price: number | null
    sku: number | null
    productId: number | null
    colorId: number | null
    colorName: string | null
  }

  export type ProductStockMaxAggregateOutputType = {
    id: number | null
    sizeId: number | null
    name: string | null
    availability: string | null
    price: number | null
    sku: number | null
    productId: number | null
    colorId: number | null
    colorName: string | null
  }

  export type ProductStockCountAggregateOutputType = {
    id: number
    sizeId: number
    name: number
    availability: number
    price: number
    sku: number
    productId: number
    colorId: number
    colorName: number
    _all: number
  }


  export type ProductStockAvgAggregateInputType = {
    id?: true
    sizeId?: true
    price?: true
    sku?: true
    productId?: true
    colorId?: true
  }

  export type ProductStockSumAggregateInputType = {
    id?: true
    sizeId?: true
    price?: true
    sku?: true
    productId?: true
    colorId?: true
  }

  export type ProductStockMinAggregateInputType = {
    id?: true
    sizeId?: true
    name?: true
    availability?: true
    price?: true
    sku?: true
    productId?: true
    colorId?: true
    colorName?: true
  }

  export type ProductStockMaxAggregateInputType = {
    id?: true
    sizeId?: true
    name?: true
    availability?: true
    price?: true
    sku?: true
    productId?: true
    colorId?: true
    colorName?: true
  }

  export type ProductStockCountAggregateInputType = {
    id?: true
    sizeId?: true
    name?: true
    availability?: true
    price?: true
    sku?: true
    productId?: true
    colorId?: true
    colorName?: true
    _all?: true
  }

  export type ProductStockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductStock to aggregate.
     */
    where?: ProductStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductStocks to fetch.
     */
    orderBy?: ProductStockOrderByWithRelationInput | ProductStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductStocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductStocks
    **/
    _count?: true | ProductStockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductStockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductStockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductStockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductStockMaxAggregateInputType
  }

  export type GetProductStockAggregateType<T extends ProductStockAggregateArgs> = {
        [P in keyof T & keyof AggregateProductStock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductStock[P]>
      : GetScalarType<T[P], AggregateProductStock[P]>
  }




  export type ProductStockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductStockWhereInput
    orderBy?: ProductStockOrderByWithAggregationInput | ProductStockOrderByWithAggregationInput[]
    by: ProductStockScalarFieldEnum[] | ProductStockScalarFieldEnum
    having?: ProductStockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductStockCountAggregateInputType | true
    _avg?: ProductStockAvgAggregateInputType
    _sum?: ProductStockSumAggregateInputType
    _min?: ProductStockMinAggregateInputType
    _max?: ProductStockMaxAggregateInputType
  }

  export type ProductStockGroupByOutputType = {
    id: number
    sizeId: number
    name: string
    availability: string
    price: number | null
    sku: number | null
    productId: number
    colorId: number | null
    colorName: string | null
    _count: ProductStockCountAggregateOutputType | null
    _avg: ProductStockAvgAggregateOutputType | null
    _sum: ProductStockSumAggregateOutputType | null
    _min: ProductStockMinAggregateOutputType | null
    _max: ProductStockMaxAggregateOutputType | null
  }

  type GetProductStockGroupByPayload<T extends ProductStockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductStockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductStockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductStockGroupByOutputType[P]>
            : GetScalarType<T[P], ProductStockGroupByOutputType[P]>
        }
      >
    >


  export type ProductStockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sizeId?: boolean
    name?: boolean
    availability?: boolean
    price?: boolean
    sku?: boolean
    productId?: boolean
    colorId?: boolean
    colorName?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    color?: boolean | ProductStock$colorArgs<ExtArgs>
  }, ExtArgs["result"]["productStock"]>



  export type ProductStockSelectScalar = {
    id?: boolean
    sizeId?: boolean
    name?: boolean
    availability?: boolean
    price?: boolean
    sku?: boolean
    productId?: boolean
    colorId?: boolean
    colorName?: boolean
  }

  export type ProductStockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sizeId" | "name" | "availability" | "price" | "sku" | "productId" | "colorId" | "colorName", ExtArgs["result"]["productStock"]>
  export type ProductStockInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    color?: boolean | ProductStock$colorArgs<ExtArgs>
  }

  export type $ProductStockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductStock"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      color: Prisma.$ProductColorPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sizeId: number
      name: string
      availability: string
      price: number | null
      sku: number | null
      productId: number
      colorId: number | null
      colorName: string | null
    }, ExtArgs["result"]["productStock"]>
    composites: {}
  }

  type ProductStockGetPayload<S extends boolean | null | undefined | ProductStockDefaultArgs> = $Result.GetResult<Prisma.$ProductStockPayload, S>

  type ProductStockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductStockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductStockCountAggregateInputType | true
    }

  export interface ProductStockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductStock'], meta: { name: 'ProductStock' } }
    /**
     * Find zero or one ProductStock that matches the filter.
     * @param {ProductStockFindUniqueArgs} args - Arguments to find a ProductStock
     * @example
     * // Get one ProductStock
     * const productStock = await prisma.productStock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductStockFindUniqueArgs>(args: SelectSubset<T, ProductStockFindUniqueArgs<ExtArgs>>): Prisma__ProductStockClient<$Result.GetResult<Prisma.$ProductStockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductStock that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductStockFindUniqueOrThrowArgs} args - Arguments to find a ProductStock
     * @example
     * // Get one ProductStock
     * const productStock = await prisma.productStock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductStockFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductStockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductStockClient<$Result.GetResult<Prisma.$ProductStockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductStock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductStockFindFirstArgs} args - Arguments to find a ProductStock
     * @example
     * // Get one ProductStock
     * const productStock = await prisma.productStock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductStockFindFirstArgs>(args?: SelectSubset<T, ProductStockFindFirstArgs<ExtArgs>>): Prisma__ProductStockClient<$Result.GetResult<Prisma.$ProductStockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductStock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductStockFindFirstOrThrowArgs} args - Arguments to find a ProductStock
     * @example
     * // Get one ProductStock
     * const productStock = await prisma.productStock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductStockFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductStockFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductStockClient<$Result.GetResult<Prisma.$ProductStockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductStocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductStockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductStocks
     * const productStocks = await prisma.productStock.findMany()
     * 
     * // Get first 10 ProductStocks
     * const productStocks = await prisma.productStock.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productStockWithIdOnly = await prisma.productStock.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductStockFindManyArgs>(args?: SelectSubset<T, ProductStockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductStockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductStock.
     * @param {ProductStockCreateArgs} args - Arguments to create a ProductStock.
     * @example
     * // Create one ProductStock
     * const ProductStock = await prisma.productStock.create({
     *   data: {
     *     // ... data to create a ProductStock
     *   }
     * })
     * 
     */
    create<T extends ProductStockCreateArgs>(args: SelectSubset<T, ProductStockCreateArgs<ExtArgs>>): Prisma__ProductStockClient<$Result.GetResult<Prisma.$ProductStockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductStocks.
     * @param {ProductStockCreateManyArgs} args - Arguments to create many ProductStocks.
     * @example
     * // Create many ProductStocks
     * const productStock = await prisma.productStock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductStockCreateManyArgs>(args?: SelectSubset<T, ProductStockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductStock.
     * @param {ProductStockDeleteArgs} args - Arguments to delete one ProductStock.
     * @example
     * // Delete one ProductStock
     * const ProductStock = await prisma.productStock.delete({
     *   where: {
     *     // ... filter to delete one ProductStock
     *   }
     * })
     * 
     */
    delete<T extends ProductStockDeleteArgs>(args: SelectSubset<T, ProductStockDeleteArgs<ExtArgs>>): Prisma__ProductStockClient<$Result.GetResult<Prisma.$ProductStockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductStock.
     * @param {ProductStockUpdateArgs} args - Arguments to update one ProductStock.
     * @example
     * // Update one ProductStock
     * const productStock = await prisma.productStock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductStockUpdateArgs>(args: SelectSubset<T, ProductStockUpdateArgs<ExtArgs>>): Prisma__ProductStockClient<$Result.GetResult<Prisma.$ProductStockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductStocks.
     * @param {ProductStockDeleteManyArgs} args - Arguments to filter ProductStocks to delete.
     * @example
     * // Delete a few ProductStocks
     * const { count } = await prisma.productStock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductStockDeleteManyArgs>(args?: SelectSubset<T, ProductStockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductStocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductStockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductStocks
     * const productStock = await prisma.productStock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductStockUpdateManyArgs>(args: SelectSubset<T, ProductStockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductStock.
     * @param {ProductStockUpsertArgs} args - Arguments to update or create a ProductStock.
     * @example
     * // Update or create a ProductStock
     * const productStock = await prisma.productStock.upsert({
     *   create: {
     *     // ... data to create a ProductStock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductStock we want to update
     *   }
     * })
     */
    upsert<T extends ProductStockUpsertArgs>(args: SelectSubset<T, ProductStockUpsertArgs<ExtArgs>>): Prisma__ProductStockClient<$Result.GetResult<Prisma.$ProductStockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductStocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductStockCountArgs} args - Arguments to filter ProductStocks to count.
     * @example
     * // Count the number of ProductStocks
     * const count = await prisma.productStock.count({
     *   where: {
     *     // ... the filter for the ProductStocks we want to count
     *   }
     * })
    **/
    count<T extends ProductStockCountArgs>(
      args?: Subset<T, ProductStockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductStockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductStock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductStockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductStockAggregateArgs>(args: Subset<T, ProductStockAggregateArgs>): Prisma.PrismaPromise<GetProductStockAggregateType<T>>

    /**
     * Group by ProductStock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductStockGroupByArgs} args - Group by arguments.
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
      T extends ProductStockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductStockGroupByArgs['orderBy'] }
        : { orderBy?: ProductStockGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductStockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductStockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductStock model
   */
  readonly fields: ProductStockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductStock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductStockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    color<T extends ProductStock$colorArgs<ExtArgs> = {}>(args?: Subset<T, ProductStock$colorArgs<ExtArgs>>): Prisma__ProductColorClient<$Result.GetResult<Prisma.$ProductColorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProductStock model
   */
  interface ProductStockFieldRefs {
    readonly id: FieldRef<"ProductStock", 'Int'>
    readonly sizeId: FieldRef<"ProductStock", 'Int'>
    readonly name: FieldRef<"ProductStock", 'String'>
    readonly availability: FieldRef<"ProductStock", 'String'>
    readonly price: FieldRef<"ProductStock", 'Int'>
    readonly sku: FieldRef<"ProductStock", 'Int'>
    readonly productId: FieldRef<"ProductStock", 'Int'>
    readonly colorId: FieldRef<"ProductStock", 'Int'>
    readonly colorName: FieldRef<"ProductStock", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProductStock findUnique
   */
  export type ProductStockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductStock
     */
    select?: ProductStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductStock
     */
    omit?: ProductStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductStockInclude<ExtArgs> | null
    /**
     * Filter, which ProductStock to fetch.
     */
    where: ProductStockWhereUniqueInput
  }

  /**
   * ProductStock findUniqueOrThrow
   */
  export type ProductStockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductStock
     */
    select?: ProductStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductStock
     */
    omit?: ProductStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductStockInclude<ExtArgs> | null
    /**
     * Filter, which ProductStock to fetch.
     */
    where: ProductStockWhereUniqueInput
  }

  /**
   * ProductStock findFirst
   */
  export type ProductStockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductStock
     */
    select?: ProductStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductStock
     */
    omit?: ProductStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductStockInclude<ExtArgs> | null
    /**
     * Filter, which ProductStock to fetch.
     */
    where?: ProductStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductStocks to fetch.
     */
    orderBy?: ProductStockOrderByWithRelationInput | ProductStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductStocks.
     */
    cursor?: ProductStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductStocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductStocks.
     */
    distinct?: ProductStockScalarFieldEnum | ProductStockScalarFieldEnum[]
  }

  /**
   * ProductStock findFirstOrThrow
   */
  export type ProductStockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductStock
     */
    select?: ProductStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductStock
     */
    omit?: ProductStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductStockInclude<ExtArgs> | null
    /**
     * Filter, which ProductStock to fetch.
     */
    where?: ProductStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductStocks to fetch.
     */
    orderBy?: ProductStockOrderByWithRelationInput | ProductStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductStocks.
     */
    cursor?: ProductStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductStocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductStocks.
     */
    distinct?: ProductStockScalarFieldEnum | ProductStockScalarFieldEnum[]
  }

  /**
   * ProductStock findMany
   */
  export type ProductStockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductStock
     */
    select?: ProductStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductStock
     */
    omit?: ProductStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductStockInclude<ExtArgs> | null
    /**
     * Filter, which ProductStocks to fetch.
     */
    where?: ProductStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductStocks to fetch.
     */
    orderBy?: ProductStockOrderByWithRelationInput | ProductStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductStocks.
     */
    cursor?: ProductStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductStocks.
     */
    skip?: number
    distinct?: ProductStockScalarFieldEnum | ProductStockScalarFieldEnum[]
  }

  /**
   * ProductStock create
   */
  export type ProductStockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductStock
     */
    select?: ProductStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductStock
     */
    omit?: ProductStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductStockInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductStock.
     */
    data: XOR<ProductStockCreateInput, ProductStockUncheckedCreateInput>
  }

  /**
   * ProductStock createMany
   */
  export type ProductStockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductStocks.
     */
    data: ProductStockCreateManyInput | ProductStockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductStock update
   */
  export type ProductStockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductStock
     */
    select?: ProductStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductStock
     */
    omit?: ProductStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductStockInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductStock.
     */
    data: XOR<ProductStockUpdateInput, ProductStockUncheckedUpdateInput>
    /**
     * Choose, which ProductStock to update.
     */
    where: ProductStockWhereUniqueInput
  }

  /**
   * ProductStock updateMany
   */
  export type ProductStockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductStocks.
     */
    data: XOR<ProductStockUpdateManyMutationInput, ProductStockUncheckedUpdateManyInput>
    /**
     * Filter which ProductStocks to update
     */
    where?: ProductStockWhereInput
    /**
     * Limit how many ProductStocks to update.
     */
    limit?: number
  }

  /**
   * ProductStock upsert
   */
  export type ProductStockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductStock
     */
    select?: ProductStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductStock
     */
    omit?: ProductStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductStockInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductStock to update in case it exists.
     */
    where: ProductStockWhereUniqueInput
    /**
     * In case the ProductStock found by the `where` argument doesn't exist, create a new ProductStock with this data.
     */
    create: XOR<ProductStockCreateInput, ProductStockUncheckedCreateInput>
    /**
     * In case the ProductStock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductStockUpdateInput, ProductStockUncheckedUpdateInput>
  }

  /**
   * ProductStock delete
   */
  export type ProductStockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductStock
     */
    select?: ProductStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductStock
     */
    omit?: ProductStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductStockInclude<ExtArgs> | null
    /**
     * Filter which ProductStock to delete.
     */
    where: ProductStockWhereUniqueInput
  }

  /**
   * ProductStock deleteMany
   */
  export type ProductStockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductStocks to delete
     */
    where?: ProductStockWhereInput
    /**
     * Limit how many ProductStocks to delete.
     */
    limit?: number
  }

  /**
   * ProductStock.color
   */
  export type ProductStock$colorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductColor
     */
    select?: ProductColorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductColor
     */
    omit?: ProductColorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductColorInclude<ExtArgs> | null
    where?: ProductColorWhereInput
  }

  /**
   * ProductStock without action
   */
  export type ProductStockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductStock
     */
    select?: ProductStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductStock
     */
    omit?: ProductStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductStockInclude<ExtArgs> | null
  }


  /**
   * Model DataSync
   */

  export type AggregateDataSync = {
    _count: DataSyncCountAggregateOutputType | null
    _avg: DataSyncAvgAggregateOutputType | null
    _sum: DataSyncSumAggregateOutputType | null
    _min: DataSyncMinAggregateOutputType | null
    _max: DataSyncMaxAggregateOutputType | null
  }

  export type DataSyncAvgAggregateOutputType = {
    id: number | null
    itemsCount: number | null
  }

  export type DataSyncSumAggregateOutputType = {
    id: number | null
    itemsCount: number | null
  }

  export type DataSyncMinAggregateOutputType = {
    id: number | null
    syncType: string | null
    status: string | null
    itemsCount: number | null
    errorMessage: string | null
    timestamp: Date | null
  }

  export type DataSyncMaxAggregateOutputType = {
    id: number | null
    syncType: string | null
    status: string | null
    itemsCount: number | null
    errorMessage: string | null
    timestamp: Date | null
  }

  export type DataSyncCountAggregateOutputType = {
    id: number
    syncType: number
    status: number
    itemsCount: number
    errorMessage: number
    timestamp: number
    _all: number
  }


  export type DataSyncAvgAggregateInputType = {
    id?: true
    itemsCount?: true
  }

  export type DataSyncSumAggregateInputType = {
    id?: true
    itemsCount?: true
  }

  export type DataSyncMinAggregateInputType = {
    id?: true
    syncType?: true
    status?: true
    itemsCount?: true
    errorMessage?: true
    timestamp?: true
  }

  export type DataSyncMaxAggregateInputType = {
    id?: true
    syncType?: true
    status?: true
    itemsCount?: true
    errorMessage?: true
    timestamp?: true
  }

  export type DataSyncCountAggregateInputType = {
    id?: true
    syncType?: true
    status?: true
    itemsCount?: true
    errorMessage?: true
    timestamp?: true
    _all?: true
  }

  export type DataSyncAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DataSync to aggregate.
     */
    where?: DataSyncWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataSyncs to fetch.
     */
    orderBy?: DataSyncOrderByWithRelationInput | DataSyncOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DataSyncWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataSyncs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataSyncs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DataSyncs
    **/
    _count?: true | DataSyncCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DataSyncAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DataSyncSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DataSyncMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DataSyncMaxAggregateInputType
  }

  export type GetDataSyncAggregateType<T extends DataSyncAggregateArgs> = {
        [P in keyof T & keyof AggregateDataSync]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDataSync[P]>
      : GetScalarType<T[P], AggregateDataSync[P]>
  }




  export type DataSyncGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DataSyncWhereInput
    orderBy?: DataSyncOrderByWithAggregationInput | DataSyncOrderByWithAggregationInput[]
    by: DataSyncScalarFieldEnum[] | DataSyncScalarFieldEnum
    having?: DataSyncScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DataSyncCountAggregateInputType | true
    _avg?: DataSyncAvgAggregateInputType
    _sum?: DataSyncSumAggregateInputType
    _min?: DataSyncMinAggregateInputType
    _max?: DataSyncMaxAggregateInputType
  }

  export type DataSyncGroupByOutputType = {
    id: number
    syncType: string
    status: string
    itemsCount: number | null
    errorMessage: string | null
    timestamp: Date
    _count: DataSyncCountAggregateOutputType | null
    _avg: DataSyncAvgAggregateOutputType | null
    _sum: DataSyncSumAggregateOutputType | null
    _min: DataSyncMinAggregateOutputType | null
    _max: DataSyncMaxAggregateOutputType | null
  }

  type GetDataSyncGroupByPayload<T extends DataSyncGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DataSyncGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DataSyncGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DataSyncGroupByOutputType[P]>
            : GetScalarType<T[P], DataSyncGroupByOutputType[P]>
        }
      >
    >


  export type DataSyncSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    syncType?: boolean
    status?: boolean
    itemsCount?: boolean
    errorMessage?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["dataSync"]>



  export type DataSyncSelectScalar = {
    id?: boolean
    syncType?: boolean
    status?: boolean
    itemsCount?: boolean
    errorMessage?: boolean
    timestamp?: boolean
  }

  export type DataSyncOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "syncType" | "status" | "itemsCount" | "errorMessage" | "timestamp", ExtArgs["result"]["dataSync"]>

  export type $DataSyncPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DataSync"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      syncType: string
      status: string
      itemsCount: number | null
      errorMessage: string | null
      timestamp: Date
    }, ExtArgs["result"]["dataSync"]>
    composites: {}
  }

  type DataSyncGetPayload<S extends boolean | null | undefined | DataSyncDefaultArgs> = $Result.GetResult<Prisma.$DataSyncPayload, S>

  type DataSyncCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DataSyncFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DataSyncCountAggregateInputType | true
    }

  export interface DataSyncDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DataSync'], meta: { name: 'DataSync' } }
    /**
     * Find zero or one DataSync that matches the filter.
     * @param {DataSyncFindUniqueArgs} args - Arguments to find a DataSync
     * @example
     * // Get one DataSync
     * const dataSync = await prisma.dataSync.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DataSyncFindUniqueArgs>(args: SelectSubset<T, DataSyncFindUniqueArgs<ExtArgs>>): Prisma__DataSyncClient<$Result.GetResult<Prisma.$DataSyncPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DataSync that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DataSyncFindUniqueOrThrowArgs} args - Arguments to find a DataSync
     * @example
     * // Get one DataSync
     * const dataSync = await prisma.dataSync.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DataSyncFindUniqueOrThrowArgs>(args: SelectSubset<T, DataSyncFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DataSyncClient<$Result.GetResult<Prisma.$DataSyncPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DataSync that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataSyncFindFirstArgs} args - Arguments to find a DataSync
     * @example
     * // Get one DataSync
     * const dataSync = await prisma.dataSync.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DataSyncFindFirstArgs>(args?: SelectSubset<T, DataSyncFindFirstArgs<ExtArgs>>): Prisma__DataSyncClient<$Result.GetResult<Prisma.$DataSyncPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DataSync that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataSyncFindFirstOrThrowArgs} args - Arguments to find a DataSync
     * @example
     * // Get one DataSync
     * const dataSync = await prisma.dataSync.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DataSyncFindFirstOrThrowArgs>(args?: SelectSubset<T, DataSyncFindFirstOrThrowArgs<ExtArgs>>): Prisma__DataSyncClient<$Result.GetResult<Prisma.$DataSyncPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DataSyncs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataSyncFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DataSyncs
     * const dataSyncs = await prisma.dataSync.findMany()
     * 
     * // Get first 10 DataSyncs
     * const dataSyncs = await prisma.dataSync.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dataSyncWithIdOnly = await prisma.dataSync.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DataSyncFindManyArgs>(args?: SelectSubset<T, DataSyncFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataSyncPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DataSync.
     * @param {DataSyncCreateArgs} args - Arguments to create a DataSync.
     * @example
     * // Create one DataSync
     * const DataSync = await prisma.dataSync.create({
     *   data: {
     *     // ... data to create a DataSync
     *   }
     * })
     * 
     */
    create<T extends DataSyncCreateArgs>(args: SelectSubset<T, DataSyncCreateArgs<ExtArgs>>): Prisma__DataSyncClient<$Result.GetResult<Prisma.$DataSyncPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DataSyncs.
     * @param {DataSyncCreateManyArgs} args - Arguments to create many DataSyncs.
     * @example
     * // Create many DataSyncs
     * const dataSync = await prisma.dataSync.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DataSyncCreateManyArgs>(args?: SelectSubset<T, DataSyncCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DataSync.
     * @param {DataSyncDeleteArgs} args - Arguments to delete one DataSync.
     * @example
     * // Delete one DataSync
     * const DataSync = await prisma.dataSync.delete({
     *   where: {
     *     // ... filter to delete one DataSync
     *   }
     * })
     * 
     */
    delete<T extends DataSyncDeleteArgs>(args: SelectSubset<T, DataSyncDeleteArgs<ExtArgs>>): Prisma__DataSyncClient<$Result.GetResult<Prisma.$DataSyncPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DataSync.
     * @param {DataSyncUpdateArgs} args - Arguments to update one DataSync.
     * @example
     * // Update one DataSync
     * const dataSync = await prisma.dataSync.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DataSyncUpdateArgs>(args: SelectSubset<T, DataSyncUpdateArgs<ExtArgs>>): Prisma__DataSyncClient<$Result.GetResult<Prisma.$DataSyncPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DataSyncs.
     * @param {DataSyncDeleteManyArgs} args - Arguments to filter DataSyncs to delete.
     * @example
     * // Delete a few DataSyncs
     * const { count } = await prisma.dataSync.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DataSyncDeleteManyArgs>(args?: SelectSubset<T, DataSyncDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DataSyncs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataSyncUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DataSyncs
     * const dataSync = await prisma.dataSync.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DataSyncUpdateManyArgs>(args: SelectSubset<T, DataSyncUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DataSync.
     * @param {DataSyncUpsertArgs} args - Arguments to update or create a DataSync.
     * @example
     * // Update or create a DataSync
     * const dataSync = await prisma.dataSync.upsert({
     *   create: {
     *     // ... data to create a DataSync
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DataSync we want to update
     *   }
     * })
     */
    upsert<T extends DataSyncUpsertArgs>(args: SelectSubset<T, DataSyncUpsertArgs<ExtArgs>>): Prisma__DataSyncClient<$Result.GetResult<Prisma.$DataSyncPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DataSyncs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataSyncCountArgs} args - Arguments to filter DataSyncs to count.
     * @example
     * // Count the number of DataSyncs
     * const count = await prisma.dataSync.count({
     *   where: {
     *     // ... the filter for the DataSyncs we want to count
     *   }
     * })
    **/
    count<T extends DataSyncCountArgs>(
      args?: Subset<T, DataSyncCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DataSyncCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DataSync.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataSyncAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DataSyncAggregateArgs>(args: Subset<T, DataSyncAggregateArgs>): Prisma.PrismaPromise<GetDataSyncAggregateType<T>>

    /**
     * Group by DataSync.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataSyncGroupByArgs} args - Group by arguments.
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
      T extends DataSyncGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DataSyncGroupByArgs['orderBy'] }
        : { orderBy?: DataSyncGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DataSyncGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDataSyncGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DataSync model
   */
  readonly fields: DataSyncFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DataSync.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DataSyncClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the DataSync model
   */
  interface DataSyncFieldRefs {
    readonly id: FieldRef<"DataSync", 'Int'>
    readonly syncType: FieldRef<"DataSync", 'String'>
    readonly status: FieldRef<"DataSync", 'String'>
    readonly itemsCount: FieldRef<"DataSync", 'Int'>
    readonly errorMessage: FieldRef<"DataSync", 'String'>
    readonly timestamp: FieldRef<"DataSync", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DataSync findUnique
   */
  export type DataSyncFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataSync
     */
    select?: DataSyncSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataSync
     */
    omit?: DataSyncOmit<ExtArgs> | null
    /**
     * Filter, which DataSync to fetch.
     */
    where: DataSyncWhereUniqueInput
  }

  /**
   * DataSync findUniqueOrThrow
   */
  export type DataSyncFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataSync
     */
    select?: DataSyncSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataSync
     */
    omit?: DataSyncOmit<ExtArgs> | null
    /**
     * Filter, which DataSync to fetch.
     */
    where: DataSyncWhereUniqueInput
  }

  /**
   * DataSync findFirst
   */
  export type DataSyncFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataSync
     */
    select?: DataSyncSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataSync
     */
    omit?: DataSyncOmit<ExtArgs> | null
    /**
     * Filter, which DataSync to fetch.
     */
    where?: DataSyncWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataSyncs to fetch.
     */
    orderBy?: DataSyncOrderByWithRelationInput | DataSyncOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DataSyncs.
     */
    cursor?: DataSyncWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataSyncs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataSyncs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DataSyncs.
     */
    distinct?: DataSyncScalarFieldEnum | DataSyncScalarFieldEnum[]
  }

  /**
   * DataSync findFirstOrThrow
   */
  export type DataSyncFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataSync
     */
    select?: DataSyncSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataSync
     */
    omit?: DataSyncOmit<ExtArgs> | null
    /**
     * Filter, which DataSync to fetch.
     */
    where?: DataSyncWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataSyncs to fetch.
     */
    orderBy?: DataSyncOrderByWithRelationInput | DataSyncOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DataSyncs.
     */
    cursor?: DataSyncWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataSyncs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataSyncs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DataSyncs.
     */
    distinct?: DataSyncScalarFieldEnum | DataSyncScalarFieldEnum[]
  }

  /**
   * DataSync findMany
   */
  export type DataSyncFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataSync
     */
    select?: DataSyncSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataSync
     */
    omit?: DataSyncOmit<ExtArgs> | null
    /**
     * Filter, which DataSyncs to fetch.
     */
    where?: DataSyncWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataSyncs to fetch.
     */
    orderBy?: DataSyncOrderByWithRelationInput | DataSyncOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DataSyncs.
     */
    cursor?: DataSyncWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataSyncs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataSyncs.
     */
    skip?: number
    distinct?: DataSyncScalarFieldEnum | DataSyncScalarFieldEnum[]
  }

  /**
   * DataSync create
   */
  export type DataSyncCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataSync
     */
    select?: DataSyncSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataSync
     */
    omit?: DataSyncOmit<ExtArgs> | null
    /**
     * The data needed to create a DataSync.
     */
    data: XOR<DataSyncCreateInput, DataSyncUncheckedCreateInput>
  }

  /**
   * DataSync createMany
   */
  export type DataSyncCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DataSyncs.
     */
    data: DataSyncCreateManyInput | DataSyncCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DataSync update
   */
  export type DataSyncUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataSync
     */
    select?: DataSyncSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataSync
     */
    omit?: DataSyncOmit<ExtArgs> | null
    /**
     * The data needed to update a DataSync.
     */
    data: XOR<DataSyncUpdateInput, DataSyncUncheckedUpdateInput>
    /**
     * Choose, which DataSync to update.
     */
    where: DataSyncWhereUniqueInput
  }

  /**
   * DataSync updateMany
   */
  export type DataSyncUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DataSyncs.
     */
    data: XOR<DataSyncUpdateManyMutationInput, DataSyncUncheckedUpdateManyInput>
    /**
     * Filter which DataSyncs to update
     */
    where?: DataSyncWhereInput
    /**
     * Limit how many DataSyncs to update.
     */
    limit?: number
  }

  /**
   * DataSync upsert
   */
  export type DataSyncUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataSync
     */
    select?: DataSyncSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataSync
     */
    omit?: DataSyncOmit<ExtArgs> | null
    /**
     * The filter to search for the DataSync to update in case it exists.
     */
    where: DataSyncWhereUniqueInput
    /**
     * In case the DataSync found by the `where` argument doesn't exist, create a new DataSync with this data.
     */
    create: XOR<DataSyncCreateInput, DataSyncUncheckedCreateInput>
    /**
     * In case the DataSync was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DataSyncUpdateInput, DataSyncUncheckedUpdateInput>
  }

  /**
   * DataSync delete
   */
  export type DataSyncDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataSync
     */
    select?: DataSyncSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataSync
     */
    omit?: DataSyncOmit<ExtArgs> | null
    /**
     * Filter which DataSync to delete.
     */
    where: DataSyncWhereUniqueInput
  }

  /**
   * DataSync deleteMany
   */
  export type DataSyncDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DataSyncs to delete
     */
    where?: DataSyncWhereInput
    /**
     * Limit how many DataSyncs to delete.
     */
    limit?: number
  }

  /**
   * DataSync without action
   */
  export type DataSyncDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataSync
     */
    select?: DataSyncSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataSync
     */
    omit?: DataSyncOmit<ExtArgs> | null
  }


  /**
   * Model PriceHistory
   */

  export type AggregatePriceHistory = {
    _count: PriceHistoryCountAggregateOutputType | null
    _avg: PriceHistoryAvgAggregateOutputType | null
    _sum: PriceHistorySumAggregateOutputType | null
    _min: PriceHistoryMinAggregateOutputType | null
    _max: PriceHistoryMaxAggregateOutputType | null
  }

  export type PriceHistoryAvgAggregateOutputType = {
    id: number | null
    productId: number | null
    price: number | null
    colorId: number | null
  }

  export type PriceHistorySumAggregateOutputType = {
    id: number | null
    productId: number | null
    price: number | null
    colorId: number | null
  }

  export type PriceHistoryMinAggregateOutputType = {
    id: number | null
    productId: number | null
    price: number | null
    colorId: number | null
    timestamp: Date | null
  }

  export type PriceHistoryMaxAggregateOutputType = {
    id: number | null
    productId: number | null
    price: number | null
    colorId: number | null
    timestamp: Date | null
  }

  export type PriceHistoryCountAggregateOutputType = {
    id: number
    productId: number
    price: number
    colorId: number
    timestamp: number
    _all: number
  }


  export type PriceHistoryAvgAggregateInputType = {
    id?: true
    productId?: true
    price?: true
    colorId?: true
  }

  export type PriceHistorySumAggregateInputType = {
    id?: true
    productId?: true
    price?: true
    colorId?: true
  }

  export type PriceHistoryMinAggregateInputType = {
    id?: true
    productId?: true
    price?: true
    colorId?: true
    timestamp?: true
  }

  export type PriceHistoryMaxAggregateInputType = {
    id?: true
    productId?: true
    price?: true
    colorId?: true
    timestamp?: true
  }

  export type PriceHistoryCountAggregateInputType = {
    id?: true
    productId?: true
    price?: true
    colorId?: true
    timestamp?: true
    _all?: true
  }

  export type PriceHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PriceHistory to aggregate.
     */
    where?: PriceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceHistories to fetch.
     */
    orderBy?: PriceHistoryOrderByWithRelationInput | PriceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PriceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PriceHistories
    **/
    _count?: true | PriceHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PriceHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PriceHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PriceHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PriceHistoryMaxAggregateInputType
  }

  export type GetPriceHistoryAggregateType<T extends PriceHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregatePriceHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePriceHistory[P]>
      : GetScalarType<T[P], AggregatePriceHistory[P]>
  }




  export type PriceHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriceHistoryWhereInput
    orderBy?: PriceHistoryOrderByWithAggregationInput | PriceHistoryOrderByWithAggregationInput[]
    by: PriceHistoryScalarFieldEnum[] | PriceHistoryScalarFieldEnum
    having?: PriceHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PriceHistoryCountAggregateInputType | true
    _avg?: PriceHistoryAvgAggregateInputType
    _sum?: PriceHistorySumAggregateInputType
    _min?: PriceHistoryMinAggregateInputType
    _max?: PriceHistoryMaxAggregateInputType
  }

  export type PriceHistoryGroupByOutputType = {
    id: number
    productId: number
    price: number
    colorId: number | null
    timestamp: Date
    _count: PriceHistoryCountAggregateOutputType | null
    _avg: PriceHistoryAvgAggregateOutputType | null
    _sum: PriceHistorySumAggregateOutputType | null
    _min: PriceHistoryMinAggregateOutputType | null
    _max: PriceHistoryMaxAggregateOutputType | null
  }

  type GetPriceHistoryGroupByPayload<T extends PriceHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PriceHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PriceHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PriceHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], PriceHistoryGroupByOutputType[P]>
        }
      >
    >


  export type PriceHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    price?: boolean
    colorId?: boolean
    timestamp?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    color?: boolean | PriceHistory$colorArgs<ExtArgs>
  }, ExtArgs["result"]["priceHistory"]>



  export type PriceHistorySelectScalar = {
    id?: boolean
    productId?: boolean
    price?: boolean
    colorId?: boolean
    timestamp?: boolean
  }

  export type PriceHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "price" | "colorId" | "timestamp", ExtArgs["result"]["priceHistory"]>
  export type PriceHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    color?: boolean | PriceHistory$colorArgs<ExtArgs>
  }

  export type $PriceHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PriceHistory"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      color: Prisma.$ProductColorPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productId: number
      price: number
      colorId: number | null
      timestamp: Date
    }, ExtArgs["result"]["priceHistory"]>
    composites: {}
  }

  type PriceHistoryGetPayload<S extends boolean | null | undefined | PriceHistoryDefaultArgs> = $Result.GetResult<Prisma.$PriceHistoryPayload, S>

  type PriceHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PriceHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PriceHistoryCountAggregateInputType | true
    }

  export interface PriceHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PriceHistory'], meta: { name: 'PriceHistory' } }
    /**
     * Find zero or one PriceHistory that matches the filter.
     * @param {PriceHistoryFindUniqueArgs} args - Arguments to find a PriceHistory
     * @example
     * // Get one PriceHistory
     * const priceHistory = await prisma.priceHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PriceHistoryFindUniqueArgs>(args: SelectSubset<T, PriceHistoryFindUniqueArgs<ExtArgs>>): Prisma__PriceHistoryClient<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PriceHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PriceHistoryFindUniqueOrThrowArgs} args - Arguments to find a PriceHistory
     * @example
     * // Get one PriceHistory
     * const priceHistory = await prisma.priceHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PriceHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, PriceHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PriceHistoryClient<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PriceHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceHistoryFindFirstArgs} args - Arguments to find a PriceHistory
     * @example
     * // Get one PriceHistory
     * const priceHistory = await prisma.priceHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PriceHistoryFindFirstArgs>(args?: SelectSubset<T, PriceHistoryFindFirstArgs<ExtArgs>>): Prisma__PriceHistoryClient<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PriceHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceHistoryFindFirstOrThrowArgs} args - Arguments to find a PriceHistory
     * @example
     * // Get one PriceHistory
     * const priceHistory = await prisma.priceHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PriceHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, PriceHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__PriceHistoryClient<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PriceHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PriceHistories
     * const priceHistories = await prisma.priceHistory.findMany()
     * 
     * // Get first 10 PriceHistories
     * const priceHistories = await prisma.priceHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const priceHistoryWithIdOnly = await prisma.priceHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PriceHistoryFindManyArgs>(args?: SelectSubset<T, PriceHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PriceHistory.
     * @param {PriceHistoryCreateArgs} args - Arguments to create a PriceHistory.
     * @example
     * // Create one PriceHistory
     * const PriceHistory = await prisma.priceHistory.create({
     *   data: {
     *     // ... data to create a PriceHistory
     *   }
     * })
     * 
     */
    create<T extends PriceHistoryCreateArgs>(args: SelectSubset<T, PriceHistoryCreateArgs<ExtArgs>>): Prisma__PriceHistoryClient<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PriceHistories.
     * @param {PriceHistoryCreateManyArgs} args - Arguments to create many PriceHistories.
     * @example
     * // Create many PriceHistories
     * const priceHistory = await prisma.priceHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PriceHistoryCreateManyArgs>(args?: SelectSubset<T, PriceHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PriceHistory.
     * @param {PriceHistoryDeleteArgs} args - Arguments to delete one PriceHistory.
     * @example
     * // Delete one PriceHistory
     * const PriceHistory = await prisma.priceHistory.delete({
     *   where: {
     *     // ... filter to delete one PriceHistory
     *   }
     * })
     * 
     */
    delete<T extends PriceHistoryDeleteArgs>(args: SelectSubset<T, PriceHistoryDeleteArgs<ExtArgs>>): Prisma__PriceHistoryClient<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PriceHistory.
     * @param {PriceHistoryUpdateArgs} args - Arguments to update one PriceHistory.
     * @example
     * // Update one PriceHistory
     * const priceHistory = await prisma.priceHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PriceHistoryUpdateArgs>(args: SelectSubset<T, PriceHistoryUpdateArgs<ExtArgs>>): Prisma__PriceHistoryClient<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PriceHistories.
     * @param {PriceHistoryDeleteManyArgs} args - Arguments to filter PriceHistories to delete.
     * @example
     * // Delete a few PriceHistories
     * const { count } = await prisma.priceHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PriceHistoryDeleteManyArgs>(args?: SelectSubset<T, PriceHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PriceHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PriceHistories
     * const priceHistory = await prisma.priceHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PriceHistoryUpdateManyArgs>(args: SelectSubset<T, PriceHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PriceHistory.
     * @param {PriceHistoryUpsertArgs} args - Arguments to update or create a PriceHistory.
     * @example
     * // Update or create a PriceHistory
     * const priceHistory = await prisma.priceHistory.upsert({
     *   create: {
     *     // ... data to create a PriceHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PriceHistory we want to update
     *   }
     * })
     */
    upsert<T extends PriceHistoryUpsertArgs>(args: SelectSubset<T, PriceHistoryUpsertArgs<ExtArgs>>): Prisma__PriceHistoryClient<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PriceHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceHistoryCountArgs} args - Arguments to filter PriceHistories to count.
     * @example
     * // Count the number of PriceHistories
     * const count = await prisma.priceHistory.count({
     *   where: {
     *     // ... the filter for the PriceHistories we want to count
     *   }
     * })
    **/
    count<T extends PriceHistoryCountArgs>(
      args?: Subset<T, PriceHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PriceHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PriceHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PriceHistoryAggregateArgs>(args: Subset<T, PriceHistoryAggregateArgs>): Prisma.PrismaPromise<GetPriceHistoryAggregateType<T>>

    /**
     * Group by PriceHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceHistoryGroupByArgs} args - Group by arguments.
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
      T extends PriceHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PriceHistoryGroupByArgs['orderBy'] }
        : { orderBy?: PriceHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PriceHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPriceHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PriceHistory model
   */
  readonly fields: PriceHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PriceHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PriceHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    color<T extends PriceHistory$colorArgs<ExtArgs> = {}>(args?: Subset<T, PriceHistory$colorArgs<ExtArgs>>): Prisma__ProductColorClient<$Result.GetResult<Prisma.$ProductColorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PriceHistory model
   */
  interface PriceHistoryFieldRefs {
    readonly id: FieldRef<"PriceHistory", 'Int'>
    readonly productId: FieldRef<"PriceHistory", 'Int'>
    readonly price: FieldRef<"PriceHistory", 'Int'>
    readonly colorId: FieldRef<"PriceHistory", 'Int'>
    readonly timestamp: FieldRef<"PriceHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PriceHistory findUnique
   */
  export type PriceHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceHistory
     */
    omit?: PriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PriceHistory to fetch.
     */
    where: PriceHistoryWhereUniqueInput
  }

  /**
   * PriceHistory findUniqueOrThrow
   */
  export type PriceHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceHistory
     */
    omit?: PriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PriceHistory to fetch.
     */
    where: PriceHistoryWhereUniqueInput
  }

  /**
   * PriceHistory findFirst
   */
  export type PriceHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceHistory
     */
    omit?: PriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PriceHistory to fetch.
     */
    where?: PriceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceHistories to fetch.
     */
    orderBy?: PriceHistoryOrderByWithRelationInput | PriceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PriceHistories.
     */
    cursor?: PriceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PriceHistories.
     */
    distinct?: PriceHistoryScalarFieldEnum | PriceHistoryScalarFieldEnum[]
  }

  /**
   * PriceHistory findFirstOrThrow
   */
  export type PriceHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceHistory
     */
    omit?: PriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PriceHistory to fetch.
     */
    where?: PriceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceHistories to fetch.
     */
    orderBy?: PriceHistoryOrderByWithRelationInput | PriceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PriceHistories.
     */
    cursor?: PriceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PriceHistories.
     */
    distinct?: PriceHistoryScalarFieldEnum | PriceHistoryScalarFieldEnum[]
  }

  /**
   * PriceHistory findMany
   */
  export type PriceHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceHistory
     */
    omit?: PriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PriceHistories to fetch.
     */
    where?: PriceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceHistories to fetch.
     */
    orderBy?: PriceHistoryOrderByWithRelationInput | PriceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PriceHistories.
     */
    cursor?: PriceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceHistories.
     */
    skip?: number
    distinct?: PriceHistoryScalarFieldEnum | PriceHistoryScalarFieldEnum[]
  }

  /**
   * PriceHistory create
   */
  export type PriceHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceHistory
     */
    omit?: PriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a PriceHistory.
     */
    data: XOR<PriceHistoryCreateInput, PriceHistoryUncheckedCreateInput>
  }

  /**
   * PriceHistory createMany
   */
  export type PriceHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PriceHistories.
     */
    data: PriceHistoryCreateManyInput | PriceHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PriceHistory update
   */
  export type PriceHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceHistory
     */
    omit?: PriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a PriceHistory.
     */
    data: XOR<PriceHistoryUpdateInput, PriceHistoryUncheckedUpdateInput>
    /**
     * Choose, which PriceHistory to update.
     */
    where: PriceHistoryWhereUniqueInput
  }

  /**
   * PriceHistory updateMany
   */
  export type PriceHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PriceHistories.
     */
    data: XOR<PriceHistoryUpdateManyMutationInput, PriceHistoryUncheckedUpdateManyInput>
    /**
     * Filter which PriceHistories to update
     */
    where?: PriceHistoryWhereInput
    /**
     * Limit how many PriceHistories to update.
     */
    limit?: number
  }

  /**
   * PriceHistory upsert
   */
  export type PriceHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceHistory
     */
    omit?: PriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the PriceHistory to update in case it exists.
     */
    where: PriceHistoryWhereUniqueInput
    /**
     * In case the PriceHistory found by the `where` argument doesn't exist, create a new PriceHistory with this data.
     */
    create: XOR<PriceHistoryCreateInput, PriceHistoryUncheckedCreateInput>
    /**
     * In case the PriceHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PriceHistoryUpdateInput, PriceHistoryUncheckedUpdateInput>
  }

  /**
   * PriceHistory delete
   */
  export type PriceHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceHistory
     */
    omit?: PriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    /**
     * Filter which PriceHistory to delete.
     */
    where: PriceHistoryWhereUniqueInput
  }

  /**
   * PriceHistory deleteMany
   */
  export type PriceHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PriceHistories to delete
     */
    where?: PriceHistoryWhereInput
    /**
     * Limit how many PriceHistories to delete.
     */
    limit?: number
  }

  /**
   * PriceHistory.color
   */
  export type PriceHistory$colorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductColor
     */
    select?: ProductColorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductColor
     */
    omit?: ProductColorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductColorInclude<ExtArgs> | null
    where?: ProductColorWhereInput
  }

  /**
   * PriceHistory without action
   */
  export type PriceHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceHistory
     */
    omit?: PriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
  }


  /**
   * Model StockHistory
   */

  export type AggregateStockHistory = {
    _count: StockHistoryCountAggregateOutputType | null
    _avg: StockHistoryAvgAggregateOutputType | null
    _sum: StockHistorySumAggregateOutputType | null
    _min: StockHistoryMinAggregateOutputType | null
    _max: StockHistoryMaxAggregateOutputType | null
  }

  export type StockHistoryAvgAggregateOutputType = {
    id: number | null
    productId: number | null
    sizeId: number | null
    colorId: number | null
  }

  export type StockHistorySumAggregateOutputType = {
    id: number | null
    productId: number | null
    sizeId: number | null
    colorId: number | null
  }

  export type StockHistoryMinAggregateOutputType = {
    id: number | null
    productId: number | null
    sizeId: number | null
    colorId: number | null
    available: boolean | null
    timestamp: Date | null
  }

  export type StockHistoryMaxAggregateOutputType = {
    id: number | null
    productId: number | null
    sizeId: number | null
    colorId: number | null
    available: boolean | null
    timestamp: Date | null
  }

  export type StockHistoryCountAggregateOutputType = {
    id: number
    productId: number
    sizeId: number
    colorId: number
    available: number
    timestamp: number
    _all: number
  }


  export type StockHistoryAvgAggregateInputType = {
    id?: true
    productId?: true
    sizeId?: true
    colorId?: true
  }

  export type StockHistorySumAggregateInputType = {
    id?: true
    productId?: true
    sizeId?: true
    colorId?: true
  }

  export type StockHistoryMinAggregateInputType = {
    id?: true
    productId?: true
    sizeId?: true
    colorId?: true
    available?: true
    timestamp?: true
  }

  export type StockHistoryMaxAggregateInputType = {
    id?: true
    productId?: true
    sizeId?: true
    colorId?: true
    available?: true
    timestamp?: true
  }

  export type StockHistoryCountAggregateInputType = {
    id?: true
    productId?: true
    sizeId?: true
    colorId?: true
    available?: true
    timestamp?: true
    _all?: true
  }

  export type StockHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockHistory to aggregate.
     */
    where?: StockHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockHistories to fetch.
     */
    orderBy?: StockHistoryOrderByWithRelationInput | StockHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StockHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StockHistories
    **/
    _count?: true | StockHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StockHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StockHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StockHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StockHistoryMaxAggregateInputType
  }

  export type GetStockHistoryAggregateType<T extends StockHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateStockHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStockHistory[P]>
      : GetScalarType<T[P], AggregateStockHistory[P]>
  }




  export type StockHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockHistoryWhereInput
    orderBy?: StockHistoryOrderByWithAggregationInput | StockHistoryOrderByWithAggregationInput[]
    by: StockHistoryScalarFieldEnum[] | StockHistoryScalarFieldEnum
    having?: StockHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StockHistoryCountAggregateInputType | true
    _avg?: StockHistoryAvgAggregateInputType
    _sum?: StockHistorySumAggregateInputType
    _min?: StockHistoryMinAggregateInputType
    _max?: StockHistoryMaxAggregateInputType
  }

  export type StockHistoryGroupByOutputType = {
    id: number
    productId: number
    sizeId: number
    colorId: number | null
    available: boolean
    timestamp: Date
    _count: StockHistoryCountAggregateOutputType | null
    _avg: StockHistoryAvgAggregateOutputType | null
    _sum: StockHistorySumAggregateOutputType | null
    _min: StockHistoryMinAggregateOutputType | null
    _max: StockHistoryMaxAggregateOutputType | null
  }

  type GetStockHistoryGroupByPayload<T extends StockHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StockHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StockHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StockHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], StockHistoryGroupByOutputType[P]>
        }
      >
    >


  export type StockHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    sizeId?: boolean
    colorId?: boolean
    available?: boolean
    timestamp?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    color?: boolean | StockHistory$colorArgs<ExtArgs>
  }, ExtArgs["result"]["stockHistory"]>



  export type StockHistorySelectScalar = {
    id?: boolean
    productId?: boolean
    sizeId?: boolean
    colorId?: boolean
    available?: boolean
    timestamp?: boolean
  }

  export type StockHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "sizeId" | "colorId" | "available" | "timestamp", ExtArgs["result"]["stockHistory"]>
  export type StockHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    color?: boolean | StockHistory$colorArgs<ExtArgs>
  }

  export type $StockHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StockHistory"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      color: Prisma.$ProductColorPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productId: number
      sizeId: number
      colorId: number | null
      available: boolean
      timestamp: Date
    }, ExtArgs["result"]["stockHistory"]>
    composites: {}
  }

  type StockHistoryGetPayload<S extends boolean | null | undefined | StockHistoryDefaultArgs> = $Result.GetResult<Prisma.$StockHistoryPayload, S>

  type StockHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StockHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StockHistoryCountAggregateInputType | true
    }

  export interface StockHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StockHistory'], meta: { name: 'StockHistory' } }
    /**
     * Find zero or one StockHistory that matches the filter.
     * @param {StockHistoryFindUniqueArgs} args - Arguments to find a StockHistory
     * @example
     * // Get one StockHistory
     * const stockHistory = await prisma.stockHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StockHistoryFindUniqueArgs>(args: SelectSubset<T, StockHistoryFindUniqueArgs<ExtArgs>>): Prisma__StockHistoryClient<$Result.GetResult<Prisma.$StockHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StockHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StockHistoryFindUniqueOrThrowArgs} args - Arguments to find a StockHistory
     * @example
     * // Get one StockHistory
     * const stockHistory = await prisma.stockHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StockHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, StockHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StockHistoryClient<$Result.GetResult<Prisma.$StockHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StockHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockHistoryFindFirstArgs} args - Arguments to find a StockHistory
     * @example
     * // Get one StockHistory
     * const stockHistory = await prisma.stockHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StockHistoryFindFirstArgs>(args?: SelectSubset<T, StockHistoryFindFirstArgs<ExtArgs>>): Prisma__StockHistoryClient<$Result.GetResult<Prisma.$StockHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StockHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockHistoryFindFirstOrThrowArgs} args - Arguments to find a StockHistory
     * @example
     * // Get one StockHistory
     * const stockHistory = await prisma.stockHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StockHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, StockHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__StockHistoryClient<$Result.GetResult<Prisma.$StockHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StockHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StockHistories
     * const stockHistories = await prisma.stockHistory.findMany()
     * 
     * // Get first 10 StockHistories
     * const stockHistories = await prisma.stockHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stockHistoryWithIdOnly = await prisma.stockHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StockHistoryFindManyArgs>(args?: SelectSubset<T, StockHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StockHistory.
     * @param {StockHistoryCreateArgs} args - Arguments to create a StockHistory.
     * @example
     * // Create one StockHistory
     * const StockHistory = await prisma.stockHistory.create({
     *   data: {
     *     // ... data to create a StockHistory
     *   }
     * })
     * 
     */
    create<T extends StockHistoryCreateArgs>(args: SelectSubset<T, StockHistoryCreateArgs<ExtArgs>>): Prisma__StockHistoryClient<$Result.GetResult<Prisma.$StockHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StockHistories.
     * @param {StockHistoryCreateManyArgs} args - Arguments to create many StockHistories.
     * @example
     * // Create many StockHistories
     * const stockHistory = await prisma.stockHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StockHistoryCreateManyArgs>(args?: SelectSubset<T, StockHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a StockHistory.
     * @param {StockHistoryDeleteArgs} args - Arguments to delete one StockHistory.
     * @example
     * // Delete one StockHistory
     * const StockHistory = await prisma.stockHistory.delete({
     *   where: {
     *     // ... filter to delete one StockHistory
     *   }
     * })
     * 
     */
    delete<T extends StockHistoryDeleteArgs>(args: SelectSubset<T, StockHistoryDeleteArgs<ExtArgs>>): Prisma__StockHistoryClient<$Result.GetResult<Prisma.$StockHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StockHistory.
     * @param {StockHistoryUpdateArgs} args - Arguments to update one StockHistory.
     * @example
     * // Update one StockHistory
     * const stockHistory = await prisma.stockHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StockHistoryUpdateArgs>(args: SelectSubset<T, StockHistoryUpdateArgs<ExtArgs>>): Prisma__StockHistoryClient<$Result.GetResult<Prisma.$StockHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StockHistories.
     * @param {StockHistoryDeleteManyArgs} args - Arguments to filter StockHistories to delete.
     * @example
     * // Delete a few StockHistories
     * const { count } = await prisma.stockHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StockHistoryDeleteManyArgs>(args?: SelectSubset<T, StockHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StockHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StockHistories
     * const stockHistory = await prisma.stockHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StockHistoryUpdateManyArgs>(args: SelectSubset<T, StockHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StockHistory.
     * @param {StockHistoryUpsertArgs} args - Arguments to update or create a StockHistory.
     * @example
     * // Update or create a StockHistory
     * const stockHistory = await prisma.stockHistory.upsert({
     *   create: {
     *     // ... data to create a StockHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StockHistory we want to update
     *   }
     * })
     */
    upsert<T extends StockHistoryUpsertArgs>(args: SelectSubset<T, StockHistoryUpsertArgs<ExtArgs>>): Prisma__StockHistoryClient<$Result.GetResult<Prisma.$StockHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StockHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockHistoryCountArgs} args - Arguments to filter StockHistories to count.
     * @example
     * // Count the number of StockHistories
     * const count = await prisma.stockHistory.count({
     *   where: {
     *     // ... the filter for the StockHistories we want to count
     *   }
     * })
    **/
    count<T extends StockHistoryCountArgs>(
      args?: Subset<T, StockHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StockHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StockHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StockHistoryAggregateArgs>(args: Subset<T, StockHistoryAggregateArgs>): Prisma.PrismaPromise<GetStockHistoryAggregateType<T>>

    /**
     * Group by StockHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockHistoryGroupByArgs} args - Group by arguments.
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
      T extends StockHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StockHistoryGroupByArgs['orderBy'] }
        : { orderBy?: StockHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StockHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStockHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StockHistory model
   */
  readonly fields: StockHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StockHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StockHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    color<T extends StockHistory$colorArgs<ExtArgs> = {}>(args?: Subset<T, StockHistory$colorArgs<ExtArgs>>): Prisma__ProductColorClient<$Result.GetResult<Prisma.$ProductColorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the StockHistory model
   */
  interface StockHistoryFieldRefs {
    readonly id: FieldRef<"StockHistory", 'Int'>
    readonly productId: FieldRef<"StockHistory", 'Int'>
    readonly sizeId: FieldRef<"StockHistory", 'Int'>
    readonly colorId: FieldRef<"StockHistory", 'Int'>
    readonly available: FieldRef<"StockHistory", 'Boolean'>
    readonly timestamp: FieldRef<"StockHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StockHistory findUnique
   */
  export type StockHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockHistory
     */
    select?: StockHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockHistory
     */
    omit?: StockHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockHistoryInclude<ExtArgs> | null
    /**
     * Filter, which StockHistory to fetch.
     */
    where: StockHistoryWhereUniqueInput
  }

  /**
   * StockHistory findUniqueOrThrow
   */
  export type StockHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockHistory
     */
    select?: StockHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockHistory
     */
    omit?: StockHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockHistoryInclude<ExtArgs> | null
    /**
     * Filter, which StockHistory to fetch.
     */
    where: StockHistoryWhereUniqueInput
  }

  /**
   * StockHistory findFirst
   */
  export type StockHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockHistory
     */
    select?: StockHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockHistory
     */
    omit?: StockHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockHistoryInclude<ExtArgs> | null
    /**
     * Filter, which StockHistory to fetch.
     */
    where?: StockHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockHistories to fetch.
     */
    orderBy?: StockHistoryOrderByWithRelationInput | StockHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockHistories.
     */
    cursor?: StockHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockHistories.
     */
    distinct?: StockHistoryScalarFieldEnum | StockHistoryScalarFieldEnum[]
  }

  /**
   * StockHistory findFirstOrThrow
   */
  export type StockHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockHistory
     */
    select?: StockHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockHistory
     */
    omit?: StockHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockHistoryInclude<ExtArgs> | null
    /**
     * Filter, which StockHistory to fetch.
     */
    where?: StockHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockHistories to fetch.
     */
    orderBy?: StockHistoryOrderByWithRelationInput | StockHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockHistories.
     */
    cursor?: StockHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockHistories.
     */
    distinct?: StockHistoryScalarFieldEnum | StockHistoryScalarFieldEnum[]
  }

  /**
   * StockHistory findMany
   */
  export type StockHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockHistory
     */
    select?: StockHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockHistory
     */
    omit?: StockHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockHistoryInclude<ExtArgs> | null
    /**
     * Filter, which StockHistories to fetch.
     */
    where?: StockHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockHistories to fetch.
     */
    orderBy?: StockHistoryOrderByWithRelationInput | StockHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StockHistories.
     */
    cursor?: StockHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockHistories.
     */
    skip?: number
    distinct?: StockHistoryScalarFieldEnum | StockHistoryScalarFieldEnum[]
  }

  /**
   * StockHistory create
   */
  export type StockHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockHistory
     */
    select?: StockHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockHistory
     */
    omit?: StockHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a StockHistory.
     */
    data: XOR<StockHistoryCreateInput, StockHistoryUncheckedCreateInput>
  }

  /**
   * StockHistory createMany
   */
  export type StockHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StockHistories.
     */
    data: StockHistoryCreateManyInput | StockHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StockHistory update
   */
  export type StockHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockHistory
     */
    select?: StockHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockHistory
     */
    omit?: StockHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a StockHistory.
     */
    data: XOR<StockHistoryUpdateInput, StockHistoryUncheckedUpdateInput>
    /**
     * Choose, which StockHistory to update.
     */
    where: StockHistoryWhereUniqueInput
  }

  /**
   * StockHistory updateMany
   */
  export type StockHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StockHistories.
     */
    data: XOR<StockHistoryUpdateManyMutationInput, StockHistoryUncheckedUpdateManyInput>
    /**
     * Filter which StockHistories to update
     */
    where?: StockHistoryWhereInput
    /**
     * Limit how many StockHistories to update.
     */
    limit?: number
  }

  /**
   * StockHistory upsert
   */
  export type StockHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockHistory
     */
    select?: StockHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockHistory
     */
    omit?: StockHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the StockHistory to update in case it exists.
     */
    where: StockHistoryWhereUniqueInput
    /**
     * In case the StockHistory found by the `where` argument doesn't exist, create a new StockHistory with this data.
     */
    create: XOR<StockHistoryCreateInput, StockHistoryUncheckedCreateInput>
    /**
     * In case the StockHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StockHistoryUpdateInput, StockHistoryUncheckedUpdateInput>
  }

  /**
   * StockHistory delete
   */
  export type StockHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockHistory
     */
    select?: StockHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockHistory
     */
    omit?: StockHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockHistoryInclude<ExtArgs> | null
    /**
     * Filter which StockHistory to delete.
     */
    where: StockHistoryWhereUniqueInput
  }

  /**
   * StockHistory deleteMany
   */
  export type StockHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockHistories to delete
     */
    where?: StockHistoryWhereInput
    /**
     * Limit how many StockHistories to delete.
     */
    limit?: number
  }

  /**
   * StockHistory.color
   */
  export type StockHistory$colorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductColor
     */
    select?: ProductColorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductColor
     */
    omit?: ProductColorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductColorInclude<ExtArgs> | null
    where?: ProductColorWhereInput
  }

  /**
   * StockHistory without action
   */
  export type StockHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockHistory
     */
    select?: StockHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockHistory
     */
    omit?: StockHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockHistoryInclude<ExtArgs> | null
  }


  /**
   * Model CategoryHistory
   */

  export type AggregateCategoryHistory = {
    _count: CategoryHistoryCountAggregateOutputType | null
    _avg: CategoryHistoryAvgAggregateOutputType | null
    _sum: CategoryHistorySumAggregateOutputType | null
    _min: CategoryHistoryMinAggregateOutputType | null
    _max: CategoryHistoryMaxAggregateOutputType | null
  }

  export type CategoryHistoryAvgAggregateOutputType = {
    id: number | null
    categoryId: number | null
  }

  export type CategoryHistorySumAggregateOutputType = {
    id: number | null
    categoryId: number | null
  }

  export type CategoryHistoryMinAggregateOutputType = {
    id: number | null
    categoryId: number | null
    action: string | null
    timestamp: Date | null
  }

  export type CategoryHistoryMaxAggregateOutputType = {
    id: number | null
    categoryId: number | null
    action: string | null
    timestamp: Date | null
  }

  export type CategoryHistoryCountAggregateOutputType = {
    id: number
    categoryId: number
    action: number
    changes: number
    timestamp: number
    _all: number
  }


  export type CategoryHistoryAvgAggregateInputType = {
    id?: true
    categoryId?: true
  }

  export type CategoryHistorySumAggregateInputType = {
    id?: true
    categoryId?: true
  }

  export type CategoryHistoryMinAggregateInputType = {
    id?: true
    categoryId?: true
    action?: true
    timestamp?: true
  }

  export type CategoryHistoryMaxAggregateInputType = {
    id?: true
    categoryId?: true
    action?: true
    timestamp?: true
  }

  export type CategoryHistoryCountAggregateInputType = {
    id?: true
    categoryId?: true
    action?: true
    changes?: true
    timestamp?: true
    _all?: true
  }

  export type CategoryHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategoryHistory to aggregate.
     */
    where?: CategoryHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryHistories to fetch.
     */
    orderBy?: CategoryHistoryOrderByWithRelationInput | CategoryHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CategoryHistories
    **/
    _count?: true | CategoryHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoryHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryHistoryMaxAggregateInputType
  }

  export type GetCategoryHistoryAggregateType<T extends CategoryHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoryHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoryHistory[P]>
      : GetScalarType<T[P], AggregateCategoryHistory[P]>
  }




  export type CategoryHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryHistoryWhereInput
    orderBy?: CategoryHistoryOrderByWithAggregationInput | CategoryHistoryOrderByWithAggregationInput[]
    by: CategoryHistoryScalarFieldEnum[] | CategoryHistoryScalarFieldEnum
    having?: CategoryHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryHistoryCountAggregateInputType | true
    _avg?: CategoryHistoryAvgAggregateInputType
    _sum?: CategoryHistorySumAggregateInputType
    _min?: CategoryHistoryMinAggregateInputType
    _max?: CategoryHistoryMaxAggregateInputType
  }

  export type CategoryHistoryGroupByOutputType = {
    id: number
    categoryId: number
    action: string
    changes: JsonValue | null
    timestamp: Date
    _count: CategoryHistoryCountAggregateOutputType | null
    _avg: CategoryHistoryAvgAggregateOutputType | null
    _sum: CategoryHistorySumAggregateOutputType | null
    _min: CategoryHistoryMinAggregateOutputType | null
    _max: CategoryHistoryMaxAggregateOutputType | null
  }

  type GetCategoryHistoryGroupByPayload<T extends CategoryHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryHistoryGroupByOutputType[P]>
        }
      >
    >


  export type CategoryHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryId?: boolean
    action?: boolean
    changes?: boolean
    timestamp?: boolean
    category?: boolean | SubCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoryHistory"]>



  export type CategoryHistorySelectScalar = {
    id?: boolean
    categoryId?: boolean
    action?: boolean
    changes?: boolean
    timestamp?: boolean
  }

  export type CategoryHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "categoryId" | "action" | "changes" | "timestamp", ExtArgs["result"]["categoryHistory"]>
  export type CategoryHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | SubCategoryDefaultArgs<ExtArgs>
  }

  export type $CategoryHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CategoryHistory"
    objects: {
      category: Prisma.$SubCategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      categoryId: number
      action: string
      changes: Prisma.JsonValue | null
      timestamp: Date
    }, ExtArgs["result"]["categoryHistory"]>
    composites: {}
  }

  type CategoryHistoryGetPayload<S extends boolean | null | undefined | CategoryHistoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryHistoryPayload, S>

  type CategoryHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryHistoryCountAggregateInputType | true
    }

  export interface CategoryHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CategoryHistory'], meta: { name: 'CategoryHistory' } }
    /**
     * Find zero or one CategoryHistory that matches the filter.
     * @param {CategoryHistoryFindUniqueArgs} args - Arguments to find a CategoryHistory
     * @example
     * // Get one CategoryHistory
     * const categoryHistory = await prisma.categoryHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryHistoryFindUniqueArgs>(args: SelectSubset<T, CategoryHistoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryHistoryClient<$Result.GetResult<Prisma.$CategoryHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CategoryHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryHistoryFindUniqueOrThrowArgs} args - Arguments to find a CategoryHistory
     * @example
     * // Get one CategoryHistory
     * const categoryHistory = await prisma.categoryHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryHistoryClient<$Result.GetResult<Prisma.$CategoryHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CategoryHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryHistoryFindFirstArgs} args - Arguments to find a CategoryHistory
     * @example
     * // Get one CategoryHistory
     * const categoryHistory = await prisma.categoryHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryHistoryFindFirstArgs>(args?: SelectSubset<T, CategoryHistoryFindFirstArgs<ExtArgs>>): Prisma__CategoryHistoryClient<$Result.GetResult<Prisma.$CategoryHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CategoryHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryHistoryFindFirstOrThrowArgs} args - Arguments to find a CategoryHistory
     * @example
     * // Get one CategoryHistory
     * const categoryHistory = await prisma.categoryHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryHistoryClient<$Result.GetResult<Prisma.$CategoryHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CategoryHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CategoryHistories
     * const categoryHistories = await prisma.categoryHistory.findMany()
     * 
     * // Get first 10 CategoryHistories
     * const categoryHistories = await prisma.categoryHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryHistoryWithIdOnly = await prisma.categoryHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryHistoryFindManyArgs>(args?: SelectSubset<T, CategoryHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CategoryHistory.
     * @param {CategoryHistoryCreateArgs} args - Arguments to create a CategoryHistory.
     * @example
     * // Create one CategoryHistory
     * const CategoryHistory = await prisma.categoryHistory.create({
     *   data: {
     *     // ... data to create a CategoryHistory
     *   }
     * })
     * 
     */
    create<T extends CategoryHistoryCreateArgs>(args: SelectSubset<T, CategoryHistoryCreateArgs<ExtArgs>>): Prisma__CategoryHistoryClient<$Result.GetResult<Prisma.$CategoryHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CategoryHistories.
     * @param {CategoryHistoryCreateManyArgs} args - Arguments to create many CategoryHistories.
     * @example
     * // Create many CategoryHistories
     * const categoryHistory = await prisma.categoryHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryHistoryCreateManyArgs>(args?: SelectSubset<T, CategoryHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CategoryHistory.
     * @param {CategoryHistoryDeleteArgs} args - Arguments to delete one CategoryHistory.
     * @example
     * // Delete one CategoryHistory
     * const CategoryHistory = await prisma.categoryHistory.delete({
     *   where: {
     *     // ... filter to delete one CategoryHistory
     *   }
     * })
     * 
     */
    delete<T extends CategoryHistoryDeleteArgs>(args: SelectSubset<T, CategoryHistoryDeleteArgs<ExtArgs>>): Prisma__CategoryHistoryClient<$Result.GetResult<Prisma.$CategoryHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CategoryHistory.
     * @param {CategoryHistoryUpdateArgs} args - Arguments to update one CategoryHistory.
     * @example
     * // Update one CategoryHistory
     * const categoryHistory = await prisma.categoryHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryHistoryUpdateArgs>(args: SelectSubset<T, CategoryHistoryUpdateArgs<ExtArgs>>): Prisma__CategoryHistoryClient<$Result.GetResult<Prisma.$CategoryHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CategoryHistories.
     * @param {CategoryHistoryDeleteManyArgs} args - Arguments to filter CategoryHistories to delete.
     * @example
     * // Delete a few CategoryHistories
     * const { count } = await prisma.categoryHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryHistoryDeleteManyArgs>(args?: SelectSubset<T, CategoryHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CategoryHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CategoryHistories
     * const categoryHistory = await prisma.categoryHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryHistoryUpdateManyArgs>(args: SelectSubset<T, CategoryHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CategoryHistory.
     * @param {CategoryHistoryUpsertArgs} args - Arguments to update or create a CategoryHistory.
     * @example
     * // Update or create a CategoryHistory
     * const categoryHistory = await prisma.categoryHistory.upsert({
     *   create: {
     *     // ... data to create a CategoryHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CategoryHistory we want to update
     *   }
     * })
     */
    upsert<T extends CategoryHistoryUpsertArgs>(args: SelectSubset<T, CategoryHistoryUpsertArgs<ExtArgs>>): Prisma__CategoryHistoryClient<$Result.GetResult<Prisma.$CategoryHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CategoryHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryHistoryCountArgs} args - Arguments to filter CategoryHistories to count.
     * @example
     * // Count the number of CategoryHistories
     * const count = await prisma.categoryHistory.count({
     *   where: {
     *     // ... the filter for the CategoryHistories we want to count
     *   }
     * })
    **/
    count<T extends CategoryHistoryCountArgs>(
      args?: Subset<T, CategoryHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CategoryHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryHistoryAggregateArgs>(args: Subset<T, CategoryHistoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryHistoryAggregateType<T>>

    /**
     * Group by CategoryHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryHistoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryHistoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CategoryHistory model
   */
  readonly fields: CategoryHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CategoryHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends SubCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubCategoryDefaultArgs<ExtArgs>>): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CategoryHistory model
   */
  interface CategoryHistoryFieldRefs {
    readonly id: FieldRef<"CategoryHistory", 'Int'>
    readonly categoryId: FieldRef<"CategoryHistory", 'Int'>
    readonly action: FieldRef<"CategoryHistory", 'String'>
    readonly changes: FieldRef<"CategoryHistory", 'Json'>
    readonly timestamp: FieldRef<"CategoryHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CategoryHistory findUnique
   */
  export type CategoryHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryHistory
     */
    select?: CategoryHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryHistory
     */
    omit?: CategoryHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryHistoryInclude<ExtArgs> | null
    /**
     * Filter, which CategoryHistory to fetch.
     */
    where: CategoryHistoryWhereUniqueInput
  }

  /**
   * CategoryHistory findUniqueOrThrow
   */
  export type CategoryHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryHistory
     */
    select?: CategoryHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryHistory
     */
    omit?: CategoryHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryHistoryInclude<ExtArgs> | null
    /**
     * Filter, which CategoryHistory to fetch.
     */
    where: CategoryHistoryWhereUniqueInput
  }

  /**
   * CategoryHistory findFirst
   */
  export type CategoryHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryHistory
     */
    select?: CategoryHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryHistory
     */
    omit?: CategoryHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryHistoryInclude<ExtArgs> | null
    /**
     * Filter, which CategoryHistory to fetch.
     */
    where?: CategoryHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryHistories to fetch.
     */
    orderBy?: CategoryHistoryOrderByWithRelationInput | CategoryHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoryHistories.
     */
    cursor?: CategoryHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoryHistories.
     */
    distinct?: CategoryHistoryScalarFieldEnum | CategoryHistoryScalarFieldEnum[]
  }

  /**
   * CategoryHistory findFirstOrThrow
   */
  export type CategoryHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryHistory
     */
    select?: CategoryHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryHistory
     */
    omit?: CategoryHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryHistoryInclude<ExtArgs> | null
    /**
     * Filter, which CategoryHistory to fetch.
     */
    where?: CategoryHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryHistories to fetch.
     */
    orderBy?: CategoryHistoryOrderByWithRelationInput | CategoryHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoryHistories.
     */
    cursor?: CategoryHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoryHistories.
     */
    distinct?: CategoryHistoryScalarFieldEnum | CategoryHistoryScalarFieldEnum[]
  }

  /**
   * CategoryHistory findMany
   */
  export type CategoryHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryHistory
     */
    select?: CategoryHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryHistory
     */
    omit?: CategoryHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryHistoryInclude<ExtArgs> | null
    /**
     * Filter, which CategoryHistories to fetch.
     */
    where?: CategoryHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryHistories to fetch.
     */
    orderBy?: CategoryHistoryOrderByWithRelationInput | CategoryHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CategoryHistories.
     */
    cursor?: CategoryHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryHistories.
     */
    skip?: number
    distinct?: CategoryHistoryScalarFieldEnum | CategoryHistoryScalarFieldEnum[]
  }

  /**
   * CategoryHistory create
   */
  export type CategoryHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryHistory
     */
    select?: CategoryHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryHistory
     */
    omit?: CategoryHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a CategoryHistory.
     */
    data: XOR<CategoryHistoryCreateInput, CategoryHistoryUncheckedCreateInput>
  }

  /**
   * CategoryHistory createMany
   */
  export type CategoryHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CategoryHistories.
     */
    data: CategoryHistoryCreateManyInput | CategoryHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CategoryHistory update
   */
  export type CategoryHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryHistory
     */
    select?: CategoryHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryHistory
     */
    omit?: CategoryHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a CategoryHistory.
     */
    data: XOR<CategoryHistoryUpdateInput, CategoryHistoryUncheckedUpdateInput>
    /**
     * Choose, which CategoryHistory to update.
     */
    where: CategoryHistoryWhereUniqueInput
  }

  /**
   * CategoryHistory updateMany
   */
  export type CategoryHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CategoryHistories.
     */
    data: XOR<CategoryHistoryUpdateManyMutationInput, CategoryHistoryUncheckedUpdateManyInput>
    /**
     * Filter which CategoryHistories to update
     */
    where?: CategoryHistoryWhereInput
    /**
     * Limit how many CategoryHistories to update.
     */
    limit?: number
  }

  /**
   * CategoryHistory upsert
   */
  export type CategoryHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryHistory
     */
    select?: CategoryHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryHistory
     */
    omit?: CategoryHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the CategoryHistory to update in case it exists.
     */
    where: CategoryHistoryWhereUniqueInput
    /**
     * In case the CategoryHistory found by the `where` argument doesn't exist, create a new CategoryHistory with this data.
     */
    create: XOR<CategoryHistoryCreateInput, CategoryHistoryUncheckedCreateInput>
    /**
     * In case the CategoryHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryHistoryUpdateInput, CategoryHistoryUncheckedUpdateInput>
  }

  /**
   * CategoryHistory delete
   */
  export type CategoryHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryHistory
     */
    select?: CategoryHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryHistory
     */
    omit?: CategoryHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryHistoryInclude<ExtArgs> | null
    /**
     * Filter which CategoryHistory to delete.
     */
    where: CategoryHistoryWhereUniqueInput
  }

  /**
   * CategoryHistory deleteMany
   */
  export type CategoryHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategoryHistories to delete
     */
    where?: CategoryHistoryWhereInput
    /**
     * Limit how many CategoryHistories to delete.
     */
    limit?: number
  }

  /**
   * CategoryHistory without action
   */
  export type CategoryHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryHistory
     */
    select?: CategoryHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryHistory
     */
    omit?: CategoryHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryHistoryInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    name: 'name',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BrandScalarFieldEnum: {
    id: 'id',
    name: 'name',
    timestamp: 'timestamp'
  };

  export type BrandScalarFieldEnum = (typeof BrandScalarFieldEnum)[keyof typeof BrandScalarFieldEnum]


  export const MainCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    brandId: 'brandId',
    gender: 'gender',
    level: 'level',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MainCategoryScalarFieldEnum = (typeof MainCategoryScalarFieldEnum)[keyof typeof MainCategoryScalarFieldEnum]


  export const SubCategoryScalarFieldEnum: {
    categoryId: 'categoryId',
    categoryName: 'categoryName',
    brand: 'brand',
    gender: 'gender',
    level: 'level',
    isLeaf: 'isLeaf',
    matchingId: 'matchingId',
    productCount: 'productCount',
    parentCategoryId: 'parentCategoryId',
    parentSubCategoryId: 'parentSubCategoryId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubCategoryScalarFieldEnum = (typeof SubCategoryScalarFieldEnum)[keyof typeof SubCategoryScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    brandName: 'brandName',
    productId: 'productId',
    name: 'name',
    price: 'price',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ProductColorScalarFieldEnum: {
    id: 'id',
    colorId: 'colorId',
    name: 'name',
    hexCode: 'hexCode',
    price: 'price',
    description: 'description',
    productId: 'productId'
  };

  export type ProductColorScalarFieldEnum = (typeof ProductColorScalarFieldEnum)[keyof typeof ProductColorScalarFieldEnum]


  export const ProductSizeScalarFieldEnum: {
    id: 'id',
    sizeId: 'sizeId',
    name: 'name',
    availability: 'availability',
    price: 'price',
    sku: 'sku',
    productId: 'productId',
    colorId: 'colorId',
    colorName: 'colorName'
  };

  export type ProductSizeScalarFieldEnum = (typeof ProductSizeScalarFieldEnum)[keyof typeof ProductSizeScalarFieldEnum]


  export const ProductImageScalarFieldEnum: {
    id: 'id',
    url: 'url',
    type: 'type',
    kind: 'kind',
    order: 'order',
    productId: 'productId',
    colorId: 'colorId',
    colorName: 'colorName',
    colorIndex: 'colorIndex'
  };

  export type ProductImageScalarFieldEnum = (typeof ProductImageScalarFieldEnum)[keyof typeof ProductImageScalarFieldEnum]


  export const ProductStockScalarFieldEnum: {
    id: 'id',
    sizeId: 'sizeId',
    name: 'name',
    availability: 'availability',
    price: 'price',
    sku: 'sku',
    productId: 'productId',
    colorId: 'colorId',
    colorName: 'colorName'
  };

  export type ProductStockScalarFieldEnum = (typeof ProductStockScalarFieldEnum)[keyof typeof ProductStockScalarFieldEnum]


  export const DataSyncScalarFieldEnum: {
    id: 'id',
    syncType: 'syncType',
    status: 'status',
    itemsCount: 'itemsCount',
    errorMessage: 'errorMessage',
    timestamp: 'timestamp'
  };

  export type DataSyncScalarFieldEnum = (typeof DataSyncScalarFieldEnum)[keyof typeof DataSyncScalarFieldEnum]


  export const PriceHistoryScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    price: 'price',
    colorId: 'colorId',
    timestamp: 'timestamp'
  };

  export type PriceHistoryScalarFieldEnum = (typeof PriceHistoryScalarFieldEnum)[keyof typeof PriceHistoryScalarFieldEnum]


  export const StockHistoryScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    sizeId: 'sizeId',
    colorId: 'colorId',
    available: 'available',
    timestamp: 'timestamp'
  };

  export type StockHistoryScalarFieldEnum = (typeof StockHistoryScalarFieldEnum)[keyof typeof StockHistoryScalarFieldEnum]


  export const CategoryHistoryScalarFieldEnum: {
    id: 'id',
    categoryId: 'categoryId',
    action: 'action',
    changes: 'changes',
    timestamp: 'timestamp'
  };

  export type CategoryHistoryScalarFieldEnum = (typeof CategoryHistoryScalarFieldEnum)[keyof typeof CategoryHistoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    email: 'email',
    passwordHash: 'passwordHash',
    name: 'name',
    role: 'role'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const BrandOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type BrandOrderByRelevanceFieldEnum = (typeof BrandOrderByRelevanceFieldEnum)[keyof typeof BrandOrderByRelevanceFieldEnum]


  export const MainCategoryOrderByRelevanceFieldEnum: {
    name: 'name',
    brandId: 'brandId',
    gender: 'gender'
  };

  export type MainCategoryOrderByRelevanceFieldEnum = (typeof MainCategoryOrderByRelevanceFieldEnum)[keyof typeof MainCategoryOrderByRelevanceFieldEnum]


  export const SubCategoryOrderByRelevanceFieldEnum: {
    categoryName: 'categoryName',
    brand: 'brand',
    gender: 'gender'
  };

  export type SubCategoryOrderByRelevanceFieldEnum = (typeof SubCategoryOrderByRelevanceFieldEnum)[keyof typeof SubCategoryOrderByRelevanceFieldEnum]


  export const ProductOrderByRelevanceFieldEnum: {
    brandName: 'brandName',
    productId: 'productId',
    name: 'name',
    description: 'description'
  };

  export type ProductOrderByRelevanceFieldEnum = (typeof ProductOrderByRelevanceFieldEnum)[keyof typeof ProductOrderByRelevanceFieldEnum]


  export const ProductColorOrderByRelevanceFieldEnum: {
    colorId: 'colorId',
    name: 'name',
    hexCode: 'hexCode',
    description: 'description'
  };

  export type ProductColorOrderByRelevanceFieldEnum = (typeof ProductColorOrderByRelevanceFieldEnum)[keyof typeof ProductColorOrderByRelevanceFieldEnum]


  export const ProductSizeOrderByRelevanceFieldEnum: {
    name: 'name',
    availability: 'availability',
    colorName: 'colorName'
  };

  export type ProductSizeOrderByRelevanceFieldEnum = (typeof ProductSizeOrderByRelevanceFieldEnum)[keyof typeof ProductSizeOrderByRelevanceFieldEnum]


  export const ProductImageOrderByRelevanceFieldEnum: {
    url: 'url',
    type: 'type',
    kind: 'kind',
    colorName: 'colorName'
  };

  export type ProductImageOrderByRelevanceFieldEnum = (typeof ProductImageOrderByRelevanceFieldEnum)[keyof typeof ProductImageOrderByRelevanceFieldEnum]


  export const ProductStockOrderByRelevanceFieldEnum: {
    name: 'name',
    availability: 'availability',
    colorName: 'colorName'
  };

  export type ProductStockOrderByRelevanceFieldEnum = (typeof ProductStockOrderByRelevanceFieldEnum)[keyof typeof ProductStockOrderByRelevanceFieldEnum]


  export const DataSyncOrderByRelevanceFieldEnum: {
    syncType: 'syncType',
    status: 'status',
    errorMessage: 'errorMessage'
  };

  export type DataSyncOrderByRelevanceFieldEnum = (typeof DataSyncOrderByRelevanceFieldEnum)[keyof typeof DataSyncOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const CategoryHistoryOrderByRelevanceFieldEnum: {
    action: 'action'
  };

  export type CategoryHistoryOrderByRelevanceFieldEnum = (typeof CategoryHistoryOrderByRelevanceFieldEnum)[keyof typeof CategoryHistoryOrderByRelevanceFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type BrandWhereInput = {
    AND?: BrandWhereInput | BrandWhereInput[]
    OR?: BrandWhereInput[]
    NOT?: BrandWhereInput | BrandWhereInput[]
    id?: StringFilter<"Brand"> | string
    name?: StringFilter<"Brand"> | string
    timestamp?: DateTimeFilter<"Brand"> | Date | string
    mainCategories?: MainCategoryListRelationFilter
    products?: ProductListRelationFilter
  }

  export type BrandOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    timestamp?: SortOrder
    mainCategories?: MainCategoryOrderByRelationAggregateInput
    products?: ProductOrderByRelationAggregateInput
    _relevance?: BrandOrderByRelevanceInput
  }

  export type BrandWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: BrandWhereInput | BrandWhereInput[]
    OR?: BrandWhereInput[]
    NOT?: BrandWhereInput | BrandWhereInput[]
    timestamp?: DateTimeFilter<"Brand"> | Date | string
    mainCategories?: MainCategoryListRelationFilter
    products?: ProductListRelationFilter
  }, "id" | "name">

  export type BrandOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    timestamp?: SortOrder
    _count?: BrandCountOrderByAggregateInput
    _max?: BrandMaxOrderByAggregateInput
    _min?: BrandMinOrderByAggregateInput
  }

  export type BrandScalarWhereWithAggregatesInput = {
    AND?: BrandScalarWhereWithAggregatesInput | BrandScalarWhereWithAggregatesInput[]
    OR?: BrandScalarWhereWithAggregatesInput[]
    NOT?: BrandScalarWhereWithAggregatesInput | BrandScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Brand"> | string
    name?: StringWithAggregatesFilter<"Brand"> | string
    timestamp?: DateTimeWithAggregatesFilter<"Brand"> | Date | string
  }

  export type MainCategoryWhereInput = {
    AND?: MainCategoryWhereInput | MainCategoryWhereInput[]
    OR?: MainCategoryWhereInput[]
    NOT?: MainCategoryWhereInput | MainCategoryWhereInput[]
    id?: IntFilter<"MainCategory"> | number
    name?: StringFilter<"MainCategory"> | string
    brandId?: StringFilter<"MainCategory"> | string
    gender?: StringFilter<"MainCategory"> | string
    level?: IntFilter<"MainCategory"> | number
    createdAt?: DateTimeFilter<"MainCategory"> | Date | string
    updatedAt?: DateTimeFilter<"MainCategory"> | Date | string
    brand?: XOR<BrandScalarRelationFilter, BrandWhereInput>
    subcategories?: SubCategoryListRelationFilter
  }

  export type MainCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    brandId?: SortOrder
    gender?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    brand?: BrandOrderByWithRelationInput
    subcategories?: SubCategoryOrderByRelationAggregateInput
    _relevance?: MainCategoryOrderByRelevanceInput
  }

  export type MainCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MainCategoryWhereInput | MainCategoryWhereInput[]
    OR?: MainCategoryWhereInput[]
    NOT?: MainCategoryWhereInput | MainCategoryWhereInput[]
    name?: StringFilter<"MainCategory"> | string
    brandId?: StringFilter<"MainCategory"> | string
    gender?: StringFilter<"MainCategory"> | string
    level?: IntFilter<"MainCategory"> | number
    createdAt?: DateTimeFilter<"MainCategory"> | Date | string
    updatedAt?: DateTimeFilter<"MainCategory"> | Date | string
    brand?: XOR<BrandScalarRelationFilter, BrandWhereInput>
    subcategories?: SubCategoryListRelationFilter
  }, "id">

  export type MainCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    brandId?: SortOrder
    gender?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MainCategoryCountOrderByAggregateInput
    _avg?: MainCategoryAvgOrderByAggregateInput
    _max?: MainCategoryMaxOrderByAggregateInput
    _min?: MainCategoryMinOrderByAggregateInput
    _sum?: MainCategorySumOrderByAggregateInput
  }

  export type MainCategoryScalarWhereWithAggregatesInput = {
    AND?: MainCategoryScalarWhereWithAggregatesInput | MainCategoryScalarWhereWithAggregatesInput[]
    OR?: MainCategoryScalarWhereWithAggregatesInput[]
    NOT?: MainCategoryScalarWhereWithAggregatesInput | MainCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MainCategory"> | number
    name?: StringWithAggregatesFilter<"MainCategory"> | string
    brandId?: StringWithAggregatesFilter<"MainCategory"> | string
    gender?: StringWithAggregatesFilter<"MainCategory"> | string
    level?: IntWithAggregatesFilter<"MainCategory"> | number
    createdAt?: DateTimeWithAggregatesFilter<"MainCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MainCategory"> | Date | string
  }

  export type SubCategoryWhereInput = {
    AND?: SubCategoryWhereInput | SubCategoryWhereInput[]
    OR?: SubCategoryWhereInput[]
    NOT?: SubCategoryWhereInput | SubCategoryWhereInput[]
    categoryId?: IntFilter<"SubCategory"> | number
    categoryName?: StringFilter<"SubCategory"> | string
    brand?: StringFilter<"SubCategory"> | string
    gender?: StringFilter<"SubCategory"> | string
    level?: IntFilter<"SubCategory"> | number
    isLeaf?: BoolFilter<"SubCategory"> | boolean
    matchingId?: IntNullableFilter<"SubCategory"> | number | null
    productCount?: IntNullableFilter<"SubCategory"> | number | null
    parentCategoryId?: IntNullableFilter<"SubCategory"> | number | null
    parentSubCategoryId?: IntNullableFilter<"SubCategory"> | number | null
    createdAt?: DateTimeFilter<"SubCategory"> | Date | string
    updatedAt?: DateTimeFilter<"SubCategory"> | Date | string
    parentCategory?: XOR<MainCategoryNullableScalarRelationFilter, MainCategoryWhereInput> | null
    parentSubCategory?: XOR<SubCategoryNullableScalarRelationFilter, SubCategoryWhereInput> | null
    subcategories?: SubCategoryListRelationFilter
    products?: ProductListRelationFilter
    history?: CategoryHistoryListRelationFilter
  }

  export type SubCategoryOrderByWithRelationInput = {
    categoryId?: SortOrder
    categoryName?: SortOrder
    brand?: SortOrder
    gender?: SortOrder
    level?: SortOrder
    isLeaf?: SortOrder
    matchingId?: SortOrderInput | SortOrder
    productCount?: SortOrderInput | SortOrder
    parentCategoryId?: SortOrderInput | SortOrder
    parentSubCategoryId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parentCategory?: MainCategoryOrderByWithRelationInput
    parentSubCategory?: SubCategoryOrderByWithRelationInput
    subcategories?: SubCategoryOrderByRelationAggregateInput
    products?: ProductOrderByRelationAggregateInput
    history?: CategoryHistoryOrderByRelationAggregateInput
    _relevance?: SubCategoryOrderByRelevanceInput
  }

  export type SubCategoryWhereUniqueInput = Prisma.AtLeast<{
    categoryId?: number
    AND?: SubCategoryWhereInput | SubCategoryWhereInput[]
    OR?: SubCategoryWhereInput[]
    NOT?: SubCategoryWhereInput | SubCategoryWhereInput[]
    categoryName?: StringFilter<"SubCategory"> | string
    brand?: StringFilter<"SubCategory"> | string
    gender?: StringFilter<"SubCategory"> | string
    level?: IntFilter<"SubCategory"> | number
    isLeaf?: BoolFilter<"SubCategory"> | boolean
    matchingId?: IntNullableFilter<"SubCategory"> | number | null
    productCount?: IntNullableFilter<"SubCategory"> | number | null
    parentCategoryId?: IntNullableFilter<"SubCategory"> | number | null
    parentSubCategoryId?: IntNullableFilter<"SubCategory"> | number | null
    createdAt?: DateTimeFilter<"SubCategory"> | Date | string
    updatedAt?: DateTimeFilter<"SubCategory"> | Date | string
    parentCategory?: XOR<MainCategoryNullableScalarRelationFilter, MainCategoryWhereInput> | null
    parentSubCategory?: XOR<SubCategoryNullableScalarRelationFilter, SubCategoryWhereInput> | null
    subcategories?: SubCategoryListRelationFilter
    products?: ProductListRelationFilter
    history?: CategoryHistoryListRelationFilter
  }, "categoryId">

  export type SubCategoryOrderByWithAggregationInput = {
    categoryId?: SortOrder
    categoryName?: SortOrder
    brand?: SortOrder
    gender?: SortOrder
    level?: SortOrder
    isLeaf?: SortOrder
    matchingId?: SortOrderInput | SortOrder
    productCount?: SortOrderInput | SortOrder
    parentCategoryId?: SortOrderInput | SortOrder
    parentSubCategoryId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubCategoryCountOrderByAggregateInput
    _avg?: SubCategoryAvgOrderByAggregateInput
    _max?: SubCategoryMaxOrderByAggregateInput
    _min?: SubCategoryMinOrderByAggregateInput
    _sum?: SubCategorySumOrderByAggregateInput
  }

  export type SubCategoryScalarWhereWithAggregatesInput = {
    AND?: SubCategoryScalarWhereWithAggregatesInput | SubCategoryScalarWhereWithAggregatesInput[]
    OR?: SubCategoryScalarWhereWithAggregatesInput[]
    NOT?: SubCategoryScalarWhereWithAggregatesInput | SubCategoryScalarWhereWithAggregatesInput[]
    categoryId?: IntWithAggregatesFilter<"SubCategory"> | number
    categoryName?: StringWithAggregatesFilter<"SubCategory"> | string
    brand?: StringWithAggregatesFilter<"SubCategory"> | string
    gender?: StringWithAggregatesFilter<"SubCategory"> | string
    level?: IntWithAggregatesFilter<"SubCategory"> | number
    isLeaf?: BoolWithAggregatesFilter<"SubCategory"> | boolean
    matchingId?: IntNullableWithAggregatesFilter<"SubCategory"> | number | null
    productCount?: IntNullableWithAggregatesFilter<"SubCategory"> | number | null
    parentCategoryId?: IntNullableWithAggregatesFilter<"SubCategory"> | number | null
    parentSubCategoryId?: IntNullableWithAggregatesFilter<"SubCategory"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"SubCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SubCategory"> | Date | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: IntFilter<"Product"> | number
    brandName?: StringFilter<"Product"> | string
    productId?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    price?: IntNullableFilter<"Product"> | number | null
    description?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    brand?: XOR<BrandScalarRelationFilter, BrandWhereInput>
    colors?: ProductColorListRelationFilter
    images?: ProductImageListRelationFilter
    sizes?: ProductSizeListRelationFilter
    stock?: ProductStockListRelationFilter
    subCategories?: SubCategoryListRelationFilter
    priceHistory?: PriceHistoryListRelationFilter
    stockHistory?: StockHistoryListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    brandName?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    price?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    brand?: BrandOrderByWithRelationInput
    colors?: ProductColorOrderByRelationAggregateInput
    images?: ProductImageOrderByRelationAggregateInput
    sizes?: ProductSizeOrderByRelationAggregateInput
    stock?: ProductStockOrderByRelationAggregateInput
    subCategories?: SubCategoryOrderByRelationAggregateInput
    priceHistory?: PriceHistoryOrderByRelationAggregateInput
    stockHistory?: StockHistoryOrderByRelationAggregateInput
    _relevance?: ProductOrderByRelevanceInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    productId?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    brandName?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    price?: IntNullableFilter<"Product"> | number | null
    description?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    brand?: XOR<BrandScalarRelationFilter, BrandWhereInput>
    colors?: ProductColorListRelationFilter
    images?: ProductImageListRelationFilter
    sizes?: ProductSizeListRelationFilter
    stock?: ProductStockListRelationFilter
    subCategories?: SubCategoryListRelationFilter
    priceHistory?: PriceHistoryListRelationFilter
    stockHistory?: StockHistoryListRelationFilter
  }, "id" | "productId">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    brandName?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    price?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Product"> | number
    brandName?: StringWithAggregatesFilter<"Product"> | string
    productId?: StringWithAggregatesFilter<"Product"> | string
    name?: StringWithAggregatesFilter<"Product"> | string
    price?: IntNullableWithAggregatesFilter<"Product"> | number | null
    description?: StringNullableWithAggregatesFilter<"Product"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type ProductColorWhereInput = {
    AND?: ProductColorWhereInput | ProductColorWhereInput[]
    OR?: ProductColorWhereInput[]
    NOT?: ProductColorWhereInput | ProductColorWhereInput[]
    id?: IntFilter<"ProductColor"> | number
    colorId?: StringFilter<"ProductColor"> | string
    name?: StringFilter<"ProductColor"> | string
    hexCode?: StringNullableFilter<"ProductColor"> | string | null
    price?: IntNullableFilter<"ProductColor"> | number | null
    description?: StringNullableFilter<"ProductColor"> | string | null
    productId?: IntFilter<"ProductColor"> | number
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    images?: ProductImageListRelationFilter
    sizes?: ProductSizeListRelationFilter
    stock?: ProductStockListRelationFilter
    priceHistory?: PriceHistoryListRelationFilter
    stockHistory?: StockHistoryListRelationFilter
  }

  export type ProductColorOrderByWithRelationInput = {
    id?: SortOrder
    colorId?: SortOrder
    name?: SortOrder
    hexCode?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    productId?: SortOrder
    product?: ProductOrderByWithRelationInput
    images?: ProductImageOrderByRelationAggregateInput
    sizes?: ProductSizeOrderByRelationAggregateInput
    stock?: ProductStockOrderByRelationAggregateInput
    priceHistory?: PriceHistoryOrderByRelationAggregateInput
    stockHistory?: StockHistoryOrderByRelationAggregateInput
    _relevance?: ProductColorOrderByRelevanceInput
  }

  export type ProductColorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    productId_colorId?: ProductColorProductIdColorIdCompoundUniqueInput
    AND?: ProductColorWhereInput | ProductColorWhereInput[]
    OR?: ProductColorWhereInput[]
    NOT?: ProductColorWhereInput | ProductColorWhereInput[]
    colorId?: StringFilter<"ProductColor"> | string
    name?: StringFilter<"ProductColor"> | string
    hexCode?: StringNullableFilter<"ProductColor"> | string | null
    price?: IntNullableFilter<"ProductColor"> | number | null
    description?: StringNullableFilter<"ProductColor"> | string | null
    productId?: IntFilter<"ProductColor"> | number
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    images?: ProductImageListRelationFilter
    sizes?: ProductSizeListRelationFilter
    stock?: ProductStockListRelationFilter
    priceHistory?: PriceHistoryListRelationFilter
    stockHistory?: StockHistoryListRelationFilter
  }, "id" | "productId_colorId">

  export type ProductColorOrderByWithAggregationInput = {
    id?: SortOrder
    colorId?: SortOrder
    name?: SortOrder
    hexCode?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    productId?: SortOrder
    _count?: ProductColorCountOrderByAggregateInput
    _avg?: ProductColorAvgOrderByAggregateInput
    _max?: ProductColorMaxOrderByAggregateInput
    _min?: ProductColorMinOrderByAggregateInput
    _sum?: ProductColorSumOrderByAggregateInput
  }

  export type ProductColorScalarWhereWithAggregatesInput = {
    AND?: ProductColorScalarWhereWithAggregatesInput | ProductColorScalarWhereWithAggregatesInput[]
    OR?: ProductColorScalarWhereWithAggregatesInput[]
    NOT?: ProductColorScalarWhereWithAggregatesInput | ProductColorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProductColor"> | number
    colorId?: StringWithAggregatesFilter<"ProductColor"> | string
    name?: StringWithAggregatesFilter<"ProductColor"> | string
    hexCode?: StringNullableWithAggregatesFilter<"ProductColor"> | string | null
    price?: IntNullableWithAggregatesFilter<"ProductColor"> | number | null
    description?: StringNullableWithAggregatesFilter<"ProductColor"> | string | null
    productId?: IntWithAggregatesFilter<"ProductColor"> | number
  }

  export type ProductSizeWhereInput = {
    AND?: ProductSizeWhereInput | ProductSizeWhereInput[]
    OR?: ProductSizeWhereInput[]
    NOT?: ProductSizeWhereInput | ProductSizeWhereInput[]
    id?: IntFilter<"ProductSize"> | number
    sizeId?: IntFilter<"ProductSize"> | number
    name?: StringFilter<"ProductSize"> | string
    availability?: StringFilter<"ProductSize"> | string
    price?: IntNullableFilter<"ProductSize"> | number | null
    sku?: IntNullableFilter<"ProductSize"> | number | null
    productId?: IntFilter<"ProductSize"> | number
    colorId?: IntNullableFilter<"ProductSize"> | number | null
    colorName?: StringNullableFilter<"ProductSize"> | string | null
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    color?: XOR<ProductColorNullableScalarRelationFilter, ProductColorWhereInput> | null
  }

  export type ProductSizeOrderByWithRelationInput = {
    id?: SortOrder
    sizeId?: SortOrder
    name?: SortOrder
    availability?: SortOrder
    price?: SortOrderInput | SortOrder
    sku?: SortOrderInput | SortOrder
    productId?: SortOrder
    colorId?: SortOrderInput | SortOrder
    colorName?: SortOrderInput | SortOrder
    product?: ProductOrderByWithRelationInput
    color?: ProductColorOrderByWithRelationInput
    _relevance?: ProductSizeOrderByRelevanceInput
  }

  export type ProductSizeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductSizeWhereInput | ProductSizeWhereInput[]
    OR?: ProductSizeWhereInput[]
    NOT?: ProductSizeWhereInput | ProductSizeWhereInput[]
    sizeId?: IntFilter<"ProductSize"> | number
    name?: StringFilter<"ProductSize"> | string
    availability?: StringFilter<"ProductSize"> | string
    price?: IntNullableFilter<"ProductSize"> | number | null
    sku?: IntNullableFilter<"ProductSize"> | number | null
    productId?: IntFilter<"ProductSize"> | number
    colorId?: IntNullableFilter<"ProductSize"> | number | null
    colorName?: StringNullableFilter<"ProductSize"> | string | null
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    color?: XOR<ProductColorNullableScalarRelationFilter, ProductColorWhereInput> | null
  }, "id">

  export type ProductSizeOrderByWithAggregationInput = {
    id?: SortOrder
    sizeId?: SortOrder
    name?: SortOrder
    availability?: SortOrder
    price?: SortOrderInput | SortOrder
    sku?: SortOrderInput | SortOrder
    productId?: SortOrder
    colorId?: SortOrderInput | SortOrder
    colorName?: SortOrderInput | SortOrder
    _count?: ProductSizeCountOrderByAggregateInput
    _avg?: ProductSizeAvgOrderByAggregateInput
    _max?: ProductSizeMaxOrderByAggregateInput
    _min?: ProductSizeMinOrderByAggregateInput
    _sum?: ProductSizeSumOrderByAggregateInput
  }

  export type ProductSizeScalarWhereWithAggregatesInput = {
    AND?: ProductSizeScalarWhereWithAggregatesInput | ProductSizeScalarWhereWithAggregatesInput[]
    OR?: ProductSizeScalarWhereWithAggregatesInput[]
    NOT?: ProductSizeScalarWhereWithAggregatesInput | ProductSizeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProductSize"> | number
    sizeId?: IntWithAggregatesFilter<"ProductSize"> | number
    name?: StringWithAggregatesFilter<"ProductSize"> | string
    availability?: StringWithAggregatesFilter<"ProductSize"> | string
    price?: IntNullableWithAggregatesFilter<"ProductSize"> | number | null
    sku?: IntNullableWithAggregatesFilter<"ProductSize"> | number | null
    productId?: IntWithAggregatesFilter<"ProductSize"> | number
    colorId?: IntNullableWithAggregatesFilter<"ProductSize"> | number | null
    colorName?: StringNullableWithAggregatesFilter<"ProductSize"> | string | null
  }

  export type ProductImageWhereInput = {
    AND?: ProductImageWhereInput | ProductImageWhereInput[]
    OR?: ProductImageWhereInput[]
    NOT?: ProductImageWhereInput | ProductImageWhereInput[]
    id?: IntFilter<"ProductImage"> | number
    url?: StringFilter<"ProductImage"> | string
    type?: StringFilter<"ProductImage"> | string
    kind?: StringFilter<"ProductImage"> | string
    order?: IntFilter<"ProductImage"> | number
    productId?: IntFilter<"ProductImage"> | number
    colorId?: IntNullableFilter<"ProductImage"> | number | null
    colorName?: StringNullableFilter<"ProductImage"> | string | null
    colorIndex?: IntNullableFilter<"ProductImage"> | number | null
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    color?: XOR<ProductColorNullableScalarRelationFilter, ProductColorWhereInput> | null
  }

  export type ProductImageOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    kind?: SortOrder
    order?: SortOrder
    productId?: SortOrder
    colorId?: SortOrderInput | SortOrder
    colorName?: SortOrderInput | SortOrder
    colorIndex?: SortOrderInput | SortOrder
    product?: ProductOrderByWithRelationInput
    color?: ProductColorOrderByWithRelationInput
    _relevance?: ProductImageOrderByRelevanceInput
  }

  export type ProductImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductImageWhereInput | ProductImageWhereInput[]
    OR?: ProductImageWhereInput[]
    NOT?: ProductImageWhereInput | ProductImageWhereInput[]
    url?: StringFilter<"ProductImage"> | string
    type?: StringFilter<"ProductImage"> | string
    kind?: StringFilter<"ProductImage"> | string
    order?: IntFilter<"ProductImage"> | number
    productId?: IntFilter<"ProductImage"> | number
    colorId?: IntNullableFilter<"ProductImage"> | number | null
    colorName?: StringNullableFilter<"ProductImage"> | string | null
    colorIndex?: IntNullableFilter<"ProductImage"> | number | null
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    color?: XOR<ProductColorNullableScalarRelationFilter, ProductColorWhereInput> | null
  }, "id">

  export type ProductImageOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    kind?: SortOrder
    order?: SortOrder
    productId?: SortOrder
    colorId?: SortOrderInput | SortOrder
    colorName?: SortOrderInput | SortOrder
    colorIndex?: SortOrderInput | SortOrder
    _count?: ProductImageCountOrderByAggregateInput
    _avg?: ProductImageAvgOrderByAggregateInput
    _max?: ProductImageMaxOrderByAggregateInput
    _min?: ProductImageMinOrderByAggregateInput
    _sum?: ProductImageSumOrderByAggregateInput
  }

  export type ProductImageScalarWhereWithAggregatesInput = {
    AND?: ProductImageScalarWhereWithAggregatesInput | ProductImageScalarWhereWithAggregatesInput[]
    OR?: ProductImageScalarWhereWithAggregatesInput[]
    NOT?: ProductImageScalarWhereWithAggregatesInput | ProductImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProductImage"> | number
    url?: StringWithAggregatesFilter<"ProductImage"> | string
    type?: StringWithAggregatesFilter<"ProductImage"> | string
    kind?: StringWithAggregatesFilter<"ProductImage"> | string
    order?: IntWithAggregatesFilter<"ProductImage"> | number
    productId?: IntWithAggregatesFilter<"ProductImage"> | number
    colorId?: IntNullableWithAggregatesFilter<"ProductImage"> | number | null
    colorName?: StringNullableWithAggregatesFilter<"ProductImage"> | string | null
    colorIndex?: IntNullableWithAggregatesFilter<"ProductImage"> | number | null
  }

  export type ProductStockWhereInput = {
    AND?: ProductStockWhereInput | ProductStockWhereInput[]
    OR?: ProductStockWhereInput[]
    NOT?: ProductStockWhereInput | ProductStockWhereInput[]
    id?: IntFilter<"ProductStock"> | number
    sizeId?: IntFilter<"ProductStock"> | number
    name?: StringFilter<"ProductStock"> | string
    availability?: StringFilter<"ProductStock"> | string
    price?: IntNullableFilter<"ProductStock"> | number | null
    sku?: IntNullableFilter<"ProductStock"> | number | null
    productId?: IntFilter<"ProductStock"> | number
    colorId?: IntNullableFilter<"ProductStock"> | number | null
    colorName?: StringNullableFilter<"ProductStock"> | string | null
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    color?: XOR<ProductColorNullableScalarRelationFilter, ProductColorWhereInput> | null
  }

  export type ProductStockOrderByWithRelationInput = {
    id?: SortOrder
    sizeId?: SortOrder
    name?: SortOrder
    availability?: SortOrder
    price?: SortOrderInput | SortOrder
    sku?: SortOrderInput | SortOrder
    productId?: SortOrder
    colorId?: SortOrderInput | SortOrder
    colorName?: SortOrderInput | SortOrder
    product?: ProductOrderByWithRelationInput
    color?: ProductColorOrderByWithRelationInput
    _relevance?: ProductStockOrderByRelevanceInput
  }

  export type ProductStockWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductStockWhereInput | ProductStockWhereInput[]
    OR?: ProductStockWhereInput[]
    NOT?: ProductStockWhereInput | ProductStockWhereInput[]
    sizeId?: IntFilter<"ProductStock"> | number
    name?: StringFilter<"ProductStock"> | string
    availability?: StringFilter<"ProductStock"> | string
    price?: IntNullableFilter<"ProductStock"> | number | null
    sku?: IntNullableFilter<"ProductStock"> | number | null
    productId?: IntFilter<"ProductStock"> | number
    colorId?: IntNullableFilter<"ProductStock"> | number | null
    colorName?: StringNullableFilter<"ProductStock"> | string | null
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    color?: XOR<ProductColorNullableScalarRelationFilter, ProductColorWhereInput> | null
  }, "id">

  export type ProductStockOrderByWithAggregationInput = {
    id?: SortOrder
    sizeId?: SortOrder
    name?: SortOrder
    availability?: SortOrder
    price?: SortOrderInput | SortOrder
    sku?: SortOrderInput | SortOrder
    productId?: SortOrder
    colorId?: SortOrderInput | SortOrder
    colorName?: SortOrderInput | SortOrder
    _count?: ProductStockCountOrderByAggregateInput
    _avg?: ProductStockAvgOrderByAggregateInput
    _max?: ProductStockMaxOrderByAggregateInput
    _min?: ProductStockMinOrderByAggregateInput
    _sum?: ProductStockSumOrderByAggregateInput
  }

  export type ProductStockScalarWhereWithAggregatesInput = {
    AND?: ProductStockScalarWhereWithAggregatesInput | ProductStockScalarWhereWithAggregatesInput[]
    OR?: ProductStockScalarWhereWithAggregatesInput[]
    NOT?: ProductStockScalarWhereWithAggregatesInput | ProductStockScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProductStock"> | number
    sizeId?: IntWithAggregatesFilter<"ProductStock"> | number
    name?: StringWithAggregatesFilter<"ProductStock"> | string
    availability?: StringWithAggregatesFilter<"ProductStock"> | string
    price?: IntNullableWithAggregatesFilter<"ProductStock"> | number | null
    sku?: IntNullableWithAggregatesFilter<"ProductStock"> | number | null
    productId?: IntWithAggregatesFilter<"ProductStock"> | number
    colorId?: IntNullableWithAggregatesFilter<"ProductStock"> | number | null
    colorName?: StringNullableWithAggregatesFilter<"ProductStock"> | string | null
  }

  export type DataSyncWhereInput = {
    AND?: DataSyncWhereInput | DataSyncWhereInput[]
    OR?: DataSyncWhereInput[]
    NOT?: DataSyncWhereInput | DataSyncWhereInput[]
    id?: IntFilter<"DataSync"> | number
    syncType?: StringFilter<"DataSync"> | string
    status?: StringFilter<"DataSync"> | string
    itemsCount?: IntNullableFilter<"DataSync"> | number | null
    errorMessage?: StringNullableFilter<"DataSync"> | string | null
    timestamp?: DateTimeFilter<"DataSync"> | Date | string
  }

  export type DataSyncOrderByWithRelationInput = {
    id?: SortOrder
    syncType?: SortOrder
    status?: SortOrder
    itemsCount?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    _relevance?: DataSyncOrderByRelevanceInput
  }

  export type DataSyncWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DataSyncWhereInput | DataSyncWhereInput[]
    OR?: DataSyncWhereInput[]
    NOT?: DataSyncWhereInput | DataSyncWhereInput[]
    syncType?: StringFilter<"DataSync"> | string
    status?: StringFilter<"DataSync"> | string
    itemsCount?: IntNullableFilter<"DataSync"> | number | null
    errorMessage?: StringNullableFilter<"DataSync"> | string | null
    timestamp?: DateTimeFilter<"DataSync"> | Date | string
  }, "id">

  export type DataSyncOrderByWithAggregationInput = {
    id?: SortOrder
    syncType?: SortOrder
    status?: SortOrder
    itemsCount?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    _count?: DataSyncCountOrderByAggregateInput
    _avg?: DataSyncAvgOrderByAggregateInput
    _max?: DataSyncMaxOrderByAggregateInput
    _min?: DataSyncMinOrderByAggregateInput
    _sum?: DataSyncSumOrderByAggregateInput
  }

  export type DataSyncScalarWhereWithAggregatesInput = {
    AND?: DataSyncScalarWhereWithAggregatesInput | DataSyncScalarWhereWithAggregatesInput[]
    OR?: DataSyncScalarWhereWithAggregatesInput[]
    NOT?: DataSyncScalarWhereWithAggregatesInput | DataSyncScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DataSync"> | number
    syncType?: StringWithAggregatesFilter<"DataSync"> | string
    status?: StringWithAggregatesFilter<"DataSync"> | string
    itemsCount?: IntNullableWithAggregatesFilter<"DataSync"> | number | null
    errorMessage?: StringNullableWithAggregatesFilter<"DataSync"> | string | null
    timestamp?: DateTimeWithAggregatesFilter<"DataSync"> | Date | string
  }

  export type PriceHistoryWhereInput = {
    AND?: PriceHistoryWhereInput | PriceHistoryWhereInput[]
    OR?: PriceHistoryWhereInput[]
    NOT?: PriceHistoryWhereInput | PriceHistoryWhereInput[]
    id?: IntFilter<"PriceHistory"> | number
    productId?: IntFilter<"PriceHistory"> | number
    price?: IntFilter<"PriceHistory"> | number
    colorId?: IntNullableFilter<"PriceHistory"> | number | null
    timestamp?: DateTimeFilter<"PriceHistory"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    color?: XOR<ProductColorNullableScalarRelationFilter, ProductColorWhereInput> | null
  }

  export type PriceHistoryOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    price?: SortOrder
    colorId?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    product?: ProductOrderByWithRelationInput
    color?: ProductColorOrderByWithRelationInput
  }

  export type PriceHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PriceHistoryWhereInput | PriceHistoryWhereInput[]
    OR?: PriceHistoryWhereInput[]
    NOT?: PriceHistoryWhereInput | PriceHistoryWhereInput[]
    productId?: IntFilter<"PriceHistory"> | number
    price?: IntFilter<"PriceHistory"> | number
    colorId?: IntNullableFilter<"PriceHistory"> | number | null
    timestamp?: DateTimeFilter<"PriceHistory"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    color?: XOR<ProductColorNullableScalarRelationFilter, ProductColorWhereInput> | null
  }, "id">

  export type PriceHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    price?: SortOrder
    colorId?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    _count?: PriceHistoryCountOrderByAggregateInput
    _avg?: PriceHistoryAvgOrderByAggregateInput
    _max?: PriceHistoryMaxOrderByAggregateInput
    _min?: PriceHistoryMinOrderByAggregateInput
    _sum?: PriceHistorySumOrderByAggregateInput
  }

  export type PriceHistoryScalarWhereWithAggregatesInput = {
    AND?: PriceHistoryScalarWhereWithAggregatesInput | PriceHistoryScalarWhereWithAggregatesInput[]
    OR?: PriceHistoryScalarWhereWithAggregatesInput[]
    NOT?: PriceHistoryScalarWhereWithAggregatesInput | PriceHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PriceHistory"> | number
    productId?: IntWithAggregatesFilter<"PriceHistory"> | number
    price?: IntWithAggregatesFilter<"PriceHistory"> | number
    colorId?: IntNullableWithAggregatesFilter<"PriceHistory"> | number | null
    timestamp?: DateTimeWithAggregatesFilter<"PriceHistory"> | Date | string
  }

  export type StockHistoryWhereInput = {
    AND?: StockHistoryWhereInput | StockHistoryWhereInput[]
    OR?: StockHistoryWhereInput[]
    NOT?: StockHistoryWhereInput | StockHistoryWhereInput[]
    id?: IntFilter<"StockHistory"> | number
    productId?: IntFilter<"StockHistory"> | number
    sizeId?: IntFilter<"StockHistory"> | number
    colorId?: IntNullableFilter<"StockHistory"> | number | null
    available?: BoolFilter<"StockHistory"> | boolean
    timestamp?: DateTimeFilter<"StockHistory"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    color?: XOR<ProductColorNullableScalarRelationFilter, ProductColorWhereInput> | null
  }

  export type StockHistoryOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    sizeId?: SortOrder
    colorId?: SortOrderInput | SortOrder
    available?: SortOrder
    timestamp?: SortOrder
    product?: ProductOrderByWithRelationInput
    color?: ProductColorOrderByWithRelationInput
  }

  export type StockHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StockHistoryWhereInput | StockHistoryWhereInput[]
    OR?: StockHistoryWhereInput[]
    NOT?: StockHistoryWhereInput | StockHistoryWhereInput[]
    productId?: IntFilter<"StockHistory"> | number
    sizeId?: IntFilter<"StockHistory"> | number
    colorId?: IntNullableFilter<"StockHistory"> | number | null
    available?: BoolFilter<"StockHistory"> | boolean
    timestamp?: DateTimeFilter<"StockHistory"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    color?: XOR<ProductColorNullableScalarRelationFilter, ProductColorWhereInput> | null
  }, "id">

  export type StockHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    sizeId?: SortOrder
    colorId?: SortOrderInput | SortOrder
    available?: SortOrder
    timestamp?: SortOrder
    _count?: StockHistoryCountOrderByAggregateInput
    _avg?: StockHistoryAvgOrderByAggregateInput
    _max?: StockHistoryMaxOrderByAggregateInput
    _min?: StockHistoryMinOrderByAggregateInput
    _sum?: StockHistorySumOrderByAggregateInput
  }

  export type StockHistoryScalarWhereWithAggregatesInput = {
    AND?: StockHistoryScalarWhereWithAggregatesInput | StockHistoryScalarWhereWithAggregatesInput[]
    OR?: StockHistoryScalarWhereWithAggregatesInput[]
    NOT?: StockHistoryScalarWhereWithAggregatesInput | StockHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StockHistory"> | number
    productId?: IntWithAggregatesFilter<"StockHistory"> | number
    sizeId?: IntWithAggregatesFilter<"StockHistory"> | number
    colorId?: IntNullableWithAggregatesFilter<"StockHistory"> | number | null
    available?: BoolWithAggregatesFilter<"StockHistory"> | boolean
    timestamp?: DateTimeWithAggregatesFilter<"StockHistory"> | Date | string
  }

  export type CategoryHistoryWhereInput = {
    AND?: CategoryHistoryWhereInput | CategoryHistoryWhereInput[]
    OR?: CategoryHistoryWhereInput[]
    NOT?: CategoryHistoryWhereInput | CategoryHistoryWhereInput[]
    id?: IntFilter<"CategoryHistory"> | number
    categoryId?: IntFilter<"CategoryHistory"> | number
    action?: StringFilter<"CategoryHistory"> | string
    changes?: JsonNullableFilter<"CategoryHistory">
    timestamp?: DateTimeFilter<"CategoryHistory"> | Date | string
    category?: XOR<SubCategoryScalarRelationFilter, SubCategoryWhereInput>
  }

  export type CategoryHistoryOrderByWithRelationInput = {
    id?: SortOrder
    categoryId?: SortOrder
    action?: SortOrder
    changes?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    category?: SubCategoryOrderByWithRelationInput
    _relevance?: CategoryHistoryOrderByRelevanceInput
  }

  export type CategoryHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoryHistoryWhereInput | CategoryHistoryWhereInput[]
    OR?: CategoryHistoryWhereInput[]
    NOT?: CategoryHistoryWhereInput | CategoryHistoryWhereInput[]
    categoryId?: IntFilter<"CategoryHistory"> | number
    action?: StringFilter<"CategoryHistory"> | string
    changes?: JsonNullableFilter<"CategoryHistory">
    timestamp?: DateTimeFilter<"CategoryHistory"> | Date | string
    category?: XOR<SubCategoryScalarRelationFilter, SubCategoryWhereInput>
  }, "id">

  export type CategoryHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    categoryId?: SortOrder
    action?: SortOrder
    changes?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    _count?: CategoryHistoryCountOrderByAggregateInput
    _avg?: CategoryHistoryAvgOrderByAggregateInput
    _max?: CategoryHistoryMaxOrderByAggregateInput
    _min?: CategoryHistoryMinOrderByAggregateInput
    _sum?: CategoryHistorySumOrderByAggregateInput
  }

  export type CategoryHistoryScalarWhereWithAggregatesInput = {
    AND?: CategoryHistoryScalarWhereWithAggregatesInput | CategoryHistoryScalarWhereWithAggregatesInput[]
    OR?: CategoryHistoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryHistoryScalarWhereWithAggregatesInput | CategoryHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CategoryHistory"> | number
    categoryId?: IntWithAggregatesFilter<"CategoryHistory"> | number
    action?: StringWithAggregatesFilter<"CategoryHistory"> | string
    changes?: JsonNullableWithAggregatesFilter<"CategoryHistory">
    timestamp?: DateTimeWithAggregatesFilter<"CategoryHistory"> | Date | string
  }

  export type UserCreateInput = {
    email: string
    passwordHash: string
    name?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    passwordHash: string
    name?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    passwordHash: string
    name?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrandCreateInput = {
    id: string
    name: string
    timestamp?: Date | string
    mainCategories?: MainCategoryCreateNestedManyWithoutBrandInput
    products?: ProductCreateNestedManyWithoutBrandInput
  }

  export type BrandUncheckedCreateInput = {
    id: string
    name: string
    timestamp?: Date | string
    mainCategories?: MainCategoryUncheckedCreateNestedManyWithoutBrandInput
    products?: ProductUncheckedCreateNestedManyWithoutBrandInput
  }

  export type BrandUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    mainCategories?: MainCategoryUpdateManyWithoutBrandNestedInput
    products?: ProductUpdateManyWithoutBrandNestedInput
  }

  export type BrandUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    mainCategories?: MainCategoryUncheckedUpdateManyWithoutBrandNestedInput
    products?: ProductUncheckedUpdateManyWithoutBrandNestedInput
  }

  export type BrandCreateManyInput = {
    id: string
    name: string
    timestamp?: Date | string
  }

  export type BrandUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrandUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MainCategoryCreateInput = {
    id: number
    name: string
    gender: string
    level?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    brand: BrandCreateNestedOneWithoutMainCategoriesInput
    subcategories?: SubCategoryCreateNestedManyWithoutParentCategoryInput
  }

  export type MainCategoryUncheckedCreateInput = {
    id: number
    name: string
    brandId: string
    gender: string
    level?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    subcategories?: SubCategoryUncheckedCreateNestedManyWithoutParentCategoryInput
  }

  export type MainCategoryUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: BrandUpdateOneRequiredWithoutMainCategoriesNestedInput
    subcategories?: SubCategoryUpdateManyWithoutParentCategoryNestedInput
  }

  export type MainCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subcategories?: SubCategoryUncheckedUpdateManyWithoutParentCategoryNestedInput
  }

  export type MainCategoryCreateManyInput = {
    id: number
    name: string
    brandId: string
    gender: string
    level?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MainCategoryUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MainCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubCategoryCreateInput = {
    categoryId: number
    categoryName: string
    brand: string
    gender: string
    level: number
    isLeaf?: boolean
    matchingId?: number | null
    productCount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parentCategory?: MainCategoryCreateNestedOneWithoutSubcategoriesInput
    parentSubCategory?: SubCategoryCreateNestedOneWithoutSubcategoriesInput
    subcategories?: SubCategoryCreateNestedManyWithoutParentSubCategoryInput
    products?: ProductCreateNestedManyWithoutSubCategoriesInput
    history?: CategoryHistoryCreateNestedManyWithoutCategoryInput
  }

  export type SubCategoryUncheckedCreateInput = {
    categoryId: number
    categoryName: string
    brand: string
    gender: string
    level: number
    isLeaf?: boolean
    matchingId?: number | null
    productCount?: number | null
    parentCategoryId?: number | null
    parentSubCategoryId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subcategories?: SubCategoryUncheckedCreateNestedManyWithoutParentSubCategoryInput
    products?: ProductUncheckedCreateNestedManyWithoutSubCategoriesInput
    history?: CategoryHistoryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type SubCategoryUpdateInput = {
    categoryId?: IntFieldUpdateOperationsInput | number
    categoryName?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    isLeaf?: BoolFieldUpdateOperationsInput | boolean
    matchingId?: NullableIntFieldUpdateOperationsInput | number | null
    productCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentCategory?: MainCategoryUpdateOneWithoutSubcategoriesNestedInput
    parentSubCategory?: SubCategoryUpdateOneWithoutSubcategoriesNestedInput
    subcategories?: SubCategoryUpdateManyWithoutParentSubCategoryNestedInput
    products?: ProductUpdateManyWithoutSubCategoriesNestedInput
    history?: CategoryHistoryUpdateManyWithoutCategoryNestedInput
  }

  export type SubCategoryUncheckedUpdateInput = {
    categoryId?: IntFieldUpdateOperationsInput | number
    categoryName?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    isLeaf?: BoolFieldUpdateOperationsInput | boolean
    matchingId?: NullableIntFieldUpdateOperationsInput | number | null
    productCount?: NullableIntFieldUpdateOperationsInput | number | null
    parentCategoryId?: NullableIntFieldUpdateOperationsInput | number | null
    parentSubCategoryId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subcategories?: SubCategoryUncheckedUpdateManyWithoutParentSubCategoryNestedInput
    products?: ProductUncheckedUpdateManyWithoutSubCategoriesNestedInput
    history?: CategoryHistoryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type SubCategoryCreateManyInput = {
    categoryId: number
    categoryName: string
    brand: string
    gender: string
    level: number
    isLeaf?: boolean
    matchingId?: number | null
    productCount?: number | null
    parentCategoryId?: number | null
    parentSubCategoryId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubCategoryUpdateManyMutationInput = {
    categoryId?: IntFieldUpdateOperationsInput | number
    categoryName?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    isLeaf?: BoolFieldUpdateOperationsInput | boolean
    matchingId?: NullableIntFieldUpdateOperationsInput | number | null
    productCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubCategoryUncheckedUpdateManyInput = {
    categoryId?: IntFieldUpdateOperationsInput | number
    categoryName?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    isLeaf?: BoolFieldUpdateOperationsInput | boolean
    matchingId?: NullableIntFieldUpdateOperationsInput | number | null
    productCount?: NullableIntFieldUpdateOperationsInput | number | null
    parentCategoryId?: NullableIntFieldUpdateOperationsInput | number | null
    parentSubCategoryId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    productId: string
    name: string
    price?: number | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    brand: BrandCreateNestedOneWithoutProductsInput
    colors?: ProductColorCreateNestedManyWithoutProductInput
    images?: ProductImageCreateNestedManyWithoutProductInput
    sizes?: ProductSizeCreateNestedManyWithoutProductInput
    stock?: ProductStockCreateNestedManyWithoutProductInput
    subCategories?: SubCategoryCreateNestedManyWithoutProductsInput
    priceHistory?: PriceHistoryCreateNestedManyWithoutProductInput
    stockHistory?: StockHistoryCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    brandName: string
    productId: string
    name: string
    price?: number | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    colors?: ProductColorUncheckedCreateNestedManyWithoutProductInput
    images?: ProductImageUncheckedCreateNestedManyWithoutProductInput
    sizes?: ProductSizeUncheckedCreateNestedManyWithoutProductInput
    stock?: ProductStockUncheckedCreateNestedManyWithoutProductInput
    subCategories?: SubCategoryUncheckedCreateNestedManyWithoutProductsInput
    priceHistory?: PriceHistoryUncheckedCreateNestedManyWithoutProductInput
    stockHistory?: StockHistoryUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: BrandUpdateOneRequiredWithoutProductsNestedInput
    colors?: ProductColorUpdateManyWithoutProductNestedInput
    images?: ProductImageUpdateManyWithoutProductNestedInput
    sizes?: ProductSizeUpdateManyWithoutProductNestedInput
    stock?: ProductStockUpdateManyWithoutProductNestedInput
    subCategories?: SubCategoryUpdateManyWithoutProductsNestedInput
    priceHistory?: PriceHistoryUpdateManyWithoutProductNestedInput
    stockHistory?: StockHistoryUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    brandName?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    colors?: ProductColorUncheckedUpdateManyWithoutProductNestedInput
    images?: ProductImageUncheckedUpdateManyWithoutProductNestedInput
    sizes?: ProductSizeUncheckedUpdateManyWithoutProductNestedInput
    stock?: ProductStockUncheckedUpdateManyWithoutProductNestedInput
    subCategories?: SubCategoryUncheckedUpdateManyWithoutProductsNestedInput
    priceHistory?: PriceHistoryUncheckedUpdateManyWithoutProductNestedInput
    stockHistory?: StockHistoryUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: number
    brandName: string
    productId: string
    name: string
    price?: number | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    brandName?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductColorCreateInput = {
    colorId: string
    name: string
    hexCode?: string | null
    price?: number | null
    description?: string | null
    product: ProductCreateNestedOneWithoutColorsInput
    images?: ProductImageCreateNestedManyWithoutColorInput
    sizes?: ProductSizeCreateNestedManyWithoutColorInput
    stock?: ProductStockCreateNestedManyWithoutColorInput
    priceHistory?: PriceHistoryCreateNestedManyWithoutColorInput
    stockHistory?: StockHistoryCreateNestedManyWithoutColorInput
  }

  export type ProductColorUncheckedCreateInput = {
    id?: number
    colorId: string
    name: string
    hexCode?: string | null
    price?: number | null
    description?: string | null
    productId: number
    images?: ProductImageUncheckedCreateNestedManyWithoutColorInput
    sizes?: ProductSizeUncheckedCreateNestedManyWithoutColorInput
    stock?: ProductStockUncheckedCreateNestedManyWithoutColorInput
    priceHistory?: PriceHistoryUncheckedCreateNestedManyWithoutColorInput
    stockHistory?: StockHistoryUncheckedCreateNestedManyWithoutColorInput
  }

  export type ProductColorUpdateInput = {
    colorId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    hexCode?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    product?: ProductUpdateOneRequiredWithoutColorsNestedInput
    images?: ProductImageUpdateManyWithoutColorNestedInput
    sizes?: ProductSizeUpdateManyWithoutColorNestedInput
    stock?: ProductStockUpdateManyWithoutColorNestedInput
    priceHistory?: PriceHistoryUpdateManyWithoutColorNestedInput
    stockHistory?: StockHistoryUpdateManyWithoutColorNestedInput
  }

  export type ProductColorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    colorId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    hexCode?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: IntFieldUpdateOperationsInput | number
    images?: ProductImageUncheckedUpdateManyWithoutColorNestedInput
    sizes?: ProductSizeUncheckedUpdateManyWithoutColorNestedInput
    stock?: ProductStockUncheckedUpdateManyWithoutColorNestedInput
    priceHistory?: PriceHistoryUncheckedUpdateManyWithoutColorNestedInput
    stockHistory?: StockHistoryUncheckedUpdateManyWithoutColorNestedInput
  }

  export type ProductColorCreateManyInput = {
    id?: number
    colorId: string
    name: string
    hexCode?: string | null
    price?: number | null
    description?: string | null
    productId: number
  }

  export type ProductColorUpdateManyMutationInput = {
    colorId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    hexCode?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductColorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    colorId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    hexCode?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductSizeCreateInput = {
    sizeId: number
    name: string
    availability: string
    price?: number | null
    sku?: number | null
    colorName?: string | null
    product: ProductCreateNestedOneWithoutSizesInput
    color?: ProductColorCreateNestedOneWithoutSizesInput
  }

  export type ProductSizeUncheckedCreateInput = {
    id?: number
    sizeId: number
    name: string
    availability: string
    price?: number | null
    sku?: number | null
    productId: number
    colorId?: number | null
    colorName?: string | null
  }

  export type ProductSizeUpdateInput = {
    sizeId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    availability?: StringFieldUpdateOperationsInput | string
    price?: NullableIntFieldUpdateOperationsInput | number | null
    sku?: NullableIntFieldUpdateOperationsInput | number | null
    colorName?: NullableStringFieldUpdateOperationsInput | string | null
    product?: ProductUpdateOneRequiredWithoutSizesNestedInput
    color?: ProductColorUpdateOneWithoutSizesNestedInput
  }

  export type ProductSizeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sizeId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    availability?: StringFieldUpdateOperationsInput | string
    price?: NullableIntFieldUpdateOperationsInput | number | null
    sku?: NullableIntFieldUpdateOperationsInput | number | null
    productId?: IntFieldUpdateOperationsInput | number
    colorId?: NullableIntFieldUpdateOperationsInput | number | null
    colorName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductSizeCreateManyInput = {
    id?: number
    sizeId: number
    name: string
    availability: string
    price?: number | null
    sku?: number | null
    productId: number
    colorId?: number | null
    colorName?: string | null
  }

  export type ProductSizeUpdateManyMutationInput = {
    sizeId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    availability?: StringFieldUpdateOperationsInput | string
    price?: NullableIntFieldUpdateOperationsInput | number | null
    sku?: NullableIntFieldUpdateOperationsInput | number | null
    colorName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductSizeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sizeId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    availability?: StringFieldUpdateOperationsInput | string
    price?: NullableIntFieldUpdateOperationsInput | number | null
    sku?: NullableIntFieldUpdateOperationsInput | number | null
    productId?: IntFieldUpdateOperationsInput | number
    colorId?: NullableIntFieldUpdateOperationsInput | number | null
    colorName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductImageCreateInput = {
    url: string
    type: string
    kind: string
    order?: number
    colorName?: string | null
    colorIndex?: number | null
    product: ProductCreateNestedOneWithoutImagesInput
    color?: ProductColorCreateNestedOneWithoutImagesInput
  }

  export type ProductImageUncheckedCreateInput = {
    id?: number
    url: string
    type: string
    kind: string
    order?: number
    productId: number
    colorId?: number | null
    colorName?: string | null
    colorIndex?: number | null
  }

  export type ProductImageUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    kind?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    colorName?: NullableStringFieldUpdateOperationsInput | string | null
    colorIndex?: NullableIntFieldUpdateOperationsInput | number | null
    product?: ProductUpdateOneRequiredWithoutImagesNestedInput
    color?: ProductColorUpdateOneWithoutImagesNestedInput
  }

  export type ProductImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    kind?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    colorId?: NullableIntFieldUpdateOperationsInput | number | null
    colorName?: NullableStringFieldUpdateOperationsInput | string | null
    colorIndex?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductImageCreateManyInput = {
    id?: number
    url: string
    type: string
    kind: string
    order?: number
    productId: number
    colorId?: number | null
    colorName?: string | null
    colorIndex?: number | null
  }

  export type ProductImageUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    kind?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    colorName?: NullableStringFieldUpdateOperationsInput | string | null
    colorIndex?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    kind?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    colorId?: NullableIntFieldUpdateOperationsInput | number | null
    colorName?: NullableStringFieldUpdateOperationsInput | string | null
    colorIndex?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductStockCreateInput = {
    sizeId: number
    name: string
    availability: string
    price?: number | null
    sku?: number | null
    colorName?: string | null
    product: ProductCreateNestedOneWithoutStockInput
    color?: ProductColorCreateNestedOneWithoutStockInput
  }

  export type ProductStockUncheckedCreateInput = {
    id?: number
    sizeId: number
    name: string
    availability: string
    price?: number | null
    sku?: number | null
    productId: number
    colorId?: number | null
    colorName?: string | null
  }

  export type ProductStockUpdateInput = {
    sizeId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    availability?: StringFieldUpdateOperationsInput | string
    price?: NullableIntFieldUpdateOperationsInput | number | null
    sku?: NullableIntFieldUpdateOperationsInput | number | null
    colorName?: NullableStringFieldUpdateOperationsInput | string | null
    product?: ProductUpdateOneRequiredWithoutStockNestedInput
    color?: ProductColorUpdateOneWithoutStockNestedInput
  }

  export type ProductStockUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sizeId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    availability?: StringFieldUpdateOperationsInput | string
    price?: NullableIntFieldUpdateOperationsInput | number | null
    sku?: NullableIntFieldUpdateOperationsInput | number | null
    productId?: IntFieldUpdateOperationsInput | number
    colorId?: NullableIntFieldUpdateOperationsInput | number | null
    colorName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductStockCreateManyInput = {
    id?: number
    sizeId: number
    name: string
    availability: string
    price?: number | null
    sku?: number | null
    productId: number
    colorId?: number | null
    colorName?: string | null
  }

  export type ProductStockUpdateManyMutationInput = {
    sizeId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    availability?: StringFieldUpdateOperationsInput | string
    price?: NullableIntFieldUpdateOperationsInput | number | null
    sku?: NullableIntFieldUpdateOperationsInput | number | null
    colorName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductStockUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sizeId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    availability?: StringFieldUpdateOperationsInput | string
    price?: NullableIntFieldUpdateOperationsInput | number | null
    sku?: NullableIntFieldUpdateOperationsInput | number | null
    productId?: IntFieldUpdateOperationsInput | number
    colorId?: NullableIntFieldUpdateOperationsInput | number | null
    colorName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DataSyncCreateInput = {
    syncType: string
    status: string
    itemsCount?: number | null
    errorMessage?: string | null
    timestamp?: Date | string
  }

  export type DataSyncUncheckedCreateInput = {
    id?: number
    syncType: string
    status: string
    itemsCount?: number | null
    errorMessage?: string | null
    timestamp?: Date | string
  }

  export type DataSyncUpdateInput = {
    syncType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    itemsCount?: NullableIntFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataSyncUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    syncType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    itemsCount?: NullableIntFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataSyncCreateManyInput = {
    id?: number
    syncType: string
    status: string
    itemsCount?: number | null
    errorMessage?: string | null
    timestamp?: Date | string
  }

  export type DataSyncUpdateManyMutationInput = {
    syncType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    itemsCount?: NullableIntFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataSyncUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    syncType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    itemsCount?: NullableIntFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceHistoryCreateInput = {
    price: number
    timestamp?: Date | string
    product: ProductCreateNestedOneWithoutPriceHistoryInput
    color?: ProductColorCreateNestedOneWithoutPriceHistoryInput
  }

  export type PriceHistoryUncheckedCreateInput = {
    id?: number
    productId: number
    price: number
    colorId?: number | null
    timestamp?: Date | string
  }

  export type PriceHistoryUpdateInput = {
    price?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutPriceHistoryNestedInput
    color?: ProductColorUpdateOneWithoutPriceHistoryNestedInput
  }

  export type PriceHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    colorId?: NullableIntFieldUpdateOperationsInput | number | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceHistoryCreateManyInput = {
    id?: number
    productId: number
    price: number
    colorId?: number | null
    timestamp?: Date | string
  }

  export type PriceHistoryUpdateManyMutationInput = {
    price?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    colorId?: NullableIntFieldUpdateOperationsInput | number | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockHistoryCreateInput = {
    sizeId: number
    available: boolean
    timestamp?: Date | string
    product: ProductCreateNestedOneWithoutStockHistoryInput
    color?: ProductColorCreateNestedOneWithoutStockHistoryInput
  }

  export type StockHistoryUncheckedCreateInput = {
    id?: number
    productId: number
    sizeId: number
    colorId?: number | null
    available: boolean
    timestamp?: Date | string
  }

  export type StockHistoryUpdateInput = {
    sizeId?: IntFieldUpdateOperationsInput | number
    available?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutStockHistoryNestedInput
    color?: ProductColorUpdateOneWithoutStockHistoryNestedInput
  }

  export type StockHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    sizeId?: IntFieldUpdateOperationsInput | number
    colorId?: NullableIntFieldUpdateOperationsInput | number | null
    available?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockHistoryCreateManyInput = {
    id?: number
    productId: number
    sizeId: number
    colorId?: number | null
    available: boolean
    timestamp?: Date | string
  }

  export type StockHistoryUpdateManyMutationInput = {
    sizeId?: IntFieldUpdateOperationsInput | number
    available?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    sizeId?: IntFieldUpdateOperationsInput | number
    colorId?: NullableIntFieldUpdateOperationsInput | number | null
    available?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryHistoryCreateInput = {
    action: string
    changes?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: Date | string
    category: SubCategoryCreateNestedOneWithoutHistoryInput
  }

  export type CategoryHistoryUncheckedCreateInput = {
    id?: number
    categoryId: number
    action: string
    changes?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: Date | string
  }

  export type CategoryHistoryUpdateInput = {
    action?: StringFieldUpdateOperationsInput | string
    changes?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: SubCategoryUpdateOneRequiredWithoutHistoryNestedInput
  }

  export type CategoryHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    changes?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryHistoryCreateManyInput = {
    id?: number
    categoryId: number
    action: string
    changes?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: Date | string
  }

  export type CategoryHistoryUpdateManyMutationInput = {
    action?: StringFieldUpdateOperationsInput | string
    changes?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    changes?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
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
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type MainCategoryListRelationFilter = {
    every?: MainCategoryWhereInput
    some?: MainCategoryWhereInput
    none?: MainCategoryWhereInput
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type MainCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BrandOrderByRelevanceInput = {
    fields: BrandOrderByRelevanceFieldEnum | BrandOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BrandCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    timestamp?: SortOrder
  }

  export type BrandMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    timestamp?: SortOrder
  }

  export type BrandMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    timestamp?: SortOrder
  }

  export type BrandScalarRelationFilter = {
    is?: BrandWhereInput
    isNot?: BrandWhereInput
  }

  export type SubCategoryListRelationFilter = {
    every?: SubCategoryWhereInput
    some?: SubCategoryWhereInput
    none?: SubCategoryWhereInput
  }

  export type SubCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MainCategoryOrderByRelevanceInput = {
    fields: MainCategoryOrderByRelevanceFieldEnum | MainCategoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MainCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    brandId?: SortOrder
    gender?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MainCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
  }

  export type MainCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    brandId?: SortOrder
    gender?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MainCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    brandId?: SortOrder
    gender?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MainCategorySumOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type MainCategoryNullableScalarRelationFilter = {
    is?: MainCategoryWhereInput | null
    isNot?: MainCategoryWhereInput | null
  }

  export type SubCategoryNullableScalarRelationFilter = {
    is?: SubCategoryWhereInput | null
    isNot?: SubCategoryWhereInput | null
  }

  export type CategoryHistoryListRelationFilter = {
    every?: CategoryHistoryWhereInput
    some?: CategoryHistoryWhereInput
    none?: CategoryHistoryWhereInput
  }

  export type CategoryHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubCategoryOrderByRelevanceInput = {
    fields: SubCategoryOrderByRelevanceFieldEnum | SubCategoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SubCategoryCountOrderByAggregateInput = {
    categoryId?: SortOrder
    categoryName?: SortOrder
    brand?: SortOrder
    gender?: SortOrder
    level?: SortOrder
    isLeaf?: SortOrder
    matchingId?: SortOrder
    productCount?: SortOrder
    parentCategoryId?: SortOrder
    parentSubCategoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubCategoryAvgOrderByAggregateInput = {
    categoryId?: SortOrder
    level?: SortOrder
    matchingId?: SortOrder
    productCount?: SortOrder
    parentCategoryId?: SortOrder
    parentSubCategoryId?: SortOrder
  }

  export type SubCategoryMaxOrderByAggregateInput = {
    categoryId?: SortOrder
    categoryName?: SortOrder
    brand?: SortOrder
    gender?: SortOrder
    level?: SortOrder
    isLeaf?: SortOrder
    matchingId?: SortOrder
    productCount?: SortOrder
    parentCategoryId?: SortOrder
    parentSubCategoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubCategoryMinOrderByAggregateInput = {
    categoryId?: SortOrder
    categoryName?: SortOrder
    brand?: SortOrder
    gender?: SortOrder
    level?: SortOrder
    isLeaf?: SortOrder
    matchingId?: SortOrder
    productCount?: SortOrder
    parentCategoryId?: SortOrder
    parentSubCategoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubCategorySumOrderByAggregateInput = {
    categoryId?: SortOrder
    level?: SortOrder
    matchingId?: SortOrder
    productCount?: SortOrder
    parentCategoryId?: SortOrder
    parentSubCategoryId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type ProductColorListRelationFilter = {
    every?: ProductColorWhereInput
    some?: ProductColorWhereInput
    none?: ProductColorWhereInput
  }

  export type ProductImageListRelationFilter = {
    every?: ProductImageWhereInput
    some?: ProductImageWhereInput
    none?: ProductImageWhereInput
  }

  export type ProductSizeListRelationFilter = {
    every?: ProductSizeWhereInput
    some?: ProductSizeWhereInput
    none?: ProductSizeWhereInput
  }

  export type ProductStockListRelationFilter = {
    every?: ProductStockWhereInput
    some?: ProductStockWhereInput
    none?: ProductStockWhereInput
  }

  export type PriceHistoryListRelationFilter = {
    every?: PriceHistoryWhereInput
    some?: PriceHistoryWhereInput
    none?: PriceHistoryWhereInput
  }

  export type StockHistoryListRelationFilter = {
    every?: StockHistoryWhereInput
    some?: StockHistoryWhereInput
    none?: StockHistoryWhereInput
  }

  export type ProductColorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductSizeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductStockOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PriceHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StockHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductOrderByRelevanceInput = {
    fields: ProductOrderByRelevanceFieldEnum | ProductOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    brandName?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    brandName?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    brandName?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type ProductColorOrderByRelevanceInput = {
    fields: ProductColorOrderByRelevanceFieldEnum | ProductColorOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProductColorProductIdColorIdCompoundUniqueInput = {
    productId: number
    colorId: string
  }

  export type ProductColorCountOrderByAggregateInput = {
    id?: SortOrder
    colorId?: SortOrder
    name?: SortOrder
    hexCode?: SortOrder
    price?: SortOrder
    description?: SortOrder
    productId?: SortOrder
  }

  export type ProductColorAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    productId?: SortOrder
  }

  export type ProductColorMaxOrderByAggregateInput = {
    id?: SortOrder
    colorId?: SortOrder
    name?: SortOrder
    hexCode?: SortOrder
    price?: SortOrder
    description?: SortOrder
    productId?: SortOrder
  }

  export type ProductColorMinOrderByAggregateInput = {
    id?: SortOrder
    colorId?: SortOrder
    name?: SortOrder
    hexCode?: SortOrder
    price?: SortOrder
    description?: SortOrder
    productId?: SortOrder
  }

  export type ProductColorSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    productId?: SortOrder
  }

  export type ProductColorNullableScalarRelationFilter = {
    is?: ProductColorWhereInput | null
    isNot?: ProductColorWhereInput | null
  }

  export type ProductSizeOrderByRelevanceInput = {
    fields: ProductSizeOrderByRelevanceFieldEnum | ProductSizeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProductSizeCountOrderByAggregateInput = {
    id?: SortOrder
    sizeId?: SortOrder
    name?: SortOrder
    availability?: SortOrder
    price?: SortOrder
    sku?: SortOrder
    productId?: SortOrder
    colorId?: SortOrder
    colorName?: SortOrder
  }

  export type ProductSizeAvgOrderByAggregateInput = {
    id?: SortOrder
    sizeId?: SortOrder
    price?: SortOrder
    sku?: SortOrder
    productId?: SortOrder
    colorId?: SortOrder
  }

  export type ProductSizeMaxOrderByAggregateInput = {
    id?: SortOrder
    sizeId?: SortOrder
    name?: SortOrder
    availability?: SortOrder
    price?: SortOrder
    sku?: SortOrder
    productId?: SortOrder
    colorId?: SortOrder
    colorName?: SortOrder
  }

  export type ProductSizeMinOrderByAggregateInput = {
    id?: SortOrder
    sizeId?: SortOrder
    name?: SortOrder
    availability?: SortOrder
    price?: SortOrder
    sku?: SortOrder
    productId?: SortOrder
    colorId?: SortOrder
    colorName?: SortOrder
  }

  export type ProductSizeSumOrderByAggregateInput = {
    id?: SortOrder
    sizeId?: SortOrder
    price?: SortOrder
    sku?: SortOrder
    productId?: SortOrder
    colorId?: SortOrder
  }

  export type ProductImageOrderByRelevanceInput = {
    fields: ProductImageOrderByRelevanceFieldEnum | ProductImageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProductImageCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    kind?: SortOrder
    order?: SortOrder
    productId?: SortOrder
    colorId?: SortOrder
    colorName?: SortOrder
    colorIndex?: SortOrder
  }

  export type ProductImageAvgOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    productId?: SortOrder
    colorId?: SortOrder
    colorIndex?: SortOrder
  }

  export type ProductImageMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    kind?: SortOrder
    order?: SortOrder
    productId?: SortOrder
    colorId?: SortOrder
    colorName?: SortOrder
    colorIndex?: SortOrder
  }

  export type ProductImageMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    kind?: SortOrder
    order?: SortOrder
    productId?: SortOrder
    colorId?: SortOrder
    colorName?: SortOrder
    colorIndex?: SortOrder
  }

  export type ProductImageSumOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    productId?: SortOrder
    colorId?: SortOrder
    colorIndex?: SortOrder
  }

  export type ProductStockOrderByRelevanceInput = {
    fields: ProductStockOrderByRelevanceFieldEnum | ProductStockOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProductStockCountOrderByAggregateInput = {
    id?: SortOrder
    sizeId?: SortOrder
    name?: SortOrder
    availability?: SortOrder
    price?: SortOrder
    sku?: SortOrder
    productId?: SortOrder
    colorId?: SortOrder
    colorName?: SortOrder
  }

  export type ProductStockAvgOrderByAggregateInput = {
    id?: SortOrder
    sizeId?: SortOrder
    price?: SortOrder
    sku?: SortOrder
    productId?: SortOrder
    colorId?: SortOrder
  }

  export type ProductStockMaxOrderByAggregateInput = {
    id?: SortOrder
    sizeId?: SortOrder
    name?: SortOrder
    availability?: SortOrder
    price?: SortOrder
    sku?: SortOrder
    productId?: SortOrder
    colorId?: SortOrder
    colorName?: SortOrder
  }

  export type ProductStockMinOrderByAggregateInput = {
    id?: SortOrder
    sizeId?: SortOrder
    name?: SortOrder
    availability?: SortOrder
    price?: SortOrder
    sku?: SortOrder
    productId?: SortOrder
    colorId?: SortOrder
    colorName?: SortOrder
  }

  export type ProductStockSumOrderByAggregateInput = {
    id?: SortOrder
    sizeId?: SortOrder
    price?: SortOrder
    sku?: SortOrder
    productId?: SortOrder
    colorId?: SortOrder
  }

  export type DataSyncOrderByRelevanceInput = {
    fields: DataSyncOrderByRelevanceFieldEnum | DataSyncOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DataSyncCountOrderByAggregateInput = {
    id?: SortOrder
    syncType?: SortOrder
    status?: SortOrder
    itemsCount?: SortOrder
    errorMessage?: SortOrder
    timestamp?: SortOrder
  }

  export type DataSyncAvgOrderByAggregateInput = {
    id?: SortOrder
    itemsCount?: SortOrder
  }

  export type DataSyncMaxOrderByAggregateInput = {
    id?: SortOrder
    syncType?: SortOrder
    status?: SortOrder
    itemsCount?: SortOrder
    errorMessage?: SortOrder
    timestamp?: SortOrder
  }

  export type DataSyncMinOrderByAggregateInput = {
    id?: SortOrder
    syncType?: SortOrder
    status?: SortOrder
    itemsCount?: SortOrder
    errorMessage?: SortOrder
    timestamp?: SortOrder
  }

  export type DataSyncSumOrderByAggregateInput = {
    id?: SortOrder
    itemsCount?: SortOrder
  }

  export type PriceHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    price?: SortOrder
    colorId?: SortOrder
    timestamp?: SortOrder
  }

  export type PriceHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    price?: SortOrder
    colorId?: SortOrder
  }

  export type PriceHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    price?: SortOrder
    colorId?: SortOrder
    timestamp?: SortOrder
  }

  export type PriceHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    price?: SortOrder
    colorId?: SortOrder
    timestamp?: SortOrder
  }

  export type PriceHistorySumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    price?: SortOrder
    colorId?: SortOrder
  }

  export type StockHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    sizeId?: SortOrder
    colorId?: SortOrder
    available?: SortOrder
    timestamp?: SortOrder
  }

  export type StockHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    sizeId?: SortOrder
    colorId?: SortOrder
  }

  export type StockHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    sizeId?: SortOrder
    colorId?: SortOrder
    available?: SortOrder
    timestamp?: SortOrder
  }

  export type StockHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    sizeId?: SortOrder
    colorId?: SortOrder
    available?: SortOrder
    timestamp?: SortOrder
  }

  export type StockHistorySumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    sizeId?: SortOrder
    colorId?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SubCategoryScalarRelationFilter = {
    is?: SubCategoryWhereInput
    isNot?: SubCategoryWhereInput
  }

  export type CategoryHistoryOrderByRelevanceInput = {
    fields: CategoryHistoryOrderByRelevanceFieldEnum | CategoryHistoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CategoryHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    action?: SortOrder
    changes?: SortOrder
    timestamp?: SortOrder
  }

  export type CategoryHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
  }

  export type CategoryHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    action?: SortOrder
    timestamp?: SortOrder
  }

  export type CategoryHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    action?: SortOrder
    timestamp?: SortOrder
  }

  export type CategoryHistorySumOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MainCategoryCreateNestedManyWithoutBrandInput = {
    create?: XOR<MainCategoryCreateWithoutBrandInput, MainCategoryUncheckedCreateWithoutBrandInput> | MainCategoryCreateWithoutBrandInput[] | MainCategoryUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: MainCategoryCreateOrConnectWithoutBrandInput | MainCategoryCreateOrConnectWithoutBrandInput[]
    createMany?: MainCategoryCreateManyBrandInputEnvelope
    connect?: MainCategoryWhereUniqueInput | MainCategoryWhereUniqueInput[]
  }

  export type ProductCreateNestedManyWithoutBrandInput = {
    create?: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput> | ProductCreateWithoutBrandInput[] | ProductUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBrandInput | ProductCreateOrConnectWithoutBrandInput[]
    createMany?: ProductCreateManyBrandInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type MainCategoryUncheckedCreateNestedManyWithoutBrandInput = {
    create?: XOR<MainCategoryCreateWithoutBrandInput, MainCategoryUncheckedCreateWithoutBrandInput> | MainCategoryCreateWithoutBrandInput[] | MainCategoryUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: MainCategoryCreateOrConnectWithoutBrandInput | MainCategoryCreateOrConnectWithoutBrandInput[]
    createMany?: MainCategoryCreateManyBrandInputEnvelope
    connect?: MainCategoryWhereUniqueInput | MainCategoryWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutBrandInput = {
    create?: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput> | ProductCreateWithoutBrandInput[] | ProductUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBrandInput | ProductCreateOrConnectWithoutBrandInput[]
    createMany?: ProductCreateManyBrandInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type MainCategoryUpdateManyWithoutBrandNestedInput = {
    create?: XOR<MainCategoryCreateWithoutBrandInput, MainCategoryUncheckedCreateWithoutBrandInput> | MainCategoryCreateWithoutBrandInput[] | MainCategoryUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: MainCategoryCreateOrConnectWithoutBrandInput | MainCategoryCreateOrConnectWithoutBrandInput[]
    upsert?: MainCategoryUpsertWithWhereUniqueWithoutBrandInput | MainCategoryUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: MainCategoryCreateManyBrandInputEnvelope
    set?: MainCategoryWhereUniqueInput | MainCategoryWhereUniqueInput[]
    disconnect?: MainCategoryWhereUniqueInput | MainCategoryWhereUniqueInput[]
    delete?: MainCategoryWhereUniqueInput | MainCategoryWhereUniqueInput[]
    connect?: MainCategoryWhereUniqueInput | MainCategoryWhereUniqueInput[]
    update?: MainCategoryUpdateWithWhereUniqueWithoutBrandInput | MainCategoryUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: MainCategoryUpdateManyWithWhereWithoutBrandInput | MainCategoryUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: MainCategoryScalarWhereInput | MainCategoryScalarWhereInput[]
  }

  export type ProductUpdateManyWithoutBrandNestedInput = {
    create?: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput> | ProductCreateWithoutBrandInput[] | ProductUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBrandInput | ProductCreateOrConnectWithoutBrandInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutBrandInput | ProductUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: ProductCreateManyBrandInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutBrandInput | ProductUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutBrandInput | ProductUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type MainCategoryUncheckedUpdateManyWithoutBrandNestedInput = {
    create?: XOR<MainCategoryCreateWithoutBrandInput, MainCategoryUncheckedCreateWithoutBrandInput> | MainCategoryCreateWithoutBrandInput[] | MainCategoryUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: MainCategoryCreateOrConnectWithoutBrandInput | MainCategoryCreateOrConnectWithoutBrandInput[]
    upsert?: MainCategoryUpsertWithWhereUniqueWithoutBrandInput | MainCategoryUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: MainCategoryCreateManyBrandInputEnvelope
    set?: MainCategoryWhereUniqueInput | MainCategoryWhereUniqueInput[]
    disconnect?: MainCategoryWhereUniqueInput | MainCategoryWhereUniqueInput[]
    delete?: MainCategoryWhereUniqueInput | MainCategoryWhereUniqueInput[]
    connect?: MainCategoryWhereUniqueInput | MainCategoryWhereUniqueInput[]
    update?: MainCategoryUpdateWithWhereUniqueWithoutBrandInput | MainCategoryUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: MainCategoryUpdateManyWithWhereWithoutBrandInput | MainCategoryUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: MainCategoryScalarWhereInput | MainCategoryScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutBrandNestedInput = {
    create?: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput> | ProductCreateWithoutBrandInput[] | ProductUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBrandInput | ProductCreateOrConnectWithoutBrandInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutBrandInput | ProductUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: ProductCreateManyBrandInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutBrandInput | ProductUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutBrandInput | ProductUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type BrandCreateNestedOneWithoutMainCategoriesInput = {
    create?: XOR<BrandCreateWithoutMainCategoriesInput, BrandUncheckedCreateWithoutMainCategoriesInput>
    connectOrCreate?: BrandCreateOrConnectWithoutMainCategoriesInput
    connect?: BrandWhereUniqueInput
  }

  export type SubCategoryCreateNestedManyWithoutParentCategoryInput = {
    create?: XOR<SubCategoryCreateWithoutParentCategoryInput, SubCategoryUncheckedCreateWithoutParentCategoryInput> | SubCategoryCreateWithoutParentCategoryInput[] | SubCategoryUncheckedCreateWithoutParentCategoryInput[]
    connectOrCreate?: SubCategoryCreateOrConnectWithoutParentCategoryInput | SubCategoryCreateOrConnectWithoutParentCategoryInput[]
    createMany?: SubCategoryCreateManyParentCategoryInputEnvelope
    connect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
  }

  export type SubCategoryUncheckedCreateNestedManyWithoutParentCategoryInput = {
    create?: XOR<SubCategoryCreateWithoutParentCategoryInput, SubCategoryUncheckedCreateWithoutParentCategoryInput> | SubCategoryCreateWithoutParentCategoryInput[] | SubCategoryUncheckedCreateWithoutParentCategoryInput[]
    connectOrCreate?: SubCategoryCreateOrConnectWithoutParentCategoryInput | SubCategoryCreateOrConnectWithoutParentCategoryInput[]
    createMany?: SubCategoryCreateManyParentCategoryInputEnvelope
    connect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
  }

  export type BrandUpdateOneRequiredWithoutMainCategoriesNestedInput = {
    create?: XOR<BrandCreateWithoutMainCategoriesInput, BrandUncheckedCreateWithoutMainCategoriesInput>
    connectOrCreate?: BrandCreateOrConnectWithoutMainCategoriesInput
    upsert?: BrandUpsertWithoutMainCategoriesInput
    connect?: BrandWhereUniqueInput
    update?: XOR<XOR<BrandUpdateToOneWithWhereWithoutMainCategoriesInput, BrandUpdateWithoutMainCategoriesInput>, BrandUncheckedUpdateWithoutMainCategoriesInput>
  }

  export type SubCategoryUpdateManyWithoutParentCategoryNestedInput = {
    create?: XOR<SubCategoryCreateWithoutParentCategoryInput, SubCategoryUncheckedCreateWithoutParentCategoryInput> | SubCategoryCreateWithoutParentCategoryInput[] | SubCategoryUncheckedCreateWithoutParentCategoryInput[]
    connectOrCreate?: SubCategoryCreateOrConnectWithoutParentCategoryInput | SubCategoryCreateOrConnectWithoutParentCategoryInput[]
    upsert?: SubCategoryUpsertWithWhereUniqueWithoutParentCategoryInput | SubCategoryUpsertWithWhereUniqueWithoutParentCategoryInput[]
    createMany?: SubCategoryCreateManyParentCategoryInputEnvelope
    set?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    disconnect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    delete?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    connect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    update?: SubCategoryUpdateWithWhereUniqueWithoutParentCategoryInput | SubCategoryUpdateWithWhereUniqueWithoutParentCategoryInput[]
    updateMany?: SubCategoryUpdateManyWithWhereWithoutParentCategoryInput | SubCategoryUpdateManyWithWhereWithoutParentCategoryInput[]
    deleteMany?: SubCategoryScalarWhereInput | SubCategoryScalarWhereInput[]
  }

  export type SubCategoryUncheckedUpdateManyWithoutParentCategoryNestedInput = {
    create?: XOR<SubCategoryCreateWithoutParentCategoryInput, SubCategoryUncheckedCreateWithoutParentCategoryInput> | SubCategoryCreateWithoutParentCategoryInput[] | SubCategoryUncheckedCreateWithoutParentCategoryInput[]
    connectOrCreate?: SubCategoryCreateOrConnectWithoutParentCategoryInput | SubCategoryCreateOrConnectWithoutParentCategoryInput[]
    upsert?: SubCategoryUpsertWithWhereUniqueWithoutParentCategoryInput | SubCategoryUpsertWithWhereUniqueWithoutParentCategoryInput[]
    createMany?: SubCategoryCreateManyParentCategoryInputEnvelope
    set?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    disconnect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    delete?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    connect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    update?: SubCategoryUpdateWithWhereUniqueWithoutParentCategoryInput | SubCategoryUpdateWithWhereUniqueWithoutParentCategoryInput[]
    updateMany?: SubCategoryUpdateManyWithWhereWithoutParentCategoryInput | SubCategoryUpdateManyWithWhereWithoutParentCategoryInput[]
    deleteMany?: SubCategoryScalarWhereInput | SubCategoryScalarWhereInput[]
  }

  export type MainCategoryCreateNestedOneWithoutSubcategoriesInput = {
    create?: XOR<MainCategoryCreateWithoutSubcategoriesInput, MainCategoryUncheckedCreateWithoutSubcategoriesInput>
    connectOrCreate?: MainCategoryCreateOrConnectWithoutSubcategoriesInput
    connect?: MainCategoryWhereUniqueInput
  }

  export type SubCategoryCreateNestedOneWithoutSubcategoriesInput = {
    create?: XOR<SubCategoryCreateWithoutSubcategoriesInput, SubCategoryUncheckedCreateWithoutSubcategoriesInput>
    connectOrCreate?: SubCategoryCreateOrConnectWithoutSubcategoriesInput
    connect?: SubCategoryWhereUniqueInput
  }

  export type SubCategoryCreateNestedManyWithoutParentSubCategoryInput = {
    create?: XOR<SubCategoryCreateWithoutParentSubCategoryInput, SubCategoryUncheckedCreateWithoutParentSubCategoryInput> | SubCategoryCreateWithoutParentSubCategoryInput[] | SubCategoryUncheckedCreateWithoutParentSubCategoryInput[]
    connectOrCreate?: SubCategoryCreateOrConnectWithoutParentSubCategoryInput | SubCategoryCreateOrConnectWithoutParentSubCategoryInput[]
    createMany?: SubCategoryCreateManyParentSubCategoryInputEnvelope
    connect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
  }

  export type ProductCreateNestedManyWithoutSubCategoriesInput = {
    create?: XOR<ProductCreateWithoutSubCategoriesInput, ProductUncheckedCreateWithoutSubCategoriesInput> | ProductCreateWithoutSubCategoriesInput[] | ProductUncheckedCreateWithoutSubCategoriesInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutSubCategoriesInput | ProductCreateOrConnectWithoutSubCategoriesInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type CategoryHistoryCreateNestedManyWithoutCategoryInput = {
    create?: XOR<CategoryHistoryCreateWithoutCategoryInput, CategoryHistoryUncheckedCreateWithoutCategoryInput> | CategoryHistoryCreateWithoutCategoryInput[] | CategoryHistoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CategoryHistoryCreateOrConnectWithoutCategoryInput | CategoryHistoryCreateOrConnectWithoutCategoryInput[]
    createMany?: CategoryHistoryCreateManyCategoryInputEnvelope
    connect?: CategoryHistoryWhereUniqueInput | CategoryHistoryWhereUniqueInput[]
  }

  export type SubCategoryUncheckedCreateNestedManyWithoutParentSubCategoryInput = {
    create?: XOR<SubCategoryCreateWithoutParentSubCategoryInput, SubCategoryUncheckedCreateWithoutParentSubCategoryInput> | SubCategoryCreateWithoutParentSubCategoryInput[] | SubCategoryUncheckedCreateWithoutParentSubCategoryInput[]
    connectOrCreate?: SubCategoryCreateOrConnectWithoutParentSubCategoryInput | SubCategoryCreateOrConnectWithoutParentSubCategoryInput[]
    createMany?: SubCategoryCreateManyParentSubCategoryInputEnvelope
    connect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutSubCategoriesInput = {
    create?: XOR<ProductCreateWithoutSubCategoriesInput, ProductUncheckedCreateWithoutSubCategoriesInput> | ProductCreateWithoutSubCategoriesInput[] | ProductUncheckedCreateWithoutSubCategoriesInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutSubCategoriesInput | ProductCreateOrConnectWithoutSubCategoriesInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type CategoryHistoryUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<CategoryHistoryCreateWithoutCategoryInput, CategoryHistoryUncheckedCreateWithoutCategoryInput> | CategoryHistoryCreateWithoutCategoryInput[] | CategoryHistoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CategoryHistoryCreateOrConnectWithoutCategoryInput | CategoryHistoryCreateOrConnectWithoutCategoryInput[]
    createMany?: CategoryHistoryCreateManyCategoryInputEnvelope
    connect?: CategoryHistoryWhereUniqueInput | CategoryHistoryWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MainCategoryUpdateOneWithoutSubcategoriesNestedInput = {
    create?: XOR<MainCategoryCreateWithoutSubcategoriesInput, MainCategoryUncheckedCreateWithoutSubcategoriesInput>
    connectOrCreate?: MainCategoryCreateOrConnectWithoutSubcategoriesInput
    upsert?: MainCategoryUpsertWithoutSubcategoriesInput
    disconnect?: MainCategoryWhereInput | boolean
    delete?: MainCategoryWhereInput | boolean
    connect?: MainCategoryWhereUniqueInput
    update?: XOR<XOR<MainCategoryUpdateToOneWithWhereWithoutSubcategoriesInput, MainCategoryUpdateWithoutSubcategoriesInput>, MainCategoryUncheckedUpdateWithoutSubcategoriesInput>
  }

  export type SubCategoryUpdateOneWithoutSubcategoriesNestedInput = {
    create?: XOR<SubCategoryCreateWithoutSubcategoriesInput, SubCategoryUncheckedCreateWithoutSubcategoriesInput>
    connectOrCreate?: SubCategoryCreateOrConnectWithoutSubcategoriesInput
    upsert?: SubCategoryUpsertWithoutSubcategoriesInput
    disconnect?: SubCategoryWhereInput | boolean
    delete?: SubCategoryWhereInput | boolean
    connect?: SubCategoryWhereUniqueInput
    update?: XOR<XOR<SubCategoryUpdateToOneWithWhereWithoutSubcategoriesInput, SubCategoryUpdateWithoutSubcategoriesInput>, SubCategoryUncheckedUpdateWithoutSubcategoriesInput>
  }

  export type SubCategoryUpdateManyWithoutParentSubCategoryNestedInput = {
    create?: XOR<SubCategoryCreateWithoutParentSubCategoryInput, SubCategoryUncheckedCreateWithoutParentSubCategoryInput> | SubCategoryCreateWithoutParentSubCategoryInput[] | SubCategoryUncheckedCreateWithoutParentSubCategoryInput[]
    connectOrCreate?: SubCategoryCreateOrConnectWithoutParentSubCategoryInput | SubCategoryCreateOrConnectWithoutParentSubCategoryInput[]
    upsert?: SubCategoryUpsertWithWhereUniqueWithoutParentSubCategoryInput | SubCategoryUpsertWithWhereUniqueWithoutParentSubCategoryInput[]
    createMany?: SubCategoryCreateManyParentSubCategoryInputEnvelope
    set?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    disconnect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    delete?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    connect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    update?: SubCategoryUpdateWithWhereUniqueWithoutParentSubCategoryInput | SubCategoryUpdateWithWhereUniqueWithoutParentSubCategoryInput[]
    updateMany?: SubCategoryUpdateManyWithWhereWithoutParentSubCategoryInput | SubCategoryUpdateManyWithWhereWithoutParentSubCategoryInput[]
    deleteMany?: SubCategoryScalarWhereInput | SubCategoryScalarWhereInput[]
  }

  export type ProductUpdateManyWithoutSubCategoriesNestedInput = {
    create?: XOR<ProductCreateWithoutSubCategoriesInput, ProductUncheckedCreateWithoutSubCategoriesInput> | ProductCreateWithoutSubCategoriesInput[] | ProductUncheckedCreateWithoutSubCategoriesInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutSubCategoriesInput | ProductCreateOrConnectWithoutSubCategoriesInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutSubCategoriesInput | ProductUpsertWithWhereUniqueWithoutSubCategoriesInput[]
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutSubCategoriesInput | ProductUpdateWithWhereUniqueWithoutSubCategoriesInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutSubCategoriesInput | ProductUpdateManyWithWhereWithoutSubCategoriesInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type CategoryHistoryUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<CategoryHistoryCreateWithoutCategoryInput, CategoryHistoryUncheckedCreateWithoutCategoryInput> | CategoryHistoryCreateWithoutCategoryInput[] | CategoryHistoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CategoryHistoryCreateOrConnectWithoutCategoryInput | CategoryHistoryCreateOrConnectWithoutCategoryInput[]
    upsert?: CategoryHistoryUpsertWithWhereUniqueWithoutCategoryInput | CategoryHistoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: CategoryHistoryCreateManyCategoryInputEnvelope
    set?: CategoryHistoryWhereUniqueInput | CategoryHistoryWhereUniqueInput[]
    disconnect?: CategoryHistoryWhereUniqueInput | CategoryHistoryWhereUniqueInput[]
    delete?: CategoryHistoryWhereUniqueInput | CategoryHistoryWhereUniqueInput[]
    connect?: CategoryHistoryWhereUniqueInput | CategoryHistoryWhereUniqueInput[]
    update?: CategoryHistoryUpdateWithWhereUniqueWithoutCategoryInput | CategoryHistoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: CategoryHistoryUpdateManyWithWhereWithoutCategoryInput | CategoryHistoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: CategoryHistoryScalarWhereInput | CategoryHistoryScalarWhereInput[]
  }

  export type SubCategoryUncheckedUpdateManyWithoutParentSubCategoryNestedInput = {
    create?: XOR<SubCategoryCreateWithoutParentSubCategoryInput, SubCategoryUncheckedCreateWithoutParentSubCategoryInput> | SubCategoryCreateWithoutParentSubCategoryInput[] | SubCategoryUncheckedCreateWithoutParentSubCategoryInput[]
    connectOrCreate?: SubCategoryCreateOrConnectWithoutParentSubCategoryInput | SubCategoryCreateOrConnectWithoutParentSubCategoryInput[]
    upsert?: SubCategoryUpsertWithWhereUniqueWithoutParentSubCategoryInput | SubCategoryUpsertWithWhereUniqueWithoutParentSubCategoryInput[]
    createMany?: SubCategoryCreateManyParentSubCategoryInputEnvelope
    set?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    disconnect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    delete?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    connect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    update?: SubCategoryUpdateWithWhereUniqueWithoutParentSubCategoryInput | SubCategoryUpdateWithWhereUniqueWithoutParentSubCategoryInput[]
    updateMany?: SubCategoryUpdateManyWithWhereWithoutParentSubCategoryInput | SubCategoryUpdateManyWithWhereWithoutParentSubCategoryInput[]
    deleteMany?: SubCategoryScalarWhereInput | SubCategoryScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutSubCategoriesNestedInput = {
    create?: XOR<ProductCreateWithoutSubCategoriesInput, ProductUncheckedCreateWithoutSubCategoriesInput> | ProductCreateWithoutSubCategoriesInput[] | ProductUncheckedCreateWithoutSubCategoriesInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutSubCategoriesInput | ProductCreateOrConnectWithoutSubCategoriesInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutSubCategoriesInput | ProductUpsertWithWhereUniqueWithoutSubCategoriesInput[]
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutSubCategoriesInput | ProductUpdateWithWhereUniqueWithoutSubCategoriesInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutSubCategoriesInput | ProductUpdateManyWithWhereWithoutSubCategoriesInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type CategoryHistoryUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<CategoryHistoryCreateWithoutCategoryInput, CategoryHistoryUncheckedCreateWithoutCategoryInput> | CategoryHistoryCreateWithoutCategoryInput[] | CategoryHistoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CategoryHistoryCreateOrConnectWithoutCategoryInput | CategoryHistoryCreateOrConnectWithoutCategoryInput[]
    upsert?: CategoryHistoryUpsertWithWhereUniqueWithoutCategoryInput | CategoryHistoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: CategoryHistoryCreateManyCategoryInputEnvelope
    set?: CategoryHistoryWhereUniqueInput | CategoryHistoryWhereUniqueInput[]
    disconnect?: CategoryHistoryWhereUniqueInput | CategoryHistoryWhereUniqueInput[]
    delete?: CategoryHistoryWhereUniqueInput | CategoryHistoryWhereUniqueInput[]
    connect?: CategoryHistoryWhereUniqueInput | CategoryHistoryWhereUniqueInput[]
    update?: CategoryHistoryUpdateWithWhereUniqueWithoutCategoryInput | CategoryHistoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: CategoryHistoryUpdateManyWithWhereWithoutCategoryInput | CategoryHistoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: CategoryHistoryScalarWhereInput | CategoryHistoryScalarWhereInput[]
  }

  export type BrandCreateNestedOneWithoutProductsInput = {
    create?: XOR<BrandCreateWithoutProductsInput, BrandUncheckedCreateWithoutProductsInput>
    connectOrCreate?: BrandCreateOrConnectWithoutProductsInput
    connect?: BrandWhereUniqueInput
  }

  export type ProductColorCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductColorCreateWithoutProductInput, ProductColorUncheckedCreateWithoutProductInput> | ProductColorCreateWithoutProductInput[] | ProductColorUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductColorCreateOrConnectWithoutProductInput | ProductColorCreateOrConnectWithoutProductInput[]
    createMany?: ProductColorCreateManyProductInputEnvelope
    connect?: ProductColorWhereUniqueInput | ProductColorWhereUniqueInput[]
  }

  export type ProductImageCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput> | ProductImageCreateWithoutProductInput[] | ProductImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductImageCreateOrConnectWithoutProductInput | ProductImageCreateOrConnectWithoutProductInput[]
    createMany?: ProductImageCreateManyProductInputEnvelope
    connect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
  }

  export type ProductSizeCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductSizeCreateWithoutProductInput, ProductSizeUncheckedCreateWithoutProductInput> | ProductSizeCreateWithoutProductInput[] | ProductSizeUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductSizeCreateOrConnectWithoutProductInput | ProductSizeCreateOrConnectWithoutProductInput[]
    createMany?: ProductSizeCreateManyProductInputEnvelope
    connect?: ProductSizeWhereUniqueInput | ProductSizeWhereUniqueInput[]
  }

  export type ProductStockCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductStockCreateWithoutProductInput, ProductStockUncheckedCreateWithoutProductInput> | ProductStockCreateWithoutProductInput[] | ProductStockUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductStockCreateOrConnectWithoutProductInput | ProductStockCreateOrConnectWithoutProductInput[]
    createMany?: ProductStockCreateManyProductInputEnvelope
    connect?: ProductStockWhereUniqueInput | ProductStockWhereUniqueInput[]
  }

  export type SubCategoryCreateNestedManyWithoutProductsInput = {
    create?: XOR<SubCategoryCreateWithoutProductsInput, SubCategoryUncheckedCreateWithoutProductsInput> | SubCategoryCreateWithoutProductsInput[] | SubCategoryUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: SubCategoryCreateOrConnectWithoutProductsInput | SubCategoryCreateOrConnectWithoutProductsInput[]
    connect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
  }

  export type PriceHistoryCreateNestedManyWithoutProductInput = {
    create?: XOR<PriceHistoryCreateWithoutProductInput, PriceHistoryUncheckedCreateWithoutProductInput> | PriceHistoryCreateWithoutProductInput[] | PriceHistoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PriceHistoryCreateOrConnectWithoutProductInput | PriceHistoryCreateOrConnectWithoutProductInput[]
    createMany?: PriceHistoryCreateManyProductInputEnvelope
    connect?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
  }

  export type StockHistoryCreateNestedManyWithoutProductInput = {
    create?: XOR<StockHistoryCreateWithoutProductInput, StockHistoryUncheckedCreateWithoutProductInput> | StockHistoryCreateWithoutProductInput[] | StockHistoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StockHistoryCreateOrConnectWithoutProductInput | StockHistoryCreateOrConnectWithoutProductInput[]
    createMany?: StockHistoryCreateManyProductInputEnvelope
    connect?: StockHistoryWhereUniqueInput | StockHistoryWhereUniqueInput[]
  }

  export type ProductColorUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductColorCreateWithoutProductInput, ProductColorUncheckedCreateWithoutProductInput> | ProductColorCreateWithoutProductInput[] | ProductColorUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductColorCreateOrConnectWithoutProductInput | ProductColorCreateOrConnectWithoutProductInput[]
    createMany?: ProductColorCreateManyProductInputEnvelope
    connect?: ProductColorWhereUniqueInput | ProductColorWhereUniqueInput[]
  }

  export type ProductImageUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput> | ProductImageCreateWithoutProductInput[] | ProductImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductImageCreateOrConnectWithoutProductInput | ProductImageCreateOrConnectWithoutProductInput[]
    createMany?: ProductImageCreateManyProductInputEnvelope
    connect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
  }

  export type ProductSizeUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductSizeCreateWithoutProductInput, ProductSizeUncheckedCreateWithoutProductInput> | ProductSizeCreateWithoutProductInput[] | ProductSizeUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductSizeCreateOrConnectWithoutProductInput | ProductSizeCreateOrConnectWithoutProductInput[]
    createMany?: ProductSizeCreateManyProductInputEnvelope
    connect?: ProductSizeWhereUniqueInput | ProductSizeWhereUniqueInput[]
  }

  export type ProductStockUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductStockCreateWithoutProductInput, ProductStockUncheckedCreateWithoutProductInput> | ProductStockCreateWithoutProductInput[] | ProductStockUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductStockCreateOrConnectWithoutProductInput | ProductStockCreateOrConnectWithoutProductInput[]
    createMany?: ProductStockCreateManyProductInputEnvelope
    connect?: ProductStockWhereUniqueInput | ProductStockWhereUniqueInput[]
  }

  export type SubCategoryUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<SubCategoryCreateWithoutProductsInput, SubCategoryUncheckedCreateWithoutProductsInput> | SubCategoryCreateWithoutProductsInput[] | SubCategoryUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: SubCategoryCreateOrConnectWithoutProductsInput | SubCategoryCreateOrConnectWithoutProductsInput[]
    connect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
  }

  export type PriceHistoryUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<PriceHistoryCreateWithoutProductInput, PriceHistoryUncheckedCreateWithoutProductInput> | PriceHistoryCreateWithoutProductInput[] | PriceHistoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PriceHistoryCreateOrConnectWithoutProductInput | PriceHistoryCreateOrConnectWithoutProductInput[]
    createMany?: PriceHistoryCreateManyProductInputEnvelope
    connect?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
  }

  export type StockHistoryUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<StockHistoryCreateWithoutProductInput, StockHistoryUncheckedCreateWithoutProductInput> | StockHistoryCreateWithoutProductInput[] | StockHistoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StockHistoryCreateOrConnectWithoutProductInput | StockHistoryCreateOrConnectWithoutProductInput[]
    createMany?: StockHistoryCreateManyProductInputEnvelope
    connect?: StockHistoryWhereUniqueInput | StockHistoryWhereUniqueInput[]
  }

  export type BrandUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<BrandCreateWithoutProductsInput, BrandUncheckedCreateWithoutProductsInput>
    connectOrCreate?: BrandCreateOrConnectWithoutProductsInput
    upsert?: BrandUpsertWithoutProductsInput
    connect?: BrandWhereUniqueInput
    update?: XOR<XOR<BrandUpdateToOneWithWhereWithoutProductsInput, BrandUpdateWithoutProductsInput>, BrandUncheckedUpdateWithoutProductsInput>
  }

  export type ProductColorUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductColorCreateWithoutProductInput, ProductColorUncheckedCreateWithoutProductInput> | ProductColorCreateWithoutProductInput[] | ProductColorUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductColorCreateOrConnectWithoutProductInput | ProductColorCreateOrConnectWithoutProductInput[]
    upsert?: ProductColorUpsertWithWhereUniqueWithoutProductInput | ProductColorUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductColorCreateManyProductInputEnvelope
    set?: ProductColorWhereUniqueInput | ProductColorWhereUniqueInput[]
    disconnect?: ProductColorWhereUniqueInput | ProductColorWhereUniqueInput[]
    delete?: ProductColorWhereUniqueInput | ProductColorWhereUniqueInput[]
    connect?: ProductColorWhereUniqueInput | ProductColorWhereUniqueInput[]
    update?: ProductColorUpdateWithWhereUniqueWithoutProductInput | ProductColorUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductColorUpdateManyWithWhereWithoutProductInput | ProductColorUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductColorScalarWhereInput | ProductColorScalarWhereInput[]
  }

  export type ProductImageUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput> | ProductImageCreateWithoutProductInput[] | ProductImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductImageCreateOrConnectWithoutProductInput | ProductImageCreateOrConnectWithoutProductInput[]
    upsert?: ProductImageUpsertWithWhereUniqueWithoutProductInput | ProductImageUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductImageCreateManyProductInputEnvelope
    set?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    disconnect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    delete?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    connect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    update?: ProductImageUpdateWithWhereUniqueWithoutProductInput | ProductImageUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductImageUpdateManyWithWhereWithoutProductInput | ProductImageUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductImageScalarWhereInput | ProductImageScalarWhereInput[]
  }

  export type ProductSizeUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductSizeCreateWithoutProductInput, ProductSizeUncheckedCreateWithoutProductInput> | ProductSizeCreateWithoutProductInput[] | ProductSizeUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductSizeCreateOrConnectWithoutProductInput | ProductSizeCreateOrConnectWithoutProductInput[]
    upsert?: ProductSizeUpsertWithWhereUniqueWithoutProductInput | ProductSizeUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductSizeCreateManyProductInputEnvelope
    set?: ProductSizeWhereUniqueInput | ProductSizeWhereUniqueInput[]
    disconnect?: ProductSizeWhereUniqueInput | ProductSizeWhereUniqueInput[]
    delete?: ProductSizeWhereUniqueInput | ProductSizeWhereUniqueInput[]
    connect?: ProductSizeWhereUniqueInput | ProductSizeWhereUniqueInput[]
    update?: ProductSizeUpdateWithWhereUniqueWithoutProductInput | ProductSizeUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductSizeUpdateManyWithWhereWithoutProductInput | ProductSizeUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductSizeScalarWhereInput | ProductSizeScalarWhereInput[]
  }

  export type ProductStockUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductStockCreateWithoutProductInput, ProductStockUncheckedCreateWithoutProductInput> | ProductStockCreateWithoutProductInput[] | ProductStockUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductStockCreateOrConnectWithoutProductInput | ProductStockCreateOrConnectWithoutProductInput[]
    upsert?: ProductStockUpsertWithWhereUniqueWithoutProductInput | ProductStockUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductStockCreateManyProductInputEnvelope
    set?: ProductStockWhereUniqueInput | ProductStockWhereUniqueInput[]
    disconnect?: ProductStockWhereUniqueInput | ProductStockWhereUniqueInput[]
    delete?: ProductStockWhereUniqueInput | ProductStockWhereUniqueInput[]
    connect?: ProductStockWhereUniqueInput | ProductStockWhereUniqueInput[]
    update?: ProductStockUpdateWithWhereUniqueWithoutProductInput | ProductStockUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductStockUpdateManyWithWhereWithoutProductInput | ProductStockUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductStockScalarWhereInput | ProductStockScalarWhereInput[]
  }

  export type SubCategoryUpdateManyWithoutProductsNestedInput = {
    create?: XOR<SubCategoryCreateWithoutProductsInput, SubCategoryUncheckedCreateWithoutProductsInput> | SubCategoryCreateWithoutProductsInput[] | SubCategoryUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: SubCategoryCreateOrConnectWithoutProductsInput | SubCategoryCreateOrConnectWithoutProductsInput[]
    upsert?: SubCategoryUpsertWithWhereUniqueWithoutProductsInput | SubCategoryUpsertWithWhereUniqueWithoutProductsInput[]
    set?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    disconnect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    delete?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    connect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    update?: SubCategoryUpdateWithWhereUniqueWithoutProductsInput | SubCategoryUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: SubCategoryUpdateManyWithWhereWithoutProductsInput | SubCategoryUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: SubCategoryScalarWhereInput | SubCategoryScalarWhereInput[]
  }

  export type PriceHistoryUpdateManyWithoutProductNestedInput = {
    create?: XOR<PriceHistoryCreateWithoutProductInput, PriceHistoryUncheckedCreateWithoutProductInput> | PriceHistoryCreateWithoutProductInput[] | PriceHistoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PriceHistoryCreateOrConnectWithoutProductInput | PriceHistoryCreateOrConnectWithoutProductInput[]
    upsert?: PriceHistoryUpsertWithWhereUniqueWithoutProductInput | PriceHistoryUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: PriceHistoryCreateManyProductInputEnvelope
    set?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    disconnect?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    delete?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    connect?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    update?: PriceHistoryUpdateWithWhereUniqueWithoutProductInput | PriceHistoryUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: PriceHistoryUpdateManyWithWhereWithoutProductInput | PriceHistoryUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: PriceHistoryScalarWhereInput | PriceHistoryScalarWhereInput[]
  }

  export type StockHistoryUpdateManyWithoutProductNestedInput = {
    create?: XOR<StockHistoryCreateWithoutProductInput, StockHistoryUncheckedCreateWithoutProductInput> | StockHistoryCreateWithoutProductInput[] | StockHistoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StockHistoryCreateOrConnectWithoutProductInput | StockHistoryCreateOrConnectWithoutProductInput[]
    upsert?: StockHistoryUpsertWithWhereUniqueWithoutProductInput | StockHistoryUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: StockHistoryCreateManyProductInputEnvelope
    set?: StockHistoryWhereUniqueInput | StockHistoryWhereUniqueInput[]
    disconnect?: StockHistoryWhereUniqueInput | StockHistoryWhereUniqueInput[]
    delete?: StockHistoryWhereUniqueInput | StockHistoryWhereUniqueInput[]
    connect?: StockHistoryWhereUniqueInput | StockHistoryWhereUniqueInput[]
    update?: StockHistoryUpdateWithWhereUniqueWithoutProductInput | StockHistoryUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: StockHistoryUpdateManyWithWhereWithoutProductInput | StockHistoryUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: StockHistoryScalarWhereInput | StockHistoryScalarWhereInput[]
  }

  export type ProductColorUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductColorCreateWithoutProductInput, ProductColorUncheckedCreateWithoutProductInput> | ProductColorCreateWithoutProductInput[] | ProductColorUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductColorCreateOrConnectWithoutProductInput | ProductColorCreateOrConnectWithoutProductInput[]
    upsert?: ProductColorUpsertWithWhereUniqueWithoutProductInput | ProductColorUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductColorCreateManyProductInputEnvelope
    set?: ProductColorWhereUniqueInput | ProductColorWhereUniqueInput[]
    disconnect?: ProductColorWhereUniqueInput | ProductColorWhereUniqueInput[]
    delete?: ProductColorWhereUniqueInput | ProductColorWhereUniqueInput[]
    connect?: ProductColorWhereUniqueInput | ProductColorWhereUniqueInput[]
    update?: ProductColorUpdateWithWhereUniqueWithoutProductInput | ProductColorUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductColorUpdateManyWithWhereWithoutProductInput | ProductColorUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductColorScalarWhereInput | ProductColorScalarWhereInput[]
  }

  export type ProductImageUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput> | ProductImageCreateWithoutProductInput[] | ProductImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductImageCreateOrConnectWithoutProductInput | ProductImageCreateOrConnectWithoutProductInput[]
    upsert?: ProductImageUpsertWithWhereUniqueWithoutProductInput | ProductImageUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductImageCreateManyProductInputEnvelope
    set?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    disconnect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    delete?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    connect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    update?: ProductImageUpdateWithWhereUniqueWithoutProductInput | ProductImageUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductImageUpdateManyWithWhereWithoutProductInput | ProductImageUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductImageScalarWhereInput | ProductImageScalarWhereInput[]
  }

  export type ProductSizeUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductSizeCreateWithoutProductInput, ProductSizeUncheckedCreateWithoutProductInput> | ProductSizeCreateWithoutProductInput[] | ProductSizeUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductSizeCreateOrConnectWithoutProductInput | ProductSizeCreateOrConnectWithoutProductInput[]
    upsert?: ProductSizeUpsertWithWhereUniqueWithoutProductInput | ProductSizeUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductSizeCreateManyProductInputEnvelope
    set?: ProductSizeWhereUniqueInput | ProductSizeWhereUniqueInput[]
    disconnect?: ProductSizeWhereUniqueInput | ProductSizeWhereUniqueInput[]
    delete?: ProductSizeWhereUniqueInput | ProductSizeWhereUniqueInput[]
    connect?: ProductSizeWhereUniqueInput | ProductSizeWhereUniqueInput[]
    update?: ProductSizeUpdateWithWhereUniqueWithoutProductInput | ProductSizeUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductSizeUpdateManyWithWhereWithoutProductInput | ProductSizeUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductSizeScalarWhereInput | ProductSizeScalarWhereInput[]
  }

  export type ProductStockUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductStockCreateWithoutProductInput, ProductStockUncheckedCreateWithoutProductInput> | ProductStockCreateWithoutProductInput[] | ProductStockUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductStockCreateOrConnectWithoutProductInput | ProductStockCreateOrConnectWithoutProductInput[]
    upsert?: ProductStockUpsertWithWhereUniqueWithoutProductInput | ProductStockUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductStockCreateManyProductInputEnvelope
    set?: ProductStockWhereUniqueInput | ProductStockWhereUniqueInput[]
    disconnect?: ProductStockWhereUniqueInput | ProductStockWhereUniqueInput[]
    delete?: ProductStockWhereUniqueInput | ProductStockWhereUniqueInput[]
    connect?: ProductStockWhereUniqueInput | ProductStockWhereUniqueInput[]
    update?: ProductStockUpdateWithWhereUniqueWithoutProductInput | ProductStockUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductStockUpdateManyWithWhereWithoutProductInput | ProductStockUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductStockScalarWhereInput | ProductStockScalarWhereInput[]
  }

  export type SubCategoryUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<SubCategoryCreateWithoutProductsInput, SubCategoryUncheckedCreateWithoutProductsInput> | SubCategoryCreateWithoutProductsInput[] | SubCategoryUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: SubCategoryCreateOrConnectWithoutProductsInput | SubCategoryCreateOrConnectWithoutProductsInput[]
    upsert?: SubCategoryUpsertWithWhereUniqueWithoutProductsInput | SubCategoryUpsertWithWhereUniqueWithoutProductsInput[]
    set?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    disconnect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    delete?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    connect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    update?: SubCategoryUpdateWithWhereUniqueWithoutProductsInput | SubCategoryUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: SubCategoryUpdateManyWithWhereWithoutProductsInput | SubCategoryUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: SubCategoryScalarWhereInput | SubCategoryScalarWhereInput[]
  }

  export type PriceHistoryUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<PriceHistoryCreateWithoutProductInput, PriceHistoryUncheckedCreateWithoutProductInput> | PriceHistoryCreateWithoutProductInput[] | PriceHistoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PriceHistoryCreateOrConnectWithoutProductInput | PriceHistoryCreateOrConnectWithoutProductInput[]
    upsert?: PriceHistoryUpsertWithWhereUniqueWithoutProductInput | PriceHistoryUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: PriceHistoryCreateManyProductInputEnvelope
    set?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    disconnect?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    delete?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    connect?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    update?: PriceHistoryUpdateWithWhereUniqueWithoutProductInput | PriceHistoryUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: PriceHistoryUpdateManyWithWhereWithoutProductInput | PriceHistoryUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: PriceHistoryScalarWhereInput | PriceHistoryScalarWhereInput[]
  }

  export type StockHistoryUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<StockHistoryCreateWithoutProductInput, StockHistoryUncheckedCreateWithoutProductInput> | StockHistoryCreateWithoutProductInput[] | StockHistoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StockHistoryCreateOrConnectWithoutProductInput | StockHistoryCreateOrConnectWithoutProductInput[]
    upsert?: StockHistoryUpsertWithWhereUniqueWithoutProductInput | StockHistoryUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: StockHistoryCreateManyProductInputEnvelope
    set?: StockHistoryWhereUniqueInput | StockHistoryWhereUniqueInput[]
    disconnect?: StockHistoryWhereUniqueInput | StockHistoryWhereUniqueInput[]
    delete?: StockHistoryWhereUniqueInput | StockHistoryWhereUniqueInput[]
    connect?: StockHistoryWhereUniqueInput | StockHistoryWhereUniqueInput[]
    update?: StockHistoryUpdateWithWhereUniqueWithoutProductInput | StockHistoryUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: StockHistoryUpdateManyWithWhereWithoutProductInput | StockHistoryUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: StockHistoryScalarWhereInput | StockHistoryScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutColorsInput = {
    create?: XOR<ProductCreateWithoutColorsInput, ProductUncheckedCreateWithoutColorsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutColorsInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductImageCreateNestedManyWithoutColorInput = {
    create?: XOR<ProductImageCreateWithoutColorInput, ProductImageUncheckedCreateWithoutColorInput> | ProductImageCreateWithoutColorInput[] | ProductImageUncheckedCreateWithoutColorInput[]
    connectOrCreate?: ProductImageCreateOrConnectWithoutColorInput | ProductImageCreateOrConnectWithoutColorInput[]
    createMany?: ProductImageCreateManyColorInputEnvelope
    connect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
  }

  export type ProductSizeCreateNestedManyWithoutColorInput = {
    create?: XOR<ProductSizeCreateWithoutColorInput, ProductSizeUncheckedCreateWithoutColorInput> | ProductSizeCreateWithoutColorInput[] | ProductSizeUncheckedCreateWithoutColorInput[]
    connectOrCreate?: ProductSizeCreateOrConnectWithoutColorInput | ProductSizeCreateOrConnectWithoutColorInput[]
    createMany?: ProductSizeCreateManyColorInputEnvelope
    connect?: ProductSizeWhereUniqueInput | ProductSizeWhereUniqueInput[]
  }

  export type ProductStockCreateNestedManyWithoutColorInput = {
    create?: XOR<ProductStockCreateWithoutColorInput, ProductStockUncheckedCreateWithoutColorInput> | ProductStockCreateWithoutColorInput[] | ProductStockUncheckedCreateWithoutColorInput[]
    connectOrCreate?: ProductStockCreateOrConnectWithoutColorInput | ProductStockCreateOrConnectWithoutColorInput[]
    createMany?: ProductStockCreateManyColorInputEnvelope
    connect?: ProductStockWhereUniqueInput | ProductStockWhereUniqueInput[]
  }

  export type PriceHistoryCreateNestedManyWithoutColorInput = {
    create?: XOR<PriceHistoryCreateWithoutColorInput, PriceHistoryUncheckedCreateWithoutColorInput> | PriceHistoryCreateWithoutColorInput[] | PriceHistoryUncheckedCreateWithoutColorInput[]
    connectOrCreate?: PriceHistoryCreateOrConnectWithoutColorInput | PriceHistoryCreateOrConnectWithoutColorInput[]
    createMany?: PriceHistoryCreateManyColorInputEnvelope
    connect?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
  }

  export type StockHistoryCreateNestedManyWithoutColorInput = {
    create?: XOR<StockHistoryCreateWithoutColorInput, StockHistoryUncheckedCreateWithoutColorInput> | StockHistoryCreateWithoutColorInput[] | StockHistoryUncheckedCreateWithoutColorInput[]
    connectOrCreate?: StockHistoryCreateOrConnectWithoutColorInput | StockHistoryCreateOrConnectWithoutColorInput[]
    createMany?: StockHistoryCreateManyColorInputEnvelope
    connect?: StockHistoryWhereUniqueInput | StockHistoryWhereUniqueInput[]
  }

  export type ProductImageUncheckedCreateNestedManyWithoutColorInput = {
    create?: XOR<ProductImageCreateWithoutColorInput, ProductImageUncheckedCreateWithoutColorInput> | ProductImageCreateWithoutColorInput[] | ProductImageUncheckedCreateWithoutColorInput[]
    connectOrCreate?: ProductImageCreateOrConnectWithoutColorInput | ProductImageCreateOrConnectWithoutColorInput[]
    createMany?: ProductImageCreateManyColorInputEnvelope
    connect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
  }

  export type ProductSizeUncheckedCreateNestedManyWithoutColorInput = {
    create?: XOR<ProductSizeCreateWithoutColorInput, ProductSizeUncheckedCreateWithoutColorInput> | ProductSizeCreateWithoutColorInput[] | ProductSizeUncheckedCreateWithoutColorInput[]
    connectOrCreate?: ProductSizeCreateOrConnectWithoutColorInput | ProductSizeCreateOrConnectWithoutColorInput[]
    createMany?: ProductSizeCreateManyColorInputEnvelope
    connect?: ProductSizeWhereUniqueInput | ProductSizeWhereUniqueInput[]
  }

  export type ProductStockUncheckedCreateNestedManyWithoutColorInput = {
    create?: XOR<ProductStockCreateWithoutColorInput, ProductStockUncheckedCreateWithoutColorInput> | ProductStockCreateWithoutColorInput[] | ProductStockUncheckedCreateWithoutColorInput[]
    connectOrCreate?: ProductStockCreateOrConnectWithoutColorInput | ProductStockCreateOrConnectWithoutColorInput[]
    createMany?: ProductStockCreateManyColorInputEnvelope
    connect?: ProductStockWhereUniqueInput | ProductStockWhereUniqueInput[]
  }

  export type PriceHistoryUncheckedCreateNestedManyWithoutColorInput = {
    create?: XOR<PriceHistoryCreateWithoutColorInput, PriceHistoryUncheckedCreateWithoutColorInput> | PriceHistoryCreateWithoutColorInput[] | PriceHistoryUncheckedCreateWithoutColorInput[]
    connectOrCreate?: PriceHistoryCreateOrConnectWithoutColorInput | PriceHistoryCreateOrConnectWithoutColorInput[]
    createMany?: PriceHistoryCreateManyColorInputEnvelope
    connect?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
  }

  export type StockHistoryUncheckedCreateNestedManyWithoutColorInput = {
    create?: XOR<StockHistoryCreateWithoutColorInput, StockHistoryUncheckedCreateWithoutColorInput> | StockHistoryCreateWithoutColorInput[] | StockHistoryUncheckedCreateWithoutColorInput[]
    connectOrCreate?: StockHistoryCreateOrConnectWithoutColorInput | StockHistoryCreateOrConnectWithoutColorInput[]
    createMany?: StockHistoryCreateManyColorInputEnvelope
    connect?: StockHistoryWhereUniqueInput | StockHistoryWhereUniqueInput[]
  }

  export type ProductUpdateOneRequiredWithoutColorsNestedInput = {
    create?: XOR<ProductCreateWithoutColorsInput, ProductUncheckedCreateWithoutColorsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutColorsInput
    upsert?: ProductUpsertWithoutColorsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutColorsInput, ProductUpdateWithoutColorsInput>, ProductUncheckedUpdateWithoutColorsInput>
  }

  export type ProductImageUpdateManyWithoutColorNestedInput = {
    create?: XOR<ProductImageCreateWithoutColorInput, ProductImageUncheckedCreateWithoutColorInput> | ProductImageCreateWithoutColorInput[] | ProductImageUncheckedCreateWithoutColorInput[]
    connectOrCreate?: ProductImageCreateOrConnectWithoutColorInput | ProductImageCreateOrConnectWithoutColorInput[]
    upsert?: ProductImageUpsertWithWhereUniqueWithoutColorInput | ProductImageUpsertWithWhereUniqueWithoutColorInput[]
    createMany?: ProductImageCreateManyColorInputEnvelope
    set?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    disconnect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    delete?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    connect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    update?: ProductImageUpdateWithWhereUniqueWithoutColorInput | ProductImageUpdateWithWhereUniqueWithoutColorInput[]
    updateMany?: ProductImageUpdateManyWithWhereWithoutColorInput | ProductImageUpdateManyWithWhereWithoutColorInput[]
    deleteMany?: ProductImageScalarWhereInput | ProductImageScalarWhereInput[]
  }

  export type ProductSizeUpdateManyWithoutColorNestedInput = {
    create?: XOR<ProductSizeCreateWithoutColorInput, ProductSizeUncheckedCreateWithoutColorInput> | ProductSizeCreateWithoutColorInput[] | ProductSizeUncheckedCreateWithoutColorInput[]
    connectOrCreate?: ProductSizeCreateOrConnectWithoutColorInput | ProductSizeCreateOrConnectWithoutColorInput[]
    upsert?: ProductSizeUpsertWithWhereUniqueWithoutColorInput | ProductSizeUpsertWithWhereUniqueWithoutColorInput[]
    createMany?: ProductSizeCreateManyColorInputEnvelope
    set?: ProductSizeWhereUniqueInput | ProductSizeWhereUniqueInput[]
    disconnect?: ProductSizeWhereUniqueInput | ProductSizeWhereUniqueInput[]
    delete?: ProductSizeWhereUniqueInput | ProductSizeWhereUniqueInput[]
    connect?: ProductSizeWhereUniqueInput | ProductSizeWhereUniqueInput[]
    update?: ProductSizeUpdateWithWhereUniqueWithoutColorInput | ProductSizeUpdateWithWhereUniqueWithoutColorInput[]
    updateMany?: ProductSizeUpdateManyWithWhereWithoutColorInput | ProductSizeUpdateManyWithWhereWithoutColorInput[]
    deleteMany?: ProductSizeScalarWhereInput | ProductSizeScalarWhereInput[]
  }

  export type ProductStockUpdateManyWithoutColorNestedInput = {
    create?: XOR<ProductStockCreateWithoutColorInput, ProductStockUncheckedCreateWithoutColorInput> | ProductStockCreateWithoutColorInput[] | ProductStockUncheckedCreateWithoutColorInput[]
    connectOrCreate?: ProductStockCreateOrConnectWithoutColorInput | ProductStockCreateOrConnectWithoutColorInput[]
    upsert?: ProductStockUpsertWithWhereUniqueWithoutColorInput | ProductStockUpsertWithWhereUniqueWithoutColorInput[]
    createMany?: ProductStockCreateManyColorInputEnvelope
    set?: ProductStockWhereUniqueInput | ProductStockWhereUniqueInput[]
    disconnect?: ProductStockWhereUniqueInput | ProductStockWhereUniqueInput[]
    delete?: ProductStockWhereUniqueInput | ProductStockWhereUniqueInput[]
    connect?: ProductStockWhereUniqueInput | ProductStockWhereUniqueInput[]
    update?: ProductStockUpdateWithWhereUniqueWithoutColorInput | ProductStockUpdateWithWhereUniqueWithoutColorInput[]
    updateMany?: ProductStockUpdateManyWithWhereWithoutColorInput | ProductStockUpdateManyWithWhereWithoutColorInput[]
    deleteMany?: ProductStockScalarWhereInput | ProductStockScalarWhereInput[]
  }

  export type PriceHistoryUpdateManyWithoutColorNestedInput = {
    create?: XOR<PriceHistoryCreateWithoutColorInput, PriceHistoryUncheckedCreateWithoutColorInput> | PriceHistoryCreateWithoutColorInput[] | PriceHistoryUncheckedCreateWithoutColorInput[]
    connectOrCreate?: PriceHistoryCreateOrConnectWithoutColorInput | PriceHistoryCreateOrConnectWithoutColorInput[]
    upsert?: PriceHistoryUpsertWithWhereUniqueWithoutColorInput | PriceHistoryUpsertWithWhereUniqueWithoutColorInput[]
    createMany?: PriceHistoryCreateManyColorInputEnvelope
    set?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    disconnect?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    delete?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    connect?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    update?: PriceHistoryUpdateWithWhereUniqueWithoutColorInput | PriceHistoryUpdateWithWhereUniqueWithoutColorInput[]
    updateMany?: PriceHistoryUpdateManyWithWhereWithoutColorInput | PriceHistoryUpdateManyWithWhereWithoutColorInput[]
    deleteMany?: PriceHistoryScalarWhereInput | PriceHistoryScalarWhereInput[]
  }

  export type StockHistoryUpdateManyWithoutColorNestedInput = {
    create?: XOR<StockHistoryCreateWithoutColorInput, StockHistoryUncheckedCreateWithoutColorInput> | StockHistoryCreateWithoutColorInput[] | StockHistoryUncheckedCreateWithoutColorInput[]
    connectOrCreate?: StockHistoryCreateOrConnectWithoutColorInput | StockHistoryCreateOrConnectWithoutColorInput[]
    upsert?: StockHistoryUpsertWithWhereUniqueWithoutColorInput | StockHistoryUpsertWithWhereUniqueWithoutColorInput[]
    createMany?: StockHistoryCreateManyColorInputEnvelope
    set?: StockHistoryWhereUniqueInput | StockHistoryWhereUniqueInput[]
    disconnect?: StockHistoryWhereUniqueInput | StockHistoryWhereUniqueInput[]
    delete?: StockHistoryWhereUniqueInput | StockHistoryWhereUniqueInput[]
    connect?: StockHistoryWhereUniqueInput | StockHistoryWhereUniqueInput[]
    update?: StockHistoryUpdateWithWhereUniqueWithoutColorInput | StockHistoryUpdateWithWhereUniqueWithoutColorInput[]
    updateMany?: StockHistoryUpdateManyWithWhereWithoutColorInput | StockHistoryUpdateManyWithWhereWithoutColorInput[]
    deleteMany?: StockHistoryScalarWhereInput | StockHistoryScalarWhereInput[]
  }

  export type ProductImageUncheckedUpdateManyWithoutColorNestedInput = {
    create?: XOR<ProductImageCreateWithoutColorInput, ProductImageUncheckedCreateWithoutColorInput> | ProductImageCreateWithoutColorInput[] | ProductImageUncheckedCreateWithoutColorInput[]
    connectOrCreate?: ProductImageCreateOrConnectWithoutColorInput | ProductImageCreateOrConnectWithoutColorInput[]
    upsert?: ProductImageUpsertWithWhereUniqueWithoutColorInput | ProductImageUpsertWithWhereUniqueWithoutColorInput[]
    createMany?: ProductImageCreateManyColorInputEnvelope
    set?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    disconnect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    delete?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    connect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    update?: ProductImageUpdateWithWhereUniqueWithoutColorInput | ProductImageUpdateWithWhereUniqueWithoutColorInput[]
    updateMany?: ProductImageUpdateManyWithWhereWithoutColorInput | ProductImageUpdateManyWithWhereWithoutColorInput[]
    deleteMany?: ProductImageScalarWhereInput | ProductImageScalarWhereInput[]
  }

  export type ProductSizeUncheckedUpdateManyWithoutColorNestedInput = {
    create?: XOR<ProductSizeCreateWithoutColorInput, ProductSizeUncheckedCreateWithoutColorInput> | ProductSizeCreateWithoutColorInput[] | ProductSizeUncheckedCreateWithoutColorInput[]
    connectOrCreate?: ProductSizeCreateOrConnectWithoutColorInput | ProductSizeCreateOrConnectWithoutColorInput[]
    upsert?: ProductSizeUpsertWithWhereUniqueWithoutColorInput | ProductSizeUpsertWithWhereUniqueWithoutColorInput[]
    createMany?: ProductSizeCreateManyColorInputEnvelope
    set?: ProductSizeWhereUniqueInput | ProductSizeWhereUniqueInput[]
    disconnect?: ProductSizeWhereUniqueInput | ProductSizeWhereUniqueInput[]
    delete?: ProductSizeWhereUniqueInput | ProductSizeWhereUniqueInput[]
    connect?: ProductSizeWhereUniqueInput | ProductSizeWhereUniqueInput[]
    update?: ProductSizeUpdateWithWhereUniqueWithoutColorInput | ProductSizeUpdateWithWhereUniqueWithoutColorInput[]
    updateMany?: ProductSizeUpdateManyWithWhereWithoutColorInput | ProductSizeUpdateManyWithWhereWithoutColorInput[]
    deleteMany?: ProductSizeScalarWhereInput | ProductSizeScalarWhereInput[]
  }

  export type ProductStockUncheckedUpdateManyWithoutColorNestedInput = {
    create?: XOR<ProductStockCreateWithoutColorInput, ProductStockUncheckedCreateWithoutColorInput> | ProductStockCreateWithoutColorInput[] | ProductStockUncheckedCreateWithoutColorInput[]
    connectOrCreate?: ProductStockCreateOrConnectWithoutColorInput | ProductStockCreateOrConnectWithoutColorInput[]
    upsert?: ProductStockUpsertWithWhereUniqueWithoutColorInput | ProductStockUpsertWithWhereUniqueWithoutColorInput[]
    createMany?: ProductStockCreateManyColorInputEnvelope
    set?: ProductStockWhereUniqueInput | ProductStockWhereUniqueInput[]
    disconnect?: ProductStockWhereUniqueInput | ProductStockWhereUniqueInput[]
    delete?: ProductStockWhereUniqueInput | ProductStockWhereUniqueInput[]
    connect?: ProductStockWhereUniqueInput | ProductStockWhereUniqueInput[]
    update?: ProductStockUpdateWithWhereUniqueWithoutColorInput | ProductStockUpdateWithWhereUniqueWithoutColorInput[]
    updateMany?: ProductStockUpdateManyWithWhereWithoutColorInput | ProductStockUpdateManyWithWhereWithoutColorInput[]
    deleteMany?: ProductStockScalarWhereInput | ProductStockScalarWhereInput[]
  }

  export type PriceHistoryUncheckedUpdateManyWithoutColorNestedInput = {
    create?: XOR<PriceHistoryCreateWithoutColorInput, PriceHistoryUncheckedCreateWithoutColorInput> | PriceHistoryCreateWithoutColorInput[] | PriceHistoryUncheckedCreateWithoutColorInput[]
    connectOrCreate?: PriceHistoryCreateOrConnectWithoutColorInput | PriceHistoryCreateOrConnectWithoutColorInput[]
    upsert?: PriceHistoryUpsertWithWhereUniqueWithoutColorInput | PriceHistoryUpsertWithWhereUniqueWithoutColorInput[]
    createMany?: PriceHistoryCreateManyColorInputEnvelope
    set?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    disconnect?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    delete?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    connect?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    update?: PriceHistoryUpdateWithWhereUniqueWithoutColorInput | PriceHistoryUpdateWithWhereUniqueWithoutColorInput[]
    updateMany?: PriceHistoryUpdateManyWithWhereWithoutColorInput | PriceHistoryUpdateManyWithWhereWithoutColorInput[]
    deleteMany?: PriceHistoryScalarWhereInput | PriceHistoryScalarWhereInput[]
  }

  export type StockHistoryUncheckedUpdateManyWithoutColorNestedInput = {
    create?: XOR<StockHistoryCreateWithoutColorInput, StockHistoryUncheckedCreateWithoutColorInput> | StockHistoryCreateWithoutColorInput[] | StockHistoryUncheckedCreateWithoutColorInput[]
    connectOrCreate?: StockHistoryCreateOrConnectWithoutColorInput | StockHistoryCreateOrConnectWithoutColorInput[]
    upsert?: StockHistoryUpsertWithWhereUniqueWithoutColorInput | StockHistoryUpsertWithWhereUniqueWithoutColorInput[]
    createMany?: StockHistoryCreateManyColorInputEnvelope
    set?: StockHistoryWhereUniqueInput | StockHistoryWhereUniqueInput[]
    disconnect?: StockHistoryWhereUniqueInput | StockHistoryWhereUniqueInput[]
    delete?: StockHistoryWhereUniqueInput | StockHistoryWhereUniqueInput[]
    connect?: StockHistoryWhereUniqueInput | StockHistoryWhereUniqueInput[]
    update?: StockHistoryUpdateWithWhereUniqueWithoutColorInput | StockHistoryUpdateWithWhereUniqueWithoutColorInput[]
    updateMany?: StockHistoryUpdateManyWithWhereWithoutColorInput | StockHistoryUpdateManyWithWhereWithoutColorInput[]
    deleteMany?: StockHistoryScalarWhereInput | StockHistoryScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutSizesInput = {
    create?: XOR<ProductCreateWithoutSizesInput, ProductUncheckedCreateWithoutSizesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutSizesInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductColorCreateNestedOneWithoutSizesInput = {
    create?: XOR<ProductColorCreateWithoutSizesInput, ProductColorUncheckedCreateWithoutSizesInput>
    connectOrCreate?: ProductColorCreateOrConnectWithoutSizesInput
    connect?: ProductColorWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutSizesNestedInput = {
    create?: XOR<ProductCreateWithoutSizesInput, ProductUncheckedCreateWithoutSizesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutSizesInput
    upsert?: ProductUpsertWithoutSizesInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutSizesInput, ProductUpdateWithoutSizesInput>, ProductUncheckedUpdateWithoutSizesInput>
  }

  export type ProductColorUpdateOneWithoutSizesNestedInput = {
    create?: XOR<ProductColorCreateWithoutSizesInput, ProductColorUncheckedCreateWithoutSizesInput>
    connectOrCreate?: ProductColorCreateOrConnectWithoutSizesInput
    upsert?: ProductColorUpsertWithoutSizesInput
    disconnect?: ProductColorWhereInput | boolean
    delete?: ProductColorWhereInput | boolean
    connect?: ProductColorWhereUniqueInput
    update?: XOR<XOR<ProductColorUpdateToOneWithWhereWithoutSizesInput, ProductColorUpdateWithoutSizesInput>, ProductColorUncheckedUpdateWithoutSizesInput>
  }

  export type ProductCreateNestedOneWithoutImagesInput = {
    create?: XOR<ProductCreateWithoutImagesInput, ProductUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutImagesInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductColorCreateNestedOneWithoutImagesInput = {
    create?: XOR<ProductColorCreateWithoutImagesInput, ProductColorUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ProductColorCreateOrConnectWithoutImagesInput
    connect?: ProductColorWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<ProductCreateWithoutImagesInput, ProductUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutImagesInput
    upsert?: ProductUpsertWithoutImagesInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutImagesInput, ProductUpdateWithoutImagesInput>, ProductUncheckedUpdateWithoutImagesInput>
  }

  export type ProductColorUpdateOneWithoutImagesNestedInput = {
    create?: XOR<ProductColorCreateWithoutImagesInput, ProductColorUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ProductColorCreateOrConnectWithoutImagesInput
    upsert?: ProductColorUpsertWithoutImagesInput
    disconnect?: ProductColorWhereInput | boolean
    delete?: ProductColorWhereInput | boolean
    connect?: ProductColorWhereUniqueInput
    update?: XOR<XOR<ProductColorUpdateToOneWithWhereWithoutImagesInput, ProductColorUpdateWithoutImagesInput>, ProductColorUncheckedUpdateWithoutImagesInput>
  }

  export type ProductCreateNestedOneWithoutStockInput = {
    create?: XOR<ProductCreateWithoutStockInput, ProductUncheckedCreateWithoutStockInput>
    connectOrCreate?: ProductCreateOrConnectWithoutStockInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductColorCreateNestedOneWithoutStockInput = {
    create?: XOR<ProductColorCreateWithoutStockInput, ProductColorUncheckedCreateWithoutStockInput>
    connectOrCreate?: ProductColorCreateOrConnectWithoutStockInput
    connect?: ProductColorWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutStockNestedInput = {
    create?: XOR<ProductCreateWithoutStockInput, ProductUncheckedCreateWithoutStockInput>
    connectOrCreate?: ProductCreateOrConnectWithoutStockInput
    upsert?: ProductUpsertWithoutStockInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutStockInput, ProductUpdateWithoutStockInput>, ProductUncheckedUpdateWithoutStockInput>
  }

  export type ProductColorUpdateOneWithoutStockNestedInput = {
    create?: XOR<ProductColorCreateWithoutStockInput, ProductColorUncheckedCreateWithoutStockInput>
    connectOrCreate?: ProductColorCreateOrConnectWithoutStockInput
    upsert?: ProductColorUpsertWithoutStockInput
    disconnect?: ProductColorWhereInput | boolean
    delete?: ProductColorWhereInput | boolean
    connect?: ProductColorWhereUniqueInput
    update?: XOR<XOR<ProductColorUpdateToOneWithWhereWithoutStockInput, ProductColorUpdateWithoutStockInput>, ProductColorUncheckedUpdateWithoutStockInput>
  }

  export type ProductCreateNestedOneWithoutPriceHistoryInput = {
    create?: XOR<ProductCreateWithoutPriceHistoryInput, ProductUncheckedCreateWithoutPriceHistoryInput>
    connectOrCreate?: ProductCreateOrConnectWithoutPriceHistoryInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductColorCreateNestedOneWithoutPriceHistoryInput = {
    create?: XOR<ProductColorCreateWithoutPriceHistoryInput, ProductColorUncheckedCreateWithoutPriceHistoryInput>
    connectOrCreate?: ProductColorCreateOrConnectWithoutPriceHistoryInput
    connect?: ProductColorWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutPriceHistoryNestedInput = {
    create?: XOR<ProductCreateWithoutPriceHistoryInput, ProductUncheckedCreateWithoutPriceHistoryInput>
    connectOrCreate?: ProductCreateOrConnectWithoutPriceHistoryInput
    upsert?: ProductUpsertWithoutPriceHistoryInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutPriceHistoryInput, ProductUpdateWithoutPriceHistoryInput>, ProductUncheckedUpdateWithoutPriceHistoryInput>
  }

  export type ProductColorUpdateOneWithoutPriceHistoryNestedInput = {
    create?: XOR<ProductColorCreateWithoutPriceHistoryInput, ProductColorUncheckedCreateWithoutPriceHistoryInput>
    connectOrCreate?: ProductColorCreateOrConnectWithoutPriceHistoryInput
    upsert?: ProductColorUpsertWithoutPriceHistoryInput
    disconnect?: ProductColorWhereInput | boolean
    delete?: ProductColorWhereInput | boolean
    connect?: ProductColorWhereUniqueInput
    update?: XOR<XOR<ProductColorUpdateToOneWithWhereWithoutPriceHistoryInput, ProductColorUpdateWithoutPriceHistoryInput>, ProductColorUncheckedUpdateWithoutPriceHistoryInput>
  }

  export type ProductCreateNestedOneWithoutStockHistoryInput = {
    create?: XOR<ProductCreateWithoutStockHistoryInput, ProductUncheckedCreateWithoutStockHistoryInput>
    connectOrCreate?: ProductCreateOrConnectWithoutStockHistoryInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductColorCreateNestedOneWithoutStockHistoryInput = {
    create?: XOR<ProductColorCreateWithoutStockHistoryInput, ProductColorUncheckedCreateWithoutStockHistoryInput>
    connectOrCreate?: ProductColorCreateOrConnectWithoutStockHistoryInput
    connect?: ProductColorWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutStockHistoryNestedInput = {
    create?: XOR<ProductCreateWithoutStockHistoryInput, ProductUncheckedCreateWithoutStockHistoryInput>
    connectOrCreate?: ProductCreateOrConnectWithoutStockHistoryInput
    upsert?: ProductUpsertWithoutStockHistoryInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutStockHistoryInput, ProductUpdateWithoutStockHistoryInput>, ProductUncheckedUpdateWithoutStockHistoryInput>
  }

  export type ProductColorUpdateOneWithoutStockHistoryNestedInput = {
    create?: XOR<ProductColorCreateWithoutStockHistoryInput, ProductColorUncheckedCreateWithoutStockHistoryInput>
    connectOrCreate?: ProductColorCreateOrConnectWithoutStockHistoryInput
    upsert?: ProductColorUpsertWithoutStockHistoryInput
    disconnect?: ProductColorWhereInput | boolean
    delete?: ProductColorWhereInput | boolean
    connect?: ProductColorWhereUniqueInput
    update?: XOR<XOR<ProductColorUpdateToOneWithWhereWithoutStockHistoryInput, ProductColorUpdateWithoutStockHistoryInput>, ProductColorUncheckedUpdateWithoutStockHistoryInput>
  }

  export type SubCategoryCreateNestedOneWithoutHistoryInput = {
    create?: XOR<SubCategoryCreateWithoutHistoryInput, SubCategoryUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: SubCategoryCreateOrConnectWithoutHistoryInput
    connect?: SubCategoryWhereUniqueInput
  }

  export type SubCategoryUpdateOneRequiredWithoutHistoryNestedInput = {
    create?: XOR<SubCategoryCreateWithoutHistoryInput, SubCategoryUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: SubCategoryCreateOrConnectWithoutHistoryInput
    upsert?: SubCategoryUpsertWithoutHistoryInput
    connect?: SubCategoryWhereUniqueInput
    update?: XOR<XOR<SubCategoryUpdateToOneWithWhereWithoutHistoryInput, SubCategoryUpdateWithoutHistoryInput>, SubCategoryUncheckedUpdateWithoutHistoryInput>
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

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
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
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type MainCategoryCreateWithoutBrandInput = {
    id: number
    name: string
    gender: string
    level?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    subcategories?: SubCategoryCreateNestedManyWithoutParentCategoryInput
  }

  export type MainCategoryUncheckedCreateWithoutBrandInput = {
    id: number
    name: string
    gender: string
    level?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    subcategories?: SubCategoryUncheckedCreateNestedManyWithoutParentCategoryInput
  }

  export type MainCategoryCreateOrConnectWithoutBrandInput = {
    where: MainCategoryWhereUniqueInput
    create: XOR<MainCategoryCreateWithoutBrandInput, MainCategoryUncheckedCreateWithoutBrandInput>
  }

  export type MainCategoryCreateManyBrandInputEnvelope = {
    data: MainCategoryCreateManyBrandInput | MainCategoryCreateManyBrandInput[]
    skipDuplicates?: boolean
  }

  export type ProductCreateWithoutBrandInput = {
    productId: string
    name: string
    price?: number | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    colors?: ProductColorCreateNestedManyWithoutProductInput
    images?: ProductImageCreateNestedManyWithoutProductInput
    sizes?: ProductSizeCreateNestedManyWithoutProductInput
    stock?: ProductStockCreateNestedManyWithoutProductInput
    subCategories?: SubCategoryCreateNestedManyWithoutProductsInput
    priceHistory?: PriceHistoryCreateNestedManyWithoutProductInput
    stockHistory?: StockHistoryCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutBrandInput = {
    id?: number
    productId: string
    name: string
    price?: number | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    colors?: ProductColorUncheckedCreateNestedManyWithoutProductInput
    images?: ProductImageUncheckedCreateNestedManyWithoutProductInput
    sizes?: ProductSizeUncheckedCreateNestedManyWithoutProductInput
    stock?: ProductStockUncheckedCreateNestedManyWithoutProductInput
    subCategories?: SubCategoryUncheckedCreateNestedManyWithoutProductsInput
    priceHistory?: PriceHistoryUncheckedCreateNestedManyWithoutProductInput
    stockHistory?: StockHistoryUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutBrandInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput>
  }

  export type ProductCreateManyBrandInputEnvelope = {
    data: ProductCreateManyBrandInput | ProductCreateManyBrandInput[]
    skipDuplicates?: boolean
  }

  export type MainCategoryUpsertWithWhereUniqueWithoutBrandInput = {
    where: MainCategoryWhereUniqueInput
    update: XOR<MainCategoryUpdateWithoutBrandInput, MainCategoryUncheckedUpdateWithoutBrandInput>
    create: XOR<MainCategoryCreateWithoutBrandInput, MainCategoryUncheckedCreateWithoutBrandInput>
  }

  export type MainCategoryUpdateWithWhereUniqueWithoutBrandInput = {
    where: MainCategoryWhereUniqueInput
    data: XOR<MainCategoryUpdateWithoutBrandInput, MainCategoryUncheckedUpdateWithoutBrandInput>
  }

  export type MainCategoryUpdateManyWithWhereWithoutBrandInput = {
    where: MainCategoryScalarWhereInput
    data: XOR<MainCategoryUpdateManyMutationInput, MainCategoryUncheckedUpdateManyWithoutBrandInput>
  }

  export type MainCategoryScalarWhereInput = {
    AND?: MainCategoryScalarWhereInput | MainCategoryScalarWhereInput[]
    OR?: MainCategoryScalarWhereInput[]
    NOT?: MainCategoryScalarWhereInput | MainCategoryScalarWhereInput[]
    id?: IntFilter<"MainCategory"> | number
    name?: StringFilter<"MainCategory"> | string
    brandId?: StringFilter<"MainCategory"> | string
    gender?: StringFilter<"MainCategory"> | string
    level?: IntFilter<"MainCategory"> | number
    createdAt?: DateTimeFilter<"MainCategory"> | Date | string
    updatedAt?: DateTimeFilter<"MainCategory"> | Date | string
  }

  export type ProductUpsertWithWhereUniqueWithoutBrandInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutBrandInput, ProductUncheckedUpdateWithoutBrandInput>
    create: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutBrandInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutBrandInput, ProductUncheckedUpdateWithoutBrandInput>
  }

  export type ProductUpdateManyWithWhereWithoutBrandInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutBrandInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: IntFilter<"Product"> | number
    brandName?: StringFilter<"Product"> | string
    productId?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    price?: IntNullableFilter<"Product"> | number | null
    description?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
  }

  export type BrandCreateWithoutMainCategoriesInput = {
    id: string
    name: string
    timestamp?: Date | string
    products?: ProductCreateNestedManyWithoutBrandInput
  }

  export type BrandUncheckedCreateWithoutMainCategoriesInput = {
    id: string
    name: string
    timestamp?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutBrandInput
  }

  export type BrandCreateOrConnectWithoutMainCategoriesInput = {
    where: BrandWhereUniqueInput
    create: XOR<BrandCreateWithoutMainCategoriesInput, BrandUncheckedCreateWithoutMainCategoriesInput>
  }

  export type SubCategoryCreateWithoutParentCategoryInput = {
    categoryId: number
    categoryName: string
    brand: string
    gender: string
    level: number
    isLeaf?: boolean
    matchingId?: number | null
    productCount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parentSubCategory?: SubCategoryCreateNestedOneWithoutSubcategoriesInput
    subcategories?: SubCategoryCreateNestedManyWithoutParentSubCategoryInput
    products?: ProductCreateNestedManyWithoutSubCategoriesInput
    history?: CategoryHistoryCreateNestedManyWithoutCategoryInput
  }

  export type SubCategoryUncheckedCreateWithoutParentCategoryInput = {
    categoryId: number
    categoryName: string
    brand: string
    gender: string
    level: number
    isLeaf?: boolean
    matchingId?: number | null
    productCount?: number | null
    parentSubCategoryId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subcategories?: SubCategoryUncheckedCreateNestedManyWithoutParentSubCategoryInput
    products?: ProductUncheckedCreateNestedManyWithoutSubCategoriesInput
    history?: CategoryHistoryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type SubCategoryCreateOrConnectWithoutParentCategoryInput = {
    where: SubCategoryWhereUniqueInput
    create: XOR<SubCategoryCreateWithoutParentCategoryInput, SubCategoryUncheckedCreateWithoutParentCategoryInput>
  }

  export type SubCategoryCreateManyParentCategoryInputEnvelope = {
    data: SubCategoryCreateManyParentCategoryInput | SubCategoryCreateManyParentCategoryInput[]
    skipDuplicates?: boolean
  }

  export type BrandUpsertWithoutMainCategoriesInput = {
    update: XOR<BrandUpdateWithoutMainCategoriesInput, BrandUncheckedUpdateWithoutMainCategoriesInput>
    create: XOR<BrandCreateWithoutMainCategoriesInput, BrandUncheckedCreateWithoutMainCategoriesInput>
    where?: BrandWhereInput
  }

  export type BrandUpdateToOneWithWhereWithoutMainCategoriesInput = {
    where?: BrandWhereInput
    data: XOR<BrandUpdateWithoutMainCategoriesInput, BrandUncheckedUpdateWithoutMainCategoriesInput>
  }

  export type BrandUpdateWithoutMainCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutBrandNestedInput
  }

  export type BrandUncheckedUpdateWithoutMainCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutBrandNestedInput
  }

  export type SubCategoryUpsertWithWhereUniqueWithoutParentCategoryInput = {
    where: SubCategoryWhereUniqueInput
    update: XOR<SubCategoryUpdateWithoutParentCategoryInput, SubCategoryUncheckedUpdateWithoutParentCategoryInput>
    create: XOR<SubCategoryCreateWithoutParentCategoryInput, SubCategoryUncheckedCreateWithoutParentCategoryInput>
  }

  export type SubCategoryUpdateWithWhereUniqueWithoutParentCategoryInput = {
    where: SubCategoryWhereUniqueInput
    data: XOR<SubCategoryUpdateWithoutParentCategoryInput, SubCategoryUncheckedUpdateWithoutParentCategoryInput>
  }

  export type SubCategoryUpdateManyWithWhereWithoutParentCategoryInput = {
    where: SubCategoryScalarWhereInput
    data: XOR<SubCategoryUpdateManyMutationInput, SubCategoryUncheckedUpdateManyWithoutParentCategoryInput>
  }

  export type SubCategoryScalarWhereInput = {
    AND?: SubCategoryScalarWhereInput | SubCategoryScalarWhereInput[]
    OR?: SubCategoryScalarWhereInput[]
    NOT?: SubCategoryScalarWhereInput | SubCategoryScalarWhereInput[]
    categoryId?: IntFilter<"SubCategory"> | number
    categoryName?: StringFilter<"SubCategory"> | string
    brand?: StringFilter<"SubCategory"> | string
    gender?: StringFilter<"SubCategory"> | string
    level?: IntFilter<"SubCategory"> | number
    isLeaf?: BoolFilter<"SubCategory"> | boolean
    matchingId?: IntNullableFilter<"SubCategory"> | number | null
    productCount?: IntNullableFilter<"SubCategory"> | number | null
    parentCategoryId?: IntNullableFilter<"SubCategory"> | number | null
    parentSubCategoryId?: IntNullableFilter<"SubCategory"> | number | null
    createdAt?: DateTimeFilter<"SubCategory"> | Date | string
    updatedAt?: DateTimeFilter<"SubCategory"> | Date | string
  }

  export type MainCategoryCreateWithoutSubcategoriesInput = {
    id: number
    name: string
    gender: string
    level?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    brand: BrandCreateNestedOneWithoutMainCategoriesInput
  }

  export type MainCategoryUncheckedCreateWithoutSubcategoriesInput = {
    id: number
    name: string
    brandId: string
    gender: string
    level?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MainCategoryCreateOrConnectWithoutSubcategoriesInput = {
    where: MainCategoryWhereUniqueInput
    create: XOR<MainCategoryCreateWithoutSubcategoriesInput, MainCategoryUncheckedCreateWithoutSubcategoriesInput>
  }

  export type SubCategoryCreateWithoutSubcategoriesInput = {
    categoryId: number
    categoryName: string
    brand: string
    gender: string
    level: number
    isLeaf?: boolean
    matchingId?: number | null
    productCount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parentCategory?: MainCategoryCreateNestedOneWithoutSubcategoriesInput
    parentSubCategory?: SubCategoryCreateNestedOneWithoutSubcategoriesInput
    products?: ProductCreateNestedManyWithoutSubCategoriesInput
    history?: CategoryHistoryCreateNestedManyWithoutCategoryInput
  }

  export type SubCategoryUncheckedCreateWithoutSubcategoriesInput = {
    categoryId: number
    categoryName: string
    brand: string
    gender: string
    level: number
    isLeaf?: boolean
    matchingId?: number | null
    productCount?: number | null
    parentCategoryId?: number | null
    parentSubCategoryId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutSubCategoriesInput
    history?: CategoryHistoryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type SubCategoryCreateOrConnectWithoutSubcategoriesInput = {
    where: SubCategoryWhereUniqueInput
    create: XOR<SubCategoryCreateWithoutSubcategoriesInput, SubCategoryUncheckedCreateWithoutSubcategoriesInput>
  }

  export type SubCategoryCreateWithoutParentSubCategoryInput = {
    categoryId: number
    categoryName: string
    brand: string
    gender: string
    level: number
    isLeaf?: boolean
    matchingId?: number | null
    productCount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parentCategory?: MainCategoryCreateNestedOneWithoutSubcategoriesInput
    subcategories?: SubCategoryCreateNestedManyWithoutParentSubCategoryInput
    products?: ProductCreateNestedManyWithoutSubCategoriesInput
    history?: CategoryHistoryCreateNestedManyWithoutCategoryInput
  }

  export type SubCategoryUncheckedCreateWithoutParentSubCategoryInput = {
    categoryId: number
    categoryName: string
    brand: string
    gender: string
    level: number
    isLeaf?: boolean
    matchingId?: number | null
    productCount?: number | null
    parentCategoryId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subcategories?: SubCategoryUncheckedCreateNestedManyWithoutParentSubCategoryInput
    products?: ProductUncheckedCreateNestedManyWithoutSubCategoriesInput
    history?: CategoryHistoryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type SubCategoryCreateOrConnectWithoutParentSubCategoryInput = {
    where: SubCategoryWhereUniqueInput
    create: XOR<SubCategoryCreateWithoutParentSubCategoryInput, SubCategoryUncheckedCreateWithoutParentSubCategoryInput>
  }

  export type SubCategoryCreateManyParentSubCategoryInputEnvelope = {
    data: SubCategoryCreateManyParentSubCategoryInput | SubCategoryCreateManyParentSubCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ProductCreateWithoutSubCategoriesInput = {
    productId: string
    name: string
    price?: number | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    brand: BrandCreateNestedOneWithoutProductsInput
    colors?: ProductColorCreateNestedManyWithoutProductInput
    images?: ProductImageCreateNestedManyWithoutProductInput
    sizes?: ProductSizeCreateNestedManyWithoutProductInput
    stock?: ProductStockCreateNestedManyWithoutProductInput
    priceHistory?: PriceHistoryCreateNestedManyWithoutProductInput
    stockHistory?: StockHistoryCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutSubCategoriesInput = {
    id?: number
    brandName: string
    productId: string
    name: string
    price?: number | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    colors?: ProductColorUncheckedCreateNestedManyWithoutProductInput
    images?: ProductImageUncheckedCreateNestedManyWithoutProductInput
    sizes?: ProductSizeUncheckedCreateNestedManyWithoutProductInput
    stock?: ProductStockUncheckedCreateNestedManyWithoutProductInput
    priceHistory?: PriceHistoryUncheckedCreateNestedManyWithoutProductInput
    stockHistory?: StockHistoryUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutSubCategoriesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutSubCategoriesInput, ProductUncheckedCreateWithoutSubCategoriesInput>
  }

  export type CategoryHistoryCreateWithoutCategoryInput = {
    action: string
    changes?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: Date | string
  }

  export type CategoryHistoryUncheckedCreateWithoutCategoryInput = {
    id?: number
    action: string
    changes?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: Date | string
  }

  export type CategoryHistoryCreateOrConnectWithoutCategoryInput = {
    where: CategoryHistoryWhereUniqueInput
    create: XOR<CategoryHistoryCreateWithoutCategoryInput, CategoryHistoryUncheckedCreateWithoutCategoryInput>
  }

  export type CategoryHistoryCreateManyCategoryInputEnvelope = {
    data: CategoryHistoryCreateManyCategoryInput | CategoryHistoryCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type MainCategoryUpsertWithoutSubcategoriesInput = {
    update: XOR<MainCategoryUpdateWithoutSubcategoriesInput, MainCategoryUncheckedUpdateWithoutSubcategoriesInput>
    create: XOR<MainCategoryCreateWithoutSubcategoriesInput, MainCategoryUncheckedCreateWithoutSubcategoriesInput>
    where?: MainCategoryWhereInput
  }

  export type MainCategoryUpdateToOneWithWhereWithoutSubcategoriesInput = {
    where?: MainCategoryWhereInput
    data: XOR<MainCategoryUpdateWithoutSubcategoriesInput, MainCategoryUncheckedUpdateWithoutSubcategoriesInput>
  }

  export type MainCategoryUpdateWithoutSubcategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: BrandUpdateOneRequiredWithoutMainCategoriesNestedInput
  }

  export type MainCategoryUncheckedUpdateWithoutSubcategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubCategoryUpsertWithoutSubcategoriesInput = {
    update: XOR<SubCategoryUpdateWithoutSubcategoriesInput, SubCategoryUncheckedUpdateWithoutSubcategoriesInput>
    create: XOR<SubCategoryCreateWithoutSubcategoriesInput, SubCategoryUncheckedCreateWithoutSubcategoriesInput>
    where?: SubCategoryWhereInput
  }

  export type SubCategoryUpdateToOneWithWhereWithoutSubcategoriesInput = {
    where?: SubCategoryWhereInput
    data: XOR<SubCategoryUpdateWithoutSubcategoriesInput, SubCategoryUncheckedUpdateWithoutSubcategoriesInput>
  }

  export type SubCategoryUpdateWithoutSubcategoriesInput = {
    categoryId?: IntFieldUpdateOperationsInput | number
    categoryName?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    isLeaf?: BoolFieldUpdateOperationsInput | boolean
    matchingId?: NullableIntFieldUpdateOperationsInput | number | null
    productCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentCategory?: MainCategoryUpdateOneWithoutSubcategoriesNestedInput
    parentSubCategory?: SubCategoryUpdateOneWithoutSubcategoriesNestedInput
    products?: ProductUpdateManyWithoutSubCategoriesNestedInput
    history?: CategoryHistoryUpdateManyWithoutCategoryNestedInput
  }

  export type SubCategoryUncheckedUpdateWithoutSubcategoriesInput = {
    categoryId?: IntFieldUpdateOperationsInput | number
    categoryName?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    isLeaf?: BoolFieldUpdateOperationsInput | boolean
    matchingId?: NullableIntFieldUpdateOperationsInput | number | null
    productCount?: NullableIntFieldUpdateOperationsInput | number | null
    parentCategoryId?: NullableIntFieldUpdateOperationsInput | number | null
    parentSubCategoryId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutSubCategoriesNestedInput
    history?: CategoryHistoryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type SubCategoryUpsertWithWhereUniqueWithoutParentSubCategoryInput = {
    where: SubCategoryWhereUniqueInput
    update: XOR<SubCategoryUpdateWithoutParentSubCategoryInput, SubCategoryUncheckedUpdateWithoutParentSubCategoryInput>
    create: XOR<SubCategoryCreateWithoutParentSubCategoryInput, SubCategoryUncheckedCreateWithoutParentSubCategoryInput>
  }

  export type SubCategoryUpdateWithWhereUniqueWithoutParentSubCategoryInput = {
    where: SubCategoryWhereUniqueInput
    data: XOR<SubCategoryUpdateWithoutParentSubCategoryInput, SubCategoryUncheckedUpdateWithoutParentSubCategoryInput>
  }

  export type SubCategoryUpdateManyWithWhereWithoutParentSubCategoryInput = {
    where: SubCategoryScalarWhereInput
    data: XOR<SubCategoryUpdateManyMutationInput, SubCategoryUncheckedUpdateManyWithoutParentSubCategoryInput>
  }

  export type ProductUpsertWithWhereUniqueWithoutSubCategoriesInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutSubCategoriesInput, ProductUncheckedUpdateWithoutSubCategoriesInput>
    create: XOR<ProductCreateWithoutSubCategoriesInput, ProductUncheckedCreateWithoutSubCategoriesInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutSubCategoriesInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutSubCategoriesInput, ProductUncheckedUpdateWithoutSubCategoriesInput>
  }

  export type ProductUpdateManyWithWhereWithoutSubCategoriesInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutSubCategoriesInput>
  }

  export type CategoryHistoryUpsertWithWhereUniqueWithoutCategoryInput = {
    where: CategoryHistoryWhereUniqueInput
    update: XOR<CategoryHistoryUpdateWithoutCategoryInput, CategoryHistoryUncheckedUpdateWithoutCategoryInput>
    create: XOR<CategoryHistoryCreateWithoutCategoryInput, CategoryHistoryUncheckedCreateWithoutCategoryInput>
  }

  export type CategoryHistoryUpdateWithWhereUniqueWithoutCategoryInput = {
    where: CategoryHistoryWhereUniqueInput
    data: XOR<CategoryHistoryUpdateWithoutCategoryInput, CategoryHistoryUncheckedUpdateWithoutCategoryInput>
  }

  export type CategoryHistoryUpdateManyWithWhereWithoutCategoryInput = {
    where: CategoryHistoryScalarWhereInput
    data: XOR<CategoryHistoryUpdateManyMutationInput, CategoryHistoryUncheckedUpdateManyWithoutCategoryInput>
  }

  export type CategoryHistoryScalarWhereInput = {
    AND?: CategoryHistoryScalarWhereInput | CategoryHistoryScalarWhereInput[]
    OR?: CategoryHistoryScalarWhereInput[]
    NOT?: CategoryHistoryScalarWhereInput | CategoryHistoryScalarWhereInput[]
    id?: IntFilter<"CategoryHistory"> | number
    categoryId?: IntFilter<"CategoryHistory"> | number
    action?: StringFilter<"CategoryHistory"> | string
    changes?: JsonNullableFilter<"CategoryHistory">
    timestamp?: DateTimeFilter<"CategoryHistory"> | Date | string
  }

  export type BrandCreateWithoutProductsInput = {
    id: string
    name: string
    timestamp?: Date | string
    mainCategories?: MainCategoryCreateNestedManyWithoutBrandInput
  }

  export type BrandUncheckedCreateWithoutProductsInput = {
    id: string
    name: string
    timestamp?: Date | string
    mainCategories?: MainCategoryUncheckedCreateNestedManyWithoutBrandInput
  }

  export type BrandCreateOrConnectWithoutProductsInput = {
    where: BrandWhereUniqueInput
    create: XOR<BrandCreateWithoutProductsInput, BrandUncheckedCreateWithoutProductsInput>
  }

  export type ProductColorCreateWithoutProductInput = {
    colorId: string
    name: string
    hexCode?: string | null
    price?: number | null
    description?: string | null
    images?: ProductImageCreateNestedManyWithoutColorInput
    sizes?: ProductSizeCreateNestedManyWithoutColorInput
    stock?: ProductStockCreateNestedManyWithoutColorInput
    priceHistory?: PriceHistoryCreateNestedManyWithoutColorInput
    stockHistory?: StockHistoryCreateNestedManyWithoutColorInput
  }

  export type ProductColorUncheckedCreateWithoutProductInput = {
    id?: number
    colorId: string
    name: string
    hexCode?: string | null
    price?: number | null
    description?: string | null
    images?: ProductImageUncheckedCreateNestedManyWithoutColorInput
    sizes?: ProductSizeUncheckedCreateNestedManyWithoutColorInput
    stock?: ProductStockUncheckedCreateNestedManyWithoutColorInput
    priceHistory?: PriceHistoryUncheckedCreateNestedManyWithoutColorInput
    stockHistory?: StockHistoryUncheckedCreateNestedManyWithoutColorInput
  }

  export type ProductColorCreateOrConnectWithoutProductInput = {
    where: ProductColorWhereUniqueInput
    create: XOR<ProductColorCreateWithoutProductInput, ProductColorUncheckedCreateWithoutProductInput>
  }

  export type ProductColorCreateManyProductInputEnvelope = {
    data: ProductColorCreateManyProductInput | ProductColorCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ProductImageCreateWithoutProductInput = {
    url: string
    type: string
    kind: string
    order?: number
    colorName?: string | null
    colorIndex?: number | null
    color?: ProductColorCreateNestedOneWithoutImagesInput
  }

  export type ProductImageUncheckedCreateWithoutProductInput = {
    id?: number
    url: string
    type: string
    kind: string
    order?: number
    colorId?: number | null
    colorName?: string | null
    colorIndex?: number | null
  }

  export type ProductImageCreateOrConnectWithoutProductInput = {
    where: ProductImageWhereUniqueInput
    create: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput>
  }

  export type ProductImageCreateManyProductInputEnvelope = {
    data: ProductImageCreateManyProductInput | ProductImageCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ProductSizeCreateWithoutProductInput = {
    sizeId: number
    name: string
    availability: string
    price?: number | null
    sku?: number | null
    colorName?: string | null
    color?: ProductColorCreateNestedOneWithoutSizesInput
  }

  export type ProductSizeUncheckedCreateWithoutProductInput = {
    id?: number
    sizeId: number
    name: string
    availability: string
    price?: number | null
    sku?: number | null
    colorId?: number | null
    colorName?: string | null
  }

  export type ProductSizeCreateOrConnectWithoutProductInput = {
    where: ProductSizeWhereUniqueInput
    create: XOR<ProductSizeCreateWithoutProductInput, ProductSizeUncheckedCreateWithoutProductInput>
  }

  export type ProductSizeCreateManyProductInputEnvelope = {
    data: ProductSizeCreateManyProductInput | ProductSizeCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ProductStockCreateWithoutProductInput = {
    sizeId: number
    name: string
    availability: string
    price?: number | null
    sku?: number | null
    colorName?: string | null
    color?: ProductColorCreateNestedOneWithoutStockInput
  }

  export type ProductStockUncheckedCreateWithoutProductInput = {
    id?: number
    sizeId: number
    name: string
    availability: string
    price?: number | null
    sku?: number | null
    colorId?: number | null
    colorName?: string | null
  }

  export type ProductStockCreateOrConnectWithoutProductInput = {
    where: ProductStockWhereUniqueInput
    create: XOR<ProductStockCreateWithoutProductInput, ProductStockUncheckedCreateWithoutProductInput>
  }

  export type ProductStockCreateManyProductInputEnvelope = {
    data: ProductStockCreateManyProductInput | ProductStockCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type SubCategoryCreateWithoutProductsInput = {
    categoryId: number
    categoryName: string
    brand: string
    gender: string
    level: number
    isLeaf?: boolean
    matchingId?: number | null
    productCount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parentCategory?: MainCategoryCreateNestedOneWithoutSubcategoriesInput
    parentSubCategory?: SubCategoryCreateNestedOneWithoutSubcategoriesInput
    subcategories?: SubCategoryCreateNestedManyWithoutParentSubCategoryInput
    history?: CategoryHistoryCreateNestedManyWithoutCategoryInput
  }

  export type SubCategoryUncheckedCreateWithoutProductsInput = {
    categoryId: number
    categoryName: string
    brand: string
    gender: string
    level: number
    isLeaf?: boolean
    matchingId?: number | null
    productCount?: number | null
    parentCategoryId?: number | null
    parentSubCategoryId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subcategories?: SubCategoryUncheckedCreateNestedManyWithoutParentSubCategoryInput
    history?: CategoryHistoryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type SubCategoryCreateOrConnectWithoutProductsInput = {
    where: SubCategoryWhereUniqueInput
    create: XOR<SubCategoryCreateWithoutProductsInput, SubCategoryUncheckedCreateWithoutProductsInput>
  }

  export type PriceHistoryCreateWithoutProductInput = {
    price: number
    timestamp?: Date | string
    color?: ProductColorCreateNestedOneWithoutPriceHistoryInput
  }

  export type PriceHistoryUncheckedCreateWithoutProductInput = {
    id?: number
    price: number
    colorId?: number | null
    timestamp?: Date | string
  }

  export type PriceHistoryCreateOrConnectWithoutProductInput = {
    where: PriceHistoryWhereUniqueInput
    create: XOR<PriceHistoryCreateWithoutProductInput, PriceHistoryUncheckedCreateWithoutProductInput>
  }

  export type PriceHistoryCreateManyProductInputEnvelope = {
    data: PriceHistoryCreateManyProductInput | PriceHistoryCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type StockHistoryCreateWithoutProductInput = {
    sizeId: number
    available: boolean
    timestamp?: Date | string
    color?: ProductColorCreateNestedOneWithoutStockHistoryInput
  }

  export type StockHistoryUncheckedCreateWithoutProductInput = {
    id?: number
    sizeId: number
    colorId?: number | null
    available: boolean
    timestamp?: Date | string
  }

  export type StockHistoryCreateOrConnectWithoutProductInput = {
    where: StockHistoryWhereUniqueInput
    create: XOR<StockHistoryCreateWithoutProductInput, StockHistoryUncheckedCreateWithoutProductInput>
  }

  export type StockHistoryCreateManyProductInputEnvelope = {
    data: StockHistoryCreateManyProductInput | StockHistoryCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type BrandUpsertWithoutProductsInput = {
    update: XOR<BrandUpdateWithoutProductsInput, BrandUncheckedUpdateWithoutProductsInput>
    create: XOR<BrandCreateWithoutProductsInput, BrandUncheckedCreateWithoutProductsInput>
    where?: BrandWhereInput
  }

  export type BrandUpdateToOneWithWhereWithoutProductsInput = {
    where?: BrandWhereInput
    data: XOR<BrandUpdateWithoutProductsInput, BrandUncheckedUpdateWithoutProductsInput>
  }

  export type BrandUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    mainCategories?: MainCategoryUpdateManyWithoutBrandNestedInput
  }

  export type BrandUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    mainCategories?: MainCategoryUncheckedUpdateManyWithoutBrandNestedInput
  }

  export type ProductColorUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductColorWhereUniqueInput
    update: XOR<ProductColorUpdateWithoutProductInput, ProductColorUncheckedUpdateWithoutProductInput>
    create: XOR<ProductColorCreateWithoutProductInput, ProductColorUncheckedCreateWithoutProductInput>
  }

  export type ProductColorUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductColorWhereUniqueInput
    data: XOR<ProductColorUpdateWithoutProductInput, ProductColorUncheckedUpdateWithoutProductInput>
  }

  export type ProductColorUpdateManyWithWhereWithoutProductInput = {
    where: ProductColorScalarWhereInput
    data: XOR<ProductColorUpdateManyMutationInput, ProductColorUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductColorScalarWhereInput = {
    AND?: ProductColorScalarWhereInput | ProductColorScalarWhereInput[]
    OR?: ProductColorScalarWhereInput[]
    NOT?: ProductColorScalarWhereInput | ProductColorScalarWhereInput[]
    id?: IntFilter<"ProductColor"> | number
    colorId?: StringFilter<"ProductColor"> | string
    name?: StringFilter<"ProductColor"> | string
    hexCode?: StringNullableFilter<"ProductColor"> | string | null
    price?: IntNullableFilter<"ProductColor"> | number | null
    description?: StringNullableFilter<"ProductColor"> | string | null
    productId?: IntFilter<"ProductColor"> | number
  }

  export type ProductImageUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductImageWhereUniqueInput
    update: XOR<ProductImageUpdateWithoutProductInput, ProductImageUncheckedUpdateWithoutProductInput>
    create: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput>
  }

  export type ProductImageUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductImageWhereUniqueInput
    data: XOR<ProductImageUpdateWithoutProductInput, ProductImageUncheckedUpdateWithoutProductInput>
  }

  export type ProductImageUpdateManyWithWhereWithoutProductInput = {
    where: ProductImageScalarWhereInput
    data: XOR<ProductImageUpdateManyMutationInput, ProductImageUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductImageScalarWhereInput = {
    AND?: ProductImageScalarWhereInput | ProductImageScalarWhereInput[]
    OR?: ProductImageScalarWhereInput[]
    NOT?: ProductImageScalarWhereInput | ProductImageScalarWhereInput[]
    id?: IntFilter<"ProductImage"> | number
    url?: StringFilter<"ProductImage"> | string
    type?: StringFilter<"ProductImage"> | string
    kind?: StringFilter<"ProductImage"> | string
    order?: IntFilter<"ProductImage"> | number
    productId?: IntFilter<"ProductImage"> | number
    colorId?: IntNullableFilter<"ProductImage"> | number | null
    colorName?: StringNullableFilter<"ProductImage"> | string | null
    colorIndex?: IntNullableFilter<"ProductImage"> | number | null
  }

  export type ProductSizeUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductSizeWhereUniqueInput
    update: XOR<ProductSizeUpdateWithoutProductInput, ProductSizeUncheckedUpdateWithoutProductInput>
    create: XOR<ProductSizeCreateWithoutProductInput, ProductSizeUncheckedCreateWithoutProductInput>
  }

  export type ProductSizeUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductSizeWhereUniqueInput
    data: XOR<ProductSizeUpdateWithoutProductInput, ProductSizeUncheckedUpdateWithoutProductInput>
  }

  export type ProductSizeUpdateManyWithWhereWithoutProductInput = {
    where: ProductSizeScalarWhereInput
    data: XOR<ProductSizeUpdateManyMutationInput, ProductSizeUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductSizeScalarWhereInput = {
    AND?: ProductSizeScalarWhereInput | ProductSizeScalarWhereInput[]
    OR?: ProductSizeScalarWhereInput[]
    NOT?: ProductSizeScalarWhereInput | ProductSizeScalarWhereInput[]
    id?: IntFilter<"ProductSize"> | number
    sizeId?: IntFilter<"ProductSize"> | number
    name?: StringFilter<"ProductSize"> | string
    availability?: StringFilter<"ProductSize"> | string
    price?: IntNullableFilter<"ProductSize"> | number | null
    sku?: IntNullableFilter<"ProductSize"> | number | null
    productId?: IntFilter<"ProductSize"> | number
    colorId?: IntNullableFilter<"ProductSize"> | number | null
    colorName?: StringNullableFilter<"ProductSize"> | string | null
  }

  export type ProductStockUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductStockWhereUniqueInput
    update: XOR<ProductStockUpdateWithoutProductInput, ProductStockUncheckedUpdateWithoutProductInput>
    create: XOR<ProductStockCreateWithoutProductInput, ProductStockUncheckedCreateWithoutProductInput>
  }

  export type ProductStockUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductStockWhereUniqueInput
    data: XOR<ProductStockUpdateWithoutProductInput, ProductStockUncheckedUpdateWithoutProductInput>
  }

  export type ProductStockUpdateManyWithWhereWithoutProductInput = {
    where: ProductStockScalarWhereInput
    data: XOR<ProductStockUpdateManyMutationInput, ProductStockUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductStockScalarWhereInput = {
    AND?: ProductStockScalarWhereInput | ProductStockScalarWhereInput[]
    OR?: ProductStockScalarWhereInput[]
    NOT?: ProductStockScalarWhereInput | ProductStockScalarWhereInput[]
    id?: IntFilter<"ProductStock"> | number
    sizeId?: IntFilter<"ProductStock"> | number
    name?: StringFilter<"ProductStock"> | string
    availability?: StringFilter<"ProductStock"> | string
    price?: IntNullableFilter<"ProductStock"> | number | null
    sku?: IntNullableFilter<"ProductStock"> | number | null
    productId?: IntFilter<"ProductStock"> | number
    colorId?: IntNullableFilter<"ProductStock"> | number | null
    colorName?: StringNullableFilter<"ProductStock"> | string | null
  }

  export type SubCategoryUpsertWithWhereUniqueWithoutProductsInput = {
    where: SubCategoryWhereUniqueInput
    update: XOR<SubCategoryUpdateWithoutProductsInput, SubCategoryUncheckedUpdateWithoutProductsInput>
    create: XOR<SubCategoryCreateWithoutProductsInput, SubCategoryUncheckedCreateWithoutProductsInput>
  }

  export type SubCategoryUpdateWithWhereUniqueWithoutProductsInput = {
    where: SubCategoryWhereUniqueInput
    data: XOR<SubCategoryUpdateWithoutProductsInput, SubCategoryUncheckedUpdateWithoutProductsInput>
  }

  export type SubCategoryUpdateManyWithWhereWithoutProductsInput = {
    where: SubCategoryScalarWhereInput
    data: XOR<SubCategoryUpdateManyMutationInput, SubCategoryUncheckedUpdateManyWithoutProductsInput>
  }

  export type PriceHistoryUpsertWithWhereUniqueWithoutProductInput = {
    where: PriceHistoryWhereUniqueInput
    update: XOR<PriceHistoryUpdateWithoutProductInput, PriceHistoryUncheckedUpdateWithoutProductInput>
    create: XOR<PriceHistoryCreateWithoutProductInput, PriceHistoryUncheckedCreateWithoutProductInput>
  }

  export type PriceHistoryUpdateWithWhereUniqueWithoutProductInput = {
    where: PriceHistoryWhereUniqueInput
    data: XOR<PriceHistoryUpdateWithoutProductInput, PriceHistoryUncheckedUpdateWithoutProductInput>
  }

  export type PriceHistoryUpdateManyWithWhereWithoutProductInput = {
    where: PriceHistoryScalarWhereInput
    data: XOR<PriceHistoryUpdateManyMutationInput, PriceHistoryUncheckedUpdateManyWithoutProductInput>
  }

  export type PriceHistoryScalarWhereInput = {
    AND?: PriceHistoryScalarWhereInput | PriceHistoryScalarWhereInput[]
    OR?: PriceHistoryScalarWhereInput[]
    NOT?: PriceHistoryScalarWhereInput | PriceHistoryScalarWhereInput[]
    id?: IntFilter<"PriceHistory"> | number
    productId?: IntFilter<"PriceHistory"> | number
    price?: IntFilter<"PriceHistory"> | number
    colorId?: IntNullableFilter<"PriceHistory"> | number | null
    timestamp?: DateTimeFilter<"PriceHistory"> | Date | string
  }

  export type StockHistoryUpsertWithWhereUniqueWithoutProductInput = {
    where: StockHistoryWhereUniqueInput
    update: XOR<StockHistoryUpdateWithoutProductInput, StockHistoryUncheckedUpdateWithoutProductInput>
    create: XOR<StockHistoryCreateWithoutProductInput, StockHistoryUncheckedCreateWithoutProductInput>
  }

  export type StockHistoryUpdateWithWhereUniqueWithoutProductInput = {
    where: StockHistoryWhereUniqueInput
    data: XOR<StockHistoryUpdateWithoutProductInput, StockHistoryUncheckedUpdateWithoutProductInput>
  }

  export type StockHistoryUpdateManyWithWhereWithoutProductInput = {
    where: StockHistoryScalarWhereInput
    data: XOR<StockHistoryUpdateManyMutationInput, StockHistoryUncheckedUpdateManyWithoutProductInput>
  }

  export type StockHistoryScalarWhereInput = {
    AND?: StockHistoryScalarWhereInput | StockHistoryScalarWhereInput[]
    OR?: StockHistoryScalarWhereInput[]
    NOT?: StockHistoryScalarWhereInput | StockHistoryScalarWhereInput[]
    id?: IntFilter<"StockHistory"> | number
    productId?: IntFilter<"StockHistory"> | number
    sizeId?: IntFilter<"StockHistory"> | number
    colorId?: IntNullableFilter<"StockHistory"> | number | null
    available?: BoolFilter<"StockHistory"> | boolean
    timestamp?: DateTimeFilter<"StockHistory"> | Date | string
  }

  export type ProductCreateWithoutColorsInput = {
    productId: string
    name: string
    price?: number | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    brand: BrandCreateNestedOneWithoutProductsInput
    images?: ProductImageCreateNestedManyWithoutProductInput
    sizes?: ProductSizeCreateNestedManyWithoutProductInput
    stock?: ProductStockCreateNestedManyWithoutProductInput
    subCategories?: SubCategoryCreateNestedManyWithoutProductsInput
    priceHistory?: PriceHistoryCreateNestedManyWithoutProductInput
    stockHistory?: StockHistoryCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutColorsInput = {
    id?: number
    brandName: string
    productId: string
    name: string
    price?: number | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ProductImageUncheckedCreateNestedManyWithoutProductInput
    sizes?: ProductSizeUncheckedCreateNestedManyWithoutProductInput
    stock?: ProductStockUncheckedCreateNestedManyWithoutProductInput
    subCategories?: SubCategoryUncheckedCreateNestedManyWithoutProductsInput
    priceHistory?: PriceHistoryUncheckedCreateNestedManyWithoutProductInput
    stockHistory?: StockHistoryUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutColorsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutColorsInput, ProductUncheckedCreateWithoutColorsInput>
  }

  export type ProductImageCreateWithoutColorInput = {
    url: string
    type: string
    kind: string
    order?: number
    colorName?: string | null
    colorIndex?: number | null
    product: ProductCreateNestedOneWithoutImagesInput
  }

  export type ProductImageUncheckedCreateWithoutColorInput = {
    id?: number
    url: string
    type: string
    kind: string
    order?: number
    productId: number
    colorName?: string | null
    colorIndex?: number | null
  }

  export type ProductImageCreateOrConnectWithoutColorInput = {
    where: ProductImageWhereUniqueInput
    create: XOR<ProductImageCreateWithoutColorInput, ProductImageUncheckedCreateWithoutColorInput>
  }

  export type ProductImageCreateManyColorInputEnvelope = {
    data: ProductImageCreateManyColorInput | ProductImageCreateManyColorInput[]
    skipDuplicates?: boolean
  }

  export type ProductSizeCreateWithoutColorInput = {
    sizeId: number
    name: string
    availability: string
    price?: number | null
    sku?: number | null
    colorName?: string | null
    product: ProductCreateNestedOneWithoutSizesInput
  }

  export type ProductSizeUncheckedCreateWithoutColorInput = {
    id?: number
    sizeId: number
    name: string
    availability: string
    price?: number | null
    sku?: number | null
    productId: number
    colorName?: string | null
  }

  export type ProductSizeCreateOrConnectWithoutColorInput = {
    where: ProductSizeWhereUniqueInput
    create: XOR<ProductSizeCreateWithoutColorInput, ProductSizeUncheckedCreateWithoutColorInput>
  }

  export type ProductSizeCreateManyColorInputEnvelope = {
    data: ProductSizeCreateManyColorInput | ProductSizeCreateManyColorInput[]
    skipDuplicates?: boolean
  }

  export type ProductStockCreateWithoutColorInput = {
    sizeId: number
    name: string
    availability: string
    price?: number | null
    sku?: number | null
    colorName?: string | null
    product: ProductCreateNestedOneWithoutStockInput
  }

  export type ProductStockUncheckedCreateWithoutColorInput = {
    id?: number
    sizeId: number
    name: string
    availability: string
    price?: number | null
    sku?: number | null
    productId: number
    colorName?: string | null
  }

  export type ProductStockCreateOrConnectWithoutColorInput = {
    where: ProductStockWhereUniqueInput
    create: XOR<ProductStockCreateWithoutColorInput, ProductStockUncheckedCreateWithoutColorInput>
  }

  export type ProductStockCreateManyColorInputEnvelope = {
    data: ProductStockCreateManyColorInput | ProductStockCreateManyColorInput[]
    skipDuplicates?: boolean
  }

  export type PriceHistoryCreateWithoutColorInput = {
    price: number
    timestamp?: Date | string
    product: ProductCreateNestedOneWithoutPriceHistoryInput
  }

  export type PriceHistoryUncheckedCreateWithoutColorInput = {
    id?: number
    productId: number
    price: number
    timestamp?: Date | string
  }

  export type PriceHistoryCreateOrConnectWithoutColorInput = {
    where: PriceHistoryWhereUniqueInput
    create: XOR<PriceHistoryCreateWithoutColorInput, PriceHistoryUncheckedCreateWithoutColorInput>
  }

  export type PriceHistoryCreateManyColorInputEnvelope = {
    data: PriceHistoryCreateManyColorInput | PriceHistoryCreateManyColorInput[]
    skipDuplicates?: boolean
  }

  export type StockHistoryCreateWithoutColorInput = {
    sizeId: number
    available: boolean
    timestamp?: Date | string
    product: ProductCreateNestedOneWithoutStockHistoryInput
  }

  export type StockHistoryUncheckedCreateWithoutColorInput = {
    id?: number
    productId: number
    sizeId: number
    available: boolean
    timestamp?: Date | string
  }

  export type StockHistoryCreateOrConnectWithoutColorInput = {
    where: StockHistoryWhereUniqueInput
    create: XOR<StockHistoryCreateWithoutColorInput, StockHistoryUncheckedCreateWithoutColorInput>
  }

  export type StockHistoryCreateManyColorInputEnvelope = {
    data: StockHistoryCreateManyColorInput | StockHistoryCreateManyColorInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithoutColorsInput = {
    update: XOR<ProductUpdateWithoutColorsInput, ProductUncheckedUpdateWithoutColorsInput>
    create: XOR<ProductCreateWithoutColorsInput, ProductUncheckedCreateWithoutColorsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutColorsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutColorsInput, ProductUncheckedUpdateWithoutColorsInput>
  }

  export type ProductUpdateWithoutColorsInput = {
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: BrandUpdateOneRequiredWithoutProductsNestedInput
    images?: ProductImageUpdateManyWithoutProductNestedInput
    sizes?: ProductSizeUpdateManyWithoutProductNestedInput
    stock?: ProductStockUpdateManyWithoutProductNestedInput
    subCategories?: SubCategoryUpdateManyWithoutProductsNestedInput
    priceHistory?: PriceHistoryUpdateManyWithoutProductNestedInput
    stockHistory?: StockHistoryUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutColorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    brandName?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ProductImageUncheckedUpdateManyWithoutProductNestedInput
    sizes?: ProductSizeUncheckedUpdateManyWithoutProductNestedInput
    stock?: ProductStockUncheckedUpdateManyWithoutProductNestedInput
    subCategories?: SubCategoryUncheckedUpdateManyWithoutProductsNestedInput
    priceHistory?: PriceHistoryUncheckedUpdateManyWithoutProductNestedInput
    stockHistory?: StockHistoryUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductImageUpsertWithWhereUniqueWithoutColorInput = {
    where: ProductImageWhereUniqueInput
    update: XOR<ProductImageUpdateWithoutColorInput, ProductImageUncheckedUpdateWithoutColorInput>
    create: XOR<ProductImageCreateWithoutColorInput, ProductImageUncheckedCreateWithoutColorInput>
  }

  export type ProductImageUpdateWithWhereUniqueWithoutColorInput = {
    where: ProductImageWhereUniqueInput
    data: XOR<ProductImageUpdateWithoutColorInput, ProductImageUncheckedUpdateWithoutColorInput>
  }

  export type ProductImageUpdateManyWithWhereWithoutColorInput = {
    where: ProductImageScalarWhereInput
    data: XOR<ProductImageUpdateManyMutationInput, ProductImageUncheckedUpdateManyWithoutColorInput>
  }

  export type ProductSizeUpsertWithWhereUniqueWithoutColorInput = {
    where: ProductSizeWhereUniqueInput
    update: XOR<ProductSizeUpdateWithoutColorInput, ProductSizeUncheckedUpdateWithoutColorInput>
    create: XOR<ProductSizeCreateWithoutColorInput, ProductSizeUncheckedCreateWithoutColorInput>
  }

  export type ProductSizeUpdateWithWhereUniqueWithoutColorInput = {
    where: ProductSizeWhereUniqueInput
    data: XOR<ProductSizeUpdateWithoutColorInput, ProductSizeUncheckedUpdateWithoutColorInput>
  }

  export type ProductSizeUpdateManyWithWhereWithoutColorInput = {
    where: ProductSizeScalarWhereInput
    data: XOR<ProductSizeUpdateManyMutationInput, ProductSizeUncheckedUpdateManyWithoutColorInput>
  }

  export type ProductStockUpsertWithWhereUniqueWithoutColorInput = {
    where: ProductStockWhereUniqueInput
    update: XOR<ProductStockUpdateWithoutColorInput, ProductStockUncheckedUpdateWithoutColorInput>
    create: XOR<ProductStockCreateWithoutColorInput, ProductStockUncheckedCreateWithoutColorInput>
  }

  export type ProductStockUpdateWithWhereUniqueWithoutColorInput = {
    where: ProductStockWhereUniqueInput
    data: XOR<ProductStockUpdateWithoutColorInput, ProductStockUncheckedUpdateWithoutColorInput>
  }

  export type ProductStockUpdateManyWithWhereWithoutColorInput = {
    where: ProductStockScalarWhereInput
    data: XOR<ProductStockUpdateManyMutationInput, ProductStockUncheckedUpdateManyWithoutColorInput>
  }

  export type PriceHistoryUpsertWithWhereUniqueWithoutColorInput = {
    where: PriceHistoryWhereUniqueInput
    update: XOR<PriceHistoryUpdateWithoutColorInput, PriceHistoryUncheckedUpdateWithoutColorInput>
    create: XOR<PriceHistoryCreateWithoutColorInput, PriceHistoryUncheckedCreateWithoutColorInput>
  }

  export type PriceHistoryUpdateWithWhereUniqueWithoutColorInput = {
    where: PriceHistoryWhereUniqueInput
    data: XOR<PriceHistoryUpdateWithoutColorInput, PriceHistoryUncheckedUpdateWithoutColorInput>
  }

  export type PriceHistoryUpdateManyWithWhereWithoutColorInput = {
    where: PriceHistoryScalarWhereInput
    data: XOR<PriceHistoryUpdateManyMutationInput, PriceHistoryUncheckedUpdateManyWithoutColorInput>
  }

  export type StockHistoryUpsertWithWhereUniqueWithoutColorInput = {
    where: StockHistoryWhereUniqueInput
    update: XOR<StockHistoryUpdateWithoutColorInput, StockHistoryUncheckedUpdateWithoutColorInput>
    create: XOR<StockHistoryCreateWithoutColorInput, StockHistoryUncheckedCreateWithoutColorInput>
  }

  export type StockHistoryUpdateWithWhereUniqueWithoutColorInput = {
    where: StockHistoryWhereUniqueInput
    data: XOR<StockHistoryUpdateWithoutColorInput, StockHistoryUncheckedUpdateWithoutColorInput>
  }

  export type StockHistoryUpdateManyWithWhereWithoutColorInput = {
    where: StockHistoryScalarWhereInput
    data: XOR<StockHistoryUpdateManyMutationInput, StockHistoryUncheckedUpdateManyWithoutColorInput>
  }

  export type ProductCreateWithoutSizesInput = {
    productId: string
    name: string
    price?: number | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    brand: BrandCreateNestedOneWithoutProductsInput
    colors?: ProductColorCreateNestedManyWithoutProductInput
    images?: ProductImageCreateNestedManyWithoutProductInput
    stock?: ProductStockCreateNestedManyWithoutProductInput
    subCategories?: SubCategoryCreateNestedManyWithoutProductsInput
    priceHistory?: PriceHistoryCreateNestedManyWithoutProductInput
    stockHistory?: StockHistoryCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutSizesInput = {
    id?: number
    brandName: string
    productId: string
    name: string
    price?: number | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    colors?: ProductColorUncheckedCreateNestedManyWithoutProductInput
    images?: ProductImageUncheckedCreateNestedManyWithoutProductInput
    stock?: ProductStockUncheckedCreateNestedManyWithoutProductInput
    subCategories?: SubCategoryUncheckedCreateNestedManyWithoutProductsInput
    priceHistory?: PriceHistoryUncheckedCreateNestedManyWithoutProductInput
    stockHistory?: StockHistoryUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutSizesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutSizesInput, ProductUncheckedCreateWithoutSizesInput>
  }

  export type ProductColorCreateWithoutSizesInput = {
    colorId: string
    name: string
    hexCode?: string | null
    price?: number | null
    description?: string | null
    product: ProductCreateNestedOneWithoutColorsInput
    images?: ProductImageCreateNestedManyWithoutColorInput
    stock?: ProductStockCreateNestedManyWithoutColorInput
    priceHistory?: PriceHistoryCreateNestedManyWithoutColorInput
    stockHistory?: StockHistoryCreateNestedManyWithoutColorInput
  }

  export type ProductColorUncheckedCreateWithoutSizesInput = {
    id?: number
    colorId: string
    name: string
    hexCode?: string | null
    price?: number | null
    description?: string | null
    productId: number
    images?: ProductImageUncheckedCreateNestedManyWithoutColorInput
    stock?: ProductStockUncheckedCreateNestedManyWithoutColorInput
    priceHistory?: PriceHistoryUncheckedCreateNestedManyWithoutColorInput
    stockHistory?: StockHistoryUncheckedCreateNestedManyWithoutColorInput
  }

  export type ProductColorCreateOrConnectWithoutSizesInput = {
    where: ProductColorWhereUniqueInput
    create: XOR<ProductColorCreateWithoutSizesInput, ProductColorUncheckedCreateWithoutSizesInput>
  }

  export type ProductUpsertWithoutSizesInput = {
    update: XOR<ProductUpdateWithoutSizesInput, ProductUncheckedUpdateWithoutSizesInput>
    create: XOR<ProductCreateWithoutSizesInput, ProductUncheckedCreateWithoutSizesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutSizesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutSizesInput, ProductUncheckedUpdateWithoutSizesInput>
  }

  export type ProductUpdateWithoutSizesInput = {
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: BrandUpdateOneRequiredWithoutProductsNestedInput
    colors?: ProductColorUpdateManyWithoutProductNestedInput
    images?: ProductImageUpdateManyWithoutProductNestedInput
    stock?: ProductStockUpdateManyWithoutProductNestedInput
    subCategories?: SubCategoryUpdateManyWithoutProductsNestedInput
    priceHistory?: PriceHistoryUpdateManyWithoutProductNestedInput
    stockHistory?: StockHistoryUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutSizesInput = {
    id?: IntFieldUpdateOperationsInput | number
    brandName?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    colors?: ProductColorUncheckedUpdateManyWithoutProductNestedInput
    images?: ProductImageUncheckedUpdateManyWithoutProductNestedInput
    stock?: ProductStockUncheckedUpdateManyWithoutProductNestedInput
    subCategories?: SubCategoryUncheckedUpdateManyWithoutProductsNestedInput
    priceHistory?: PriceHistoryUncheckedUpdateManyWithoutProductNestedInput
    stockHistory?: StockHistoryUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductColorUpsertWithoutSizesInput = {
    update: XOR<ProductColorUpdateWithoutSizesInput, ProductColorUncheckedUpdateWithoutSizesInput>
    create: XOR<ProductColorCreateWithoutSizesInput, ProductColorUncheckedCreateWithoutSizesInput>
    where?: ProductColorWhereInput
  }

  export type ProductColorUpdateToOneWithWhereWithoutSizesInput = {
    where?: ProductColorWhereInput
    data: XOR<ProductColorUpdateWithoutSizesInput, ProductColorUncheckedUpdateWithoutSizesInput>
  }

  export type ProductColorUpdateWithoutSizesInput = {
    colorId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    hexCode?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    product?: ProductUpdateOneRequiredWithoutColorsNestedInput
    images?: ProductImageUpdateManyWithoutColorNestedInput
    stock?: ProductStockUpdateManyWithoutColorNestedInput
    priceHistory?: PriceHistoryUpdateManyWithoutColorNestedInput
    stockHistory?: StockHistoryUpdateManyWithoutColorNestedInput
  }

  export type ProductColorUncheckedUpdateWithoutSizesInput = {
    id?: IntFieldUpdateOperationsInput | number
    colorId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    hexCode?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: IntFieldUpdateOperationsInput | number
    images?: ProductImageUncheckedUpdateManyWithoutColorNestedInput
    stock?: ProductStockUncheckedUpdateManyWithoutColorNestedInput
    priceHistory?: PriceHistoryUncheckedUpdateManyWithoutColorNestedInput
    stockHistory?: StockHistoryUncheckedUpdateManyWithoutColorNestedInput
  }

  export type ProductCreateWithoutImagesInput = {
    productId: string
    name: string
    price?: number | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    brand: BrandCreateNestedOneWithoutProductsInput
    colors?: ProductColorCreateNestedManyWithoutProductInput
    sizes?: ProductSizeCreateNestedManyWithoutProductInput
    stock?: ProductStockCreateNestedManyWithoutProductInput
    subCategories?: SubCategoryCreateNestedManyWithoutProductsInput
    priceHistory?: PriceHistoryCreateNestedManyWithoutProductInput
    stockHistory?: StockHistoryCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutImagesInput = {
    id?: number
    brandName: string
    productId: string
    name: string
    price?: number | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    colors?: ProductColorUncheckedCreateNestedManyWithoutProductInput
    sizes?: ProductSizeUncheckedCreateNestedManyWithoutProductInput
    stock?: ProductStockUncheckedCreateNestedManyWithoutProductInput
    subCategories?: SubCategoryUncheckedCreateNestedManyWithoutProductsInput
    priceHistory?: PriceHistoryUncheckedCreateNestedManyWithoutProductInput
    stockHistory?: StockHistoryUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutImagesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutImagesInput, ProductUncheckedCreateWithoutImagesInput>
  }

  export type ProductColorCreateWithoutImagesInput = {
    colorId: string
    name: string
    hexCode?: string | null
    price?: number | null
    description?: string | null
    product: ProductCreateNestedOneWithoutColorsInput
    sizes?: ProductSizeCreateNestedManyWithoutColorInput
    stock?: ProductStockCreateNestedManyWithoutColorInput
    priceHistory?: PriceHistoryCreateNestedManyWithoutColorInput
    stockHistory?: StockHistoryCreateNestedManyWithoutColorInput
  }

  export type ProductColorUncheckedCreateWithoutImagesInput = {
    id?: number
    colorId: string
    name: string
    hexCode?: string | null
    price?: number | null
    description?: string | null
    productId: number
    sizes?: ProductSizeUncheckedCreateNestedManyWithoutColorInput
    stock?: ProductStockUncheckedCreateNestedManyWithoutColorInput
    priceHistory?: PriceHistoryUncheckedCreateNestedManyWithoutColorInput
    stockHistory?: StockHistoryUncheckedCreateNestedManyWithoutColorInput
  }

  export type ProductColorCreateOrConnectWithoutImagesInput = {
    where: ProductColorWhereUniqueInput
    create: XOR<ProductColorCreateWithoutImagesInput, ProductColorUncheckedCreateWithoutImagesInput>
  }

  export type ProductUpsertWithoutImagesInput = {
    update: XOR<ProductUpdateWithoutImagesInput, ProductUncheckedUpdateWithoutImagesInput>
    create: XOR<ProductCreateWithoutImagesInput, ProductUncheckedCreateWithoutImagesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutImagesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutImagesInput, ProductUncheckedUpdateWithoutImagesInput>
  }

  export type ProductUpdateWithoutImagesInput = {
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: BrandUpdateOneRequiredWithoutProductsNestedInput
    colors?: ProductColorUpdateManyWithoutProductNestedInput
    sizes?: ProductSizeUpdateManyWithoutProductNestedInput
    stock?: ProductStockUpdateManyWithoutProductNestedInput
    subCategories?: SubCategoryUpdateManyWithoutProductsNestedInput
    priceHistory?: PriceHistoryUpdateManyWithoutProductNestedInput
    stockHistory?: StockHistoryUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    brandName?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    colors?: ProductColorUncheckedUpdateManyWithoutProductNestedInput
    sizes?: ProductSizeUncheckedUpdateManyWithoutProductNestedInput
    stock?: ProductStockUncheckedUpdateManyWithoutProductNestedInput
    subCategories?: SubCategoryUncheckedUpdateManyWithoutProductsNestedInput
    priceHistory?: PriceHistoryUncheckedUpdateManyWithoutProductNestedInput
    stockHistory?: StockHistoryUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductColorUpsertWithoutImagesInput = {
    update: XOR<ProductColorUpdateWithoutImagesInput, ProductColorUncheckedUpdateWithoutImagesInput>
    create: XOR<ProductColorCreateWithoutImagesInput, ProductColorUncheckedCreateWithoutImagesInput>
    where?: ProductColorWhereInput
  }

  export type ProductColorUpdateToOneWithWhereWithoutImagesInput = {
    where?: ProductColorWhereInput
    data: XOR<ProductColorUpdateWithoutImagesInput, ProductColorUncheckedUpdateWithoutImagesInput>
  }

  export type ProductColorUpdateWithoutImagesInput = {
    colorId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    hexCode?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    product?: ProductUpdateOneRequiredWithoutColorsNestedInput
    sizes?: ProductSizeUpdateManyWithoutColorNestedInput
    stock?: ProductStockUpdateManyWithoutColorNestedInput
    priceHistory?: PriceHistoryUpdateManyWithoutColorNestedInput
    stockHistory?: StockHistoryUpdateManyWithoutColorNestedInput
  }

  export type ProductColorUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    colorId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    hexCode?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: IntFieldUpdateOperationsInput | number
    sizes?: ProductSizeUncheckedUpdateManyWithoutColorNestedInput
    stock?: ProductStockUncheckedUpdateManyWithoutColorNestedInput
    priceHistory?: PriceHistoryUncheckedUpdateManyWithoutColorNestedInput
    stockHistory?: StockHistoryUncheckedUpdateManyWithoutColorNestedInput
  }

  export type ProductCreateWithoutStockInput = {
    productId: string
    name: string
    price?: number | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    brand: BrandCreateNestedOneWithoutProductsInput
    colors?: ProductColorCreateNestedManyWithoutProductInput
    images?: ProductImageCreateNestedManyWithoutProductInput
    sizes?: ProductSizeCreateNestedManyWithoutProductInput
    subCategories?: SubCategoryCreateNestedManyWithoutProductsInput
    priceHistory?: PriceHistoryCreateNestedManyWithoutProductInput
    stockHistory?: StockHistoryCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutStockInput = {
    id?: number
    brandName: string
    productId: string
    name: string
    price?: number | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    colors?: ProductColorUncheckedCreateNestedManyWithoutProductInput
    images?: ProductImageUncheckedCreateNestedManyWithoutProductInput
    sizes?: ProductSizeUncheckedCreateNestedManyWithoutProductInput
    subCategories?: SubCategoryUncheckedCreateNestedManyWithoutProductsInput
    priceHistory?: PriceHistoryUncheckedCreateNestedManyWithoutProductInput
    stockHistory?: StockHistoryUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutStockInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutStockInput, ProductUncheckedCreateWithoutStockInput>
  }

  export type ProductColorCreateWithoutStockInput = {
    colorId: string
    name: string
    hexCode?: string | null
    price?: number | null
    description?: string | null
    product: ProductCreateNestedOneWithoutColorsInput
    images?: ProductImageCreateNestedManyWithoutColorInput
    sizes?: ProductSizeCreateNestedManyWithoutColorInput
    priceHistory?: PriceHistoryCreateNestedManyWithoutColorInput
    stockHistory?: StockHistoryCreateNestedManyWithoutColorInput
  }

  export type ProductColorUncheckedCreateWithoutStockInput = {
    id?: number
    colorId: string
    name: string
    hexCode?: string | null
    price?: number | null
    description?: string | null
    productId: number
    images?: ProductImageUncheckedCreateNestedManyWithoutColorInput
    sizes?: ProductSizeUncheckedCreateNestedManyWithoutColorInput
    priceHistory?: PriceHistoryUncheckedCreateNestedManyWithoutColorInput
    stockHistory?: StockHistoryUncheckedCreateNestedManyWithoutColorInput
  }

  export type ProductColorCreateOrConnectWithoutStockInput = {
    where: ProductColorWhereUniqueInput
    create: XOR<ProductColorCreateWithoutStockInput, ProductColorUncheckedCreateWithoutStockInput>
  }

  export type ProductUpsertWithoutStockInput = {
    update: XOR<ProductUpdateWithoutStockInput, ProductUncheckedUpdateWithoutStockInput>
    create: XOR<ProductCreateWithoutStockInput, ProductUncheckedCreateWithoutStockInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutStockInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutStockInput, ProductUncheckedUpdateWithoutStockInput>
  }

  export type ProductUpdateWithoutStockInput = {
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: BrandUpdateOneRequiredWithoutProductsNestedInput
    colors?: ProductColorUpdateManyWithoutProductNestedInput
    images?: ProductImageUpdateManyWithoutProductNestedInput
    sizes?: ProductSizeUpdateManyWithoutProductNestedInput
    subCategories?: SubCategoryUpdateManyWithoutProductsNestedInput
    priceHistory?: PriceHistoryUpdateManyWithoutProductNestedInput
    stockHistory?: StockHistoryUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutStockInput = {
    id?: IntFieldUpdateOperationsInput | number
    brandName?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    colors?: ProductColorUncheckedUpdateManyWithoutProductNestedInput
    images?: ProductImageUncheckedUpdateManyWithoutProductNestedInput
    sizes?: ProductSizeUncheckedUpdateManyWithoutProductNestedInput
    subCategories?: SubCategoryUncheckedUpdateManyWithoutProductsNestedInput
    priceHistory?: PriceHistoryUncheckedUpdateManyWithoutProductNestedInput
    stockHistory?: StockHistoryUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductColorUpsertWithoutStockInput = {
    update: XOR<ProductColorUpdateWithoutStockInput, ProductColorUncheckedUpdateWithoutStockInput>
    create: XOR<ProductColorCreateWithoutStockInput, ProductColorUncheckedCreateWithoutStockInput>
    where?: ProductColorWhereInput
  }

  export type ProductColorUpdateToOneWithWhereWithoutStockInput = {
    where?: ProductColorWhereInput
    data: XOR<ProductColorUpdateWithoutStockInput, ProductColorUncheckedUpdateWithoutStockInput>
  }

  export type ProductColorUpdateWithoutStockInput = {
    colorId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    hexCode?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    product?: ProductUpdateOneRequiredWithoutColorsNestedInput
    images?: ProductImageUpdateManyWithoutColorNestedInput
    sizes?: ProductSizeUpdateManyWithoutColorNestedInput
    priceHistory?: PriceHistoryUpdateManyWithoutColorNestedInput
    stockHistory?: StockHistoryUpdateManyWithoutColorNestedInput
  }

  export type ProductColorUncheckedUpdateWithoutStockInput = {
    id?: IntFieldUpdateOperationsInput | number
    colorId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    hexCode?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: IntFieldUpdateOperationsInput | number
    images?: ProductImageUncheckedUpdateManyWithoutColorNestedInput
    sizes?: ProductSizeUncheckedUpdateManyWithoutColorNestedInput
    priceHistory?: PriceHistoryUncheckedUpdateManyWithoutColorNestedInput
    stockHistory?: StockHistoryUncheckedUpdateManyWithoutColorNestedInput
  }

  export type ProductCreateWithoutPriceHistoryInput = {
    productId: string
    name: string
    price?: number | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    brand: BrandCreateNestedOneWithoutProductsInput
    colors?: ProductColorCreateNestedManyWithoutProductInput
    images?: ProductImageCreateNestedManyWithoutProductInput
    sizes?: ProductSizeCreateNestedManyWithoutProductInput
    stock?: ProductStockCreateNestedManyWithoutProductInput
    subCategories?: SubCategoryCreateNestedManyWithoutProductsInput
    stockHistory?: StockHistoryCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutPriceHistoryInput = {
    id?: number
    brandName: string
    productId: string
    name: string
    price?: number | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    colors?: ProductColorUncheckedCreateNestedManyWithoutProductInput
    images?: ProductImageUncheckedCreateNestedManyWithoutProductInput
    sizes?: ProductSizeUncheckedCreateNestedManyWithoutProductInput
    stock?: ProductStockUncheckedCreateNestedManyWithoutProductInput
    subCategories?: SubCategoryUncheckedCreateNestedManyWithoutProductsInput
    stockHistory?: StockHistoryUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutPriceHistoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutPriceHistoryInput, ProductUncheckedCreateWithoutPriceHistoryInput>
  }

  export type ProductColorCreateWithoutPriceHistoryInput = {
    colorId: string
    name: string
    hexCode?: string | null
    price?: number | null
    description?: string | null
    product: ProductCreateNestedOneWithoutColorsInput
    images?: ProductImageCreateNestedManyWithoutColorInput
    sizes?: ProductSizeCreateNestedManyWithoutColorInput
    stock?: ProductStockCreateNestedManyWithoutColorInput
    stockHistory?: StockHistoryCreateNestedManyWithoutColorInput
  }

  export type ProductColorUncheckedCreateWithoutPriceHistoryInput = {
    id?: number
    colorId: string
    name: string
    hexCode?: string | null
    price?: number | null
    description?: string | null
    productId: number
    images?: ProductImageUncheckedCreateNestedManyWithoutColorInput
    sizes?: ProductSizeUncheckedCreateNestedManyWithoutColorInput
    stock?: ProductStockUncheckedCreateNestedManyWithoutColorInput
    stockHistory?: StockHistoryUncheckedCreateNestedManyWithoutColorInput
  }

  export type ProductColorCreateOrConnectWithoutPriceHistoryInput = {
    where: ProductColorWhereUniqueInput
    create: XOR<ProductColorCreateWithoutPriceHistoryInput, ProductColorUncheckedCreateWithoutPriceHistoryInput>
  }

  export type ProductUpsertWithoutPriceHistoryInput = {
    update: XOR<ProductUpdateWithoutPriceHistoryInput, ProductUncheckedUpdateWithoutPriceHistoryInput>
    create: XOR<ProductCreateWithoutPriceHistoryInput, ProductUncheckedCreateWithoutPriceHistoryInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutPriceHistoryInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutPriceHistoryInput, ProductUncheckedUpdateWithoutPriceHistoryInput>
  }

  export type ProductUpdateWithoutPriceHistoryInput = {
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: BrandUpdateOneRequiredWithoutProductsNestedInput
    colors?: ProductColorUpdateManyWithoutProductNestedInput
    images?: ProductImageUpdateManyWithoutProductNestedInput
    sizes?: ProductSizeUpdateManyWithoutProductNestedInput
    stock?: ProductStockUpdateManyWithoutProductNestedInput
    subCategories?: SubCategoryUpdateManyWithoutProductsNestedInput
    stockHistory?: StockHistoryUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutPriceHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    brandName?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    colors?: ProductColorUncheckedUpdateManyWithoutProductNestedInput
    images?: ProductImageUncheckedUpdateManyWithoutProductNestedInput
    sizes?: ProductSizeUncheckedUpdateManyWithoutProductNestedInput
    stock?: ProductStockUncheckedUpdateManyWithoutProductNestedInput
    subCategories?: SubCategoryUncheckedUpdateManyWithoutProductsNestedInput
    stockHistory?: StockHistoryUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductColorUpsertWithoutPriceHistoryInput = {
    update: XOR<ProductColorUpdateWithoutPriceHistoryInput, ProductColorUncheckedUpdateWithoutPriceHistoryInput>
    create: XOR<ProductColorCreateWithoutPriceHistoryInput, ProductColorUncheckedCreateWithoutPriceHistoryInput>
    where?: ProductColorWhereInput
  }

  export type ProductColorUpdateToOneWithWhereWithoutPriceHistoryInput = {
    where?: ProductColorWhereInput
    data: XOR<ProductColorUpdateWithoutPriceHistoryInput, ProductColorUncheckedUpdateWithoutPriceHistoryInput>
  }

  export type ProductColorUpdateWithoutPriceHistoryInput = {
    colorId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    hexCode?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    product?: ProductUpdateOneRequiredWithoutColorsNestedInput
    images?: ProductImageUpdateManyWithoutColorNestedInput
    sizes?: ProductSizeUpdateManyWithoutColorNestedInput
    stock?: ProductStockUpdateManyWithoutColorNestedInput
    stockHistory?: StockHistoryUpdateManyWithoutColorNestedInput
  }

  export type ProductColorUncheckedUpdateWithoutPriceHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    colorId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    hexCode?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: IntFieldUpdateOperationsInput | number
    images?: ProductImageUncheckedUpdateManyWithoutColorNestedInput
    sizes?: ProductSizeUncheckedUpdateManyWithoutColorNestedInput
    stock?: ProductStockUncheckedUpdateManyWithoutColorNestedInput
    stockHistory?: StockHistoryUncheckedUpdateManyWithoutColorNestedInput
  }

  export type ProductCreateWithoutStockHistoryInput = {
    productId: string
    name: string
    price?: number | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    brand: BrandCreateNestedOneWithoutProductsInput
    colors?: ProductColorCreateNestedManyWithoutProductInput
    images?: ProductImageCreateNestedManyWithoutProductInput
    sizes?: ProductSizeCreateNestedManyWithoutProductInput
    stock?: ProductStockCreateNestedManyWithoutProductInput
    subCategories?: SubCategoryCreateNestedManyWithoutProductsInput
    priceHistory?: PriceHistoryCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutStockHistoryInput = {
    id?: number
    brandName: string
    productId: string
    name: string
    price?: number | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    colors?: ProductColorUncheckedCreateNestedManyWithoutProductInput
    images?: ProductImageUncheckedCreateNestedManyWithoutProductInput
    sizes?: ProductSizeUncheckedCreateNestedManyWithoutProductInput
    stock?: ProductStockUncheckedCreateNestedManyWithoutProductInput
    subCategories?: SubCategoryUncheckedCreateNestedManyWithoutProductsInput
    priceHistory?: PriceHistoryUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutStockHistoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutStockHistoryInput, ProductUncheckedCreateWithoutStockHistoryInput>
  }

  export type ProductColorCreateWithoutStockHistoryInput = {
    colorId: string
    name: string
    hexCode?: string | null
    price?: number | null
    description?: string | null
    product: ProductCreateNestedOneWithoutColorsInput
    images?: ProductImageCreateNestedManyWithoutColorInput
    sizes?: ProductSizeCreateNestedManyWithoutColorInput
    stock?: ProductStockCreateNestedManyWithoutColorInput
    priceHistory?: PriceHistoryCreateNestedManyWithoutColorInput
  }

  export type ProductColorUncheckedCreateWithoutStockHistoryInput = {
    id?: number
    colorId: string
    name: string
    hexCode?: string | null
    price?: number | null
    description?: string | null
    productId: number
    images?: ProductImageUncheckedCreateNestedManyWithoutColorInput
    sizes?: ProductSizeUncheckedCreateNestedManyWithoutColorInput
    stock?: ProductStockUncheckedCreateNestedManyWithoutColorInput
    priceHistory?: PriceHistoryUncheckedCreateNestedManyWithoutColorInput
  }

  export type ProductColorCreateOrConnectWithoutStockHistoryInput = {
    where: ProductColorWhereUniqueInput
    create: XOR<ProductColorCreateWithoutStockHistoryInput, ProductColorUncheckedCreateWithoutStockHistoryInput>
  }

  export type ProductUpsertWithoutStockHistoryInput = {
    update: XOR<ProductUpdateWithoutStockHistoryInput, ProductUncheckedUpdateWithoutStockHistoryInput>
    create: XOR<ProductCreateWithoutStockHistoryInput, ProductUncheckedCreateWithoutStockHistoryInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutStockHistoryInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutStockHistoryInput, ProductUncheckedUpdateWithoutStockHistoryInput>
  }

  export type ProductUpdateWithoutStockHistoryInput = {
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: BrandUpdateOneRequiredWithoutProductsNestedInput
    colors?: ProductColorUpdateManyWithoutProductNestedInput
    images?: ProductImageUpdateManyWithoutProductNestedInput
    sizes?: ProductSizeUpdateManyWithoutProductNestedInput
    stock?: ProductStockUpdateManyWithoutProductNestedInput
    subCategories?: SubCategoryUpdateManyWithoutProductsNestedInput
    priceHistory?: PriceHistoryUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutStockHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    brandName?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    colors?: ProductColorUncheckedUpdateManyWithoutProductNestedInput
    images?: ProductImageUncheckedUpdateManyWithoutProductNestedInput
    sizes?: ProductSizeUncheckedUpdateManyWithoutProductNestedInput
    stock?: ProductStockUncheckedUpdateManyWithoutProductNestedInput
    subCategories?: SubCategoryUncheckedUpdateManyWithoutProductsNestedInput
    priceHistory?: PriceHistoryUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductColorUpsertWithoutStockHistoryInput = {
    update: XOR<ProductColorUpdateWithoutStockHistoryInput, ProductColorUncheckedUpdateWithoutStockHistoryInput>
    create: XOR<ProductColorCreateWithoutStockHistoryInput, ProductColorUncheckedCreateWithoutStockHistoryInput>
    where?: ProductColorWhereInput
  }

  export type ProductColorUpdateToOneWithWhereWithoutStockHistoryInput = {
    where?: ProductColorWhereInput
    data: XOR<ProductColorUpdateWithoutStockHistoryInput, ProductColorUncheckedUpdateWithoutStockHistoryInput>
  }

  export type ProductColorUpdateWithoutStockHistoryInput = {
    colorId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    hexCode?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    product?: ProductUpdateOneRequiredWithoutColorsNestedInput
    images?: ProductImageUpdateManyWithoutColorNestedInput
    sizes?: ProductSizeUpdateManyWithoutColorNestedInput
    stock?: ProductStockUpdateManyWithoutColorNestedInput
    priceHistory?: PriceHistoryUpdateManyWithoutColorNestedInput
  }

  export type ProductColorUncheckedUpdateWithoutStockHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    colorId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    hexCode?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: IntFieldUpdateOperationsInput | number
    images?: ProductImageUncheckedUpdateManyWithoutColorNestedInput
    sizes?: ProductSizeUncheckedUpdateManyWithoutColorNestedInput
    stock?: ProductStockUncheckedUpdateManyWithoutColorNestedInput
    priceHistory?: PriceHistoryUncheckedUpdateManyWithoutColorNestedInput
  }

  export type SubCategoryCreateWithoutHistoryInput = {
    categoryId: number
    categoryName: string
    brand: string
    gender: string
    level: number
    isLeaf?: boolean
    matchingId?: number | null
    productCount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parentCategory?: MainCategoryCreateNestedOneWithoutSubcategoriesInput
    parentSubCategory?: SubCategoryCreateNestedOneWithoutSubcategoriesInput
    subcategories?: SubCategoryCreateNestedManyWithoutParentSubCategoryInput
    products?: ProductCreateNestedManyWithoutSubCategoriesInput
  }

  export type SubCategoryUncheckedCreateWithoutHistoryInput = {
    categoryId: number
    categoryName: string
    brand: string
    gender: string
    level: number
    isLeaf?: boolean
    matchingId?: number | null
    productCount?: number | null
    parentCategoryId?: number | null
    parentSubCategoryId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subcategories?: SubCategoryUncheckedCreateNestedManyWithoutParentSubCategoryInput
    products?: ProductUncheckedCreateNestedManyWithoutSubCategoriesInput
  }

  export type SubCategoryCreateOrConnectWithoutHistoryInput = {
    where: SubCategoryWhereUniqueInput
    create: XOR<SubCategoryCreateWithoutHistoryInput, SubCategoryUncheckedCreateWithoutHistoryInput>
  }

  export type SubCategoryUpsertWithoutHistoryInput = {
    update: XOR<SubCategoryUpdateWithoutHistoryInput, SubCategoryUncheckedUpdateWithoutHistoryInput>
    create: XOR<SubCategoryCreateWithoutHistoryInput, SubCategoryUncheckedCreateWithoutHistoryInput>
    where?: SubCategoryWhereInput
  }

  export type SubCategoryUpdateToOneWithWhereWithoutHistoryInput = {
    where?: SubCategoryWhereInput
    data: XOR<SubCategoryUpdateWithoutHistoryInput, SubCategoryUncheckedUpdateWithoutHistoryInput>
  }

  export type SubCategoryUpdateWithoutHistoryInput = {
    categoryId?: IntFieldUpdateOperationsInput | number
    categoryName?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    isLeaf?: BoolFieldUpdateOperationsInput | boolean
    matchingId?: NullableIntFieldUpdateOperationsInput | number | null
    productCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentCategory?: MainCategoryUpdateOneWithoutSubcategoriesNestedInput
    parentSubCategory?: SubCategoryUpdateOneWithoutSubcategoriesNestedInput
    subcategories?: SubCategoryUpdateManyWithoutParentSubCategoryNestedInput
    products?: ProductUpdateManyWithoutSubCategoriesNestedInput
  }

  export type SubCategoryUncheckedUpdateWithoutHistoryInput = {
    categoryId?: IntFieldUpdateOperationsInput | number
    categoryName?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    isLeaf?: BoolFieldUpdateOperationsInput | boolean
    matchingId?: NullableIntFieldUpdateOperationsInput | number | null
    productCount?: NullableIntFieldUpdateOperationsInput | number | null
    parentCategoryId?: NullableIntFieldUpdateOperationsInput | number | null
    parentSubCategoryId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subcategories?: SubCategoryUncheckedUpdateManyWithoutParentSubCategoryNestedInput
    products?: ProductUncheckedUpdateManyWithoutSubCategoriesNestedInput
  }

  export type MainCategoryCreateManyBrandInput = {
    id: number
    name: string
    gender: string
    level?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductCreateManyBrandInput = {
    id?: number
    productId: string
    name: string
    price?: number | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MainCategoryUpdateWithoutBrandInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subcategories?: SubCategoryUpdateManyWithoutParentCategoryNestedInput
  }

  export type MainCategoryUncheckedUpdateWithoutBrandInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subcategories?: SubCategoryUncheckedUpdateManyWithoutParentCategoryNestedInput
  }

  export type MainCategoryUncheckedUpdateManyWithoutBrandInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUpdateWithoutBrandInput = {
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    colors?: ProductColorUpdateManyWithoutProductNestedInput
    images?: ProductImageUpdateManyWithoutProductNestedInput
    sizes?: ProductSizeUpdateManyWithoutProductNestedInput
    stock?: ProductStockUpdateManyWithoutProductNestedInput
    subCategories?: SubCategoryUpdateManyWithoutProductsNestedInput
    priceHistory?: PriceHistoryUpdateManyWithoutProductNestedInput
    stockHistory?: StockHistoryUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutBrandInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    colors?: ProductColorUncheckedUpdateManyWithoutProductNestedInput
    images?: ProductImageUncheckedUpdateManyWithoutProductNestedInput
    sizes?: ProductSizeUncheckedUpdateManyWithoutProductNestedInput
    stock?: ProductStockUncheckedUpdateManyWithoutProductNestedInput
    subCategories?: SubCategoryUncheckedUpdateManyWithoutProductsNestedInput
    priceHistory?: PriceHistoryUncheckedUpdateManyWithoutProductNestedInput
    stockHistory?: StockHistoryUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutBrandInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubCategoryCreateManyParentCategoryInput = {
    categoryId: number
    categoryName: string
    brand: string
    gender: string
    level: number
    isLeaf?: boolean
    matchingId?: number | null
    productCount?: number | null
    parentSubCategoryId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubCategoryUpdateWithoutParentCategoryInput = {
    categoryId?: IntFieldUpdateOperationsInput | number
    categoryName?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    isLeaf?: BoolFieldUpdateOperationsInput | boolean
    matchingId?: NullableIntFieldUpdateOperationsInput | number | null
    productCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentSubCategory?: SubCategoryUpdateOneWithoutSubcategoriesNestedInput
    subcategories?: SubCategoryUpdateManyWithoutParentSubCategoryNestedInput
    products?: ProductUpdateManyWithoutSubCategoriesNestedInput
    history?: CategoryHistoryUpdateManyWithoutCategoryNestedInput
  }

  export type SubCategoryUncheckedUpdateWithoutParentCategoryInput = {
    categoryId?: IntFieldUpdateOperationsInput | number
    categoryName?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    isLeaf?: BoolFieldUpdateOperationsInput | boolean
    matchingId?: NullableIntFieldUpdateOperationsInput | number | null
    productCount?: NullableIntFieldUpdateOperationsInput | number | null
    parentSubCategoryId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subcategories?: SubCategoryUncheckedUpdateManyWithoutParentSubCategoryNestedInput
    products?: ProductUncheckedUpdateManyWithoutSubCategoriesNestedInput
    history?: CategoryHistoryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type SubCategoryUncheckedUpdateManyWithoutParentCategoryInput = {
    categoryId?: IntFieldUpdateOperationsInput | number
    categoryName?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    isLeaf?: BoolFieldUpdateOperationsInput | boolean
    matchingId?: NullableIntFieldUpdateOperationsInput | number | null
    productCount?: NullableIntFieldUpdateOperationsInput | number | null
    parentSubCategoryId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubCategoryCreateManyParentSubCategoryInput = {
    categoryId: number
    categoryName: string
    brand: string
    gender: string
    level: number
    isLeaf?: boolean
    matchingId?: number | null
    productCount?: number | null
    parentCategoryId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryHistoryCreateManyCategoryInput = {
    id?: number
    action: string
    changes?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: Date | string
  }

  export type SubCategoryUpdateWithoutParentSubCategoryInput = {
    categoryId?: IntFieldUpdateOperationsInput | number
    categoryName?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    isLeaf?: BoolFieldUpdateOperationsInput | boolean
    matchingId?: NullableIntFieldUpdateOperationsInput | number | null
    productCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentCategory?: MainCategoryUpdateOneWithoutSubcategoriesNestedInput
    subcategories?: SubCategoryUpdateManyWithoutParentSubCategoryNestedInput
    products?: ProductUpdateManyWithoutSubCategoriesNestedInput
    history?: CategoryHistoryUpdateManyWithoutCategoryNestedInput
  }

  export type SubCategoryUncheckedUpdateWithoutParentSubCategoryInput = {
    categoryId?: IntFieldUpdateOperationsInput | number
    categoryName?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    isLeaf?: BoolFieldUpdateOperationsInput | boolean
    matchingId?: NullableIntFieldUpdateOperationsInput | number | null
    productCount?: NullableIntFieldUpdateOperationsInput | number | null
    parentCategoryId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subcategories?: SubCategoryUncheckedUpdateManyWithoutParentSubCategoryNestedInput
    products?: ProductUncheckedUpdateManyWithoutSubCategoriesNestedInput
    history?: CategoryHistoryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type SubCategoryUncheckedUpdateManyWithoutParentSubCategoryInput = {
    categoryId?: IntFieldUpdateOperationsInput | number
    categoryName?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    isLeaf?: BoolFieldUpdateOperationsInput | boolean
    matchingId?: NullableIntFieldUpdateOperationsInput | number | null
    productCount?: NullableIntFieldUpdateOperationsInput | number | null
    parentCategoryId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUpdateWithoutSubCategoriesInput = {
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: BrandUpdateOneRequiredWithoutProductsNestedInput
    colors?: ProductColorUpdateManyWithoutProductNestedInput
    images?: ProductImageUpdateManyWithoutProductNestedInput
    sizes?: ProductSizeUpdateManyWithoutProductNestedInput
    stock?: ProductStockUpdateManyWithoutProductNestedInput
    priceHistory?: PriceHistoryUpdateManyWithoutProductNestedInput
    stockHistory?: StockHistoryUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutSubCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    brandName?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    colors?: ProductColorUncheckedUpdateManyWithoutProductNestedInput
    images?: ProductImageUncheckedUpdateManyWithoutProductNestedInput
    sizes?: ProductSizeUncheckedUpdateManyWithoutProductNestedInput
    stock?: ProductStockUncheckedUpdateManyWithoutProductNestedInput
    priceHistory?: PriceHistoryUncheckedUpdateManyWithoutProductNestedInput
    stockHistory?: StockHistoryUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutSubCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    brandName?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryHistoryUpdateWithoutCategoryInput = {
    action?: StringFieldUpdateOperationsInput | string
    changes?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryHistoryUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    changes?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryHistoryUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    changes?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductColorCreateManyProductInput = {
    id?: number
    colorId: string
    name: string
    hexCode?: string | null
    price?: number | null
    description?: string | null
  }

  export type ProductImageCreateManyProductInput = {
    id?: number
    url: string
    type: string
    kind: string
    order?: number
    colorId?: number | null
    colorName?: string | null
    colorIndex?: number | null
  }

  export type ProductSizeCreateManyProductInput = {
    id?: number
    sizeId: number
    name: string
    availability: string
    price?: number | null
    sku?: number | null
    colorId?: number | null
    colorName?: string | null
  }

  export type ProductStockCreateManyProductInput = {
    id?: number
    sizeId: number
    name: string
    availability: string
    price?: number | null
    sku?: number | null
    colorId?: number | null
    colorName?: string | null
  }

  export type PriceHistoryCreateManyProductInput = {
    id?: number
    price: number
    colorId?: number | null
    timestamp?: Date | string
  }

  export type StockHistoryCreateManyProductInput = {
    id?: number
    sizeId: number
    colorId?: number | null
    available: boolean
    timestamp?: Date | string
  }

  export type ProductColorUpdateWithoutProductInput = {
    colorId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    hexCode?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    images?: ProductImageUpdateManyWithoutColorNestedInput
    sizes?: ProductSizeUpdateManyWithoutColorNestedInput
    stock?: ProductStockUpdateManyWithoutColorNestedInput
    priceHistory?: PriceHistoryUpdateManyWithoutColorNestedInput
    stockHistory?: StockHistoryUpdateManyWithoutColorNestedInput
  }

  export type ProductColorUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    colorId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    hexCode?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    images?: ProductImageUncheckedUpdateManyWithoutColorNestedInput
    sizes?: ProductSizeUncheckedUpdateManyWithoutColorNestedInput
    stock?: ProductStockUncheckedUpdateManyWithoutColorNestedInput
    priceHistory?: PriceHistoryUncheckedUpdateManyWithoutColorNestedInput
    stockHistory?: StockHistoryUncheckedUpdateManyWithoutColorNestedInput
  }

  export type ProductColorUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    colorId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    hexCode?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductImageUpdateWithoutProductInput = {
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    kind?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    colorName?: NullableStringFieldUpdateOperationsInput | string | null
    colorIndex?: NullableIntFieldUpdateOperationsInput | number | null
    color?: ProductColorUpdateOneWithoutImagesNestedInput
  }

  export type ProductImageUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    kind?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    colorId?: NullableIntFieldUpdateOperationsInput | number | null
    colorName?: NullableStringFieldUpdateOperationsInput | string | null
    colorIndex?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductImageUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    kind?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    colorId?: NullableIntFieldUpdateOperationsInput | number | null
    colorName?: NullableStringFieldUpdateOperationsInput | string | null
    colorIndex?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductSizeUpdateWithoutProductInput = {
    sizeId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    availability?: StringFieldUpdateOperationsInput | string
    price?: NullableIntFieldUpdateOperationsInput | number | null
    sku?: NullableIntFieldUpdateOperationsInput | number | null
    colorName?: NullableStringFieldUpdateOperationsInput | string | null
    color?: ProductColorUpdateOneWithoutSizesNestedInput
  }

  export type ProductSizeUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    sizeId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    availability?: StringFieldUpdateOperationsInput | string
    price?: NullableIntFieldUpdateOperationsInput | number | null
    sku?: NullableIntFieldUpdateOperationsInput | number | null
    colorId?: NullableIntFieldUpdateOperationsInput | number | null
    colorName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductSizeUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    sizeId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    availability?: StringFieldUpdateOperationsInput | string
    price?: NullableIntFieldUpdateOperationsInput | number | null
    sku?: NullableIntFieldUpdateOperationsInput | number | null
    colorId?: NullableIntFieldUpdateOperationsInput | number | null
    colorName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductStockUpdateWithoutProductInput = {
    sizeId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    availability?: StringFieldUpdateOperationsInput | string
    price?: NullableIntFieldUpdateOperationsInput | number | null
    sku?: NullableIntFieldUpdateOperationsInput | number | null
    colorName?: NullableStringFieldUpdateOperationsInput | string | null
    color?: ProductColorUpdateOneWithoutStockNestedInput
  }

  export type ProductStockUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    sizeId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    availability?: StringFieldUpdateOperationsInput | string
    price?: NullableIntFieldUpdateOperationsInput | number | null
    sku?: NullableIntFieldUpdateOperationsInput | number | null
    colorId?: NullableIntFieldUpdateOperationsInput | number | null
    colorName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductStockUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    sizeId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    availability?: StringFieldUpdateOperationsInput | string
    price?: NullableIntFieldUpdateOperationsInput | number | null
    sku?: NullableIntFieldUpdateOperationsInput | number | null
    colorId?: NullableIntFieldUpdateOperationsInput | number | null
    colorName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubCategoryUpdateWithoutProductsInput = {
    categoryId?: IntFieldUpdateOperationsInput | number
    categoryName?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    isLeaf?: BoolFieldUpdateOperationsInput | boolean
    matchingId?: NullableIntFieldUpdateOperationsInput | number | null
    productCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentCategory?: MainCategoryUpdateOneWithoutSubcategoriesNestedInput
    parentSubCategory?: SubCategoryUpdateOneWithoutSubcategoriesNestedInput
    subcategories?: SubCategoryUpdateManyWithoutParentSubCategoryNestedInput
    history?: CategoryHistoryUpdateManyWithoutCategoryNestedInput
  }

  export type SubCategoryUncheckedUpdateWithoutProductsInput = {
    categoryId?: IntFieldUpdateOperationsInput | number
    categoryName?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    isLeaf?: BoolFieldUpdateOperationsInput | boolean
    matchingId?: NullableIntFieldUpdateOperationsInput | number | null
    productCount?: NullableIntFieldUpdateOperationsInput | number | null
    parentCategoryId?: NullableIntFieldUpdateOperationsInput | number | null
    parentSubCategoryId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subcategories?: SubCategoryUncheckedUpdateManyWithoutParentSubCategoryNestedInput
    history?: CategoryHistoryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type SubCategoryUncheckedUpdateManyWithoutProductsInput = {
    categoryId?: IntFieldUpdateOperationsInput | number
    categoryName?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    isLeaf?: BoolFieldUpdateOperationsInput | boolean
    matchingId?: NullableIntFieldUpdateOperationsInput | number | null
    productCount?: NullableIntFieldUpdateOperationsInput | number | null
    parentCategoryId?: NullableIntFieldUpdateOperationsInput | number | null
    parentSubCategoryId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceHistoryUpdateWithoutProductInput = {
    price?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    color?: ProductColorUpdateOneWithoutPriceHistoryNestedInput
  }

  export type PriceHistoryUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    colorId?: NullableIntFieldUpdateOperationsInput | number | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceHistoryUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    colorId?: NullableIntFieldUpdateOperationsInput | number | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockHistoryUpdateWithoutProductInput = {
    sizeId?: IntFieldUpdateOperationsInput | number
    available?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    color?: ProductColorUpdateOneWithoutStockHistoryNestedInput
  }

  export type StockHistoryUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    sizeId?: IntFieldUpdateOperationsInput | number
    colorId?: NullableIntFieldUpdateOperationsInput | number | null
    available?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockHistoryUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    sizeId?: IntFieldUpdateOperationsInput | number
    colorId?: NullableIntFieldUpdateOperationsInput | number | null
    available?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductImageCreateManyColorInput = {
    id?: number
    url: string
    type: string
    kind: string
    order?: number
    productId: number
    colorName?: string | null
    colorIndex?: number | null
  }

  export type ProductSizeCreateManyColorInput = {
    id?: number
    sizeId: number
    name: string
    availability: string
    price?: number | null
    sku?: number | null
    productId: number
    colorName?: string | null
  }

  export type ProductStockCreateManyColorInput = {
    id?: number
    sizeId: number
    name: string
    availability: string
    price?: number | null
    sku?: number | null
    productId: number
    colorName?: string | null
  }

  export type PriceHistoryCreateManyColorInput = {
    id?: number
    productId: number
    price: number
    timestamp?: Date | string
  }

  export type StockHistoryCreateManyColorInput = {
    id?: number
    productId: number
    sizeId: number
    available: boolean
    timestamp?: Date | string
  }

  export type ProductImageUpdateWithoutColorInput = {
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    kind?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    colorName?: NullableStringFieldUpdateOperationsInput | string | null
    colorIndex?: NullableIntFieldUpdateOperationsInput | number | null
    product?: ProductUpdateOneRequiredWithoutImagesNestedInput
  }

  export type ProductImageUncheckedUpdateWithoutColorInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    kind?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    colorName?: NullableStringFieldUpdateOperationsInput | string | null
    colorIndex?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductImageUncheckedUpdateManyWithoutColorInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    kind?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    colorName?: NullableStringFieldUpdateOperationsInput | string | null
    colorIndex?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductSizeUpdateWithoutColorInput = {
    sizeId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    availability?: StringFieldUpdateOperationsInput | string
    price?: NullableIntFieldUpdateOperationsInput | number | null
    sku?: NullableIntFieldUpdateOperationsInput | number | null
    colorName?: NullableStringFieldUpdateOperationsInput | string | null
    product?: ProductUpdateOneRequiredWithoutSizesNestedInput
  }

  export type ProductSizeUncheckedUpdateWithoutColorInput = {
    id?: IntFieldUpdateOperationsInput | number
    sizeId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    availability?: StringFieldUpdateOperationsInput | string
    price?: NullableIntFieldUpdateOperationsInput | number | null
    sku?: NullableIntFieldUpdateOperationsInput | number | null
    productId?: IntFieldUpdateOperationsInput | number
    colorName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductSizeUncheckedUpdateManyWithoutColorInput = {
    id?: IntFieldUpdateOperationsInput | number
    sizeId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    availability?: StringFieldUpdateOperationsInput | string
    price?: NullableIntFieldUpdateOperationsInput | number | null
    sku?: NullableIntFieldUpdateOperationsInput | number | null
    productId?: IntFieldUpdateOperationsInput | number
    colorName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductStockUpdateWithoutColorInput = {
    sizeId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    availability?: StringFieldUpdateOperationsInput | string
    price?: NullableIntFieldUpdateOperationsInput | number | null
    sku?: NullableIntFieldUpdateOperationsInput | number | null
    colorName?: NullableStringFieldUpdateOperationsInput | string | null
    product?: ProductUpdateOneRequiredWithoutStockNestedInput
  }

  export type ProductStockUncheckedUpdateWithoutColorInput = {
    id?: IntFieldUpdateOperationsInput | number
    sizeId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    availability?: StringFieldUpdateOperationsInput | string
    price?: NullableIntFieldUpdateOperationsInput | number | null
    sku?: NullableIntFieldUpdateOperationsInput | number | null
    productId?: IntFieldUpdateOperationsInput | number
    colorName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductStockUncheckedUpdateManyWithoutColorInput = {
    id?: IntFieldUpdateOperationsInput | number
    sizeId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    availability?: StringFieldUpdateOperationsInput | string
    price?: NullableIntFieldUpdateOperationsInput | number | null
    sku?: NullableIntFieldUpdateOperationsInput | number | null
    productId?: IntFieldUpdateOperationsInput | number
    colorName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PriceHistoryUpdateWithoutColorInput = {
    price?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutPriceHistoryNestedInput
  }

  export type PriceHistoryUncheckedUpdateWithoutColorInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceHistoryUncheckedUpdateManyWithoutColorInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockHistoryUpdateWithoutColorInput = {
    sizeId?: IntFieldUpdateOperationsInput | number
    available?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutStockHistoryNestedInput
  }

  export type StockHistoryUncheckedUpdateWithoutColorInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    sizeId?: IntFieldUpdateOperationsInput | number
    available?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockHistoryUncheckedUpdateManyWithoutColorInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    sizeId?: IntFieldUpdateOperationsInput | number
    available?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
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