// ApiHandlers.js
import axios from 'axios';
import React, { useState } from 'react';

class ApiHandlers {
  constructor() {
    this.globalDispatch = null;
    this.apiHandlers = {
      get: this._run_get,
      create: this._run_create,
      update: this._run_update,
      delete: this._run_delete,
    };
  }

  setGlobalDispatch(dispatch) {
    this.globalDispatch = dispatch;
  }

  async _run_get(props) {
    return new Promise((resolve, reject) => {
      axios.get(props?.path)
        .then(response => {
          this.dispatchAction(props?.type, response.data);
          resolve(response.data);
        })
        .catch(error => {
          console.error('GET error:', error);
          reject(error);
        });
    });
  }

  async _run_create(props) {
    return new Promise((resolve, reject) => {
      axios.post(props?.path, props?.data)
        .then(response => {
          this.dispatchAction(props?.type, response.data);
          resolve(response.data);
        })
        .catch(error => {
          console.error('CREATE error:', error);
          reject(error);
        });
    });
  }

  async _run_update(props) {
    return new Promise((resolve, reject) => {
      axios.put(props?.path, props?.data)
        .then(response => {
          this.dispatchAction(props?.type, response.data);
          resolve(response.data);
        })
        .catch(error => {
          console.error('UPDATE error:', error);
          reject(error);
        });
    });
  }

  async _run_delete(props) {
    return new Promise((resolve, reject) => {
      axios.delete(props?.path)
        .then(response => {
          this.dispatchAction(props?.type, response.data);
          resolve(response.data);
        })
        .catch(error => {
          console.error('DELETE error:', error);
          reject(error);
        });
    });
  }

  dispatchAction(type, payload) {
    return new Promise((resolve) => {
      if (this.globalDispatch) {
        this.globalDispatch({ type, payload });
        resolve();
      }
    });
  }

  async runApi(props) {
    const { method } = props;
    const apiHandler = this.apiHandlers[method];

    if (apiHandler) {
      try {
        const responseData = await apiHandler.call(this, props);
        return responseData;
      } catch (error) {
        throw error;
      }
    } else {
      throw new Error(`Unsupported API method: ${method}`);
    }
  }
}

const ApiHandlersInstance = new ApiHandlers();
const ApiHandlersComponent = () => {
  const [globalDispatch, setGlobalDispatch] = useState(null);
  ApiHandlersInstance.setGlobalDispatch(setGlobalDispatch);

  return null;  // or whatever JSX you need
};

export { ApiHandlersComponent, ApiHandlersInstance };
  