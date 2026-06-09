async function loadText(file, elementId) {
    const response = await fetch(file);
    const text = await response.text();

    document.getElementById(elementId).textContent = text;
}

loadText("content/desktop_project.txt", "desktop");
loadText("content/design_project.txt", "design");
loadText("content/eletronic_project.txt", "eletronic");
loadText("content/data_base_project.txt", "data");