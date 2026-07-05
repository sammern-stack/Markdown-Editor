import type { FC, SVGProps } from "react";
import styles from "./Icon.module.scss";

type SvgComponent = FC<SVGProps<SVGSVGElement>>;

const icons = import.meta.glob("../../assets/*.svg", {
  eager: true,
  import: "default",
}) as Record<string, SvgComponent>;

interface IconProps extends SVGProps<SVGSVGElement> {
  icon: string;
}

export const Icon = ({ icon, ...props }: IconProps) => {
  const Component = icons[`../../assets/images/${icon}.svg`];

  if (!Component) {
    console.warn(`Icon "${icon}" not found`);
    return null;
  }

  return (
    <div className={styles.iconWrapper}>
      <Component {...props} />
    </div>
  );
};
