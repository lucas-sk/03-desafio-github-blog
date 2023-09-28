import axios from 'axios'

export const httpGitHub = axios.create({
  baseURL: 'https://api.github.com/',
})
