// ApiHandlers.js
import axios from "axios";

class ApiHandlers {
  constructor() {
    this.globalDispatch = null;

    // Map API types to corresponding functions
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
    try {
      const response = await axios.get(props?.path);
      this.dispatchAction(props?.type, response.data);
      return response.data;
    } catch (error) {
      console.error("GET error:", error);
      throw error;
    }
  }

  async _run_create(props) {
    try {
      const response = await axios.post(props?.path, props?.data);
      this.dispatchAction(props?.type, response.data);
      return response.data;
    } catch (error) {
      console.error("CREATE error:", error);
      throw error;
    }
  }

  async _run_update(props) {
    try {
      const response = await axios.put(props?.path, props?.data);
      this.dispatchAction(props?.type, response.data);
      return response.data;
    } catch (error) {
      console.error("UPDATE error:", error);
      throw error;
    }
  }

  async _run_delete(props) {
    try {
      const response = await axios.delete(props?.path);
      this.dispatchAction(props?.type, response.data);
      return response.data;
    } catch (error) {
      console.error("DELETE error:", error);
      throw error;
    }
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
    const { type } = props;

    // Use the corresponding function based on the API type
    const apiHandler = this.apiHandlers[type];

    if (apiHandler) {
      try {
        const responseData = await apiHandler.call(this, props);
        return responseData;
      } catch (error) {
        throw error;
      }
    } else {
      throw new Error(`Unsupported API type: ${type}`);
    }
  }
}

export default new ApiHandlers();
