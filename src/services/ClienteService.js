import api from "../lib/axios";


export default {
    obtenerClientes(){
        return api.get('/clientes')
    },
    agregarCliente(data){
        return api.post('/clientes', data)
    },
    obtenerCliente(idUser){
        return api.get(`/clientes/${idUser}`)
    },
    actualizarCliente(idUser, payload){
        return api.patch(`/clientes/${idUser}`, payload)
    },
    cambiarEstado(idUser, payload){
        return api.patch(`/clientes/${idUser}`, payload)
    },
    eliminarCliente(idUser){
        return api.delete(`/clientes/${idUser}`)
    }
}