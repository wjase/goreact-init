package api

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
)

// A Article is interesting
type Article struct {
	Title    string `json:"title,omitempty"`
	ObjectID int    `json:"objectID,omitempty"`
}

var articles = []Article{
	{"bob", 1},
	{"bob2", 2},
	{"bob3", 3},
	{"bob4", 4},
	{"bob5", 5},
}

var index = len(articles) + 1

// ServeArticlesAPI returns http.Handler for API endpoint
func ServeArticlesAPI(res http.ResponseWriter, req *http.Request) {
	res.Header().Set("Content-Type", "application/json")

	if req.Method == "POST" {
		article := Article{}
		// Read body
		b, err := ioutil.ReadAll(req.Body)
		defer req.Body.Close()
		err = json.Unmarshal(b, &article)

		article.ObjectID = index
		index++

		articles = append(articles, article)

		if err != nil {
			http.Error(res, err.Error(), 500)
			return
		}

		if err != nil {
			http.Error(res, err.Error(), 500)
			return
		}
	}

	fmt.Println(articles)

	body, err := json.Marshal(articles)

	if err != nil {
		res.WriteHeader(500)
		return
	}

	res.WriteHeader(200)
	res.Write(body)
}
