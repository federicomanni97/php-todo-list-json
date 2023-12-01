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
        addList(){
            if(this.newList === '') {
                return
            }
            console.log(this.newList);
            const data = new FormData();
            data.append ("task", this.newList);
            axios
            .post(this.apiUrl, data)
            .then((res) => {
                this.todoList = res.data;
            })
            .catch(function (error) {
                console.log(error);
            })
        }
    },
    mounted(){
        this.readList();
    }
}).mount('#app');