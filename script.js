// Declare your arrays here
const comedies = [
    "https://i0.wp.com/websterjournal.com/wp-content/uploads/2022/02/smiling_friends_logo.png?fit=647%2C859&ssl=1", "https://m.media-amazon.com/images/M/MV5BODRjZGY3ZDktZGIxOC00MWUzLTg1N2EtNDM1NTQ2ZTkxYjc1XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMjVkY2MxYzAtNzViMC00MmQxLWIyNzctYmQ5ZmY1ZTNlZGVjXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
    // Add more comedy image URLs as needed
  ];
  const dramas = [
    // Example drama image URL
    "https://m.media-amazon.com/images/M/MV5BNjE0MjBiYzItM2UyMy00YzM4LWJhN2UtZTUzNWUwODU3MmM2XkEyXkFqcGdeQXVyMTI2MDMwMTI5._V1_.jpg", "https://upload.wikimedia.org/wikipedia/en/b/b2/Ninja_Kamui.png"
  ];
  const action = [
    // Example action image URL
    "https://m.media-amazon.com/images/M/MV5BZGY2ZTQxZGUtZDY2ZC00Mjc5LTlkZWQtNTA5YjUwOTIxYjEzXkEyXkFqcGdeQXVyMTY3MDE5MDY1._V1_FMjpg_UX1000_.jpg", "https://m.media-amazon.com/images/M/MV5BNDUwNjA5NjAtYmIyZi00MDQwLTllNWUtNTE1YTM2OTIzNGRhXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_.jpg",
    "https://m.media-amazon.com/images/M/MV5BNDI3ODE5MDEtNDMzNi00YmNmLTg5YTktMjdiODI5MGM2M2NjXkEyXkFqcGdeQXVyNzE5MTcxMTI@._V1_.jpg"
  ];
  
  // Make sure to declare your HTML elements as variables!
  let submitButton = document.querySelector("button");
  const container = document.getElementById('image-container');
  
  submitButton.addEventListener("click", function() {
    let answer = document.querySelector(".input-field").value// Corrected selector for input field
      if (answer.toLowerCase() === "action") {
          action.forEach(imagePath => {
              const img = document.createElement('img');
              img.src = imagePath;
              container.appendChild(img);
          });
      } else if (answer.toLowerCase() === "comedy") {
            comedies.forEach(imagePath => {
              const img = document.createElement('img');
              img.src = imagePath;
              container.appendChild(img);
          });
      } else if (answer.toLowerCase() === "drama") {
          dramas.forEach(imagePath => {
              const img = document.createElement('img');
              img.src = imagePath;
              container.appendChild(img);
          });
      }
  });