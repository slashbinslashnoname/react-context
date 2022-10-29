import React, { useCallback } from 'react'
import { Container, Grid, Button, Typography, Link } from '@mui/material'
import PokerTable from '../../molecules/PokerTable/PokerTable'

function Rooms({ media }) {
  return (
    <>
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item xs={6} md={6}>
            <h1>Cashgame</h1>
            <PokerTable
              rows={[
                {
                  id: 1,
                  name: 'Alpha 1',
                  gametype: 'No limit',
                  blinds: '2000/4000',
                  turntime: 'Regular (12s)',
                  seats: '10/10',
                },
                {
                  id: 2,
                  name: 'Alpha 2',
                  gametype: 'No limit',
                  blinds: '2000/4000',
                  turntime: 'Regular (12s)',
                  seats: '10/10',
                },
                {
                  id: 3,
                  name: 'Alpha 3',
                  gametype: 'No limit',
                  blinds: '2000/4000',
                  turntime: 'Regular (12s)',
                  seats: '10/10',
                },
              ]}
              headCells={[
                {
                  id: 'name',
                  numeric: false,
                  disablePadding: true,
                  label: 'Name',
                },
                {
                  id: 'gametype',
                  numeric: true,
                  disablePadding: false,
                  label: 'Game Type',
                },
                {
                  id: 'blinds',
                  numeric: true,
                  disablePadding: false,
                  label: 'Blinds',
                },
                {
                  id: 'turntime',
                  numeric: true,
                  disablePadding: false,
                  label: 'Turn Time',
                },
                {
                  id: 'seats',
                  numeric: true,
                  disablePadding: false,
                  label: 'Seats',
                },
              ]}
            />
          </Grid>
          <Grid item xs={6} md={6}>
            <h1>Tournaments</h1>

            <PokerTable
              rows={[
                {
                  name: 'Nom1',
                  gametype: 'No limit',
                  blinds: '100/200',
                  turntime: 'Regular (12s)',
                  seats: '10/10',
                },
              ]}
              headCells={[
                {
                  id: 'name',
                  numeric: false,
                  disablePadding: true,
                  label: 'Name',
                },
                {
                  id: 'gametype',
                  numeric: true,
                  disablePadding: false,
                  label: 'Game Type',
                },
                {
                  id: 'blinds',
                  numeric: true,
                  disablePadding: false,
                  label: 'Blinds',
                },
                {
                  id: 'turntime',
                  numeric: true,
                  disablePadding: false,
                  label: 'Turn Time',
                },
                {
                  id: 'seats',
                  numeric: true,
                  disablePadding: false,
                  label: 'Seats',
                },
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
export default Rooms
