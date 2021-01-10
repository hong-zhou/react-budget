import { Button, Container, Form, Grid, Header, Icon, Segment, Statistic } from 'semantic-ui-react';
import './App.css';

function App() {
  return (
    <Container>
      <Header as="h1">
        Budget
      </Header>
      <Statistic size="small">
        <Statistic.Label>Your Balance:</Statistic.Label>
        <Statistic.Value>2,550.53</Statistic.Value>
      </Statistic>
      <Segment textAlign="center">
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Statistic size="tiny" color="green">
                <Statistic.Label style={{textAlign:"left"}}>
                  Incoming:
                </Statistic.Label>
                <Statistic.Value>1,045.66</Statistic.Value>
              </Statistic>
            </Grid.Column>
            <Grid.Column>
            <Statistic size="tiny" color="red">
                <Statistic.Label style={{textAlign:"left"}}>
                  Expense:
                </Statistic.Label>
                <Statistic.Value>666.00</Statistic.Value>
              </Statistic>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Header as="h3">History</Header>
      <Segment color="red">
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">Somthing</Grid.Column>
            <Grid.Column width={3} textAlign="right">$10.00</Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered/>
              <Icon name="trash" bordered/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment color="green">
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">Somthing else</Grid.Column>
            <Grid.Column width={3} textAlign="right">$100.00</Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered/>
              <Icon name="trash" bordered/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment color="red">
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">Somthing</Grid.Column>
            <Grid.Column width={3} textAlign="right">$30.00</Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered/>
              <Icon name="trash" bordered/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Header as="h3">Add new transaction</Header>
      <Form unstackable>
        <Form.Group>
          <Form.Input 
          icon="tag" 
           width={12} 
           label="Description" 
           placeholder="New shinny thing"/>

          <Form.Input width={4} label="Value" placeholder="100" icon="dollar"/>
        </Form.Group>
      </Form>

      <Button.Group style={{marginTop:20}}>
        <Button>Cancel</Button>
        <Button.Or />
        <Button primary>OK</Button>
      </Button.Group>
    </Container>
  );
}

export default App;
