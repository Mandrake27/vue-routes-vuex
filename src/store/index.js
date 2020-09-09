// Default
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {}
});

/*
	state - to collect data,
	mutations {setter} - to change state, they do not support asynchronous
	actions {setter} - list of available actions
	getters {getter} - gets the information you request, by calling specific getters(functions)
*/