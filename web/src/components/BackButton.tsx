import { ArrowULeftUp, ArrowUUpLeft } from "phosphor-react";

export function BackButton({href}:React.AnchorHTMLAttributes<HTMLAnchorElement>){
  return (
    <a 
      href={href}
      aria-label="Voltar" 
    >
      <ArrowUUpLeft size={24} 
        alt="Voltar" 
        className="w-11 h-11 bg-white absolute ml-3 mt-6 rounded-full flex items-center justify-center hover:shadow-md hover:shadow-sky-400 transition-shadow active:text-sky-400 p-3"/>
    </a>
  )
}