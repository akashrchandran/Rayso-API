const express = require("express");
const RaySo = require("rayso-api");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.end("Hello World!");
});

app.get("/api", (req, res) => {
    if (!req.query.code) {
        res.status(400);
        res.json({"error": "code query parameter is missing."});
        return;
    }
    const raySo = new RaySo({
        title: req.query.title,
        theme: req.query.theme,
        padding: req.query.padding,
        language: req.query.language,
        background: req.query.background,
        darkMode: req.query.darkMode
    });
    raySo
        .cook(`${req.query.code}`)
        .then((response) => {
            res.end(response, "binary");
        })
        .catch((err) => {
            console.error(err);
        });
});

app.post("/api", (req, res) => {
    if (!req.body.code) {
        res.status(400);
        res.json({"error": "Body cannot be empty or missing code parameter."})
        return;
    }
        const raySo = new RaySo({
            title: req.body.title,
            theme: req.body.theme,
            padding: req.body.padding,
            language: req.body.language,
            background: req.body.background,
            darkMode: req.body.darkMode
      });
          raySo
              .cook(`${req.body.code}`)
              .then((response) => {
                res.end(response, "binary");
              })
              .catch((err) => {
                  console.error(err);
              });
});


const options = {
	definition: {
	  openapi: "3.0.0",
	  info: {
		title: "Rayso-API",
		version: "1.0.1",
		description:
		  "Provides ray.so as a REST API version. Make beautiful and prettified code screenshots by just sending a POST or GET request.",
		license: {
		  name: "GNU General Public License v3.0",
		  url: "https://www.gnu.org/licenses/gpl-3.0.en.html",
		},
		contact: {
		  name: "Akash R Chandran",
		  url: "https://akashrchandran.in",
		  email: "chandranrakash@gmail.com",
		},
	  },
	  servers: [
		{
		  url: "https://rayso.herokuapp.com/api",
		},
	  ],
	},
	apis: ["./routes/books.js"],
  };
  
const specs = swaggerJsdoc(options);
app.use(
	"/api-docs",
	swaggerUi.serve,
	swaggerUi.setup(specs)
);

app.listen(process.env.PORT || 3000, () => {
    console.log(`app listening`);
});
