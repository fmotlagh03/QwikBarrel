const Link = ({
    children,
    className,
}) => {
    return <a
        href={href}
        className={className || ""}
    >
        saeed - {children}
    </a>
}

export default Link
