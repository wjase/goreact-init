package api

import (
	"encoding/json"
	"net/http"
)

// ServeDataAPI returns http.Handler for API endpoint
func ServeDataAPI(res http.ResponseWriter, req *http.Request) {
	res.Header().Set("Content-Type", "application/json")

	body, err := json.Marshal(map[string]interface{}{
		"msg": "Hello, world",
	})

	if err != nil {
		res.WriteHeader(500)
		return
	}

	res.WriteHeader(200)
	res.Write(body)
}
