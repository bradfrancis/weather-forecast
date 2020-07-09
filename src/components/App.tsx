import React from 'react';
import ForecastList from './ForecastList'
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.root}>
      <h1 className={styles.heading}>7 Day Forecast</h1>
      <ForecastList />
    </div>
  );
}

export default App;
