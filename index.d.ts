import { Html } from "@elysiajs/html";

/**
 * SKN Elysia.js HTML Type Extension Library
 *
 * @author SKN Shukhan
 * @version 1.0.0
 * @since 2025-03-13
 */
declare module "@elysiajs/html" {
  /**
   * An interface of props for JSX Component containing children property
   *
   * Example:
   *
   * ```typescript jsx
   * import { Html, type JSXChildrenProps, type JSXComponent } from "@elysiajs/html";
   *
   * const HomeRoute: JSXComponent<JSXChildrenProps> = (props) => {
   *   const { children } = props;
   *
   *   return (
   *     <div>{children}</div>
   *   );
   * };
   *
   * export default HomeRoute;
   * ```
   *
   * @since v1.0.0
   */
  export interface JSXChildrenProps {
    children: JSX.Element;
  }

  /**
   * An interface of props for JSX Component containing children property & other HTML meta information as properties
   *
   * Example:
   *
   * ```typescript jsx
   * import { Html, type JSXBasicProps, type JSXComponent } from "@elysiajs/html";
   *
   * const BaseHtml: JSXComponent<JSXBasicProps> = (props) => {
   *   const { children, lang, desc, kwd, title, icn } = props;
   *
   *   return (
   *     <html lang={lang}>
   *       <head>
   *         <meta charset="UTF-8" />
   *
   *         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   *
   *         <meta name="description" content={desc ?? "Elysia Web Application"} />
   *
   *         <meta name="keywords" content={kwd ?? "Elysia, Bun, TypeScript"} />
   *
   *         <title>{title ?? "Elysia App"}</title>
   *
   *         <link rel="icon" href={icn ?? "/public/icons/logo.svg"} />
   *       </head>
   *
   *       <body>
   *         <main>{children}</main>
   *       </body>
   *     </html>
   *   );
   * };
   *
   * export default BaseHtml;
   * ```
   *
   * @since v1.0.0
   */
  export interface JSXBasicProps extends JSXChildrenProps {
    lang?: string;
    desc?: string;
    kwd?: string;
    title?: string;
    icn?: string;
  }

  /**
   * JSX component that takes a props object of generic type and returns a JSX Element
   *
   * Example:
   *
   * ```typescript jsx
   * import { Html, type JSXChildrenProps, type JSXComponent } from "@elysiajs/html";
   *
   * const HomeRoute: JSXComponent<JSXChildrenProps> = (props) => {
   *   const { children } = props;
   *
   *   return (
   *     <div>{children}</div>
   *   );
   * };
   *
   * export default HomeRoute;
   * ```
   *
   * @property props T
   * @returns JSX.Element
   * @since v1.0.0
   */
  export type JSXComponent<T> = (props: T) => JSXChildrenProps["children"];

  /**
   * JSX component that takes no parameter (props) and returns a JSX Element
   *
   * Example:
   *
   * ```typescript jsx
   * import { Html, type JSXComponentNoProps } from "@elysiajs/html";
   *
   * const HomeRoute: JSXComponentNoProps = () => (<div>Hello from Elysia!</div>);
   *
   * export default HomeRoute;
   * ```
   *
   * @returns JSX.Element
   * @since v1.0.0
   */
  export type JSXComponentNoProps = () => JSXChildrenProps["children"];
}

export {};
