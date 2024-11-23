// funciones.js
const app = Vue.createApp({
    data() {
        return {
            productos: [], // Almacena los productos cargados
            loading: true, // Estado para indicar carga de datos
        };
    },
    methods: {
        // Método para cargar los datos usando Axios
        async cargarProductos() {
            try {
                const respuesta = await axios.get("data/react-store-products.json"); // Ruta al JSON
                this.productos = respuesta.data; // Almacena los productos
            } catch (error) {
                console.error("Error al cargar los productos:", error); // Muestra errores en consola
            } finally {
                this.loading = false; // Finaliza la carga
            }
        },
    },
    mounted() {
        this.cargarProductos(); // Llama al método cuando el componente está montado
    },
});

// Monta la app Vue en el contenedor
app.mount("#contenedor");
