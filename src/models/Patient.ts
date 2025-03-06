export interface Patient {
  id: string;
  name: string;
  phoneNumber: string;
  bloodType: string;
  reservationType: 'previous' | 'direct' | 'emergency';
  reservationDate: string;
}