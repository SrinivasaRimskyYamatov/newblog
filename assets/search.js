let posts = [];

fetch('/search.json')
  .then(res => res.json())
  .then(data => posts = data);

const searchBox = document.getElementById('searchBox');
const postsList = document.getElementById('posts');

searchBox.addEventListener('input', () => {
  const query = searchBox.value.toLowerCase();

  postsList.innerHTML = '';

  posts
    .filter(p => p.title.toLowerCase().includes(query))
    .forEach(p => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = p.url;
      a.textContent = p.title;
      li.appendChild(a);
      postsList.appendChild(li);
    });
});
