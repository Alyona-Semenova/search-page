import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/services/api';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        users: [],
        searchResults: [],
        selectedUser: null,
        error: null,
        isLoading: false,
    },

    getters: {
        users: state => state.users,
        searchResults: state => state.searchResults,
        selectedUser: state => state.selectedUser,
        error: state => state.error,
        isLoading: state => state.isLoading,
    },

    mutations: {
        SET_USERS(state, users) {
            state.users = users;
        },
        SET_SEARCH_RESULTS(state, results) {
            state.searchResults = results;
        },
        SET_SELECTED_USER(state, user) {
            state.selectedUser = user;
        },
        SET_ERROR(state, error) {
            state.error = error;
        },
        SET_LOADING(state, isLoading) {
            state.isLoading = isLoading;
        },
        CLEAR_SEARCH(state) {
            state.searchResults = [];
            state.selectedUser = null;
        },
    },

    actions: {
        async fetchUsers({commit}) {
            commit('SET_LOADING', true);
            try {
                const response = await api.getUsers();
                commit('SET_USERS', response.data);
                commit('SET_ERROR', null);
            } catch (error) {
                commit('SET_ERROR', error);
                console.error('Ошибка при получении данных пользователей:', error);
            } finally {
                commit('SET_LOADING', false);
            }
        },
        searchUsers({state, commit}, names) {
            const results = state.users.filter(user =>
                names.some(name =>
                    user.id.toString().includes(name.trim()) ||
                    user.username.toLowerCase().includes(name.trim().toLowerCase()) ||
                    user.name.toLowerCase().includes(name.trim().toLowerCase())
                )
            );

            commit('SET_SEARCH_RESULTS', results);
            commit('SET_SELECTED_USER', null);
        },
        selectUser({commit}, user) {
            commit('SET_SELECTED_USER', user);
        },
        clearSearch({commit}) {
            commit('CLEAR_SEARCH');
        },
    },
    modules: {}
})
