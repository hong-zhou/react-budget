import { Form } from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";

function NewEntryForm() {
  return (
    <div>
      <Form unstackable>
        <Form.Group>
          <Form.Input
            icon="tag"
            width={12}
            label="Description"
            placeholder="New shinny thing"
          />

          <Form.Input width={4} label="Value" placeholder="100" icon="dollar" />
        </Form.Group>
      </Form>
      <ButtonSaveOrCancel />
    </div>
  );
}

export default NewEntryForm;
