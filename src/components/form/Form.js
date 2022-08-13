import React, { useState } from 'react'
import './form.css'

function Form(props) {
  const [click, setClick] = useState('GET');
  const [url, setUrl] = useState('');
  const [body, setBody] = useState('');


  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      method: click,
      url: url,
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const bodyData = {
      body: body,
    };
    props.handleApiCall(formData, bodyData);
  }

  const handelClick = e => {
    e.preventDefault();
    setClick(e.target.value);
  }
  const handelUrl = e => {
    e.preventDefault();
    setUrl(e.target.value);
  }
  const handleBody = e => {
    e.preventDefault();
    setBody(e.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className='label-input'>
          <span>URL: </span>
          <input name='url' type='text' className='input' placeholder='Inter a URL' data-testid='input' onChange={handelUrl} />
          <button type="submit" className='btn' data-testid='submit'>GO!</button>
        </label>
        <label className="methods">
          <div className='btns'>
            <button id="get" data-testid='get' onClick={handelClick} value='GET'>GET</button>
            <button id="post" data-testid='post' onClick={handelClick} value='POST'>POST</button>
            <button id="put" data-testid='put' onClick={handelClick} value='PUT'>PUT</button>
            <button id="delete" onClick={handelClick} value='DELETE'>DELETE</button>
          </div>
        </label>
        {click === 'POST' || click === 'PUT' ? <textarea onChange={handleBody} /> : null}
      </form>
    </>
  )
}

export default Form;