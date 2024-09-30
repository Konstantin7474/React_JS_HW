import { TextField } from "@mui/material";
import { useState } from "react";

function TemperatureConverter() {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(32);

  const handleCelsiusChange = (event) => {
    const celsiusValue = event.target.value;
    setCelsius(celsiusValue);
    setFahrenheit((celsiusValue * 9) / 5 + 32);
  };

  const handleFahrenheitChange = (event) => {
    const fahrenheitValue = event.target.value;
    setFahrenheit(fahrenheitValue);
    setCelsius(((fahrenheitValue - 32) * 5) / 9);
  };

  return (
    <div>
      <TextField
        label="Темпиратура в градусах Цельсия"
        value={celsius}
        onChange={handleCelsiusChange}
        type="number"
        margin="normal"
      />
      <TextField
        label="Темпиратура в градусах Фаренгейта"
        value={fahrenheit}
        onChange={handleFahrenheitChange}
        type="number"
        margin="normal"
      />
    </div>
  );
}
export default TemperatureConverter;
