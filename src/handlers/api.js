import axios from 'axios'

export const getCheer = (id, noRepeats) => {
  return axios.get(`/api/v0/cheer/random?id=${id}&noRepeats=${noRepeats}`).then(response => response.data)
}