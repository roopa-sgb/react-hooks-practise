import { useState } from "react";

export default function TempConverterSharedState() {
  const [tempInCelsius, setTempInCelsius] = useState(0.0);
  const [tempInFarenheit, setTempInFarenheit] = useState(0.0);
    
   
    return (
    <>
      <TemperatureInput
        tempInCelsius={tempInCelsius}
        setTempInCelsius={setTempInCelsius}
        tempInFarenheit={tempInFarenheit}
        setTempInFarenheit={setTempInFarenheit}
      />
    </>
  );
}

function TemperatureInput({
  tempInCelsius,
  setTempInCelsius,
  tempInFarenheit,
  setTempInFarenheit,
}) {
  function handleCelsius(e) {
      setTempInCelsius(e.target.value);
      console.log(e.target.value);
    let tempInFaren = (e.target.value * (9 / 5)) + 32;
    setTempInFarenheit(tempInFaren);
  }
  function handleFarenheit(e) {
    setTempInFarenheit(e.target.value);
     console.log(e.target.value);
    let tempInCel = (e.target.value - 32) * (5 / 9);
    setTempInCelsius(tempInCel);
  }
  return (
    <>
      <label htmlFor="tempInCelsius">
        Temperature In Celsius :
        <input
          type="number"
          name="tempInCelsius"
          id="tempInCelsius"
          value={tempInCelsius}
          onChange={handleCelsius}
        />
      </label>
      <label htmlFor="">
        Temperature in Farenheit :
        <input
          type="number"
          name="tempInFranh"
          id="tempInFranh"
          value={tempInFarenheit}
          onChange={handleFarenheit}
        />
      </label>
    </>
  );
}
