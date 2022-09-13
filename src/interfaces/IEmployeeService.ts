import {
  CreateEmployee,
  GetEmployeeService,
  UpdateEmployee,
} from "../types/Employee";

export interface IEmployeeService {
  getEmployee(id: number): Promise<GetEmployeeService>;

  createEmployee(employee: CreateEmployee): Promise<GetEmployeeService>;

  updateEmployee(
    id: number,
    employee: UpdateEmployee
  ): Promise<GetEmployeeService>;
}
