const test = require("ava");
const avaRuleTester = require("eslint-ava-rule-tester");
const rules = require("./index").rules;

const ruleTester = new avaRuleTester(test, {
  env: {
    browser: true,
  },
});

// Tests for no-document-cookie rule
ruleTester.run("no-document-cookie", rules["no-document-cookie"], {
  valid: [
    "getCookie(cookieName)",
    "setCookie(cookieName, domain, path, ttl, secure)",
    "localStorage.setItem(key, value)",
  ],
  invalid: [
    {
      code: 'document.cookie = ""',
      errors: [
        { message: "Do not use document.cookie directly.", column: 1, line: 1 },
      ],
    },
    {
      code:
        'document.cookie = "tz=America%2FNew_York;max-age=172800;path=/;secure"',
      errors: [
        { message: "Do not use document.cookie directly.", column: 1, line: 1 },
      ],
    },
    {
      code: 'document.cookie.split(";")',
      errors: [
        { message: "Do not use document.cookie directly.", column: 1, line: 1 },
      ],
    },
    {
      code: 'window.document.cookie = ""',
      errors: [
        { message: "Do not use document.cookie directly.", column: 1, line: 1 },
      ],
    },
    {
      code:
        'window.document.cookie = "tz=America%2FNew_York;max-age=172800;path=/;secure"',
      errors: [
        { message: "Do not use document.cookie directly.", column: 1, line: 1 },
      ],
    },
    {
      code: 'window.document.cookie.split(";")',
      errors: [
        { message: "Do not use document.cookie directly.", column: 1, line: 1 },
      ],
    },
  ],
});

// Tests for no-localstorage rule
ruleTester.run("no-localstorate", rules["no-localstorage"], {
  valid: [
    "setLocalStorage(key, value)",
    "getLocalStorage(key, value)",
    "LocalStorageManager.get(key, value)",
    "LocalStorageManager.set(key, value)",
  ],
  invalid: [
    {
      code: "localStorage.set(key, value)",
      errors: [
        { message: "Do not use localStorage directly.", column: 1, line: 1 },
      ],
    },
    {
      code: "localStorage.get(key)",
      errors: [
        { message: "Do not use localStorage directly.", column: 1, line: 1 },
      ],
    },
    {
      code: "localStorage",
      errors: [
        { message: "Do not use localStorage directly.", column: 1, line: 1 },
      ],
    },
    {
      code: "localStorage.removeItem(key)",
      errors: [
        { message: "Do not use localStorage directly.", column: 1, line: 1 },
      ],
    },
    {
      code: "localStorage.clear()",
      errors: [
        { message: "Do not use localStorage directly.", column: 1, line: 1 },
      ],
    },
    {
      code: "window.localStorage.set(key, value)",
      errors: [
        { message: "Do not use localStorage directly.", column: 8, line: 1 },
      ],
    },
    {
      code: "window.localStorage.get(key)",
      errors: [
        { message: "Do not use localStorage directly.", column: 8, line: 1 },
      ],
    },
    {
      code: "window.localStorage",
      errors: [
        { message: "Do not use localStorage directly.", column: 8, line: 1 },
      ],
    },
    {
      code: "window.localStorage.removeItem(key)",
      errors: [
        { message: "Do not use localStorage directly.", column: 8, line: 1 },
      ],
    },
    {
      code: "window.localStorage.clear()",
      errors: [
        { message: "Do not use localStorage directly.", column: 8, line: 1 },
      ],
    },
  ],
});
