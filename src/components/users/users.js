import { users } from '@/utils/api'
import axios from 'axios'

const Pusher = require('pusher-js');
Pusher.logToConsole = true;

const pusher = new Pusher(process.env.VUE_APP_PUSHER_APP_KEY, {
    cluster: process.env.VUE_APP_PUSHER_APP_CLUSTER
});

export default {
    data() {
        return {
            users: []
        }
    },
    mounted() {
        axios.get(users())
            .then(res => {
                this.users = res.data.data
            })
            .catch(e => console.log(e))
        
        pusher.subscribe(`users-update`)
            .bind('user', (data) => {
                this.users.unshift(data)
            });
    },
    components: {
        newUserModal: () => import('@/components/new-user-modal')
    }
}