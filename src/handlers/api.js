import axios from 'axios'

export const getCheer = (id) => {
  return axios.get(`/api/v0/cheer/random?id=${id}`).then(response => response.data)
}