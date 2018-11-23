<template>
  <div>
    <div class="mdl-grid">
      <whois></whois>
      <host-lookup></host-lookup>
      <name-servers></name-servers>
    </div>
  </div>
</template>

<script>
import Whois from '@/components/Whois'
import HostLookup from '@/components/HostLookup'
import NameServers from '@/components/NameServers'

export default {
  components: {
    Whois,
    HostLookup,
    NameServers
  }
}
</script>

<style>
section.section--center {
  width: 860px;
  max-width: 100%;
} 
</style>
