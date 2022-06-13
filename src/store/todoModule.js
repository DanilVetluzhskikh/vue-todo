import axios from "axios";

export const todoModule = {
    state: () => ({
        todos: [],
        isLoading: false,
    }),
    getters: {
        getTodos(state){
            return state.todos
        },
        getLoading(state){
            return state.isLoading
        }
    },
    mutations: {
        setTodos(state, todos){
            state.todos = [...todos]
        },
        addTodo(state, todo) {
            state.todos = [...state.todos, todo]
        },
        changeTodoCompleted(state, index){
            state.todos[index].completed = !state.todos[index].completed
        },
        deleteTodo(state, index){
            state.todos.splice(index, 1)
        },
        setIsLoading(state, bool){
            state.isLoading = bool
        }
    },
    actions: {
        async fetchTodos({commit}) {
            try {
                commit('setIsLoading', true);
                const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10');
                commit('setTodos', response.data)
            } catch (e) {
                console.log(e)
            } finally {
                commit('setIsLoading', false);
            }
        },
    },
    namespaced: true
}