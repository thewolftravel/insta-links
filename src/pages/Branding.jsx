import LinkTreeLayout from "../components/LinkTreeLayout";
import profileImg from "../assets/profileBranding.jpg";
import bgImg from "../assets/branding-bg.jpg";

const brandingButtons = [
  { label: "Visit Website",         href: "https://kbphotographer.com/" },
  { label: "Contact Page",           href: "https://kbphotographer.com/headshots" },
  { label: "Shop Office Decoration", href: "https://kbphotographer.com/store#!/art?headless=true" },
  { label: "Visit Galleries",        href: "https://kbphotographer.com/galleries#!/client?headless=true" },
  { label: "Vendors List",           href: "https://kbphotographer.com/vendors-list" },
  { label: "Take Me to the Blog",    href: "https://kbphotographer.com/blog" },
];



export default function Branding() {
  return (
    <LinkTreeLayout
      bgImage={bgImg}
      profileImage={profileImg}
      name="KB Photographer"
      description="Colorado Branding Photographer offering Outdoor Headshots"
      accentColor="#2f5972"
      accentColorLight="#d9d9d9"
      bgPosition=" center center"
      buttons={brandingButtons}
    />
  );
}
