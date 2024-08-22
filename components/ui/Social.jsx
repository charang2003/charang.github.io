import Link from "next/link";

import {FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const socials = [
    {
        icon: <FaGithub />,
        path: "https://github.com/charang2003"
    },
    {
        icon: <FaLinkedin />,
        path: "https://linkedin.com/in/charang2003"
    },
    {
        icon: <FaTwitter />,
        path: ""
    },
    {
        icon: <FaInstagram />,
        path: ""
    },
];


const Social = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link href={item.path} key={index} className={iconStyles}>
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    );
};

export default Social;