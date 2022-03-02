<template>
  <v-container>
    <v-row class="text-center px-5 py-5" no-gutters>
      <p class="about-text">
        Warehouse space for rent & multi-channel fulfillment with same day
        delivery in Dubai, Abu Dhabi, RAK, Sharjah and Ajman.
      </p>
    </v-row>
    <v-row class="about-row px-5 py-5" no-gutters>
      <v-col class="v-divider-about mb-xs-3 mb-sm-3 mb-md-0" cols="12" md="4">
        <img
          class="about-img mr-md-0 mr-xs-3 mr-sm-3"
          src="../assets/imgs/1-about-img.png"
        />
        <br
          v-if="
            this.$vuetify.breakpoint.md ||
            this.$vuetify.breakpoint.lg ||
            this.$vuetify.breakpoint.xl
          "
        />
        <span class="about-span">No Mony Up Front</span>
      </v-col>
      <v-col
        class="v-divider-about mr-md-0 mb-xs-3 mb-sm-3 mb-md-0"
        cols="12"
        md="4"
      >
        <img
          class="about-img mr-md-0 mr-xs-3 mr-sm-3"
          src="../assets/imgs/2-about-img.png"
        />
        <br
          v-if="
            this.$vuetify.breakpoint.md ||
            this.$vuetify.breakpoint.lg ||
            this.$vuetify.breakpoint.xl
          "
        />
        <span class="about-span">7-Day Free Trail</span>
      </v-col>
      <v-col
        class="v-divider-about mr-md-0 mb-xs-3 mb-sm-3 mb-md-0"
        cols="12"
        md="4"
      >
        <img
          class="about-img mr-md-0 mr-xs-3 mr-sm-3"
          src="../assets/imgs/3-about-img.png"
        />
        <br
          v-if="
            this.$vuetify.breakpoint.md ||
            this.$vuetify.breakpoint.lg ||
            this.$vuetify.breakpoint.xl
          "
        />
        <span class="about-span">Month-To-Month Renewal</span>
      </v-col>
    </v-row>
    <v-row
      class="text-center px-5 py-5 justify-content-center"
      no-gutters
      v-if="
        this.$vuetify.breakpoint.md ||
        this.$vuetify.breakpoint.lg ||
        this.$vuetify.breakpoint.xl
      "
    >
      <v-col
        cols="12"
        md="4"
        lg="3"
        class="px-3 py-4"
        v-for="item in fillData"
        :key="item.name"
      >
        <div class="holder">
          <v-col cols="12" class="text-center py-3">
            <h3 class="card-header">{{ item.name }}</h3>
          </v-col>
          <v-col cols="12" class="text-center py-3">
            <span class="price-text px-1">AED</span>
            <span class="price-number px-1">{{ item.price }}</span>
            <br />
            <span> monthly </span>
          </v-col>
          <v-col cols="12" class="text-center py-3">
            <router-link :to="{ name: 'subscribe', params: { item } }">
              <v-btn elevation="2" class="subscription"
                >Start your FREE trial</v-btn
              >
            </router-link>
          </v-col>
          <v-col cols="12" class="text-center py-3">
            <div v-for="index in item.options" :key="index.attr">
              <v-row>
                <v-col cols="5" class="text-left content-text">
                  <img :src="require(`../assets/imgs/` + index.img)" />
                  {{ index.attr }}
                </v-col>
                <v-col cols="7" class="text-left desc-text">
                  {{ index.value }}
                </v-col>
              </v-row>
              <v-divider class="py-2"></v-divider>
            </div>

            <v-row>
              <v-col cols="5" class="text-left content-text-2 pb-0">
                <img src="../assets/imgs/1-content.png" />
                Storage
              </v-col>
              <v-col cols="7" class="text-left desc-text-2 pb-0">
                5 CBM across UAE
              </v-col>
              <v-col cols="5" class="text-left content-text-2 py-0">
                <img src="../assets/imgs/1-content.png" />
                Storage
              </v-col>
              <v-col cols="7" class="text-left desc-text-2 py-0">
                5 CBM across UAE
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" class="last-desc text-center pt-10">
            Cost can vary based on the fulfillment center location and shipping
            destination, as well as other value-added services.
          </v-col>
        </div>
      </v-col>

      <v-col cols="12" md="4" lg="3" class="px-3 py-4">
        <div class="holder">
          <v-col cols="12" class="text-center pt-3">
            <h3 class="card-header">Custom</h3>
          </v-col>
          <v-col cols="12" class="text-center custm-header-card-text pt-0">
            Create a plan for your B2B and B2C needs.
          </v-col>
          <v-col cols="12" class="pb-3">
            <v-form>
              <v-text-field
                label="Name"
                v-model="name"
                outlined
                dense
              ></v-text-field>
              <v-text-field
                label="Phone"
                v-model="phone"
                outlined
                dense
              ></v-text-field>
              <v-btn @click="checkForm" elevation="2" class="subscription"
                >Start your FREE trial</v-btn
              >
            </v-form>
          </v-col>
          <v-col cols="12" class="py-0">
            <ul>
              <li>Pick & Pack</li>
              <li>Labeling</li>
              <li>Inventory & Reporting</li>
              <li>Handling in and out</li>
              <li>Access to Customer Portal</li>
              <li>Customer support</li>
              <li>Last-mile delivery across UAE</li>
              <li>Cash On Delivery</li>
              <li>Returns</li>
              <li>Customized Packaging</li>
              <li>Kitting</li>
              <li>Product Inbound</li>
            </ul>
          </v-col>
        </div>
      </v-col>
    </v-row>
    <v-row
      class="text-center px-5 py-5 justify-content-center"
      no-gutters
      v-if="this.$vuetify.breakpoint.sm || this.$vuetify.breakpoint.xs"
    >
      <mob-slider />
    </v-row>
  </v-container>
</template>

<script>
import MobSlider from "../components/MobSlider";
export default {
  name: "HelloWorld",
  components: {
    MobSlider,
  },
  data: () => ({
    fillData: [
      {
        name: "standard",
        price: "499",
        options: [
          {
            img: "1-content.png",
            attr: "storage",
            value: "5 CBM across UAE",
          },
          {
            img: "2-content.png",
            attr: "Pick & Pack",
            value: "Up to 60 Orders",
          },
          {
            img: "3-content.png",
            attr: "Labeling",
            value: "Included",
          },
          {
            img: "4-content.png",
            attr: "Inventory & Reporting",
            value: "Included",
          },
        ],
      },
      {
        name: "Advanced",
        price: "1199",
        options: [
          {
            img: "1-content.png",
            attr: "storage",
            value: "10 CBM across UAE",
          },
          {
            img: "2-content.png",
            attr: "Pick & Pack",
            value: "Up to 200 Orders",
          },
          {
            img: "3-content.png",
            attr: "Labeling",
            value: "Included",
          },
          {
            img: "4-content.png",
            attr: "Inventory & Reporting",
            value: "Included",
          },
        ],
      },
      {
        name: "Premium  ",
        price: "2699",
        options: [
          {
            img: "1-content.png",
            attr: "storage",
            value: "20 CBM across UAE",
          },
          {
            img: "2-content.png",
            attr: "Pick & Pack",
            value: "Up to 600 Orders",
          },
          {
            img: "3-content.png",
            attr: "Labeling",
            value: "Included",
          },
          {
            img: "4-content.png",
            attr: "Inventory & Reporting",
            value: "Included",
          },
        ],
      },
    ],
    errors: [],
    name: "",
    phone: "",
  }),
  methods: {
    checkForm(e) {
      if (this.name && this.phone) {
        this.$router.push("/thanks");
      }

      this.errors = [];

      if (!this.name) {
        this.errors.push("Name required.");
      }
      if (!this.phone) {
        this.errors.push("Phone required.");
      }
      e.preventDefault();
    },
  },
};
</script>
<style scoped>
.about-text {
  font-family: sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
  text-align: center;
  color: #000000;
}
.about-img {
  cursor: pointer;
  padding: 0 10px 0 0;
}
.about-span {
  font-family: sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  color: #f12763;
  vertical-align: super;
}

@media only screen and (min-width: 960px) {
  .about-row {
    text-align: center;
  }
  .about-text {
    font-family: sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 54px;
    text-align: center;
    color: #000000;
  }
  .v-divider-about {
    border-right: 1px solid #7b8795;
  }
  .about-row div:last-child {
    border-right: none;
  }
  .holder {
    min-height: 560px;
    max-height: 560px;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-left: 12px solid #d3008a;
    border-radius: 20px 0px;
  }
  .card-header {
    font-family: sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
    color: #f12763;
  }
  .price-number {
    font-family: sans-serif;
    font-style: italic;
    font-weight: 800;
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    color: #000000;
  }
  .price-text {
    font-family: sans-serif;
    font-style: bold;
    font-weight: 500;
    font-size: 15px;
    line-height: 20px;
    text-align: center;
    color: #000000;
  }
  .subscription {
    background-color: #f12763 !important;
    border-radius: 3px;
    color: #ffffff;
  }
  .desc-text {
    font-family: sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    color: #000000;
  }
  .content-text {
    font-family: sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 21px;
    color: #000000;
  }
  .desc-text-2 {
    font-family: sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    color: #000000;
  }
  .content-text-2 {
    font-family: sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    color: #000000;
  }
  .last-desc {
    font-family: sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 9px;
    line-height: 10px;
    color: #000000;
  }
  .custm-header-card-text {
    font-family: sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 15px;
    color: #000000;
  }
  ul {
    list-style-image: url("../assets/imgs/check.png");
    text-align: left;
  }
  ul li {
    font-family: sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    color: #000000;
  }
  a {
    text-decoration: none;
  }
}
</style>
