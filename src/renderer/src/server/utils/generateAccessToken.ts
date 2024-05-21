//src\renderer\src\server\utils\generateAccessToken.ts
const JWT = require('jsonwebtoken');
// deepcode ignore HardcodedSecret: <please specify a reason of ignoring this>
const JWT_SECRET = "my_super_secret_key"; 
function generateAccessToken(user) {
    return JWT.sign(
        {user },
        JWT_SECRET,
        { expiresIn: "1h" }
      );
}

export default generateAccessToken ;
