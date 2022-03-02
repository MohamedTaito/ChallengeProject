<template>
  <v-container>
    <v-row class="text-center px-5 py-5" no-gutters>
      <v-col cols="12">
        <p class="about-text">
          Your Warehousing & Fulfillment Subscription Plan
        </p>
      </v-col>
      <v-col cols="12">
        <p class="about-text-red">No Credit Card required</p>
      </v-col>
    </v-row>
    <v-row class="text-center px-5 py-5" no-gutters>
      <v-col
        cols="12"
        xl="6"
        lg="6"
        md="6"
        sm="12"
        xs="12"
        class="text-center px-5"
      >
        <div class="holder">
          <v-col cols="12" class="text-right py-4">
            <router-link to="/">
              <img alt="Site logo" src="../assets/imgs/sublogo.png" />
            </router-link>
          </v-col>
          <v-col cols="12" class="text-left py-4 pb-10 pl-10">
            <p class="invoic">Invoice</p>
          </v-col>
          <v-col cols="12" class="text-left py-4 pb-10 pl-10">
            <p class="powered">Powered by:</p>
            <p class="powered-2">WeStore Technology Limted</p>
            <br />
            <p class="powered">Powered by:</p>
            <p class="powered-2">123456</p>
          </v-col>
          <v-col cols="12">
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Service</th>
                    <th class="text-center">Quantity</th>
                    <th class="text-center">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="x in $route.params.item.options" :key="x.attr">
                    <td>{{ x.attr }}</td>
                    <td>{{ x.value }}</td>
                    <td>-</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-col>
          <v-col col="12" class="text-right order">
            Warehouse and Fulfillment services:
            {{ $route.params.item.price }} AED
            <br />
            Vat: 5%
            <br />
            Total: {{ this.vatt }} AED
          </v-col>
          <v-col cols="12" class="text-left py-10">
            <p class="add-value">Additional Value Needed Services</p>
            <ul class="values">
              <li>Last-mile delivery</li>
              <li>cash on delivery</li>
              <li>Returns</li>
            </ul>
            <ul class="values">
              <li>Customized Packing</li>
              <li>Transporting</li>
            </ul>
          </v-col>
        </div>
      </v-col>
      <v-col
        cols="12"
        xl="6"
        lg="6"
        md="6"
        sm="12"
        xs="12"
        class="text-center px-5 form-row"
      >
        <div class="holder-form py-10 px-5">
          <v-col cols="12" class="text-center pt-3">
            <h3 class="form-header">Start your 7-Day FREE trial</h3>
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
                label="Email"
                v-model="email"
                outlined
                dense
              ></v-text-field>
              <v-text-field
                label="Phone"
                v-model="phone"
                outlined
                dense
              ></v-text-field>
              <v-checkbox label="I agree to the Terms of Service "></v-checkbox>
              <v-btn @click="checkForm" elevation="2" class="subscription"
                >Submit</v-btn
              >
            </v-form>
          </v-col>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    errors: [],
    name: "",
    phone: "",
    email: "",
    vatt: "",
  }),
  mounted() {
    this.getTotal();
  },
  methods: {
    getTotal() {
      let vat = 0.05;
      let subtotal = this.$route.params.item.price * vat;
      let total = parseInt(this.$route.params.item.price) + parseInt(subtotal);
      this.vatt = total;
    },
    checkForm(e) {
      if (this.name && this.phone && this.email) {
        this.$router.push("/thanks");
      }

      this.errors = [];

      if (!this.name) {
        this.errors.push("Name required.");
      }
      if (!this.phone) {
        this.errors.push("Phone required.");
      }
      if (!this.email) {
        this.errors.push("email required.");
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
.about-text-red {
  font-family: sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
  text-align: center;
  color: #f12763;
}
.holder {
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.invoic {
  font-family: sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  color: #f12763;
}
.powered {
  font-family: sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 0;
  color: #0c1922;
  display: table-cell;
  padding: 4px;
}
.powered-2 {
  font-family: sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 0;
  color: #0c1922;
  display: table-cell;
  padding: 4px;
}
tr:nth-child(even) td:first-child {
  background-color: #f2f2f2;
}
tr:nth-child(n) td:first-child {
  text-align: left;
}
td:nth-child(1) {
  border-right: 1px solid #ddd;
}
td,
tr {
  border-bottom: unset !important;
}
.add-value {
  font-family: sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  color: #0c1922;
}
.values {
  display: inline-grid;
  padding: 0 30px;
}
.holder-form {
  background: #ffffff;
  border: 1px solid #0c1922;
  box-sizing: border-box;
  border-radius: 6px;
}
.form-header {
  font-family: sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  color: #f12763;
}
.subscription {
  background: #f12763 !important;
  border-radius: 3px;
  color: #ffffff;
  width: 100%;
  font-family: sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  padding: 30px 16px !important;
}
.form-row {
  padding-top: 12% !important;
}
.order {
  font-family: sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 26px;
  color: #000000;
}

@media only screen and (max-width: 960px) {
  .powered,
  .powered-2 {
    display: inherit;
  }
}
</style>
