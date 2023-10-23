

const {createApp}  = Vue

createApp({
            
    data() {
        return {
            message: 'un messaggio',
        }
    }
}).mount('#app');

console.log(createApp)