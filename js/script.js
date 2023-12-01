const {createApp} = Vue;

createApp({
    data(){
    return {
        apiUrl: 'server.php',
        todoList:[],
        newList: '',
    };  
    },
    methods: {
        readList(){
            axios
            .get(this.apiUrl)
            .then((res)=> {
                this.todoList = res.data;
            })
        },
        
    },
    mounted(){
        this.readList();
    }
}).mount('#app');