import LinkTreeLayout from "../components/LinkTreeLayout";
import profileImg from "../assets/profilePortraits.jpg";
import bgImg from "../assets/portraits-bg.jpg";


const portraitsButtons = [
  { label: "Visit Website",         href: "https://kbphotographer.com/" },
  { label: "Contact Page",           href: "https://kbphotographer.com/headshots" },
  { label: "Shop Office Decoration", href: "https://kbphotographer.com/store#!/art?headless=true" },
  { label: "Visit Galleries",        href: "https://kbphotographer.com/galleries#!/client?headless=true" },
  { label: "Vendors List",           href: "https://kbphotographer.com/vendors-list" },
  { label: "Take Me to the Blog",    href: "https://kbphotographer.com/blog" },
];




export default function Portraits() {
  return (
    <LinkTreeLayout
      bgImage={bgImg}
      profileImage={profileImg}
      name="KB Photographer"
      description="Colorado Portrait Photographer capturing authentic moments with a warm, natural style"
      accentColor="#943a02"
      accentColorLight="#ffd9c2"
      buttons={portraitsButtons}
    />
  );
}
