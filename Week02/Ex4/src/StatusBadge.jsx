import { useState } from 'react'

function StatusBadge({status}) {

  const getStatusColor = (status) => {
    switch (status) {
      case "online":
        return "green"
      case "offline":
        return "gray"
      case "busy":
        return "red"
    }
  }

  return (
    <>
      <div style={{borderRadius: "50%", width: 100, height: 100, backgroundColor: getStatusColor(status)}} className='status-badge'></div>
    </>
  )
}

export default StatusBadge
