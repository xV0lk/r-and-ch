import { FC } from 'react'

const BaseLanding: FC = () => {
  return (
    <div className="h-full w-full overflow-auto">
      <div className="mt-[30vh] text-center align-middle px-12 mx-auto">
        <h1 className="text-4xl font-lato h-20 font-bold">This is a test app</h1>
        <div className="h-8" />
        <h2 className="text-xl">Where people can interact with a playlist in youtube</h2>
      </div>
    </div>
  )
}

export default BaseLanding
