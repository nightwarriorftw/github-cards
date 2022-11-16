import { ProfileType } from "../utils";


interface CardPropType {
    profile: ProfileType
}

const Card = ({profile}: CardPropType) => {
    return (
        <>{profile.name}</>
    )
}

export default Card;
