import { ComponentMeta } from "@storybook/react";
import Grid, { Column } from "./Grid";

export default {
  title: "Layouts/Grid",
  component: Grid,
  subcomponents: { Column },
} as ComponentMeta<typeof Grid>;

export const Base = () => {
  return (
    <Grid>
      <Grid.Col
        sm="1"
        style={{
          backgroundColor: "#ebebeb",
          padding: ".8rem",
          minHeight: "10rem",
        }}
      >
        1
      </Grid.Col>
      <Grid.Col
        sm="1"
        style={{
          backgroundColor: "#ebebeb",
          padding: ".8rem",
          minHeight: "10rem",
        }}
      >
        1
      </Grid.Col>
      <Grid.Col
        sm="1"
        style={{
          backgroundColor: "#ebebeb",
          padding: ".8rem",
          minHeight: "10rem",
        }}
      >
        1
      </Grid.Col>
      <Grid.Col
        sm="1"
        style={{
          backgroundColor: "#ebebeb",
          padding: ".8rem",
          minHeight: "10rem",
        }}
      >
        1
      </Grid.Col>
      <Grid.Col
        sm="1"
        style={{
          backgroundColor: "#ebebeb",
          padding: ".8rem",
          minHeight: "10rem",
        }}
      >
        1
      </Grid.Col>
      <Grid.Col
        sm="1"
        style={{
          backgroundColor: "#ebebeb",
          padding: ".8rem",
          minHeight: "10rem",
        }}
      >
        1
      </Grid.Col>
      <Grid.Col
        sm="1"
        style={{
          backgroundColor: "#ebebeb",
          padding: ".8rem",
          minHeight: "10rem",
        }}
      >
        1
      </Grid.Col>
      <Grid.Col
        sm="1"
        style={{
          backgroundColor: "#ebebeb",
          padding: ".8rem",
          minHeight: "10rem",
        }}
      >
        1
      </Grid.Col>
      <Grid.Col
        sm="1"
        style={{
          backgroundColor: "#ebebeb",
          padding: ".8rem",
          minHeight: "10rem",
        }}
      >
        1
      </Grid.Col>
      <Grid.Col
        sm="1"
        style={{
          backgroundColor: "#ebebeb",
          padding: ".8rem",
          minHeight: "10rem",
        }}
      >
        1
      </Grid.Col>
      <Grid.Col
        sm="1"
        style={{
          backgroundColor: "#ebebeb",
          padding: ".8rem",
          minHeight: "10rem",
        }}
      >
        1
      </Grid.Col>
      <Grid.Col
        sm="1"
        style={{
          backgroundColor: "#ebebeb",
          padding: ".8rem",
          minHeight: "10rem",
        }}
      >
        1
      </Grid.Col>
    </Grid>
  );
};

export const Responsive = () => {
  return (
    <Grid>
      <Grid.Col sm="4" style={{ backgroundColor: "#ebebeb", padding: ".8rem" }}>
        <p>Size of 4 columns for each breakpoint (small, medium, large)</p>
      </Grid.Col>
      <Grid.Col
        sm="4"
        md="6"
        lg="8"
        style={{ backgroundColor: "#ebebeb", padding: ".8rem" }}
      >
        <p>Size of 4 columns on Mobile, 6 on Tablet, 8 on Desktop</p>
      </Grid.Col>
    </Grid>
  );
};
Responsive.parameters = {
  docs: {
    description: {
      story:
        "We can reassign the size of a column with `sm`, `md`, `lg` props.",
    },
  },
};
