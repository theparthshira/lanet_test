import React, { useState } from "react";

function Students() {
    const [studentTable, setStudentTable] = useState([]);
    const [enrollment, setEnrollment] = useState("");
    const [name, setName] = useState("");
    const [department, setDepartment] = useState("Computer");
    const [fees, setFees] = useState("Yes");

    function createStudent() {
        let tmpTable = [...studentTable];

        tmpTable.push({
            enrollment: enrollment,
            name: name,
            department: department,
            fees: fees,
        });

        // console.log(tmpTable);
        setStudentTable((prev) => (prev = tmpTable));
    }

    function deleteStudent(event, key) {
        let toFilter = key.enrollment;
        let tmpTable = [];

        for (let i = 0; i < studentTable.length; i++) {
            if (studentTable[i].enrollment !== toFilter) {
                tmpTable.push(studentTable[i]);
            }
        }

        setStudentTable(tmpTable);
        // console.log(key.enrollment);
    }

    return (
        <div className="Students-main">
            <label>
                Enrollment No.:
                <input
                    type="text"
                    onChange={(event) => {
                        setEnrollment(event.target.value);
                    }}
                />
            </label>
            <label>
                Name:
                <input
                    type="text"
                    onChange={(event) => {
                        setName(event.target.value);
                    }}
                />
            </label>
            <label>
                Department:
                <select
                    onChange={(event) => {
                        setDepartment(event.target.value);
                    }}
                >
                    <option>Computer</option>
                    <option>EC</option>
                    <option>IT</option>
                </select>
            </label>
            <label>
                Fees Status:
                <select
                    onChange={(event) => {
                        setFees(event.target.value);
                    }}
                >
                    <option>Yes</option>
                    <option>No</option>
                </select>
            </label>
            <button onClick={createStudent}>Create</button>

            <table>
                <tr>
                    <th>Enrollment No.</th>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Fees Status</th>
                    <th>Delete</th>
                </tr>
                {studentTable.map((key, value) => (
                    // console.log(key);

                    <tr key={value}>
                        <td>{key.enrollment}</td>
                        <td>{key.name}</td>
                        <td>{key.department}</td>
                        <td>{key.fees}</td>
                        <td>
                            <button
                                key={key}
                                onClick={(event) => deleteStudent(event, key)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    );
}

export default Students;
