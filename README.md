FBooks
======

Development:

- `coffee -o static/ -cmw static-dev/` to run coffeescript compilation

- OR add 

```coffee
coffee:
  files: ['static-dev/**/*.coffee']
  tasks: ['coffee', 'coffeelint']
```

to `watch` Gruntfile  section 
