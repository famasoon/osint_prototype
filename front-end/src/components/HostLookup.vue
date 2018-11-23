<template>
  <section class="section--center mdl-grid mdl-shadow--2dp">
    <div class="mdl-card mdl-cell mdl-cell--12-col mdl-color--grey-900">
      <div class="mdl-card__supporting-text mdl-grid mdl-color-text--grey-400">
        <h3>Host Address {{ domainName }}</h3>
        <ul class="mdl-list">
          <li class="mdl-list__item mdl-color-text--grey-400" v-for="addr in addrs" :key="addr">
            <span class="mdl-list__item-primary-content">
              {{ addr }}
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
  name: 'hostlookup',
  beforeMount () {
    this.hostLookup()
  },
  computed: mapGetters('HostLookup', {
    'domainName': 'getDomain',
    'addrs': 'getHostInfo'
  }),
  methods: mapActions('HostLookup', {
    'hostLookup': 'hostLookup'
  })
}
</script>
