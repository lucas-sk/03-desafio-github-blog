import { FaBuilding, FaGithub, FaUserFriends } from 'react-icons/fa'
import { Link } from '../../../../components/Link'
import { useGitHub } from '../../../../hooks/useGithub'
import * as S from './styles'

export function Profile() {
  const { userInfo } = useGitHub()

  return (
    <S.ProfileContainer>
      <img
        src={userInfo?.avatar_url ?? 'https://github.com/lucas-sk.png'}
        alt="foto do perfil"
      />
      <div>
        <S.ProfileContainerHeader>
          <h1>{userInfo?.name ?? 'Lucas Henrique Dos Santos'}</h1>
          <Link href={userInfo?.html_url ?? 'https://github.com/lucas-sk'}>
            ver no github
          </Link>
        </S.ProfileContainerHeader>
        <p>
          {userInfo?.bio ??
            'Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.'}
        </p>
        <S.ProfileContainerFooter>
          <div>
            <FaGithub />
            <span>{userInfo?.login ?? 'cameronwll'}</span>
          </div>
          <div>
            <FaBuilding />
            <span>{userInfo?.company ?? 'Rocketseat'}</span>
          </div>
          <div>
            <FaUserFriends />
            <span>{userInfo?.followers ?? 32} seguidores</span>
          </div>
        </S.ProfileContainerFooter>
      </div>
    </S.ProfileContainer>
  )
}
