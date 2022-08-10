import './App.css';

import React, { useState } from 'react';
import Header from './components/header/Header';
import Form from './components/form/Form';
import Results from './components/results/Results';
import Footer from './components/footer/Footer';

function App() {
  const [data, setData] = useState(null);
  const [reqParams, setReqParams] = useState({});

  const callApi = async (reqParams, bodyParams) => {
    const response = await fetch(reqParams.url);
    const data = await response.json({
      count: response.count,
      next: response.next,
      results: response.results,
      body: bodyParams.body,
    });
    setData(data);
    setReqParams(reqParams);
    console.log('data', data);
    // console.log('reqParams', reqParams);
    // console.log('bodyParams Body', bodyParams.body);
    // console.log('reqParams url', reqParams.url);
    // console.log('reqParams method', reqParams.method);
  }

  return (
    <>
      <Header />
      <div className='url'>URL: {reqParams.url}</div>
      <div className='req'>Request Method: {reqParams.method}</div>
      <Form handleApiCall={callApi} />
      <Results data={data} method={reqParams.method} />
      <Footer />
    </>
  )
}

export default App
