// ApiEndpoints.ts
import { ApiHandlersComponent, ApiHandlersInstance } from 'quikify/ApiHandlers';

interface QuikifyConfig {
  return?: string;
}
interface QuikifyOptions {
  path: string;
  data: object; // Make data a required field of type object
  type: string;
  config?: QuikifyConfig;
}

const Quikify = {
  create: (path: string, data: object={}, type: string, config?: QuikifyConfig) => {
    if (data === undefined) {
      throw new Error('Data is required');
    }
    console.log(typeof data);
    return ApiHandlersInstance.runApi({ path, data, config, type, method: 'create' } as QuikifyOptions);
  },
  get: (path: string, type: string, config?: QuikifyConfig) => {
    return ApiHandlersInstance.runApi({ path, config, type, method: 'get' } );
  },
  update: (path: string, data:  object={}, type: string, config?: QuikifyConfig) => {
    return ApiHandlersInstance.runApi({ path, data, config, type, method: 'update' } as QuikifyOptions);
  },
  delete: (path: string, type: string, config?: QuikifyConfig) => {
    return ApiHandlersInstance.runApi({ path, config, type, method: 'delete' });
  },
  setGlobalDispatch: (dispatch: any) => ApiHandlersInstance.setGlobalDispatch(dispatch),
  configure: (obj: any) => ApiHandlersInstance.configure(obj),
};

export { Quikify, ApiHandlersComponent };
