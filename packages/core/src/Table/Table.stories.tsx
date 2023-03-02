import Table from "./Table";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Checkbox } from "../Form";
import { Users } from "@ode-react-ui/icons";

interface IRow {
  id: string;
  name: string;
  createdAt: number;
  creatorId: string;
  creatorName: string;
  modifiedAt: number;
  modifierId: string;
  modifierName: string;
  thumbnail: string;
  trashed: boolean;
  shared: boolean;
  numberOfShares: number;
  public: boolean;
  currentRole: string;
}

const sampleData: IRow[] = [
  {
    id: "1",
    name: "The form user",
    createdAt: 1677163550,
    creatorId: "1",
    creatorName: "Guillaume Tell",
    modifiedAt: 1677163550,
    modifierId: "1",
    modifierName: "Guillaume Tell",
    thumbnail:
      "https://media.istockphoto.com/id/1322277517/fr/photo/herbe-sauvage-dans-les-montagnes-au-coucher-du-soleil.jpg?s=612x612&w=0&k=20&c=tQ19uZQLlIFy8J6QWMyOL6lPt3pdSHBSDFHoXr1K_g0=",
    trashed: false,
    shared: true,
    numberOfShares: 14,
    public: true,
    currentRole: "Gestionnaire",
  },
  {
    id: "2",
    name: "Le blog des éco-délégués",
    createdAt: 1677163550,
    creatorId: "1",
    creatorName: "Guillaume Tell",
    modifiedAt: 1677163550,
    modifierId: "1",
    modifierName: "Guillaume Tell",
    thumbnail:
      "https://media.istockphoto.com/id/1322277517/fr/photo/herbe-sauvage-dans-les-montagnes-au-coucher-du-soleil.jpg?s=612x612&w=0&k=20&c=tQ19uZQLlIFy8J6QWMyOL6lPt3pdSHBSDFHoXr1K_g0=",
    trashed: false,
    shared: true,
    numberOfShares: 12,
    public: true,
    currentRole: "Gestionnaire",
  },
];

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Table",
  component: Table,
  parameters: {
    docs: {
      description: {
        component: "Table.",
      },
    },
  },
  argTypes: {},
  args: {},
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Table>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Table> = (args: any) => {
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>
              <Checkbox
                onChange={(e) => {
                  alert(e.target.checked);
                }}
              />
            </th>
            <th>Nom de la ressource</th>
            <th>Création</th>
            <th>Auteur</th>
            <th>Partage</th>
            <th>Dernière modif</th>
            <th>Rôle</th>
          </tr>
        </thead>

        <tbody>
          {sampleData.map((item: IRow) => (
            <tr>
              <td>
                <Checkbox value={item.id} />
              </td>
              <td>{item.name}</td>
              <td>{new Date(item.createdAt * 1000).toLocaleDateString()}</td>
              <td>{item.creatorName}</td>
              <td>
                {item.shared && (
                  <div className="d-inline-flex align-items-center gap-4">
                    <Users width="16" height="16" /> {item.numberOfShares}
                  </div>
                )}
              </td>
              <td>Il y a 2 heures</td>
              <td>{item.currentRole}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export const Base = Template.bind({});
