import PostCard from "../../components/postCard/postCard";
import styles from "./blog.module.css";
import Pagination from "../../components/pagination/Pagination";

// Количество постов на одной странице
const POSTS_PER_PAGE = 10;

// FETCH DATA WITH AN API
const getData = async (page) => {
  const start = (page - 1) * POSTS_PER_PAGE;

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${POSTS_PER_PAGE}`, {next:{revalidate:3600}});

  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};

// FETCH всего количества постов (нужно для расчёта количества страниц)
const getTotalPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};


const BlogPage = async ({searchParams}) => {

  // Получаем текущую страницу из query-параметра, по умолчанию это 1
  const page = parseInt(searchParams.page) || 1;

  // FETCH DATA WITH AN API
  const posts = await getData(page);

  // Получаем общее количество постов (для расчёта последней страницы)
  const totalPosts = await getTotalPosts();
  const totalPages = Math.ceil(totalPosts.length / POSTS_PER_PAGE); // Общее количество страниц

  return (
    <div className={styles.container}>
      {/* Рендерим посты */}
      {posts.map((post, index) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} index={index} />
        </div>
      ))}
      {/* Подключаем компонент пагинации */}
      <Pagination currentPage={page} totalPages={totalPages} />
    </div>
  )
}

export default BlogPage
