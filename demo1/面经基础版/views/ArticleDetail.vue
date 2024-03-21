<template>
  <div class="article-detail-page" v-if="articleDetail.id">
    <nav class="nav"> <span class="back" @click="$router.back()">&lt;</span> 面经详情</nav>
    <header class="header">
      <h1>{{ articleDetail.stem }}</h1>
      <p>{{ articleDetail.createdAt }} | {{ articleDetail.views }} 浏览量 | {{ articleDetail.likeCount }} 点赞数</p>
      <p>
        <img :src=articleDetail.creatorAvatar alt="">
        <span>{{ articleDetail.creatorName }}</span>
      </p>
    </header>
    <main class="body">
      {{ articleDetail.content }}
    </main>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'ArticleDetailPage',
  data() {
    return {
      articleDetail: {}
    }
  },
  async created() {
    console.log(this.$route.params.articleId)
    const res = await axios.get(`https://mock.boxuegu.com/mock/3083/articles/${this.$route.params.articleId}`)
    this.articleDetail = res.data.result
    console.log(res)


  }
};
</script>

<style lang="less" scoped>
.article-detail-page {
  .nav {
    height: 44px;
    border-bottom: 1px solidrgb(93, 70, 70)4;
    line-height: 44px;
    text-align: center;

    .back {
      font-size: 18px;
      color: #666;
      position: absolute;
      left: 10px;
      top: 0;
      transform: scale(1, 1.5);
    }
  }

  .header {
    padding: 0 15px;

    p {
      color: #999;
      font-size: 12px;
      display: flex;
      align-items: center;
    }

    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
    }
  }

  .body {
    padding: 0 15px;
  }
}
</style>