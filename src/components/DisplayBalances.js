import { Grid, Segment } from "semantic-ui-react";
import DisplayBalance from "./DisplayBalance";

function DisplayBalances(params) {
  return (
    <Segment textAlign="center">
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <DisplayBalance title="Income" value="12354.11" color="green" />
          </Grid.Column>
          <Grid.Column>
            <DisplayBalance title="Expense" value="666.66" color="red" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default DisplayBalances;
