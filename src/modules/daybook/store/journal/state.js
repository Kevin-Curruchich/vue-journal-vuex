export default () => ({
  isLoading: true,
  entries: [
    {
      id: new Date().getTime(),
      date: new Date().toDateString(),
      text: "rerum consequuntur. Pariatur est alias commodi ipsum ea quasi minima?",
      picture: null,
    },
    {
      id: new Date().getTime() + 2000,
      date: new Date().toDateString(),
      text: "Pariatur est alias commodi ipsum ea quasi minima? Pariatur est alias commodi",
      picture: null,
    },
    {
      id: new Date().getTime() + 3000,
      date: new Date().toDateString(),
      text: "commodi ipsum ea quasi minima? Pariatur est alias commodi Pariatur est alias",
      picture: null,
    },
  ],
});
