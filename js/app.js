

const {createApp}  = Vue

createApp({
    data() {
        return {
            message: 'Hello World',
            img:'https://picsum.photos/seed/picsum/600/300',
            ans: 'Answer here',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, officiis beatae expedita assumenda at facilis sapiente quod ipsum dolorem dolore illum? Facere, ad esse eligendi quos quae ipsa labore consectetur.'
        }
    }
}).mount('#app');
