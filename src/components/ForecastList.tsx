import React, { useEffect, useState } from 'react';
import { IForecast, APIResponse } from '../types';
import Forecast from './Forecast';
import styles from './ForecastList.module.scss';


export default function ForecastList() {
    const [forecasts, setForecasts] = useState<IForecast[]>([]);
    const [isErrored, setIsErrored] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getForecastData = async () => {
            try {
                setIsLoading(true);

                const response = await fetch("/forecast.json");

                if (response.ok) {
                    const data = await response.json() as APIResponse;

                    setForecasts(data.forecasts);
                }
                else {
                    setIsErrored(true);
                }
            }
            catch (err) {
                console.error(err);
                setIsErrored(true);
            }
            finally {
                setIsLoading(false);
            }
        }

        getForecastData();
    }, []);

    return(
        <div className={styles.root}>
            {isLoading && <span className="loading">Loading...</span>}
            
            {!isErrored && !isLoading &&
                forecasts.map((forecast, index) => (
                    <Forecast
                        key={index} // I know this generally a no no but it'll do for now
                        forecast={forecast}
                    />
                ))
            }

            {isErrored && <span className="error">Uh oh! Something went wrong :(</span>}
        </div>
    );
}