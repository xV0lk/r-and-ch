import Header from './Header'

type Props = {
  children?: JSX.Element
}
export const PageLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="w-screen h-screen bg-gradient-to-t from-slate-900 to-darkgrad-2">
      <div className="w-full h-20 border border-slate-900">
        <Header />
      </div>
      <div className="h-[calc(100%-5rem-8rem)]">
        <div className="flex w-screen h-full">{children}</div>
      </div>
      <div className="absolute bottom-0 left-0 w-screen h-32 bg-none border border-slate-800" />
    </div>
  )
}
