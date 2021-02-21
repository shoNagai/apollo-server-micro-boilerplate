import mockData from "../mocks/book.json";

export const resolvers = {
  Query: {
    books: () => mockData,
  },
};
