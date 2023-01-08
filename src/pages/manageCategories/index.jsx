import { Button, Col, Flex, Grid, Group, TextInput, Title } from '@mantine/core';
import { useState } from 'react';
import CommonTable from "../../components/table";
import CommonModal from '../../components/modal';

const column = ['State', 'City', 'Action']

export default function ManageCategories() {
    const [opened, setOpened] = useState(false);
    const [value, setValue] = useState('');
    console.log(value, 'valuevalue')
    const handleCancel = () => {
        setOpened(false);
    }

    const handleOk = () => {
        setOpened(false);
    }

  return (
    <>
     <Grid>
         <Col>
            <Group position="left">
                <Button onClick={() => setOpened(true)}>Add</Button>
            </Group>
            <CommonModal
                title={'Add State'}
                opened={opened}
                setOpened={setOpened}
                handleCancel={handleCancel}
                handleOk={handleOk}
                content={
                    <Flex
      gap="sm"
      direction="column"
    >
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
        <Grid grow h={739}>
          <Grid.Col
          span={3}
          sx={(theme) => ({
            borderRight: '1px solid red'
          })}
          >
          <Title size="h5" align='center'>Categories</Title>  
          </Grid.Col>
          <Grid.Col
          span={3}
          sx={(theme) => ({
            borderRight: '1px solid red'
          })}
          >
          <Title size="h5" align='center'>Sub Categories</Title>  
          </Grid.Col>
          <Grid.Col
          span={3}
          sx={(theme) => ({
            borderRight: '1px solid red'
          })}
          >
          <Title size="h5" align='center'>Tags</Title>  
          </Grid.Col>
          <Grid.Col span={3}>
          <Title size="h5" align='center'>Filters</Title>  
          <Title size="h5" align='center'>Best In</Title>  
          <Title size="h5" align='center'>Extra Talent</Title>  
          </Grid.Col>
      </Grid>
        </Col>
    </Grid>
    </>
  );
}
