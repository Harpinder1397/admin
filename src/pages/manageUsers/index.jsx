import { Button, Col, Flex, Grid, Group, TextInput } from "@mantine/core";
import { useState } from "react";
import { Edit, Trash } from "tabler-icons-react";
import CommonTable from "../../components/table";
import CommonModal from "../../components/modal";

const column = ["State", "City", "Action"];

export default function ManageUsers() {
  const [opened, setOpened] = useState(false);
  const [value, setValue] = useState("");
  console.log(value, "valuevalue");
  const handleCancel = () => {
    setOpened(false);
  };

  const handleOk = () => {
    setOpened(false);
  };

  const elements = [
    { position: 2, mass: 12.011,  name: 'Carbon' },
    { position: 7, mass: 14.007,  name: 'Nitrogen' },
    { position: 39, mass: 88.906,  name: 'Yttrium' },
    { position: 56, mass: 137.33, name: 'Barium' },
    { position: 58, mass: 140.12, name: 'Cerium' },
  ];

  const rows = elements && elements.map((element) => (
    <tr key={element.name}>
      <td>{element.position}</td>
      <td>{element.name}</td>
      <td>
          <Flex
            gap={8}
            justify="flex-start"
            align="center"
            direction="row"
            wrap="wrap"
          >
            <Edit
              size={18}
              strokeWidth={2}
              color={'black'}
            //   onClick={handleEdit}
            />
            <Trash
              size={18}
              strokeWidth={2}
              color={'black'}
            //   onClick={handleDelete}
            />
        </Flex>   
      </td>
    </tr>
  ));

  return (
    <>
      <Grid>
        <Col>
          <Group position="left">
            <Button onClick={() => setOpened(true)}>Add</Button>
          </Group>
          <CommonModal
            title={"Add State"}
            opened={opened}
            setOpened={setOpened}
            handleCancel={handleCancel}
            handleOk={handleOk}
            content={
              <Flex gap="sm" direction="column">
                <TextInput
                  value={value}
                  onChange={(event) => setValue(event.currentTarget.value)}
                  placeholder=""
                  label="State"
                  // error="m"
                  withAsterisk
                />
                <TextInput
                  value={value}
                  onChange={(event) => setValue(event.currentTarget.value)}
                  placeholder=""
                  label="City"
                  // error="m"
                  withAsterisk
                />
              </Flex>
            }
          />
        </Col>
        <Col>
          <CommonTable column={column} rows={rows} />
        </Col>
      </Grid>
    </>
  );
}
