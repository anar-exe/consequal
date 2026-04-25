export const siteConfig = {
  brandName: "consequal.",
  brandTagline: "Sonic architecture for the future.",
  heroTitle: "Crafting Sonic Experiences.",
  heroSubtitle: "Explore the discography, exclusive demo tracks, and the creative journey behind the music.",
  copyrightYear: new Date().getFullYear(),
};

// Add your social media URLs here
export const socialLinks = [
  { id: 1, platform: "Instagram", url: "https://instagram.com" },
  { id: 2, platform: "Twitter/X", url: "https://twitter.com" },
  { id: 3, platform: "SoundCloud", url: "https://soundcloud.com" },
  { id: 4, platform: "Spotify", url: "https://spotify.com" },
];

// Add your contact emails here
export const contactInfo = [
  { id: 1, label: "booking@consequal.com", url: "mailto:booking@consequal.com" },
  { id: 2, label: "mgmt@consequal.com", url: "mailto:mgmt@consequal.com" },
];

// Add your albums here. 
// Place your album cover photos inside the "public/images" folder.
// Then set coverUrl to '/images/your-photo.jpg'. 
// Leave empty to use the dynamic gradient placeholder.
export const albums = [
  { 
    id: 1, 
    title: 'Midnight Synthesis', 
    year: '2023', 
    tracks: 12, 
    coverUrl: 'https://picsum.photos/400?random=1' // e.g., '/images/album1.jpg'
  },
  { 
    id: 2, 
    title: 'Neon Horizons', 
    year: '2022', 
    tracks: 10, 
    coverUrl: 'https://picsum.photos/400?random=2' 
  },
  { 
    id: 3, 
    title: 'Analog Dreams', 
    year: '2021', 
    tracks: 8, 
    coverUrl: 'https://picsum.photos/400?random=3' 
  },
  { 
    id: 4, 
    title: 'First Frequency', 
    year: '2020', 
    tracks: 7, 
    coverUrl: 'https://picsum.photos/400?random=4' 
  },
];

// Add your demo tracks here.
// Place your .mp3 or .wav files inside the "public/audio" folder.
// Then set audioUrl to '/audio/your-track.mp3' to make the play buttons functional!
export const demos = [
  { 
    id: 1, 
    title: 'Untitled Synth Lead - v2', 
    duration: '1:45', 
    date: 'Oct 2023',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' // e.g., '/audio/track1.mp3'
  },
  { 
    id: 2, 
    title: 'Bassline Groove test', 
    duration: '2:10', 
    date: 'Sep 2023',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' 
  },
  { 
    id: 3, 
    title: 'Ambient Pad Sketch', 
    duration: '3:05', 
    date: 'Aug 2023',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' 
  },
];
