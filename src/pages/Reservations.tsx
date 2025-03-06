import React, { useState } from "react";
import { Button, Box, Typography, Grid } from "@mui/material";
import { PatientTable } from "../components/PatientTable";
import { AddReservationModal } from "../components/AddReservationModal";
import { usePatientStore } from "../store";

export const Reservations: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const addReservation = usePatientStore((state) => state.addReservation);

  return (
    <Box sx={{ padding: 5 }}>
      <Typography variant="h4" gutterBottom>
        Reservations
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setModalOpen(true)}
        sx={{ marginBottom: 3 }}
      >
        Add Reservation
      </Button>

      <AddReservationModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onAddReservation={addReservation}
      />

      <Grid container spacing={2}>
        <Grid item  xs={12} md={7}>
          <Typography variant="h6" gutterBottom>
            Incoming Patients
          </Typography>
          <PatientTable tableType="incoming" />
          <Typography mt={3} variant="h6" gutterBottom>
            Waiting Patients
          </Typography>
          <PatientTable tableType="waiting" />
        </Grid>
        <Grid item xs={12} md={5}>
          <Typography variant="h6" gutterBottom>
            Current Patient
          </Typography>
          <PatientTable tableType="current" />
        </Grid>
        
      </Grid>
    </Box>
  );
};
