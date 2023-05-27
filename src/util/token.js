const jwt = require('jsonwebtoken');

const checkToken = async (token, id, key) => {
    try {
        const decoded = await verifyToken(token, key);
        if (decoded.id === id) {
          return true; 
        } else {
          return false; 
        }
      } catch (err) {
        return false; 
      }
}

const setToken = async (id, key) => {
    console.log(id);
    if(id){
        return jwt.sign({id}, key, {expiresIn:28800});
    }
    return false;
}

module.exports = {
    checkToken,
    setToken
}