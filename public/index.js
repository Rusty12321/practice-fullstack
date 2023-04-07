fetch("/api/songs")
  .then((data) => data.json())
  .then((data) => {
    console.log(data);
  });
