import React from "react";


type IconLinkType = {
    url: string;
    iconName: string;
}

const IconLink: React.FC<IconLinkType> = ({url, iconName}) => {

    return (
        <a className={"a"} href={url} target="_blank">
            <i className={"bx " + iconName}></i>
        </a>
    )

}

export default IconLink;