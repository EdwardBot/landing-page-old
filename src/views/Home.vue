<template>
  <div class="home">
    <div class="title">
      <div class="icon">
        <img
          src="https://cdn.discordapp.com/avatars/747157043466600477/d6139e59d1d99c29f58f1422930d616d.png"
          alt="Edward"
        />
      </div>
      <div class="text">
        <h1>EdwardBot</h1>
        <h4>
          Egy új magyar discord bot, forradalmi funkciókkal. Teljesen nyílt
          forráskódú és ingyenes.
        </h4>
        <div class="btns">
          <v-btn color="#1dd1a1" @click="click(0)"
            ><v-icon>mdi-account-multiple-plus</v-icon>Meghívás</v-btn
          >
          <div class="space"></div>
          <v-btn color="#1dd1a1" @click="click(1)"
            ><v-icon>mdi-cog-outline</v-icon>Kezelőfetület</v-btn
          >
        </div>
      </div>
    </div>
    <img class="wave-top" src="../assets/wave_top.svg" alt="wave" />
    <div class="features" id="bf">
      <h1>Miért válassz minket?</h1>
      <h4>
        Nyílván sok más botot ismersz és nem érted miért kéne neked pont ezt
        használnod, ha lejjebb tekersz, megtudod.
      </h4>
      <div
        class="cards-container"
        v-intersect="{
          handler: onIntersect,
          options: {
            threshold: [0, 0.8, 1.0],
          },
        }"
      >
        <v-card
          style="--order: 0"
          v-bind:class="{
            featAnim: featuresSeen && !featFallen,
            inv: !featFallen,
          }"
        >
          <v-icon x-large>mdi-open-source-initiative</v-icon>
          <h1 class="card-title">Nyílt kód</h1>
          <p>
            Ha szeretnél egy funkciót és tudsz programozni, akár te is
            megcsinálhatod. Ha pedig nem bízol benne, megnézheted a
            forráskódját.
          </p>
        </v-card>
        <v-card
          style="--order: 1"
          v-bind:class="{
            featAnim: featuresSeen && !featFallen,
            inv: !featFallen,
          }"
        >
          <v-icon x-large>mdi-cog-outline</v-icon>
          <h1 class="card-title">Kezelőfelület</h1>
          <p>
            Mindent személyre szabhatsz a kezelőfelületünkön, a jövőben pedig
            saját parancsokat is hozzáadhatsz a guildedhez.
          </p>
        </v-card>
        <v-card
          style="--order: 2"
          v-bind:class="{
            featAnim: featuresSeen && !featFallen,
            inv: !featFallen,
          }"
        >
          <v-icon x-large>mdi-fast-forward-outline</v-icon>
          <h1 class="card-title">Gyors</h1>
          <p>
            Minig ügyelünk arra, hogy a bot a lehető legjobban legyen
            optimalizálva és a szervergép ne legyen túlterhelve.
          </p>
        </v-card>
      </div>
      <h2>
        Ez mind szép és jó, de joggal lehetnek kérdéseid, amennyiben vannak tekerj lejjebb.
      </h2>
    </div>
    <div class="wave-down">
      <img src="../assets/wave_down.svg" alt="wave" />
    </div>
    <div class="faq" id="bk">
      <h1>Gyakra ismételt kérdések <v-icon>mdi-help-circle-outline</v-icon></h1>
      <div class="qContainer">
        <div class="questions">
          <v-item-group class="q-row" v-model="selectedQuestion" mandatory>
            <v-container :key="q.name" v-for="q in questions">
              <v-item v-slot="{ active, toggle }" class="question">
                <v-card
                  class="q-card"
                  :color="active ? '#1dd1a1' : ''"
                  @click="toggle"
                >
                  <v-ripple>
                    <v-icon>{{ q.icon }}</v-icon>
                    {{ q.name }}
                  </v-ripple>
                </v-card>
              </v-item>
            </v-container>
          </v-item-group>
        </div>
        <div class="space"></div>
        <v-card class="answer">{{ answers[selectedQuestion] }}</v-card>
      </div>
    </div>
    <div class="about" id="br">
      <h1>Rólunk</h1>
      <div class="team">
        <div class="user">
          <img
            src="https://cdn.discordapp.com/avatars/336233673911173120/b7f4d97ea939cbb5b7c293feb86fd799.png"
            alt="Bendi profilképe"
          />
          <h1>Bendi#2924</h1>
          <h4>Fejlesztő és alapító</h4>
        </div>
        <div class="user">
          <img
            src="https://cdn.discordapp.com/avatars/454968285373399040/6b672e3ad90725f174ef6f5733fc6f28.png"
            alt="MDavid profilképe"
          />
          <h1>BTW_MDAVID#9813</h1>
          <h4>Támogató és BFF</h4>
        </div>
        <div class="user">
          <img
            src="https://cdn.discordapp.com/avatars/747157043466600477/d6139e59d1d99c29f58f1422930d616d.png"
            alt="Edward profilképe"
          />
          <h1>EdwardBot#9511</h1>
          <h4>Személyi csicska</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Home",
  components: {},
  data: () => ({
    featuresSeen: false,
    featFallen: false,
    init: false,
    questions: [
      {
        name: "Mitől biztosnágos a bot?",
        icon: "mdi-shield-key-outline",
      },
      {
        name: "Mennyire gyors a bot?",
        icon: "mdi-flash-outline",
      },
      {
        name: "Tényleg hasznos a bot?",
        icon: "mdi-star-circle-outline",
      },
      {
        name: "Nem működik valami, mit tegyek?",
        icon: "mdi-lifebuoy",
      },
    ],
    answers: [
      "A token csak a szervergépen van meg, az adatbázis pedig ip védett.",
      "A lehető legmodernebb techológiák használatával készült, és megpróbáljuk a tudásunkhoz mérten optimalizálni.",
      "Sok funkció van benne alapból, és folyamatosan fejlesztjük.",
      "Csatlakozz a discordunkra, hogy segítséget kérhess. Meghívó: https://dc.edwardbot.tk",
    ],
    selectedQuestion: 0,
  }),
  methods: {
    onIntersect() {
      if (!this.init) {
        this.init = true;
        return;
      }
      if (!this.featuresSeen) {
        this.featuresSeen = true;
        setTimeout(() => {
          this.featFallen = true;
        }, 500);
      }
    },
    click(id: number) {
      switch (id) {
        case 0:
          window.open(
            `https://discord.com/api/oauth2/authorize?client_id=747157043466600477&permissions=8&scope=bot%20applications.commands`,
            `_blank`
          );
          break;
        case 1:
          window.location.assign(`https://dashboard.edwardbot.tk`);
      }
    },
  },
});
</script>

<style lang="scss">
.q-card {
  width: clamp(150px, 30vw, 300px);
  padding: 5px;
}

.q-row {
  display: flex;
  flex-direction: column;
  height: clamp(30px, 3vw, 35px);
}

.question {
  padding: 5px;
}

.featAnim {
  animation-name: down;
  animation-duration: 500ms;
  animation-iteration-count: 1;
  animation-delay: calc(var(--order) * 200ms);
  animation-fill-mode: forwards;
}

.inv {
  opacity: 0;
}

.home {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  .title {
    display: flex;
    flex-direction: row;
    height: clamp(400px, 60vh, 500px);
    align-items: center;
    justify-content: center;
    .icon {
      display: flex;
      margin-left: 150px;
      margin-right: 20px;
      img {
        border-radius: 50%;
        display: flex;
        width: 200px;
        height: 200px;
      }
    }
    .text {
      .btns {
        display: flex;
        flex-direction: row;
        .space {
          width: 5px;
        }
      }
    }
  }
  .wave-top {
    margin: 0px;
    padding: 0px;
    min-height: 21vw;
  }
  .features {
    display: flex;
    margin: 0px;
    background: #1dd1a1;
    height: clamp(500px, 90vh, fit-content);
    flex-direction: column;
    text-align: center;
    padding: 20px;
    padding-top: 50px !important;
    h1 {
      font-size: 3em;
    }
    h4 {
      font-size: 2em;
    }
    .cards-container {
      margin-top: 50px;
      margin-bottom: 30px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      div {
        margin: 10px;
        height: fit-content;
        padding: 15px;
        max-width: 350px;
        display: flex;
        flex-direction: column;
        i {
          margin: 30px;
        }
        transition: all 200ms cubic-bezier(0.83, 0, 0.17, 1) !important;

        &:hover {
          transform: translateY(-15px) !important;
          box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2),
            0px 16px 24px 2px rgba(0, 0, 0, 0.14),
            0px 6px 30px 5px rgba(0, 0, 0, 0.12) !important;
        }
      }
    }
  }
  .wave-down {
    margin: 0px;
    padding: 0px;
    width: 100%;
  }
  .faq {
    display: flex;
    flex-direction: column;
    padding: 20px;
    height: clamp(300px, 45vh, 500px);
    h1 {
      text-align: center;
      margin-bottom: 15px;
      i {
        color: #fff;
      }
    }
    align-items: center;
    .qContainer {
      display: flex;
      flex-direction: row;
      width: fit-content;
      overflow: hidden;
      .questions {
        flex-grow: 10;
      }
      .space {
        flex-grow: 1;
      }
      .answer {
        flex-grow: 10;
        margin-top: 12px;
        height: 212px;
        padding: 10px;
        font-size: 20px;
        width: clamp(300px, 50vw, 600px);
      }
    }
  }
  .about {
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: #1dd1a1;
    height: fit-content;
    text-align: center;
    .team {
      display: flex;
      flex-direction: row;
      justify-content: center;
      .user {
        margin: 20px;
        img {
          border-radius: 50%;
        }
      }
    }
  }
}

@keyframes down {
  from {
    transform: translateY(-15px);
    opacity: 0;
  }

  to {
    transform: translateY(0px);
    opacity: 1;
  }
}

@media screen and (max-width: 800px) {
  .q-card {
    width: 75vw;
  }
  .home {
    .title {
      flex-direction: column !important;
      .icon {
        margin: 0px !important;
      }
      .text {
        margin-top: 20px;
        text-align: center;
        .btns {
          justify-content: center;
        }
      }
    }
    .features {
      .cards-container {
        align-items: center;
        flex-direction: column !important;
      }
    }
    .faq {
      height: fit-content !important;
      .qContainer {
        flex-direction: column !important;
        height: clamp(630px, 54vh, 800px);
        .questions {
          height: fit-content !important;
          width: 75vw;
        }
      }
      .answer {
        width: 71vw !important;
        margin: 12px;
      }
    }
    .about {
      .team {
        flex-direction: column !important;
      }
    }
  }
}
</style>
