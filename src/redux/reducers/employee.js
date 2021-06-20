import {DELETE_EMPLOYEE, GET_EMPLOYEES} from '../actions/employee';

const initialState = {
  employees: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_EMPLOYEES:
      return {
        ...state,
        employees: action.employees,
      };
    case DELETE_EMPLOYEE:
      return {
        ...state,
        employees: action.employees,
      };
  }
  return state;
};
