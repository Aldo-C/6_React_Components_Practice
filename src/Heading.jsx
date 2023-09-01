import React from "react"; // Must import React to use React Components

// This is the function that is being exported for use in other documents
function Heading() {
  const date = new Date(); // Get complete date in a standard format (see docs)
  const currentTime = date.getHours(); // Extract hours in 24h time

  let greeting; // Declare variable

  const customStyle = {
    // Javascript object
    color: ""
  };

  // Conditional statements to adjust greeting and heading color based on time
  if (currentTime < 12) {
    greeting = "Good Morning";
    customStyle.color = "red";
  } else if (currentTime < 18) {
    greeting = "Good Afternoon";
    customStyle.color = "green";
  } else {
    greeting = "Good Night";
    customStyle.color = "blue";
  }

  // Return the html/JS
  return (
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
  );
}

// Export the Heading function as the default
export default Heading;
