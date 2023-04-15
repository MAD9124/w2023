(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{411:function(t,e,a){"use strict";a.r(e);var l=a(14),s=Object(l.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",[e("span",{staticClass:"week"},[t._v("Final Project")]),t._v(" "),e("br"),t._v(" "),e("span",{staticClass:"title"},[t._v("GIFTR")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Due before 11:59 pm on Thursday April 20, 2023.")]),t._v(" "),e("p",[t._v("This is the final deadline. There will be no extensions."),e("br"),t._v("\nCounts for 30% of your MAD9124 final grade.")])]),t._v(" "),e("h2",{attrs:{id:"joint-project"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#joint-project"}},[t._v("#")]),t._v(" Joint Project")]),t._v(" "),e("p",[t._v("The final project will be a two part joint assignment between MAD9124 and MAD9022. You will build a complete full-stack solution. The web service API portion will be graded for MAD9124, and the front-end application functionality, design, and usability will be graded for MAD9022.")]),t._v(" "),e("h2",{attrs:{id:"the-brief"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-brief"}},[t._v("#")]),t._v(" The Brief")]),t._v(" "),e("p",[t._v("Using Node.js, Express, Mongoose and MongoDB, you will build the RESTful API web service for a prototype of a fictitious application to track gift ideas for your friends. This initial proof of concept (PoC) will have limited capabilities but should demonstrate the potential of a full-scale application.")]),t._v(" "),e("p",[t._v("Each registered user can create a list of people for whom they are collecting gift ideas. The user can then add one or more gift ideas for each person on their list.")]),t._v(" "),e("p",[t._v("Your PoC will allow authenticated users to perform basic CRUD operations on two primary resources: "),e("strong",[t._v("people")]),t._v(" and "),e("strong",[t._v("gifts")]),t._v(". The "),e("code",[t._v("Person")]),t._v(" model represent the people for whom you are collecting gift ideas and will have an array of embedded "),e("code",[t._v("Gift")]),t._v(" models. It will also have a "),e("em",[t._v("ownerId")]),t._v(" relationship to the owning "),e("code",[t._v("User")]),t._v(" model.")]),t._v(" "),e("h2",{attrs:{id:"core-requirements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#core-requirements"}},[t._v("#")]),t._v(" Core Requirements")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("Implement basic user user management functions")]),t._v(" "),e("ul",[e("li",[t._v("authentication with Google OAuth and JWT")]),t._v(" "),e("li",[t._v("logout current user")])])]),t._v(" "),e("li",[e("p",[t._v("Protected API routes require a valid JWT in the "),e("code",[t._v("Authorization")]),t._v(" header.")])]),t._v(" "),e("li",[e("p",[t._v("Middleware functions should be employed to avoid repetitive route handler code.")])]),t._v(" "),e("li",[e("p",[t._v("Single resource requests should return any related resources as fully populated embedded documents.")])]),t._v(" "),e("li",[e("p",[t._v("Resource list requests should return an array of the primary resource objects only, without populating any related objects.")])]),t._v(" "),e("li",[e("p",[t._v("All requests containing user/client supplied data should be sanitized to protect against XSS and Query Injection attacks.")])]),t._v(" "),e("li",[e("p",[t._v("All schema validation errors should be caught and returned to the client with the correct status code and error message.")])])]),t._v(" "),e("h3",{attrs:{id:"response-payload"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-payload"}},[t._v("#")]),t._v(" Response Payload")]),t._v(" "),e("ul",[e("li",[t._v("All responses will be in the form of a JSON formatted object.")]),t._v(" "),e("li",[t._v("This payload object must include one of (but not both at the same time) a "),e("code",[t._v("data")]),t._v(" property or an "),e("code",[t._v("error")]),t._v(" property.")]),t._v(" "),e("li",[t._v('For "list" routes, the '),e("code",[t._v("data")]),t._v(" property must be populated an array of zero or more of the requested resource objects.")]),t._v(" "),e("li",[t._v('For "retrieve" routes, the '),e("code",[t._v("data")]),t._v(" property must be populated with a single resource object.")]),t._v(" "),e("li",[t._v("If the requested single resource, or sub-resource (embedded document) does not exist, a 404 error response should be sent.")])]),t._v(" "),e("h4",{attrs:{id:"example-data-response"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-data-response"}},[t._v("#")]),t._v(" Example Data Response")]),t._v(" "),e("p",[t._v("GET /api/people")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"_id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"641f45cc4de5a0f56bbc702e"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Caitlin"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dob"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2023-03-25T19:04:43.966Z"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h4",{attrs:{id:"example-errors-response"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-errors-response"}},[t._v("#")]),t._v(" Example Errors Response")]),t._v(" "),e("p",[t._v("GET /api/people/[bad_id]")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Status 404")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Person with id [bad_id] not found"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h4",{attrs:{id:"example-unauthenticated-response"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-unauthenticated-response"}},[t._v("#")]),t._v(" Example Unauthenticated Response")]),t._v(" "),e("p",[t._v("GET /api/people/\nheaders: {\nAuthorization: 'Invalid or missing JWT'\n}")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Status 401")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"JWT error: invalid token"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"auth-routes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#auth-routes"}},[t._v("#")]),t._v(" Auth Routes")]),t._v(" "),e("p",[t._v("The user management actions will be exposed separately from the main API routes and will use the "),e("code",[t._v("/auth")]),t._v(" route prefix.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Action")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Method")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Resource Path")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Authenticate User")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("GET")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("/auth/google?redirect_url")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Accept google response")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("GET")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("/auth/google/callback")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Logout User")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("GET")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("/auth/logout")])])])]),t._v(" "),e("p",[t._v("Successful authenticresation response from google at "),e("code",[t._v("auth/google/callback")]),t._v(" will redirect to the "),e("code",[t._v("redirect_url")]),t._v(" provided to "),e("code",[t._v("auth/google")]),t._v(", and will include the jwt token in the response query params. Ex "),e("code",[t._v("http://localhost:3000/login-succes?token=ey.asdfasdf...")])]),t._v(" "),e("h2",{attrs:{id:"api-routes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api-routes"}},[t._v("#")]),t._v(" API Routes")]),t._v(" "),e("p",[t._v("The primary application capabilities will be grouped under the "),e("code",[t._v("/api")]),t._v(" resource route prefix. All routes will be limited to authorized users. The client application must send a valid JWT in the "),e("code",[t._v("Authorization")]),t._v(" header property for all "),e("code",[t._v("/api")]),t._v(" routes.")]),t._v(" "),e("h3",{attrs:{id:"person-routes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#person-routes"}},[t._v("#")]),t._v(" Person Routes")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Action")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Method")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Resource Path")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Notes")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("List all people")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("GET")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("/api/people")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Gift ideas not populated")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Get details for a person")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("GET")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("/api/people/:id")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Gift ideas fully populated")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Create a person")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("POST")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("/api/people")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Replace a person")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("PUT")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("/api/people/:id")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Update a person")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("PATCH")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("/api/people/:id")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Remove a person")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("DELETE")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("/api/people/:id")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})])])]),t._v(" "),e("p",[t._v("Users should only see and be able to act on their own people.")]),t._v(" "),e("p",[t._v("All gift ideas for a given person should be returned as an array of embedded documents with the requested Person object.")]),t._v(" "),e("h3",{attrs:{id:"gift-routes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gift-routes"}},[t._v("#")]),t._v(" Gift Routes")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Action")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Method")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Resource Path")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("List all gifts")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("GET")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("/api/people/:id/gifts")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Get details for a gift")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("GET")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("/api/people/:id/gifts/:giftId")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Create a gift")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("POST")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("/api/people/:id/gifts")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Update a gift")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("PATCH")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("/api/people/:id/gifts/:giftId")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Remove a gift")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("DELETE")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("/api/people/:id/gifts/:giftId")])])])]),t._v(" "),e("p",[t._v("Users should only see and be able to act on gifts associated to their people.")]),t._v(" "),e("h2",{attrs:{id:"resource-schema"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#resource-schema"}},[t._v("#")]),t._v(" Resource Schema")]),t._v(" "),e("p",[t._v("There are three required model classes. Their schema requirements are listed below.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Remember")]),t._v(" "),e("p",[t._v("Mongoose will automatically create the "),e("code",[t._v("_id")]),t._v(" property for all objects.")])]),t._v(" "),e("h3",{attrs:{id:"person"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#person"}},[t._v("#")]),t._v(" Person")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Property")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Required")]),t._v(" "),e("th",{staticStyle:{"text-align":"right"}},[t._v("Max (length/value)")]),t._v(" "),e("th",{staticStyle:{"text-align":"right"}},[t._v("Default")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("name")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}}),t._v(" "),e("td",{staticStyle:{"text-align":"right"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("dob")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Date")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}}),t._v(" "),e("td",{staticStyle:{"text-align":"right"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("ownerId")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("ObjectId, ref: 'User'")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}}),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("Current user")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("gifts")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("[ Gift ]")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}}),t._v(" "),e("td",{staticStyle:{"text-align":"right"}}),t._v(" "),e("td",{staticStyle:{"text-align":"right"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("createdAt")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Date")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}}),t._v(" "),e("td",{staticStyle:{"text-align":"right"}}),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("Date.now()")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("updatedAt")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Date")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}}),t._v(" "),e("td",{staticStyle:{"text-align":"right"}}),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("Date.now()")])])])]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("createdAt")]),t._v(" and "),e("code",[t._v("updatedAt")]),t._v(" properties should be "),e("a",{attrs:{href:"https://mongoosejs.com/docs/guide.html#timestamps",target:"_blank",rel:"noopener noreferrer"}},[t._v("set automatically by the database"),e("OutboundLink")],1),t._v(". Any client supplied data for these two properties should be discarded.")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("gifts")]),t._v(" property takes an array of zero or more Gift "),e("a",{attrs:{href:"https://mongoosejs.com/docs/subdocs.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("sub-documents"),e("OutboundLink")],1),t._v("."),e("br"),t._v("\nThe "),e("code",[t._v("ownerId")]),t._v(" property takes a single User ID.")]),t._v(" "),e("h3",{attrs:{id:"gift"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gift"}},[t._v("#")]),t._v(" Gift")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Property")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Required")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("txt")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("true")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("store")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("true")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("url")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("true")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("createdAt")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Date")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("handled by mongoose")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("updatedAt")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Date")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("handled by mongoose")])])])]),t._v(" "),e("h3",{attrs:{id:"user"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#user"}},[t._v("#")]),t._v(" User")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Property")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Required")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Default")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Unique")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Notes")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("name")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}}),t._v(" "),e("td",{staticStyle:{"text-align":"left"}}),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("comes from google")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("googleId")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}}),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("comes from google")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("createdAt")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Date")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}}),t._v(" "),e("td",{staticStyle:{"text-align":"left"}}),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("handled by mongoose")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("updatedAt")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Date")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}}),t._v(" "),e("td",{staticStyle:{"text-align":"left"}}),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("handled by mongoose")])])])]),t._v(" "),e("h2",{attrs:{id:"logistics"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#logistics"}},[t._v("#")]),t._v(" Logistics")]),t._v(" "),e("ul",[e("li",[t._v("Create a new "),e("code",[t._v("private")]),t._v(" repository on Github.")]),t._v(" "),e("li",[t._v("Clone the repo to your laptop.")]),t._v(" "),e("li",[t._v("Initialize the repository "),e("code",[t._v("yarn init")]),t._v(" (make sure to fill it out with correct values)")]),t._v(" "),e("li",[t._v("Install dependencies with "),e("code",[t._v("yarn")]),t._v(".")]),t._v(" "),e("li",[t._v("Build the project on your laptop.")]),t._v(" "),e("li",[t._v("Test each route with Postman, making sure to test "),e("em",[t._v("both")]),t._v(" valid and invalid data.")]),t._v(" "),e("li",[t._v("Make git commits as you complete each requirement.")]),t._v(" "),e("li",[t._v("When everything is complete, push the final commit back up to GitHub")]),t._v(" "),e("li",[t._v("Submit "),e("strong",[t._v("both")]),t._v(" two URLs on Brightspace: the GitHub repo URL and the URL to your deployed Render API.")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Remember")]),t._v(" "),e("p",[t._v("Pay attention to clean code practices.")])])])}),[],!1,null,null,null);e.default=s.exports}}]);