const documentCookieMemberSelector =
  'MemberExpression[object.name="document"][property.name="cookie"]';

const windowDocumentCookieMemberSelector =
  'MemberExpression[object.object.name="window"][object.property.name="document"][property.name="cookie"]';
// 'MemberExpression[object.name="window"][property.name="document"]~Identifier[name="cookie"]';

const localStorageSelector = 'Identifier[name="localStorage"]';

module.exports = {
  rules: {
    "no-document-cookie": {
      create: (context) => ({
        [documentCookieMemberSelector]: (node) =>
          context.report(node, "Do not use document.cookie directly."),
        [windowDocumentCookieMemberSelector]: (node) =>
          context.report(node, "Do not use document.cookie directly."),
      }),
    },
    "no-localstorage": {
      create: (context) => ({
        [localStorageSelector]: (node) =>
          context.report(node, "Do not use localStorage directly."),
      }),
    },
  },
};
