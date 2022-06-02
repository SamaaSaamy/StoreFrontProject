import { book, Books } from '../book';
import supertest from 'supertest';
import app from '../../server';

const request = supertest(app);

const store = new Books()
let book = {"name": "samaa", "author_name": "samaa", "pagesnumber": 200, "price": 40}

describe("Book Model", () => {
    it('should have an index method', () => {
        expect(store.index).toBeDefined();
    });

    it('should have a show method', () => {
        expect(store.show).toBeDefined();
    });

    it('should have a create method', () => {
        expect(store.create).toBeDefined();
    });

    it('should have a delete method', () => {
        expect(store.delete).toBeDefined();
    });
    it('create method should add a book', async () => {
        const createdBook = await store.create(book);
        expect(createdBook).toEqual({
          id: createdBook.id,
          name: 'samaa',
          author_name: 'samaa',
          pagesnumber: 200,
          price: 40
        });
      });

      it('Index method should return All books', async () => {
        const books = await store.index();
        let length = books.length
        expect(books[0].name).toBe('samaa');
      });

      it('Show method should return a specific book', async () => {
        const createdBook = await store.create(book);
        const result = await store.show(String(createdBook.id));
        expect(result.id).toBe(createdBook.id);
        expect(result.name).toBe("samaa");
        expect(result.author_name).toBe("samaa");
        expect(result.pagesnumber).toBe(200);
        expect(result.price).toBe(40);
      });

     
});


