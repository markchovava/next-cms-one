import React from 'react'

function Add() {
  const {setPageName} = BackendContextState()
  setPageName(() => 'Add Media');

  return (
    <div>Add</div>
  )
}

export default Add