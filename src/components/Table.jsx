const Table = ({ columns, data, actions }) => {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow-md">
      <table className="w-full">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                className="px-6 py-4 text-left text-sm font-semibold text-gray-700"
              >
                {column.header}
              </th>
            ))}
            {actions && (
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                Actions
              </th>
            )}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length + (actions ? 1 : 0)}
                className="px-6 py-8 text-center text-gray-500"
              >
                No data available
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-50 transition-colors">
                {columns.map((column, colIndex) => (
                  <td key={colIndex} className="px-6 py-4 text-sm text-gray-700">
                    {column.render ? column.render(row) : row[column.accessor]}
                  </td>
                ))}
                {actions && (
                  <td className="px-6 py-4 text-sm">
                    <div className="flex items-center space-x-2">
                      {actions(row)}
                    </div>
                  </td>
                )}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
