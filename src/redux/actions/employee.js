export const GET_EMPLOYEES = 'GET_EMPLOYEES';
export const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE';

import employees from '../../data/employees';

export const getEmployees = () => {
  return dispatch => {
    dispatch({type: GET_EMPLOYEES, employees});
  };
};

export const deleteEmployee = (employees, index) => {
  return dispatch => {
    const employeesClone = [...employees];
    employeesClone.splice(index, 1);
    dispatch({type: DELETE_EMPLOYEE, employees});
  };
};
