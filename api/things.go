package api

import (
	"encoding/json"
	"fmt"
	"net/http"
)

// A Thing is interesting
type Thing struct {
	Name string `json:"name,omitempty"`
	ID   int    `json:"id,omitempty"`
}

// ServeThingsAPI returns http.Handler for API endpoint
func ServeThingsAPI(res http.ResponseWriter, req *http.Request) {
	res.Header().Set("Content-Type", "application/json")

	type ThingArray []Thing

	var things = [...]Thing{
		{"bob", 1},
		{"bob2", 2},
		{"bob3", 3},
		{"bob4", 4},
		{"bob5", 5},
	}

	fmt.Println(things)

	body, err := json.Marshal(things)

	if err != nil {
		res.WriteHeader(500)
		return
	}

	res.WriteHeader(200)
	res.Write(body)
}
