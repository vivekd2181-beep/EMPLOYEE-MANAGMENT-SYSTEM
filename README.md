# Employee Management System

A full-stack Employee Management System developed using Java, Spring Boot, Hibernate, MySQL, and Thymeleaf. This application helps organizations efficiently manage employee records, including adding, updating, viewing, and deleting employee information through a user-friendly interface.

---

## 🚀 Features

- Employee Registration
- View Employee Details
- Update Employee Information
- Delete Employee Records
- Search Employees
- Responsive User Interface
- Form Validation
- Database Integration with MySQL
- MVC Architecture
- RESTful Backend APIs

---

## 🛠️ Tech Stack

### Backend
- Java 17
- Spring Boot
- Spring MVC
- Spring Data JPA
- Hibernate

### Database
- MySQL

### Frontend
- HTML5
- CSS3
- Bootstrap
- Thymeleaf

### Tools
- Maven
- Git
- GitHub
- IntelliJ IDEA / Eclipse

---

## 📂 Project Structure

```
Employee-Management-System
│
├── src/main/java
│   ├── controller
│   ├── service
│   ├── repository
│   ├── entity
│   └── EmployeeManagementApplication
│
├── src/main/resources
│   ├── templates
│   ├── static
│   └── application.properties
│
└── pom.xml
```

---

## 📋 Functionalities

### Admin Operations

- Add New Employee
- Edit Employee Details
- Delete Employee Records
- View Employee List
- Search Employees by Name or ID

### Employee Information

- Employee ID
- Name
- Email
- Department
- Designation
- Salary
- Contact Details

---

## ⚙️ Installation & Setup

### Prerequisites

- Java 17+
- MySQL Server
- Maven
- IDE (IntelliJ IDEA/Eclipse)

### Clone Repository

```bash
git clone https://github.com/yourusername/Employee-Management-System.git
```

### Navigate to Project

```bash
cd Employee-Management-System
```

### Configure Database

Update `application.properties`

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/employee_db
spring.datasource.username=root
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

### Run Application

```bash
mvn spring-boot:run
```

Application will start at:

```bash
http://localhost:8080
```

---

## 📸 Screenshots

### Dashboard

<img width="1920" height="1030" alt="EmployeeSphere - Google Chrome 08-05-2026 11_10_16" src="https://github.com/user-attachments/assets/f142ea2b-e671-40a5-bbe7-d27156bf7c14" />


### Employee List
<img width="1920" height="1030" alt="Firefox 18-05-2026 13_54_28" src="https://github.com/user-attachments/assets/cf94c3d4-9f18-45c7-8160-04fc18b6ac5d" />
![Uploading EmployeeSphere - Google Chrome 08-05-2026 11_15_25.png…]()


### Add Employee
)<img width="1920" height="1030" alt="EmployeeSphere - Google Chrome 08-05-2026 11_15_25" src="https://github.com/user-attachments/assets/8600dc0b-9029-48f8-9475-8c19004057ca" />![Uploading Firefox 18-05-2026 13_54_28.png…]()


---

## 📊 Database Schema

| Field | Type |
|---------|---------|
| id | Long |
| name | String |
| email | String |
| department | String |
| designation | String |
| salary | Double |

---

## 🎯 Learning Outcomes

- Implemented CRUD Operations using Spring Boot.
- Applied MVC Architecture.
- Integrated Hibernate ORM with MySQL.
- Developed RESTful APIs.
- Improved backend development skills using Java ecosystem.

---

## 🔮 Future Enhancements

- JWT Authentication
- Role-Based Access Control
- Employee Attendance Module
- Payroll Management
- Leave Management System
- REST API Documentation using Swagger

---

## 👨‍💻 Author

**Vivek D**

- GitHub: https://github.com/vivekd2181-beep


---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.
