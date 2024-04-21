import classes from "./SectionHeader.module.css";
import underline from "../../Assets/Images/underline.svg";

type SectionHeaderProps = {
  title: string;
};

const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <h4 className={classes.container}>
      {title}
      <img src={underline} alt="underline" />
    </h4>
  );
};

export default SectionHeader;
