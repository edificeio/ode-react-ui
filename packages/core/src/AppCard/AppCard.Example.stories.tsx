import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AppCard } from "../index";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Core/AppCard/All Apps",
  component: AppCard,
  args: {
    level: "h1",
    headingStyle: "h3",
    isHeading: true,
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof AppCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AppCard> = (args) => (
  <AppCard {...args}>
    <AppCard.Icon size="32" />
  </AppCard>
);

export const ApplicationAccount = Template.bind({});
ApplicationAccount.args = {
  app: {
    icon: "account",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "Account",
    scope: [],
  },
};

export const ApplicationActualites = Template.bind({});
ApplicationActualites.args = {
  app: {
    icon: "actualites",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "Actualites",
    scope: [],
  },
};

export const ApplicationAdmin = Template.bind({});
ApplicationAdmin.args = {
  app: {
    icon: "admin",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "Admin",
    scope: [],
  },
};

export const ApplicationAdminPortal = Template.bind({});
ApplicationAdminPortal.args = {
  app: {
    icon: "admin-portal",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "Admin Portal",
    scope: [],
  },
};

export const ApplicationArchive = Template.bind({});
ApplicationArchive.args = {
  app: {
    icon: "archive",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "Archive",
    scope: [],
  },
};

export const ApplicationBlog = Template.bind({});
ApplicationBlog.args = {
  app: {
    icon: "blog",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "Blog",
    scope: [],
  },
};

export const ApplicationCahierDeTexte = Template.bind({});
ApplicationCahierDeTexte.args = {
  app: {
    icon: "cahier-de-texte",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "Cahier de texte",
    scope: [],
  },
};

export const ApplicationCahierTexte = Template.bind({});
ApplicationCahierTexte.args = {
  app: {
    icon: "cahier-textes",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "Cahier textes",
    scope: [],
  },
};

export const ApplicationCalendar = Template.bind({});
ApplicationCalendar.args = {
  app: {
    icon: "calendar",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "Calendar",
    scope: [],
  },
};

export const ApplicationCns = Template.bind({});
ApplicationCns.args = {
  app: {
    icon: "cns",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "Cns",
    scope: [],
  },
};

export const ApplicationCanalNumerique = Template.bind({});
ApplicationCanalNumerique.args = {
  app: {
    icon: "canal-numerique",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "Canal numérique",
    scope: [],
  },
};

export const ApplicationCollaborativeEditor = Template.bind({});
ApplicationCollaborativeEditor.args = {
  app: {
    icon: "pad",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "Pad",
    scope: [],
  },
};

export const ApplicationCollaborativeWall = Template.bind({});
ApplicationCollaborativeWall.args = {
  app: {
    icon: "collaborative-wall",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "Collaborative Wall",
    scope: [],
  },
};

export const ApplicationCommunity = Template.bind({});
ApplicationCommunity.args = {
  app: {
    icon: "community",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "Community",
    scope: [],
  },
};

export const ApplicationCompetences = Template.bind({});
ApplicationCompetences.args = {
  app: {
    icon: "competences",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "Competences",
    scope: [],
  },
};

export const ApplicationConversation = Template.bind({});
ApplicationConversation.args = {
  app: {
    icon: "conversation",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "Conversation",
    scope: [],
  },
};

export const ApplicationDirectory = Template.bind({});
ApplicationDirectory.args = {
  app: {
    icon: "directory",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "Directory",
    scope: [],
  },
};

export const ApplicationExercizer = Template.bind({});
ApplicationExercizer.args = {
  app: {
    icon: "exercizer",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "Exercizer",
    scope: [],
  },
};

export const ApplicationFormulaire = Template.bind({});
ApplicationFormulaire.args = {
  app: {
    icon: "forms",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "Form",
    scope: [],
  },
};

export const ApplicationForum = Template.bind({});
ApplicationForum.args = {
  app: {
    icon: "forum",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "Forum",
    scope: [],
  },
};

export const ApplicationLibrary = Template.bind({});
ApplicationLibrary.args = {
  app: {
    icon: "library",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "Library",
    scope: [],
  },
};

export const ApplicationMindmap = Template.bind({});
ApplicationMindmap.args = {
  app: {
    icon: "mindmap",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "Mindmap",
    scope: [],
  },
};

export const ApplicationNotes = Template.bind({});
ApplicationNotes.args = {
  app: {
    icon: "notes",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "Notes",
    scope: [],
  },
};

export const ApplicationPoll = Template.bind({});
ApplicationPoll.args = {
  app: {
    icon: "poll",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "Poll",
    scope: [],
  },
};

export const ApplicationPresences = Template.bind({});
ApplicationPresences.args = {
  app: {
    icon: "presences",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "Presences",
    scope: [],
  },
};

export const ApplicationQwant = Template.bind({});
ApplicationQwant.args = {
  app: {
    icon: "qwant",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "Qwant",
    scope: [],
  },
};

export const ApplicationRack = Template.bind({});
ApplicationRack.args = {
  app: {
    icon: "rack",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "Rack",
    scope: [],
  },
};

export const ApplicationRbs = Template.bind({});
ApplicationRbs.args = {
  app: {
    icon: "rbs",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "Rbs",
    scope: [],
  },
};

export const ApplicationSchoolbook = Template.bind({});
ApplicationSchoolbook.args = {
  app: {
    icon: "schoolbook",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "Schoolbook",
    scope: [],
  },
};

export const ApplicationScrapbook = Template.bind({});
ApplicationScrapbook.args = {
  app: {
    icon: "scrapbook",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "Scrapbook",
    scope: [],
  },
};

export const ApplicationSettingsClass = Template.bind({});
ApplicationSettingsClass.args = {
  app: {
    icon: "settings-class",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "Settings Class",
    scope: [],
  },
};

export const ApplicationSharebigfiles = Template.bind({});
ApplicationSharebigfiles.args = {
  app: {
    icon: "sharebigfiles",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "Sharebigfiles",
    scope: [],
  },
};

export const ApplicationStatistics = Template.bind({});
ApplicationStatistics.args = {
  app: {
    icon: "statistics",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "Statistics",
    scope: [],
  },
};

export const ApplicationStats = Template.bind({});
ApplicationStats.args = {
  app: {
    icon: "stats",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "Stats",
    scope: [],
  },
};

export const ApplicationSupport = Template.bind({});
ApplicationSupport.args = {
  app: {
    icon: "support",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "Support",
    scope: [],
  },
};

export const ApplicationTimeline = Template.bind({});
ApplicationTimeline.args = {
  app: {
    icon: "timeline",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "Timeline",
    scope: [],
  },
};

export const ApplicationTimelineGenerator = Template.bind({});
ApplicationTimelineGenerator.args = {
  app: {
    icon: "timelinegenerator",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "Timeline Generator",
    scope: [],
  },
};

export const ApplicationUserbook = Template.bind({});
ApplicationUserbook.args = {
  app: {
    icon: "userbook",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "Userbook",
    scope: [],
  },
};

export const ApplicationVideo = Template.bind({});
ApplicationVideo.args = {
  app: {
    icon: "video",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "Video",
    scope: [],
  },
};

export const ApplicationVisioconf = Template.bind({});
ApplicationVisioconf.args = {
  app: {
    icon: "visioconf",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "Visioconf",
    scope: [],
  },
};

export const ApplicationWebWebsite = Template.bind({});
ApplicationWebWebsite.args = {
  app: {
    icon: "website",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "Website",
    scope: [],
  },
};

export const ApplicationWiki = Template.bind({});
ApplicationWiki.args = {
  app: {
    icon: "wiki",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "Wiki",
    scope: [],
  },
};

export const ApplicationWorkspace = Template.bind({});
ApplicationWorkspace.args = {
  app: {
    icon: "workspace",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "Workspace",
    scope: [],
  },
};
