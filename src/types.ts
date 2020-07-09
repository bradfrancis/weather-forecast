
export interface IForecast {
    dayOfWeek: string,
    min: number,
    max: number,
    description: string
}

export interface ForecastProps {
    forecast: IForecast
}

export interface APIResponse {
    forecasts: IForecast[]
}