export default {
    data() {
        return {
            post: null,
            comments: []
        }
    },
    mounted() {


    },
    components: {
        comment: () => import('@/components/comment'),
        newUserModal: () => import('@/components/new-user-modal')
    }
}