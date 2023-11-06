import React, { useEffect } from 'react'

const ProcessBar = () => {


  useEffect(() => {
    const memoryUsage = 50; // 假设服务器内存占用为50%
    const progressBar = document.querySelector('.progress');
    progressBar.style.width = memoryUsage + '%';
  }, [])

  return (
    <div className='chartWrapper'>
      <div className="progress-bar" >
        <div className="progress"></div>
      </div >
    </div >
  )
}

export default ProcessBar
