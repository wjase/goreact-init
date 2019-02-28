package api

import (
	"io/ioutil"
	"encoding/json"
	"fmt"
	"net/http"
)

// A Thing is interesting
type Thing struct {
	Name string `json:"name,omitempty"`
	ID   int    `json:"id,omitempty"`
}
var things = []Thing{
	{"bob", 1},
	{"bob2", 2},
	{"bob3", 3},
	{"bob4", 4},
	{"bob5", 5},
}

var index = len(things)+1

// ServeThingsAPI returns http.Handler for API endpoint
func ServeThingsAPI(res http.ResponseWriter, req *http.Request) {
	res.Header().Set("Content-Type", "application/json")

	if req.Method == "POST"{
		thing := Thing{}
		// Read body
	    b, err := ioutil.ReadAll(req.Body)
		defer req.Body.Close()
		err = json.Unmarshal(b, &thing)

		thing.ID = index
		index++

		things  = append(things, thing)
		
		if err != nil {
			http.Error(res, err.Error(), 500)
			return
		}

		if err != nil {
			http.Error(res, err.Error(), 500)
			return
		}
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
