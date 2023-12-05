import LogoDefault from "image/header__logo.svg"

const Logotype = ({ src = LogoDefault, alt, width, height }) => {

    return (
        <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            style={{ display: 'block', margin: '0 auto' }}
        />
    )
}

export default Logotype