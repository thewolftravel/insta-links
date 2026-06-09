import LinkTreeLayout from "../components/LinkTreeLayout";
import profileImg from "../assets/profileSports.jpg";
import bgImg from "../assets/sports-bg.jpg";

const sportsButtons = [
  { label: "Visit Website",         href: "https://kbphotographer.com/" },
  { label: "Contact Page",           href: "https://kbphotographer.com/ski" },
  { label: "Shop Office Decoration", href: "https://kbphotographer.com/store#!/art?headless=true" },
  { label: "Visit Galleries",        href: "https://kbphotographer.com/galleries#!/client?headless=true" },
  { label: "Vendors List",           href: "https://kbphotographer.com/vendors-list" },
  { label: "Take Me to the Blog",    href: "https://kbphotographer.com/blog" },
];




export default function Sports() {
  return (
    <LinkTreeLayout
      bgImage={bgImg}
      profileImage={profileImg}
      name="KB Photographer"
      description="Colorado Sports Photographer serving Copper Mountain, Vail Resort, Keystone Resort, Arapahoe Basin, Winter Park Resort, Breckenridge Resort"
      accentColor="#79a1b8"
      accentColorLight="#b9d7e8"
      buttons={sportsButtons}
    />
  );
}
