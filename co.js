document.addEventListener('DOMContentLoaded', () => {
    const colorPicker = document.getElementById('colorPicker');
    const colorDisplay = document.getElementById('colorDisplay');
    const prevColorDisplay = document.getElementById('prevColorDisplay');
    const colorHex = document.getElementById('colorHex');
    const prevColorHex = document.getElementById('prevColorHex');

    let previousColor = '#FFFFFF';  // Initialize with white

    colorPicker.addEventListener('input', () => {
        const currentColor = colorPicker.value;

        // Update previous color display
        prevColorDisplay.style.backgroundColor = previousColor;
        prevColorHex.textContent = previousColor;

        // Update current color display
        colorDisplay.style.backgroundColor = currentColor;
        colorHex.textContent = currentColor;

        // Set the previous color to the current one
        previousColor = currentColor;
    });
});