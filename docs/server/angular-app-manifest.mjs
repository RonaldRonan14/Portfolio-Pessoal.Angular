
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: './',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 7804, hash: 'f10a3c044fbf9ca48017da26aead15ea76d57c64dad9ebcae9e2658db015008d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 948, hash: '3dc81274c93230fe729cd654be7ca2c5213363afeabb99a7f1f886c13766f2ee', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-BH64IVLD.css': {size: 7368, hash: 'CAVXxT4akdU', text: () => import('./assets-chunks/styles-BH64IVLD_css.mjs').then(m => m.default)}
  },
};
