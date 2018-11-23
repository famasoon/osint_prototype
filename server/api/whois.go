package api

import (
	"github.com/undiabler/golang-whois"
)

type WhoisResult struct {
	Domain string `json:domain`
	Result string `json:result`
}

func GetWhois(domain string) WhoisResult {
	result, err := whois.GetWhois(domain)
	if err != nil {
		result = err.Error()
	}

	return WhoisResult{
		Domain: domain,
		Result: result,
	}
}
