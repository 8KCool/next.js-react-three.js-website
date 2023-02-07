import * as types from './types'

export default function HashtagHeader({ text, position }: types.Props) {
  let align: string = ''
  if (position === 'left') align = 'ml-40'
  if (position === 'center') align = 'm-auto'
  if (position === 'right') align = 'ml-auto '
  return (
    <div
      className={`mx-auto flex h-[38px] w-[158px] items-center justify-center rounded-[30px] bg-neutralBlack-50 p-2 text-neutralGray-10 ${align}`}
    >
      <p>{text}</p>
    </div>
  )
}
