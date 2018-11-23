package main

import (
	"net/http"

	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"

	"./api"
)

func main() {
	e := echo.New()
	e.Use(middleware.CORS())
	e.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "Hello, world!")
	})

	e.GET("/api/whois/:domain", func(c echo.Context) error {
		domain := c.Param("domain")
		result := api.GetWhois(domain)
		return c.JSON(http.StatusOK, result)
	})

	e.GET("/api/lookup/:domain", func(c echo.Context) error {
		domain := c.Param("domain")
		result := api.ResolveHosts(domain)
		return c.JSON(http.StatusOK, result)
	})

	e.GET("/api/reverse/:addr", func(c echo.Context) error {
		addr := c.Param("addr")
		result := api.ReverseDNS(addr)
		return c.JSON(http.StatusOK, result)
	})

	e.GET("/api/ns/:name", func(c echo.Context) error {
		name := c.Param("name")
		result := api.EnumNameServers(name)
		return c.JSON(http.StatusOK, result)
	})
	e.Logger.Fatal(e.Start(":1323"))
}
