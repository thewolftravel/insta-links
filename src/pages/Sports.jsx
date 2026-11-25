import LinkTreeLayout from "../components/LinkTreeLayout";
import profileImg from "../assets/profileSports.jpg";
import bgImg from "../assets/sports-bg.jpg";
import { href } from "react-router-dom";

const sportsButtons = [
  { label: "Visit Website",         href: "https://kbphotographer.com/" },
  { label: "Contact Page",           href: "https://kbphotographer.com/ski" },
  { label: "Shop Office Decoration", href: "https://kbphotographer.com/store#!/art?headless=true" },
  { label: "Visit Galleries",        href: "https://kbphotographer.com/galleries#!/client?headless=true" },
  { label: "Vendors List",           href: "https://kbphotographer.com/vendors-list" },
  { label: "Take Me to the Blog",    href: "https://kbphotographer.com/blog" },
  {label: "Save My Contact", href: `${import.meta.env.BASE_URL}kbphotographer.vcf`},
  { label: "Support the photographer. Send coffee.",    href: "https://www.paypal.com/ncp/payment/TBW9YAUANXR48" },
  {label: "Big gigantic @winterpark | get tickets", href: "https://www.eventbrite.com/e/big-gigantic-live-at-janefest-tickets-2004735888007?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=wsa&aff=ebdsshwebmobile"}, 
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
      instagramUrl="https://www.instagram.com/kbphotographer.sports/"
    />
  );
}
