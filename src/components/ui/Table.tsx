interface TableProps {
  columns: string[];
  data: Record<string, any>[];
  striped?: boolean;
}

export default function Table({ columns, data, striped = false }: TableProps) {
  return (
    <div className="overflow-x-auto rounded-lg shadow-md">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-800 text-white">
          <tr>
            {columns.map((column, index) => (
              <th 
                key={index} 
                className="py-3 px-4 text-left text-sm font-semibold uppercase tracking-wider"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((row, rowIndex) => (
            <tr 
              key={rowIndex}
              className={striped && rowIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
            >
              {columns.map((_, colIndex) => {
                const key = Object.keys(row)[colIndex];
                return (
                  <td 
                    key={colIndex} 
                    className="py-3 px-4 text-sm text-gray-700"
                  >
                    {row[key]}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}