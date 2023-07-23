function toggleDashboard() {
    const dashboard = document.getElementById("dashboard");
    dashboard.classList.toggle("active");
  }
  
  // javascript chart code

  
    // Your JavaScript code for creating the chart will go here
    // Custom data and labels
    const data = {
      labels :[20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75],
      datasets: [{
        label: 'Contributions',
        data: [80, 90, 100, 110,125,140,160,180,210,230,260,285],
        backgroundColor: 'darkblue', // Set bar background color to dark blue
        borderWidth: 1,
      }]
    };

    // Get the canvas element and set up the 2D context
    const ctx = document.getElementById('myChart').getContext('2d');

    // Create the chart using Chart.js
    const myChart = new Chart(ctx, {
      type: 'bar', // Use 'bar' for a bar chart
      data: data,
      options: {
        scales: {
          y: {
            ticks: {
              callback: (value) => '$' + value, // Add '$' prefix to y-axis labels
            },
            title: {
              display: true,
            },
            suggestedMin: 0,
            suggestedMax: 300,
            stepSize: 100,
          },
          x: {
            title: {
              display: true,
            }
          }
        }
      }
    });



    // range slide when it moves


  //  slider one 
const rangeSlider = document.querySelector(".custom-range-slider");
const sliderValue = document.querySelector(".slider-value");

// Function to update the displayed value
function updateSliderValue() {
  const percentage = rangeSlider.value;
  sliderValue.textContent = `${percentage}%`;
}

// Event listener to update the value when the slider is moved
rangeSlider.addEventListener("input", updateSliderValue);

// Initial update of the value when the page loads
updateSliderValue();


// slider two

const rangeSlidertwo = document.querySelector(".custom-range-slider-two");
const sliderValuetwo = document.querySelector(".slider-value-two");

// Function to update the displayed value
function updateSliderValuetwo() {
  const percentage = rangeSlidertwo.value;
  sliderValuetwo.textContent = `${percentage}`;
}

// Event listener to update the value when the slider is moved
rangeSlidertwo.addEventListener("input", updateSliderValuetwo);

// Initial update of the value when the page loads
updateSliderValuetwo();
