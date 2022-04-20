import { useEffect, useState } from "react";

export const Employee = () => {
  const [data, setdata] = useState([]);

  console.log(data);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      let data = await fetch(`http://localhost:8081/employee`);
      let res = await data.json();
      setdata(res);
    } catch (error) {
      console.log("Etto: ",error);
    }
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Department</th>
            <th>Salary</th>
            <th>marital state</th>
          </tr>
        </thead>
        <tbody>
        {/* Address": "",
    "Department": "",
    "Salary": 0,
    "marital state": "" */}
          {data.map((e) => (
            <tr>
              <td>{e.Name}</td>
              <td>{e.Age}</td>
              <td>{e.Address}</td>
              <td>{e.Department}</td>
              <td>{e.Salary}</td>
              <td>{e.State}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
