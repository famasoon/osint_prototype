<template>
  <section class="section--center mdl-grid mdl-shadow--2dp">
    <div class="mdl-card mdl-cell mdl-cell--12-col mdl-color--grey-900">
      <div class="mdl-card__supporting-text mdl-grid mdl-color-text--grey-400">
        <h3>Whois {{ domainName }}</h3>
        <div>
          <pre>{{ detail }}</pre>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'whois',
  beforeMount () {
    this.whoisLookup()
  },
  computed: mapGetters('Whois', {
    'domainName': 'getDomain',
    'detail': 'getWhoisInfo'
  }),
  methods: mapActions('Whois', {
    'whoisLookup': 'whoisLookup'
  })
}
</script>
