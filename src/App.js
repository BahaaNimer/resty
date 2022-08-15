import './App.css';

import React, { useState, useEffect } from 'react';
import Header from './components/header/Header';
import Form from './components/form/Form';
import Results from './components/results/Results';
import Footer from './components/footer/Footer';

function App() {
  const [data, setData] = useState(null);
  const [reqParams, setReqParams] = useState({});
  const [bodyData, setBodyData] = useState({});
  const [headers, setHeaders] = useState({});

  useEffect(() => {
    if (data || reqParams || bodyData || headers) {
      setReqParams(reqParams);
      setBodyData(bodyData);
      setHeaders(headers);
      setData(data);
    }
    return () => {
      setData(null);
      setReqParams({});
      setBodyData({});
      setHeaders({});
    };
  }, [data, reqParams, bodyData, headers]);

  const callApi = async (reqParams, bodyParams) => {

    // get the data from the url
    if (reqParams.method === 'GET') {
      const response = await fetch(reqParams.url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      setData(data);

      // add record to the data 
    } else if (reqParams.method === 'POST') {
      const addRecord = await fetch(reqParams.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: bodyParams.body,
      });
      const body = {
        body: bodyParams.body,
      };
      setBodyData(body);
      console.log(addRecord);

      // update the state with the new data
    } else if (reqParams.method === 'PUT') {
      const updateRecord = await fetch(reqParams.url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: bodyParams.body,
      });
      const body = {
        body: bodyParams.body,
      };
      setBodyData(body);
      console.log(updateRecord);

      // delete the record from the data
    } else if (reqParams.method === 'DELETE') {
      const deleteRecord = await fetch(reqParams.url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(deleteRecord);
    }
    setReqParams(reqParams);
    const headers = {
      "Headers": {
        'Content-Type': 'application/json',
      }
    };
    setHeaders(headers);
  }
  return (
    <>
      <Header />
      <div className='url'>URL: {reqParams.url}</div>
      <div className='req'>Request Method: {reqParams.method}</div>
      <Form handleApiCall={callApi} />
      <Results Response={data} method={reqParams.method} bodyData={bodyData} headers={headers} />
      <Footer />
    </>
  )
}

export default App
