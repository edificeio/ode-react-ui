import { Meta, StoryObj } from "@storybook/react";
import { AppCard } from "../AppCard";
import { AppIcon } from "../AppIcon";
import React from "react";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/AppCard/All Apps",
  component: AppCard,
  args: {
    level: "h1",
    headingStyle: "h3",
    isHeading: true,
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as Meta<typeof AppCard>;

type Story = StoryObj<typeof AppCard>;

// More on component templates: https://storybook.= {js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any) => (
  <AppCard {...args}>
    <AppIcon app={args.app} size="40" />
    <AppCard.Name />
  </AppCard>
);

export const ApplicationAccount: Story = {
  render: Template,
  args: {
    app: {
      icon: "account",
      address: "",
      display: false,
      displayName: "",
      isExternal: false,
      name: "Account",
      scope: [],
      resourceName: "",
    },
  },
};

export const ApplicationActualites: Story = {
  render: Template,

  args: {
    app: {
      icon: "actualites",
      address: "",
      display: false,
      displayName: "",
      isExternal: false,
      name: "Actualites",
      scope: [],
      resourceName: "",
    },
  },
};

export const ApplicationAdmin: Story = {
  render: Template,

  args: {
    app: {
      icon: "admin",
      address: "",
      display: false,
      displayName: "",
      isExternal: false,
      name: "Admin",
      scope: [],
      resourceName: "",
    },
  },
};

export const ApplicationAdminPortal: Story = {
  render: Template,

  args: {
    app: {
      icon: "admin-portal",
      address: "",
      display: false,
      displayName: "",
      isExternal: false,
      name: "Admin Portal",
      scope: [],
      resourceName: "",
    },
  },
};

export const ApplicationArchive: Story = {
  render: Template,

  args: {
    app: {
      icon: "archive",
      address: "",
      display: false,
      displayName: "",
      isExternal: false,
      name: "Archive",
      scope: [],
      resourceName: "",
    },
  },
};

export const ApplicationBlog: Story = {
  render: Template,

  args: {
    app: {
      icon: "blog",
      address: "",
      display: false,
      displayName: "",
      isExternal: false,
      name: "Blog",
      scope: [],
      resourceName: "",
    },
  },
};

export const ApplicationCahierDeTexte: Story = {
  render: Template,

  args: {
    app: {
      icon: "cahier-de-texte",
      address: "",
      display: false,
      displayName: "",
      isExternal: false,
      name: "Cahier de texte",
      scope: [],
      resourceName: "",
    },
  },
};

export const ApplicationCahierTexte: Story = {
  render: Template,

  args: {
    app: {
      icon: "cahier-textes",
      address: "",
      display: false,
      displayName: "",
      isExternal: false,
      name: "Cahier textes",
      scope: [],
      resourceName: "",
    },
  },
};

export const ApplicationCalendar: Story = {
  render: Template,

  args: {
    app: {
      icon: "calendar",
      address: "",
      display: false,
      displayName: "",
      isExternal: false,
      name: "Calendar",
      scope: [],
      resourceName: "",
    },
  },
};

export const ApplicationCns: Story = {
  render: Template,

  args: {
    app: {
      icon: "cns",
      address: "",
      display: false,
      displayName: "",
      isExternal: false,
      name: "Cns",
      scope: [],
      resourceName: "",
    },
  },
};

export const ApplicationCanalNumerique: Story = {
  render: Template,

  args: {
    app: {
      icon: "canal-numerique",
      address: "",
      display: false,
      displayName: "",
      isExternal: false,
      name: "Canal numérique",
      scope: [],
      resourceName: "",
    },
  },
};

export const ApplicationCollaborativeEditor: Story = {
  render: Template,

  args: {
    app: {
      icon: "pad",
      address: "",
      display: false,
      displayName: "",
      isExternal: false,
      name: "Pad",
      scope: [],
      resourceName: "",
    },
  },
};

export const ApplicationCollaborativeWall: Story = {
  render: Template,

  args: {
    app: {
      icon: "collaborative-wall",
      address: "",
      display: false,
      displayName: "",
      isExternal: false,
      name: "Collaborative Wall",
      scope: [],
      resourceName: "",
    },
  },
};

export const ApplicationCommunity: Story = {
  render: Template,

  args: {
    app: {
      icon: "community",
      address: "",
      display: false,
      displayName: "",
      isExternal: false,
      name: "Community",
      scope: [],
      resourceName: "",
    },
  },
};

export const ApplicationCompetences: Story = {
  render: Template,

  args: {
    app: {
      icon: "competences",
      address: "",
      display: false,
      displayName: "",
      isExternal: false,
      name: "Competences",
      scope: [],
      resourceName: "",
    },
  },
};

export const ApplicationConversation: Story = {
  render: Template,

  args: {
    app: {
      icon: "conversation",
      address: "",
      display: false,
      displayName: "",
      isExternal: false,
      name: "Conversation",
      scope: [],
      resourceName: "",
    },
  },
};

export const ApplicationDirectory: Story = {
  render: Template,

  args: {
    app: {
      icon: "directory",
      address: "",
      display: false,
      displayName: "",
      isExternal: false,
      name: "Directory",
      scope: [],
      resourceName: "",
    },
  },
};

export const ApplicationExercizer: Story = {
  render: Template,

  args: {
    app: {
      icon: "exercizer",
      address: "",
      display: false,
      displayName: "",
      isExternal: false,
      name: "Exercizer",
      scope: [],
      resourceName: "",
    },
  },
};

export const ApplicationFormulaire: Story = {
  render: Template,

  args: {
    app: {
      icon: "forms",
      address: "",
      display: false,
      displayName: "",
      isExternal: false,
      name: "Form",
      scope: [],
      resourceName: "",
    },
  },
};

export const ApplicationForum: Story = {
  render: Template,

  args: {
    app: {
      icon: "forum",
      address: "",
      display: false,
      displayName: "",
      isExternal: false,
      name: "Forum",
      scope: [],
      resourceName: "",
    },
  },
};

export const ApplicationLibrary: Story = {
  render: Template,

  args: {
    app: {
      icon: "library",
      address: "",
      display: false,
      displayName: "",
      isExternal: false,
      name: "Library",
      scope: [],
      resourceName: "",
    },
  },
};

export const ApplicationMindmap: Story = {
  render: Template,

  args: {
    app: {
      icon: "mindmap",
      address: "",
      display: false,
      displayName: "",
      isExternal: false,
      name: "Mindmap",
      scope: [],
      resourceName: "",
    },
  },
};

export const ApplicationNotes: Story = {
  render: Template,

  args: {
    app: {
      icon: "notes",
      address: "",
      display: false,
      displayName: "",
      isExternal: false,
      name: "Notes",
      scope: [],
      resourceName: "",
    },
  },
};

export const ApplicationPoll: Story = {
  render: Template,

  args: {
    app: {
      icon: "poll",
      address: "",
      display: false,
      displayName: "",
      isExternal: false,
      name: "Poll",
      scope: [],
      resourceName: "",
    },
  },
};

export const ApplicationPresences: Story = {
  render: Template,

  args: {
    app: {
      icon: "presences",
      address: "",
      display: false,
      displayName: "",
      isExternal: false,
      name: "Presences",
      scope: [],
      resourceName: "",
    },
  },
};

export const ApplicationQwant: Story = {
  render: Template,

  args: {
    app: {
      icon: "qwant",
      address: "",
      display: false,
      displayName: "",
      isExternal: false,
      name: "Qwant",
      scope: [],
      resourceName: "",
    },
  },
};

export const ApplicationRack: Story = {
  render: Template,

  args: {
    app: {
      icon: "rack",
      address: "",
      display: false,
      displayName: "",
      isExternal: false,
      name: "Rack",
      scope: [],
      resourceName: "",
    },
  },
};

export const ApplicationRbs: Story = {
  render: Template,

  args: {
    app: {
      icon: "rbs",
      address: "",
      display: false,
      displayName: "",
      isExternal: false,
      name: "Rbs",
      scope: [],
      resourceName: "",
    },
  },
};

export const ApplicationSchoolbook: Story = {
  render: Template,

  args: {
    app: {
      icon: "schoolbook",
      address: "",
      display: false,
      displayName: "",
      isExternal: false,
      name: "Schoolbook",
      scope: [],
      resourceName: "",
    },
  },
};

export const ApplicationScrapbook: Story = {
  render: Template,

  args: {
    app: {
      icon: "scrapbook",
      address: "",
      display: false,
      displayName: "",
      isExternal: false,
      name: "Scrapbook",
      scope: [],
      resourceName: "",
    },
  },
};

export const ApplicationSettingsClass: Story = {
  render: Template,

  args: {
    app: {
      icon: "settings-class",
      address: "",
      display: false,
      displayName: "",
      isExternal: false,
      name: "Settings Class",
      scope: [],
      resourceName: "",
    },
  },
};

export const ApplicationSharebigfiles: Story = {
  render: Template,

  args: {
    app: {
      icon: "sharebigfiles",
      address: "",
      display: false,
      displayName: "",
      isExternal: false,
      name: "Sharebigfiles",
      scope: [],
      resourceName: "",
    },
  },
};

export const ApplicationStatistics: Story = {
  render: Template,

  args: {
    app: {
      icon: "statistics",
      address: "",
      display: false,
      displayName: "",
      isExternal: false,
      name: "Statistics",
      scope: [],
      resourceName: "",
    },
  },
};

export const ApplicationStats: Story = {
  render: Template,

  args: {
    app: {
      icon: "stats",
      address: "",
      display: false,
      displayName: "",
      isExternal: false,
      name: "Stats",
      scope: [],
      resourceName: "",
    },
  },
};

export const ApplicationSupport: Story = {
  render: Template,

  args: {
    app: {
      icon: "support",
      address: "",
      display: false,
      displayName: "",
      isExternal: false,
      name: "Support",
      scope: [],
      resourceName: "",
    },
  },
};

export const ApplicationTimeline: Story = {
  render: Template,

  args: {
    app: {
      icon: "timeline",
      address: "",
      display: false,
      displayName: "",
      isExternal: false,
      name: "Timeline",
      scope: [],
      resourceName: "",
    },
  },
};

export const ApplicationTimelineGenerator: Story = {
  render: Template,

  args: {
    app: {
      icon: "timelinegenerator",
      address: "",
      display: false,
      displayName: "",
      isExternal: false,
      name: "Timeline Generator",
      scope: [],
      resourceName: "",
    },
  },
};

export const ApplicationUserbook: Story = {
  render: Template,

  args: {
    app: {
      icon: "userbook",
      address: "",
      display: false,
      displayName: "",
      isExternal: false,
      name: "Userbook",
      scope: [],
      resourceName: "",
    },
  },
};

export const ApplicationVideo: Story = {
  render: Template,

  args: {
    app: {
      icon: "video",
      address: "",
      display: false,
      displayName: "",
      isExternal: false,
      name: "Video",
      scope: [],
      resourceName: "",
    },
  },
};

export const ApplicationVisioconf: Story = {
  render: Template,

  args: {
    app: {
      icon: "visioconf",
      address: "",
      display: false,
      displayName: "",
      isExternal: false,
      name: "Visioconf",
      scope: [],
      resourceName: "",
    },
  },
};

export const ApplicationWebWebsite: Story = {
  render: Template,

  args: {
    app: {
      icon: "website",
      address: "",
      display: false,
      displayName: "",
      isExternal: false,
      name: "Website",
      scope: [],
      resourceName: "",
    },
  },
};

export const ApplicationWiki: Story = {
  render: Template,

  args: {
    app: {
      icon: "wiki",
      address: "",
      display: false,
      displayName: "",
      isExternal: false,
      name: "Wiki",
      scope: [],
      resourceName: "",
    },
  },
};

export const ApplicationWorkspace: Story = {
  render: Template,

  args: {
    app: {
      icon: "workspace",
      address: "",
      display: false,
      displayName: "",
      isExternal: false,
      name: "Workspace",
      scope: [],
      resourceName: "",
    },
  },
};
