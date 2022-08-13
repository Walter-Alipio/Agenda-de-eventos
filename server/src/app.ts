import express from 'express';
import db from './config/dbConnect';
import routes from './routes/index';
import cors from 'cors'


db.on("error", console.log.bind(console, "Erro ao tentar conectar bd"));
db.once("open", () => {
    console.log("Conexão com o db feita com sucesso.");
});

const app = express();

app.use(cors());
app.use(express.json());

routes(app);

/*
    "name":"TESTE DB 3",
    "date": "2022-06-22",
    "start":"20:01",
    "end":"20:10",
    "description":"API funcionando"
*/

export default app;