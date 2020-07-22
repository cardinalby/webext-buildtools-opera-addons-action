# Example Github Action with puppeteer and TypeScript

Demonstrates how to create own GitHub Action based on Puppeteer Docker image and add own 
TypeScript code to it.

```yaml
- uses: cardinalby/puppeteer-based-github-action-example@master
  with:
    url: 'http://example.com/'
    selector: 'h1'
```