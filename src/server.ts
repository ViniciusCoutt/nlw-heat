import { serverHttp } from "./app";

// Indicando a porta onde a aplicação vai rodar. Rodando a  aplicação na porta 4000.
serverHttp.listen(4000, ()  =>  
     console.log(`Server is running on PORT 4000`)
);