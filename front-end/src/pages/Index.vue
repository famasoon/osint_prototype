<template>
  <div>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--2-col mdl-cell--hide-tablet mdl-cell--hide-phone"></div>
      <div class="content mdl-color-text--grey-200 mdl-cell mdl-cell--8-col">
        <h3>Osint.net</h3>
        <p>
          Osint.net はサーバ調査用のサイトです
        </p>
        <div class=" mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input" type="text" v-model="inputDomain">
          <label class="mdl-color-text--grey-700 mdl-textfield__label">domain</label>
        </div>
        <button class="mdl-button mdl-js-button mdl-button--icon" v-on:click="domainLookup">
          <i class="material-icons">search</i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'app',
  computed: {
    inputDomain: {
      get () {
        return this.$store.state.inputDomain
      },
      set (value) {
        this.$store.commit('setDomainName', value)
      }
    }
  },
  methods: mapActions('Index', {
    'domainLookup': 'domainLookup'
  })
}
</script>
