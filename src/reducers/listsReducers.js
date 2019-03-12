const initialState = [
  {
    title: "First",
    id: `list-${0}`,
    cards: [
      {
        id: `card-${0}`,
        content: "test content 0"
      },
      {
        id: `card-${1}`,
        content: "test content 1"
      }
    ]
  },
  {
    title: "Second",
    id: `list-${1}`,
    cards: [
      {
        id: `card-${2}`,
        content: "test content 2"
      },
      {
        id: `card-${3}`,
        content: "test content 3"
      },
      {
        id: `card-${4}`,
        content: "test content 4"
      }
    ]
  }
];

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default listsReducer;