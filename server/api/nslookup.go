package api

import (
	"net"
)

type ResolveAddrs struct {
	Domain string   `json: "domain"`
	Addrs  []string `json: "addrs"`
}

type ReverseHosts struct {
	Addr  string   `json: "addrs"`
	Hosts []string `json: "hosts"`
}

type NameServers struct {
	Name    string   `json: "name"`
	Servers []string `json: "servers"`
}

func ResolveHosts(domain string) ResolveAddrs {
	addrs, err := net.LookupHost(domain)
	if err != nil {
		addrs = append(addrs, "not found")
	}

	return ResolveAddrs{
		Domain: domain,
		Addrs:  addrs,
	}
}

func ReverseDNS(addr string) ReverseHosts {
	hosts, err := net.LookupAddr(addr)
	if err != nil {
		hosts = append(hosts, "not found")
	}

	return ReverseHosts{
		Addr:  addr,
		Hosts: hosts,
	}
}

func EnumNameServers(name string) NameServers {
	var servers []string
	result, err := net.LookupNS(name)
	if err != nil {
		servers = append(servers, "not found")
		return NameServers{
			Name:    name,
			Servers: servers,
		}
	}

	for _, record := range result {
		servers = append(servers, record.Host)
	}

	return NameServers{
		Name:    name,
		Servers: servers,
	}
}
