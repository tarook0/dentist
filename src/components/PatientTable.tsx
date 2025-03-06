import React, { useCallback } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Stack,
  Tooltip, // Import Tooltip
} from "@mui/material";
import { PatientTableType, usePatientStore } from "../store";
import { useShallow } from "zustand/shallow";

interface PatientTableProps {
  tableType: PatientTableType;
}

export const PatientTable: React.FC<PatientTableProps> = React.memo(
  ({ tableType }) => {
    const { patients, startTreatment, cancelReservation, movePatient, completeTreatment } =
      usePatientStore(
        useShallow((state) => ({
          patients: state[`${tableType}Patients`],
          startTreatment: state.startTreatment,
          cancelReservation: state.cancelReservation,
          movePatient: state.movePatient,
          completeTreatment: state.cancelReservation,
        }))
      );

    const handleDragStart = useCallback(
      (e: React.DragEvent<HTMLTableRowElement>, patientId: string) => {
        e.dataTransfer.setData("patientId", patientId);
        e.dataTransfer.setData("sourceTable", tableType);
      },
      [tableType]
    );

    const handleDrop = useCallback(
      (e: React.DragEvent<HTMLTableSectionElement>) => {
        e.preventDefault();
        const patientId = e.dataTransfer.getData("patientId");
        const sourceTable = e.dataTransfer.getData(
          "sourceTable"
        ) as PatientTableType;

        if (sourceTable !== tableType) {
          movePatient(patientId, sourceTable, tableType);
        }
      },
      [movePatient, tableType]
    );

    return (
      <TableContainer component={Paper} elevation={3} sx={{ mt: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Blood Type</TableCell>
              <TableCell>Reservation Type</TableCell>
              <TableCell>Reservation Date</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            sx={{ minHeight: 100 }}
          >
            {patients.length > 0 ? (
              patients.map((patient, index) => (
                <TableRow
                  key={patient.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, patient.id)}
                  onDragOver={(e) => e.preventDefault()}
                  sx={{
                    backgroundColor: index % 2 === 0 ? "#fafafa" : "#ffffff",
                    "&:hover": { backgroundColor: "#f0f0f0" },
                    cursor: "grab",
                  }}
                >
                  <TableCell>{patient.name}</TableCell>
                  <TableCell>{patient.phoneNumber}</TableCell>
                  <TableCell>{patient.bloodType}</TableCell>
                  <TableCell>{patient.reservationType}</TableCell>
                  <TableCell>{patient.reservationDate}</TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={1}>
                      {/* Move from Incoming to Waiting */}
                      {tableType === "incoming" && (
                        <Tooltip title="Move to Waiting">
                          <Button
                            variant="outlined"
                            onClick={() => movePatient(patient.id, "incoming", "waiting")}
                            sx={{
                              borderRadius: "50%",
                              minWidth: "40px",
                              minHeight: "40px",
                              padding: "0",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            🕒
                          </Button>
                        </Tooltip>
                      )}

                      {/* Start Treatment for Waiting Patients */}
                      {tableType === "waiting" && (
                        <Tooltip title="Start Treatment">
                          <Button
                            variant="outlined"
                            onClick={() => startTreatment(patient.id)}
                            sx={{
                              borderRadius: "50%",
                              minWidth: "40px",
                              minHeight: "40px",
                              padding: "0",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            🩺
                          </Button>
                        </Tooltip>
                      )}

                      {/* Complete Treatment for Current Patients */}
                      {tableType === "current" && (
                        <Tooltip title="Complete Treatment">
                          <Button
                            variant="outlined"
                            onClick={() => completeTreatment(patient.id)}
                            sx={{
                              borderRadius: "50%",
                              minWidth: "40px",
                              minHeight: "40px",
                              padding: "0",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            ✔️
                          </Button>
                        </Tooltip>
                      )}

                      {/* Cancel Reservation for Non-Current Patients */}
                      {tableType !== "current" && (
                        <Tooltip title="Cancel Reservation">
                          <Button
                            variant="outlined"
                            color="secondary"
                            onClick={() => cancelReservation(patient.id)}
                            sx={{
                              borderRadius: "50%",
                              minWidth: "40px",
                              minHeight: "40px",
                              padding: "0",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            ❌
                          </Button>
                        </Tooltip>
                      )}
                    </Stack>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow sx={{ height: 90 }}>
                <TableCell colSpan={6} align="center">
                  No patients available. Drag and drop here to add patients.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
);