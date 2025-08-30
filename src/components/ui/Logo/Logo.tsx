import React from "react";
import {LogoProps} from "@components/ui/Logo/types";
import {styles} from "./styles";
import LogoSvg from "@/assets/images/logo.svg";


const Logo = ({width, height, color}: LogoProps) => {
    return <LogoSvg style={styles.logo} width={width} height={height} fill={color}/>;
};

export default Logo;

