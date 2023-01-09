<script lang="ts">
definePageMeta({
  layout: false,
});
export default {
  data: () => ({
    valid: false,
    firstName: "",
    lastName: "",
    firstNameKana: "",
    lastNameKana: "",
    email: "",
    gender: "",
    studentID: "",
  }),
};
</script>

<template>
  <v-container class="mx-auto">
    <h1 class="welcome-title mb-10">初期情報登録画面</h1>
    <v-row
      ><v-col col="12" sm="12" md="12" lg="10">
        <v-card elevation="10">
          <v-form v-model="valid">
            <v-container>
              <v-card-title>お名前</v-card-title>
              <v-row>
                <v-col cols="12" xs="12" sm="6" md="6" lg="6">
                  <v-text-field
                    v-model="lastName"
                    label="名字"
                    placeholder="市川"
                    type="text"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="6" md="6" lg="6">
                  <v-text-field
                    v-model="firstName"
                    label="名前"
                    placeholder="詩恩"
                    type="text"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-card-title>フリガナ</v-card-title>
              <v-row>
                <v-col cols="12" xs="12" sm="6" md="6" lg="6">
                  <v-text-field
                    v-model="lastNameKana"
                    label="ミョウジ"
                    placeholder="イチカワ"
                    type="text"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="6" md="6" lg="6">
                  <v-text-field
                    v-model="firstNameKana"
                    label="ナマエ"
                    placeholder="シオン"
                    type="text"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-card-title>メールアドレス</v-card-title>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="email"
                    label="メールアドレス"
                    placeholder="hoge@gmail.com"
                    type="email"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-card-title>性別</v-card-title>
              <v-row>
                <v-col cols="12">
                  <v-radio-group v-model="gender" inline required>
                    <v-radio label="女性" value="1"></v-radio>
                    <v-radio label="男性" value="0"></v-radio>
                    <v-radio label="回答しない" value="2"></v-radio>
                  </v-radio-group>
                </v-col>
              </v-row>
              <v-card-title>学籍番号</v-card-title>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="studentID"
                    label="７桁の半角数字を入力してください"
                    placeholder="1234567"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" xl="12" sm="3" md="2" lg="2" class="mx-auto">
                  <v-btn size="large" type="submit" color="success" block
                    >確認</v-btn
                  >
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
