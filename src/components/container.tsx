interface ContainerProps {
    children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({children}) => {
    return (
        <div className="w-full px-5 sm:px-16 md:px-20 2xl:px-40">
            {children}
        </div>
    )
}

export default Container