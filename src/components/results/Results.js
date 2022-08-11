import React from 'react'
import './results.css'

function Results(props) {
  // console.log('props', props.bodyData);
  let body = JSON.stringify(props.bodyData);
  return (
    <section data-testid='results'>
      {
        props.method === 'GET' ? props.data.name
          : props.method === 'POST' ? body : props.method === 'PUT' ? body : props.method === 'DELETE' ? 'Deleted' : <div className='loader'></div>
      }
    </section>
  )
}

export default Results