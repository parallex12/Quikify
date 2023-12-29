
# Quikify
<img src="logo.png" alt="Quikify Logo" width="100">


Quikify is a lightweight and high-performance API management toolkit designed for React Native applications. It simplifies HTTP requests using Axios, providing a seamless and efficient way to handle data fetching in your projects.

## Installation

Install Quikify using npm:

```bash
npm install quikify axios
```

## Import Quikify

```javascript
import { Quikify } from 'quikify';
```

## Set Global Dispatch (One-time setup)

```javascript
import { Quikify } from 'quikify';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  Quikify.setGlobalDispatch(dispatch);
  
  // Your app components
};
```

## Features


- Swift Integration: Designed for React Native with a focus on speed and efficiency.
- Axios Under the Hood: Utilizes Axios for robust and reliable HTTP requests.
- Global Dispatch: Set it once and forget it – Quikify seamlessly integrates with your Redux store.

# Quikify API Reference

Quikify provides a set of methods for managing API requests in your React Native application. Below is the reference for the available methods:

# `Quikify.get(path, type)`

### Parameters

- `path` (string): The API endpoint path.
- `type` (string): The Redux action type to dispatch upon a successful API call.

### Returns

A Promise that resolves to the response data from the API.

### Example

```javascript
Quikify.get("https://api.example.com/data", 'GET_SUCCESS')
  .then((response) => {
    console.log('GET Response:', response);
  })
  .catch((error) => {
    console.error('GET Error:', error);
  });
  ```

  
# `Quikify.post(path, data, type)`

### Parameters

- `path` (string): The API endpoint path.
- `data` (object): The data to be sent in the POST request.
- `type` (string): The Redux action type to dispatch upon a successful API call.

### Returns

A Promise that resolves to the response data from the API.

### Example

```javascript
const postData = { key: 'value' };
Quikify.post("https://api.example.com/create", postData, 'POST_SUCCESS')
  .then((response) => {
    console.log('POST Response:', response);
  })
  .catch((error) => {
    console.error('POST Error:', error);
  });

  ```

# `Quikify.put(path, data, type)`

### Parameters

- `path` (string): The API endpoint path.
- `data` (object): The data to be sent in the POST request.
- `type` (string): The Redux action type to dispatch upon a successful API call.

### Returns

A Promise that resolves to the response data from the API.

### Example

```javascript
const postData = { key: 'value' };
Quikify.put("https://api.example.com/create", postData, 'POST_SUCCESS')
  .then((response) => {
    console.log('POST Response:', response);
  })
  .catch((error) => {
    console.error('POST Error:', error);
  });

  ```



# `Quikify.delete(path, type)`

### Parameters

- `path` (string): The API endpoint path.
- `type` (string): The Redux action type to dispatch upon a successful API call.

### Returns

A Promise that resolves to the response data from the API.

### Example

```javascript
Quikify.delete("https://api.example.com/delete", 'DELETE_SUCCESS')
  .then((response) => {
    console.log('DELETE Response:', response);
  })
  .catch((error) => {
    console.error('DELETE Error:', error);
  });

  ```

## License

[Quikify is released under the Adlerware License](http://adlerware.net/)

