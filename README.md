# Deno

### Installation
```
$ brew install deno
$ deno -h
$ deno --version
$ deno run https://deno.land/std/examples/welcome.ts
```

### Built-In Tool
```
$ deno install --allow-net --allow-read https://deno.land/std@0.128.0/http/file_server.ts
$ deno uninstall file_server

$ deno repl
$ deno fmt
$ deno test standard/hello-test.ts
$ deno lint standard/datetime.ts
$ deno bundle ./oak/index.ts server.bundle.js
$ deno compile --unstable --allow-read --allow-net index.ts -p 8080
$ deno run --no-remote --import-map=vendor/import_map.json ./oak/index.ts
```