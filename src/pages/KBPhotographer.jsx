import LinkTreeLayout from "../components/LinkTreeLayout";
import profileImg from "../assets/profileEngagements.jpg";
import bgImg from "../assets/sports-bg.jpg";

const brandingButtons = [
  { label: "Visit Website", href: "https://kbphotographer.com/" },
  { label: "Contact Page", href: "https://kbphotographer.com/contact" },
  { label: "Save My Contact", href: "..." },
  {
    label: "Shop My Store",
    href: "https://kbphotographer.com/store",
  },
  {
    label: "Visit Galleries",
    href: "https://kbphotographer.com/galleries",
  },
  {
    label: "Instagram Couples Portraits",
    href: "https://www.instagram.com/kbphotographer.engagement/",
  },
  {
    label: "Instagram Sports",
    href: "https://www.instagram.com/kbphotographer.sports/",
  },
  {
    label: "Instagram Family Portraits",
    href: "https://www.instagram.com/kbphotographer.portraits/",
  },
  {
    label: "Instagram Branding",
    href: "https://www.instagram.com/kbphotographer.branding/",
  },
  { label: "Take Me to the Blog", href: "https://kbphotographer.com/blog" },
  {
    label: "Support the photographer. Send coffee.",
    href: "https://www.paypal.com/ncp/payment/TBW9YAUANXR48",
  },
];



export default function Bittencourt_k() {
  return (
    <LinkTreeLayout
      bgImage={bgImg}
      profileImage={profileImg}
      name="KB Photographer"
      description="Colorado Photographer offering Outdoor Portrait Sessions"
      accentColor="#2f5972"
      accentColorLight="#d9d9d9"
      bgPosition=" center center"
      buttons={brandingButtons}
      instagramUrl="https://www.instagram.com/bittencourt_k/"
    />
  );
}
