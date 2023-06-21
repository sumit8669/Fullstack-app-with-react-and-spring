import axios from 'axios'

const EMPLOYEE_API_BASE_URL = "http://localhost:9191/api/v1/employees";

class EmployeeService {

    getEmployee() {
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

}

export default new EmployeeService()