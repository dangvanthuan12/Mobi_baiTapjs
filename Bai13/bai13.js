const convertText = () => {
  const valueText = document.getElementById("inputText").value;
  const varNames = valueText.split("\n");
  console.log(varNames);
  const toCamel = varNames.map((name) => {
    return name
      .trim()
      .toLowerCase()
      .replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
  });
  document.getElementById("output").textContent = toCamel.join("\n");
};
