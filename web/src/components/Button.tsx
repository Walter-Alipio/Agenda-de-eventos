
interface Props {
  children: React.ReactNode
}
export function Button({children}:Props){
  return (
    <button type="submit"
              className="bg-sky-800 text-bold my-2 w-2/3 py-2 rounded-full shadow-2xl hover:bg-sky-900 duration-150 mx-auto"
            >{children}</button>
  )
}