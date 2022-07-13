import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import { AdminTitle } from '../../../components/admin/AdminTitle'
import { AdminLayout } from '../../../components/layouts/AdminLayout'
import { ResponsiveTable } from '../../../components/shared/ResponsiveTable'
import dbConnect from '../../../lib/dbConnect'
import { withSessionSsr } from '../../../lib/withSession'
import Team from '../../../models/Team'
import { TeamMember } from '../../../types/TeamMember'

interface TeamsPros {
  children?: ReactNode
  teams: TeamMember[]
}

const Teams: React.FC<TeamsPros> = ({ teams }) => {
  const router = useRouter()

  return (
    <AdminLayout>
      <div>
        <div className="flex justify-between">
          <AdminTitle title={'Teams'} />
          <button
            className="rounded-lg bg-primary px-4 py-2 text-white"
            onClick={() => router.push('/admin/teams/create')}
          >
            Create New Member
          </button>
        </div>

        <ResponsiveTable />
      </div>
    </AdminLayout>
  )
}

export const getServerSideProps = withSessionSsr(
  async function getServerSideProps({ req }) {
    const user = req.session.user

    if (!user) {
      return {
        redirect: {
          permanent: false,
          destination: '/admin/login',
        },
      }
    }

    await dbConnect()

    /* find all the data in our database */
    const result = await Team.find({})
    const teams = result.map((doc) => {
      const teamMember = doc.toObject()
      teamMember._id = teamMember._id.toString()
      teamMember.socialLinks._id = teamMember.socialLinks._id.toString()
      return teamMember
    })

    return {
      props: {
        user: req.session.user,
        teams,
      },
    }
  }
)

export default Teams
