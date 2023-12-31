// ApiEndpoints.js
import { ApiHandlersComponent, ApiHandlersInstance } from './ApiHandlers';

const Quikify = {
  create: (path, data, type) => {
    return ApiHandlersInstance.runApi({ path, data, type, method: 'create' });
  },
  get: (path, type) => {
    return ApiHandlersInstance.runApi({ path, type, method: 'get' });
  },
  update: (path, data, type) => {
    return ApiHandlersInstance.runApi({ path, data, type, method: 'update' });
  },
  delete: (path, type) => {
    return ApiHandlersInstance.runApi({ path, type, method: 'delete' });
  },
  setGlobalDispatch: (dispatch) => ApiHandlersInstance.setGlobalDispatch(dispatch),
};

export { Quikify, ApiHandlersComponent };
