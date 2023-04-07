const container = document.querySelector(".container");

fetch("/api/songs")
  .then((data) => data.json())
  .then((data) => {
    container.innerHTML = `<p>${JSON.parse(data)}</p>`;
    // console.log(data);
  });
