<template>
  <section class="section--center mdl-grid mdl-shadow--2dp">
    <div class="mdl-card mdl-cell mdl-cell--12-col mdl-color--grey-900">
      <div class="mdl-card__supporting-text mdl-grid mdl-color-text--grey-400">
        <h3>NameServers</h3>
        <ul class="mdl-list">
          <li class="mdl-list__item mdl-color-text--grey-400" v-for="server in servers" :key="server">
            <span class="mdl-list__item-primary-content">
              {{ server }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'namesSrvers',
  beforeMount () {
    this.nsLookup()
  },
  computed: mapGetters('NameServers', {
    'domainName': 'getDomain',
    'servers': 'getNameServers'
  }),
  methods: mapActions('NameServers', {
    'nsLookup': 'nsLookup'
  })
}
</script>
