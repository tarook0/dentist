// import React from "react";
// import { Typography, Card, CardContent } from "@mui/material";
// import { Patient } from "../models/Patient";

// interface CurrentPatientProps {
//   currentPatient: Patient | null;
// }

// export const CurrentPatient: React.FC<CurrentPatientProps> = ({ currentPatient }) => {
//   return (
//     <Card elevation={3} sx={{ mt: 3 }}>
//       <CardContent>
//         <Typography variant="h6" gutterBottom>
//           Current Patient
//         </Typography>
//         {currentPatient ? (
//           <Typography>
//             {currentPatient.name} (Phone: {currentPatient.phoneNumber}, Blood Type: {currentPatient.bloodType})
//           </Typography>
//         ) : (
//           <Typography>No patient is currently being treated.</Typography>
//         )}
//       </CardContent>
//     </Card>
//   );
// };