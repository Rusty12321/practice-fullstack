const containerEl = document.querySelector(".container");

fetch("/api/songs")
  .then((response) => response.json())
  .then((data) => {
    data.forEach(element => {
      // containerEl.innerHTML += `<h2>${element.id}, ${element.name}, ${element.artist}, ${element.album}</h2>`;
      console.log(element.id, element.name, element.artist, element.album);
    });
  });
