document.addEventListener('DOMContentLoaded', () => {
  const movieRow = document.querySelector('.movie-row');

  const movies = [
    'https://upload.wikimedia.org/wikipedia/en/1/14/Tenet_movie_poster.jpg',
    'https://upload.wikimedia.org/wikipedia/en/1/14/Tenet_movie_poster.jpg',
    'https://upload.wikimedia.org/wikipedia/en/1/14/Tenet_movie_poster.jpg',
    'https://upload.wikimedia.org/wikipedia/en/1/14/Tenet_movie_poster.jpg',
    'https://upload.wikimedia.org/wikipedia/en/1/14/Tenet_movie_poster.jpg',
    'https://upload.wikimedia.org/wikipedia/en/1/14/Tenet_movie_poster.jpg',
  ];

  movies.forEach(movie => {
    const img = document.createElement('img');
    img.src = movie;
    img.alt = 'Movie Poster';
    movieRow.appendChild(img);
  });
});
