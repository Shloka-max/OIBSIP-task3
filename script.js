function convertTemperature() {
    var fromUnit = document.getElementById("fromUnit").value;
    var toUnit = document.getElementById("toUnit").value;
    var temperature = document.getElementById("temperature").value;

    if (fromUnit === toUnit) {
      document.getElementById("resultText").textContent = "Please select different units.";
      return;
    }

    var result;
    
    if (fromUnit === "celsius") {
      if (toUnit === "fahrenheit") {
        result = (temperature * 9/5) + 32;
      } else if (toUnit === "kelvin") {
        result = parseFloat(temperature) + 273.15;
      }
    } else if (fromUnit === "fahrenheit") {
        if (toUnit === "celsius") {
          result = (temperature - 32) * 5/9;
        } else if (toUnit === "kelvin") {
          result = (parseFloat(temperature) + 459.67) * 5/9;
        }
      } else if (fromUnit === "kelvin") {
        if (toUnit === "celsius") {
          result = parseFloat(temperature) - 273.15;
        } else if (toUnit === "fahrenheit") {
          result = (parseFloat(temperature) * 9/5) - 459.67;
        }
      }

      if (isNaN(result)) {
        document.getElementById("resultText").textContent = "Invalid input. Please enter a valid temperature.";
      } else {
        document.getElementById("resultText").textContent = temperature + " " + fromUnit + " is equal to " + result.toFixed(2) + " " + toUnit + ".";
    }
}