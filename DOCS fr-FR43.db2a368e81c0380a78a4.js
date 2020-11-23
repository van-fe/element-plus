(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[163],{

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/fr-FR/quickstart.md?vue&type=template&id=09ac948a

var _hoisted_1 = {
  class: "content element-doc"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h2 id=\"demarrer\"><a class=\"header-anchor\" href=\"#demarrer\">¶</a> Démarrer</h2><p>Cette page vous guidera tout le long de l&#39;installation d&#39;Element Plus au sein d&#39;un projet webpack.</p><h3 id=\"use-vue-cli-4.5\"><a class=\"header-anchor\" href=\"#use-vue-cli-4.5\">¶</a> Use vue-cli@4.5</h3><p>Nous fournissons un <a href=\"https://github.com/element-plus/vue-cli-plugin-element-plus\">plugin Element</a> pour vue-cli@4.5, que vous pouvez utiliser pour créer rapidement un projet basé sur Element.</p><h3 id=\"utiliser-le-starter-kit\"><a class=\"header-anchor\" href=\"#utiliser-le-starter-kit\">¶</a> Utiliser le Starter Kit</h3><p>Nous fournissons un <a href=\"https://github.com/element-plus/element-plus-starter\">template de projet</a> pour débuter rapidement, and also a Vite <a href=\"https://github.com/element-plus/element-plus-vite-starter\">template</a>. Pour les utilisateurs Laravel, il est aussi possible d&#39;utiliser ce <a href=\"https://github.com/element-plus/element-plus-in-laravel-starter\">template</a>. VOus pouvez les télécharger directement.</p><p>Si vous préférer vous passer de template, voyez la section suivante.</p><h3 id=\"importer-element-plus\"><a class=\"header-anchor\" href=\"#importer-element-plus\">¶</a> Importer Element Plus</h3><p>Element Plus peut être importé entièrement ou à la demande. Commençons par l&#39;import total.</p><h4 id=\"import-total\"><a class=\"header-anchor\" href=\"#import-total\">¶</a> Import total</h4><p>Dans main.js:</p><pre><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> ElementPlus <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>;\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;element-plus/lib/theme-chalk/index.css&#39;</span>;\n<span class=\"hljs-keyword\">import</span> App <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;./App.vue&#39;</span>;\n\n<span class=\"hljs-keyword\">const</span> app = createApp(App)\napp.use(ElementPlus)\napp.mount(<span class=\"hljs-string\">&#39;#app&#39;</span>)\n</code></pre><p>L&#39;exemple ci-dessus importe Element Plus entièrement. Notez que les fichiers CSS doivent être importés séparément.</p><h4 id=\"a-la-demande\"><a class=\"header-anchor\" href=\"#a-la-demande\">¶</a> À la demande</h4><p>Grâce au <a href=\"https://github.com/QingWei-Li/babel-plugin-component\">babel-plugin-component</a>, nous pouvons importer uniquement les composants désirés, rendant ainsi le projet plus léger.</p><p>Tout d&#39;abord, installez babel-plugin-component:</p><pre><code class=\"hljs language-bash\">npm install babel-plugin-component -D\n</code></pre><p>Puis éditez .babelrc:</p><pre><code class=\"hljs language-json\">{\n  <span class=\"hljs-attr\">&quot;plugins&quot;</span>: [\n    [\n      <span class=\"hljs-string\">&quot;component&quot;</span>,\n      {\n        <span class=\"hljs-attr\">&quot;libraryName&quot;</span>: <span class=\"hljs-string\">&quot;element-plus&quot;</span>,\n        <span class=\"hljs-attr\">&quot;styleLibraryName&quot;</span>: <span class=\"hljs-string\">&quot;theme-chalk&quot;</span>\n      }\n    ]\n  ]\n}\n</code></pre><p>Ensuite, si vous n&#39;avez besoin que de Button et Select, éditez main.js comme suit:</p><pre><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> { ElButton, ElSelect } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>;\n<span class=\"hljs-keyword\">import</span> App <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;./App.vue&#39;</span>;\n\n<span class=\"hljs-keyword\">const</span> app = createApp(App)\napp.component(ElButton.name, ElButton);\napp.component(ElSelect.name, ElSelect);\n\n<span class=\"hljs-comment\">/* or\n * app.use(ElButton)\n * app.use(ElSelect)\n */</span>\n\napp.mount(<span class=\"hljs-string\">&#39;#app&#39;</span>)\n</code></pre><p>Exemple complet (liste complète des composants dans <a href=\"https://github.com/element-plus/element-plus/tree/dev/packages\">reference</a>):</p><pre><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> App <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;./App.vue&#39;</span>;\n<span class=\"hljs-keyword\">import</span> {\n  ElAlert,\n  ElAside,\n  ElAutocomplete,\n  ElAvatar,\n  ElBacktop,\n  ElBadge,\n  ElBreadcrumb,\n  ElBreadcrumbItem,\n  ElButton,\n  ElButtonGroup,\n  ElCalendar,\n  ElCard,\n  ElCarousel,\n  ElCarouselItem,\n  ElCascader,\n  ElCascaderPanel,\n  ElCheckbox,\n  ElCheckboxButton,\n  ElCheckboxGroup,\n  ElCol,\n  ElCollapse,\n  ElCollapseItem,\n  ElCollapseTransition,\n  ElColorPicker,\n  ElContainer,\n  ElDatePicker,\n  ElDialog,\n  ElDivider,\n  ElDrawer,\n  ElDropdown,\n  ElDropdownItem,\n  ElDropdownMenu,\n  ElFooter,\n  ElForm,\n  ElFormItem,\n  ElHeader,\n  ElIcon,\n  ElImage,\n  ElInput,\n  ElInputNumber,\n  ElLink,\n  ElMain,\n  ElMenu,\n  ElMenuItem,\n  ElMenuItemGroup,\n  ElOption,\n  ElOptionGroup,\n  ElPageHeader,\n  ElPagination,\n  ElPopconfirm,\n  ElPopover,\n  ElPopper,\n  ElProgress,\n  ElRadio,\n  ElRadioButton,\n  ElRadioGroup,\n  ElRate,\n  ElRow,\n  ElScrollBar,\n  ElSelect,\n  ElSlider,\n  ElStep,\n  ElSteps,\n  ElSubmenu,\n  ElSwitch,\n  ElTabPane,\n  ElTable,\n  ElTableColumn,\n  ElTimeline,\n  ElTimelineItem,\n  ElTooltip,\n  ElTransfer,\n  ElTree,\n  ElUpload,\n  ElInfiniteScroll,\n  ElLoading,\n  ElMessage,\n  ElMessageBox,\n  ElNotification,\n} <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>;\n\n<span class=\"hljs-keyword\">const</span> components = [\n  ElAlert,\n  ElAside,\n  ElAutocomplete,\n  ElAvatar,\n  ElBacktop,\n  ElBadge,\n  ElBreadcrumb,\n  ElBreadcrumbItem,\n  ElButton,\n  ElButtonGroup,\n  ElCalendar,\n  ElCard,\n  ElCarousel,\n  ElCarouselItem,\n  ElCascader,\n  ElCascaderPanel,\n  ElCheckbox,\n  ElCheckboxButton,\n  ElCheckboxGroup,\n  ElCol,\n  ElCollapse,\n  ElCollapseItem,\n  ElCollapseTransition,\n  ElColorPicker,\n  ElContainer,\n  ElDatePicker,\n  ElDialog,\n  ElDivider,\n  ElDrawer,\n  ElDropdown,\n  ElDropdownItem,\n  ElDropdownMenu,\n  ElFooter,\n  ElForm,\n  ElFormItem,\n  ElHeader,\n  ElIcon,\n  ElImage,\n  ElInput,\n  ElInputNumber,\n  ElLink,\n  ElMain,\n  ElMenu,\n  ElMenuItem,\n  ElMenuItemGroup,\n  ElOption,\n  ElOptionGroup,\n  ElPageHeader,\n  ElPagination,\n  ElPopconfirm,\n  ElPopover,\n  ElPopper,\n  ElProgress,\n  ElRadio,\n  ElRadioButton,\n  ElRadioGroup,\n  ElRate,\n  ElRow,\n  ElScrollBar,\n  ElSelect,\n  ElSlider,\n  ElStep,\n  ElSteps,\n  ElSubmenu,\n  ElSwitch,\n  ElTabPane,\n  ElTable,\n  ElTableColumn,\n  ElTabs,\n  ElTag,\n  ElTimePicker,\n  ElTimeSelect,\n  ElTimeline,\n  ElTimelineItem,\n  ElTooltip,\n  ElTransfer,\n  ElTree,\n  ElUpload,\n]\n\n<span class=\"hljs-keyword\">const</span> plugins = [\n  ElInfiniteScroll,\n  ElLoading,\n  ElMessage,\n  ElMessageBox,\n  ElNotification,\n]\n\n<span class=\"hljs-keyword\">const</span> app = createApp(App)\n\ncomponents.forEach(<span class=\"hljs-function\"><span class=\"hljs-params\">component</span> =&gt;</span> {\n  app.component(component.name, component)\n})\n\nplugins.forEach(<span class=\"hljs-function\"><span class=\"hljs-params\">plugin</span> =&gt;</span> {\n  app.use(plugin)\n})\n</code></pre><h3 id=\"configuration-globale\"><a class=\"header-anchor\" href=\"#configuration-globale\">¶</a> Configuration globale</h3><p>Lors de l&#39;import d&#39;Element, vous pouvez définir un objet de configuration global. Actuellement il possède de propriétés: <code>size</code> et <code>zIndex</code>. La propriété <code>size</code> détermine la taille par défaut de tout les composants et <code>zIndex</code> règle le z-index initial (default: 2000) des fenêtres modales:</p><p>Import total d&#39;Element：</p><pre><code class=\"hljs language-js\"><span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> ElementPlus <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>;\n<span class=\"hljs-keyword\">import</span> App <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;./App.vue&#39;</span>;\n\n<span class=\"hljs-keyword\">const</span> app = createApp(App)\napp.use(ElementPlus, { <span class=\"hljs-attr\">size</span>: <span class=\"hljs-string\">&#39;small&#39;</span>, <span class=\"hljs-attr\">zIndex</span>: <span class=\"hljs-number\">3000</span> });\n</code></pre><p>Import partiel d&#39;Element：</p><pre><code class=\"hljs language-js\"><span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> { ElButton } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>;\n<span class=\"hljs-keyword\">import</span> App <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;./App.vue&#39;</span>;\n\n<span class=\"hljs-keyword\">const</span> app = createApp(App)\napp.config.globalProperties.$ELEMENT = option\napp.use(ElButton);\n</code></pre><p>Avec la configuration ci-dessus, la taille par défaut des composants ayant l&#39;attribut size sera &#39;small&#39;, et le z-index initial des fenêtres modales est 3000.</p><h3 id=\"commencer-a-developper\"><a class=\"header-anchor\" href=\"#commencer-a-developper\">¶</a> Commencer à développer</h3><p>Maintenant que vous avez ajouté Vue et Element Plus à votre projet, vous pouvez commencer à coder. Référez-vous à la documentation de chaque composant pour savoir comment les utiliser.</p><h3 id=\"utiliser-nuxt.js\"><a class=\"header-anchor\" href=\"#utiliser-nuxt.js\">¶</a> Utiliser Nuxt.js</h3><p>Vous pouvez également commencer un projet avec <a href=\"https://nuxtjs.org/\">Nuxt.js</a>:</p><div class=\"glitch-embed-wrap\" style=\"height:420px;width:100%;\"><iframe src=\"https://glitch.com/embed/#!/embed/nuxt-with-element?path=nuxt.config.js&amp;previewSize=0&amp;attributionHidden=true\" alt=\"nuxt-with-element on glitch\" style=\"height:100%;width:100%;border:0;\"></iframe></div>", 35);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", _hoisted_1, [_hoisted_2]);
}
// CONCATENATED MODULE: ./website/docs/fr-FR/quickstart.md?vue&type=template&id=09ac948a

// CONCATENATED MODULE: ./website/docs/fr-FR/quickstart.md

const script = {}
script.render = render

/* harmony default export */ var quickstart = __webpack_exports__["default"] = (script);

/***/ }),

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/quickstart.md?vue&type=template&id=1a89ed69

var _hoisted_1 = {
  class: "content element-doc"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h2 id=\"kuitukusutato\"><a class=\"header-anchor\" href=\"#kuitukusutato\">¶</a> クイックスタート</h2><p>このパートでは、webpackプロジェクトでElement Plusを用いた開発プロセスを説明します。</p><h3 id=\"vue-cli-4.5wo-shiu\"><a class=\"header-anchor\" href=\"#vue-cli-4.5wo-shiu\">¶</a> vue-cli@4.5を使う</h3><p>私達はvue-cli@4.5のために <a href=\"https://github.com/element-plus/vue-cli-plugin-element-plus\">Element Plus plugin</a> 提供しており, 簡単に Element Plusベースのプロジェクトを構築出来ます。</p><h3 id=\"sutatakitutowo-shiu\"><a class=\"header-anchor\" href=\"#sutatakitutowo-shiu\">¶</a> スターターキットを使う</h3><p>私達は一般的なツール<a href=\"https://github.com/element-plus/element-plus-starter\">project template</a> があります。 直接ダウンロードして使うことが出来ます。</p><p>これらのツールを使いたくない場合は、以下の記事を御覧ください。</p><h3 id=\"element-pluswoinpotosuru\"><a class=\"header-anchor\" href=\"#element-pluswoinpotosuru\">¶</a> Element Plusをインポートする</h3><p>Element Plusを完全にインポートすることも、必要なものだけをインポートすることもできます。完全なインポートから始めましょう。</p><h4 id=\"wan-quanniinpotosita-chang-he\"><a class=\"header-anchor\" href=\"#wan-quanniinpotosita-chang-he\">¶</a> 完全にインポートした場合</h4><p>main.js:</p><pre><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> ElementPlus <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>;\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;element-plus/lib/theme-chalk/index.css&#39;</span>;\n<span class=\"hljs-keyword\">import</span> App <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;./App.vue&#39;</span>;\n\n<span class=\"hljs-keyword\">const</span> app = createApp(App)\napp.use(ElementPlus)\napp.mount(<span class=\"hljs-string\">&#39;#app&#39;</span>)\n</code></pre><p>上記のコードは完全にElement Plusをインポートします。CSSファイルは個別にインポートする必要があることを注意してください。</p><h4 id=\"ondemando\"><a class=\"header-anchor\" href=\"#ondemando\">¶</a> オンデマンド</h4><p><a href=\"https://github.com/QingWei-Li/babel-plugin-component\">babel-plugin-component</a> を用いて、 必要な分のコンポーネントをインポートし、プロジェクトをより小さくすることが出来ます。</p><p>はじめに、babel-plugin-componentをインストール:</p><pre><code class=\"hljs language-bash\">npm install babel-plugin-component -D\n</code></pre><p>つぎに .babelrc を編集します:</p><pre><code class=\"hljs language-json\">{\n  <span class=\"hljs-attr\">&quot;plugins&quot;</span>: [\n    [\n      <span class=\"hljs-string\">&quot;component&quot;</span>,\n      {\n        <span class=\"hljs-attr\">&quot;libraryName&quot;</span>: <span class=\"hljs-string\">&quot;element-plus&quot;</span>,\n        <span class=\"hljs-attr\">&quot;styleLibraryName&quot;</span>: <span class=\"hljs-string\">&quot;theme-chalk&quot;</span>\n      }\n    ]\n  ]\n}\n</code></pre><p>次に、ボタンとセレクトが必要な場合、main.jsを編集します:</p><pre><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> { ElButton, ElSelect } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>;\n<span class=\"hljs-keyword\">import</span> App <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;./App.vue&#39;</span>;\n\n<span class=\"hljs-keyword\">const</span> app = createApp(App)\napp.component(ElButton.name, ElButton);\napp.component(ElSelect.name, ElSelect);\n\n<span class=\"hljs-comment\">/* or\n * app.use(ElButton)\n * app.use(ElSelect)\n */</span>\n\napp.mount(<span class=\"hljs-string\">&#39;#app&#39;</span>)\n</code></pre><p>全ての例 (コンポーネントリストのリファレンスは <a href=\"https://github.com/element-plus/element-plus/tree/dev/packages\">reference</a> を御覧ください)</p><pre><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> App <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;./App.vue&#39;</span>;\n<span class=\"hljs-keyword\">import</span> {\n  ElAlert,\n  ElAside,\n  ElAutocomplete,\n  ElAvatar,\n  ElBacktop,\n  ElBadge,\n  ElBreadcrumb,\n  ElBreadcrumbItem,\n  ElButton,\n  ElButtonGroup,\n  ElCalendar,\n  ElCard,\n  ElCarousel,\n  ElCarouselItem,\n  ElCascader,\n  ElCascaderPanel,\n  ElCheckbox,\n  ElCheckboxButton,\n  ElCheckboxGroup,\n  ElCol,\n  ElCollapse,\n  ElCollapseItem,\n  ElCollapseTransition,\n  ElColorPicker,\n  ElContainer,\n  ElDatePicker,\n  ElDialog,\n  ElDivider,\n  ElDrawer,\n  ElDropdown,\n  ElDropdownItem,\n  ElDropdownMenu,\n  ElFooter,\n  ElForm,\n  ElFormItem,\n  ElHeader,\n  ElIcon,\n  ElImage,\n  ElInput,\n  ElInputNumber,\n  ElLink,\n  ElMain,\n  ElMenu,\n  ElMenuItem,\n  ElMenuItemGroup,\n  ElOption,\n  ElOptionGroup,\n  ElPageHeader,\n  ElPagination,\n  ElPopconfirm,\n  ElPopover,\n  ElPopper,\n  ElProgress,\n  ElRadio,\n  ElRadioButton,\n  ElRadioGroup,\n  ElRate,\n  ElRow,\n  ElScrollBar,\n  ElSelect,\n  ElSlider,\n  ElStep,\n  ElSteps,\n  ElSubmenu,\n  ElSwitch,\n  ElTabPane,\n  ElTable,\n  ElTableColumn,\n  ElTimeline,\n  ElTimelineItem,\n  ElTooltip,\n  ElTransfer,\n  ElTree,\n  ElUpload,\n  ElInfiniteScroll,\n  ElLoading,\n  ElMessage,\n  ElMessageBox,\n  ElNotification,\n} <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>;\n\n<span class=\"hljs-keyword\">const</span> components = [\n  ElAlert,\n  ElAside,\n  ElAutocomplete,\n  ElAvatar,\n  ElBacktop,\n  ElBadge,\n  ElBreadcrumb,\n  ElBreadcrumbItem,\n  ElButton,\n  ElButtonGroup,\n  ElCalendar,\n  ElCard,\n  ElCarousel,\n  ElCarouselItem,\n  ElCascader,\n  ElCascaderPanel,\n  ElCheckbox,\n  ElCheckboxButton,\n  ElCheckboxGroup,\n  ElCol,\n  ElCollapse,\n  ElCollapseItem,\n  ElCollapseTransition,\n  ElColorPicker,\n  ElContainer,\n  ElDatePicker,\n  ElDialog,\n  ElDivider,\n  ElDrawer,\n  ElDropdown,\n  ElDropdownItem,\n  ElDropdownMenu,\n  ElFooter,\n  ElForm,\n  ElFormItem,\n  ElHeader,\n  ElIcon,\n  ElImage,\n  ElInput,\n  ElInputNumber,\n  ElLink,\n  ElMain,\n  ElMenu,\n  ElMenuItem,\n  ElMenuItemGroup,\n  ElOption,\n  ElOptionGroup,\n  ElPageHeader,\n  ElPagination,\n  ElPopconfirm,\n  ElPopover,\n  ElPopper,\n  ElProgress,\n  ElRadio,\n  ElRadioButton,\n  ElRadioGroup,\n  ElRate,\n  ElRow,\n  ElScrollBar,\n  ElSelect,\n  ElSlider,\n  ElStep,\n  ElSteps,\n  ElSubmenu,\n  ElSwitch,\n  ElTabPane,\n  ElTable,\n  ElTableColumn,\n  ElTabs,\n  ElTag,\n  ElTimePicker,\n  ElTimeSelect,\n  ElTimeline,\n  ElTimelineItem,\n  ElTooltip,\n  ElTransfer,\n  ElTree,\n  ElUpload,\n]\n\n<span class=\"hljs-keyword\">const</span> plugins = [\n  ElInfiniteScroll,\n  ElLoading,\n  ElMessage,\n  ElMessageBox,\n  ElNotification,\n]\n\n<span class=\"hljs-keyword\">const</span> app = createApp(App)\n\ncomponents.forEach(<span class=\"hljs-function\"><span class=\"hljs-params\">component</span> =&gt;</span> {\n  app.component(component.name, component)\n})\n\nplugins.forEach(<span class=\"hljs-function\"><span class=\"hljs-params\">plugin</span> =&gt;</span> {\n  app.use(plugin)\n})\n</code></pre><h3 id=\"gurobarukonhuigu\"><a class=\"header-anchor\" href=\"#gurobarukonhuigu\">¶</a> グローバルコンフィグ</h3><p>Elenentをインポートする際、グローバルコンフィグオブジェクトを定義出来ます。現時点では2つのプロパティ: <code>size</code> と <code>zIndex</code> があります。 プロパティ <code>size</code> はすべてのコンポーネントのデフォルトサイズ、プロパティ <code>zIndex</code> はモーダルボックスの初期の z-index (デフォルト: 2000) を設定します。</p><p>Element Plusを完全にインポート：</p><pre><code class=\"hljs language-js\"><span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> ElementPlus <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>;\n<span class=\"hljs-keyword\">import</span> App <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;./App.vue&#39;</span>;\n\n<span class=\"hljs-keyword\">const</span> app = createApp(App)\napp.use(ElementPlus, { <span class=\"hljs-attr\">size</span>: <span class=\"hljs-string\">&#39;small&#39;</span>, <span class=\"hljs-attr\">zIndex</span>: <span class=\"hljs-number\">3000</span> });\n</code></pre><p>Element Plusを部分的にインポート：</p><pre><code class=\"hljs language-js\"><span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> { ElButton } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>;\n<span class=\"hljs-keyword\">import</span> App <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;./App.vue&#39;</span>;\n\n<span class=\"hljs-keyword\">const</span> app = createApp(App)\napp.config.globalProperties.$ELEMENT = option\napp.use(ElButton);\n</code></pre><p>上記の設定では、size属性を持つすべてのコンポーネントのデフォルトのサイズは <code>small</code>、モーダルボックスのデフォルト値 <code>z-index</code> は3000となります。</p><h3 id=\"kodeinguwo-shimemasiyou\"><a class=\"header-anchor\" href=\"#kodeinguwo-shimemasiyou\">¶</a> コーディングを始めましょう</h3><p>プロジェクトに Vue と Element Plus を実装したので、いよいよコードを書く時が来ました。使用方法については、各コンポーネントのドキュメントを参照してください。</p><h3 id=\"nuxt.jswo-shiu\"><a class=\"header-anchor\" href=\"#nuxt.jswo-shiu\">¶</a> Nuxt.jsを使う</h3><p><a href=\"https://nuxtjs.org/\">Nuxt.js</a> を使ってプロジェクトを立ち上げることも出来ます:</p><div class=\"glitch-embed-wrap\" style=\"height:420px;width:100%;\"><iframe src=\"https://glitch.com/embed/#!/embed/nuxt-with-element?path=nuxt.config.js&amp;previewSize=0&amp;attributionHidden=true\" alt=\"nuxt-with-element on glitch\" style=\"height:100%;width:100%;border:0;\"></iframe></div>", 35);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", _hoisted_1, [_hoisted_2]);
}
// CONCATENATED MODULE: ./website/docs/jp/quickstart.md?vue&type=template&id=1a89ed69

// CONCATENATED MODULE: ./website/docs/jp/quickstart.md

const script = {}
script.render = render

/* harmony default export */ var quickstart = __webpack_exports__["default"] = (script);

/***/ })

}]);