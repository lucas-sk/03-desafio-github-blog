import { useContext } from 'react'
import { GitHubContext } from '../context/GitHubContex'

export const useGitHub = () => {
  const context = useContext(GitHubContext)
  return context
}
