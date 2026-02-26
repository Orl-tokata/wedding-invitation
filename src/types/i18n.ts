export type Locale = 'en' | 'kh';

export type Translations = {
  // Landing
  inviteParagraph: string;
  inviteLine: string;
  date: string;
  timeAt: string;      // "at 5:00 PM" / "ម៉ោង ៥ល្ងាច"
  location: string;    // full address
  seeMapNote: string;  // "(Please see the map for details)"

  // Details – general
  swipeDown: string;
  groom: string;       // "Groom" / "កូនប្រុស"
  bride: string;       // "Bride" / "កូនស្រី"
  mr: string;          // "Mr." / "លោក"
  mrs: string;         // "Mrs." / "អ្នកស្រី"
  weInviteYou: string;
  weddingCeremony: string;
  programMap: string;
  contactPhone: string;
  thankYou: string;

  // Details – banking
  abaAccount: string;
  usdAccount: string;
  khrAccount: string;

  // Modals
  scanQrForMaps: string;
  qrGroom: string;    // "Groom's ABA QR" / "QR Code ABA កូនកំលោះ"
  qrBride: string;    // "Bride's ABA QR" / "QR Code ABA កូនក្រមំ"

  // Audio / UI
  artist: string;
  closePlayer: string;
  openPlayer: string;
  play: string;
  pause: string;
  closeModal: string;
  prevSlide: string;
  nextSlide: string;
  locationLabel: string;
};