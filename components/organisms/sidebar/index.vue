<template>
  <div id="sidebar-frame">
    <nuxt-link id="mypage-logo">
      <img src="/mypage-logo.webp" alt="logo" />
    </nuxt-link>
    <nuxt-link id="small-sidebar-logo">
      <img src="/white-ynufes-cube.svg" alt="logo" />
    </nuxt-link>
    <button id="sidebar-profile">
      <img src="/test-avatar.jpg" class="user-avatar" />
      <span class="username"><span>横国あ</span> <span>太郎ああ</span></span>
    </button>
    <hr />
    <nav id="nav-frame" class="nav-button-group">
      <nuxt-link to="/" class="nav-item">
        <v-icon size="x-large">mdi-home</v-icon>
        <div>Home</div>
      </nuxt-link>
      <nuxt-link to="/todo" class="nav-item">
        <v-icon>mdi-bell</v-icon>
        <div>ToDo</div>
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
  position: fixed;
  width: 180px;
  height: 100svh;
  background: #1d2630;
  border-top-right-radius: 60px;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;
  box-shadow: 5px 0 10px rgba(0, 0, 0, 0.4);
  font-family: 'Zen Maru Gothic', 'Noto Color Emoji', sans-serif;
  transition-property: width, border-radius;
  transition-duration: 1s;

  hr {
    border: 1px solid white;
    border-radius: 1px;
    width: 68%;
    margin: 12px auto;
    opacity: 0.3;
  }
}

#mypage-logo {
  width: 70%;
  object-fit: contain;
  margin: 50px 20px 20px 20px;

  img {
    object-fit: contain;
    width: 100%;
  }
}

#small-sidebar-logo {
  display: none;
}

#sidebar-profile {
  width: 170px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  transition: all 0.2s ease-in-out;
  border-radius: 50px;

  .user-avatar {
    width: 80px;
    height: 80px;
    border-radius: 100%;
  }

  .username {
    font-size: 1rem;
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
}

#nav-bottom {
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
}

.nav-button-group {
  > a {
    transition: all 0.2s ease-in-out;
    display: flex;
    align-items: center;
    margin: 3px 0;
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
      font-size: 1rem;
      font-weight: bold;
    }
  }

  > a:hover {
    background: #2c3a47;
    scale: 1.05;
  }
}
/* レスポンシブデザイン ------------------------*/
@media ((max-aspect-ratio: 3/4) and (max-width: 1024px)) or (max-height: 576px) {
  /* (画面比が縦長かつ画面幅が768px以下)または画面の高さが576pxのとき */
  #sidebar-frame {
    display: none;
  }
}
@media (min-aspect-ratio: 3/4) and (max-width: 1024px) {
  #sidebar-frame {
    width: 80px;
    border-top-right-radius: 0;

    .username,
    #mypage-logo {
      display: none;
    }
  }

  #small-sidebar-logo {
    display: block;
    width: 64px;
    height: 64px;
    padding: 16px;
    margin: 8px auto;
    border-radius: 8px;
    transition: background 0.2s;

    &:hover {
      background: #2c3a47;
    }
  }

  #sidebar-profile {
    width: 64px;
    height: 64px;
    .user-avatar {
      width: 48px;
      height: 48px;
      border-radius: 100%;
      padding: 0;
      margin: 0;
    }
  }

  .nav-button-group {
    width: 64px;

    > a {
      flex-direction: column;
      width: 64px;
      height: 64px;
      padding: 8px 0;

      > i {
        width: 100%;
        margin: 0 auto;
      }

      > div {
        width: 100%;
        text-align: center;
        font-size: small;
        text-align: center;
      }
    }

    > a:hover {
      background: #2c3a47;
      scale: 1.05;
    }
  }
}
</style>
