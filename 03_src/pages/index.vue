<template>
  <v-container>
    <validationObserver ref="observer" v-slot="{invalid}">
      <v-form @submit.prevent="login">
        <v-row>
          <v-col cols="12">
            <ValidationProvider
              v-slot="{errors}"
              name="ユーザー名"
              rules="required">
              <v-text-field
                v-model="username"
                :error-messages="errors"
                label="ユーザー名"/>
            </ValidationProvider>
          </v-col>
        </v-row>
        <v-row align-content="center">
          <v-col cols="12" align="center">
            <ValidationProvider
              v-slot="{errors}"
              name="パスワード"
              rules="required">
              <v-text-field
                v-model="password"
                :error-messages="errors"
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show ? 'text' : 'password'"
                label="パスワード"
                @click:append="show = !show" />
              </ValidationProvider>
          </v-col>
        </v-row>
        <v-row>
          <v-spacer />
          <v-col cols="3">
            <v-btn
              type="submit"
              :disabled="invalid"
              color="primary"
              class="button"
            >ログイン</v-btn>
          </v-col>
          <v-spacer />
        </v-row>
      </v-form>
    </validationObserver>
  </v-container>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'beforeLogin',
  data () {
    return {
      username: '',
      password: '',
      show: false
    }
  },
  methods: {
    login() {
      this.$refs.observer.validate();
    }
  }
}
</script>

<style scoped>
@import '@/assets/common.css';

.col {
  margin-top: 20px;
}

</style>