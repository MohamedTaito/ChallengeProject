<template>
  <v-container>
    <v-row class="text-center px-5 py-5 justify-content-center">
      <v-col cols="12" xl="8" lg="8" md="8" sm="12">
        <div class="holder">
          <v-col cols="12" class="thanks"> Thank you ! </v-col>
          <v-col cols="12" class="">
            <img src="../assets/imgs/thanks.png" />
          </v-col>
          <v-col cols="12" class="thanking-text pb-10">
            <p>
              You have succesefully submited your subscription request. WeStore
              team will reach out to you shortly.
              <br />
            </p>
            <p>
              If you have any urgent requests feel free to contact us at
              <br />
              <span>+971 58 545 4161</span>
            </p>
          </v-col>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.holder {
  border: 1px solid #f0f0f5;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  width: 100%;
  padding: 50px;
}
.justify-content-center {
  justify-content: center;
}
.thanks {
  font-family: sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 72px;
  line-height: 87px;
  color: #0c1922;
}
.thanking-text p {
  font-family: sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 29px;
  color: #0c1922;
}
.thanking-text p span {
  color: #f12763;
}
@media only screen and (max-width: 960px) {
  .holder {
    padding: 0;
  }
  .thanks {
    font-size: 50px;
    line-height: 60px;
  }
  .thanking-text p {
    font-size: 20px;
    line-height: 25px;
  }
}
</style>
