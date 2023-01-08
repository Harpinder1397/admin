import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { LoginAPI } from '../../api/auth';
import {
  TextInput,
  PasswordInput,
  Paper,
  Container,
  Button,
} from '@mantine/core';

const Login = () => {

  const history = useHistory()
  const [formData, setFormData] = useState();

  const handleLogin = async () => {
    if(formData?.mobileNumber && formData?.password){
      const payload = formData;
      const loginResponse = await LoginAPI(payload);
      if (loginResponse) {
        history.push('/admin/manage-states')
      } else {
        alert('Incorrect userName or password')
      }
    } else {
      alert('Please fill all mandatory fields')
    }
  };

  return (
    <Container size={420} my={40}>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput
          type="number"
          label="Mobile Number"
          placeholder="Your Mobile Number"
          required
          value={formData?.mobileNumber}
          onChange={(event) => setFormData({...formData, mobileNumber: event.currentTarget.value})}
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          required
          mt="md"
          value={formData?.password}
          onChange={(event) => setFormData({...formData, password: event.currentTarget.value})}
        />
        <Button
          fullWidth
          mt="xl"
          onClick={()=>handleLogin()}
        >
          Sign in
        </Button>
      </Paper>
    </Container>
  );
}

export default Login;