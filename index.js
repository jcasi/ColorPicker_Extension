const pickerBtn = document.querySelector("#pickerButton");
const clearBtn = document.querySelector("#clearButton");
const exportBtn = document.querySelector("#exportButton");
const colorLst = document.querySelector("#.all-colors");

// Retrieve local save or init empty array
let pickedColors = JSON.parse(localStorage.getItem("colors-list")) || [];

// Popup flag
let currentPopup = null;

// Clipboard copy functionality
const copyToClipboard = async (text, element) => {
  try {
    await navigator.clipboard.writeText(text);
    element.innerText = "Copied!";
    setTimeout(() => {
      element.innerText = text;
    }, 1000);
  } catch (error) {
    alert("Failed to copy text...");
  }
};

// Local color export functionality
const exportColors = () => {
  const colorText = pickedColors.join("\n");
  const blob = new Blob([colorText], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Colors.txt";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};
