import React from "react";


type IconLinkType = {
    url: string;
    iconName: string;
    title?: string;
}

const IconLink: React.FC<IconLinkType> = ({url, iconName, title}) => {

    return (
        <a className={"a"} href={url} target="_blank" title={title ? title: "Nastąpi przekierowanie..."}>
            <i className={"bx " + iconName}></i>
        </a>
    )

}

export default IconLink;