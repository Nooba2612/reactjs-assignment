import { useState } from 'react'

function StudentInfo({name, id, lab}) {

  return (
    <div>
      <div>Tên: {name}</div>
      <div>MSSV: {id}</div>
      <div>Lớp: {lab}</div>
    </div>
  )
}

export default StudentInfo
