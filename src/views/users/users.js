import { mapActions, mapGetters } from 'vuex';

const Pusher = require('pusher-js');
Pusher.logToConsole = true;

const pusher = new Pusher(process.env.VUE_APP_PUSHER_APP_KEY, {
    cluster: process.env.VUE_APP_PUSHER_APP_CLUSTER
});

export default {
    mounted() {
        this.setUsers()
        pusher.subscribe(`users-update`)
            .bind('user', () => {
                this.setUsers()
            });
    },
    methods: {
        ...mapActions([
            'setUsers'
        ]),
        showUser(id) {
            this.$router.push(`users/${id}`)
        }
    },
    computed: {
        ...mapGetters([
            'getUsers'
        ])
    },
    components: {
        newUserModal: () => import('@/components/new-user-modal')
    }
}