import React from 'react'

const InfoDetails: React.FC = () => {
  const currentURL = window.location.href
  const segments = currentURL.split('/')
  const infoNum = segments[segments.length - 1]
  return (
    <div>
      <div></div>
    </div>
  )
}

export default InfoDetails
