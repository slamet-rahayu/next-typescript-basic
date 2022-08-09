/* eslint-disable react/jsx-props-no-spreading */
import { Box, Button, Container, TextField } from '@mui/material';
import Link from 'next/link';
import { ReactElement } from 'react';
import { ToastContainer } from 'react-toastify';
import useLogin from 'hooks/pages/login';

export default function LoginPart(): ReactElement {
  const { errors, submit, register } = useLogin();
  return (
    <Container maxWidth="lg">
      <Box sx={{ height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box component="form" sx={{ maxWidth: '50%' }} onSubmit={submit}>
          <TextField
            sx={{ width: '100%', mb: 2 }}
            size="small"
            label="email"
            type="email"
            {...register('identifier')}
            error={!!errors.identifier}
            helperText={errors.identifier?.message}
            autoComplete="email"
          />
          <TextField
            sx={{ width: '100%', mb: 2 }}
            size="small"
            label="password"
            type="password"
            autoComplete="current-password"
            {...register('password')}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <Button sx={{ mr: 1 }} type="submit" variant="contained">
            Login
          </Button>
          <Link href="/register">Register</Link>
        </Box>
      </Box>
      <ToastContainer />
    </Container>
  );
}
