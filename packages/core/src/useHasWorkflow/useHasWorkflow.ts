import { odeServices, IUserInfo } from "ode-ts-client";

import { useUser } from "../useUser";

export default function useHasWorkflow() {
  const { user } = useUser();
  const workflows: Record<string, Record<string, boolean>> = {
    conversation: {
      view: odeServices.session().hasWorkflow({
        workflowName:
          "org.entcore.conversation.controllers.ConversationController|view",
        user: user as IUserInfo,
      }),
    },
    community: {
      view: odeServices.session().hasWorkflow({
        workflowName:
          "net.atos.entng.community.controllers.CommunityController|view",
        user: user as IUserInfo,
      }),
    },
    search: {
      view: odeServices.session().hasWorkflow({
        workflowName:
          "fr.openent.searchengine.controllers.SearchEngineController|view",
        user: user as IUserInfo,
      }),
    },
    zimbra: {
      view: odeServices.session().hasWorkflow({
        workflowName: "fr.openent.zimbra.controllers.ZimbraController|view",
        user: user as IUserInfo,
      }),
      preauth: odeServices.session().hasWorkflow({
        workflowName: "fr.openent.zimbra.controllers.ZimbraController|preauth",
        user: user as IUserInfo,
      }),
    },
  };

  return { workflows };
}
