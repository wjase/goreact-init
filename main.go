package main

import (
	"log"
	"net/http"
	"os"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
	"github.com/wjase/goreact-init/api"
)

var apiHandlers = make(map[string]http.HandlerFunc)

func main() {

	router := mux.NewRouter()

	rootHandler := http.FileServer(http.Dir("ui/build"))
	router.PathPrefix("/api/v1/data").HandlerFunc(api.ServeDataAPI)
	router.PathPrefix("/api/v1/things").HandlerFunc(api.ServeThingsAPI)
	router.Handle("/", rootHandler)
	handleStatic(router, "/service-worker.js", "ui/build/")
	handleStatic(router, "/favicon.ico", "ui/build/")
	handleStatic(router, "/manifest.json", "ui/build/")
	handleStatics(router, "css", "js", "img", "media")

	loggedRouter := handlers.LoggingHandler(os.Stdout, router)
	log.Println("Listening...")
	http.ListenAndServe(":3001", loggedRouter)
}

func handleStatics(router *mux.Router, resourcePrefix ...string) {

	for _, prefix := range resourcePrefix {
		handleStatic(router, "/static/"+prefix+"/", "ui/build/static/"+prefix)
	}
}

func handleStatic(router *mux.Router, urlToStrip string, staticRoot string) {
	staticFolder := http.Dir(staticRoot)
	fs := http.FileServer(staticFolder)
	router.NewRoute().PathPrefix(urlToStrip).Handler(http.StripPrefix(urlToStrip, fs))
}
