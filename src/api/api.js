import * as axios from 'axios'

const axiosInst = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "3794fb54-9122-4382-888d-4590375cb765"
    }
})

export const usersAPI = {
    fetchUsers(currentPage, amountOnPage) {
        return axiosInst.get(`users?page=${currentPage}&count=${amountOnPage}`)
            .then(res => res.data)
    },
    follow (id) {
        return axiosInst.post(`follow/${id}`)     
    },
    unfollow (id) {
        return axiosInst.delete(`follow/${id}`)     
    },
    getProfile(userId) {
        console.warn('Obsolete method. Use profileAPI.getProfile method')
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return axiosInst.get(`profile/${userId}`)
        .then((res) => res.data, (err) => console.log('Fetching Error:', err))
    },
    getStatus(userId) {
        return axiosInst.get(`profile/status/${userId}`)
        .then((res) => res.data, (err) => console.log('Fetching Error:', err))
    },
    updateStatus(status) {
        return axiosInst.put(`profile/status`, {status: status})
    }
}

export const authAPI = {
    auth() {
        return axiosInst.get('auth/me')
        /* .then(res => {
            if (res.data.resultCode === 0) {
                return res.data.data
            } else { throw new Error('Athorize, please')}
        }) */
    },
    login(loginData) {
        let {email, password, rememberMe} = loginData
        return axiosInst.post('auth/login', {email, password, rememberMe})
    },
    logout() {
        return axiosInst.delete('auth/login')
        .then(res => {
            return res
        }).catch((error) => {
            console.log(error)
        })
    }
}



