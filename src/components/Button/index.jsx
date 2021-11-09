import classes from "../../utils/classes"

import "./button.scss"

const Button = ({ text, variant = "transparent" }) => {
  const buttonClass = classes("Button", {
    "Button-transparent": variant === "transparent",
    "Button-white": variant === "white",
    "Button-official": variant === "official",
  })

  return <button className={buttonClass}>{text}</button>
}

export default Button
