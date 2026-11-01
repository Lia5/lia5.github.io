
document.addEventListener('DOMContentLoaded', () => {
// Запитуємо дані з сервера dummyjson.com/posts

async function fetchBlog() {
  try {
    const response = await fetch('https://dummyjson.com/posts')
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }
  const data = await response.json();
  const postsContainer = document.getElementById('posts-container');
  data.posts.forEach(post => {
    const postElement = document.createElement('article');
    postElement.classList.add('post');
    postElement.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.body}</p>
    `;
    postsContainer.appendChild(postElement);
  });
  } catch (error) {
    console.error(`Could not get products: ${error}`);
  }
}

fetchBlog();
});