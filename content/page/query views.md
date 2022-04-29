---
date:
- 2022-04-17
lastmod: 
icon: 📝
category: development
tags:
- datalog
- clojure
- hiccup
subtitle: collection
title: query views
categories: development
lastMod: 2022-04-23
---
Queries are build in a language called [datalog](/page/datalog), the presentation is done using [Hiccup](/page/hiccup). Mixed in is Clojure, of which I know none.

### Debugging

  + Usually I add one of these to view raw data from a query before I add custom hiccup view

  + `:view (fn [result] (for [r result] [:pre (pr-str r)]))`

  + `:view (fn [result] (pr-str result))`

### Properties

```clojure
 #+BEGIN_QUERY
{
 :query [:find (pull ?b [{:block/page
     [:block/name :block/journal-day]} :block/properties])
      :where
      [?b :block/properties ?bprops]
      [(get ?bprops :distanse "nil") ?bs]
      [(not= ?bs "nil")]]
:result-transform (fn [result]
                     (sort-by (fn [s]
                        (get-in s [:block/page :block/journal-day])) (fn [a b] (compare b a)) result)) 
:view (fn [rows] [:table 
 [:thead 
  [:tr 
   [:th "Dato"] 
   [:th "Distanse"]
   [:th "Økt"] ] ] 
 [:tbody 
(for [r rows] [:tr 
   [:td (get-in r [:block/page :block/name])] 
   [:td (get-in r [:block/properties :distanse])]
   [:td (get-in r [:block/properties :økt])] ])
   ]]
)
}
#+END_QUERY
 ```

### Image links

```clojure
 #+BEGIN_QUERY
{:title [:h4 "Image gallery"]
:query
 [:find (pull ?b [*])
  :in $ ?pattern ?current-page
  :where
  [?b :block/content ?c]
  [?p :block/name ?current-page]
  [?b :block/page ?p]
  [(re-pattern ?pattern) ?q]
  [(re-find ?q ?c)]]
 :inputs ["^!.*https://www.dropbox.com/s/" :current-page]
:result-transform (fn [result]
                     (sort-by (fn [h]
                                (get h :db/id)) result))
:view (fn [result]
         (when (seq result)
           [:div {:class "flex flex-row flex-wrap py-2"}
            (for [{:block/keys [uuid content]} result]
              [:span {:width "4rem" :key uuid :class "flex flex-col items-center mr-2 mb-2"}
               [:a {:href (str "#/page/" uuid)} [:img {:style {:width "4rem"} :src (re-find (re-pattern "https://.*?(?=(?:\\))|$)") (str content))}]]
               ]
              )]))
}
#+END_QUERY
 ```

### Find all unlinked pages

  + link:: [Discord](https://discord.com/channels/725182569297215569/743139225746145311/832512082289229824)
date:: [[2021-04-16]]

```clojure
    #+BEGIN_QUERY
	  {:title "Orphan pages"
	   :query [:find ?name
	           :where
	           [?p :page/name ?name]
	           (not
	            [?b :block/ref-pages ?p1]
	            [?b :block/page ?p2]
	            (or [?p1 :page/name ?name]
	                [?p2 :page/name ?name]))]
	   :view (fn [result]
	           [:div.flex.flex-col
	            (for [page result]
	              [:a {:href (str "#/page/" page)} (clojure.string/capitalize page)])])
	  :collapsed? true}
	  #+END_QUERY
```

### Query to show a random page

  + link:: [Discord](https://discord.com/channels/725182569297215569/743139225746145311/867375290396311633)
date:: [[2021-07-21]]

```clojure
	 #+BEGIN_QUERY
	  {:title "Give me a random page!!!"
	   :query [:find ?name
	           :where
	           [?b :block/name ?name]]
	   :result-transform (fn [result]
	                       [(rand-nth result)])
	  :view (fn [result]
	         [:div.flex.flex-col
	          (for [page result]
	            [:a {:href (str "/#/page/" page)} (clojure.string/capitalize page)])])
	   :collapsed? true}
	  #+END_QUERY
```

### Query to create a table with page and todo count

  + link:: [Discord](https://discord.com/channels/725182569297215569/743139225746145311/921337299164356658)
date:: [[2021-12-17]]

```clojure
   #+BEGIN_QUERY 
	  {:title "TODO by page"
	    :query     [:find (pull ?b [:block/marker :block/parent {:block/page
	       [:db/id :block/name]}])
	    :where
	             [?b :block/marker ?marker]
	             [(= "TODO" ?marker)] 
	    ]
	  :result-transform (fn [result]
	                          (map (fn [[key value]] {:page (get key :block/name) :count (count value)}) (group-by :block/page result))
	                  )
	  :view (fn [rows] [:table 
	   [:thead 
	    [:tr 
	     [:th "Page"] 
	     [:th "Count"] ] ] 
	   [:tbody 
	  (for [r rows] [:tr 
	     [:td [:a {:href (str "#/page/" (get r :page))} (get r :page)] ] 
	     [:td (get r :count)] ])
	     ]]
	  )
	  }
	  #+END_QUERY
```

### Grouping

```clojure
 #+BEGIN_QUERY 
{:title "TODO by page"
  :query     [:find (pull ?b [:block/scheduled :block/marker :block/parent {:block/page
     [:db/id :block/name]}])
  :where
           [?b :block/scheduled _]
           [?b :block/marker ?marker]
           [(= "TODO" ?marker)] 
  ]
:result-transform (fn [result]
                        (map (fn [[key value]] {:page key :count (count value)}) (group-by :block/scheduled result))
                )
:view (fn [rows] [:table 
 [:thead 
  [:tr 
   [:th "Page"] 
   [:th "Count"] ] ] 
 [:tbody 
(for [r rows] [:tr 
   [:td (get r :page)] 
   [:td (get r :count)] ])
   ]]
)
}
#+END_QUERY
 ```

### View

```clojure
#+BEGIN_QUERY
{:title [:h2 "Programming languages list"]
 :query [:find (pull ?b [*])
       :where
       [?b :block/properties ?p]
       [(get ?p "type") ?t]
       [(= "programming_lang" ?t)]]
 :view (fn [result]
       (when (seq result)
         (let [blocks (flatten result)]
           [:div.table-wrapper
            [:table.table-auto
             [:thead
              [:tr
               [:th {:width "20%"} "Name"]
               [:th {:width "20%"} "Creator"]
               [:th {:width "60%"} "Description"]]]
             [:tbody
              (for [{:block/keys [title properties]} blocks]
                [:tr
                 [:td (second (:url (second (first title))))]
                 [:td (get properties "creator")]
                 [:td (get properties "description")]])]]])))
 }
#+END_QUERY
```

### Group by

```clojure
 #+BEGIN_QUERY
{:title "Group by"
    :query [:find (pull ?h [*])
            :in $
            :where
            [?h :block/marker ?marker]
            [(contains? #{"NOW" "DOING"} ?marker)]
            ]
:result-transform (fn [result]
                   (group-by :block/scheduled result))  
:view (fn [result] (for [r result] [:div 
      [:div.text-xl (str "Scheduled: " (key r))]
      (for [b (val r)] 
        [:div.ml-4 (get b :block/content)]
      )
 ]
))
   }
#+END_QUERY
 ```
