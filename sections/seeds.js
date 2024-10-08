import { FiveHundred, Instagram, Phone, Telegram, Unsplash } from "@/components/Icons";

// ---------------------- change home data from here ------------------------
export const homeData = {
  hero: {
    image: "/homeImages/hero2.jpg",
    title: "Hello!",
  },
  trophies: {
    image: "/homeImages/trophy.jpg",
    trophyItems: [
      { name: "8", image: "/trophies/8.png" },
      { name: "7", image: "/trophies/7.png" },
      { name: "6", image: "/trophies/6.png" },
      { name: "4", image: "/trophies/4.png" },
      { name: "2", image: "/trophies/2.png" },
      { name: "1", image: "/trophies/1.png" },
      { name: "3", image: "/trophies/3.png" },
      { name: "9", image: "/trophies/9.png" },
      { name: "10", image: "/trophies/10.png" },
      { name: "11", image: "/trophies/11.png" },
      { name: "12", image: "/trophies/12.png" },
      { name: "13", image: "/trophies/13.png" },
      { name: "14", image: "/trophies/14.png" },
      { name: "5", image: "/trophies/5.png" },
      { name: "15", image: "/trophies/15.png" },
      { name: "16", image: "/trophies/16.png" },
      { name: "17", image: "/trophies/17.png" },
      { name: "18", image: "/trophies/18.png" },
    ],
  },
  images: {
    image: "/homeImages/dejavu.jpeg",
    title: "Gallery",
    linkText: "View More",
  },
  about: {
    image: "/homeImages/about.jpg",
    title: "About",
    linkText: "View More",
  },
  instagram: {
    image: "/homeImages/blur.jpg",
    title: "Arash's Instagram",
    buttonText: "Say hi to me !",
    buttonLink: "https://instagram.com/arash_payam",
  },
  videos: {
    video: "/videos/resume.mp4",
    videoCover: "/homeImages/cover.jpg",
    videoCoverSmall: "/homeImages/videoCoverV.jpg",
    title: "Youtube",
    linkText: "View More",
    linkAddress: "https://www.youtube.com/@arashpayam622",
    smallVideo: "/videos/rezomeV.mp4",
  },
  contact: {
    phoneText: "Give me a visit",
    phoneNo: "+989211808970",
    socials: [
      { name: "instagram", icon: <Instagram />, address: "https://instagram.com/arash_payam" },
      { name: "telegram", icon: <Telegram />, address: "https://telegram.me/arash_payam" },
      { name: "phone", icon: <Phone />, address: "tel:+989211808970" },
      { name: "unsplash", icon: <Unsplash />, address: "https://unsplash.com/@arash_payam" },
      { name: "fiveHundred", icon: <FiveHundred />, address: "https://500px.com/old-fox" },
    ],
  },
};
// ---------------------- change about data from here ------------------------
export const aboutData = {
  title: "About",
  description:
    "Arash Payam is a dedicated filmmaker and photographer with over eight years of experience in the industry. His journey has taken him to various film festivals and photography contests, where his work has been recognized and celebrated. He’s passion for visual storytelling is evident in every project he undertakes, whether it’s behind the camera or in the editing room. He is always exploring new techniques and perspectives to enhance his creative vision. Whether it’s a short film, a documentary, or a photograph.",
  images: [
    { name: "left", imageAddress: "/about/left.jpg" },
    { name: "middle", imageAddress: "/about/middle.jpg" },
    { name: "right", imageAddress: "/about/right.jpg" },
  ],
};

// ---------------------- change gallery data from here ------------------------
export const galleryData = [
  { name: "Lonely in crowd", imageClass: "", className: "vertical", url: "/workImages/01-lonleyInCrowd-v.JPG" },
  { name: "Ghost in town", imageClass: "", className: "vertical", url: "/workImages/02-ghostInTown-v.JPG" },
  { name: "I'm done", imageClass: "", className: "horizontal", url: "/workImages/03-imDone-h.jpg" },
  { name: "Roof of the sky", imageClass: "", className: "vertical", url: "/workImages/04-roofOfTheSky.JPG" },
  { name: "The beach", imageClass: "", className: "", url: "/workImages/05-theBeach.JPG" },
  { name: "Lonely ship", imageClass: "", className: "", url: "/workImages/06-lonleyShip.jpeg" },
  { name: "Sad girl", imageClass: "", className: "", url: "/workImages/07-sadGril.jpg" },
  { name: "Neon night", imageClass: "", className: "vertical", url: "/workImages/08-neonNight-v.JPG" },
  { name: "Freedom", imageClass: "", className: "", url: "/workImages/09-freedom.jpg" },
  { name: "An old man", imageClass: "", className: "vertical", url: "/workImages/10-anOldman-v.jpg" },
  { name: "Into the tunnel", imageClass: "", className: "", url: "/workImages/11-intoTheTunnel.jpeg" },
  { name: "No way!", imageClass: "", className: "vertical", url: "/workImages/12-noWay-v.JPG" },
  { name: "Into the heaven", imageClass: "", className: "vertical", url: "/workImages/13-intoTheHeaven-v.JPG" },
  { name: "Look up", imageClass: "", className: "vertical", url: "/workImages/14-lookUp-v.jpg" },
  { name: "Break from the world", imageClass: "", className: "", url: "/workImages/15-breakFromTheWorld-h.jpeg" },
  { name: "Ship is down", imageClass: "", className: "vertical", url: "/workImages/16-shipIsDown-v.jpg" },
  { name: "Breathe", imageClass: "", className: "horizontal", url: "/workImages/17-breath-h.jpeg" },
  { name: "The alley", imageClass: "", className: "", url: "/workImages/18-the alley.jpeg" },
  { name: "Fast road", imageClass: "", className: "vertical", url: "/workImages/19-fastRoad.JPG" },
  { name: "The moon", imageClass: "", className: "vertical", url: "/workImages/20-theMoon-v.png" },
  { name: "Dejavu", imageClass: "", className: "", url: "/workImages/22-dejaVu.jpeg" },
  { name: "Theater house", imageClass: "", className: "vertical", url: "/workImages/21-theaterHouse-v.jpg" },
  { name: "Fisherman", imageClass: "", className: "vertical", url: "/workImages/23-fisherman-v.jpeg" },
  { name: "Ghost girl", imageClass: "", className: "vertical", url: "/workImages/24-ghostGirl-v.JPG" },
  { name: "Textures", imageClass: "", className: "horizontal", url: "/workImages/25-textures-h.jpg" },
  { name: "Dancing shadows", imageClass: "", className: "vertical", url: "/workImages/26-dancingShadows-v.JPG" },
  { name: "Raging tower", imageClass: "", className: "", url: "/workImages/27-ragingTower.JPG" },
  { name: "An old man", imageClass: "", className: "vertical", url: "/workImages/28-anOldman-v.jpg" },
  { name: "Cozy corner", imageClass: "", className: "vertical", url: "/workImages/29-cozyCorner.jpg" },
  { name: "What if", imageClass: "", className: "vertical", url: "/workImages/30-whatIf-v.JPG" },
  { name: "The stairs", imageClass: "", className: "vertical", url: "/workImages/31-theStairs-v.jpg" },
  { name: "An empty way", imageClass: "", className: "vertical", url: "/workImages/32-anEmptyWay-v.JPG" },
  { name: "The light", imageClass: "", className: "", url: "/workImages/33-theLight.JPG" },
  { name: "A horse with no name", imageClass: "", className: "vertical", url: "/workImages/34-aHorseWithNoName-v.JPG" },
  { name: "Dancing fire", imageClass: "", className: "vertical", url: "/workImages/35-dancingFire-v.jpg" },
  { name: "Khayam", imageClass: "", className: "horizontal", url: "/workImages/36-khayam-h.jpg" },
  { name: "Lonely boat", imageClass: "", className: "vertical", url: "/workImages/37-lonleyBoat-v.JPG" },
  { name: "Cold building", imageClass: "", className: "horizontal", url: "/workImages/38-coldBulding-h.jpeg" },
  { name: "The wish", imageClass: "object-center", className: "", url: "/workImages/39-theWish.JPG" },
  { name: "Sky is hight", imageClass: "", className: "", url: "/workImages/40-skyIsHigh.jpg" },
  { name: "Subway", imageClass: "", className: "", url: "/workImages/subway.jpeg" },
  { name: "cold Fog", imageClass: "", className: "", url: "/workImages/coldFog.jpg" },
  { name: "don't Go Further", imageClass: "", className: "vertical", url: "/workImages/dontGoFurther.jpg" },
  { name: "The sea", imageClass: "", className: "", url: "/workImages/theSea.jpg" },
  { name: "Bravery", imageClass: "", className: "horizontal", url: "/workImages/bravery.jpg" },
];

// ---------------------------------- Guidance -----------------------------
/*------------- imageClass -------------------
object-center ---->  center;
object-left ---->  left;
object-left-bottom ---->  left bottom;
object-left-top ---->  left top;
object-right ---->  right;
object-right-bottom ---->  right bottom;
object-right-top ---->  right top;
object-top ---->  top;
*/

/* ------------- className -------------
horizontal ----> ofoghi
vertical ----> amudi
big ----> bozorg(ofoghi va amudi)
*/
