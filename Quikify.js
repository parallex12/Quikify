// ApiEndpoints.js
import { ApiHandlersComponent, ApiHandlersInstance } from './ApiHandlers';

const Quikify = {
  create: (path, data, type, config) => {
    if (typeof (data) != "object") {
      throw new Error('Data is required');
    }
    return ApiHandlersInstance.runApi({ path, data, config, type, method: 'create' });
  },
  get: (path, type) => {
    return ApiHandlersInstance.runApi({ path, type, method: 'get' });
  },
  update: (path, data, type, config) => {
    if (typeof (data) != "object") {
      throw new Error('Data is required');
    }
    return ApiHandlersInstance.runApi({ path, data, config, type, method: 'update' });
  },
  delete: (path, type, config) => {
    return ApiHandlersInstance.runApi({ path, config, type, method: 'delete' });
  },
  setGlobalDispatch: (dispatch) => ApiHandlersInstance.setGlobalDispatch(dispatch),
  configure: (obj) => ApiHandlersInstance.configure(obj),
};

export { Quikify, ApiHandlersComponent };
