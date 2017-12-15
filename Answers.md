<!-- Answers to the Short Answer Essay Questions go here -->
1* Middleware functions in express.js are functions that have access to the request object, the response object, and to the next intermediate processing function in the application. They can run any code, can make changes to the req & res objects, can complete the req, res cycle and call the next intermediate processing function. A session is a place to store data that you want access to across requests. Each user that visits your website has a unique session.  You can use sessions to store and access user data as they browse your application. Bcrypt is a library that helps you hash passwords. JSON Web Token (JWT) is a compact, URL-safe means of representing claims to be transferred between two parties.

2 To prevent attacks bcrypt provides us delayed hash, salt and compare method.

3* The token is composed of a header, a payload, and a signature.