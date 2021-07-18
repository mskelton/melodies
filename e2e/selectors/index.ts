export const S = {
  collections: {
    card: (title: string) =>
      `*data-testid=collection-card >> h1:text-is('${title}')`,
  },
  nav: {
    colorModeSwitch: "data-testid=color-mode-switch",
    links: {
      collections: "'Collections'",
      github: "[aria-label='Open GitHub repo']",
      home: "'Home'",
      songs: "'Songs'",
    },
    title: "nav h1",
  },
  pageTitle: "main h1",
}
