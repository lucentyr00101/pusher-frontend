import { users } from '@/utils/api'
import axios from 'axios'

export const setUsers = ({commit}) => {
    axios.get(users())
    .then(res => {
        commit('setUsers', res.data.data)
    })
    .catch(e => console.log(e))
}