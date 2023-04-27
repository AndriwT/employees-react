export default function EmployeeTable({ employees }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <tr>
            <td>{employee.name}</td>
            <td>{employee.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
