import Vue from 'vue';
import Entry from '../src/views/entry.vue';

import globalCss from '../src/css/global.css';

const MountDom = document.createElement('div');
document.body.appendChild(MountDom);

new Vue({
	render: h => h(Entry)
}).$mount(MountDom);