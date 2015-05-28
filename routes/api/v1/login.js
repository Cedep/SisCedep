var express = require('express');
var router = express.Router();

/*
 * POST login.
 */
router.post('/', function(req, res) {
    var db = req.db;
    
    if(!req.body.login) {
    	res.send(400, 'Preencher o nome do usuário');	
    	return;
    }

    if(!req.body.senha) {
        res.send(400, 'Preencher a senha do usuário');   
        return;
    }

    var usuarioLogin = {
        login: req.body.login,
        senha: req.body.senha
    }
    
    for(var i = 0; i < db.usuarios.length; i++) {
        if(usuario[i].login === usuarioLogin.login){
            if(usuario[i].senha === usuarioLogin.senha) {
                res.send({token: 'sakldfhaskjdhflkasjhdf'});
                return;
            } else {
                res.send(400, 'Senha não confere');
                return;
            }
        }
    }

    res.send(400, 'Usuário não localizado');
});

module.exports = router;
