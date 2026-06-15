const API_URL = "http://localhost:9090/employees";


// ADD EMPLOYEE

function addEmployee() {

    const employee = {

        name:
        document.getElementById("name").value,

        department:
        document.getElementById("department").value,

        salary:
        document.getElementById("salary").value,

        designation:
        document.getElementById("designation").value
    };

    fetch(API_URL, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(employee)

    })

    .then(response => response.json())

    .then(data => {

        alert("Employee Added Successfully 🚀");

        getEmployees();

        clearForm();

    })

    .catch(error => {

        console.log(error);

        alert("Error Adding Employee");

    });

}



// GET EMPLOYEES

function getEmployees() {

    fetch(API_URL)

    .then(response => response.json())

    .then(data => {

        displayEmployees(data);

    });

}



// DISPLAY EMPLOYEES

function displayEmployees(employees) {

    const tableBody =
    document.getElementById("employeeTable");

    tableBody.innerHTML = "";

    employees.forEach(emp => {

        tableBody.innerHTML += `

        <tr>

            <td>${emp.id}</td>

            <td>${emp.name}</td>

            <td>${emp.department}</td>

            <td>${emp.salary}</td>

            <td>${emp.designation}</td>

        </tr>

        `;
    });

}



// CLEAR FORM

function clearForm() {

    document.getElementById("name").value = "";

    document.getElementById("department").value = "";

    document.getElementById("salary").value = "";

    document.getElementById("designation").value = "";

}



// LOAD EMPLOYEES

window.onload = function () {

    getEmployees();

};