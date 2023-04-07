fetch("http://localhost:3000/songs")
  .then((data) => data.json())
  .then((data) => {
    console.log(data);
  });
