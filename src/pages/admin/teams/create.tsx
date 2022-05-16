import axios from 'axios'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { AdminTitle } from '../../../components/admin/AdminTitle'
import { AdminLayout } from '../../../components/layouts/AdminLayout'
import { SelectOptionsField } from '../../../components/shared/Forms/SelectOptionsField'
import { TextareaInputField } from '../../../components/shared/Forms/TextareaInputField'
import { TextInputField } from '../../../components/shared/Forms/TextInputField'
import { TeamMember } from '../../../types/TeamMember'
import { CATEGORIES } from '../../../util/constants'
import { createSelectOptions, oneOfOptions } from '../../../util/functions'

interface CreateTeamProps {
  children?: ReactNode
}

const CreateTeam: React.FC<CreateTeamProps> = () => {
  const router = useRouter()
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<TeamMember>()
  const onSubmit = async (values: TeamMember) => {
    try {
      await axios.post('/api/teams', values)
      toast.success('Successfully created the member!')
      await router.push('/admin/teams')
    } catch (e) {
      console.log(e)
      toast.error('Something Went Wrong!')
    }
  }
  return (
    <AdminLayout>
      <div>
        <AdminTitle title="Create A New Team Member" />

        <form className="py-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-5">
            <TextInputField
              control={control}
              label="Enter Name"
              name="name"
              placeholder="Enter the Name"
              error={errors.name?.message}
            />

            <TextInputField
              control={control}
              label="Enter Position"
              name="position"
              placeholder="Enter the Name"
              error={errors.position?.message}
            />
          </div>

          <div className="my-2 grid grid-cols-2 gap-5">
            <TextInputField
              control={control}
              label="Enter Title"
              name="title"
              placeholder="Enter the Title"
              error={errors.title?.message}
            />

            <SelectOptionsField
              options={createSelectOptions(CATEGORIES)}
              rules={{ validate: oneOfOptions }}
              control={control}
              label="Enter Category"
              name="category"
              placeholder="Enter the Category"
              error={errors.category?.message}
            />
          </div>

          <div className="my-2 grid grid-cols-2 gap-5">
            <TextareaInputField
              control={control}
              label="Enter shortDescription"
              name="shortDescription"
              placeholder="Enter the shortDescription"
              error={errors.shortDescription?.message}
            />

            <TextareaInputField
              control={control}
              label="Enter LongDescription"
              name="longDescription"
              placeholder="Enter the LongDescription"
              error={errors.longDescription?.message}
            />
          </div>

          <div className="my-2 grid grid-cols-2 gap-5">
            <TextInputField
              control={control}
              label="Enter Project"
              name="project"
              placeholder="Enter the Project"
              error={errors.project?.message}
            />

            <TextInputField
              control={control}
              label="Enter Image URL"
              name="image"
              placeholder="Enter the image URL"
              error={errors.image?.message}
            />
          </div>

          <div className="my-2 grid grid-cols-2 gap-5">
            <TextInputField
              control={control}
              label="Enter Facebook URL"
              name="socialLinks.facebook"
              placeholder="Enter the Facebook URL"
              error={errors.socialLinks?.facebook?.message}
            />

            <TextInputField
              control={control}
              label="Enter Twitter URL"
              name="socialLinks.Twitter"
              placeholder="Enter the Twitter URL"
              error={errors.socialLinks?.Twitter?.message}
            />
          </div>

          <button className="my-2 w-full rounded-lg bg-primary px-4 py-2 text-white">
            Create
          </button>
        </form>
      </div>
    </AdminLayout>
  )
}

export default CreateTeam
