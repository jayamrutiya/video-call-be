import { Container } from "inversify";
import { buildProviderModule } from "inversify-binding-decorators";
import { IDatabaseService } from "../interfaces/IDatabaseService";
import { IEmployeeRepository } from "../interfaces/IEmployeeRepository";
import { IEmployeeService } from "../interfaces/IEmployeeService";
import { ILoggerService } from "../interfaces/ILoggerService";
import { ITestRepository } from "../interfaces/ITestRepository";
import { ITestService } from "../interfaces/ITestService";
import { EmployeeRepository } from "../repositories/EmployeeRepository";
import { TestRepository } from "../repositories/TestRepository";
import { EmployeeService } from "../services/EmployeeService";
import { TestService } from "../services/TestService";
import { DatabaseService } from "./db";
import { LoggerService } from "./logger";
import { TYPES } from "./types";

const iocContainer = new Container();

// make inversify aware of inversify-binding-decorat    ors
iocContainer.load(buildProviderModule());

// services
iocContainer.bind<IDatabaseService>(TYPES.DatabaseService).to(DatabaseService);
iocContainer.bind<ILoggerService>(TYPES.LoggerService).to(LoggerService);
iocContainer.bind<ITestService>(TYPES.TestService).to(TestService);
iocContainer.bind<IEmployeeService>(TYPES.EmployeeService).to(EmployeeService);

// Repository
iocContainer.bind<ITestRepository>(TYPES.TestRepository).to(TestRepository);
iocContainer
  .bind<IEmployeeRepository>(TYPES.EmployeeRepository)
  .to(EmployeeRepository);

export { iocContainer };
