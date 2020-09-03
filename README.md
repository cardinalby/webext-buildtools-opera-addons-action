# Example Github Action with puppeteer and TypeScript

Demonstrates how to create own GitHub Action based on Puppeteer Docker image and add own 
TypeScript code to it.

```yaml
- uses: cardinalby/puppeteer-based-github-action-example@master
  with:
    url: 'http://example.com/'
    selector: 'h1'
```

## See also: how automate JS packing using ncc

GitHub's examples suggest packing your JS together with dependencies from `node_modules` into on JS file using `ncc` util.
Read my [Managing JavaScript GitHub Action ncc packing](https://medium.com/@cardinalby/managing-javascript-github-action-ncc-packing-f7b5b5b439)
article to learn how to automate that.
