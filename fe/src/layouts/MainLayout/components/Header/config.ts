interface SubMenuItem {
  title: string;
  description: string;
  to: string;
}

interface MainMenuConfig {
  trigger: string;
  items: SubMenuItem[];
}

const menuConfig: MainMenuConfig[] = [
  {
    trigger: "Workspaces",
    items: [
      {
        title: "Company Alpha",
        description: "Main workspace of development team",
        to: "/workspaces/alpha",
      },
      {
        title: "Personal plan",
        description: "Place to store learning and personal projects",
        to: "/workspaces/personal",
      },
    ],
  },
  {
    trigger: "Recent",
    items: [
      {
        title: "Trello Clone 2026 project",
        description: "Board you just accessed 5 minutes ago",
        to: "/board/1",
      },
      {
        title: "React learning roadmap",
        description: "Accessed yesterday",
        to: "/board/2",
      },
    ],
  },
  {
    trigger: "Starred",
    items: [
      {
        title: "Important things to do",
        description: "Core board of this year",
        to: "/board/1",
      },
    ],
  },
  {
    trigger: "Templates",
    items: [
      {
        title: "Agile project management",
        description: "Standard template for Scrum/Agile process",
        to: "/templates/agile",
      },
      {
        title: "Marketing plan",
        description: "Template for communication campaign",
        to: "/templates/marketing",
      },
    ],
  },
];

export { menuConfig };
export type { MainMenuConfig, SubMenuItem };
