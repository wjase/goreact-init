package main

import (
	"encoding/json"
	"log"
	"net/http"
	"os"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
)

var apiHandlers = make(map[string]http.HandlerFunc)

func main() {

	router := mux.NewRouter()

	rootHandler := http.FileServer(http.Dir("ui/build"))
	router.Path("/api").HandlerFunc(ServeAPI)
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

// ServeAPI returns http.Handler for API endpoint
func ServeAPI(res http.ResponseWriter, req *http.Request) {
	res.Header().Set("Content-Type", "application/json")

	body, err := json.Marshal(map[string]interface{}{
		"data": "Hello, world",
	})

	if err != nil {
		res.WriteHeader(500)
		return
	}

	res.WriteHeader(200)
	res.Write(body)
}
