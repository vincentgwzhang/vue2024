<template>
  <div class="news">
    <!--Nevigation area-->
    <ul>
      <li v-for="news in newsList" :key="news.id">
        <button @click="showNewsDetail(news)">See news</button>
        <!-- <RouterLink :to="`/news/detail/${news.id}/${news.title}/${news.content}`">{{ news.title }}</RouterLink> -->
        <RouterLink :to="{
          name: 'Router_name_news_details',
          query: {
            id: news.id,
            title: news.title,
            content: news.content
          }
        }">
        {{ news.title }}
      </RouterLink>
      </li>
    </ul>

    <!--Presentation area-->
    <div class="news-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup lang="ts" name="News">
import {RouterView, RouterLink, useRouter} from 'vue-router'
import { reactive } from 'vue';
import { type News } from '@/types/News';

const newsList = reactive([
  {id: 'news01', title: 'this is title 1', content: 'this is content 1'},
  {id: 'news02', title: 'this is title 2', content: 'this is content 2'},
  {id: 'news03', title: 'this is title 3', content: 'this is content 3'},
  {id: 'news04', title: 'this is title 4', content: 'this is content 4'},
  {id: 'news05', title: 'this is title 5', content: 'this is content 5'},
]);

const router = useRouter();

function showNewsDetail(news: News) {
  router.replace({
    name: 'Router_name_news_details',
    query: {
      id: news.id,
      title: news.title,
      content: news.content
    }
  });
}
</script>

<style scoped>
/* 新闻 */
.news {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  height: 100%;
}
.news ul {
  margin-top: 30px;
  /* list-style: none; */
  padding-left: 10px;
}
.news li>a {
  font-size: 18px;
  line-height: 40px;
  text-decoration: none;
  color: #64967E;
  text-shadow: 0 0 1px rgb(0, 84, 0);
}

.news li::marker {
  color: #64967E;
}

.news-content {
  width: 70%;
  height: 90%;
  border: 1px solid;
  margin-top: 20px;
  border-radius: 10px;
}
</style>