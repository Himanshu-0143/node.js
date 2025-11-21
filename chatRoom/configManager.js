const fs = require('fs');
const path = require('path');

// Read config.json
const configPath = path.join(__dirname, 'config.json');

fs.readFile(configPath, 'utf8', (err, data) => {
  if (err) {
    console.error("Error reading config file:", err);
    return;
  }

  console.log("Original config:");
  console.log(data);

  // Parse JSON
  const config = JSON.parse(data);

  // Update mode to production and version to 2.0.0
  config.node = "production";
  config.version = "2.0.0";

  console.log("\nUpdated config:");
  console.log(config);

  // Write back to file
  fs.writeFile(configPath, JSON.stringify(config, null, 2), (err) => {
    if (err) {
      console.error("Error writing config file:", err);
      return;
    }
    console.log("\nConfig file updated successfully!");
  });
});
