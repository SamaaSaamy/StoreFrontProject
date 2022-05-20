import { book, Books } from '../book';

const store = new Books()

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
        const result = await store.create({
             id: 1,
            name: 'Bridge to Terabithia',
            pagesNumber: 250,
            author_name: 'Katherine Paterson',
        });
        expect(result).toEqual({
            id: 1,
            name: 'Bridge to Terabithia',
            pagesNumber: 250,
            author_name: 'Katherine Paterson',
        });
    });

    // it('index method should return a list of books', async () => {
    //     const result = await store.index();
    //     expect(result).toEqual([{
    //         id: 1,
    //         name: 'Bridge to Terabithia',
    //         pagesNumber: 250,
    //         author_name: 'Katherine Paterson',
    //     }]);
    // });

    // it('show method should return the correct book', async () => {
    //     const result = await store.show("1");
    //     expect(result).toEqual({
    //         id: 1,
    //         name: 'Bridge to Terabithia',
    //         pagesNumber: 250,
    //         author_name: 'Katherine Paterson',
    //     });
    // });

    // it('delete method should remove the book', async () => {
    //     store.delete("1");
    //     const result = await store.index()

    //     expect(result).toEqual([]);
    // });
});