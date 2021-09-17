# eslint-plugin-storage

An eslint plugin to disallow using `document.cookie` and/or `localStorage` directly. Useful if you want to create wrappers
around them that enforce GDPR compliance, for example.

## Installation

```
npm install --save-dev eslint-plugin-storage
```

## Rules

### `no-document-cookie`

Disallows any references or assignments to `document.cookie` or `window.document.cookie`.

```
{
  "plugins": ["storage"],
  "rules": {
    "storage/no-document-cookie": "error"
  }
}
```

### `no-localstorage`

Disallows any references to `localStorage` and methods on the `localStorage` object.

```
{
  "plugins": ["storage"],
  "rules": {
    "storage/no-localstorage": "error"
  }
}
```
