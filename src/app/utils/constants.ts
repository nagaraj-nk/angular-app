export const BASE_URL = 'http://localhost:4200/';
export const APP_V1_BASE_URL = BASE_URL + 'api/v1/';
export const JSON_HEADER = 'application/json';

export const LOGIN = BASE_URL + 'auth/login';

export const REGISTER = APP_V1_BASE_URL + 'auth/register';
export const EMPLOYEES = 'employee';
export const EMPLOYEE_BY_ID = APP_V1_BASE_URL + EMPLOYEES;
export const EMPLOYEES_BY_PAGE = APP_V1_BASE_URL + EMPLOYEES + '/page';
export const EMPLOYEES_BY_ROLE = APP_V1_BASE_URL + EMPLOYEES + '/role';
export const DEPARTMENTS = APP_V1_BASE_URL + 'departments';
export const ASSETS = APP_V1_BASE_URL + 'assets';
export const PROJECTS = APP_V1_BASE_URL + 'projects';
export const CERTIFICATES = APP_V1_BASE_URL + 'certificates';
