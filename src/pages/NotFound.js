import React from 'react';
import styles  from './css/notfound.module.css';
const NotFound = () => {
  return (
    <div className=''>
      <h1 className={ styles['.h1']}>404 Page Not Found</h1>
      <p className={ styles['.p']}>The page you are looking for does not exist.</p>
    </div>
  )
}

export default NotFound
