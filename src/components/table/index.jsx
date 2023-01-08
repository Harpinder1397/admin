import { Table } from '@mantine/core';

export default function CommonTable(props) {
const { column, rows  } = props;
  
  return (
    <Table striped highlightOnHover withBorder withColumnBorders>
      <thead>{
        <tr>
          {column.map((element) => (
            <th>{element}</th>
          ))}
          </tr>
      }</thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}