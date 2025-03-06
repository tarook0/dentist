import React from "react";
import { Button, TextField, MenuItem, Box, Modal, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Patient } from "../models/Patient";

interface AddReservationModalProps {
  open: boolean;
  onClose: () => void;
  onAddReservation: (patient: Patient) => void;
}

// Validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  phoneNumber: Yup.string()
    .matches(/^\d{3}-\d{3}-\d{4}$/, "Invalid phone number format (XXX-XXX-XXXX)")
    .required("Phone number is required"),
  bloodType: Yup.string().required("Blood type is required"),
  reservationType: Yup.string().required("Reservation type is required"),
  reservationDate: Yup.date()
    .min(new Date(), "Reservation date cannot be in the past")
    .required("Reservation date is required"),
});

export const AddReservationModal: React.FC<AddReservationModalProps> = ({
  open,
  onClose,
  onAddReservation,
}) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      phoneNumber: "",
      bloodType: "",
      reservationType: "previous" as "previous" | "direct" | "emergency",
      reservationDate: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      const newPatient: Patient = {
        id: Math.random().toString(),
        name: values.name,
        phoneNumber: values.phoneNumber,
        bloodType: values.bloodType,
        reservationType: values.reservationType,
        reservationDate: values.reservationDate,
      };
      onAddReservation(newPatient);
      resetForm(); // Clear form data after submission
      onClose();
    },
  });

  // Blood type options
  const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" gutterBottom>
          Add New Reservation
        </Typography>
        <Box component="form" onSubmit={formik.handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            label="Name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            required
            fullWidth
          />
          <TextField
            label="Phone Number"
            name="phoneNumber"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
            helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
            required
            fullWidth
          />
          <TextField
            select
            label="Blood Type"
            name="bloodType"
            value={formik.values.bloodType}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.bloodType && Boolean(formik.errors.bloodType)}
            helperText={formik.touched.bloodType && formik.errors.bloodType}
            required
            fullWidth
          >
            {bloodTypes.map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Reservation Type"
            name="reservationType"
            value={formik.values.reservationType}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.reservationType && Boolean(formik.errors.reservationType)}
            helperText={formik.touched.reservationType && formik.errors.reservationType}
            required
            fullWidth
          >
            <MenuItem value="previous">Previous</MenuItem>
            <MenuItem value="direct">Direct</MenuItem>
            <MenuItem value="emergency">Emergency</MenuItem>
          </TextField>
          <TextField
            label="Reservation Date"
            type="date"
            name="reservationDate"
            InputLabelProps={{ shrink: true }}
            value={formik.values.reservationDate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.reservationDate && Boolean(formik.errors.reservationDate)}
            helperText={formik.touched.reservationDate && formik.errors.reservationDate}
            required
            fullWidth
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Add Reservation
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};