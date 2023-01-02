import { Table } from '@mantine/core';

export function CommonTable() {
  const ths = (
    <tr>
      <th>Element position</th>
      <th>Element name</th>
      <th>Symbol</th>
      <th>Atomic mass</th>
    </tr>
  );

  const rows = [1,2,3,4].map((element, inx) => (
    <tr key={inx}>
      <td>{inx}</td>
      <td>{inx}</td>
      <td>{inx}</td>
      <td>{inx}</td>
    </tr>
  ));

  return (
    <Table captionSide="bottom">
      <caption>Some elements from periodic table</caption>
      <thead>{ths}</thead>
      <tbody>{rows}</tbody>
      <tfoot>{ths}</tfoot>
    </Table>
  );
}