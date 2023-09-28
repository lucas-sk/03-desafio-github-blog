import {
  FaArrowLeft,
  FaBuilding,
  FaGithub,
  FaUserFriends,
} from 'react-icons/fa'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { Link } from '../../../../components/Link'
import * as S from './styles'

interface InfoCardProps {
  title: string
  createdAt: string
  userName: string
  comments: number
  linkPost: string
}

export function InfoCard({
  title,
  createdAt,
  userName,
  comments,
  linkPost,
}: InfoCardProps) {
  return (
    <S.InfoCardContainer>
      <div>
        <S.InfoCardContainerHeader>
          <Link href="/" startAdorment={<FaArrowLeft />}>
            voltar
          </Link>

          <Link href={linkPost} endAdorment={<FaArrowUpRightFromSquare />}>
            ver no github
          </Link>
        </S.InfoCardContainerHeader>
        <h1>{title}</h1>
        <S.InfoCardContainerFooter>
          <div>
            <FaGithub />
            <span>{userName}</span>
          </div>
          <div>
            <FaBuilding />
            <span>{createdAt}</span>
          </div>
          <div>
            <FaUserFriends />
            <span>{comments} comentários</span>
          </div>
        </S.InfoCardContainerFooter>
      </div>
    </S.InfoCardContainer>
  )
}
