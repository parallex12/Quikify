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

  configure({ baseURL }) {
    // Set the base URL globally for Axios
    axios.defaults.baseURL = baseURL;
  }

  setToken(token) {
    // Set the base URL globally for Axios
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  checkBaseURL() {
    if (!axios.defaults.baseURL) {
      console.warn('Base URL not configured. Use Quikify.configure({ baseURL }) before making API requests.');
    }
  }

  async _run_get(props) {
    return new Promise((resolve, reject) => {
      axios.get(props?.path)
        .then(response => {
          this.dispatchAction(props?.type, response.data);
          resolve(response.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  async _run_create(props) {
    return new Promise((resolve, reject) => {
      let data = props?.data
      data["config"] = props?.config
      axios.post(props?.path, data)
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
      let data = props?.data
      data["config"] = props?.config
      axios.put(props?.path, data)
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
      axios.delete(props?.path, { data: { config: props?.config } })
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
    this.checkBaseURL();
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
