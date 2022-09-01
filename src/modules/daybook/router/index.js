export default {
  name: "daybook",
  path: "/daybook",
  component: () =>
    import(
      /* webpackChunkName: "daybook" */ "@/modules/daybook/layouts/DayBookLayout.vue"
    ),
  children: [
    {
      path: "",
      name: "no-entry",
      component: () =>
        import(
          /* webpackChunkName: "NoEntrySelected" */ "../views/NoEntrySelected.vue"
        ),
    },
    {
      path: ":id",
      name: "entry",
      component: () =>
        import(/* webpackChunkName: "EntryView" */ "../views/EntryView.vue"),
    },
  ],
};
