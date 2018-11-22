import axios from 'axios'
import { showUser } from '@/utils/api'

export default {
    data() {
        return {
            user: null
        }
    },
    mounted () {
        axios.get(showUser(this.$route.params.id))
            .then(res => {
                console.log(res)
                this.user = res.data.data
            })
            .catch(e => console.log(e))
    }
}