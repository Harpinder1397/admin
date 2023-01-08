import { Modal, Button, Group } from '@mantine/core';

export default function CommonModal(props) {
const { title, opened, setOpened, content, handleCancel, handleOk } = props;
  return (
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={title}
        centered
      >
        {content}
        <Group position="right" mt={20}>
            <Button variant="default" onClick={handleCancel}>Cancel</Button>
            <Button onClick={handleOk}>OK</Button>
        </Group>
      </Modal>
  );
}