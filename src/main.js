import Vue from 'vue';
import Vuex from 'vuex';
import VueHtml5Editor from 'vue-html5-editor';
import Editor from './components/Editor.vue';
import Export from'./components/Export.vue';
import Themes from './components/Themes.vue';
import Info from './components/Info.vue';

Vue.use(Vuex);


const store = new Vuex.Store({
  state: {
    content: '<div style="font-size:18px">歡迎來到Sparkle Editor</div>',
    output: '<div style="font-size:18px">歡迎來到Sparkle Editor</div>',
  },
  mutations: {
    updateOutput (state, content) {
      state.output = content;
    },
    saveThemeSetting (state, theme){
      state.currentTheme = theme;
    }
  }
})

Vue.use(VueHtml5Editor, {
  language: 'zh-tw',
  showModuleName: true,
  i18n: {
    'zh-tw': {
      'align': '對齊',
      'image': '圖片',
      'list': '列表',
      'link': '連結',
      'unlink': '移除連結',
      'table': '表格',
      'font': '文字',
      'text': '排版',
      'eraser': '格式清除',
      'info': '關於',
      'color': '顏色',
      'please enter a url': '請輸入位址',
      'create link': '建立連結',
      'bold': '粗體',
      'italic': '斜體',
      'underline': '下劃線',
      'strike through': '删除線',
      'subscript': '上標',
      'superscript': '下標',
      'heading': '標題',
      'font name': '字體  ',
      'font size': '文字大小',
      'left justify': '向左對齊',
      'center justify': '居中',
      'right justify': '向右對齊',
      'ordered list': '有序列表',
      'unordered list': '無序列表',
      'row count': '行数',
      'column count': '列数',
      'save': '確定',
      'upload': '上傳',
      'progress': '進度',
      'unknown': '未知',
      'please wait': '請稍等',
      'error': '錯誤',
      'abort': '中斷',
      'reset': '重置',
      'hr': '水平線',
      'line height': '行距',
      'export': '匯出',
      'save':'儲存',
      'themes':'主題',
    }
  },
  visibleModules: [
    'font',
    'text',
    'align',
    'list',
    'link',
    'unlink',
    'tabulation',
    'hr',
    'image',
    'eraser',
    'save',
    'themes',
    'export',
    'author-info'
  ],
  modules: [
    {
      name: 'export',
      icon: 'fa fa-external-link',
      i18n: 'export',
      show: true,
      dashboard: Export
    },
    {
      name: 'themes',
      icon: 'fa fa-paint-brush',
      i18n: 'themes',
      show: true,
      dashboard: Themes
    },
    {
      name: 'author-info',
      icon: 'fa fa-info',
      i18n: 'info',
      show: true,
      dashboard: Info
    },
  ]
});

new Vue({
  el: '#sparkle-editor',
  store,
  components: {
    Editor
  }
});
