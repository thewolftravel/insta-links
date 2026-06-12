import LinkTreeLayout from "../components/LinkTreeLayout";
import profileImg from "../assets/profileEngagements.jpg";
import bgImg from "../assets/engagement-bg.jpg";

const engagementsButtons = [
  { label: "Visit Website",         href: "https://kbphotographer.com/" },
   { label: "Contact Page",           href: "https://kbphotographer.com/contact" },
  { label: "Shop Decoration", href: "https://kbphotographer.com/store#!/art?headless=true" },
  { label: "Visit Galleries",        href: "https://kbphotographer.com/galleries#!/client?headless=true" },
  { label: "Vendors List",           href: "https://kbphotographer.com/vendors-list" },
  { label: "Take Me to the Blog",    href: "https://kbphotographer.com/blog" },
  { label: "Support the photographer. Send coffee.",    href: "https://www.paypal.com/ncp/payment/TBW9YAUANXR48" },
];



export default function Engagements() {
  return (
    <LinkTreeLayout
      bgImage={bgImg}
      profileImage={profileImg}
      name="KB Photographer"
      description="Colorado Engagement & Elopement Photographer offering Ski & Snowboarding Sessions"
      accentColor="#5f7f73"
      accentColorLight="#7a8f7b"
      buttons={engagementsButtons}
      instagramUrl="https://www.instagram.com/kbphotographer.engagement/"
    />
  );
}
