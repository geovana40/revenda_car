const db = require("../config/db");

class ClienteModel {
    static async Listar(){
        const [rows] = await db.query("SELEC * FROM clientes ORDER BY id DESC");
        return rows;
    }

    static async criar(dados){
        const{nome, cpf, telefone, email, endereco} = dados;

        const[result] = await db.query(
            `INSER INTO clientes (nome, cpf, telefone, email, endereco) VALUES(?, ?, ?, ?, ?)`
            [nome, cpf, telefone, email, endereco]
        );

        return {id: result.insertid, ...dados}
        
    }
}
module.exports = ClienteModel;