import express from "express";
import axios from "axios";
import cors from "cors";
import rateLimit from "express-rate-limit";


const app = express();
app.use(express.json());

app.use(cors({
    origin: "https://meu-react-em-producao.com" //SUBSTITUIR PELA URL DO REACT
}));

const API_KEY = process.env.INTERNAL_API_KEY;

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 100 // 100 requisições por IP
});

app.post("/examProcess", limiter, async (req, res) => {
    try {
        const apiResponse = await axios.post(
            "https://sua-api-interna.com/processar",
            req.body,
            {
                headers: {
                    "X-API-KEY": API_KEY
                }
            }
        );

        res.json(apiResponse.data);
    } catch (error) {
        res.status(500).json({ error: "Erro ao processar" });
    }
});

app.listen(3001, () => console.log("BFF rodando na porta 3001"));
