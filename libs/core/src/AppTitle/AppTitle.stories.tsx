import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AppTitle } from "../index";

import * as hooks from "@ode-react-ui/hooks";
import { useIconContext } from "../IconContext";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Core/AppTitle",
  component: AppTitle,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof AppTitle>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AppTitle> = (args) => (
  <AppTitle {...args} />
);

export const ApplicationExample = () => {
  const { getIconCode } = hooks.useOdeIcons();

  // For example
  const mockedApp = {
    address: "/blog",
    icon: "blog-large",
    name: "Blog",
    scope: [],
    display: false,
    displayName: "",
    isExternal: false,
  };

  const { name } = mockedApp;

  /**
   * We pass the name of the app
   * We get the app code for styling purpose
   * We use a custom hook to get an app icon
   */
  return (
    <div>
      <AppTitle
        name={name}
        code={getIconCode(mockedApp)}
        icon={useIconContext(mockedApp)}
      />
    </div>
  );
};

export const ApplicationExampleWithImage = () => {
  const { getIconCode } = hooks.useOdeIcons();

  // For example
  const mockedApp = {
    address: "/form",
    icon: "https://ent.l-educdenormandie.fr/formulaire/public/img/logo.svg",
    name: "Formulaire",
    scope: [],
    display: false,
    displayName: "",
    isExternal: false,
  };

  const { name } = mockedApp;

  /**
   * We pass the name of the app
   * We get the app code for styling purpose
   * We use a custom hook to get an app icon
   */
  return (
    <div>
      <AppTitle
        name={name}
        code={getIconCode(mockedApp)}
        icon={useIconContext(mockedApp)}
      />
    </div>
  );
};
ApplicationExampleWithImage.parameters = {
  docs: {
    description: {
      story: "When an url is added instead of an app code, we return an image",
    },
  },
};

export const ApplicationEmpty = Template.bind({});
ApplicationEmpty.parameters = {
  docs: {
    description: {
      story:
        "If no application is found or an error occured, we should load en empty component",
    },
  },
};

export const ApplicationAccount = Template.bind({});
ApplicationAccount.args = {
  code: "account",
  name: "Mon Compte",
  icon: useIconContext({
    icon: "account",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "",
    scope: [],
  }),
};

export const ApplicationActualites = Template.bind({});
ApplicationActualites.args = {
  code: "actualites",
  name: "Actualites",
  icon: useIconContext({
    icon: "actualites",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "",
    scope: [],
  }),
};

export const ApplicationAdmin = Template.bind({});
ApplicationAdmin.args = {
  code: "admin",
  name: "Console d'administration",
  icon: useIconContext({
    icon: "admin",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "",
    scope: [],
  }),
};

export const ApplicationAdminPortal = Template.bind({});
ApplicationAdminPortal.args = {
  code: "admin",
  name: "Admin",
  icon: useIconContext({
    icon: "admin-portal",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "",
    scope: [],
  }),
};

export const ApplicationArchive = Template.bind({});
ApplicationArchive.args = {
  code: "archive",
  name: "Archive",
  icon: useIconContext({
    icon: "archive",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "",
    scope: [],
  }),
};

export const ApplicationBlog = Template.bind({});
ApplicationBlog.args = {
  code: "blog",
  name: "Blog",
  icon: useIconContext({
    icon: "blog",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "",
    scope: [],
  }),
};

export const ApplicationCahierDeTexte = Template.bind({});
ApplicationCahierDeTexte.args = {
  code: "cahier-de-texte",
  name: "Cahier de textes",
  icon: useIconContext({
    icon: "cahier-de-texte",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "",
    scope: [],
  }),
};

export const ApplicationCahierTexte = Template.bind({});
ApplicationCahierTexte.args = {
  code: "cahier-textes",
  name: "Cahier textes",
  icon: useIconContext({
    icon: "cahier-textes",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "",
    scope: [],
  }),
};

export const ApplicationCalendar = Template.bind({});
ApplicationCalendar.args = {
  code: "calendar",
  name: "Calendar",
  icon: useIconContext({
    icon: "calendar",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "",
    scope: [],
  }),
};

export const ApplicationCns = Template.bind({});
ApplicationCns.args = {
  code: "cns",
  name: "CNS",
  icon: useIconContext({
    icon: "cns",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "",
    scope: [],
  }),
};

export const ApplicationCanalNumerique = Template.bind({});
ApplicationCanalNumerique.args = {
  code: "canal-numerique",
  name: "Canal Numérique",
  icon: useIconContext({
    icon: "canal-numerique",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "",
    scope: [],
  }),
};

export const ApplicationCollaborativeEditor = Template.bind({});
ApplicationCollaborativeEditor.args = {
  code: "pad",
  name: "Pad",
  icon: useIconContext({
    icon: "pad",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "",
    scope: [],
  }),
};

export const ApplicationCollaborativeWall = Template.bind({});
ApplicationCollaborativeWall.args = {
  code: "collaborative-wall",
  name: "Mur Collaboratif",
  icon: useIconContext({
    icon: "collaborative-wall",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "",
    scope: [],
  }),
};

export const ApplicationCommunity = Template.bind({});
ApplicationCommunity.args = {
  code: "community",
  name: "Communautés",
  icon: useIconContext({
    icon: "community",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "",
    scope: [],
  }),
};

export const ApplicationCompetences = Template.bind({});
ApplicationCompetences.args = {
  code: "competences",
  name: "Compétences",
  icon: useIconContext({
    icon: "competences",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "",
    scope: [],
  }),
};

export const ApplicationConversation = Template.bind({});
ApplicationConversation.args = {
  code: "conversation",
  name: "Messagerie",
  icon: useIconContext({
    icon: "conversation",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "",
    scope: [],
  }),
};

export const ApplicationDirectory = Template.bind({});
ApplicationDirectory.args = {
  code: "directory",
  name: "Directory",
  icon: useIconContext({
    icon: "directory",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "",
    scope: [],
  }),
};

export const ApplicationExercizer = Template.bind({});
ApplicationExercizer.args = {
  code: "exercizer",
  name: "Exercizer",
  icon: useIconContext({
    icon: "exercizer",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "",
    scope: [],
  }),
};

export const ApplicationFormulaire = Template.bind({});
ApplicationFormulaire.args = {
  code: "forms",
  name: "Formulaire",
  icon: useIconContext({
    icon: "forms",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "",
    scope: [],
  }),
};

export const ApplicationForum = Template.bind({});
ApplicationForum.args = {
  code: "forum",
  name: "Forum",
  icon: useIconContext({
    icon: "forum",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "",
    scope: [],
  }),
};

export const ApplicationLibrary = Template.bind({});
ApplicationLibrary.args = {
  code: "library",
  name: "Library",
  icon: useIconContext({
    icon: "library",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "",
    scope: [],
  }),
};

export const ApplicationMindmap = Template.bind({});
ApplicationMindmap.args = {
  code: "mindmap",
  name: "Carte mentale",
  icon: useIconContext({
    icon: "mindmap",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "",
    scope: [],
  }),
};

export const ApplicationNotes = Template.bind({});
ApplicationNotes.args = {
  code: "notes",
  name: "Notes",
  icon: useIconContext({
    icon: "notes",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "",
    scope: [],
  }),
};

export const ApplicationPoll = Template.bind({});
ApplicationPoll.args = {
  code: "poll",
  name: "Sondage",
  icon: useIconContext({
    icon: "poll",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "",
    scope: [],
  }),
};

export const ApplicationPresences = Template.bind({});
ApplicationPresences.args = {
  code: "presences",
  name: "Présences",
  icon: useIconContext({
    icon: "presences",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "",
    scope: [],
  }),
};

export const ApplicationQwant = Template.bind({});
ApplicationQwant.args = {
  code: "poll",
  name: "Sondage",
  icon: useIconContext({
    icon: "poll",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "",
    scope: [],
  }),
};

export const ApplicationRack = Template.bind({});
ApplicationRack.args = {
  code: "rack",
  name: "Casier",
  icon: useIconContext({
    icon: "rack",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "",
    scope: [],
  }),
};

export const ApplicationRbs = Template.bind({});
ApplicationRbs.args = {
  code: "rbs",
  name: "Réservation de ressources",
  icon: useIconContext({
    icon: "rbs",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "",
    scope: [],
  }),
};

export const ApplicationSchoolbook = Template.bind({});
ApplicationSchoolbook.args = {
  code: "schoolbook",
  name: "Carnet de liaison",
  icon: useIconContext({
    icon: "schoolbook",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "",
    scope: [],
  }),
};

export const ApplicationScrapbook = Template.bind({});
ApplicationScrapbook.args = {
  code: "scrapbook",
  name: "Scrapbook",
  icon: useIconContext({
    icon: "scrapbook",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "",
    scope: [],
  }),
};

export const ApplicationSettingsClass = Template.bind({});
ApplicationSettingsClass.args = {
  code: "settings-class",
  name: "Paramétrage de la classe",
  icon: useIconContext({
    icon: "settings-class",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "",
    scope: [],
  }),
};

export const ApplicationSharebigfiles = Template.bind({});
ApplicationSharebigfiles.args = {
  code: "sharebigfiles",
  name: "Sharebigfiles",
  icon: useIconContext({
    icon: "sharebigfiles",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "",
    scope: [],
  }),
};

export const ApplicationStatistics = Template.bind({});
ApplicationStatistics.args = {
  code: "statistics",
  name: "Statistics",
  icon: useIconContext({
    icon: "statistics",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "",
    scope: [],
  }),
};

export const ApplicationStats = Template.bind({});
ApplicationStats.args = {
  code: "stats",
  name: "Stats",
  icon: useIconContext({
    icon: "stats",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "",
    scope: [],
  }),
};

export const ApplicationSupport = Template.bind({});
ApplicationSupport.args = {
  code: "support",
  name: "Support",
  icon: useIconContext({
    icon: "support",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "",
    scope: [],
  }),
};

export const ApplicationTimeline = Template.bind({});
ApplicationTimeline.args = {
  code: "timeline",
  name: "Signalements",
  icon: useIconContext({
    icon: "timeline",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "",
    scope: [],
  }),
};

export const ApplicationTimelineGenerator = Template.bind({});
ApplicationTimelineGenerator.args = {
  code: "timelinegenerator",
  name: "Frise Chronologique",
  icon: useIconContext({
    icon: "timelinegenerator",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "",
    scope: [],
  }),
};

export const ApplicationUserbook = Template.bind({});
ApplicationUserbook.args = {
  code: "userbook",
  name: "Userbook",
  icon: useIconContext({
    icon: "userbook",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "",
    scope: [],
  }),
};

export const ApplicationVideo = Template.bind({});
ApplicationVideo.args = {
  code: "video",
  name: "Video",
  icon: useIconContext({
    icon: "video",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "",
    scope: [],
  }),
};

export const ApplicationVisioconf = Template.bind({});
ApplicationVisioconf.args = {
  code: "visioconf",
  name: "Visioconf",
  icon: useIconContext({
    icon: "visioconf",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "",
    scope: [],
  }),
};

export const ApplicationWebWebsite = Template.bind({});
ApplicationWebWebsite.args = {
  code: "website",
  name: "Website",
  icon: useIconContext({
    icon: "website",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "",
    scope: [],
  }),
};

export const ApplicationWiki = Template.bind({});
ApplicationWiki.args = {
  code: "wiki",
  name: "Wiki",
  icon: useIconContext({
    icon: "wiki",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "",
    scope: [],
  }),
};

export const ApplicationWorkspace = Template.bind({});
ApplicationWorkspace.args = {
  code: "workspace",
  name: "Workspace",
  icon: useIconContext({
    icon: "workspace",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "",
    scope: [],
  }),
};
