# Autocode

Autocode is a simple function hosting framework. Now you don't need bulkey boilerplates to host simple HTTP routes.

Autocode exposes simple HTTP routes with the function names. Simply define your function and autocode will take care of exposing the route and it makes sure of parameter validation.

**Note**: Autocode is implemented on top of express so functions can also get access to express `Request` by just passing `request` keyword to the function defination

### Getting started

```shell
npm i @mkhizeryounas/autocode
```

```javascript
// example.js

const Autocode = require('@mkhizeryounas/autocode');

const autocode = new Autocode();

autocode.register(function onboardCompany(name, site, phone) {
  return { data: { name, site, phone } };
});

autocode.listen({ port: 3000 });
```

```shell
node example.js
```

**Request**

```shell
curl --location --request POST 'http://localhost:3000/onboardCompany' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Zigzag",
    "site": "www.gozigzag.com",
    "phone": "+17785225409"
}'
```

### Contributing

Feel free to submit pull requests.

### Authors

Khizer Younas - Initial work - [mkhizeryounas](http://github.com/mkhizeryounas)

### Licensing

The project is [MIT Licenced](./License.txt).
