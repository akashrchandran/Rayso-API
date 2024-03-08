<div align="center">

# Rayso-API

[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)

Provides [ray.so](https://ray.so/) as a REST API version. Make beautiful and prettified code screenshots by just sending a POST or GET request.

`https://rayso.herokuapp.com/api`

</div>

## Parameters

| Parameter    | Default value   | Type             | Description                                                                                                                                    |
| ------------ | --------------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `code `      | None (required) | String           | The code which is used to make the screenshot.                                                                                                 |
| `title `     | `"Untitled-1"`  | String           | The title will be displayed on top of the code box.                                                                                            |
| `theme`      | `"breeze"`      | String           | There are several options of how your box will look like. Available themes: breeze, candy, crimson, falcon, meadow, midnight, raindrop, sunset |
| `background` | `true`          | Boolean          | If disabled, it will create an image of code box only, without background.                                                                     |
| `darkMode`   | `true`          | Boolean          | If disabled, it will change your theme to its light version.                                                                                   |
| `padding`    | `32`            | String or Number | Distance between borders and code box. Available values: 16, 32, 64 and 128.                                                                   |
| `language`   | `"auto"`        | String           | You better leave it auto :/ However, you can try to pass some language name and if it worked, good for you!                                    |

### Using GET Request `/`

> It uses query parameters.

```
https://rayso.herokuapp.com/api?code=console.log(%22Hello%20World%22)%3B&language=javascript&title=Test
```

### Using POST Request `/`

**Body** is JSON with these params:

```json
{
  "code": "console.log('Hello World');",
  "language": "javascript",
  "title": "Test"
}
```

### Example output

<a href="https://github.com/akashrchandran/Rayso-API/"><img src="https://i.ibb.co/LQ38qzR/api.png" alt="api" border="0"></a>

### Credits

• [s0ftik3](https://github.com/s0ftik3)
-> For creating [rayso-api](https://github.com/s0ftik3/rayso-api) package.

• [Me](https://akashrchandran.in)
-> For nothing.
