import express from "express";
import { RaySo, InvalidParameterException } from "rayso";

const app = express();

app.use(express.json());

const raySoConfig = (params) => ({
    title: params.title,
    theme: params.theme,
    padding: params.padding,
    language: params.language,
    background: params.background,
    darkMode: params.darkMode,
});

const errorResponse = (res, status, message) => {
    res.status(status).json({ error: message });
};

const handleRaySo = async (req, res, codeExtractor) => {
    try {
        const code = codeExtractor(req);
        if (!code) {
            errorResponse(res, 400, "Code parameter is missing.");
            return;
        }

        const raySo = new RaySo(raySoConfig(req.query || req.body));
        const response = await raySo.cook(code);

        res.set("Content-Type", "image/jpeg");
        res.send(response);
    } catch (error) {
        if (error instanceof InvalidParameterException) {
            errorResponse(res, 400, error.message);
        } else {
            errorResponse(res, 500, "An Internal Server Error.");
        }
    }
};

app.get("/", (req, res) => {
    res.end("Hello World!");
});

app.get("/api", (req, res) => {
    handleRaySo(req, res, (req) => req.query.code);
});

app.post("/api", (req, res) => {
    handleRaySo(req, res, (req) => req.body.code);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
