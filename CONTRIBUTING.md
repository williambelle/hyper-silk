Contributing
============

Welcome, so you are thinking about contributing?
Awesome, this a great place to start.

Setup
-----

```bash
git clone git@github.com:williambelle/hyper-silk.git
cd hyper-silk
```

Run
---

1. Open your `~/.hyper.js` config file with your favorite editor.
1. Add `hyper-silk` to your localPlugins array.

Release
-------

1. Bump the correct version (`npm version [<newversion> | major | minor | patch]`)
1. Update the file [CHANGELOG.md](CHANGELOG.md)
1. Create the tag (`git tag -a v<version> -m "Tagging the v<version> release"`)
1. Publish with `npm publish`

License
-------

The MIT License (MIT)
