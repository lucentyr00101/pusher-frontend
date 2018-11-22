import axios from 'axios'
import { newUser } from '@/utils/api'

export default {
    data() {
        return {
            name: '',
            email: '',
            password: '',
        }
    },
    methods: {
        resetFields() {
            this.name = ''
            this.email = ''
            this.comment = ''
        },
        hideModal() {
            // eslint-disable-next-line
            $('#newUserModal').modal('hide')
        },
        addUser() {
            let formData = new FormData()
            formData.append('name', this.name)
            formData.append('email', this.email)
            formData.append('password', this.password)
            axios.post(newUser(), formData)
                .then(res => {
                    console.log(res)
                    this.resetFields()
                })
                .catch(e => console.log(e))
            this.hideModal()
        }
    }
}