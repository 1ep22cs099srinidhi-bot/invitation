// Centralized photo configuration mapping to files in public/wedding_invitation_photo_placeholders/
// Supports both .jpg, .png, .jpeg, and .webp extensions automatically

const rawBase = import.meta.env.BASE_URL || '/';
const BASE_PATH = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;
const formatPath = (path) => `${BASE_PATH}${path.startsWith('/') ? path.slice(1) : path}`;

export const photos = {
  hero: formatPath("wedding_invitation_photo_placeholders/01_hero_background.jpg"),
  welcome: formatPath("wedding_invitation_photo_placeholders/02_welcome_photo.jpg"),
  groom: formatPath("wedding_invitation_photo_placeholders/03_groom_portrait.png"),
  bride: formatPath("wedding_invitation_photo_placeholders/04_bride_portrait.png"),
  venue: formatPath("wedding_invitation_photo_placeholders/05_venue_background.jpg"),
  gallery1: formatPath("wedding_invitation_photo_placeholders/06_gallery_01.jpg"),
  gallery2: formatPath("wedding_invitation_photo_placeholders/07_gallery_02.jpg"),
  gallery3: formatPath("wedding_invitation_photo_placeholders/08_gallery_03.jpg"),
  gallery4: formatPath("wedding_invitation_photo_placeholders/09_gallery_04.jpg"),
  final: formatPath("wedding_invitation_photo_placeholders/10_final_background.jpg")
};

export const handleImageError = (e) => {
  const currentSrc = e.target.src;
  if (currentSrc.endsWith('.png')) {
    e.target.src = currentSrc.replace('.png', '.jpg');
  } else if (currentSrc.endsWith('.jpg')) {
    e.target.src = currentSrc.replace('.jpg', '.png');
  } else if (currentSrc.endsWith('.jpeg')) {
    e.target.src = currentSrc.replace('.jpeg', '.png');
  }
};

export const galleryList = [
  {
    id: 1,
    src: photos.gallery1,
    alt: "Keerthi & Poornima Pre-Wedding Moment 1",
    caption: "A quiet moment together",
    layout: "featured"
  },
  {
    id: 2,
    src: photos.gallery2,
    alt: "Keerthi & Poornima Pre-Wedding Moment 2",
    caption: "Joy and togetherness",
    layout: "offset"
  },
  {
    id: 3,
    src: photos.gallery3,
    alt: "Keerthi & Poornima Pre-Wedding Moment 3",
    caption: "Laughter shared",
    layout: "portrait"
  },
  {
    id: 4,
    src: photos.gallery4,
    alt: "Keerthi & Poornima Pre-Wedding Moment 4",
    caption: "Beginning of forever",
    layout: "wide"
  }
];
