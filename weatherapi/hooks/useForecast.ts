import React, { ChangeEvent, useEffect, useState } from 'react';
import { optionType, forecastType } from '../types';

export default function useForecast() {
  const [city, setCity] = useState<optionType | null>(null);
  const [forecast, setForecast] = useState<null>(null);
  const [location, setLocation] = useState<string>('');
  const getSearchOption = (value: string) => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=${
        process.env.NEXT_PUBLIC_REACT_APP_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((data) => setOptions(data));
  };
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setLocation(value);
    if (value === '') return;
    getSearchOption(value);
  };
  const [options, setOptions] = useState<[]>([]);
  const getForeCast = (city: optionType) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&units=metric&appid=${process.env.NEXT_PUBLIC_REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        const forecastData = {
          ...data.city,
          list: data.list.slice(0, 16),
        };
        setForecast(forecastData);
      });
  };
  const onSubmit = () => {
    if (!city) return;
    getForeCast(city);
  };
  const onOptionSelect = (option: optionType) => {
    setCity(option);
  };

  useEffect(() => {
    if (city) {
      setLocation(city.name);
      setOptions([]);
    }
  }, [city]);

  return {
    location,
    options,
    forecast,
    onInputChange,
    onOptionSelect,
    onSubmit,
  };
}
