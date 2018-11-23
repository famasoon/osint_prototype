import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'

Vue.use(Vuex)

const Index = {
  namespaced: true,
  mutations: {},
  actions: {
    domainLookup ({ commit, state, rootState }) {
      router.push('info/' + rootState.domainName)
    }
  }
}

const HostLookup = {
  namespaced: true,
  state: {
    domainName: '',
    addrs: []
  },
  mutations: {
    setDomainName (state, domainName) {
      state.domainName = domainName
    },
    setAddrs (state, addrs) {
      console.log(addrs)
      state.addrs = addrs
    }
  },
  actions: {
    hostLookup ({ commit, state, rootState }) {
      commit('setDomainName', rootState.domainName)
      fetch('http://localhost:1323/api/lookup/' + rootState.domainName, {
        mode: 'cors'
      })
        .then(res => res.json())
        .then(res => {
          commit('setAddrs', res.Addrs)
        })
    }
  },
  getters: {
    getDomain (state, getters) {
      return state.domainName
    },
    getHostInfo (state, getters) {
      return state.addrs
    }
  }
}

const NameServers = {
  namespaced: true,
  state: {
    domainName: '',
    servers: []
  },
  mutations: {
    setDomainName (state, domainName) {
      state.domainName = domainName
    },
    setServers (state, servers) {
      console.log(servers)
      state.servers = servers
    }
  },
  actions: {
    nsLookup ({ commit, state, rootState }) {
      commit('setDomainName', rootState.domainName)
      fetch('http://localhost:1323/api/ns/' + rootState.domainName, {
        mode: 'cors'
      })
        .then(res => res.json())
        .then(res => {
          commit('setServers', res.Servers)
        })
    }
  },
  getters: {
    getDomain (state, getters) {
      return state.domainName
    },
    getNameServers (state, getters) {
      return state.servers
    }
  }
}

const Whois = {
  namespaced: true,
  state: {
    domainName: 'domain',
    detail: 'loading ...'
  },
  mutations: {
    setWhoisInfo (state, res) {
      console.log(res)
      state.detail = res.Result
    },
    setDomainName (state, domainName) {
      state.domainName = domainName
    }
  },
  actions: {
    whoisLookup ({ commit, state, rootState }) {
      commit('setDomainName', rootState.domainName)
      fetch('http://localhost:1323/api/whois/' + rootState.domainName, {
        mode: 'cors'
      })
        .then(res => res.json())
        .then(data => {
          commit('setWhoisInfo', data)
        })
    }
  },
  getters: {
    getDomain (state, getters) {
      return state.domainName
    },
    getWhoisInfo (state, getters) {
      return state.detail
    }
  }
}

export default new Vuex.Store({
  state: {
    domainName: ''
  },
  mutations: {
    setDomainName (state, domainName) {
      console.log(domainName)
      state.domainName = domainName
    }
  },
  modules: {
    Index,
    Whois,
    HostLookup,
    NameServers
  }
})
