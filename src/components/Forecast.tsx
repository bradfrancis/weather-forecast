import React from 'react';
import { ForecastProps } from '../types';
import styles from './Forecast.module.scss';

export default function Forecast(props: ForecastProps) {
    const forecast = props.forecast;

    return(
        <div className={styles.root}>
            <span className={styles.dayOfWeek}>{forecast.dayOfWeek}</span>
            <span className={styles.temperature}>{forecast.min}&deg;</span>
            <span className={styles.temperature}>{forecast.max}&deg;</span>
            <span className={styles.desc}>{forecast.description}</span>
        </div>
    );
}
