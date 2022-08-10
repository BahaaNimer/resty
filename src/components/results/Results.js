import React from 'react'
import './results.css'

function Results(props) {
  console.log('data result', props.data);
  console.log('method result', props.method);

  return (
    <div className='main-div'>
      {
        props.method === 'GET' ?
          <div>
            <div className='count'>Count: {props.data.count}</div>
            <div className='next'>Next: {props.data.next}</div>
            {props.data.results.map(result => (
              <div key={result.name} className='result'>
                <div className='name'>Name: {result.name}</div>
                <div className='url'>URL: {result.url}</div>
              </div>
            ))}
          </div>
          : props.method === 'POST' ? null : props.method === 'PUT' ? null : props.method === 'DELETE' ? null : <div className='loader'></div>
      }
    </div>
  )
}

export default Results