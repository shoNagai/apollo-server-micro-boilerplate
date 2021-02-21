# apollo-server-micro-boilerplate

Getting started with GraphQL on apollo-server-micro 🚀

## Installation

```
$ git clone https://github.com/shoNagai/apollo-server-micro-boilerplate.git
$ cd apollo-server-micro-boilerplate
$ yarn install
$ yarn dev
```

## step1 schema design

```TypeScript
type Book {
  id: ID!
  title: String!
  author: String!
}
```

```TypeScript
type Query {
  books: [Book!]!
}
```

## step2 generate types

```
$ yarn generate
```

```
src/types/graphql.ts
```

## step3 create a resolver

```TypeScript
import mockData from '../mocks/book.json';
import { Resolvers } from '../types/graphql';

export const resolvers: Resolvers = {
  Query: {
    books: () => mockData,
  },
};
```
