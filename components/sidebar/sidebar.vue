<script lang="ts" setup></script>

<template>
  <div id="sidebar-frame">
    <nuxt-link id="mypage-logo">
      <img src="/mypage-logo.webp" alt="logo" />
    </nuxt-link>
    <button id="sidebar-profile">
      <v-avatar image="/test-avatar.jpg" size="80"></v-avatar>
      <div class="name"><span>横国あ</span> <span>太郎ああ</span></div>
    </button>
    <hr />
    <nav id="nav-frame" class="nav-button-group">
      <nuxt-link to="/" class="nav-item">
        <v-icon size="x-large">mdi-home</v-icon>
        <div>Home</div>
      </nuxt-link>
      <nuxt-link to="/todo" class="nav-item">
        <v-icon>mdi-bell</v-icon>
        <div>To Do</div>
      </nuxt-link>
      <nuxt-link to="/settings" class="nav-item">
        <v-icon>mdi-cog</v-icon>
        <div>Settings</div>
      </nuxt-link>
    </nav>
    <div id="nav-bottom" class="nav-button-group">
      <nuxt-link to="/settings" class="nav-item">
        <v-icon>mdi-help</v-icon>
        <div>Guides</div>
      </nuxt-link>
      <nuxt-link to="/settings" class="nav-item">
        <v-icon>mdi-logout</v-icon>
        <div>Logout</div>
      </nuxt-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
#sidebar-frame {
  width: 250px;
  height: 100vh;
  background: #1d2630;
  border-top-right-radius: 60px;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;
  box-shadow: 5px 0 10px rgba(0, 0, 0, 0.4);
  font-family: "Zen Maru Gothic", "Klee One", "Note Color Emoji", sans-serif;

  hr {
    border: 1px solid white;
    border-radius: 1px;
    width: 170px;
    margin: 12px auto;
  }
}

#mypage-logo {
  width: 150px;
  object-fit: contain;
  margin: 50px 20px 20px 20px;

  img {
    object-fit: contain;
    width: 150px;
  }
}

#sidebar-profile {
  width: 170px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  transition: all 0.2s ease-in-out;
  border-radius: 25px;

  .name {
    font-size: 20px;
    margin-top: 20px;
    font-weight: bold;
  }

  &:hover {
    background: #2c3a4a;
    scale: 1.05;
  }
}

#nav-frame {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bold;
}

#nav-bottom {
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  padding-bottom: 20px;
}

.nav-button-group {
  > a {
    transition: all 0.2s ease-in-out;
    display: flex;
    align-items: center;
    margin: 3px 25px;
    width: 170px;
    color: white;
    text-decoration: none;
    padding: 8px 15px;
    border-radius: 50px;

    > i {
      margin-right: 10px;
      width: 30px;
    }

    > div {
      width: calc(100% - 30px);
      text-align: center;
      font-size: 20px;
    }
  }

  > a:hover {
    background: #2c3a47;
    scale: 1.05;
  }
}
</style>
