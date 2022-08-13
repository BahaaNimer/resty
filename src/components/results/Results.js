import React from 'react'
import './results.css'

function Results(props) {
  let body = props.bodyData.body;
  let headers = props.headers.headers;
  return (
    <section data-testid='results'>
      <div className='content'>
        <div className="header">
          {props.method === 'GET' ? JSON.stringify(headers, undefined, '\t') : null}
        </div>
        <br />
        {
          props.method === 'GET' ? JSON.stringify(props.data, undefined, '\t')
            : props.method === 'POST' ? body : props.method === 'PUT' ? body : props.method === 'DELETE' ? 'Deleted' : <div className='loader'></div>
        }
      </div>
    </section>
  )
}

export default Results