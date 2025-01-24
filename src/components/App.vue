<template>
    <div class="personal-blog">
        <header class="header">
            <nav class="nav">
                <div class="logo">我的个人日志</div>
                <div class="nav-right">
                    <button class="action-btn" @click="handleClick">更多工具</button>
                    <ul class="nav-links">
                        <li><router-link to="/">首页</router-link></li>
                        <li><router-link to="/articles">文章</router-link></li>
                        <li><router-link to="/about">关于我</router-link></li>
                    </ul>
                </div>
            </nav>
        </header>

        <!-- 主要内容区 -->
        <div class="main-container">
            <main class="content">
                <ArticleList />
            </main>

            <!-- 侧边栏 -->
            <aside class="sidebar">
                <div class="profile">
                    <img src="/comet-moon.png" alt="头像" class="avatar">
                    <h3>博主昵称</h3>
                    <p>个人简介：热爱生活，记录点滴</p>
                </div>

                <div class="categories">
                    <h3>文章分类</h3>
                    <ul>
                        <li>生活随笔</li>
                        <li>技术分享</li>
                        <li>读书笔记</li>
                        <li>旅行日记</li>
                    </ul>
                </div>
            </aside>
        </div>
        <!-- 页脚 -->
        <footer class="footer">
            <div class="footer-content">
                <p>© 2024 个人日志. All rights reserved.</p>
                <div class="beian-info">
                    <a href="https://beian.miit.gov.cn/" target="_blank" class="beian-link">
                        沪ICP备2024103643号-1
                    </a>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
import { createApp } from 'vue'
import Mortgage from './Mortgage.vue'
import ArticleList from './ArticleList.vue'

export default {
    name: 'App',
    methods: {
        handleClick() {
            createApp(Mortgage).mount('#app')
        }
    },
    components: {
        ArticleList
    }
}
</script>

<style scoped>
.personal-blog {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.header {
    background-color: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 1rem 2rem;
}

.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
}

.logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
}

.nav-right {
    display: flex;
    align-items: center;
    gap: 2rem;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-links a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
}

.action-btn {
    padding: 8px 16px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.action-btn:hover {
    background-color: #45a049;
}

.main-container {
    display: flex;
    max-width: 1200px;
    margin: 2rem auto;
    gap: 2rem;
    flex: 1;
}

.content {
    flex: 3;
    background: #fff;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.sidebar {
    flex: 1;
}

.profile {
    background: #fff;
    padding: 1.5rem;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 2rem;
}

.avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin-bottom: 1rem;
}

.categories {
    background: #fff;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.categories ul {
    list-style: none;
    padding: 0;
}

.categories li {
    padding: 0.5rem 0;
    border-bottom: 1px solid #eee;
    cursor: pointer;
}

.footer {
    background: #333;
    color: #fff;
    text-align: center;
    padding: 1rem;
    margin-top: auto;
}

.footer-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 0;
}

.beian-info {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    gap: 20px;
}

.beian-link {
    color: #fff;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 14px;
}

.beian-link:hover {
    text-decoration: underline;
}

.beian-icon {
    width: 20px;
    height: 20px;
}

.beian-link:hover {
    text-decoration: underline;
}

.beian-icon {
    width: 20px;
    height: 20px;
}

/* 响应式设计 */
@media (max-width: 768px) {
    .main-container {
        flex-direction: column;
        padding: 1rem;
    }

    .nav {
        flex-direction: column;
        gap: 1rem;
    }

    .nav-links {
        flex-direction: column;
        align-items: center;
    }
}
</style>
