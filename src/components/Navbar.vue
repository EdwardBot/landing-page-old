<template>
  <div
    class="navbar"
    :class="{ navbarActive: showDraver, navbarHiding: hiding }"
  >
    <div class="branding" @click="clickBtn(0)">
      <img
        src="https://cdn.discordapp.com/avatars/747157043466600477/d6139e59d1d99c29f58f1422930d616d.png?size=128"
        alt="logo"
        class="brandLogo"
      >
      <p class="brandName">
        EdwardBot
      </p>
    </div>
    <v-spacer :v-if="!showDrawer" />
    <div class="btnGroup" :v-if="showDrawer">
      <v-btn elevation="0" @click="clickBtn(0)">
        Főoldal
      </v-btn>
      <v-btn elevation="0" @click="clickBtn(1)">
        Funkciók
      </v-btn>
      <v-btn elevation="0" @click="clickBtn(2)">
        GYIK
      </v-btn>

      <v-btn
        elevation="0"
        @click="clickBtn(4)"
      >
        Rólunk
      </v-btn>
    </div>
    <div class="showNav">
      <v-btn elevation="0" @click="toggleBtns()">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Navbar',
  data () {
    return {
      mobileNavOpen: false,
      hiding: false,
      width: window.innerWidth,
      showUserDropdow: false
    }
  },
  computed: {
    showDraver (): boolean {
      if (this.width <= 700) { return this.mobileNavOpen }
      return true
    }
  },
  mounted () {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
    })
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    toggleBtns () {
      this.$data.mobileNavOpen = !this.$data.mobileNavOpen
      if (!this.mobileNavOpen) {
        this.hiding = true
        setTimeout(() => (this.hiding = false), 500)
      }
    },
    clickBtn (id: number) {
      switch (id) {
        case 0:
          this.$vuetify.goTo(0, {
            duration: 500,
            easing: 'easeInOutCubic'
          })
          break
        case 1:
          this.$vuetify.goTo(document.getElementById("bf") as HTMLElement, {
            duration: 500,
            easing: 'easeInOutCubic'
          })
          break
        case 2:
          this.$vuetify.goTo(document.getElementById("bk") as HTMLElement, {
            duration: 1000,
            easing: 'easeInOutCubic'
          })
          break
        case 4:
          this.$vuetify.goTo(document.getElementById("br") as HTMLElement, {
            duration: 1000,
            easing: 'easeInOutCubic'
          })
          break
      }
      this.toggleBtns()
    },
    onResize () {
      this.width = window.innerWidth
    }
  }
})
</script>

<style lang="scss">
.navbar {
  position: sticky;
  top: 0px;
  background-color: #10ac84;
  height: 50px;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  max-height: 290px;
  overflow: hidden;
  .branding {
    display: inline-flex;
    flex-direction: row;
    cursor: pointer;
    margin-right: -40px;
    .brandLogo {
      display: inline-flex;
      width: 50px;
      height: 50px;
    }
    .brandName {
      display: inline-flex;
      color: #fff;
      font-weight: 800;
      font-size: 25px;
      margin-top: 8px;
      margin-left: 10px;
      padding: 0px;
    }
  }
  .btnGroup {
    display: inline-flex;
    justify-content: center;
    button {
      margin-top: 6px;
      margin-right: 5px;
      color: #fff;
      background-color: #10ac84 !important;
    }
    .cart {
      .badge {
        z-index: 100;
        p {
          z-index: 200;
        }
      }
    }
  }
  .showNav {
    button {
      background-color: #10ac84 !important;
      color: #fff;
      margin-top: 6px;
      margin-right: 5px;
    }
    display: none;
    margin-left: -10px;
  }
}

@keyframes showNav {
  from {
    height: 50px;
  }

  to {
    height: 220px;
  }
}

@keyframes hideNav {
  from {
    height: 220px;
  }

  to {
    height: 50px;
  }
}

@media screen and (max-width: 700px) {
  .btnGroup {
    flex-direction: column;
    margin-top: 100px;
    margin-right: 20%;
    flex-grow: 3;
    justify-content: flex-end !important;
    height: 110px;
    z-index: 999;
  }

  .navbarHiding {
    animation-name: hideNav;
    animation-duration: 0.5s;
  }

  .navbarActive {
    height: 220px;
    animation-name: showNav;
    animation-duration: 0.5s;
  }
  .showNav {
    display: block !important;
  }
}
</style>
