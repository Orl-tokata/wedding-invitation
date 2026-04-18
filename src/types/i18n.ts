export type Locale = 'en' | 'kh';

export type Translations = {
  // Landing
  inviteLine: string;
  inviteParagraph: string;
  inviteParagraphDate: string; // Optional additional line for date, if needed for formatting in some languages
  date: string;
  dateInKhmer: string; 
  timeAt: string;      // "at 5:00 PM" / "ម៉ោង ៥ល្ងាច"
  location: string;    // full address
  seeMapNote: string;  // "(Please see the map for details)"

  // Details – general
  swipeDown: string;
  groom: string;       // "Groom" / "កូនប្រុស"
  bride: string;       // "Bride" / "កូនស្រី"
  mr: string;          // "Mr." / "លោក"
  mrs: string;         // "Mrs." / "អ្នកស្រី"
  groomFatherName: string;
  groomMotherName: string;
  brideFatherName: string;
  brideMotherName: string;
  groomName: string;
  brideName: string;
  weInviteYou: string;
  weddingCeremony: string;
  programWedding: string;
  programWeddingTime: string;

  programWeddingDay1Title: string;
  programWeddingDay1Sub: string;

  programWeddingDay1Time1: string;
  programWeddingDay1Item1: string;
  programWeddingDay1Time2: string;
  programWeddingDay1Item2: string;
  programWeddingDay1Time3: string;
  programWeddingDay1Item3: string;

  programWeddingDay2Title: string;
  programWeddingDay2Sub: string;
  
  programWeddingItemTime1: string;
  programWeddingItemTime2: string;
  programWeddingItemTime3: string;
  programWeddingItemTime4: string;
  programWeddingItemTime5: string;
  programWeddingItemTime6: string;
  programWeddingItemTime7: string;
  programWeddingItem1: string;
  programWeddingItem2: string;
  programWeddingItem3: string;
  programWeddingItem4: string;
  programWeddingItem5: string;
  programWeddingItem6: string;
  programWeddingItem7: string;
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
  locationGoogleMaps: string;
};