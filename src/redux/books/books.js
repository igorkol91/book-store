const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const SHOW_BOOK = 'bookStore/books/SHOW_BOOK';
const initialState = [];

export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export const showBook = (books) => ({
  type: SHOW_BOOK,
  books,
});

export const addBooksMid = (book) => async (dispatch) => {
  await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/EMqSfZFiiqYcm52MLyia/books',
    {
      method: 'POST',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      body: JSON.stringify(book),
    });
  dispatch(addBook(book));
};

export const removeBookMid = (id) => async (dispatch) => {
  await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/EMqSfZFiiqYcm52MLyia/books/${id}`,
    {
      method: 'DELETE',
      body: JSON.stringify({ item_id: id }),
    });
  dispatch(removeBook(id));
};

export const showBooks = () => async (dispatch) => {
  const display = [];
  const allBooks = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/EMqSfZFiiqYcm52MLyia/books/',
    {
      method: 'GET',
    });
  const booksApi = await allBooks.json();
  Object.entries(booksApi).forEach(
    // eslint-disable-next-line
    ([item_id, value]) => display.push({ item_id, ...value[0] }),
  );
  dispatch(showBook(display));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter((elem) => action.id !== elem.item_id);
    case SHOW_BOOK:
      return action.books;
    default:
      return state;
  }
};

export default reducer;
