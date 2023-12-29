// ApiEndpoints.js
import ApiHandlers from "./ApiHandlers";

export const ApiEndpoints = {
  create: (path, data, type) => {
    return ApiHandlers.runApi({ path, data, type, method: 'create' });
  },
  get: (path, type) => {
    return ApiHandlers.runApi({ path, type, method: 'get' });
  },
  update: (path, data, type) => {
    return ApiHandlers.runApi({ path, data, type, method: 'update' });
  },
  delete: (path, type) => {
    return ApiHandlers.runApi({ path, type, method: 'delete' });
  },
};
