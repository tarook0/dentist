import { create } from 'zustand';

export type PatientTableType = 'incoming' | 'waiting' | 'current';

interface Patient {
  id: string;
  name: string;
  phoneNumber: string;
  bloodType: string;
  reservationType: 'previous' | 'direct' | 'emergency';
  reservationDate: string;
}

interface PatientStore {
  incomingPatients: Patient[];
  waitingPatients: Patient[];
  currentPatients: Patient[]; // Array of patients
  addReservation: (patient: Patient) => void;
  movePatient: (patientId: string, from: PatientTableType, to: PatientTableType) => void;
  startTreatment: (patientId: string) => void;
  cancelReservation: (patientId: string) => void;
}

// Dummy data
const dummyPatients: Patient[] = [
  {
    id: "1",
    name: "John Doe",
    phoneNumber: "123-456-7890",
    bloodType: "A+",
    reservationType: "previous",
    reservationDate: "2023-10-01",
  },
  {
    id: "2",
    name: "Jane Smith",
    phoneNumber: "987-654-3210",
    bloodType: "O-",
    reservationType: "direct",
    reservationDate: "2023-10-02",
  },
  {
    id: "3",
    name: "Alice Johnson",
    phoneNumber: "555-555-5555",
    bloodType: "B+",
    reservationType: "emergency",
    reservationDate: "2023-10-03",
  },
  {
    id: "4",
    name: "Bob Brown",
    phoneNumber: "111-222-3333",
    bloodType: "AB+",
    reservationType: "previous",
    reservationDate: "2023-10-04",
  },
];

export const usePatientStore = create<PatientStore>((set) => ({
  // Initialize with dummy data
  incomingPatients: dummyPatients.slice(0, 2), // First 2 patients as incoming
  waitingPatients: dummyPatients.slice(2, 3), // Next 1 patient as waiting
  currentPatients: dummyPatients.slice(3, 4), // Last 1 patient as current

  addReservation: (patient) => set((state) => ({
    incomingPatients: [...state.incomingPatients, patient]
  })),

  movePatient: (patientId, from, to) => set((state) => {
    const fromArray = state[`${from}Patients`];
    const toArray = state[`${to}Patients`];
    const patientIndex = fromArray.findIndex(p => p.id === patientId);
    
    if (patientIndex === -1) return state;
    
    const movedPatient = fromArray[patientIndex];
    
    return {
      [`${from}Patients`]: fromArray.filter(p => p.id !== patientId),
      [`${to}Patients`]: [...toArray, movedPatient]
    };
  }),

  startTreatment: (patientId) => set((state) => {
    const patient = state.waitingPatients.find(p => p.id === patientId);
    if (!patient) return state;
    
    return {
      waitingPatients: state.waitingPatients.filter(p => p.id !== patientId),
      currentPatients: [...state.currentPatients,patient], // Wrap the patient in an array
    };
  }),

  cancelReservation: (patientId) => set((state) => ({
    incomingPatients: state.incomingPatients.filter(p => p.id !== patientId),
    waitingPatients: state.waitingPatients.filter(p => p.id !== patientId),
    currentPatients: state.currentPatients.filter(p => p.id !== patientId),
  })),
}));