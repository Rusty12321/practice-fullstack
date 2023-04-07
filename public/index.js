const containerEl = document.querySelector(".container");

fetch("/api/songs")
  .then((response) => response.json())
  .then((data) => {
    data.forEach(element => {
      containerEl.innerHTML += `<h2>${element}</h2>`;
    });
    // console.log(data);
  });
