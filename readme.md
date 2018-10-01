# middleware-blocking-non-blocking

How blocking and non-blocking works inside middleware.

## How does it work?

**Blocking:** If you do some `synchronus` tasks in middleware before sending a response. Mean time no others `request` will be accepted.

**Non-blocking:**  If you do some `asynchronus` tasks in middleware server will accept other requests once tasks completed it entrance into routes and send a response to the client.

## License

MIT © [Joydip Roy](https://github.com/rjoydip)
