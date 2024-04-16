interface IconPropstype extends React.AnchorHTMLAttributes<HTMLElement> {
	icon: JSX.Element
}

const Icon = ({ icon, className, onClick }: IconPropstype) => {
	return (
		<div onClick={onClick} className={` w-min p-1 ring-2 rounded-full cursor-pointer ${className}`}>
			{icon}
		</div>
	)
}

export default Icon