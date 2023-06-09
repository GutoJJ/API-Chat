const token = require("../util/token.js");
const usuarioModel = require("../models/usuarioModel.js");

exports.entrar = async(nick) => {
    let resp = await usuarioModel.registrarUsuario(nick);
    if(resp.insertedId){
        return {"idUser":resp.insertedId,
                "token": await token.setToken(JSON.stringify(resp.insertedId).replace(/"/g, ''),nick),
                "nick":nick
        }
    }
}

exports.buscarMensagens = async (idsala, timestamp)=>{
    let mensagens=await salaModel.buscarMensagens(idsala, timestamp);
    return {
      "timestamp":mensagens[mensagens.length - 1].timestamp,
      "msgs":mensagens
    };
  }  
  