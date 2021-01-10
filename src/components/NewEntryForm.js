import { useState } from "react";
import { Checkbox, Form, Segment } from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";

function NewEntryForm({ addEntry }) {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [isExpense, setIsExpense] = useState(true);

  return (
    <div>
      <Form unstackable>
        <Form.Group>
          <Form.Input
            icon="tag"
            width={12}
            label="Description"
            placeholder="New shinny thing"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />

          <Form.Input
            width={4}
            label="Value"
            placeholder="100"
            icon="dollar"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
        </Form.Group>
      </Form>
      <Segment compact>
        <Checkbox
          toggle
          label="is expense"
          checked={isExpense}
          onChange={() => setIsExpense((oldState) => !oldState)}
        />
      </Segment>

      <ButtonSaveOrCancel
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
      />
    </div>
  );
}

export default NewEntryForm;
