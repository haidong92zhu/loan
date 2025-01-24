<template>
  <div class="article-list">
    <div class="article-filters">
      <input 
        type="text" 
        v-model="searchText" 
        placeholder="搜索文章..." 
        class="search-input"
      >
      <select v-model="selectedCategory" class="category-select">
        <option value="">全部分类</option>
        <option value="life">生活随笔</option>
        <option value="tech">技术分享</option>
        <option value="reading">读书笔记</option>
        <option value="travel">旅行日记</option>
      </select>
    </div>

    <div class="articles">
      <article v-for="article in filteredArticles" :key="article.id" class="article-card">
        <img :src="article.cover" :alt="article.title" class="article-cover">
        <div class="article-content">
          <h2 class="article-title">{{ article.title }}</h2>
          <div class="article-meta">
            <span class="article-date">{{ article.date }}</span>
            <span class="article-category">{{ article.category }}</span>
          </div>
          <p class="article-excerpt">{{ article.excerpt }}</p>
          <button class="read-more" @click="readMore(article.id)">阅读更多</button>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleList',
  data() {
    return {
      searchText: '',
      selectedCategory: '',
      articles: [
        {
          id: 1,
          title: '我的第一篇博客',
          date: '2024-01-15',
          category: '生活随笔',
          excerpt: '这是我的第一篇博客，记录了我开始写博客的初衷和期望...',
          cover: 'https://picsum.photos/300/200'
        },
        {
          id: 2,
          title: 'Vue3学习笔记',
          date: '2024-01-16',
          category: '技术分享',
          excerpt: 'Vue3的组合式API带来了全新的开发体验...',
          cover: 'https://picsum.photos/300/200'
        },
        {
          id: 3,
          title: '周末徒步游记',
          date: '2024-01-17',
          category: '旅行日记',
          excerpt: '这个周末和朋友一起去了附近的山里徒步...',
          cover: 'https://picsum.photos/300/200'
        }
      ]
    }
  },
  computed: {
    filteredArticles() {
      return this.articles.filter(article => {
        const matchesSearch = article.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
                            article.excerpt.toLowerCase().includes(this.searchText.toLowerCase())
        const matchesCategory = !this.selectedCategory || 
                              article.category === this.selectedCategory
        return matchesSearch && matchesCategory
      })
    }
  },
  methods: {
    readMore(articleId) {
      console.log('查看文章详情:', articleId)
      // 这里可以添加路由跳转逻辑
    }
  }
}
</script>

<style scoped>
.article-list {
  width: 100%;
}

.article-filters {
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
}

.search-input, .category-select {
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.search-input {
  flex: 1;
}

.articles {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.article-card {
  display: flex;
  gap: 2rem;
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 8px;
  transition: transform 0.2s;
}

.article-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.article-cover {
  width: 200px;
  height: 150px;
  object-fit: cover;
  border-radius: 4px;
}

.article-content {
  flex: 1;
}

.article-title {
  margin: 0 0 0.5rem 0;
  color: #333;
}

.article-meta {
  display: flex;
  gap: 1rem;
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.article-excerpt {
  color: #666;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.read-more {
  padding: 0.5rem 1rem;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.read-more:hover {
  background-color: #45a049;
}

@media (max-width: 768px) {
  .article-card {
    flex-direction: column;
  }
  
  .article-cover {
    width: 100%;
    height: 200px;
  }
  
  .article-filters {
    flex-direction: column;
  }
}
</style>
