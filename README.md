# SKN Elysia.js HTML Type Extension Library

<p align="center">
  <a href="https://elysiajs.com" target="_blank">
  <img width="150px" src="https://firebasestorage.googleapis.com/v0/b/skn-ultimate-project-la437.appspot.com/o/GitHub%20Library%2F16-TypeScript-SEHT.svg?alt=media&token=7fc0bcd6-ed51-4a12-beb9-30009c20eedb" alt="Elysia HTML" />
  </a>
</p>

> TypeScript

[![NPM Version](https://img.shields.io/npm/v/%40best-skn%2Felysia-html-types)](https://www.npmjs.com/package/@best-skn/elysia-html-types) [![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/license/mit)

&nbsp;

## **_Introduction:_**

### This is a simple TypeScript Type Extension Library for Elysia.js HTML

### I made this library so that I can use it in all of my Elysia.js projects without writing the same codes over and over again

&nbsp;

## **_Details:_**

### **`JSXChildrenProps` Interface**

- As the name suggests, it is an interface for JSX props holding `children` property
- For usage instruction, see `Usage` section

### **`JSXBasicProps` Interface**

- An interface that extends `JSXChildrenProps`
- In addition to `children` property, it holds `lang`, `desc`, `kwd`, `title`, `icn` properties
- This interface is good for HTML meta info
- For usage instruction, see `Usage` section

### **`JSXComponent` Type**

- This type definition is for JSX Component
- It takes a Generic type as its props type
- Returns a JSX component
- For usage instruction, see `Usage` section

### **`JSXComponentNoProps` Type**

- As the name suggests, this type definition is just like `JSXComponent` but without props
- It does not need a Generic type as it has no props
- Returns a JSX component
- For usage instruction, see `Usage` section

&nbsp;

## **_Use Case:_**

- Elysia.js
- Elysia.js HTML

&nbsp;

## **_Requirements:_**

### This library has peer dependency for Elysia.js 1.2.25. It may or may not work on 2.x

### This library is intended to be used in Elysia.js HTML of minimum 1.2.0. It may or may not work on 2.x

- 💀 Minimum [elysia](https://www.npmjs.com/package/elysia) Version: `1.2.25`
- 💀 Minimum [@elysiajs/html](https://www.npmjs.com/package/@elysiajs/html) Version: `1.2.0`

&nbsp;

## **_Usage:_**

### To install the package, type the following in console

> ```zsh
> npm add -D @best-skn/elysia-html-types
> #or
> yarn add -D @best-skn/elysia-html-types
> #or
> pnpm add -D @best-skn/elysia-html-types
> #or
> bun add -D @best-skn/elysia-html-types
> ```

### Create a directory called `types` in the root location of your project, and create a file called `elysia.d.ts`, then do this

> ```typescript
> import "@best-skn/elysia-html-types";
> ```

### Check your `tsconfig.json` if `includes` property has `**/*.ts`, `**/*.tsx` or not otherwise the type definition file may not work

### Now Inside your Elysia.js Project, use the package like this (Just an example)

#### **_`JSXChildrenProps` Type:_**

#### For any JSX Component, do the following

> ```typescript jsx
> import { Html, type JSXChildrenProps, type JSXComponent } from "@elysiajs/html";
>
> const HomeRoute: JSXComponent<JSXChildrenProps> = (props) => {
>   const { children } = props;
>
>   return (
>     <div>{children}</div>
>   );
> };
>
> export default HomeRoute;
> ```

#### **_`JSXBasicProps` Type:_**

#### For any kinds of JSX Component, do the following

> ```typescript jsx
> import { Html, type JSXBasicProps, type JSXComponent } from "@elysiajs/html";
>
> const BaseHtml: JSXComponent<JSXBasicProps> = (props) => {
>   const { children, lang, desc, kwd, title, icn } = props;
>
>   return (
>     <html lang={lang}>
>       <head>
>         <meta charset="UTF-8" />
>
>         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
>
>         <meta name="description" content={desc ?? "Elysia Web Application"} />
>
>         <meta name="keywords" content={kwd ?? "Elysia, Bun, TypeScript"} />
>
>         <title>{title ?? "Elysia App"}</title>
>
>         <link rel="icon" href={icn ?? "/public/icons/logo.svg"} />
>       </head>
>
>       <body>
>         <main>{children}</main>
>       </body>
>     </html>
>   );
> };
>
> export default BaseHtml;
> ```

#### **_`JSXComponent` Type:_**

#### For your JSX Component, do the following

> ```typescript jsx
> import { Html, type JSXChildrenProps, type JSXComponent } from "@elysiajs/html";
>
> const HomeRoute: JSXComponent<JSXChildrenProps> = (props) => {
>   const { children } = props;
>
>   return (
>     <div>{children}</div>
>   );
> };
>
> export default HomeRoute;
> ```

#### **_`JSXComponentNoProps` Type:_**

#### For JSX Component, do the following

> ```typescript jsx
> import { Html, type JSXComponentNoProps } from "@elysiajs/html";
>
> const HomeRoute: JSXComponentNoProps = () => (<div>Hello from Elysia!</div>);
>
> export default HomeRoute;
> ```

&nbsp;

## **_Dedicated To:_**

- 👩‍⚕️`Tanjila Hasan Trina`: The long lost love of my life. The course of nature separated us from our paths and put us in separate places far away from each other. But no matter how separated we are right now, each and every moment of mine is only dedicated to you. We may not see each other in this lifetime as it seems but I will find you again in the next life. I just want to say: `世界は残酷だ それでも君を愛すよ`
- 💯`My Parents`: The greatest treasures of my life ever.

&nbsp;

## **_License:_**

Copyright (C) 2024 SKN Shukhan

Licensed under the MIT License
