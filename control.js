function togglePin() {
    const button = document.getElementById("toggleButton");
    const pinState = button.textContent.toLowerCase();

    let endpoint = "";

    if (pinState === "on") {
        button.textContent = "Off";
        endpoint = "setPinHigh";
    } else {
        button.textContent = "On";
        endpoint = "setPinLow";
    }

    fetch(`http://your-node-mcu-server.com/${endpoint}`, { mode: 'cors' })
        .then(response => {
            if (!response.ok) {
                console.error(`Failed to set pin to ${pinState}.`);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}