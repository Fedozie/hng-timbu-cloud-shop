import React from 'react';

interface Column {
  Header: string;
  accessor: string;
  Cell?: (row: any) => React.ReactNode; // Optional custom cell renderer
}

interface TableProps {
  data: Array<Record<string, any>>;
  columns: Column[];
}

const Table: React.FC<TableProps> = ({ data, columns }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-transparent">
        <tr>
          {columns.map((column) => (
            <th
              key={column.accessor}
              className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider"
            >
              {column.Header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-transparent divide-y divide-gray-200">
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column) => (
              <td
                key={column.accessor}
                className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
              >
                {column.Cell ? column.Cell(row) : row[column.accessor]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;